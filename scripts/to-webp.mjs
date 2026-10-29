// One-off: convert src/assets photos to WebP and delete the originals
// (anything under src/assets is picked up by import.meta.glob and would be bundled).
// Run with: node scripts/to-webp.mjs
import { readdir, unlink } from 'node:fs/promises'
import { extname, join } from 'node:path'
import sharp from 'sharp'

const SRC = 'src/assets'
const MAX_WIDTH = 1920
const QUALITY = 80

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else yield path
  }
}

for await (const file of walk(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue
  const out = file.slice(0, -extname(file).length) + '.webp'
  const info = await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out)

  await unlink(file)
  console.log(`${file} -> ${out} (${(info.size / 1024).toFixed(0)} KB)`)
}
