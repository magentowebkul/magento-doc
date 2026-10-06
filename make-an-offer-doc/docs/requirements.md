# System Requirements

Before installing the **Webkul Magento 2 Make An Offer** extension, verify that your server environment, hosting setup, Magento release, and theme prerequisites meet the requirements outlined below.

---

## Server & Platform Requirements

| Requirement | Specification |
|---|---|
| **Magento Platform** | Adobe Commerce (Cloud / On-Premise) and Magento Open Source 2.0.x – 2.4.x |
| **PHP Version** | Compatible with the PHP version required by your installed Magento release |

---

## Supported Product Types

The Make An Offer bargaining functionality is supported on the following catalog product types:

- **Simple Products**: Standard standalone physical items.
- **Configurable Products**: Products with swatches, sizes, colors, and options. Child product pricing and inventory are dynamically tracked.
- **Virtual Products**: Non-physical items such as warranties, services, or memberships.
- **Downloadable Products**: Digital goods and electronic media files.

::: warning Unsupported Product Types
The module does not support **Bundle Products** or **Grouped Products**. When configuring offers, ensure target products belong to one of the four supported types.
:::

---

## Companion Modules & Theme Integrations

- **Hyvä Theme Compatibility**:
  - Full compatibility with the modern Hyvä Themes storefront is available via the official companion module `Webkul_MakeAnOfferHyva` (`webkul/module-make-an-offer-hyva`).
  - Replaces legacy RequireJS and Knockout UI components with lightweight Alpine.js reactivity and Tailwind CSS styling.
  - Requires `hyva-themes/magento2-theme-module` and `hyva-themes/magento2-compat-module-fallback`.
- **Google reCAPTCHA**:
  - Compatible with native Magento Google reCAPTCHA modules (`Magento_ReCaptchaFrontendUi`, `Magento_ReCaptchaAdminUi`).
  - Supports Google reCAPTCHA v2 ("I'm not a robot" Checkbox and Invisible) and reCAPTCHA v3 Invisible.
- **GraphQL & REST Headless Architecture**:
  - Ships with native GraphQL schema (`etc/schema.graphqls`) and resolvers for decoupled PWA storefronts.
  - REST Web API token integration endpoints for mobile iOS and Android applications.

---

::: note Production Recommendation
Always take a complete backup of your database and web files before installing or upgrading extensions in a production environment. We strongly recommend testing the offer submission, discussion chat, and promotional discount workflows in a staging environment prior to going live.
:::
