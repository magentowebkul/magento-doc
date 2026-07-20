// @ts-check
import { expect, test } from '@playwright/test';

/**
 * Layout / integrity checks for the built VuePress site.
 *
 * Serve the build first, then run against it:
 *   (cd .. && npm run build)
 *   npx http-server ../docs/.vuepress/dist -p 8098 -s &
 *   DOCS_BASE_URL=http://127.0.0.1:8098 npm run docs-layout
 */
const baseUrl = process.env.DOCS_BASE_URL || 'http://127.0.0.1:8098';

test.describe('navbar', () => {
  test('shows the site name and the three navbar actions', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/introduction.html`);

    await expect(page.locator('.vp-site-name, .site-name').first())
      .toHaveText('Magento 2 Google Tag Manager');

    const navbar = page.locator('.vp-navbar, .navbar').first();
    await expect(navbar).toContainText('Live Demo');
    await expect(navbar).toContainText('Buy Now');
    await expect(navbar).toContainText('Support');
  });
});

test.describe('sidebar', () => {
  test('exposes the top-level groups and key pages resolve', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/introduction.html`);

    const sidebar = page.locator('.vp-sidebar, .sidebar').first();
    for (const label of [
      'Getting Started',
      'Configuration',
      'Destinations & Export',
      'Events & dataLayer',
      'Help',
    ]) {
      await expect(sidebar).toContainText(label);
    }

    await expect(sidebar.locator('a[href="/introduction.html"]').first()).toBeVisible();
  });
});

test.describe('key pages render', () => {
  const pages = [
    ['/introduction.html', 'Magento 2 Google Tag Manager'],
    ['/requirements.html', 'Requirements'],
    ['/installation.html', 'Installation'],
    ['/configuration/overview.html', 'Configuration Overview'],
    ['/configuration/shopper-actions.html', 'Shopper Actions to Track'],
    ['/destinations/overview.html', 'Destinations'],
    ['/destinations/container-export.html', 'Container Export'],
    ['/events/overview.html', 'Events & dataLayer'],
    ['/sgtm/overview.html', 'Server-Side Tagging'],
    ['/how-to/verify-events.html', 'Verify events'],
    ['/help/faq.html', 'FAQ'],
  ];

  for (const [path, heading] of pages) {
    test(`${path} loads with its H1`, async ({ page }) => {
      const res = await page.goto(`${baseUrl}${path}`);
      expect(res?.status(), `HTTP status for ${path}`).toBeLessThan(400);
      await expect(page.locator('h1').first()).toContainText(heading);
    });
  }
});

test.describe('home page', () => {
  test('hero, trust panel, and guide cards render', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/`);

    await expect(page.locator('h1').first()).toContainText('Magento 2 Google Tag Manager');
    await expect(page.locator('.home-trust').first()).toBeVisible();
    await expect(page.locator('.home-learn .home-guide-card')).toHaveCount(3);
  });
});

test.describe('no stale jewelry-theme content leaked', () => {
  test('home does not mention the jewelry theme', async ({ page }) => {
    await page.goto(`${baseUrl}/`);
    await expect(page.locator('body')).not.toContainText('Jewellery');
    await expect(page.locator('body')).not.toContainText('Adornment');
  });
});
