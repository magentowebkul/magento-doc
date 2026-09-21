---
title: Troubleshooting
---

# Troubleshooting

Use this diagnostic reference to resolve common configuration, auto-assignment, queue consumer, and mobile API issues.

![Troubleshooting Diagnostic Flowchart](/images/troubleshooting-flow.webp)

## Step 1 — Check the Dedicated Log Channel

WMS writes detailed trace logs and exception details to a custom log channel:

```bash
tail -f var/log/wms.log
```

If you encounter unexpected behavior during order placement, queue execution, or mobile API calls, always review `var/log/wms.log` and `var/log/exception.log` first.

---

## Common Issues and Solutions

### 1. WMS Menu Items Missing in Magento Admin

**Cause:** The module ships disabled by default (`wms/configuration/active = 0`).

**Resolution:**
1. Navigate to **Stores &rarr; Configuration &rarr; Webkul &rarr; Warehouse Management System**.
2. Under **Api Configuration**, set **Enable Module** to **Yes**.
3. Flush cache:
   ```bash
   php bin/magento cache:flush
   ```

---

### 2. Orders Placed but Remain in State "Not Assigned"

**Cause:** Auto-assignment is disabled, products lack bin assignments, or no staff are scoped to the product's zone.

**Diagnostic Checklist:**
- Check that **Enable Order Auto Assignment** is set to **Yes** in [General Settings](/configuration/general-settings.html).
- Verify that ordered catalog products are assigned to physical bins in the relevant warehouse.
- Ensure active staff members exist with the product's **Zone** selected in their **Assigned Zones** multiselect field.
- Verify that `checkout_submit_all_after` is registered in `etc/events.xml`.

---

### 3. New Warehouse Created but Bins Do Not Appear

**Cause:** The background queue consumer `warehouse.create` is not active.

**Resolution:**
1. Check running processes:
   ```bash
   ps aux | grep 'queue:consumers:start warehouse.create'
   ```
2. Start the consumer:
   ```bash
   php bin/magento queue:consumers:start warehouse.create &
   ```

---

### 4. Barcode Generation Fails or Throws Fatal Error

**Cause:** PHP Imagick extension is missing or unconfigured.

**Resolution:**
1. Verify Imagick is installed:
   ```bash
   php -m | grep -i imagick
   ```
2. Install the extension:
   ```bash
   sudo apt-get install -y php-imagick
   sudo systemctl restart php-fpm
   ```

---

### 5. Mobile App Reports "401 Unauthorized"

**Cause:** Mismatched API credentials or invalidated staff token.

**Resolution:**
1. Confirm the credentials in **Stores &rarr; Configuration &rarr; Webkul &rarr; Warehouse Management System &rarr; Api Configuration** match the client configuration.
2. If **Enable Staff Single Login** is active, check if the staff account was signed in on another device.
