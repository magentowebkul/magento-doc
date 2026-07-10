import { spawnSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist");

// Assets are served with immutable cache headers, but rewriteProductUrls mutates
// chunk contents AFTER webpack computes filename hashes. Salting the hashes with
// this script's own content forces new filenames whenever the rewrite logic
// changes, so edge/browser caches can never serve a stale chunk under an old name.
const hashSalt = crypto
  .createHash("sha256")
  .update(fs.readFileSync(fileURLToPath(import.meta.url)))
  .digest("hex")
  .slice(0, 12);

const products = [
  {
    slug: "hyva-jewelry-theme",
    dir: "hyva-jewelry-theme",
    title: "Magento 2 Hyvä Jewellery Theme",
    description: "User guide for installing, activating, and managing the Hyvä Jewellery Theme.",
  },
];

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
    ...options,
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed`);
  }
};

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const rewriteProductUrls = (dir, slug) => {
  const starters = [
    "images",
    "screenshots",
    "homepage",
    "chrome",
    "pages",
    "help",
    "introduction",
    "requirements",
    "installation",
    "activation",
    "favicon",
    "manifest.webmanifest",
    "apple-touch-icon",
    "service-worker",
    "workbox",
    "404",
  ].join("|");

  const rewriteFile = (file) => {
    const ext = path.extname(file);
    if (![".html", ".js", ".css", ".webmanifest"].includes(ext)) return;

    const current = fs.readFileSync(file, "utf8");
    const rewritten = current.replace(
      new RegExp(`\\b(href|src)=(["'])/(?!${slug}/|/|#|https?:|mailto:|tel:)(${starters})(?=[/."'?)#])`, "g"),
      `$1=$2/${slug}/$3`
    );

    if (rewritten !== current) {
      fs.writeFileSync(file, rewritten);
    }
  };

  const walk = (entry) => {
    const stats = fs.statSync(entry);
    if (stats.isDirectory()) {
      for (const child of fs.readdirSync(entry)) {
        walk(path.join(entry, child));
      }
      return;
    }
    rewriteFile(entry);
  };

  walk(dir);
};

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const product of products) {
  const productDir = path.join(root, product.dir);
  const productDist = path.join(productDir, "docs", ".vuepress", "dist");
  const targetDir = path.join(outDir, product.slug);

  run("npm", ["ci", "--prefix", product.dir]);
  run("npm", ["run", "build", "--prefix", product.dir], {
    env: {
      ...process.env,
      VUEPRESS_BASE: `/${product.slug}/`,
      VUEPRESS_HASH_SALT: hashSalt,
    },
  });

  fs.cpSync(productDist, targetDir, { recursive: true });
  rewriteProductUrls(targetDir, product.slug);
}

const cards = products
  .map(
    (product) => `
          <a class="card" role="listitem" href="/${product.slug}/">
            <span class="eyebrow">User Guide</span>
            <strong>${escapeHtml(product.title)}</strong>
            <span class="card-desc">${escapeHtml(product.description)}</span>
            <span class="card-cta">Read the guide &rarr;</span>
          </a>`
  )
  .join("");

const homepageDir = path.join(root, "homepage");
const homepageStyleHash = crypto
  .createHash("sha256")
  .update(fs.readFileSync(path.join(homepageDir, "styles.css")))
  .digest("hex")
  .slice(0, 10);
const homepage = fs
  .readFileSync(path.join(homepageDir, "index.html"), "utf8")
  .replace("<!-- PRODUCT_CARDS -->", cards.trim())
  .replace('href="/styles.css"', `href="/styles.css?v=${homepageStyleHash}"`);

fs.writeFileSync(path.join(outDir, "index.html"), homepage);
for (const file of fs.readdirSync(homepageDir)) {
  if (file === "index.html") continue;
  fs.cpSync(path.join(homepageDir, file), path.join(outDir, file), { recursive: true });
}

fs.writeFileSync(
  path.join(outDir, "404.html"),
  `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found</title><body style="font-family:system-ui,sans-serif;margin:48px"><h1>Page not found</h1><p><a href="/">Go to Magento documentation</a></p></body></html>`
);

const productHeaderRules = products
  .map(
    (product) => `
/${product.slug}/assets/*
  Cache-Control: public, max-age=31536000, immutable

/${product.slug}/service-worker*
  ! Cache-Control
  Cache-Control: no-cache
`
  )
  .join("");

fs.writeFileSync(
  path.join(outDir, "_headers"),
  `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Cache-Control: public, max-age=86400
${productHeaderRules}`
);
