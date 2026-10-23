# Requirements

Before installing the **Magento 2 Marketplace Vendor Attribute Manager** extension, please ensure your server environment and Magento store satisfy the prerequisites outlined below.

---

## Store Environment Requirements

* **Magento Setup:** A working installation of Magento 2 Open Source or Adobe Commerce (compatible with versions 2.0.x through 2.4.x).
* **PHP Compatibility:** A PHP version compatible with your active Magento 2 release (PHP 7.4, 8.1, 8.2, 8.3, or higher).
* **Web Server:** Apache 2.4+ or Nginx 1.x+ with URL rewrite enabled.
* **Database:** MySQL 8.0+ or MariaDB 10.4+ with InnoDB storage engine.

---

## Extension Prerequisites

This module is designed as an add-on extension. You must have the core marketplace extension installed and operational:

* **[Webkul Magento 2 Multi Vendor Marketplace](https://store.webkul.com/magento2-multi-vendor-marketplace.html)** (`Webkul_Marketplace`) must be installed and active in your store.

---

## Hyvä Theme Requirements (Optional)

If your storefront is built using **Hyvä Themes**, ensure the following components are available:

* **Hyvä Theme Framework:** An active Hyvä default or child theme.
* **Hyvä Compat Module Fallback:** `Hyva_CompatModuleFallback` module enabled.

---

::: tip Backup Recommendation
Always create a complete file system and database backup before deploying any extension in a production environment. We strongly recommend testing the installation in a dedicated staging or local development environment first.
:::
