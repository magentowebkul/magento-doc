# System Requirements

Before installing the **Webkul Magento 2 Elasticsearch** extension, verify that your server environment, Magento version, and Elasticsearch instance meet the prerequisites outlined below.

---

## Server & Magento Requirements

- **Magento Platform**: Adobe Commerce / Magento Open Source 2.0.x through 2.4.x.
- **PHP Version**: Compatible with your active Magento 2 version.

---

## Elasticsearch Server Requirements

- **JVM & Memory Allocation**:
  - Minimum **2 GB** dedicated heap size (`-Xms2g -Xmx2g`) for small catalogs (< 10,000 SKUs).
  - Recommended **4 GB – 8 GB+** heap size for medium to large enterprise catalogs (> 50,000 SKUs).
- **Network & Access**:
  - Open TCP communication between your Magento web/application server and the Elasticsearch host port (default: `9200`).
  - If Elasticsearch is hosted on a separate node, ensure firewall rules or security groups allow incoming traffic from your Magento server IP.

---

## Hyvä Theme Storefront Requirements

If your store runs on [Hyvä Themes](https://www.hyva.io/):
- **Hyvä Theme Module**: `hyva-themes/magento2-theme-module`.
- **Hyvä Compatibility Fallback**: `hyva-themes/magento2-compat-module-fallback`.
- **Extension Companion**: `webkul/elastic-search-hyva` module.

::: note Important
Always back up your store database and code files before installing or upgrading extensions. We strongly advise deploying and testing changes in a staging environment first.
:::
