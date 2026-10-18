// Photo/text split cards must never let the photo overrun the text: checks every tour's guest-house card,
// the Stays cards and the Journal feature at several desktop widths.
import { chromium } from 'playwright';
const BASE = process.env.QA_BASE || 'http://127.0.0.1:4321/ramis-insight-tours';
const tours = ['cairo-essentials', 'cairo-and-the-coast', 'pharaohs-trail', 'nile-to-red-sea', 'grand-egypt', 'sacred-egypt', 'the-complete-egypt'];
const checks = [...tours.map((t) => [`/tours/${t}/`, '.stay-gh']), ['/stays/', '.scard'], ['/journal/', '.pitem-big'], ['/ar/tours/grand-egypt/', '.stay-gh']];
const b = await chromium.launch(); let bad = 0, n = 0;
for (const w of [960, 1100, 1250, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  for (const [path, sel] of checks) {
    await p.goto(BASE + path, { waitUntil: 'load' });
    const r = await p.evaluate((sel) => [...document.querySelectorAll(sel)].map((c) => {
      const ph = c.querySelector('.photo').getBoundingClientRect(); const body = [...c.children].find((k) => !k.contains(c.querySelector('.photo'))).getBoundingClientRect();
      const rtl = document.dir === 'rtl'; const overlap = rtl ? body.right - ph.left : ph.right - body.left;
      return { overlap: Math.round(overlap), photoW: Math.round(ph.width), cardW: Math.round(c.getBoundingClientRect().width) };
    }), sel);
    for (const x of r) { n++; if (x.overlap > 1) { bad++; console.log('OVERLAP', w, path, JSON.stringify(x)); } }
  }
  await p.close();
}
console.log(`${n} split cards checked across 4 widths, ${bad} overlapping`);
await b.close();
