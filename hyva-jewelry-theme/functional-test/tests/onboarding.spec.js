// @ts-check
import { test } from '@playwright/test';
import { capture, safeGoto } from './_helpers.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const manifest = require('../scripts/screenshots.manifest.json');

const shots = manifest.screenshots.filter((s) => s.spec === 'onboarding');

test.describe.configure({ mode: 'serial' });

for (const shot of shots) {
  test(`screenshot · ${shot.id}`, async ({ page }) => {
    const step = shot.step ?? 1;
    await safeGoto(page, `wp-admin/admin.php?page=wkcft-onboarding&step=${step}`);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(600);
    await capture(page, { id: shot.id, type: 'content' });
  });
}
