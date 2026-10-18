// Checks the video features in a real (motion-allowed) browser.
import { chromium } from 'playwright';
const BASE = process.env.QA_BASE || 'http://127.0.0.1:4321/ramis-insight-tours';
const out = process.argv[2];
const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
const errs = [];
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage(); p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && errs.push(m.text().slice(0, 160)));
await p.goto(BASE + '/', { waitUntil: 'networkidle' }); await p.waitForTimeout(3500);
const hero = await p.evaluate(() => { const v = document.querySelector('[data-hero-video]'); return { on: v.classList.contains('on'), t: +v.currentTime.toFixed(1), paused: v.paused, src: v.currentSrc.split('/').pop() }; });
await p.screenshot({ path: `${out}/hero-video.png` });
// testimonial
await p.locator('.home-videos .vcard').first().scrollIntoViewIfNeeded(); await p.locator('.home-videos .vcard').first().click(); await p.waitForTimeout(3000);
const tv = await p.evaluate(() => { const v = document.querySelector('[data-vp-video]'); return { open: document.getElementById('vp').open, t: +v.currentTime.toFixed(1), paused: v.paused, w: v.videoWidth, src: v.currentSrc.split('/').pop(), title: document.querySelector('[data-vp-title]').textContent }; });
await p.screenshot({ path: `${out}/player.png` });
await p.keyboard.press('Escape'); await p.waitForTimeout(400);
const closed = await p.evaluate(() => ({ open: document.getElementById('vp').open, src: document.querySelector('[data-vp-video]').getAttribute('src') }));
// film chapter
await p.locator('.film-ch button').nth(2).click(); await p.waitForTimeout(3500);
const ch = await p.evaluate(() => { const v = document.querySelector('[data-vp-video]'); return { t: +v.currentTime.toFixed(1), src: v.currentSrc.split('/').pop() }; });
await ctx.close();
// reduced motion: hero must not load
const ctx2 = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const p2 = await ctx2.newPage(); await p2.goto(BASE + '/', { waitUntil: 'networkidle' }); await p2.waitForTimeout(1500);
const rm = await p2.evaluate(() => ({ src: document.querySelector('[data-hero-video]').getAttribute('src') }));
console.log(JSON.stringify({ hero, testimonial: tv, closed, chapter: ch, reducedMotion: rm, errs }, null, 1));
await b.close();
