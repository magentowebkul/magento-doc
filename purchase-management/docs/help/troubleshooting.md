# Troubleshooting Guide

Common issues, diagnosis steps, and solutions when working with the **Magento 2 Purchase Management ERP** extension.

---

## 1. Purchase Management Menu Not Visible in Admin

### Symptoms
After installing the module, the "Purchase Management" menu does not appear on the admin sidebar.

### Cause
Cached admin configuration, ACL permissions, or static files not compiled.

### Solution
1. Clear Magento cache and generated files:
   ```bash
   php bin/magento cache:flush
   php bin/magento cache:clean
   ```
2. Verify role permissions:
   - Navigate to **System > Permissions > User Roles**.
   - Edit your admin role and ensure **Webkul Purchase Management** is checked under **Role Resources**.
   - Log out of the admin panel and log back in.

---

## 2. Automatic Purchase Orders Not Generating

### Symptoms
Stock quantity falls below the configured threshold, but no draft quotation or purchase order is automatically created.

### Cause
- Sourcing method is set to `Manual` in store configuration.
- No supplier is mapped to the product, or supplier status is disabled.
- Magento Cron is not active or failing.

### Solution
1. Navigate to **Stores > Configuration > Webkul > Purchase Management > General Options**:
   - Ensure **Procurement Method** is set to `Automatic`.
   - Verify that **Procurement Threshold Qty** is configured properly.
2. Edit the product in **Catalog > Products** and confirm:
   - At least one supplier is mapped under the **Purchase Management / Suppliers** tab.
   - The mapped supplier has a valid priority ranking (`1`, `2`, etc.).
3. Check cron execution:
   ```bash
   php bin/magento cron:run
   ```

---

## 3. Emails (RFQ / Purchase Order) Not Received by Supplier

### Symptoms
Clicking "Send by Email" displays a success banner, but the supplier never receives the message.

### Cause
- Server mail transfer agent (MTA) or SMTP is not configured.
- Invalid supplier email format.
- Mail marked as spam by vendor mail provider.

### Solution
1. Verify supplier email address in **Purchase Management > Manage Suppliers**.
2. Configure a reliable SMTP provider (such as Amazon SES, SendGrid, or Google Workspace) in Magento.
3. Check `var/log/system.log` and `var/log/exception.log` for mail delivery failures.

---

## 4. Partial Shipment Button Missing

### Symptoms
The **Partial Shipment** button is not visible on the Incoming Shipment view page.

### Cause
The shipment status is not in `Ready To Receive` state.

### Solution
The Partial Shipment action is intentionally available only when the consignment status is **Ready To Receive**. Verify the current status of the incoming shipment. Once updated to `Ready To Receive`, the button will be available.
