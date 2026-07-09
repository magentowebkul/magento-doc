// @ts-check
import { test } from '@playwright/test';
import { capture, safeGoto } from './_helpers.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const manifest = require('../scripts/screenshots.manifest.json');

const shots = manifest.screenshots.filter((s) => s.spec === 'settings-tabs');

test.describe.configure({ mode: 'serial' });

/**
 * Named DOM prep scripts run in the page context before capture.
 * Keep them small and idempotent.
 */
const PREP_SCRIPTS = {
  /**
   * Group every h3.wkcft-conditions-heading with its following siblings (up to
   * the next h3 or the end of the form) into `.wkcft-capture-section[data-idx]`
   * wrappers, so the capture helper can clip one section at a time by index.
   */
  wrapConditionsSections: () => {
    if (document.querySelector('.wkcft-capture-section[data-idx]')) return;
    const form = document.querySelector('.wkcft-tab-content[data-tab="wkcft_conditions"] form, .wkcft-tab-content.active form, form');
    if (!form) return;
    const headings = Array.from(form.querySelectorAll('h3.wkcft-conditions-heading'));
    headings.forEach((h, idx) => {
      const wrap = document.createElement('div');
      wrap.className = 'wkcft-capture-section';
      wrap.setAttribute('data-idx', String(idx));
      h.parentNode.insertBefore(wrap, h);
      let node = h;
      while (node) {
        const next = node.nextSibling;
        wrap.appendChild(node);
        if (next && next.nodeType === 1 && /** @type {HTMLElement} */(next).matches && /** @type {HTMLElement} */(next).matches('h3.wkcft-conditions-heading')) {
          break;
        }
        node = next;
      }
    });
  },
};

for (const shot of shots) {
  test(`screenshot · ${shot.id}`, async ({ page }) => {
    const tab = shot.tab;
    await safeGoto(page, `wp-admin/admin.php?page=wkcft-settings&tab=${tab}`);
    await page.waitForLoadState('domcontentloaded');

    await page.evaluate((t) => {
      document.querySelectorAll('.wkcft-tab-content').forEach((el) => el.classList.remove('active'));
      const panel = document.querySelector(`.wkcft-tab-content[data-tab="${t}"]`);
      if (panel) panel.classList.add('active');
      document.querySelectorAll('.wkcft-nav-tab').forEach((el) =>
        el.classList.remove('wkcft-nav-tab-active', 'nav-tab-active')
      );
      const navBtn = document.querySelector(`.wkcft-nav-tab[data-tab="${t}"]`);
      if (navBtn) navBtn.classList.add('wkcft-nav-tab-active', 'nav-tab-active');
    }, tab);

    await page.waitForTimeout(500);

    if (shot.prep && PREP_SCRIPTS[shot.prep]) {
      await page.evaluate(PREP_SCRIPTS[shot.prep]);
      await page.waitForTimeout(200);
    }

    await capture(page, {
      id: shot.id,
      type: shot.type ?? 'content',
      locator: shot.locator,
      startSelector: shot.startSelector,
      endSelector: shot.endSelector,
    });
  });
}
