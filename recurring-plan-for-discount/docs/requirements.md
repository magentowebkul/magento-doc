# Requirements

Before installing the **Magento 2 Recurring Plan For Discount** extension, please ensure your server and Magento instance meet the following prerequisites.

---

## Required Store Setup

* **Magento Setup:** A working installation of Magento 2 / Adobe Commerce (supports versions 2.0.x through 2.4.x).
* **PHP Compatibility:** A PHP version compatible with your active Magento 2 setup.
* **Cron Configuration:** Active Magento cron execution (`bin/magento cron:run`) to automate renewal orders, subscription management, and reminder emails.

---

## Third-Party Dependencies & Payment Gateways

* **Stripe PHP SDK:** The module requires the official Stripe PHP library (`stripe/stripe-php >= 8.0.0`) to handle subscription checkouts and recurring charges.
* **Stripe Account:** A valid Stripe merchant account with API keys (Publishable Key, Secret Key, and Webhook Secret) for Stripe recurring payments.
* **PayPal Business Account:** A valid PayPal Business account configured for PayPal Express Checkout and recurring billing (Client ID, Client Secret, API Username, Password, and Signature).

---

::: tip Important
Always back up your store (database and files) before installing any new extension. We strongly recommend testing the module first in a staging or development environment.
:::
