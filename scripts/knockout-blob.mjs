// Knock the baked purple "head" blob out of the headpat meme, leaving a clean
// transparent hole (purple + the enclosed white "L13E" text) so a CSS blob can
// show through from behind. Run once when the source art changes:
//   node scripts/knockout-blob.mjs
//
// Output: head-hole.png (repo root), copied into dist/ by the build.

import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(root, 'stevemc4.png')
const OUT = join(root, 'head-hole.png')

// Seed for the flood fill: inside the purple blob, below the white text.
const SEED = { x: 741, y: 600 }

const isPurple = (r, g, b) =>
  r > 70 && r < 165 && g < 75 && b > 95 && b < 175

async function main() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const idx = (x, y) => (y * width + x) * channels

  // 1) Flood-fill the purple blob from the seed.
  const inBlob = new Uint8Array(width * height)
  const stack = [[SEED.x, SEED.y]]
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return
    const p = y * width + x
    if (inBlob[p]) return
    const o = idx(x, y)
    if (!isPurple(data[o], data[o + 1], data[o + 2])) return
    inBlob[p] = 1
    stack.push([x, y])
  }
  while (stack.length) {
    const [x, y] = stack.pop()
    push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1)
  }

  let minX = width, minY = height, maxX = 0, maxY = 0
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (inBlob[y * width + x]) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }

  // 2) Fill holes in the purple mask: the white "L13E" text is fully enclosed by
  //    purple, so any non-purple pixel that CANNOT reach the image border without
  //    crossing purple is interior to the blob. Flood the complement of the mask
  //    from the border; whatever it can't reach = enclosed → clear it.
  const outside = new Uint8Array(width * height)
  const oStack = []
  const seedOut = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return
    const p = y * width + x
    if (outside[p] || inBlob[p]) return
    outside[p] = 1
    oStack.push([x, y])
  }
  for (let x = 0; x < width; x++) { seedOut(x, 0); seedOut(x, height - 1) }
  for (let y = 0; y < height; y++) { seedOut(0, y); seedOut(width - 1, y) }
  while (oStack.length) {
    const [x, y] = oStack.pop()
    seedOut(x + 1, y); seedOut(x - 1, y); seedOut(x, y + 1); seedOut(x, y - 1)
  }

  // 3) Clear = purple blob OR (enclosed, i.e. not purple and not reachable from
  //    the border). Enclosed pixels are the white letters trapped in the blob.
  const clear = new Uint8Array(width * height)
  let cleared = 0
  for (let i = 0; i < width * height; i++) {
    if (inBlob[i] || !outside[i]) { clear[i] = 1; cleared++ }
  }

  // 4) Feather: any kept pixel adjacent to a cleared pixel gets a soft alpha to
  //    kill the hard purple fringe.
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x
      if (clear[p]) { data[idx(x, y) + 3] = 0; continue }
      const edge =
        (x > 0 && clear[p - 1]) ||
        (x < width - 1 && clear[p + 1]) ||
        (y > 0 && clear[p - width]) ||
        (y < height - 1 && clear[p + width])
      if (edge) data[idx(x, y) + 3] = 90 // soft edge
    }
  }

  // Downscale to ~2.25× the 160px avatar with Lanczos3 so the browser doesn't do
  // a grainy shrink from the 1482px source. Feathered edges resample cleanly.
  const OUT_SIZE = 360
  await sharp(data, { raw: { width, height, channels } })
    .resize(OUT_SIZE, OUT_SIZE, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(OUT)

  console.log(
    `blob bbox x[${minX}..${maxX}] y[${minY}..${maxY}], cleared ${cleared} px ` +
    `(${((cleared / (width * height)) * 100).toFixed(1)}%) -> ${OUT} @ ${OUT_SIZE}px`
  )
}

main().catch((e) => { console.error(e); process.exit(1) })
