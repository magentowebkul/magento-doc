#!/usr/bin/env node
// @ts-check
/**
 * Master-class documentation screenshot pipeline — Jimp edition.
 *
 * Pipeline per raw PNG:
 *
 *   1. sharp.trim()     — find the tight content bounding box at low
 *                         threshold (won't eat into headings).
 *   2. sharp.extend()   — add a 16 px safety buffer in the WP bg colour
 *                         so content never touches the frame edge.
 *   3. sharp.resize()   — scale to target content width with Lanczos3
 *                         (sharpest downscale kernel).
 *   4. Jimp compose     — create a fresh neutral canvas, drop the
 *                         resized content in the centre with proportional
 *                         padding. Jimp is purpose-built for this kind
 *                         of image editing.
 *   5. sharp.webp()     — encode the final canvas as HD WebP.
 *
 * Design tokens:
 *   • Neutral  #f5f5f7   background
 *   • Padding  72 – 140  px (4.5 % of the shorter side, clamped)
 *   • No border, no border-radius, no shadow — pure rectangular framing
 *   • HD quality 95 / 92, effort 6
 *
 * Usage:  node scripts/process-screenshots.mjs
 */

import Jimp from 'jimp';
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const manifest = require('./screenshots.manifest.json');

const SRC = path.resolve(__dirname, '..', 'artifacts');
const OUT = path.resolve(__dirname, '..', '..', 'docs', '.vuepress', 'public', 'images');
await fs.mkdir(OUT, { recursive: true });

// ─── Design tokens ─────────────────────────────────────────────────────────
const DESIGN = {
  bg: '#f5f5f7',              // neutral canvas
  wpBg: '#f0f0f1',             // WP admin body bg (used by trim + buffer)
  paddingRatio: 0.018,         // 1.8 % of the shorter side (tight)
  paddingMin: 24,
  paddingMax: 56,
  trimThreshold: 10,
  trimBufferPx: 8,
};

// Jimp wants an integer ARGB colour
const BG_INT = Jimp.cssColorToHex(DESIGN.bg);

function paddingFor(w, h) {
  const shorter = Math.min(w, h);
  const raw = Math.round(shorter * DESIGN.paddingRatio);
  return Math.max(DESIGN.paddingMin, Math.min(DESIGN.paddingMax, raw));
}

/**
 * Compose one master-class screenshot.
 * @param {string} srcPath
 * @param {string} outPath
 * @param {number} targetW
 * @param {number} quality
 */
async function compose(srcPath, outPath, targetW, quality) {
  // 1. Auto-trim uniform WP bg — low threshold so we never eat into text
  const trimmedBuf = await sharp(srcPath)
    .trim({
      background: DESIGN.wpBg,
      threshold: DESIGN.trimThreshold,
    })
    .png()
    .toBuffer()
    .catch(async () =>
      sharp(srcPath).trim({ threshold: DESIGN.trimThreshold }).png().toBuffer()
    );

  // 2. Add a safety buffer in the SAME WP bg colour so there is breathing
  //    room baked into the content itself — even if the final frame colour
  //    differs, the inside of the card never touches text edges.
  const safeBuf = await sharp(trimmedBuf)
    .extend({
      top: DESIGN.trimBufferPx,
      bottom: DESIGN.trimBufferPx,
      left: DESIGN.trimBufferPx,
      right: DESIGN.trimBufferPx,
      background: DESIGN.wpBg,
    })
    .png()
    .toBuffer();

  const safeMeta = await sharp(safeBuf).metadata();
  const rawW = safeMeta.width ?? 0;
  const rawH = safeMeta.height ?? 0;

  // 3. Two-pass sizing so the final image always equals targetW exactly
  const estScale = Math.min(1, (targetW - DESIGN.paddingMin * 2) / rawW);
  const estW = rawW * estScale;
  const estH = rawH * estScale;
  const pad = paddingFor(estW, estH);

  const maxContentW = targetW - pad * 2;
  const scale = Math.min(1, maxContentW / rawW);
  const contentW = Math.round(rawW * scale);
  const contentH = Math.round(rawH * scale);
  const canvasW = contentW + pad * 2;
  const canvasH = contentH + pad * 2;

  // 4. Resize the content with sharp's Lanczos3 for razor sharpness
  const resizedBuf = await sharp(safeBuf)
    .resize({
      width: contentW,
      kernel: 'lanczos3',
      withoutEnlargement: false,
    })
    .png({ compressionLevel: 0 })
    .toBuffer();

  // 5. Use Jimp to composite onto a fresh canvas
  const contentImg = await Jimp.read(resizedBuf);
  const canvas = new Jimp(canvasW, canvasH, BG_INT);
  canvas.composite(contentImg, pad, pad);

  // 6. Export from Jimp as PNG, then re-encode as HD WebP via sharp
  const pngBuf = await canvas.getBufferAsync(Jimp.MIME_PNG);

  await sharp(pngBuf)
    .webp({
      quality,
      effort: 6,
      smartSubsample: true,
      alphaQuality: 100,
    })
    .toFile(outPath);
}

// ─── Runner ────────────────────────────────────────────────────────────────

const formats = manifest.defaults.formats;
let processed = 0;
let skipped = 0;
let totalBytes = 0;

console.log(`\n📂 Source: ${SRC}`);
console.log(`📂 Output: ${OUT}`);
console.log(
  `🎨 Style:  Jimp · neutral ${DESIGN.bg} · ${DESIGN.paddingMin}-${DESIGN.paddingMax}px pad (${Math.round(
    DESIGN.paddingRatio * 100
  )}%) · ${DESIGN.trimBufferPx}px safety buffer · no border · no radius · no shadow\n`
);

for (const shot of manifest.screenshots) {
  const srcPath = path.join(SRC, `${shot.id}.png`);

  try {
    await fs.access(srcPath);
  } catch {
    console.warn(`⚠  missing PNG: ${shot.id}.png  (skipping)`);
    skipped += 1;
    continue;
  }

  for (const fmt of formats) {
    const outName = `${shot.id}${fmt.suffix}.webp`;
    const outPath = path.join(OUT, outName);

    try {
      await compose(srcPath, outPath, fmt.width, fmt.quality);
      const { size } = await fs.stat(outPath);
      totalBytes += size;
      console.log(`✅ ${outName.padEnd(38)} ${(size / 1024).toFixed(1).padStart(7)} KB`);
    } catch (err) {
      console.error(`❌ ${outName} — ${err.message}`);
    }
  }

  processed += 1;
}

console.log(
  `\n🎉 Done. Processed ${processed}  ·  Skipped ${skipped}  ·  Total ${(totalBytes / 1024 / 1024).toFixed(2)} MB\n`
);

if (processed === 0) {
  console.error('❌ No screenshots were processed. Did the capture step run?');
  process.exit(1);
}
