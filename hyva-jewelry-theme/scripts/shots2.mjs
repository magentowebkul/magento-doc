import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "https://m2-jewelry-theme.wcdemo.webkul.com/";
const OUT = process.argv[2] || "docs/.vuepress/public/screenshots";
fs.mkdirSync(OUT, { recursive: true });
const log = (...a) => console.log(...a);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
page.setDefaultTimeout(30000);

async function shot(name, opts = {}) {
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: opts.full ?? false, ...opts });
  log("shot:", name);
}

await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

// ---------- Product page ----------
const productHref = await page.evaluate(() => {
  const as = Array.from(document.querySelectorAll("a[href]"));
  const cand = as
    .map((a) => ({ h: a.getAttribute("href"), t: (a.textContent || "").trim() }))
    .filter((x) => x.h && /product|\.html/i.test(x.h) && !x.h.endsWith("/") && !/sale|category|collection/i.test(x.h));
  return cand[0]?.h || null;
});
log("Product URL:", productHref);
if (productHref) {
  await page.goto(productHref, { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);
  await shot("product-full", { full: true });
  await shot("product-view");
}

// ---------- Mega menu ----------
await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
const menuSel = "header nav a, header .nav a, .nav-sections a, [data-action='navigation'] a";
let hovered = false;
for (const sel of ["header nav li.level-top > a", "header .navigation li > a", "nav li a", ".wk-mega a"]) {
  const el = page.locator(sel).first();
  if (await el.count()) {
    try {
      await el.scrollIntoViewIfNeeded();
      await el.hover({ timeout: 5000 });
      await page.waitForTimeout(2000);
      await shot("mega-menu");
      hovered = true;
      break;
    } catch (e) { log("hover fail", sel, e.message); }
  }
}
if (!hovered) log("no mega menu captured");

// ---------- Search ----------
await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
const searchBtn = page.locator("button[aria-label*='Search' i], a[aria-label*='Search' i], header form button, .search button, [data-action*='search' i]").first();
if (await searchBtn.count()) {
  try { await searchBtn.click({ timeout: 5000 }); await page.waitForTimeout(1200); await shot("search-focus"); }
  catch (e) { log("search click fail", e.message); }
} else {
  const input = page.locator("input[placeholder*='Search' i]").first();
  if (await input.count()) { await input.click(); await page.waitForTimeout(800); await shot("search-focus"); }
  else log("no search control found");
}

// ---------- Footer (scroll to bottom) ----------
await page.goto(BASE, { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1500);
await shot("footer");

// ---------- Cart ----------
try {
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const cartBtn = page.locator("a[href*='cart'], a[title*='Cart' i], header a[href*='checkout/cart']").first();
  if (await cartBtn.count()) {
    await cartBtn.click({ timeout: 6000 });
    await page.waitForTimeout(2000);
    await shot("cart-view");
  } else log("no cart link");
} catch (e) { log("cart fail", e.message); }

await browser.close();
log("DONE");
