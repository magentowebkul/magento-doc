// @ts-check
import { defineConfig } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Playwright config — headless screenshot capture for the WC Power BI Connector docs.
 *
 * Base URL, credentials, and admin path are hardcoded per the team staging server.
 * Override with env vars if needed:
 *   BASE_URL, WP_USER, WP_PASS
 */

const BASE_URL = process.env.BASE_URL || 'https://192.168.15.143/theme-webkul/';

export default defineConfig({
  testDir: path.join(__dirname, 'tests'),
  timeout: 90_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  workers: 1,
  retries: 1,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: path.join(__dirname, 'test-results', 'html') }],
  ],
  outputDir: path.join(__dirname, 'test-results', 'output'),

  use: {
    baseURL: BASE_URL,
    ignoreHTTPSErrors: true,               // self-signed cert on the staging box
    headless: true,                        // enforced headless for CI / Docker
    viewport: { width: 1920, height: 1200 }, // HD master capture
    deviceScaleFactor: 2,                  // retina — effective 3840 × 2400 physical
    screenshot: 'off',                     // we handle it ourselves in specs
    trace: 'retain-on-failure',
    video: 'off',
    actionTimeout: 20_000,
    navigationTimeout: 45_000,
    colorScheme: 'light',
    locale: 'en-US',
    timezoneId: 'UTC',
    launchOptions: {
      args: [
        '--disable-blink-features=AutomationControlled',
        '--force-color-profile=srgb',
        '--font-render-hinting=none',
      ],
    },
  },

  projects: [
    {
      name: 'setup',
      testMatch: /global-setup\.js$/,
    },
    {
      name: 'docs-screenshots',
      dependencies: ['setup'],
      testIgnore: [/global-setup\.js$/],
      use: {
        storageState: path.join(__dirname, '.auth', 'admin.json'),
      },
    },
  ],
});
