# Hyvä Theme Support

The **Webkul Video Player** extension offers native compatibility with **Hyvä Themes**, replacing heavy legacy Luma JavaScript libraries (RequireJS, Knockout.js, jQuery UI) with modern, lightweight **Alpine.js** state management and utility-first **Tailwind CSS** styling.

---

## Overview

Modern eCommerce stores running on Hyvä Themes achieve sub-second load times and flawless Core Web Vitals (CWV). The Webkul Video Player Hyvä integration ensures that your product video players load instantly, stream smoothly, and integrate seamlessly into Hyvä's gallery layouts without introducing layout shifts or JavaScript bloat.

---

## Key Benefits on Hyvä Storefronts

### 1. Minimal JavaScript Footprint
* Built with **Alpine.js**, reducing JavaScript bundle overhead from megabytes down to just a few kilobytes.
* Prevents main-thread blocking, keeping the Interaction to Next Paint (**INP**) metric minimal during video player initialization.

### 2. Zero Layout Shift (CLS)
* Pre-allocated aspect-ratio containers (`aspect-video` or `aspect-[16/9]`) prevent Cumulative Layout Shift (**CLS**) while video assets and preview posters buffer.

### 3. Native Media Gallery Integration
* Embedded directly within Hyvä's Alpine.js product image gallery component.
* Smooth transition states between product still shots and video streams.
* Fully touch-optimized controls on smartphones and tablet devices.

### 4. Tailwind CSS Aesthetic
* Responsive controls styled with Tailwind CSS utility classes.
* Inherits primary theme typography, border radiuses, and color variables for a unified storefront look and feel.

---

## Hyvä Deployment Checklist

### 1. Verify Fallback Module
Ensure the `Hyva_CompatModuleFallback` module is active in your Magento instance:

```bash:no-line-numbers
php bin/magento module:status Hyva_CompatModuleFallback
```
<ExplainCode explanation="Checks whether the Hyvä compatibility fallback module is registered and enabled in your Magento installation." />

### 2. Install Compatibility Package
Require the compatibility module via Composer:

```bash:no-line-numbers
composer require webkul/magento2-videoplayer-hyva
```
<ExplainCode explanation="Downloads and installs the Webkul Video Player Hyvä Theme compatibility package into your Magento project vendor directory." />

### 3. Run Magento Upgrade & DI Compilation

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_VideoPlayerHyva in app/etc/config.php and runs any required schema updates." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles dependency injection definitions and Hyvä view model factory classes for optimal runtime speed." />

### 4. Rebuild Hyvä Theme Tailwind CSS
Compile your Hyvä theme's Tailwind stylesheet so classes used in Video Player templates are included:

```bash:no-line-numbers
npm --prefix app/design/frontend/Vendor/hyva-theme/web/tailwind run build
```
<ExplainCode explanation="Executes Tailwind CSS build scripts inside your custom Hyvä theme directory to compile newly referenced utility classes into the production CSS." />

### 5. Flush Magento Cache

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento cache types to activate the Hyvä video player templates immediately on storefront product pages." />

