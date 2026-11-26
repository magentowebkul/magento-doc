# Troubleshooting & Common Issues

This guide provides solutions to common questions and issues encountered when deploying or operating the **Magento 2 Gift Card** extension.

---

## 1. Gift Card Code Not Generated After Customer Places Order

### Symptom
Customer successfully completes payment for a gift card, but no voucher code is visible in the admin panel or dispatched to the recipient.

### Cause
In Magento 2, gift cards are designed to generate codes only **after the order is invoiced**. If the order is paid via an offline payment method (e.g., Bank Transfer, Check/Money Order) or an authorization-only gateway, the order remains in `Pending` or `Processing` status without an invoice.

### Solution
1. In Magento Admin, navigate to **Sales > Orders** and open the customer order.
2. Verify if an invoice exists under the **Invoices** tab.
3. If no invoice exists, click **Invoice** in the top action bar and submit the invoice.
4. Once invoiced, the event listener activates, generates the voucher code, and dispatches the email/SMS.

---

## 2. Scheduled Gift Cards Are Not Delivered on Scheduled Date

### Symptom
Customers scheduled a gift card for future delivery, but notifications are not received on the scheduled day.

### Cause
Scheduled delivery relies on Magento's background cron worker (`cron:run`). If cron is halted or misconfigured, the delivery queue will not process.

### Solution
1. Ensure the Magento cron daemon is active in your server crontab:
   ```bash
   crontab -l
   ```
   Confirm the entry exists:
   ```bash
   * * * * * /usr/bin/php /path/to/magento/bin/magento cron:run
   ```
2. Run the cron worker manually from the terminal to test execution:
   ```bash
   php bin/magento cron:run
   ```
3. Check `var/log/cron.log` and `var/log/system.log` for execution errors.

---

## 3. SMS Notifications Fail to Deliver

### Symptom
Email notifications are delivered, but SMS text messages are not received by the recipient.

### Cause
Invalid Twilio credentials, negative Twilio account balance, or unformatted international phone numbers.

### Solution
1. Navigate to **Stores > Configuration > Webkul > Gift Card > Gift Card Text Message Setting**.
2. Verify that **Twilio Account SID**, **Twilio Auth Token**, and **Sender Mobile** are entered accurately without trailing whitespace.
3. Verify that the recipient's phone number includes the international country prefix (e.g., `+1` for USA, `+44` for UK).
4. Log in to your [Twilio Console](https://console.twilio.com/) and review the **Logs > Messaging** dashboard to inspect delivery statuses and API error codes.

---

## 4. Gift Card Input Field Not Appearing on Cart or Checkout

### Symptom
The "Apply Gift Card" accordion or input box is missing on the storefront shopping cart or checkout page.

### Solution
1. Navigate to **Stores > Configuration > Webkul > Gift Card > General Settings**.
2. Verify that **Active** is set to **Yes**.
3. Flush the Magento cache:
   ```bash
   php bin/magento cache:flush
   ```
4. If using a third-party or custom one-step-checkout extension, ensure standard Magento layout handles `checkout_cart_index.xml` and `checkout_index_index.xml` are not overridden or suppressing container blocks.
