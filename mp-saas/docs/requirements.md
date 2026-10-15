# Requirements & System Compatibility

Before installing and configuring the **Webkul Multi Company SaaS Extension for Magento 2**, ensure that your hosting environment and Magento 2 instance meet the required software versions and dependencies.

## Core System Requirements

| Component | Supported Version | Verification Command |
| :--- | :--- | :--- |
| **Magento Platform** | Magento Open Source (CE) & Adobe Commerce (EE) `2.0.x`, `2.1.x`, `2.2.x`, `2.3.x`, `2.4.x` – `2.4.9` | `php bin/magento --version` |
| **PHP Runtime** | PHP `8.1.x`, `8.2.x`, `8.3.x`, `8.4.x`, and `8.5.x` | `php -v` |
| **Web Server** | Nginx `1.20.x` – `1.26.x` / Apache `2.4.x` (HTTPS / TLS 1.3 enabled) | `nginx -v` / `apache2 -v` |
| **Wildcard DNS & SSL** | Wildcard `*.yourdomain.com` (A/CNAME) & Wildcard SSL (TLS 1.2 / 1.3) | `dig *.yourdomain.com +short` |
| **Database Engine** | MySQL `8.0.28+` – `8.4.x` / MariaDB `10.4.x` – `10.11.x` (`InnoDB`) | `mysql -V` |
| **Search Engine** | OpenSearch `1.3.x`, `2.5.x` – `2.15.x` / Elasticsearch `7.17.x`, `8.x` | `curl -s http://localhost:9200` |
| **Package Manager** | Composer `2.2.x` (LTS) – `2.7.x` / `2.8.x` | `composer --version` |
| **Background Cron** | Unix Crontab (`* * * * *` executing every 60 seconds) | `crontab -l` |

### 1. Magento & Adobe Commerce Platform

* **Cloud & On-Premise Support**: Functions seamlessly in on-premise dedicated servers, VPS, AWS EC2, Google Cloud Platform, and Adobe Commerce on Cloud infrastructure.
* **Operating Mode**: For live environments, ensure Magento is set to `production` mode (`php bin/magento deploy:mode:set production`) to maximize asset delivery performance.

### 2. PHP Environment & Configuration

#### Recommended `php.ini` Directives

Ensure your PHP runtime allocates sufficient memory and execution time to handle recurring subscription lifecycle jobs and code compilation:

```ini
memory_limit = 2G              ; Minimum 2G (4G recommended for setup:di:compile)
max_execution_time = 18000     ; Prevent timeout during static content deployment
zlib.output_compression = On
opcache.enable = 1
opcache.memory_consumption = 512
opcache.max_accelerated_files = 100000
opcache.save_comments = 1
```

### 3. Web Server, Wildcard DNS & SSL

* **Wildcard DNS**: Point an `A` or `CNAME` record for `*.yourdomain.com` to your server IP for dynamic vendor subdomain resolution.
* **Wildcard SSL Certificate**: Install a wildcard TLS certificate (`*.yourdomain.com`) to secure all seller subdomains over HTTPS.
* **Public Webhook Ingress**: Ensure the server is accessible over public HTTPS to receive Stripe and PayPal recurring billing webhooks.

### 4. Database Engine (MySQL / MariaDB)

* **Engine**: The database storage engine must be set to `InnoDB`.
* **Recommended Configuration in `my.cnf`**:
  ```ini
  innodb_buffer_pool_size = 2G  ; Allocate 50-70% of available server RAM in production
  max_allowed_packet = 64M
  wait_timeout = 600
  interactive_timeout = 600
  ```
* **SQL Mode**: Ensure SQL mode is aligned with standard Magento 2 defaults (avoid non-standard strict modes that could break core third-party queries).

### 5. Search Engine (OpenSearch / Elasticsearch)

Magento 2.4.x requires a running OpenSearch or Elasticsearch service for catalog indexing and storefront search:

* **OpenSearch**: Versions `1.3.x`, `2.x` (standard and recommended for Magento 2.4.6 and above).
* **Elasticsearch**: Versions `7.17.x` or `8.x`.
* **Default Port `9200`**:

```bash
curl -s -XGET http://localhost:9200
```

::: note Why port 9200?
**Port 9200** is the default HTTP REST API port for both **Elasticsearch** and **OpenSearch**. The `curl -XGET http://localhost:9200` command queries this port to confirm the search engine is operational and returns cluster status and version information as JSON. If your hosting environment uses a non-standard port or remote host, adjust the connection parameters in Magento under **Stores > Configuration > Catalog > Catalog > Catalog Search**.
:::

### 6. Background Automation (Magento Cron Daemon)

The SaaS recurring billing system depends on the Magento cron scheduler running every minute without interruption.

```bash
# Add to your web server user's crontab (e.g., crontab -u www-data -e)
* * * * * /usr/bin/php /var/www/html/bin/magento cron:run 2>&1 | grep -v "Ran jobs by schedule" >> /var/www/html/var/log/magento.cron.log
```

::: tip Why Cron is Essential for SaaS
* **Automated Expiry Checks**: Detects subscriptions that reached their renewal date and marks expired memberships.
* **Commission Suspension Toggles**: Automatically revokes the 0% commission privilege if an active subscription lapses or is cancelled.
* **Recurring Billing Notifications**: Triggers automated reminder emails to sellers prior to renewal deadlines.
* **Stripe & PayPal Webhook Reconciliation**: Rechecks pending recurring billing transactions against payment gateway statuses.
:::

### 7. Composer & Memory Optimization

* **Composer Version**: `Composer 2.x` (version `2.2+` LTS recommended).
* **Memory Management**: When installing packages via Composer on systems with constrained RAM, always set the memory limit flag:

```bash
COMPOSER_MEMORY_LIMIT=-1 composer require stripe/stripe-php:~16.0.0
```

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
