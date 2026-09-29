# System Requirements

Before installing the **Webkul Magento 2 Marketplace Seller Subdomain** extension, verify that your server environment, hosting infrastructure, Magento version, and required parent modules meet the prerequisites outlined below.

---

## Server & Platform Requirements

- **Magento Platform**: Compatible with Adobe Commerce (Cloud / On-Premise) and Magento Open Source 2.0.x through 2.4.x.
- **PHP Version**: Must match the system requirements of your installed Magento 2 release.
- **Web Server**:
  - **Apache 2.4+** with `mod_rewrite` enabled.
  - **Nginx 1.18+** with proper fastcgi PHP-FPM configuration.
- **DNS & Networking Prerequisites**:
  - **Wildcard DNS Record**: An `A` or `CNAME` record configuring `*.yourdomain.com` pointing to the Magento server IP address is mandatory for dynamic seller subdomains.
  - **Wildcard SSL / TLS Certificate**: A wildcard certificate (e.g., `*.yourdomain.com`) or multi-domain SAN SSL certificate is required to serve vendor subdomains over HTTPS without browser security warnings.

---

## Mandatory Base Extension

The **Seller Subdomain** extension operates as an add-on to Webkul's marketplace ecosystem:

- **Webkul Multi-Vendor Marketplace Core**: You must have the [Magento 2 Marketplace Extension](https://store.webkul.com/magento2-multi-vendor-marketplace.html) installed and verified before activating the Seller Subdomain module.

---

## Optional Companion Modules & Integrations

- **Hyvä Theme Compatibility**:
  - Full compatibility with the modern Hyvä Themes storefront is provided via the companion module package `Webkul_SellerSubDomainHyva` (`webkul/vendor-sub-domain-hyva`).
  - Requires `hyva-themes/magento2-theme-module` and `hyva-themes/magento2-compat-module-fallback`.
- **Search Engine Engines**:
  - Native integration with Magento's catalog search layer, supporting **Elasticsearch** and **OpenSearch**.

::: note Important
Always back up your store database, web server virtual host configurations, and code files before installing or upgrading extensions. We strongly advise validating subdomain routing and SSL configuration in a staging environment first.
:::
