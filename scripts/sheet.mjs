// Tile page screenshots into review sheets (default 2x3 of 720x450; pass "W,H,cols,rows" for phone shots), labelled.
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const [, , root, out] = process.argv;
const all = fs.readdirSync(root).sort().flatMap((d) => fs.readdirSync(path.join(root, d)).filter((f) => f.endsWith('.png')).sort().map((f) => [d, path.join(root, d, f)]));
const [W, H, C, R] = (process.argv[4] || "720,450,2,3").split(",").map(Number); const PER = C * R;
for (let s = 0; s * PER < all.length; s++) {
  const batch = all.slice(s * PER, (s + 1) * PER); const comps = [];
  for (let i = 0; i < batch.length; i++) {
    const [d, f] = batch[i]; const x = (i % C) * W, y = Math.floor(i / C) * (H + 26);
    comps.push({ input: await sharp(f).resize(W, H, { fit: process.argv[4] ? 'contain' : 'cover', position: 'top', background: '#222' }).toBuffer(), left: x, top: y + 26 });
    comps.push({ input: Buffer.from(`<svg width="${W}" height="26"><rect width="100%" height="100%" fill="#000"/><text x="8" y="18" font-family="monospace" font-size="15" fill="#fff">${d} / ${path.basename(f)}</text></svg>`), left: x, top: y });
  }
  await sharp({ create: { width: W * C, height: (H + 26) * Math.ceil(batch.length / C), channels: 3, background: '#222' } }).composite(comps).jpeg({ quality: 78 }).toFile(`${out}-${String(s + 1).padStart(2, '0')}.jpg`);
}
console.log(Math.ceil(all.length / PER), 'sheets');
