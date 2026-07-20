// @ts-check
import { test } from '@playwright/test';
import { capture, safeGoto } from './_helpers.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const manifest = require('../scripts/screenshots.manifest.json');

const ADMIN_PATH = process.env.MAGENTO_ADMIN_PATH || 'admin';
const SECTION = 'google_tag_manager';

const shots = manifest.screenshots.filter((s) => s.spec === 'settings-config');

test.describe.configure({ mode: 'serial' });

/**
 * Expand every collapsible config group on the Magento system config page so
 * each group's fieldset is rendered and can be captured by element locator.
 * Magento groups render as `.entry-edit` / `.section-config` fieldsets whose
 * head toggles the body; opened groups carry the `.open` class.
 */
async function expandAllGroups(page) {
  // Magento renders each config group as an `.admin__collapsible-block`
  // fieldset (`id="<group>"`) toggled by a sibling head anchor
  // (`id="<group>-head"`). A collapsed group's fieldset is hidden, so open any
  // whose fieldset isn't currently visible. Two passes cover nested subgroups
  // that only mount once their parent group is open.
  for (let pass = 0; pass < 2; pass++) {
    await page.evaluate(() => {
      document.querySelectorAll('a[id$="-head"], .entry-edit-head').forEach((head) => {
        const id = head.id.endsWith('-head') ? head.id.slice(0, -'-head'.length) : '';
        const fieldset = id ? document.getElementById(id) : head.nextElementSibling;
        const hidden = !fieldset || fieldset.offsetParent === null;
        if (hidden) {
          /** @type {HTMLElement} */ (head).click();
        }
      });
    });
    await page.waitForTimeout(600);
  }
}

for (const shot of shots) {
  test(`screenshot · ${shot.id}`, async ({ page }) => {
    // The whole extension lives on one config section page.
    await safeGoto(page, `${ADMIN_PATH}/admin/system_config/edit/section/${SECTION}/`);
    await page.waitForLoadState('domcontentloaded');
    await expandAllGroups(page);

    await capture(page, {
      id: shot.id,
      type: shot.type ?? 'element',
      locator: shot.locator,
      startSelector: shot.startSelector,
      endSelector: shot.endSelector,
    });
  });
}
