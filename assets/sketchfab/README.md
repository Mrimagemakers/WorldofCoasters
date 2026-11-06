# Imported models (Sketchfab or anywhere else)

Put `.glb` files in this folder and list them in `manifest.json`. The game loads them when you enter the matching world. Nothing else needs to change.

## Getting a model from Sketchfab

1. Sign in at sketchfab.com and open a model with a **Download 3D Model** button. Filter the search by **Downloadable** and a license you can use (CC Attribution or CC0 are the easy ones).
2. Pick the **glTF / GLB** download. If you get a `.zip` with `scene.gltf`, convert it to a single `.glb` with https://gltf.report (drag in the folder, then Export → GLB). Aim for under 5 MB per character so Quest 3 stays smooth.
3. Copy the `.glb` here (for example `assets/sketchfab/vendor.glb`).
4. Add an entry to `manifest.json`, commit and push. GitHub Pages updates in a minute or two.

## manifest.json fields

```json
{
  "models": [
    { "file": "vendor.glb", "kind": "npc", "world": "hub",
      "x": -9, "z": 16, "yaw": 1.4, "height": 1.75,
      "idle": "Idle",
      "credit": "Pretzel Vendor by ArtistName (CC-BY 4.0)",
      "url": "https://sketchfab.com/3d-models/..." },

    { "file": "tourist.glb", "kind": "npc", "world": "hub",
      "height": 1.7, "walk": "Walk", "wander": 14, "speed": 1.1 },

    { "file": "food-cart.glb", "kind": "prop", "world": ["wall", "rome"],
      "dx": -2, "dz": 4, "yaw": 0.5, "height": 2.2 }
  ]
}
```

| Field | Meaning |
|---|---|
| `file` | File name in this folder (or a path from the site root) |
| `kind` | `npc` (plays its animation) or `prop` (static) |
| `world` | `hub`, a world id (`wall`, `petra`, `rio`, `machu`, `maya`, `rome`, `taj`, `space`, `ocean`), a list of them, or `"*"` for everywhere |
| `x`, `z`, `yaw` | Position in metres and facing in radians (hub). The hub spawn point is `x 0, z 19`, facing the centre |
| `dx`, `dz` | In world stations: metres to the right of / in front of where you spawn on the platform. Leave out x/z in a station world and it defaults to 3 m in front of you, facing you |
| `height` | Scales the model to this height in metres (1.6–1.8 for adults, 1.1–1.3 for kids). Or use `scale` |
| `idle`, `walk` | Animation clip names (partial match is fine). Without them the first clip plays |
| `wander` | Hub only: walk a circle of this radius around the plaza (needs a walk clip). Keep it 11–18 to stay on the walkway |
| `credit`, `url` | Shown in **Comfort → 3D model credits**. CC Attribution licenses require this |

## License checklist

- **CC Attribution (CC-BY):** fine for this game, including commercially, as long as the credit line is filled in.
- **CC0:** no credit needed, but it's nice to add one.
- **CC-BY-NC (NonCommercial):** only while the game is free and has no ads or paid tiers.
- **CC-BY-ND (NoDerivatives):** don't convert, decimate or recolor it.
- **Standard / Editorial (paid store) licenses:** read the terms; editorial models can't be used in games.
