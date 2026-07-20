// @ts-check
import { test as setup, expect } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const AUTH_DIR = path.join(__dirname, '..', '.auth');
const STORAGE_STATE = path.join(AUTH_DIR, 'admin.json');

const ADMIN_PATH = process.env.MAGENTO_ADMIN_PATH || 'admin';
const ADMIN_USER = process.env.MAGENTO_ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.MAGENTO_ADMIN_PASS || 'admin123';

/**
 * Logs into the Magento Admin once and saves the session to .auth/admin.json.
 * Every screenshot spec reuses this storage state, so auth happens only one time.
 *
 * Override with env vars: MAGENTO_ADMIN_PATH, MAGENTO_ADMIN_USER, MAGENTO_ADMIN_PASS.
 */
setup('authenticate as Magento admin', async ({ page }) => {
  fs.mkdirSync(AUTH_DIR, { recursive: true });

  await page.goto(`${ADMIN_PATH}/`, { waitUntil: 'domcontentloaded' });

  await page.locator('#username').fill(ADMIN_USER);
  await page.locator('#login').fill(ADMIN_PASS);
  await Promise.all([
    page.waitForURL(new RegExp(`/${ADMIN_PATH}/admin/`), { timeout: 30_000 }).catch(() => {}),
    page.locator('.action-login, button.action-primary').first().click(),
  ]);

  // Sanity check — the admin header should be visible now
  await expect(page.locator('.admin__header, header.page-header, .page-wrapper').first())
    .toBeVisible({ timeout: 20_000 });

  await page.context().storageState({ path: STORAGE_STATE });
  console.log(`\n✅ Logged in as ${ADMIN_USER} — session saved to ${STORAGE_STATE}\n`);
});
