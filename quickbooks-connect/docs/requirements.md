# Requirements

Before installing the **Magento 2 QuickBooks Connect** extension, please ensure your environment meets the system, PHP library, and accounting service requirements listed below.

---

## Environment Requirements

* **Magento Setup:** Adobe Commerce / Magento 2 (Community or Enterprise edition, versions 2.0.x through 2.4.x).
* **PHP Version:** PHP 7.4, 8.1, 8.2, or 8.3 (matching your active Magento 2 version).
* **HTTPS Security:** Valid SSL certificate on your web server (`https://`) required by Intuit OAuth 2.0 for redirect URIs.
* **PHP Extensions:** `curl`, `json`, `openssl`, `mbstring`, `zip`.

---

## Third-Party Library Requirements

The module relies on the official Intuit QuickBooks V3 PHP SDK:

* **Package:** `quickbooks/v3-php-sdk`
* **Version:** `6.2` (or `^6.1`)
* **Installation:** Installed via Composer before executing Magento setup upgrade commands.

---

## QuickBooks Online Account Requirements

* **Intuit Developer Account:** Free account registered at [Intuit Developer Portal](https://developer.intuit.com/) to create an app and obtain Client ID and Client Secret credentials.
* **QuickBooks Online Subscription:** Active Sandbox account (for testing) or Live Production QuickBooks Online account (Simple Start, Essentials, Plus, or Advanced).

---

::: tip Backup Recommendation
Always create a full file and database backup before deploying any extension in a production environment. We recommend testing OAuth authorization and order synchronization in a sandbox/staging environment first.
:::
