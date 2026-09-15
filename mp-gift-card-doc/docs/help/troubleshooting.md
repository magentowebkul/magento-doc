# Troubleshooting Guide

This guide helps store administrators and marketplace vendors quickly diagnose and resolve common issues related to the **Webkul Magento 2 Marketplace Gift Card** extension.

---

## 1. Notification Emails Not Sending

### Symptom
Recipients do not receive notification emails containing their gift card code and message after purchase.

### Diagnostics & Solutions
1. **Check Order Invoicing**: Gift card code generation triggers when the order is marked as **Invoiced** or **Complete**. Ensure the payment gateway automatically invoices virtual products or manually click **Invoice** in Admin Order Details.
2. **Verify Admin Email Settings**: Navigate to `Stores > Configuration > Webkul > Gift Card > Gift Card Email Setting` and verify that a valid template is assigned.
3. **SMTP Configuration**: Navigate to `Stores > Configuration > Advanced > System > Mail Sending Settings` and verify that SMTP is correctly configured.
4. **Magento Cron**: Verify that Magento cron jobs are actively running:
   ```bash
   php bin/magento cron:run
   ```
   <ExplainCode explanation="Executes all pending Magento cron jobs, including those for email dispatch and indexer updates." />

---

## 2. Gift Card Code Not Applying at Checkout

### Symptom
Customer enters a gift card code at checkout and receives an `error` stating *"The coupon code is invalid or has expired."*

### Diagnostics & Solutions
1. **Check Expiration Date**: Verify if the card's active period has elapsed. Inspect the **Expiry Time** column in `Marketplace Management > Gift Card Details`.
2. **Check Remaining Balance**: If the remaining balance is `$0.00`, the card cannot be used.
3. **Gift Card Restrictions**: If the order contains another Gift Card product and `Allow Gift Card Code On Gift Card Product` is set to **No**, the system will block the code application. Change the setting in `Stores > Configuration > Webkul > Gift Card` to **Yes** if desired.

---

## 3. Vendor Cannot Create Gift Card Products

### Symptom
Marketplace sellers cannot locate the Gift Card product type in their seller dashboard.

### Diagnostics & Solutions
1. **Module Dependency**: Ensure `Webkul_Marketplace` is updated and active.
2. **Admin Permission**: Verify in Marketplace configuration under `Allowed Product Types` that Gift Card products are enabled for vendors.
