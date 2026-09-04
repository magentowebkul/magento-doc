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
  {
    slug: "google-tag-manager",
    dir: "google-tag-manager",
    title: "Magento 2 Google Tag Manager",
    description: "User guide for installing, configuring, and managing the Google Tag Manager extension — events, destinations, consent, and container export.",
  },
  {
    slug: "canva-connector",
    dir: "canva-connector",
    title: "Magento 2 Canva Connector",
    description: "User guide for installing, configuring, and using the Canva Connector extension — design product graphics in Canva and export directly to the Magento 2 product gallery.",
  },
  {
    slug: "ai-chatbot",
    dir: "aichatbot",
    title: "Magento 2 AI Chatbot using Open Source LLM",
    description: "Magento 2 AI Chatbot using Open Source LLM adds a smart virtual assistant to your Adobe Commerce store.",
  },
  {
    slug: "instagram-feeds",
    dir: "instagram-feeds",
    title: "Magento 2 Instagram Feeds",
    description: "User guide for installing, configuring, and running the Instagram Feeds extension — Instagram sync, moderation, grid and slider feeds, shoppable product tagging, and revenue analytics.",
  },
  {
    slug: "restrict-vendor-product",
    dir: "restrict-vendor-product",
    title: "Magento 2 Marketplace Restrict Vendor Product",
    description: "User guide for installing, configuring, and running the Restrict Vendor Product extension.",
  },
  {
    slug: "store-optimization-doc",
    dir: "store-optimization-doc",
    title: "Magento 2 Store Optimization",
    description: "User guide for installing, configuring, and running the Store Optimization extension.",
  },
  {
    slug: "marketplace-adyen-payment-gateway",
    dir: "marketplace-adyen-payment-gateway",
    title: "Magento 2 Marketplace Adyen Payment Gateway",
    description: "User guide for installing, configuring, and running the Marketplace Adyen Payment Gateway extension.",
  },
  {
    slug: "multishopify-mage-connect",
    dir: "multishopify-mage-connect",
    title: "Magento 2 Multi Shopify Connector",
    description: "User guide for installing, configuring, and running the Multi Shopify Connector extension.",
  },
  {
    slug: "ai-review-translator",
    dir: "aireviewtranslator",
    title: "Magento 2 OpenAI Review Translator",
    description: "Magento 2 AI Review Translator facilitates the admin to translate the customer’s product reviews.",
  },
  {
    slug: "show-seller-on-category",
    dir: "show-seller-on-category",
    title: "Magento 2 Marketplace Show Seller on Category",
    description: "User guide for installing, configuring, and running the Show Seller on Category extension.",
  },
  {
    slug: "email-marketing-doc",
    dir: "email-marketing-doc",
    title: "Magento 2 Email Marketing",
    description: "User guide for installing, configuring, and running the Email Marketing extension.",
  },
  {
    slug: "amazon-magento-connect",
    dir: "amazon-magento-connect",
    title: "Magento 2 Amazon Connector",
    description: "User guide for installing, configuring, and running the Amazon Connector extension.",
  }
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
    "features",
    "usage",
    "configuration"
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
  fs.rmSync(path.join(targetDir, "_headers"), { force: true });
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
  ! Cache-Control
  Cache-Control: public, max-age=31536000, immutable

/${product.slug}/service-worker.js
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
  Cache-Control: no-cache

/trust/*
  ! Cache-Control
  Cache-Control: public, max-age=31536000, immutable

/webkul-logo.png
  ! Cache-Control
  Cache-Control: public, max-age=31536000, immutable

/styles.css
  ! Cache-Control
  Cache-Control: public, max-age=31536000, immutable
${productHeaderRules}`
);
