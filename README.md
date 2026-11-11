# World of Coasters · v0.9 "Funland Park"

## Proposed builder and material update

- Redo restores undone track edits; a new edit clears the redo history.
- Zoom and pan buttons support phone editing and controller menu navigation. The builder panel scrolls on short screens, and scrolling the panel no longer zooms the scene.
- Interrupted touches, switching apps, or losing focus clear held movement and duck input.
- Funland paths can load a reviewed local OpenArt color texture through `assets/openart/materials.json`. Generation and visual review are pending; procedural paving remains active until then. See `assets/openart/README.md`.

Checks: `node tests/builder.test.cjs` and `node tests/materials.test.cjs`. These exercise history/camera logic and asynchronous material loading; physical phone, gamepad and Quest checks remain necessary before release. Existing WebXR riding behavior is retained; the builder still runs outside VR.

PenGame Publishing · Three.js r160 + WebXR · single `index.html`, no build step.

## What's in this build

**Grand Central hub.** A twilight plaza with a gold compass floor, a rotating armillary globe, a showcase coaster circling the park, your two key-art billboards, a cinematic Higgsfield sky, and **10 portals**. Nine are open. Walk into a glowing portal to travel.

**Nine rideable worlds**

| # | World | Ride profile and landmarks |
|---|-------|----------------------------|
| 01 | The Great Wall Run (China) | 72 m chain lift, ~123 km/h drop through a jade gate, runs beside the Wall and its watchtowers, tunnel under a mountain, pagoda station |
| 02 | Petra Canyon Rush (Jordan) | Launch from the plaza in front of the rose-red **Treasury facade**, through a deep sandstone canyon and a long lantern-lit cavern |
| 03 | Rio Sky Rider (Brazil) | 94 m lift above the bay, flyby of the **Redeemer statue** on its peak, Sugarloaf rising from the sea, beach run past palms and city towers |
| 04 | Machu Picchu Cloud Rider (Peru) | Lift into a sea of clouds, drops past the **terraced Inca citadel** and Huayna Picchu, llamas grazing below |
| 05 | Mayan Temple Escape (Mexico) | Jungle coaster around a **step pyramid**, through a hidden-chamber tunnel, past a waterfall with a misty plunge pool |
| 06 | Roman Empire Rush (Italy) | Launch, top hat, ride along an **aqueduct**, then straight **through the Colosseum arena** and a zero-g roll over a terracotta city with a Pantheon |
| 07 | Taj Mahal Sky Voyage (India) | Gentle sunrise glide around the **Taj Mahal** (onion dome, minarets), its reflecting pool, cypress gardens and the red-sandstone gateway |
| 08 | Galactic Gravity (Outer Space) | Launch to 158 km/h through an orbital ring, 108 m top hat, barrel rolls, asteroid field, 0.56 g low gravity |
| 09 | Atlantis Deep Dive (Ocean World) | Sunset pier, 100 m dive through the surface, Gate of Atlantis, glowing sunken city, hydro-jet launch |

Portal 10, **The Ultimate World Tour**, is still marked Coming Soon.

## v0.9 changes

**Funland Park: a full amusement park.** A new 11th portal in Grand Central opens Funland Park, a walkable theme park beside its own coaster station:
- **Rides you can get on:** walk up to a ride's entrance and press **🎡 Ride** (A / ✕ on a controller, A on Quest). The six rides are the Sky Wheel (Ferris wheel), the Grand Carousel, Freefall 52 (drop tower), the Wave Swinger, the Spinning Teacups and the Jolly Roger (pirate ship). Each lasts about a minute, or press **Leave Ride** (B / ○) to get off early.
- **Show ride:** the Bumper Cars run on their own.
- **Food and games:** stands sell pretzels, cotton candy, ice cream, burgers, lemonade, popcorn, churros and funnel cake, and there are four game booths (Ring Toss, Balloon Darts, Duck Pond, High Striker).
- **The park itself:**
  - a "FUNLAND PARK" entrance arch
  - a fountain at the center
  - a ring path with spokes to every ride
  - lamp posts with bunting
  - benches, a balloon cart and trees
- **Guests:** they stroll the paths, wait at ride entrances and ride the carousel, wheel, swings, teacups, drop tower and pirate ship.

**Coaster Builder.** On the Funland Park platform, press **🛠 Coaster Builder** (or View / Share on a controller) to design your own coaster from 16 pieces:
- **Pieces:** straight, gentle and sharp left and right turns, climb, dive, lift hill, big drop, airtime hill, bunny hops, left and right helix, barrel roll, launch and brakes.
- **Track sizing:** pieces automatically size themselves to the train's speed, so turns widen and drops lengthen when you're going fast and forces stay rideable. A gray automatic return run always brings the train back into the station.
- **Live 3D preview:** drag to orbit, scroll or Q/E to zoom, and WASD to pan.
- **Ride stats:** length, ride time, top speed, height, G-forces, airtime, inversions, and Excitement, Intensity and Nausea ratings.
- **Warnings:** you get one if the train would run out of speed, or if a section goes over 5 G.
- **Placement checks:** pieces are refused if they'd hit the ground, run into the park or station, leave the build area or crash into your own track. A message says why.
- **Templates and saving:**
  - three starter templates: Family, Thrill and Launch
  - Undo, Clear and up to 12 saved designs
- **Ride it:** **▶ Ride it!** makes the design the park's coaster and puts you in the front seat.
- **Share link:** copies a URL that opens the game with your coaster loaded. In a Ride with Friends party, everyone rides the leader's design.
- **In VR:** building works on a computer or phone. In VR you ride what you built.

## v0.8 changes

**Stylized park guests, based on the character sheets.** Every guest and staff member got a cartoon-style redesign:
- **Painted faces:** 16 hand-painted faces (eyes with highlights, brows, lashes, freckles, blush, stubble, smile lines) on a single texture atlas, so the whole crowd still renders in one draw call per body part.
- **Clothing patterns:** 16 printable tops: stripes, tie-dye, "PARK" and "Pretzel & Coasters" graphic tees, plaid, floral dress, polo, hoodie with drawstrings, ringer tee, jersey, safari jacket, reflective staff vest and the navy staff shirt.
- **New hair and gear:** curly hair, pigtails, side-swept hair, a high ponytail, backwards caps, a butterfly headband, overalls, an apron, lanyards, crossbody bags, neck cameras, binoculars and socks.
- **Things in hand:** guests carry soda cups, cotton candy, ice cream cones, tablets and balloons; the vendor carries a pretzel tray.
- **Named characters in Grand Central:** Marcus Daniels with Sam and Maya, Sarah Jin with Lily, Ben Carter with Benny, Sarah Jenners, the Pretzello's vendor at a new pretzel kiosk, Park Guide Sarah, and Leo the squirrel mascot waving by the entrance. Walk within about 6 m to see a name tag.
- The scanned "Michelle" close-up model from v0.7 is now **off by default** because it clashed with the cartoon look. Turn it on under **Comfort → Realistic close-up guests (beta)**.

**Game controllers.** Xbox, PlayStation (DualSense / DualShock) and any standard Bluetooth or USB gamepad work on desktop, phone and Quest:
| Button | Action |
|---|---|
| Left stick (click = sprint) | Walk |
| Right stick | Look (snap turn in VR) |
| A / ✕ | Start, board, dispatch, resume, enter the portal you're facing |
| B / ○ | Back: exit the train or return to Grand Central; closes menus |
| X / □ | Change seat |
| Y / △ | Scenic / Arcade mode |
| RT / R2 or RB / R1 | Fire (arcade) |
| LT / L2 (hold) | Duck the gates |
| LB / L1 | Night ride |
| Menu / Options | Pause the ride, or open Comfort |
| View / Share | Portal Directory (hub) or Grand Central |
| R3 | Horizon lock |
| D-pad + A | Move through menus and pick |

The on-screen help switches to controller glyphs when a pad is connected, and the controller rumbles on dispatch and shots.

**Your Porch War characters are in the park, without the monsters.** Seven friendly characters from the Porch War art pack are in `assets/characters/`: five guests (a man, three women and a boy), the hoodie guy and a security officer. The phantom, demon, zombies, monster and red-hooded knight were removed. The models were shrunk to about 1.3 MB each (1024 px WebP textures, about 8–24k triangles) so they load on Quest 3.
- **More people from the same templates:** the five guest models are reused as new characters. Each copy gets its own outfit colors (top, undershirt, pants or shorts, shoes and hair are recolored separately, keeping fabric folds and prints), its own skin tone, height and build. 77 placements in all: 29 in Grand Central (strollers on both walkways and six pairs chatting between the portals) and 4–8 on each station platform.
- Their Porch War fight clips twisted the limbs, so the game ignores them. Each frame it starts from the rig's rest pose and swings the arms and legs on their natural hinges: knees bend backward during the step, elbows stay soft, arms swing opposite the legs and the body bobs slightly. Characters far from you update less often to save frame time.
- Ultra shows up to 26 per world, High 12 and Performance 5.
- Placement, height, outfit colors and skin tone all live in `assets/sketchfab/manifest.json` (`outfit` takes `[hue, saturation, brightness]` from 0 to 1 per garment, and `skin` from 1 down to about 0.45).
- These are your own files from Porch War. If any came from a marketplace or Mixamo, check its license before a commercial release.

**Drop-in Sketchfab models.** `assets/sketchfab/` now takes any `.glb` (Sketchfab downloads included). List each file in `assets/sketchfab/manifest.json` with where it goes, its height and its animation, and the game places, scales and animates it. Characters can stand and idle or stroll the plaza. Credits from the manifest appear under **Comfort → 3D model credits**. See `assets/sketchfab/README.md`.

## v0.7 changes

**Realistic NPCs up close.** The nearest park guests, staff and riders now become a fully textured, realistically proportioned 3D human: the "Michelle" sample character from Three.js, rigged with the Mixamo skeleton.
- **Smart swapping:** the people closest to you (10 on Ultra, 6 on High, 3 on Performance) switch to the realistic model. Everyone farther away stays the lightweight crowd, so frame rates hold up on Quest.
- **Real motion:** walk, idle and talking animations from the Mixamo animation set. The game converts them on load from the source skeleton into Michelle's bone frames, so poses come out natural.
- **Variety:** a recolor shader changes each person's outfit hue, saturation and pants color, and varies skin tone, so the copies don't all look identical.
- **Riders** sit with knees bent and raise their arms on drops. Staff look and wave.
- **Files:** the models live in `assets/models/` (`michelle.glb` 3.2 MB, `anims.glb` 0.9 MB) and load in the background after you enter the park.

**Licensing note:** Michelle and the animation set come from Adobe Mixamo by way of the three.js example repository. Mixamo lets you use them inside games, including commercially, but not resell or redistribute the raw model files as standalone assets. Hosting them in this game's repository to run the game is the same thing the three.js examples do. Before any app-store or commercial launch, swap in characters you own (for example from Ready Player Me, or Higgsfield image-to-3D at about 35 credits per rigged character). The code accepts any Mixamo-rigged GLB.

## v0.6 changes

**Nine themed train stations.** Every station is rebuilt in its world's architecture:

| World | Station |
|---|---|
| Great Wall | Red-lacquer pagoda with double upturned tile roofs, gold column brackets, red paper lanterns, guardian lion statues |
| Galactic Gravity | Glass-tube spaceport with glowing arched ribs, LED floor lines and a spinning hologram |
| Atlantis | Nautical pier with striped sail awnings, rope railings, lifebuoys, crates and barrels on pilings |
| Petra | Rose-sandstone hall with stepped Nabataean cornices, woven textile hangings and rugs |
| Rio | White wave-shaped canopy on slanted columns over a Copacabana wave-mosaic deck |
| Machu Picchu | Thatched Inca hall on fitted-stone pillars with niched walls and Andean textiles |
| Mayan Temple | Palapa with thatched roofs, glyph-carved stone frieze and torches |
| Rome | Marble colonnade with a terracotta pediment roof, mosaic floor, busts and balustrade |
| Taj Mahal | Red sandstone and white marble with cusped arches, chhatri domes, lattice (jali) screen and inlaid floor |

Every station also has:
- **Platform air gates** that slide open while the train is docked and close at dispatch, with green and red lights.
- A **queue maze** with posts and ropes.
- A **live info board** showing top speed, height, track length, ride time, your relics and best score, plus the boarding status counting down to dispatch.
- Benches, potted plants, lamp posts and a tactile safety strip at the platform edge.

**Game-wide graphics fixes.**
- **Device-aware defaults:** phones and Quest start on High, computers on Ultra (your own choice is still remembered).
- **Auto-resolution:** if the frame rate drops below 40 fps, the game lowers resolution until it's smooth again and raises it when there's headroom.
- **Safer rendering on phones:** falls back automatically on graphics chips that can't handle the high-precision post-processing.
- **Exposure tuned per world**, so bright worlds like Petra, Rome and the Taj no longer look washed out.
- **Leaf-textured trees:** foliage now has leaf texture with cut-out edges instead of solid blobs.
- **Terrain:** steep slopes use stretch-free rock texture with more contrast, so cliffs no longer look smeared.
- The world title and pop-up messages no longer overlap. Messages sit lower, and the title clears when the ride starts.
- Film grain reduced.

## v0.5 changes

**Ride with Friends (party invites).** Tap **👥 Ride with Friends** in Grand Central (or 👥 Friends at a station), enter your rider name, and **Create party**. You get a 6-letter code plus an invite link to copy or share. Friends open the link (or type the code) in any browser, including Quest Browser, and join.
- Up to 4 riders. The **leader** picks the world; friends travel along through the portal automatically.
- When the leader boards, everyone boards the **same train**: leader in car 1, friends in cars 2-4. Friends ride the leader's train in sync, through every drop.
- Friends appear as full avatars with floating name tags, walking the plaza and seated in the train with arms up on the drops.
- Optional **voice chat** (🎙) so you can scream together.
- It connects players directly, browser to browser, through PeerJS's free public matchmaking service, so there's no server for you to run on GitHub Pages. That free service is best-effort. If it's ever down, parties can be pointed at your own PeerJS server with `?peerhost=…&peerport=…&peerpath=…`.
- Party features need the real website (GitHub Pages). They don't work inside the claude.ai preview, which blocks outside connections.

**More realistic people (shader pass).**
- Skin shader with soft subsurface scattering (warm light bleeding through skin), a fresnel rim, and micro-pore normal detail.
- Hair shader with strand texture and a moving highlight band.
- Glossy clear-coated eyes that catch reflections.
- Knit and woven fabric textures on shirts, twill denim on pants, sheen on cloth.
- Muscle-shaped arms and legs (biceps, forearms, quads, calves), hands with four fingers and a thumb, and beards on some men.

**Environment shaders.**
- Terrain textures now sample at two scales with a large-scale blend between them, so the ground no longer shows an obvious repeating pattern.
- A per-world cinematic color grade (saturation, contrast, warm/cool split toning, vignette and film grain) on desktop and phone.

## v0.4 changes

**Higgsfield art direction.** Each of the 10 locations has a cinematic panoramic backdrop generated with Higgsfield (Soul Location model). It wraps the horizon behind the 3D world, the fog color adapts to match it, and the sky reflections on paint and chrome pick it up. The images load from Higgsfield's image CDN. To host them yourself, save each one as `assets/skies/<world>.jpg` (`hub, wall, petra, rio, machu, maya, rome, taj, space, ocean`); local files take priority. If an image can't load, the hand-built sky still shows.

**Themed pop-up targets (Arcade mode).** 26 targets per lap rise up as the train approaches, bob and spin, then sink after you pass. Each world has its own set:

| World | Targets | Flying (250) | Gold bonus (500) |
|---|---|---|---|
| Great Wall | red paper lanterns | dragon kites | gold coins |
| Petra | clay urns, brass lanterns | falcons | gold coins |
| Rio | footballs, carnival masks | toucans | gold coins |
| Machu Picchu | Inca pots | condors | sun discs |
| Mayan Temple | jade masks | blue morpho butterflies | gold idols |
| Rome | legion shields, amphorae | golden eagles | laurel wreaths |
| Taj Mahal | lotus lamps, emeralds | kites | golden domes |
| Galactic Gravity | satellites, meteors | UFOs | star crystals |
| Atlantis | jellyfish, pufferfish, treasure chests | pufferfish | pearls |

Hits explode in a burst with a floating score; the combo multiplier goes up to ×5. Duck gates are still there.

**More realistic people.** Sculpted faces with eyes (whites, irises, pupils), brows, nose, lips and ears. Male and female body shapes with height and build variety. Sleeves, shorts and skirts, sneakers with soles, eight hairstyles (crop, fade, long, ponytail, bun, afro, braids, bald), plus sun hats, caps, sunglasses, backpacks and phones. Fabric and skin get separate materials. Guests shift their weight, check phones, cross their arms, chat in small groups, and kids hold a parent's hand. Riders lean back and lift their arms on drops.

**Phone fixes.** The "VR NOT SUPPORTED" badge no longer covers the buttons; the ENTER VR button only appears on devices that can run VR. On short or landscape phone screens, the title screen now shrinks and scrolls so the ENTER button is always reachable.

## Systems
- **Ride physics.** Speed comes from an energy simulation of each track (gravity, friction, air/water drag, chain lifts, launches, brakes). Banking is computed from lateral forces.
- **World Explorer.** Every world starts on its station platform with a plaza to walk.
- **Ride POV.** Front / Middle / Back seat.
- **Relics.** 3 per world (27 total). Look straight at one to collect it. All 3 in a world unlock **Night Ride**. All 27 unlock the **Golden Train**.
- **VR comfort.** Intensity (Gentle / Standard / Thrill), horizon lock, comfort vignette, snap turn, instant exit (B).
- **Graphics tiers.** Ultra / High / Performance: shadows, bloom (desktop), scenery and crowd density.
- **Procedural audio.** Each world has its own ambience: wind and chimes, desert scale, pan flute, jungle birds, surf, city bells, a sitar-like drone for the Taj, space drones and underwater sounds.

## Controls

| | Desktop | Mobile | Meta Quest 3 | Gamepad (Xbox / PS) |
|---|---|---|---|---|
| Walk | WASD / arrows (Shift = faster) | on-screen stick | left stick | left stick (L3 = faster) |
| Look | drag | drag | your head | right stick |
| Turn | drag | drag | right stick (snap) | right stick |
| Enter portal | walk in or click it | walk in / Portal Directory | walk in, or point + trigger | walk in, or face it + A/✕ |
| Board / Dispatch | B | button | A | A / ✕ |
| Pause | P | button | A (while riding) | Menu / Options |
| Change seat | V | button | X | X / □ |
| Exit train (docked) | X | button | X (while docked) | B / ○ |
| Scenic / Arcade | M | button | Y | Y / △ |
| Fire | Space or click | tap | trigger | RT / R2 |
| Duck | hold C | hold Duck | duck for real | hold LT / L2 |
| Night Ride (once unlocked) | N | button | n/a | LB / L1 |
| Back to Grand Central | H / Esc | button | B | B / ○ or View / Share |
| Intensity / Horizon lock | Comfort panel | Comfort panel | left / right stick click | Comfort panel / R3 |

## Deploy (GitHub Pages)

1. Upload `index.html`, `README.md` and the `assets/` folder to the repo root.
2. Settings → Pages → Deploy from branch → `main` / root.
3. On Quest 3, open the `https://…github.io/<repo>/` URL in Quest Browser and press **ENTER VR**.

Local test: `python3 -m http.server 4173` in this folder, then open http://localhost:4173.

## Known limits
- Tested in a headless desktop browser (all worlds, ride flow, arcade). **Not yet tested on a physical Quest 3.** Start on the **High** graphics setting there.
- Couldn't verify the Higgsfield backdrops end to end. The sky shader was tested with a local image, but the CDN images couldn't be fetched from the build workspace. If the CDN refuses cross-site loading, put the images in `assets/skies/` as described above.
- Only women have a realistic model so far, since the free samples include just one civilian character. Men and children are still the code-built crowd, even up close. Adding more Mixamo-rigged GLBs to `assets/models/` will extend the realistic set.
- The sitting pose and the wave gesture weren't checked from every angle.
- Walking has simple boundaries; guests don't steer around you.
- Bloom and the cinematic grade are desktop/phone only; in a VR headset the scene renders without those passes.
- Party play was tested between two browser windows on a local test server, not between two real devices on the internet. Home networks with strict firewalls can occasionally block direct connections.
