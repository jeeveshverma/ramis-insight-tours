// Mobile menu must cover the page whether opened at the top or after scrolling. Reports the open panel's box.
import { chromium, devices } from 'playwright';
const BASE = process.env.QA_BASE || 'http://127.0.0.1:4321/ramis-insight-tours';
const out = process.argv[2];
const b = await chromium.launch(); const p = await b.newPage({ ...devices['iPhone 13'] });
for (const [path, y, name] of [['/', 0, 'top'], ['/', 900, 'scrolled'], ['/ar/', 900, 'ar-scrolled'], ['/tours/grand-egypt/', 1500, 'tour-scrolled']]) {
  await p.goto(BASE + path, { waitUntil: 'networkidle' }); await p.evaluate((y) => window.scrollTo(0, y), y); await p.waitForTimeout(400);
  await p.click('#burger'); await p.waitForTimeout(300);
  const r = await p.evaluate(() => { const n = document.getElementById('nav').getBoundingClientRect(); const h = document.getElementById('hdr'); return { panelTop: Math.round(n.top), panelHeight: Math.round(n.height), viewport: innerHeight, hdrBackdrop: getComputedStyle(h).backdropFilter, glass: getComputedStyle(h, "::before").backdropFilter }; });
  console.log(name.padEnd(14), JSON.stringify(r), r.panelHeight >= r.viewport - 80 ? 'OK' : 'BROKEN');
  await p.screenshot({ path: `${out}/${name}.png` });
  await p.click('#burger');
}
await b.close();
