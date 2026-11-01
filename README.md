# World of Coasters · v0.6 "Grand Stations"

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

| | Desktop | Mobile | Meta Quest 3 |
|---|---|---|---|
| Walk | WASD / arrows (Shift = faster) | on-screen stick | left stick |
| Look | drag | drag | your head |
| Turn | drag | drag | right stick (snap) |
| Enter portal | walk in or click it | walk in / Portal Directory | walk in, or point + trigger |
| Board / Dispatch | B | button | A |
| Pause | P | button | A (while riding) |
| Change seat | V | button | X |
| Exit train (docked) | X | button | X (while docked) |
| Scenic / Arcade | M | button | Y |
| Fire | Space or click | tap | trigger |
| Duck | hold C | hold Duck | duck for real |
| Night Ride (once unlocked) | N | button | n/a |
| Back to Grand Central | H / Esc | button | B |
| Intensity / Horizon lock | Comfort panel | Comfort panel | left / right stick click |

## Deploy (GitHub Pages)

1. Upload `index.html`, `README.md` and the `assets/` folder to the repo root.
2. Settings → Pages → Deploy from branch → `main` / root.
3. On Quest 3, open the `https://…github.io/<repo>/` URL in Quest Browser and press **ENTER VR**.

Local test: `python3 -m http.server 4173` in this folder, then open http://localhost:4173.

## Known limits
- Tested in a headless desktop browser (all worlds, ride flow, arcade). **Not yet tested on a physical Quest 3.** Start on the **High** graphics setting there.
- Couldn't verify the Higgsfield backdrops end to end. The sky shader was tested with a local image, but the CDN images couldn't be fetched from the build workspace. If the CDN refuses cross-site loading, put the images in `assets/skies/` as described above.
- People are modeled in code. For photoreal humans, the next step is rigged character models (Mixamo / Ready Player Me).
- Walking has simple boundaries; guests don't steer around you.
- Bloom and the cinematic grade are desktop/phone only; in a VR headset the scene renders without those passes.
- Party play was tested between two browser windows on a local test server, not between two real devices on the internet. Home networks with strict firewalls can occasionally block direct connections.
