# Pushing updates to GitHub

Your clone is already set up. To publish a change:

1. Download the zip from the chat and unzip it.
2. Copy its contents into your cloned repo folder, overwriting when asked.
3. In GitHub Desktop: type a short summary, **Commit to main**, then **Push origin**.
4. Vercel redeploys on its own within a minute or two.

## One-time cleanup: move everything to the top level

Right now the site lives in a subfolder called `font fix`, which is why
Vercel needs its Root Directory set. To fix that permanently:

1. Open your cloned repo folder.
2. Delete the `font fix` folder entirely.
3. Copy the contents of the new unzipped folder into the top level, so
   `index.dc.html` sits directly in the repo folder.
4. Commit **Move site to repo root** and push.
5. In Vercel: **Settings → Build and Deployment → Root Directory**, clear the
   field so it's empty, save, and redeploy.

## Pages

| File | URL after deploy |
| --- | --- |
| `index.dc.html` | `/` |
| `services.dc.html` | `/services` |
| `adu-models.dc.html` | `/adu-models` |
| `adu-model.dc.html` | `/adu-model?model=...` |
| `catalog.dc.html` | `/catalog` |
| `about.dc.html` | `/about` |
| `contact.dc.html` | `/contact` |

Supporting files: `site.css` (fonts, colors, reset), `support.js` (runtime),
`adu-models.js` (model data), `plan-render.js` (floor plans), `assets/`
(images, 3D models, plans, PDFs, video), `vercel.json` (URL mapping, caching).

## Later, if you want it faster

- `assets/hero-drone.mp4` (18 MB) and
  `assets/models/spanish-style-studio-walkthrough.mp4` (17 MB) dominate the
  first load. Moving them to Vercel Blob or a CDN would help most.
- `assets/models/*-exterior.png` are full-resolution renders, ~2 MB each.
  Converting them to JPEG saves about 25 MB with no visible difference.
