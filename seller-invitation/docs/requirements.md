# Requirements

Before installing the **Webkul Marketplace Seller Invitation for Magento 2** extension, review the system compatibility, dependencies, and environment prerequisites outlined below.

---

## Supported Software & Versions

| Component | Minimum Version | Recommended Version | Notes |
|---|---|---|---|
| **Magento 2 Edition** | 2.4.4 | 2.4.7 / 2.4.8 | Community Edition (CE) and Adobe Commerce / Enterprise (EE). |
| **PHP** | 8.1 | 8.2 / 8.3 / 8.4 | Compatible with PHP versions supported by Magento 2.4.4 through 2.4.8+ (v5.0.3/v5.0.4). |
| **Webkul Marketplace** | 5.0.0 | 5.1.2+ | **Mandatory dependency** (`webkul/module-marketplace: 5.*`). |
| **Webkul Base** | 4.0.0 | 4.0.0+ | **Mandatory dependency** (`webkul/module-base: ^4.0`). |
| **Web Server** | Apache 2.4 / Nginx 1.18+ | Nginx 1.24+ | SSL / TLS HTTPS certificate configured. |
| **Database** | MySQL 8.0 / MariaDB 10.6+ | MySQL 8.0+ | Declarative schema (`etc/db_schema.xml`) installed. |

---

## Required Module Dependencies

This module functions as an add-on to the **Webkul Multi-Vendor Marketplace** ecosystem:

1. **`webkul/module-marketplace`**: The primary multi-vendor foundation that provides seller accounts, commissions, shop URLs, seller profile management, and marketplace controllers.
2. **`webkul/module-base`**: Provides Webkul license validation, unified administration menus, and cross-module helper utilities.

::: warning Dependency Requirement
You **must** install and enable the **Webkul Multi-Vendor Marketplace** extension (`Webkul_Marketplace`) before installing and enabling the Seller Invitation extension.
:::

---

## PHP Requirements & Extensions

The extension relies on native PHP extensions and Magento Framework components:

| Extension / Directive | Minimum Value | Purpose |
|---|---|---|
| `json` | Enabled | Encodes and decodes JSON parameters for frontend AJAX validations and request rate-limiting hashes. |
| `openssl` | Enabled | Generates cryptographic hash tokens (`hash('sha256')`) for duplicate submission protection. |
| `memory_limit` | `2G` | Standard Magento recommendation for compilation and static deployment. |
| `max_execution_time` | `300` seconds | Recommended for Magento CLI setup operations. |

---

## Network & Email Delivery Prerequisites

1. **Active SSL (HTTPS)**: The invitation link directs prospective merchants to register on your storefront (`customer/account/create/?inviteCode=...`). To ensure customer security and credentials privacy, the store domain must serve pages over secure HTTPS.
2. **Mail Transport / SMTP Service**: The extension dispatches transactional invitation emails to prospective sellers using Magento's `TransportBuilder`. Verify that your Magento store has a working email mechanism:
   - Configured SMTP server or third-party email provider (e.g., Amazon SES, SendGrid, Mailgun).
   - Test transactional email delivery under **Stores → Configuration → Advanced → System → Mail Sending Settings**.
3. **Magento Cron**: Used for cleaning expired cache entries and standard system maintenance.

---

## Pre-Installation Checklist

- [ ] Webkul Multi-Vendor Marketplace module (`Webkul_Marketplace`) is installed, enabled, and functioning.
- [ ] Webkul Base module (`Webkul_Base`) is installed and verified.
- [ ] Magento store is running on Magento 2.4.4 or higher with PHP 8.1+.
- [ ] Outbound email sending (SMTP or local sendmail) is verified and delivering emails.
- [ ] Storefront SSL (HTTPS) is active on customer account and registration URLs.

::: tip Next Step
Proceed to the [Installation](/installation) guide to install the extension files.
:::
