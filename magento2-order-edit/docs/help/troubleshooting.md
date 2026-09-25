# Troubleshooting

Use this guide to diagnose and resolve common questions and issues encountered when configuring or using the **Webkul Magento 2 Order Edit** extension.

---

## 1. Edit or Remove Buttons Do Not Appear on Order View Page

### Symptoms
The administrator opens an order in the Magento Admin Panel (`sales/order/view`), but the **Edit** and **Remove** links in the Items Ordered table, the **Add Products** button, and the **Apply Coupon** form are missing.

### Diagnostics & Resolution
1. **Verify Module Status in System Configuration**:
   - Navigate to **Stores → Configuration → Webkul → Order Edit**.
   - Ensure that **Enable Module** is set to **Yes**.
   - Flush the configuration cache:
     ```bash
     php bin/magento cache:clean config
     ```
2. **Check Invoicable Status (`canInvoice`)**:
   - The module intentionally restricts editing to orders that can still be invoiced (`$order->canInvoice() === true`).
   - If an order is already **Invoiced** or **Complete**, line items cannot be modified to preserve accounting compliance with payment gateways and legal invoices.
3. **Verify Admin User ACL Role**:
   - Navigate to **System → Permissions → User Roles**.
   - Ensure the user's role has permission for **Webkul → Order Edit** (`Webkul_OrderEdit::orderedit`).
4. **Flush Block & Full Page Cache**:
   ```bash
   php bin/magento cache:clean block_html full_page
   ```

---

## 2. "Cannot apply coupon code when individual discount is applied"

### Symptoms
When attempting to apply a discount coupon to an open order, an error message appears:
> *"Cannot apply coupon code when individual discount is applied to order items."*

### Diagnostics & Resolution
1. **Understand the Rule Conflict**:
   - Cart Price Rules calculate promotional discounts across the entire cart or specific categories based on subtotal.
   - If an administrator has previously overridden an item with an individual line-item discount (`discount_amount > 0`), applying a cart rule would create conflicting calculations or double-discounting.
2. **Resolution**:
   - Click **Edit** on the line items that contain custom discount overrides.
   - Set **New Discount Amount** and **Discount Percentage** to `0`.
   - Save the item.
   - Now re-enter and apply the coupon code.

---

## 3. "Not enough salable quantity" When Updating Quantity or Adding Products

### Symptoms
Attempting to increase line item quantity or add a new product fails with an error indicating insufficient stock.

### Diagnostics & Resolution
1. **Multi-Source Inventory (MSI) Salable Stock Check**:
   - The module integrates with Magento MSI and verifies salable quantity on the stock assigned to the order's website.
   - Even if physical quantity exists in the warehouse, unfulfilled orders may have existing reservations that reduce salable quantity to zero.
2. **Resolution**:
   - In the admin panel, check **Catalog → Products** and view the product's **Salable Quantity** column for the applicable stock.
   - If needed, adjust source inventory under **Inventory Sources** or rebalance stock allocations.

---

## 4. Email Notifications Are Not Being Sent

### Symptoms
An order is successfully edited, but neither the customer nor the warehouse team receives an email notification.

### Diagnostics & Resolution
1. **Check Email Configuration**:
   - Navigate to **Stores → Configuration → Webkul → Order Edit → Email Notification Settings**.
   - Verify that **Enable Email Notifications** is set to **Yes**.
   - If notifying admins, ensure valid email addresses are listed under **Admin / Warehouse Email Addresses**.
2. **Verify Message Queue Consumer Worker**:
   - The module uses asynchronous message queuing (`orderedit.email.send`). Emails are not sent synchronously during the page save.
   - Check if the consumer is actively running:
     ```bash
     ps aux | grep "orderedit.email.send"
     ```
   - Start the consumer manually to process backlogged messages:
     ```bash
     php bin/magento queue:consumers:start orderedit.email.send
     ```
3. **Verify Magento Cron**:
   - Ensure the Magento cron service is active in system crontab (`crontab -l -u www-data`).
4. **Inspect Magento Logs**:
   - Check `var/log/system.log` and `var/log/exception.log` for any SMTP or email transport errors.

---

## 5. Shipping Cost Did Not Change After Modifying Items

### Symptoms
Line items were added or quantities increased, but the order's shipping fee remains identical.

### Diagnostics & Resolution
1. **Carrier Calculation Method**:
   - If the order was placed using **Flat Rate Shipping** (e.g. flat $10 per order), the rate is fixed regardless of weight or item count.
   - If using **Table Rate Shipping** or carrier matrices, verify that the updated cart weight, quantity, or subtotal actually crossed into a higher rate tier.
2. **Manual Shipping Rate Recalculation**:
   - The module automatically executes `$helper->reCalculateShipping($quote, $order)` during item updates. If the carrier returns the same rate, the existing shipping amount is preserved.

---

## 6. Maintenance Commands

When deploying code updates, changing configuration paths, or re-indexing, always run:

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento indexer:reindex
php bin/magento cache:flush
```

::: tip Still Having Trouble?
Submit a support ticket with your Magento version, PHP version, and reproduction steps at the [Webkul HelpDesk](https://webkul.uvdesk.com/).
:::
