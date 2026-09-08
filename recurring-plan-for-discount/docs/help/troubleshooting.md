# Troubleshooting

If you encounter any unexpected issues while installing, configuring, or using the **Magento 2 Recurring Plan For Discount** module, refer to the common troubleshooting solutions below.

---

## Module Not Appearing After Installation

If the module menus or configurations do not appear in the admin panel after installation, verify that all deployment commands were executed in order:

```bash:no-line-numbers
composer require stripe/stripe-php
```
<ExplainCode explanation="Ensures the official Stripe SDK is present in your vendor directory." />

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Applies declarative schema and creates the required database tables." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles all dependency injection and interceptor classes." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="Publishes static files and assets for frontend and adminhtml areas." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Updates indexers to reflect any modified entity data." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes all configuration and layout caches." />

---

## Error: "Class 'Stripe\Stripe' not found"

If you encounter this PHP fatal error during checkout or configuration save, the Stripe PHP SDK has not been installed into your Magento `vendor/` directory.

Run the following command in your Magento root directory:
```bash:no-line-numbers
composer require stripe/stripe-php
```

Then recompile and flush the cache:
```bash:no-line-numbers
php bin/magento setup:di:compile
php bin/magento cache:flush
```

---

## Recurring Payment Methods Not Visible at Checkout

* **Module Enabled:** Verify that the extension is enabled under **Stores > Configuration > Webkul > Recurring Discount Settings > General Settings**.
* **Payment Method Enabled:** Confirm that **Webkul Recurring Discount Stripe Payment Method** or **Webkul Recurring Discount PayPal Express Checkout** is set to **Enabled: Yes** in **Stores > Configuration > Sales > Payment Methods**.
* **Cart Contents:** Recurring payment methods appear when purchasing a recurring plan product. Regular non-recurring products use standard store payment gateways.
* **API Credentials:** Ensure your Stripe API keys or PayPal Client ID/Secret are valid and without extra whitespace.

---

## Subscription Discount Not Deducted in Cart

* **Customer Authentication:** Ensure the customer is logged in with the specific account holding the active plan subscription.
* **Active Status:** In the admin panel under **Recurring Plan for Discount > Manage Recurring Discount Subscriptions**, confirm the subscription status is **Active** and has not expired or canceled.
* **Invoice Paid:** Invoices must be in **Paid** status for subscription validity to trigger.

---

## Automated Renewal Orders or Reminder Emails Not Dispatched

* Ensure that Magento cron is configured and running properly on your web server (`* * * * * /usr/bin/php /path/to/magento/bin/magento cron:run`).
* Verify email templates are selected under **Stores > Configuration > Webkul > Recurring Discount Settings**.
* Check store mail sending settings under **Stores > Configuration > Advanced > System > Mail Sending Settings**.

---

## Still Need Help?

For any custom development requests, doubts, or technical assistance:
* Drop an email to **support@webkul.com**
* Submit a ticket through our [HelpDesk Support Portal](https://webkul.uvdesk.com/en/customer/create-ticket/)
