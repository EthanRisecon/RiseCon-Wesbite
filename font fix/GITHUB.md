# Getting the site onto GitHub, then live on Vercel

No terminal needed. GitHub Desktop is the easiest route for a folder this
size (about 100 files, including a couple of 18 MB videos).

---

## Step 1 — Download and unzip

Download the project zip from the chat and unzip it. You'll get a folder
containing `index.dc.html`, `assets/`, `vercel.json`, and the rest.

Delete these two folders if they're present — they're working files, not
part of the site:

- `uploads/`
- `.bundles/`

---

## Step 2 — Install GitHub Desktop

Get it at **desktop.github.com**, install it, and sign in with the same
GitHub account that owns `EthanRisecon/RiseCon-Wesbite`.

---

## Step 3 — Clone the empty repo

In GitHub Desktop: **File → Clone repository → GitHub.com tab**, pick
`EthanRisecon/RiseCon-Wesbite`, and choose where to put it on your computer.
Click **Clone**. You now have an empty folder on disk that's connected to
GitHub.

---

## Step 4 — Copy the site files in

Open the cloned folder (GitHub Desktop shows a "Show in Finder/Explorer"
button). Copy **everything from inside** the unzipped project folder into
the cloned folder.

Important: copy the *contents*, not the folder itself. When you're done, the
cloned folder should contain `index.dc.html` directly — not a subfolder that
contains it.

---

## Step 5 — Commit and push

Back in GitHub Desktop you'll see a long list of changed files. At the
bottom left:

1. Type a summary: `Initial site`
2. Click **Commit to main**
3. Click **Push origin** at the top

The push will take a few minutes — it's uploading about 100 MB. Refresh the
repo page on github.com and you should see all the files.

---

## Step 6 — Connect Vercel

A Vercel project named **risecon-website** already exists on your RiseCon
team, but the Git connection needs confirming:

1. Go to **vercel.com** → the `risecon-website` project → **Settings → Git**
2. Connect `EthanRisecon/RiseCon-Wesbite`
3. Go to **Deployments** and click **Redeploy**, or just make any small
   change and push again

If Vercel asks for build settings, choose **Other** / no framework and leave
the build command empty — this is plain static HTML with nothing to build.

From then on, every push to `main` deploys automatically.

---

## What's in the folder

| Path | What it is |
| --- | --- |
| `index.dc.html` | Homepage |
| `Services.dc.html` | Services |
| `ADU Models.dc.html` | ADU model gallery (13 models) |
| `ADU Model.dc.html` | ADU detail page, driven by `?model=` |
| `Catalog.dc.html` | Catalog download |
| `About.dc.html`, `Contact.dc.html` | About, Contact |
| `support.js` | Runtime the pages load |
| `adu-models.js`, `plan-render.js` | Model data, floor-plan rendering |
| `assets/` | Images, GLB models, floor plans, PDFs, video |
| `vercel.json` | Clean URLs (`/services`, `/catalog`) and asset caching |

## Later, if you want it faster

- `assets/hero-drone.mp4` (18 MB) and
  `assets/models/spanish-style-studio-walkthrough.mp4` (17 MB) dominate the
  first load. Moving them to Vercel Blob or a CDN would help most.
- `assets/models/*-exterior.png` are full-resolution renders, ~2 MB each.
  Converting them to JPEG saves about 25 MB with no visible difference.
