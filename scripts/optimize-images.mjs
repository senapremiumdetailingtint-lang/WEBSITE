// One-off image optimizer. Run with: node scripts/optimize-images.mjs
// Compresses the AI/stock placeholders so the site passes Core Web Vitals.
// Re-run after dropping in your friend's real photos (same filenames).
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'public', 'images');

const jobs = [
  { file: 'hero.jpg', width: 1600, q: 70 },
  { file: 'tint.jpg', width: 1376, q: 72 },
  { file: 'detail-hand.jpg', width: 1100, q: 72 },
  { file: 'interior.jpg', width: 1100, q: 72 },
  { file: 'paint.jpg', width: 1100, q: 72 },
];

for (const { file, width, q } of jobs) {
  const path = join(dir, file);
  const out = await sharp(readFileSync(path))
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: q, mozjpeg: true })
    .toBuffer();
  writeFileSync(path, out);
  console.log(`${file}: ${(out.length / 1024).toFixed(0)} KB`);
}

// OG image: 1200x630 from hero.
const og = await sharp(readFileSync(join(dir, 'hero.jpg')))
  .resize({ width: 1200, height: 630, fit: 'cover' })
  .jpeg({ quality: 78, mozjpeg: true })
  .toBuffer();
writeFileSync(join(process.cwd(), 'public', 'og-image.jpg'), og);
console.log(`og-image.jpg: ${(og.length / 1024).toFixed(0)} KB`);

// Apple touch icon 180x180 from the SVG favicon.
const favSvg = readFileSync(join(process.cwd(), 'public', 'favicon.svg'));
const apple = await sharp(favSvg).resize(180, 180).png().toBuffer();
writeFileSync(join(process.cwd(), 'public', 'apple-touch-icon.png'), apple);
console.log(`apple-touch-icon.png: ${(apple.length / 1024).toFixed(0)} KB`);
