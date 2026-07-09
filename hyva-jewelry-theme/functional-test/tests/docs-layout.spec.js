// @ts-check
import { expect, test } from '@playwright/test';

const baseUrl = process.env.DOCS_BASE_URL || 'http://127.0.0.1:8101';

test.describe('Vercel-like docs layout', () => {
  test('desktop shows docs shell landmarks', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/requirements.html`);

    await expect(page.locator('.vp-sidebar')).toBeVisible();
    await expect(page.locator('[vp-content], .theme-default-content')).toBeVisible();
    await expect(page.locator('.doc-page-toc')).toBeVisible();

    const navbar = page.locator('.vp-navbar');
    await expect(navbar.locator('.vp-navbar-dropdown-wrapper')).toHaveCount(0);
    await expect(navbar.locator('.vp-site-logo')).toHaveAttribute('src', '/images/webkul-logo.png');
    await expect(navbar.locator('.vp-site-name')).toHaveText('Hyvä Jewellery Theme');
    await expect(navbar).toContainText('Live Demo');
    await expect(navbar).toContainText('Buy Now');
    await expect(navbar).toContainText('Support');
    await expect(navbar).not.toContainText('Customization');

    const navLabels = await navbar.locator('.vp-navbar-items .vp-navbar-item').evaluateAll((items) =>
      items.map((item) => item.textContent.trim().replace(/\s+/g, ' '))
    );
    expect(navLabels).toEqual(['Live Demo', 'Buy Now', 'Support']);

    const navMetrics = await page.locator('.vp-navbar .vp-navbar-item').evaluateAll((items) =>
      items.map((item) => {
        const nav = item.closest('.vp-navbar');
        const navRect = nav.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        return Math.round(itemRect.y + itemRect.height / 2 - (navRect.y + navRect.height / 2));
      })
    );
    expect(navMetrics.every((offset) => Math.abs(offset) <= 1)).toBe(true);

    const firstNavItemX = await page.locator('.vp-navbar .vp-navbar-item').first().evaluate((item) =>
      Math.round(item.getBoundingClientRect().x)
    );
    expect(firstNavItemX).toBeGreaterThan(950);

    const title = page.locator('[vp-content] h1, .theme-default-content h1').first();
    await expect(title).toHaveText(/Requirements/);
    const titleColor = await title.evaluate((el) => getComputedStyle(el).color);
    const channels = titleColor.match(/\d+/g)?.slice(0, 3).map(Number) || [];
    expect(channels.length).toBe(3);
    expect(Math.max(...channels)).toBeLessThanOrEqual(30);

    const sidebarBox = await page.locator('.vp-sidebar').boundingBox();
    const contentBox = await page.locator('[vp-content], .theme-default-content').boundingBox();
    const tocBox = await page.locator('.doc-page-toc').boundingBox();

    expect(sidebarBox?.x).toBeLessThan(40);
    expect(Math.round(contentBox?.x || 0)).toBeGreaterThanOrEqual(332);
    expect(Math.round(contentBox?.x || 0)).toBeLessThanOrEqual(340);
    expect(tocBox?.x).toBeGreaterThan(1100);

    const actionMenu = page.locator('.doc-page-actions__menu');
    await expect(actionMenu).toHaveAttribute('aria-label', 'More page actions');
    await expect(actionMenu).toHaveAttribute('aria-haspopup', 'menu');
    await expect(actionMenu).toHaveAttribute('aria-expanded', 'false');
    await actionMenu.click();
    await expect(actionMenu).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#doc-page-actions-menu')).toBeVisible();
    await expect(page.locator('#doc-page-actions-menu [role="menuitem"]', { hasText: 'Print page' })).toBeVisible();
  });

  test('left sidebar is docs navigation, not page table of contents', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/requirements.html`);

    const sidebar = page.locator('.vp-sidebar');
    const introLink = sidebar.locator('a[aria-label="Introduction"]').first();
    await expect(sidebar.locator('.search-box input')).toBeVisible();
    await expect(introLink).toHaveAttribute('href', '/introduction.html');
    await expect(sidebar.locator('a[href*="#server-platform"]')).toHaveCount(0);
    await expect(sidebar.locator('.vp-sidebar-items > li > .vp-sidebar-heading', { hasText: 'Getting Started' })).toBeVisible();
    await expect(sidebar.locator('.vp-sidebar-items > li > .vp-sidebar-heading', { hasText: 'Build storefront' })).toBeVisible();
    await expect(sidebar.locator('.vp-sidebar-item.collapsible', { hasText: 'Homepage Configurator' })).toBeVisible();
    await expect(sidebar.locator('.vp-sidebar-item.collapsible', { hasText: 'Header, Footer & Mega Menu' })).toBeVisible();
    await expect(sidebar.locator('.vp-sidebar-item.collapsible', { hasText: 'Storefront Pages' })).toBeVisible();
    await expect(sidebar.locator('.vp-sidebar-items a[aria-label="Section Types"]')).toBeHidden();
    await expect(sidebar.locator('.vp-sidebar-heading.collapsible')).toHaveCount(0);
    await expect(sidebar.locator('.vp-sidebar-item.collapsible')).toHaveCount(3);
    await expect(page.locator('.doc-page-toc a[href="#server-platform"]')).toBeVisible();
  });

  test('nested sidebar areas open inline as a single accordion', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/introduction.html`);

    const sidebar = page.locator('.vp-sidebar');
    await expect(sidebar).not.toHaveClass(/doc-sidebar-subnav-mode/);
    await expect(sidebar.locator('.doc-sidebar-subnav-head')).toHaveCount(0);
    await expect(sidebar.locator('.vp-sidebar-items > li > .vp-sidebar-heading', { hasText: 'Build storefront' })).toBeVisible();
    await expect(sidebar.locator('a[aria-label="Section Types"]')).toBeHidden();
    await expect(sidebar.locator('a[aria-label="Building the Menu"]')).toBeHidden();

    const homepageGroup = sidebar.locator('.vp-sidebar-item.collapsible', { hasText: 'Homepage Configurator' });
    const chromeGroup = sidebar.locator('.vp-sidebar-item.collapsible', { hasText: 'Header, Footer & Mega Menu' });

    await homepageGroup.click();
    await expect(homepageGroup).toHaveAttribute('aria-expanded', 'true');
    await expect(sidebar.locator('a[aria-label="Section Types"]')).toBeVisible();
    await expect(chromeGroup).toHaveAttribute('aria-expanded', 'false');
    await expect(sidebar.locator('a[aria-label="Building the Menu"]')).toBeHidden();

    await chromeGroup.click();
    await expect(homepageGroup).toHaveAttribute('aria-expanded', 'false');
    await expect(sidebar.locator('a[aria-label="Section Types"]')).toBeHidden();
    await expect(chromeGroup).toHaveAttribute('aria-expanded', 'true');
    await expect(sidebar.locator('a[aria-label="Building the Menu"]')).toBeVisible();

    await chromeGroup.click();
    await expect(chromeGroup).toHaveAttribute('aria-expanded', 'false');
    await expect(sidebar.locator('a[aria-label="Building the Menu"]')).toBeHidden();

    await page.goto(`${baseUrl}/homepage/overview.html`);
    await expect(sidebar).not.toHaveClass(/doc-sidebar-subnav-mode/);
    await expect(homepageGroup).toHaveAttribute('aria-expanded', 'true');
    await expect(sidebar.locator('a[href="/homepage/overview.html"]')).toBeVisible();
    await expect(sidebar.locator('a[aria-label="Section Types"]')).toBeVisible();
    await expect(chromeGroup).toBeVisible();
  });

  test('introduction is a user guide without broken placeholder links', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/introduction.html`);

    await expect(page.locator('[vp-content] h1, .theme-default-content h1').first()).toHaveText('Magento 2 Hyvä Jewellery Theme');
    await expect(page.locator('[vp-content], .theme-default-content')).toContainText('This guide explains what to check first');
    await expect(page.locator('[vp-content], .theme-default-content')).toContainText('Agent Ready');
    await expect(page.locator('[vp-content], .theme-default-content')).not.toContainText('Agent and native ready');
    await expect(page.locator('[vp-content], .theme-default-content')).not.toContainText('Template Overrides');
    await expect(page.locator('[vp-content], .theme-default-content')).not.toContainText('Design Tokens');
    await expect(page.locator('[vp-content], .theme-default-content')).not.toContainText('Tailwind');
    await expect(page.locator('.vp-page-meta a', { hasText: 'Edit this page' })).toHaveCount(0);

    const badLinks = await page.locator('[vp-content] a[href], .theme-default-content a[href]').evaluateAll((links) =>
      links
        .map((link) => link.getAttribute('href') || '')
        .filter((href) => href.startsWith('/') && !href.endsWith('.html') && !href.includes('#'))
    );
    expect(badLinks).toEqual([]);

    const image = page.locator('[vp-content] img, .theme-default-content img').first();
    await expect(image).toHaveJSProperty('naturalWidth', 1440);

    const agentImage = page.locator('img[src="/screenshots/agentic-performance-desktop.png"]');
    await expect(agentImage).toHaveJSProperty('naturalWidth', 888);
  });

  test('home page uses theme user guide copy only', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/`);

    await expect(page.locator('h1').first()).toHaveText('Magento 2 Hyvä Jewellery Theme');
    await expect(page.locator('body')).toContainText('Start User Guide');
    await expect(page.locator('.home-trust a')).toHaveCount(8);
    await expect(page.locator('.home-trust-panel')).toHaveCSS('background-color', 'rgb(45, 52, 72)');
    await expect(page.locator('.home-trust > p')).toHaveText("The world's top brands trust Webkul");
    await expect(page.locator('.home-trust img[src="/images/trust/hyva.webp"]').first()).toHaveJSProperty('naturalWidth', 60);
    await expect(page.locator('.home-trust img[src="/images/trust/clutch-logo.png"]')).toHaveJSProperty('naturalWidth', 40);
    await expect(page.locator('.home-trust img[src="/images/trust/google-logo.png"]')).toHaveJSProperty('naturalWidth', 44);
    await expect(page.locator('.home-trust a').first()).toContainText('Hyvä Technology Partner');
    await expect(page.locator('.home-learn h2')).toHaveText('Get started and learn more');
    await expect(page.locator('.home-learn-card')).toHaveCount(12);
    await expect(page.locator('.home-learn-card').first()).toContainText('Getting started');
    await expect(page.locator('.home-learn-card', { hasText: 'Homepage builder' })).toBeVisible();
    await expect(page.locator('.home-learn-card', { hasText: 'Cart and checkout' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Agent Ready');
    await expect(page.locator('.home-learn-card').first()).toHaveCSS('border-radius', '8px');
    await expect(page.locator('.home-learn-card').first()).toHaveCSS('border-top-color', 'rgb(229, 229, 229)');
    await expect(page.locator('.doc-page-toc')).toHaveCount(0);
    await expect(page.locator('.vp-hero-action-button.primary')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
    await expect(page.locator('.vp-hero-action-button.primary')).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(page.locator('.vp-hero-action-button.secondary')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    await expect(page.locator('.vp-hero-action-button.secondary')).toHaveCSS('color', 'rgb(0, 0, 0)');
    await expect(page.locator('body')).not.toContainText('Storefront areas');
    await expect(page.locator('body')).not.toContainText('Start here');
    await expect(page.locator('body')).not.toContainText('This guide helps store owners');
    await expect(page.locator('body')).not.toContainText('Magento 2 Hyvä Jewellery Theme homepage');
    await expect(page.locator('body')).not.toContainText('Adornment Jewelry Theme — User Guide');
    await expect(page.locator('body')).not.toContainText('What you can do with this theme');
    await expect(page.locator('body')).not.toContainText('Template Overrides');
    await expect(page.locator('body')).not.toContainText('Design Tokens');
    await expect(page.locator('body')).not.toContainText('page tools drawer');
  });

  test('desktop dark mode uses a complete neutral docs palette', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/requirements.html`);

    await page.locator('.vp-toggle-color-mode-button').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
    await expect(page.locator('.vp-navbar')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.88)');
    await expect(page.locator('.vp-sidebar')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
    await expect(page.locator('.vp-sidebar a.route-link-active')).toHaveCSS('background-color', 'rgb(31, 31, 31)');
    await expect(page.locator('[vp-content] h1, .theme-default-content h1').first()).toHaveCSS('color', 'rgb(245, 245, 245)');
    await expect(page.locator('[vp-content] p, .theme-default-content p').first()).toHaveCSS('color', 'rgb(212, 212, 212)');

    const codeBlock = page.locator('[vp-content] div[class*="language-"], .theme-default-content div[class*="language-"]').first();
    await expect(codeBlock).toHaveCSS('background-color', 'rgb(10, 10, 10)');
    await expect(codeBlock).toHaveCSS('border-top-color', 'rgb(42, 42, 42)');
    await expect(codeBlock.locator('pre')).toHaveCSS('background-color', 'rgb(10, 10, 10)');

    const codeHeaderBg = await codeBlock.evaluate((el) => getComputedStyle(el, '::before').backgroundColor);
    expect(codeHeaderBg).toBe('rgb(17, 17, 17)');

    const copyButton = codeBlock.locator('> .vp-copy-code-button').first();
    await copyButton.hover();
    const copyTooltip = await copyButton.evaluate((el) => {
      const tooltip = getComputedStyle(el, '::after');
      return { background: tooltip.backgroundColor, color: tooltip.color };
    });
    expect(copyTooltip).toEqual({ background: 'rgb(17, 17, 17)', color: 'rgb(237, 237, 237)' });

    const table = page.locator('.doc-table-scroll table').first();
    await expect(table.locator('th').first()).toHaveCSS('background-color', 'rgb(10, 10, 10)');
    await expect(table.locator('tbody td').first()).toHaveCSS('color', 'rgb(212, 212, 212)');
  });

  test('home page dark mode keeps hero, trust panel, and cards readable', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/`);

    await page.locator('.vp-toggle-color-mode-button').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
    await expect(page.locator('h1').first()).toHaveCSS('color', 'rgb(245, 245, 245)');
    await expect(page.locator('.vp-hero-description')).toHaveCSS('color', 'rgb(163, 163, 163)');
    await expect(page.locator('.vp-hero-action-button.primary')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    await expect(page.locator('.vp-hero-action-button.primary')).toHaveCSS('color', 'rgb(0, 0, 0)');
    await expect(page.locator('.vp-hero-action-button.secondary')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
    await expect(page.locator('.vp-hero-action-button.secondary')).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(page.locator('.home-trust-panel')).toHaveCSS('background-color', 'rgb(10, 10, 10)');
    await expect(page.locator('.home-trust > p')).toHaveCSS('color', 'rgb(245, 245, 245)');
    await expect(page.locator('.home-learn-card').first()).toHaveCSS('background-color', 'rgb(10, 10, 10)');
    await expect(page.locator('.home-learn-card').first()).toHaveCSS('border-top-color', 'rgb(42, 42, 42)');
  });

  test('mobile has no horizontal page overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseUrl}/requirements.html`);

    await expect(page.locator('[vp-content] h1, .theme-default-content h1').first()).toBeVisible();
    await expect(page.locator('.doc-page-toc')).toBeHidden();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(2);
  });

  test('mobile dark mode toggle stays inside the header and opens a dark drawer', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseUrl}/requirements.html`);

    const colorButton = page.locator('.vp-toggle-color-mode-button');
    const colorButtonBox = await colorButton.boundingBox();
    expect(colorButtonBox?.x).toBeGreaterThanOrEqual(300);
    expect((colorButtonBox?.x || 0) + (colorButtonBox?.width || 0)).toBeLessThanOrEqual(390);

    await colorButton.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 0)');

    const toggle = page.locator('.vp-toggle-sidebar-button');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.vp-sidebar')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
    await expect(page.locator('.vp-sidebar a.route-link-active')).toHaveCSS('background-color', 'rgb(31, 31, 31)');

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(2);
  });

  test('mobile sidebar toggle opens the left panel accessibly', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseUrl}/requirements.html`);

    const toggle = page.locator('.vp-toggle-sidebar-button');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await expect.poll(async () => {
      const sidebarBox = await page.locator('.vp-sidebar').boundingBox();
      return Math.round(sidebarBox?.x || 0);
    }).toBe(0);
  });

  test('content elements use neutral Vercel-like cards', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/requirements.html`);

    const codeBlock = page.locator('[vp-content] div[class*="language-"], .theme-default-content div[class*="language-"]').first();
    await expect(codeBlock).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    await expect(codeBlock).toHaveCSS('border-radius', '6px');
    await expect(codeBlock).toHaveCSS('padding-top', '48px');
    await expect(codeBlock).toHaveAttribute('data-code-label', 'composer.json');
    await expect(codeBlock).toHaveAttribute('data-code-kind', 'json');

    const codeHeader = await codeBlock.evaluate((el) => getComputedStyle(el, '::before').content);
    const codeIcon = await codeBlock.evaluate((el) => getComputedStyle(el, '::after').content);
    expect(codeHeader).toContain('composer.json');
    expect(codeIcon).toContain('{}');

    const copyButton = codeBlock.locator('> .vp-copy-code-button').first();
    await copyButton.hover();
    const hoverCopyLabel = await copyButton.evaluate((el) => getComputedStyle(el, '::after').content);
    expect(hoverCopyLabel).toContain('Copy');
    await copyButton.click();
    await expect(copyButton).toHaveClass(/copied/);

    const copiedState = await copyButton.evaluate((el) => {
      const icon = getComputedStyle(el, '::before');
      const tooltip = getComputedStyle(el, '::after');
      return {
        iconMask: icon.maskImage || icon.webkitMaskImage,
        tooltipContent: tooltip.content,
        tooltipBackground: tooltip.backgroundColor,
        tooltipMask: tooltip.maskImage || tooltip.webkitMaskImage,
      };
    });
    expect(copiedState.iconMask).toContain('m5 12');
    expect(copiedState.tooltipContent).toContain('Copied');
    expect(copiedState.tooltipBackground).toBe('rgb(255, 255, 255)');
    expect(copiedState.tooltipMask).toBe('none');

    await expect(page.locator('[vp-content] div[class*="language-"], .theme-default-content div[class*="language-"]').nth(1)).toHaveAttribute('data-code-kind', 'markup');
    await expect(page.locator('[vp-content] div[class*="language-"], .theme-default-content div[class*="language-"]').nth(2)).toHaveAttribute('data-code-kind', 'terminal');

    const lineNumbers = codeBlock.locator('.line-numbers');
    await expect(lineNumbers).toBeHidden();

    const tokenColors = await codeBlock.evaluate((el) => {
      const property = el.querySelector('.token.property');
      const string = el.querySelector('.token.string');
      return {
        property: property ? getComputedStyle(property).color : '',
        string: string ? getComputedStyle(string).color : '',
      };
    });
    expect(tokenColors.property).toContain('lab(43.5237');
    expect(tokenColors.string).toContain('lab(45.7946');

    const inlineCode = page.locator('[vp-content] p code, .theme-default-content p code').first();
    await expect(inlineCode).toHaveCSS('display', 'inline-block');

    const table = page.locator('.doc-table-scroll table').first();
    await expect(table).toHaveCSS('display', 'table');
    await expect(table.locator('th').first()).toHaveCSS('font-weight', '400');
    await expect(table.locator('tbody td').first()).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  });
});
