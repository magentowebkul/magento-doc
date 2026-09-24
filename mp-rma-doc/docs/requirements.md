# System Requirements

Before installing the **Webkul Magento 2 Marketplace RMA System** extension, verify that your server environment, Magento version, and required parent modules meet the prerequisites outlined below.

---

## Server & Platform Requirements

- **Magento Platform**: Adobe Commerce (Cloud/On-Premise) / Magento Open Source.
- **PHP Version**: Compatible with your active Magento 2 release version.

---

## Mandatory Base Extension

The **Marketplace RMA System** is an enterprise add-on built specifically for multi-vendor marketplaces:

- **Webkul Multi-Vendor Marketplace Core**: You must have the [Magento 2 Marketplace Extension](https://store.webkul.com/magento2-multi-vendor-marketplace.html) installed and activated before proceeding with the RMA module setup.

---

## Optional Companion Modules & Integrations

- **Hyvä Theme Compatibility**:
  - Storefront compatibility is provided via the companion package `Webkul_MpRmaSystemHyva`.
  - Requires `hyva-themes/magento2-theme-module` and `hyva-themes/magento2-compat-module-fallback`.
- **Marketplace Wallet System**:
  - If [Magento 2 Marketplace Wallet System](https://store.webkul.com/magento2-marketplace-wallet-system.html) is installed, sellers and admins can issue refunds directly into the customer's store wallet.
- **Headless & PWA Commerce**:
  - The extension includes native GraphQL query and mutation schemas for decoupled storefronts.

::: note Important
Always back up your store database and code files before installing or upgrading extensions. We strongly advise deploying and testing changes in a staging environment first.
:::
