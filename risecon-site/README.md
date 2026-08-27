# RiseCon website

Plain static HTML — no build step. Deployed on Vercel from this folder.

## Publishing a change

1. Copy the updated files into this folder, overwriting.
2. GitHub Desktop: write a summary, **Commit to main**, **Push origin**.
3. Vercel redeploys automatically in a minute or two.

## Vercel setting

**Root Directory** must be `risecon-site` (Settings → Build and Deployment).
Framework Preset: **Other**. No build command, no output directory.

## Pages

| File | URL |
| --- | --- |
| `index.html` | `/` |
| `services.dc.html` | `/services` |
| `adu-models.dc.html` | `/adu-models` |
| `adu-model.dc.html` | `/adu-model?model=...` |
| `catalog.dc.html` | `/catalog` |
| `about.dc.html` | `/about` |
| `contact.dc.html` | `/contact` |

`index.html` and `index.dc.html` are the same homepage. Vercel serves
`index.html` at `/`; the `.dc.html` copy is what the design tool edits, so
both ship.

Supporting files: `site.css` (fonts, colors, page reset), `support.js`
(runtime), `adu-models.js` (all 13 ADU specs), `plan-render.js` (floor-plan
viewer), `assets/` (images, GLB models, plan PDFs, catalog PDF, video),
`vercel.json` (clean URLs and asset caching).

## Performance notes

- `assets/hero-drone.mp4` (18 MB) and
  `assets/models/spanish-style-studio-walkthrough.mp4` (17 MB) dominate first
  load. Moving them to Vercel Blob or a CDN is the biggest available win.
- `assets/models/*-exterior.png` are ~2 MB each. Converting to JPEG saves
  about 25 MB with no visible difference.
