import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "https://m2-jewelry-theme.wcdemo.webkul.com/";
const OUT = process.argv[2] || "docs/.vuepress/public/screenshots";
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(OUT + "/raw", { recursive: true });

const log = (...a) => console.log(...a);

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
page.setDefaultTimeout(30000);

async function shot(name, opts = {}) {
  const path = `${OUT}/${name}.png`;
  await page.screenshot({ path, fullPage: opts.full ?? false, ...opts });
  log("shot:", name);
}

// ---------- Homepage ----------
log("Fetching homepage...");
await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(2500); // hero autoplay / lazy
await shot("home-full", { full: true });
await shot("home-hero"); // viewport (top)

// discover menu links
const navLinks = await page.$$eval(
  "header a[href], nav a[href], .nav a[href]",
  (as) =>
    as
      .map((a) => ({ text: (a.textContent || "").trim(), href: a.getAttribute("href") }))
      .filter((x) => x.text && x.href && !x.href.startsWith("javascript") && !x.href.startsWith("#") && x.href.includes("/"))
      .slice(0, 40)
);
log("nav links:", JSON.stringify(navLinks.slice(0, 20), null, 2));

// ---------- Mega menu (hover first top menu) ----------
try {
  const topMenu = page.locator("header nav ul li > a, header .navigation a").first();
  if (await topMenu.count()) {
    await topMenu.hover();
    await page.waitForTimeout(1800);
    await shot("mega-menu");
  }
} catch (e) {
  log("mega menu hover failed:", e.message);
}

// ---------- Category page ----------
let categoryUrl = null;
for (const l of navLinks) {
  if (/\/(category|\.html|collections|rings|necklace|jewel|shop)/i.test(l.href)) {
    categoryUrl = l.href;
    break;
  }
}
if (!categoryUrl && navLinks.length) categoryUrl = navLinks[0].href;
if (categoryUrl) {
  log("Category URL:", categoryUrl);
  await page.goto(categoryUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await shot("category-full", { full: true });
  await shot("category-view");

  // find a product link
  const productHref = await page
    .$$eval("a[href]", (as) => {
      const cand = as
        .map((a) => a.getAttribute("href"))
        .filter((h) => h && /\/(product|\.html)/i.test(h) && !h.endsWith("/"));
      return cand[0] || null;
    })
    .catch(() => null);
  if (productHref) {
    log("Product URL:", productHref);
    await page.goto(productHref, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);
    await shot("product-full", { full: true });
    await shot("product-view");
  } else {
    log("no product link found on category page");
  }
}

// ---------- Footer ----------
try {
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  const footer = page.locator("footer");
  if (await footer.count()) {
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await shot("footer");
  }
} catch (e) {
  log("footer shot failed:", e.message);
}

// ---------- Search ----------
try {
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const searchInput = page.locator("input[type='search'], input[placeholder*='Search' i], header form input").first();
  if (await searchInput.count()) {
    await searchInput.click();
    await page.waitForTimeout(800);
    await shot("search-focus");
  }
} catch (e) {
  log("search shot failed:", e.message);
}

// extract some text content for documentation
const homeText = await page.goto(BASE, { waitUntil: "networkidle" }).then(() =>
  page.evaluate(() => ({
    title: document.title,
    h1: Array.from(document.querySelectorAll("h1")).map((h) => h.textContent.trim()).slice(0, 5),
    sections: Array.from(document.querySelectorAll("h2, h3")).map((h) => h.textContent.trim()).slice(0, 30),
  }))
);
fs.writeFileSync(OUT + "/raw/home-meta.json", JSON.stringify(homeText, null, 2));
log("home meta:", JSON.stringify(homeText, null, 2));

await browser.close();
log("DONE");
