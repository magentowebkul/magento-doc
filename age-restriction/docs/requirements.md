# Requirements

Before installing the **Webkul Magento 2 Age Restriction** extension, ensure your hosting environment and Magento installation meet the minimum prerequisites outlined below.

---

## Compatibility Matrix

| Component | Supported Versions | Notes |
|---|---|---|
| **Magento Platform** | `2.4.9`, `2.4.8`, `2.4.7`, `2.4.x`, `2.3.x` | Open Source (CE) & Commerce (EE / Cloud) |
| **PHP Version** | `8.1`, `8.2`, `8.3`, `8.4`, `8.5` | Matches Magento 2 system requirements |
| **Node.js** *(Documentation build only)* | `22.x` | For local VuePress documentation builds |
| **npm** *(Documentation build only)* | `10.x` | Use `legacy-peer-deps=true` |
| **Base Module Dependency** | `webkul/module-base` | Required for Webkul admin menus and licensing support |

---

## Browser Support

The age verification modal and JavaScript UI components are tested and supported across all modern desktop and mobile browsers:

- **Google Chrome** (Desktop & Android) — latest stable release
- **Mozilla Firefox** (Desktop & Android) — latest stable release
- **Apple Safari** (macOS & iOS) — fully compatible with WebKit cookie lifetime and privacy settings
- **Microsoft Edge** (Chromium-based) — latest stable release
- **Opera & Brave** — latest stable release

---

## Technical Prerequisites

1. **JavaScript Enabled**: The verification modal utilizes Magento UI Components and Knockout.js. Ensure JavaScript is enabled in client browsers.
2. **Cookie Handling**: The module stores verification flags in the `age_verified` cookie. Cookies must not be globally blocked.
3. **HTTPS / SSL**: Running your Magento store over HTTPS is strongly recommended for standard secure cookie flags.
4. **Full Page Cache Support**: The extension integrates with Magento's standard `customer-data` private content model, making it fully compatible with:
   - Magento Built-in Full Page Cache
   - Varnish Cache
   - Fastly CDN
