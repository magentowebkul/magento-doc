# Requirements & System Compatibility

Before installing and configuring the **Webkul Multi Company SaaS Extension for Magento 2**, ensure that your hosting environment and Magento 2 instance meet the required software versions and dependencies.

---

## Core System Requirements

| Specification | Supported Versions | Verification Command |
| :--- | :--- | :--- |
| **Magento Platform** | Magento Open Source (CE) / Adobe Commerce (EE) 2.0.x – 2.4.x (Latest: **2.4.9**) | `php bin/magento --version` |
| **PHP Version** | PHP 8.1, 8.2, 8.3, 8.4, **8.5** | `php -v` |
| **Web Server** | Nginx 1.20+ / Apache 2.4+ with HTTPS enabled | `nginx -v` / `apache2 -v` |
| **Database** | MySQL 8.0+ / MariaDB 10.4+ | `mysql -V` |
| **Search Engine** | OpenSearch 1.3+ / 2.x or Elasticsearch 7.17.x / 8.x | `curl -XGET http://localhost:9200` |
| **Composer** | Composer 2.x | `composer --version` |

::: note Why port 9200?
**Port 9200** is the default HTTP REST API port for both **Elasticsearch** and **OpenSearch**. The `curl -XGET http://localhost:9200` command queries this port to confirm the search engine is running and returns its version info as JSON. If your server uses a custom port, replace `9200` with the port configured in your `elasticsearch.yml` / `opensearch.yml` file.
:::

---

## Required Module Dependencies

::: important Mandatory Prerequisite Extensions
The Multi Company SaaS module functions as an add-on and requires the following prerequisite modules to be installed and enabled beforehand:
:::

1. **Webkul Magento 2 Multi-Vendor Marketplace** (`webkul/module-marketplace`):
   Provides seller account architecture, marketplace management grids, and seller commission calculation hooks.
2. **Webkul Magento 2 Vendor Subdomain** (`webkul/vendor-sub-domain`):
   Provides DNS wildcard/subdomain routing infrastructure that maps seller handles to tenant storefronts.

---

## Required Third-Party PHP SDKs

To support recurring automated billing cycles and webhook listeners, the following SDK libraries must be installed via Composer:

| Library | Version Constraint | Purpose |
| :--- | :--- | :--- |
| `stripe/stripe-php` | `~16.0.0` or `^16.0.0` | Powers Stripe recurring customer management, payment intents, and webhooks. |
| `paypal/rest-api-sdk-php` | `*` | Powers PayPal recurring billing agreements, IPN listeners, and express checkout. |

Install both SDKs in your Magento root directory:

```bash
composer require stripe/stripe-php:~16.0.0
composer require paypal/rest-api-sdk-php:*
```

---

## Module Architectural Restrictions

::: warning Cart & Payment Isolation Rules
* **Cart Exclusivity**: When a seller adds a SaaS membership plan to the shopping cart, standard marketplace catalog products cannot be added concurrently. SaaS plans must be checked out independently.
* **Recurring Gateway Enactment**: SaaS membership purchases can only be completed via configured recurring payment gateways (PayPal Recurring Express Checkout or Recurring Stripe Payment Method). Standard one-time payment methods (e.g., Check/Money Order, Bank Transfer, COD) are restricted for membership orders.
:::

---

## Verification Commands

Confirm that required PHP extensions and composer packages are available:

```bash
# Verify essential PHP extensions
php -m | grep -E 'curl|json|mbstring|openssl|zip'

# Verify prerequisite Webkul modules
php bin/magento module:status Webkul_Marketplace Webkul_VendorSubDomain
```
