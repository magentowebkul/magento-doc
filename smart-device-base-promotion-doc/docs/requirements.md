# System Requirements

Before installing the **Webkul Magento 2 Smart Device Based Promotions** extension, verify that your server environment, hosting setup, Magento release, and browser matrix meet the prerequisites outlined below.

---

## Server & Platform Requirements

- **Magento Platform**: Compatible with Adobe Commerce (Cloud / On-Premise) and Magento Open Source 2.0.x through 2.4.x.
- **PHP Version**: Compatible with the PHP requirement of your installed Magento 2 release.
- **Content Tools**: Magento Page Builder must be enabled if you wish to use the drag-and-drop Page Builder interface when composing promotional banner descriptions.

---

## Companion Modules & Theme Integrations

- **Hyvä Theme Compatibility**:
  - Full compatibility with the modern Hyvä Themes storefront is available via companion module `Webkul_SmartDeviceBasePromotionsHyva` (`webkul/smart-device-base-promotions-hyva`).
  - Requires `hyva-themes/magento2-theme-module` and `hyva-themes/magento2-compat-module-fallback`.
- **Magento Page Builder**:
  - Supports standard Magento WYSIWYG editor and Page Builder elements for banner media insertion and rich text styling.
- **GeoIP / Geolocation**:
  - Uses standard PHP/Magento server environment IP headers (`HTTP_CLIENT_IP`, `HTTP_X_FORWARDED_FOR`, `REMOTE_ADDR`) for location country resolution when location-specific promotions are enabled.

---

::: note Important
Always make a complete backup of your database and web files before installing or upgrading extensions in a production environment. We strongly recommend testing promotional rules and device simulations in a staging environment prior to going live.
:::
