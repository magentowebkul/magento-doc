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
      <a class="card" href="/${product.slug}/">
        <span class="eyebrow">User Guide</span>
        <strong>${escapeHtml(product.title)}</strong>
        <span>${escapeHtml(product.description)}</span>
      </a>`
  )
  .join("");

fs.writeFileSync(
  path.join(outDir, "index.html"),
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Magento Documentation</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #fff;
      --text: #111;
      --muted: #666;
      --line: #e5e5e5;
      --hover: #f7f7f7;
      --accent: #006aff;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main {
      width: min(1060px, calc(100% - 40px));
      margin: 0 auto;
      padding: 72px 0;
    }
    .label {
      color: var(--accent);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    h1 {
      max-width: 760px;
      margin: 16px 0 14px;
      font-size: clamp(40px, 6vw, 72px);
      line-height: .95;
      letter-spacing: 0;
    }
    p {
      max-width: 680px;
      margin: 0;
      color: var(--muted);
      font-size: 18px;
      line-height: 1.65;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
      margin-top: 44px;
    }
    .card {
      display: grid;
      gap: 10px;
      min-height: 170px;
      padding: 24px;
      color: inherit;
      text-decoration: none;
      border: 1px solid var(--line);
      border-radius: 8px;
      transition: background .15s ease, border-color .15s ease;
    }
    .card:hover {
      background: var(--hover);
      border-color: #d4d4d4;
    }
    .card strong {
      font-size: 20px;
      line-height: 1.3;
    }
    .card span:last-child {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.5;
    }
    .eyebrow {
      color: var(--accent);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <main>
    <div class="label">Webkul Magento Docs</div>
    <h1>Magento product documentation</h1>
    <p>Select a product guide. Each product lives in its own folder path so more documentation can be added under this same domain.</p>
    <section class="grid" aria-label="Product documentation">
      ${cards}
    </section>
  </main>
</body>
</html>
`
);

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
