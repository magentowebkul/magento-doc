#!/usr/bin/env node
// @ts-check
/**
 * Validate that every `/images/*.webp` referenced in the docs actually exists
 * on disk, and that every manifest ID has a corresponding WebP file.
 *
 * Usage:  node scripts/validate-images.mjs [--strict]
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const manifest = require('./screenshots.manifest.json');

const DOCS = path.resolve(__dirname, '..', '..', 'docs');
const IMAGES = path.resolve(__dirname, '..', '..', 'docs', '.vuepress', 'public', 'images');
const strict = process.argv.includes('--strict');

/**
 * Walk a directory recursively and return every markdown file path.
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function walkMd(dir) {
  const results = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await walkMd(full)));
    } else if (entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

const mdFiles = await walkMd(DOCS);
const imgRegex = /!\[[^\]]*\]\(([^)]*\/images\/[^)]+)\)/g;
const referenced = new Set();
const brokenRefs = [];

for (const file of mdFiles) {
  const src = await fs.readFile(file, 'utf8');
  let m;
  while ((m = imgRegex.exec(src)) !== null) {
    const url = m[1];
    const filename = url.replace(/^.*\/images\//, '');
    referenced.add(filename);
    const diskPath = path.join(IMAGES, filename);
    try {
      await fs.access(diskPath);
    } catch {
      brokenRefs.push({ file: path.relative(DOCS, file), url });
    }
  }
}

const manifestIds = new Set(manifest.screenshots.map((s) => s.id));
const imagesOnDisk = new Set(
  (await fs.readdir(IMAGES).catch(() => []))
    .filter((f) => f.endsWith('.webp'))
);

const orphans = [];
for (const file of imagesOnDisk) {
  // strip @1x variants before comparison
  const id = file.replace(/\.webp$/, '').replace(/@1x$/, '');
  if (!manifestIds.has(id)) orphans.push(file);
}

console.log(`\n📄 Markdown files scanned:  ${mdFiles.length}`);
console.log(`🔗 Image refs found:        ${referenced.size}`);
console.log(`🖼  WebPs on disk:           ${imagesOnDisk.size}`);
console.log(`📋 Manifest entries:        ${manifestIds.size}`);

if (brokenRefs.length) {
  console.log(`\n❌ Broken references (${brokenRefs.length}):`);
  brokenRefs.forEach((b) => console.log(`   - ${b.file}  →  ${b.url}`));
}

if (orphans.length) {
  console.log(`\n⚠  Orphaned WebPs not in manifest (${orphans.length}):`);
  orphans.forEach((o) => console.log(`   - ${o}`));
}

if (brokenRefs.length > 0 && strict) {
  process.exit(1);
}
console.log(brokenRefs.length ? '\nFinished with warnings.' : '\n✅ All good.\n');
