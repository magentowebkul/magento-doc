# Troubleshooting Guide

Common issues, diagnostic procedures, and resolutions when configuring and managing **Webkul Magento 2 Multi Vendor Dropship**.

---

## 1. Vendor Dropship Menu Not Visible in Admin

### Symptoms
After installing the module and running `setup:upgrade`, the **Vendor Dropship Menu** does not show up under **Marketplace Management**.

### Cause
Cached admin configuration, un-deployed static assets, or restricted role permissions.

### Solution
1. Flush Magento caches and clean generated classes:
   ```bash
   php bin/magento cache:flush
   php bin/magento cache:clean
   ```
2. Verify admin user role permissions:
   - Navigate to **System > Permissions > User Roles**.
   - Edit your administrative role and ensure **Vendor Dropship** is checked under **Role Resources**.
   - Log out of the admin panel and log back in.

---

## 2. Auto Warehouse Assignment Fails or Orders Remain Unassigned

### Symptoms
When customers place orders, the order is not automatically routed to the closest warehouse.

### Cause
- **Warehouse Assign** setting is set to `Manual`.
- Invalid or missing Google Maps API key in module configuration.
- Required Google Maps APIs (**Geocoding API**, **Maps JavaScript API**, **Places API**, **Distance Matrix API**) are not enabled on Google Cloud Console.
- No warehouse holds inventory for the ordered SKUs.

### Solution
1. Navigate to **Stores > Configuration > Webkul > Vendor Dropship Manager > General Settings**.
2. Confirm **Warehouse Assign** is set to `Auto`.
3. Check the **Google Api Key** and verify billing and API activation in your Google Cloud account.
4. Ensure the purchased items are assigned to at least one active warehouse with available stock under **Vendor Dropship Menu > Warehouse Products**.

---

## 3. Warehouse Manager Unable to Log In

### Symptoms
The warehouse manager enters their credentials on the portal login page but receives an authorization failure.

### Cause
- Incorrect password or username entered.
- Warehouse status is set to **Inactive** in the admin panel.

### Solution
1. In the admin panel, navigate to **Vendor Dropship Menu > Warehouse Manager**.
2. Find the warehouse record and confirm its **Status** is set to **Active**.
3. Edit the warehouse and update the warehouse manager's password, ensuring your current admin password is provided before saving.

---

## 4. Table Rate Shipping Not Calculating at Checkout

### Symptoms
The Vendor Dropship shipping method is not displayed or displays an error during checkout.

### Cause
- Carrier is not enabled under **Stores > Configuration > Sales > Delivery Methods > Vendor Dropship**.
- Destination address does not match any entry in the warehouse's imported Table Rate CSV.

### Solution
1. Enable the carrier in Delivery Methods configuration.
2. Review the destination country, state, and postal code against the imported rules in **Vendor Dropship Menu > Manage Table Rate Shipping Rule**.
3. Ensure wildcard rows (e.g. `*` for postal codes or regions) exist to cover broader geographic areas.
