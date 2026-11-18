# Troubleshooting Guide

Find quick answers and remediation steps for common situations encountered while splitting or merging orders in Magento 2.

---

## Common Issues & Solutions

### 1. "Invoiced orders cannot be split" Error
- **Cause:** Magento order architecture locks financial transaction lines once an invoice has been generated to protect accounting records.
- **Resolution:** Orders must be split **before** generating invoices. If an invoice has already been generated, process the shipment normally or issue a credit memo if necessary.

---

### 2. "Shipped orders cannot get merged or split"
- **Cause:** A shipment has already been registered with carrier tracking information, meaning physical stock has already left the warehouse.
- **Resolution:** Splitting or merging is strictly prohibited on shipped orders. Only orders in **Pending** or **Processing** states prior to shipment generation are eligible.

---

### 3. "All orders should be placed with the same payment method"
- **Cause:** Attempting to merge an order placed with Cash on Delivery or Bank Transfer with an order placed via an online gateway (e.g., PayPal or Stripe).
- **Resolution:** The extension requires payment consistency across merged batches. Merge offline orders with offline orders, and online orders with online orders.

---

### 4. "Collective weight or order amount exceeds threshold"
- **Cause:** The sum of weights or order totals for the selected orders exceeds the limits configured under **Merge Order Validations**.
- **Resolution:** Navigate to **Stores > Configuration > Webkul > Split And Merge Order > Merge Order Validations** and adjust the **Collective Weight After Merge Maximum** or **Order Amount After Merge (Maximum)** values to accommodate larger consignments.

---

### 5. Auto-Merge Not Executing Automatically
- **Cause:** Magento cron scheduler is stopped or misconfigured.
- **Resolution:** Verify that Magento's cron worker is executing on the server:
  ```bash
  crontab -l
  # Ensure the following job exists and runs every minute:
  * * * * * /usr/bin/php /path/to/magento/bin/magento cron:run
  ```
  You can trigger cron manually from terminal to verify:
  ```bash
  php bin/magento cron:run --group=default
  ```

---

### 6. Translations Not Appearing on Storefront or Admin
- **Cause:** Static view assets need redeployment or cache is stale.
- **Resolution:** Run static content deployment and flush application caches:
  ```bash
  php bin/magento setup:static-content:deploy -f <locale_code>
  php bin/magento cache:flush
  ```
