# Requirements & System Compatibility

Before installing and configuring the **Magento 2 Multi Vendor Recurring Payments & Subscription** module, verify that your server environment and Magento installation meet the prerequisite software packages and module dependencies.

---

## Core System Requirements

| Specification | Requirement |
| --- | --- |
| **Platform** | Magento 2 (Adobe Commerce) 2.4.x (up to 2.4.9) Open Source & Commerce Cloud |
| **PHP Version** | PHP 8.1, 8.2, 8.3, 8.4, or 8.5 (matching your Magento version requirements) |
| **Composer** | Composer 2.x |
| **Payment SDK** | `paypal/rest-api-sdk-php` |
| **Database** | MySQL 8.0 or MariaDB 10.4+ |
| **Web Server** | Apache 2.4+ or Nginx 1.18+ with SSL/TLS (HTTPS is strictly required for Stripe & PayPal webhooks) |

---

## Required Module Dependencies

::: important Module Prerequisites
This module is an add-on for the Webkul marketplace ecosystem. You **must** install the base marketplace and base recurring modules prior to deploying `Webkul_MpRecurringPayment`:
:::

1. **Webkul Magento 2 Multi Vendor Marketplace**: Core marketplace extension (`Webkul_Marketplace` version 5.x).
2. **Webkul Magento 2 Recurring Payments & Subscriptions**: Core recurring payment engine (`Webkul_Recurring` version 4.x).
3. **PayPal REST SDK**: `paypal/rest-api-sdk-php` required for executing seller PayPal Mass Payouts.

```bash
# Example composer requirement for PayPal SDK
composer require paypal/rest-api-sdk-php
```

---

## Payment Gateway Prerequisites

To accept live recurring subscriptions and disburse seller shares:

* **Stripe Connect Account**: A verified Stripe account with Connect platform capabilities enabled to support direct charges or transfers between marketplace sellers and the platform.
* **PayPal Business Account**: A PayPal Business account with:
  * Express Checkout API credentials (Username, Password, Signature).
  * REST App credentials (Client ID and Secret) for automated Payouts / Mass Payments.
  * Instant Payment Notification (IPN) listener enabled pointing to the store's webhook endpoint.
* **SSL Certificate (HTTPS)**: Valid SSL certificate configured across storefront and admin panel. Stripe and PayPal reject webhook delivery to non-HTTPS endpoints.


