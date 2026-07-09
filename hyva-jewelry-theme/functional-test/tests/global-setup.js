// @ts-check
import { test as setup, expect } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const AUTH_DIR = path.join(__dirname, '..', '.auth');
const STORAGE_STATE = path.join(AUTH_DIR, 'admin.json');

const WP_USER = process.env.WP_USER || 'admin';
const WP_PASS = process.env.WP_PASS || 'admin';

/**
 * Logs into WordPress once and saves the session to .auth/admin.json.
 * Every screenshot spec reuses this storage state, so auth happens only one time.
 */
setup('authenticate as WordPress admin', async ({ page }) => {
  fs.mkdirSync(AUTH_DIR, { recursive: true });

  await page.goto('wp-login.php', { waitUntil: 'domcontentloaded' });

  await page.locator('#user_login').fill(WP_USER);
  await page.locator('#user_pass').fill(WP_PASS);
  await Promise.all([
    page.waitForURL(/wp-admin/, { timeout: 30_000 }),
    page.locator('#wp-submit').click(),
  ]);

  // Sanity check — we should be in wp-admin now
  await expect(page.locator('#wpadminbar')).toBeVisible({ timeout: 15_000 });

  await page.context().storageState({ path: STORAGE_STATE });
  console.log(`\n✅ Logged in as ${WP_USER} — session saved to ${STORAGE_STATE}\n`);
});
