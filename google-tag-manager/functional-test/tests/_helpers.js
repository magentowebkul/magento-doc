// @ts-check
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ARTIFACTS = path.join(__dirname, '..', 'artifacts');
fs.mkdirSync(ARTIFACTS, { recursive: true });

/**
 * Hide the Magento Admin chrome (top header, left menu, footer, notices) so a
 * screenshot shows ONLY the configuration content. Also reflows the content
 * area to full width.
 *
 * @param {import('@playwright/test').Page} page
 */
export async function hideMagentoChrome(page) {
  await page.addStyleTag({
    content: `
      /* Admin top header + user bar */
      .admin__header, header.page-header, .page-actions-buttons > .page-actions { }
      /* Left navigation */
      .admin__menu, #menu-magento-backend-stores, nav.admin__menu { display: none !important; }
      /* Footer */
      .admin__footer, footer.page-footer { display: none !important; }
      /* Global messages / nags */
      .messages, .message-system, .admin__data-grid-outer-wrap .message,
      .global-notice, .notification-global { display: none !important; }
      /* Reflow content to full width (menu removed) */
      .page-wrapper { margin-left: 0 !important; }
      .page-main-actions, .admin__page-nav { }
      body { padding: 0 !important; }
    `,
  });
}

/**
 * Replace real secrets in the DOM with fake demo values before capture so
 * published screenshots never leak real IDs / keys.
 *
 * Covers: GTM Container ID, Module License, GA4 Measurement ID, Google Ads
 * Conversion ID / Label, Meta Pixel ID, and the sGTM server URL.
 *
 * @param {import('@playwright/test').Page} page
 */
export async function maskSecrets(page) {
  await page.evaluate(() => {
    const FAKE = {
      container: 'GTM-XXXXXXX',
      license: 'DEMO-LICENSE-0000-0000-0000',
      measurement: 'G-XXXXXXXXXX',
      conversionId: 'AW-000000000',
      conversionLabel: 'AbC-D_efGhIjKl123',
      pixel: '000000000000000',
      server: 'https://sgtm.example.com',
    };

    document.querySelectorAll('input, textarea').forEach((el) => {
      const id = ((el.id || el.name || '') + '').toLowerCase();
      if (!id) return;
      let fake = null;
      if (id.includes('container_id')) fake = FAKE.container;
      else if (id.includes('verify_module_license') || id.includes('license')) fake = FAKE.license;
      else if (id.includes('measurement_id')) fake = FAKE.measurement;
      else if (id.includes('conversion_label')) fake = FAKE.conversionLabel;
      else if (id.includes('conversion_id')) fake = FAKE.conversionId;
      else if (id.includes('pixel_id') || id.includes('meta_pixel')) fake = FAKE.pixel;
      else if (id.includes('server_container_url')) fake = FAKE.server;
      if (fake != null) {
        try {
          /** @type {HTMLInputElement} */ (el).value = fake;
          el.setAttribute('value', fake);
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        } catch { /* ignore */ }
      }
    });
  });
}

/**
 * Hide unstable UI bits (carets, scrollbars, spinners) and wait for fonts so
 * every capture is diff-stable.
 *
 * @param {import('@playwright/test').Page} page
 */
export async function stabilize(page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after { caret-color: transparent !important; }
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      ::-webkit-scrollbar { display: none !important; }
      body { overflow-x: hidden !important; }
      .spinner, .admin__data-grid-loading-mask, [data-role="spinner"] { display: none !important; }
    `,
  });

  await page.emulateMedia({ reducedMotion: 'reduce' });

  try {
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    });
  } catch {
    /* fonts API unavailable — ignore */
  }

  await page.waitForTimeout(400);
}

/**
 * Draw a red highlight outline around one or more selectors.
 *
 * @param {import('@playwright/test').Page} page
 * @param {string[]} selectors
 */
export async function highlight(page, selectors) {
  await page.evaluate((sels) => {
    sels.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        /** @type {HTMLElement} */ (el).style.outline = '3px solid #ff2e63';
        /** @type {HTMLElement} */ (el).style.outlineOffset = '2px';
        /** @type {HTMLElement} */ (el).style.borderRadius = '4px';
        /** @type {HTMLElement} */ (el).style.boxShadow = '0 0 0 6px rgba(255, 46, 99, 0.18)';
      });
    });
  }, selectors);
}

/**
 * Find the first locator from a comma-separated fallback list that actually
 * exists in the DOM. Lets the manifest use resilient selectors that survive
 * Magento version differences (e.g. nested vs top-level group fieldset ids).
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} selectors comma-separated
 */
async function firstMatching(page, selectors) {
  const list = selectors.split(',').map((s) => s.trim()).filter(Boolean);
  for (const sel of list) {
    const loc = page.locator(sel).first();
    if (await loc.count() > 0) {
      return loc;
    }
  }
  return null;
}

/**
 * Capture a screenshot with UX-friendly framing.
 *
 * Supported `shot.type` values:
 *   - "content"  → hide admin chrome, capture the config content area.
 *   - "element"  → tight crop on a specific component (a config group fieldset).
 *                  Uses `shot.locator` (supports comma fallbacks).
 *   - "fullPage" → the whole scrolled page.
 *   - "hero"     → first-fold viewport only.
 *   - "range"    → clip from startSelector → endSelector.
 *
 * @param {import('@playwright/test').Page} page
 * @param {object} shot
 */
export async function capture(page, shot) {
  await stabilize(page);
  await maskSecrets(page);
  const type = shot.type || 'content';

  if (type !== 'fullPage') {
    await hideMagentoChrome(page);
    await page.waitForTimeout(200);
  }

  const outPath = path.join(ARTIFACTS, `${shot.id}.png`);

  if (type === 'fullPage') {
    await page.screenshot({ path: outPath, fullPage: true, type: 'png', animations: 'disabled', caret: 'hide' });
  } else if (type === 'hero') {
    await page.screenshot({ path: outPath, fullPage: false, type: 'png', animations: 'disabled', caret: 'hide' });
  } else if (type === 'content') {
    const loc =
      (await firstMatching(page, '.admin__page-content, .page-content, #anchor-content, .main, body')) ??
      page.locator('body').first();
    await loc.scrollIntoViewIfNeeded().catch(() => {});
    await loc.screenshot({ path: outPath, type: 'png', animations: 'disabled', caret: 'hide' });
  } else if (type === 'element' && shot.locator) {
    const loc = await firstMatching(page, shot.locator);
    if (!loc) throw new Error(`No element matched: ${shot.locator}`);
    await loc.waitFor({ state: 'visible', timeout: 20_000 });
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await loc.screenshot({ path: outPath, type: 'png', animations: 'disabled', caret: 'hide' });
  } else if (type === 'range' && shot.startSelector) {
    const clip = await page.evaluate(({ startSel, endSel }) => {
      const start = document.querySelector(startSel);
      if (!start) return null;
      const end = endSel ? document.querySelector(endSel) : null;
      const rects = [];
      let node = start;
      while (node) {
        if (node.nodeType === 1) {
          const r = node.getBoundingClientRect();
          if (r.width > 0 && r.height > 0) rects.push(r);
        }
        const next = node.nextElementSibling;
        if (!next) break;
        if (end && next === end) break;
        node = next;
      }
      if (!rects.length) return null;
      const left = Math.min(...rects.map((r) => r.left));
      const top = Math.min(...rects.map((r) => r.top));
      const right = Math.max(...rects.map((r) => r.right));
      const bottom = Math.max(...rects.map((r) => r.bottom));
      const sx = window.scrollX || 0;
      const sy = window.scrollY || 0;
      return {
        x: Math.max(0, Math.floor(left + sx - 8)),
        y: Math.max(0, Math.floor(top + sy - 8)),
        width: Math.ceil(right - left + 16),
        height: Math.ceil(bottom - top + 16),
      };
    }, { startSel: shot.startSelector, endSel: shot.endSelector ?? null });
    if (!clip) throw new Error(`Range not found: ${shot.startSelector} → ${shot.endSelector ?? '(end)'}`);
    await page.screenshot({ path: outPath, type: 'png', animations: 'disabled', caret: 'hide', clip, fullPage: true });
  } else {
    throw new Error(`Invalid shot target for ${shot.id}: ${type}`);
  }

  console.log(`📸 ${shot.id}.png`);
  return outPath;
}

/**
 * Graceful navigation that falls back if `networkidle` never settles.
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} url
 */
export async function safeGoto(page, url) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15_000 });
  } catch {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45_000 });
  }
}
