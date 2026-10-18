import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const [,, dir, out] = process.argv;
const files = fs.readdirSync(dir).filter(f=>/\.(jpe?g|webp|png)$/i.test(f)).sort();
const W=360,H=270,COLS=4,PER=12;
for (let p=0; p*PER<files.length; p++){
  const batch=files.slice(p*PER,(p+1)*PER); const rows=Math.ceil(batch.length/COLS);
  const comps=[];
  for (let i=0;i<batch.length;i++){
    const f=batch[i]; const img=await sharp(path.join(dir,f)).resize(W,H-30,{fit:'contain',background:'#222'}).toBuffer();
    const label=Buffer.from(`<svg width="${W}" height="30"><rect width="100%" height="100%" fill="#000"/><text x="6" y="20" font-family="monospace" font-size="15" fill="#fff">${i+p*PER+1}. ${f.slice(0,8)}</text></svg>`);
    comps.push({input:img,left:(i%COLS)*W,top:Math.floor(i/COLS)*H},{input:label,left:(i%COLS)*W,top:Math.floor(i/COLS)*H+H-30});
  }
  await sharp({create:{width:W*COLS,height:H*rows,channels:3,background:'#111'}}).composite(comps).jpeg({quality:80}).toFile(`${out}-${p+1}.jpg`);
}
console.log('sheets', Math.ceil(files.length/PER));
