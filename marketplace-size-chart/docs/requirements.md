# Requirements

Before installing the **Webkul Magento 2 Marketplace Size Chart Template** extension, ensure your hosting environment, Magento store, and marketplace dependencies meet the prerequisites below.

---

## Compatibility Matrix

| Component | Supported Versions | Notes |
|---|---|---|
| **Magento Platform** | `2.4.9`, `2.4.8`, `2.4.7`, `2.4.6`, `2.4.5`, `2.4.4`, `2.3.x` | Open Source (CE) & Commerce (EE / Cloud) |
| **PHP Version** | `8.1`, `8.2`, `8.3`, `8.4` | Matches Magento 2 core system requirements |
| **Marketplace Module** | `webkul/module-marketplace` `^5.0` | **Required prerequisite.** Provides multi-vendor seller infrastructure |
| **Base Module Dependency** | `webkul/module-base` | Required for Webkul backend menus and licensing integration |
| **Catalog Module** | `magento/module-catalog` | Supported product types: Simple and Configurable |
| **Backend & UI** | `magento/module-backend`, `magento/module-ui` | Powers Admin and Seller UI Components |
| **Seller Group Extension** | `webkul/module-marketplace-seller-group` *(Optional)* | Enables granular action permissions for seller menu items |
| **Node.js** *(Docs build only)* | `20.x` / `22.x` | For local VuePress documentation builds |
| **npm** *(Docs build only)* | `10.x` | Use `legacy-peer-deps=true` if required |

---

## Browser Support

The frontend size chart modal, dynamic visual image switcher, and backend template generators are tested and fully compatible with all modern browsers:

- **Google Chrome** (Desktop & Android) — latest stable release
- **Mozilla Firefox** (Desktop & Android) — latest stable release
- **Apple Safari** (macOS & iOS) — full support for modal layers and touch events
- **Microsoft Edge** (Chromium-based) — latest stable release
- **Opera & Brave** — latest stable release

---

## Technical & Storage Prerequisites

1. **Writable Media Directory:**  
   The extension saves uploaded body measurement diagrams under `pub/media/mpsizecharttemplate/`. Ensure the web server user (`www-data`, `nginx`, or `apache`) has read/write permissions:
   ```bash
   chmod -R 775 pub/media
   ```

2. **Database Support for JSON Column:**  
   The module stores size chart template matrices in a native `json` column (`chart_info`) in the `wk_mpsizechart_templates` table. Ensure your MySQL/MariaDB version supports JSON data types (MySQL 5.7.8+ or MariaDB 10.2.7+).

3. **JavaScript Enabled:**  
   The interactive size chart popup uses jQuery UI modals, Knockout.js templates, and dynamic event handlers. JavaScript must be enabled in client browsers.

4. **Product Types:**  
   The size chart template dropdown attribute is scoped and applied to **Simple** and **Configurable** product types.
