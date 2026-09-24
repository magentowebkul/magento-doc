# Troubleshooting Guide

This guide assists store administrators, marketplace sellers, and support teams in diagnosing and resolving common operational issues encountered with the **Webkul Magento 2 Marketplace RMA System** extension.

---

## 1. Customers Cannot See the Option to Request RMA

### Symptom
When navigating to their customer dashboard or order history, buyers do not see the **Request New RMA** option or the button is absent.

### Diagnostics & Solutions
1. **Verify Module Status**: Navigate to **Stores > Configuration > Webkul > Marketplace RMA System** and confirm that **Enable Module** is set to **Yes**.
2. **Check Allowed Return Window**:
   - Inspect the **Default Allowed Days** setting in module configuration.
   - If the duration between order placement (or delivery) and the current date exceeds this number, Magento automatically suppresses the return link.
3. **Clear Magento Caches**:
   ```bash
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes configuration and layout caches to ensure recent admin settings take effect immediately." />

---

## 2. Emails Not Being Sent or Received

### Symptom
Neither the customer, the seller, nor the administrator receives email notifications when a new RMA is filed, messages are sent, or statuses are updated.

### Diagnostics & Solutions
1. **Verify Configured Email Addresses**:
   - Check **Admin Email** under General Settings.
   - Check the **Manager Email(s)** field under Automated Workflow Settings.
2. **Verify Email Template Selection**:
   - Ensure that valid transactional templates are selected for **New RMA Template**, **Update RMA Template**, and **RMA Message Template**.
3. **Check Magento Cron Status**: Magento dispatches transactional emails asynchronously via cron. Verify that the cron runner is functioning on your server:
   ```bash
   php bin/magento cron:run
   ```
   <ExplainCode explanation="Runs pending background cron tasks, including queue workers for transactional email delivery." />

---

## 3. "Not Delivered" and "Delivered" Options Missing in RMA Form

### Symptom
The customer only sees "Not Delivered" in the Order Status dropdown, or neither option appears when filing an RMA.

### Diagnostics & Solutions
1. **Check Order Shipment Status**:
   - In Magento 2, delivery-dependent options dynamically key off shipment generation.
   - If the shipment for the sales order has **not yet been created**, the system defaults to **Not Delivered**.
   - Once the seller or administrator generates the shipment in the backend panel, both **Delivered** and **Not Delivered** options become available.

---

## 4. Refund/Replace Options Not Showing for an Order

### Symptom
The buyer is only able to select "Cancel Items" and cannot choose "Refund" or "Replace".

### Diagnostics & Solutions
1. **Check Invoice Status**:
   - The Marketplace RMA System enforces statutory e-commerce logic:
     - **Uninvoiced Orders**: Only **Cancel Items** is permitted.
     - **Invoiced Orders**: **Refund** and **Replace** become active.
2. **Action Required**: If the buyer has already paid and is entitled to a replacement or refund, verify whether an invoice exists for the order in **Sales > Invoices**. Generate the invoice to reveal the Refund/Replace choices.

---

## 5. Seller Cannot Process Online Refunds

### Symptom
When attempting to issue a refund from the vendor panel, the **Refund Online** button is disabled, greyed out, or throws an error.

### Diagnostics & Solutions
1. **Payment Gateway Capability**: Confirm whether the original payment method (e.g., Stripe, PayPal, Braintree) supports online refund API calls.
2. **Seller Permissions**: Ensure the marketplace administrator has granted sellers permission for order management.
3. **Inspect Payment Logs**: Review `var/log/system.log` and `var/log/exception.log` for API rejection codes from the payment provider.

---

## 6. High-Risk Customer Bypasses Automated Approval

### Symptom
An RMA request that satisfies all Auto-Approve rules is not automatically approved and remains in **Pending** status.

### Diagnostics & Solutions
1. **Check Customer Fraud Status**:
   - Under **Stores > Configuration > Webkul > Marketplace RMA System > Fraud & Risk Scoring**, review the **Risk Threshold** and **Risk Timeframe**.
   - If the customer has exceeded the allowable return frequency, the system classifies them as **High Risk**.
2. **Review Manual Review Setting**:
   - If **Require Manual Review for High-Risk Customers** is set to **Yes**, the automated rules engine intentionally skips auto-approval to prevent fraud. An administrator or seller must manually approve the request.
