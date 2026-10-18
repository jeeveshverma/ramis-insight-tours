// Checks the three animations in a real Chromium (preview server running): traveller on the tour map, the rooftop
// light show, page transitions.   node scripts/animtest.mjs <outdir>
import { chromium } from 'playwright';
const BASE = process.env.QA_BASE || 'http://127.0.0.1:4321/ramis-insight-tours';
const out = process.argv[2];
const b = await chromium.launch();
const errs = [];
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
await ctx.addInitScript(() => addEventListener('pagereveal', (e) => { window.__vt = !!e.viewTransition; }));
const p = await ctx.newPage(); p.on('pageerror', (e) => errs.push(String(e)));

// 1. traveller
await p.goto(BASE + '/tours/grand-egypt/', { waitUntil: 'networkidle' });
await p.evaluate(() => document.querySelectorAll('.rv,.stagger,[data-egypt-map]').forEach((e) => e.classList.add('in')));
const n = await p.locator('.day').count(); const log = [];
for (const k of [0, 3, 4, 5, 6, 9, 10, 11, 12, 15]) {
  if (k >= n) continue;
  await p.locator('.day').nth(k).evaluate((el) => window.scrollTo(0, el.getBoundingClientRect().top + scrollY - innerHeight * 0.45 + el.offsetHeight * 0.5));
  await p.waitForTimeout(250);
  log.push(await p.evaluate((k) => { const t = document.querySelector('[data-trav]'); const m = t.querySelector('.trav-ico.on')?.dataset.mode; const tr = t.getAttribute('transform').replace(/translate\(|\)/g, '').split(' ').map((v) => Math.round(+v)).join(','); const place = document.querySelectorAll('.day')[k].dataset.place; return `day${k + 1} ${place.padEnd(10)} -> ${m.padEnd(5)} @ ${tr}`; }, k));
  if (k === 5 || k === 11) await p.locator('.itin-map').screenshot({ path: `${out}/trav-day${k + 1}.png` });
}
// 2. light show
await p.goto(BASE + '/stays/pyramids-temple-guest-house/', { waitUntil: 'networkidle' });
await p.evaluate(() => document.querySelectorAll('.rv,.stagger').forEach((e) => e.classList.add('in')));
const ls = p.locator('.ls-wrap').first(); await ls.scrollIntoViewIfNeeded();
await p.waitForTimeout(1200); await ls.screenshot({ path: `${out}/lightshow-a.png` });
await p.waitForTimeout(3200); await ls.screenshot({ path: `${out}/lightshow-b.png` });
// 3. view transition: tours list -> tour page
await p.goto(BASE + '/tours/', { waitUntil: 'networkidle' });
const card = p.locator('.tcard').nth(2); await card.scrollIntoViewIfNeeded();
await card.click();
for (let i = 0; i < 5; i++) { await p.waitForTimeout(110); await p.screenshot({ path: `${out}/vt-${i}.png` }).catch(() => {}); }
await p.waitForURL(/pharaohs-trail/); await p.waitForTimeout(900);
const vt = await p.evaluate(() => window.__vt);
console.log(log.join('\n')); console.log('view transition ran:', vt, '| errors:', errs);
await b.close();
