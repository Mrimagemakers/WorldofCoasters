# OpenArt park materials

The paving loader uses `materials.json`. Until a reviewed image is installed, the park retains its procedural brick material. No generated image is bundled in this PR yet.

Generate the manifest prompt with OpenArt, Nano Banana 2.1, text2image, one 1K square image. Record the returned history/resource IDs here when available. Inspect the result for visible seams in a 3-by-3 repeat and remove baked lighting before acceptance. This is a color texture, not a normal map or a 3D model.

After review, save an optimized image as `assets/openart/park-paving.webp` (or PNG/JPG), ideally under 500 KB. Set `paving.file` to that exact repository-relative path and status to `reviewed`. Record source history ID, resource ID, prompt, date and any processing. Do not rely on a temporary provider CDN URL at runtime.

The loader accepts only local files in this directory. It uses sRGB, repeat wrapping and capped anisotropy. It retains the current material if loading fails and discards late results after a world has been disposed. The procedural normal map is removed on success because it describes different brick joints.
