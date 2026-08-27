/* ============================================================================
   plan-render.js — rasterises architectural PDF sheets for the plan viewer.

   Rendering a sheet is the expensive part (tens of thousands of vector ops),
   cropping it is nearly free — so a page is rendered ONCE and every named view
   on it is sliced out of that single raster, then the big canvas is released.
   A deeper render of one crop is available on demand for heavy zoom.

     renderViews(pdfUrl, page, views)          -> { [view.id]: objectURL }
     renderCrop(pdfUrl, page, rect, targetW)   -> objectURL

   `rect` is in PDF points with a top-left origin: { x, y, w, h }.
   ========================================================================= */

const PDFJS = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.82/build/pdf.min.mjs';
const WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.82/build/pdf.worker.min.mjs';
const BASE_SCALE = 6;      // sheet raster resolution — 6x ≈ 430 dpi on letter
const MAX_CROP_W = 3000;   // no single derived image wider than this
const MAX_PIXELS = 36e6;

let libPromise = null;
const docs = new Map();
const sheets = new Map();
const crops = new Map();

function lib() {
  if (!libPromise) {
    libPromise = import(/* @vite-ignore */ PDFJS).then((m) => {
      m.GlobalWorkerOptions.workerSrc = WORKER;
      return m;
    });
  }
  return libPromise;
}

function doc(url) {
  if (!docs.has(url)) docs.set(url, lib().then((m) => m.getDocument(url).promise));
  return docs.get(url);
}

function canvasOf(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  const ctx = c.getContext('2d', { alpha: false });
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  return c;
}

const toURL = (canvas) =>
  new Promise((res) => canvas.toBlob((b) => res(URL.createObjectURL(b)), 'image/png'));

function sheet(pdfUrl, pageNum) {
  const key = `${pdfUrl}|${pageNum}`;
  if (!sheets.has(key)) {
    sheets.set(key, (async () => {
      const pdf = await doc(pdfUrl);
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: BASE_SCALE });
      const canvas = canvasOf(viewport.width, viewport.height);
      await page.render({ canvasContext: canvas.getContext('2d'), viewport, annotationMode: 0 }).promise;
      return canvas;
    })());
  }
  return sheets.get(key);
}

/* Renders one sheet and slices every view on it out of that raster. */
export async function renderViews(pdfUrl, pageNum, views) {
  const canvas = await sheet(pdfUrl, pageNum);
  const out = {};
  for (const view of views) {
    const { rect } = view;
    const shrink = Math.min(1, MAX_CROP_W / (rect.w * BASE_SCALE));
    const w = rect.w * BASE_SCALE * shrink;
    const h = rect.h * BASE_SCALE * shrink;
    const dest = canvasOf(w, h);
    dest.getContext('2d').drawImage(
      canvas,
      rect.x * BASE_SCALE, rect.y * BASE_SCALE, rect.w * BASE_SCALE, rect.h * BASE_SCALE,
      0, 0, dest.width, dest.height
    );
    out[view.id] = await toURL(dest);
    dest.width = dest.height = 0;
  }
  // The full sheet raster is large; drop it once its crops exist.
  canvas.width = canvas.height = 0;
  sheets.delete(`${pdfUrl}|${pageNum}`);
  return out;
}

/* A single crop rendered straight from the vectors, for deep zoom. */
export function renderCrop(pdfUrl, pageNum, rect, targetWidth = 3600) {
  const key = `${pdfUrl}|${pageNum}|${rect.x},${rect.y},${rect.w},${rect.h}|${targetWidth}`;
  if (crops.has(key)) return crops.get(key);
  const job = (async () => {
    const pdf = await doc(pdfUrl);
    const page = await pdf.getPage(pageNum);
    let scale = targetWidth / rect.w;
    const area = rect.w * rect.h * scale * scale;
    if (area > MAX_PIXELS) scale *= Math.sqrt(MAX_PIXELS / area);
    const viewport = page.getViewport({ scale });
    const canvas = canvasOf(rect.w * scale, rect.h * scale);
    await page.render({
      canvasContext: canvas.getContext('2d'),
      viewport,
      transform: [1, 0, 0, 1, -rect.x * scale, -rect.y * scale],
      annotationMode: 0
    }).promise;
    const url = await toURL(canvas);
    canvas.width = canvas.height = 0;
    return url;
  })().catch((err) => { crops.delete(key); throw err; });
  crops.set(key, job);
  return job;
}
