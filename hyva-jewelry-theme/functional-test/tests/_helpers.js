// @ts-check
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ARTIFACTS = path.join(__dirname, '..', 'artifacts');
fs.mkdirSync(ARTIFACTS, { recursive: true });

/**
 * Hide every WordPress chrome element so the screenshot shows ONLY the plugin.
 * This includes the top admin bar, the left admin sidebar, the footer, and
 * any update/screen-options notices. It also removes margins so the content
 * area reflows to fill the full viewport width.
 *
 * @param {import('@playwright/test').Page} page
 */
export async function hideWpChrome(page) {
  await page.addStyleTag({
    content: `
      /* Admin bar */
      #wpadminbar { display: none !important; }
      html.wp-toolbar { padding-top: 0 !important; }

      /* Left sidebar menu */
      #adminmenumain, #adminmenuwrap, #adminmenuback, #adminmenu { display: none !important; }

      /* Reflow main content to full width */
      #wpcontent, #wpbody-content { margin-left: 0 !important; padding-left: 0 !important; }
      #wpbody { padding-top: 0 !important; }

      /* Footer */
      #wpfooter { display: none !important; }

      /* Update nags, screen options, help tabs */
      #screen-meta, #screen-meta-links { display: none !important; }
      .update-nag, .notice:not(.wkcft-notice), .updated, .error:not(.wkcft-error) {
        display: none !important;
      }

      /* Inner wrap: tighten padding for a clean edge */
      .wrap { margin: 24px 32px !important; max-width: 100% !important; }
      .wrap > h1.wp-heading-inline + .page-title-action { margin-top: 4px; }
    `,
  });
}

/**
 * Replace real secrets in the DOM with fake demo values before capture so
 * published screenshots never leak real keys / tokens / webhook URLs.
 *
 * Covers: Site Key, Secret Key, Recovery Token + URL, Generic Webhook URL,
 * Slack Webhook URL, and any readonly/url input whose value contains
 * `token=<long-string>`.
 *
 * @param {import('@playwright/test').Page} page
 */
export async function maskSecrets(page) {
  await page.evaluate(() => {
    const FAKE = {
      site:   '0x4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      secret: '0x4AAAAAAABBBBBBBBCCCCCCCCDDDDDDDDEEEE',
      token:  'demo-recovery-token-0000000000000000',
      hook:   'https://example.com/webhooks/turnstile',
      slack:  'https://hooks.slack.com/services/T0/B0/XXXXXXXXXXXXXXXX',
    };

    const maskInputs = () => {
      document.querySelectorAll('input, textarea').forEach((el) => {
        const n = ((el.name || el.id || '') + '').toLowerCase();
        if (!n) return;
        let fake = null;
        if (n.includes('slack_webhook') || n.includes('slack-url')) fake = FAKE.slack;
        else if (n.includes('webhook')) fake = FAKE.hook;
        else if (n.includes('recovery_token') || n.includes('recovery-token')) fake = FAKE.token;
        else if (n.includes('secret_key') || n.includes('secret-key') || n === 'wkcft_secret_key') fake = FAKE.secret;
        else if (n.includes('site_key')   || n.includes('site-key')   || n === 'wkcft_site_key')   fake = FAKE.site;
        if (fake != null) {
          try {
            el.value = fake;
            el.setAttribute('value', fake);
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          } catch { /* ignore */ }
        }
      });
    };

    const maskReadonlyText = () => {
      const re = /token=[A-Za-z0-9_-]{10,}/g;
      const replacement = 'token=' + FAKE.token;
      document.querySelectorAll('input[readonly], input[type="url"]').forEach((el) => {
        if (re.test(el.value || '')) {
          el.value = (el.value || '').replace(re, replacement);
          el.setAttribute('value', el.value);
        }
      });
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes = [];
      let n = walker.nextNode();
      while (n) { nodes.push(n); n = walker.nextNode(); }
      nodes.forEach((node) => {
        if (re.test(node.nodeValue || '')) {
          node.nodeValue = (node.nodeValue || '').replace(re, replacement);
        }
      });
    };

    maskInputs();
    maskReadonlyText();
  });
}

/**
 * Hide unstable UI bits (carets, scrollbars, animated badges, admin-bar timestamps)
 * and wait for fonts so every capture is diff-stable.
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
      .wkcft-spinner, .wkcft-live-dot, [class*="wkcft-"][class*="pulse"] { animation: none !important; }
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

  // Give charts/JS a final tick to settle
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
 * exists in the DOM. This lets the manifest use resilient selectors like
 * `.wkpbic-card, .card, .wrap > :first-child` without crashing if one is missing.
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
 *   - "content"  → hide WP chrome, capture #wpbody-content (the plugin area).
 *                  This is the default for admin pages. Gives a full-width,
 *                  sidebar-free shot of just the plugin.
 *   - "element"  → tight crop on a specific component (form, card, grid).
 *                  Uses `shot.locator` (supports comma fallbacks).
 *   - "fullPage" → the whole browser viewport scrolled top to bottom.
 *                  Reserved for special cases where sidebar matters.
 *   - "hero"     → crops to the viewport only (no scroll), giving a
 *                  "first-fold" marketing shot. Great for hero images.
 *
 * @param {import('@playwright/test').Page} page
 * @param {object} shot
 */
export async function capture(page, shot) {
  await stabilize(page);
  await maskSecrets(page);
  const type = shot.type || 'content';

  // All non-fullPage modes hide WP chrome for a clean, on-brand frame
  if (type !== 'fullPage') {
    await hideWpChrome(page);
    await page.waitForTimeout(200);
  }

  const outPath = path.join(ARTIFACTS, `${shot.id}.png`);

  if (type === 'fullPage') {
    await page.screenshot({
      path: outPath,
      fullPage: true,
      type: 'png',
      animations: 'disabled',
      caret: 'hide',
    });
  } else if (type === 'hero') {
    await page.screenshot({
      path: outPath,
      fullPage: false,
      type: 'png',
      animations: 'disabled',
      caret: 'hide',
    });
  } else if (type === 'content') {
    const loc =
      (await firstMatching(page, '#wpbody-content, .wkcft-wrap, .wrap, body')) ??
      page.locator('body').first();
    await loc.scrollIntoViewIfNeeded().catch(() => {});
    await loc.screenshot({
      path: outPath,
      type: 'png',
      animations: 'disabled',
      caret: 'hide',
    });
  } else if (type === 'element' && shot.locator) {
    const loc = await firstMatching(page, shot.locator);
    if (!loc) throw new Error(`No element matched: ${shot.locator}`);
    await loc.waitFor({ state: 'visible', timeout: 20_000 });
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await loc.screenshot({
      path: outPath,
      type: 'png',
      animations: 'disabled',
      caret: 'hide',
    });
  } else if (type === 'range' && shot.startSelector) {
    // Compute bounding clip from startSelector → (just-before) endSelector.
    // Great for "split a tall section-less page by its heading markers".
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
    await page.screenshot({
      path: outPath,
      type: 'png',
      animations: 'disabled',
      caret: 'hide',
      clip,
      fullPage: true,
    });
  } else {
    throw new Error(`Invalid shot target for ${shot.id}: ${type}`);
  }

  console.log(`📸 ${shot.id}.png`);
  return outPath;
}

/**
 * Graceful navigation that falls back if `networkidle` never settles
 * (common when the plugin polls an endpoint in the background).
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
