// @ts-check
import { test } from '@playwright/test';
import { capture, safeGoto } from './_helpers.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const manifest = require('../scripts/screenshots.manifest.json');

const shots = manifest.screenshots.filter((s) => s.spec === 'wp-admin');

test.describe.configure({ mode: 'serial' });

for (const shot of shots) {
  test(`screenshot · ${shot.id}`, async ({ page }) => {
    await safeGoto(page, shot.page);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(800);
    await capture(page, {
      id: shot.id,
      type: shot.type ?? 'content',
      locator: shot.locator,
      startSelector: shot.startSelector,
      endSelector: shot.endSelector,
    });
  });
}
