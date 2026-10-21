// Design review captures with motion ON: scrolls a page in steps, forcing reveals, and saves viewport shots.
//   node scripts/look.mjs <path> <width> <outdir> [maxShots] [device]
import { chromium, devices } from 'playwright';
const BASE = process.env.QA_BASE || 'http://127.0.0.1:4321/ramis-insight-tours';
const [, , path, width, out, max = '12', dev] = process.argv;
const b = await chromium.launch();
const ctx = dev ? await b.newContext({ ...devices[dev] }) : await b.newContext({ viewport: { width: Number(width), height: 900 } });
const p = await ctx.newPage();
await p.goto(BASE + path, { waitUntil: 'networkidle' }); await p.waitForTimeout(2600);
const H = await p.evaluate(() => document.documentElement.scrollHeight); const vh = p.viewportSize().height;
let n = 0;
for (let y = 0; y < H && n < Number(max); y += Math.round(vh * 0.92)) {
  await p.evaluate((y) => window.scrollTo(0, y), y); await p.waitForTimeout(500);
  await p.evaluate(() => document.querySelectorAll('.rv,.stagger,.ribbon,[data-egypt-map],.amark,.arch-wrap').forEach((e) => { const r = e.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) e.classList.add('in'); }));
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `${out}/${String(n).padStart(2, '0')}.png` }); n++;
}
console.log(`${n} shots`); await b.close();
