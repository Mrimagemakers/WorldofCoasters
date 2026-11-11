const {readFileSync}=require('node:fs');
const {runInNewContext}=require('node:vm');
const assert=require('node:assert/strict');
const html=readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const source=html.slice(html.indexOf('function applyParkPaving('),html.indexOf('function buildFunland('));
async function scenario(file,disposeEarly=false,reject=false){
 let disposed,loaded=0,oldMapsDisposed=0,newDisposed=0,callback;
 const mat={addEventListener(_,fn){disposed=fn;},map:{dispose(){oldMapsDisposed++;}},normalMap:{dispose(){oldMapsDisposed++;}},color:{set(v){this.value=v;}}};
 const texture={repeat:{set(x,y){this.value=[x,y];}},dispose(){newDisposed++;}};
 const ctx={fetch:async()=>{if(reject)throw Error('offline');return {ok:true,json:async()=>({paving:{file}})};},
 THREE:{SRGBColorSpace:'srgb',RepeatWrapping:'repeat',TextureLoader:class{load(_,fn){loaded++;callback=fn;}}},renderer:{capabilities:{getMaxAnisotropy:()=>16}}};
 runInNewContext(source,ctx);ctx.applyParkPaving(mat);
 await new Promise(resolve=>setImmediate(resolve));
 if(disposeEarly)disposed();
 if(callback)callback(texture);
 return {mat,texture,loaded,oldMapsDisposed,newDisposed};
}
(async()=>{
 const ok=await scenario('assets/openart/park-paving.webp');
 assert.equal(ok.mat.map,ok.texture);assert.equal(ok.oldMapsDisposed,2);
 assert.equal(ok.mat.normalMap,null);assert.equal(ok.texture.anisotropy,4);
 assert.equal(ok.texture.colorSpace,'srgb');assert.deepEqual(ok.texture.repeat.value,[14,14]);
 for(const file of [null,'https://example.com/image.png','assets/openart/../secret.png'])assert.equal((await scenario(file)).loaded,0);
 const late=await scenario('assets/openart/park-paving.webp',true);assert.equal(late.newDisposed,1);assert.equal(late.oldMapsDisposed,0);
 const offline=await scenario(null,false,true);assert.equal(offline.oldMapsDisposed,0);
 console.log('Material installation, local path restriction, fallback and late-load disposal passed.');
})().catch(error=>{console.error(error);process.exitCode=1;});
