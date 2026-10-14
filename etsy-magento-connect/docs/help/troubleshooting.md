# Troubleshooting Guide

This guide covers common issues, error messages, and step-by-step resolution steps encountered when configuring and operating the **Marketplace Etsy Connector**.

---

## 1. OAuth & Authentication Issues

### Issue: "Invalid redirect_uri" Error on Etsy Consent Screen
**Symptoms**: Clicking **Authenticate** redirects to Etsy, but an error page states: *"The provided redirect URI does not match the registered redirect URI"*.

**Root Cause**: Etsy API v3 enforces exact character-for-character matching between the callback URL registered in the Etsy Developer App and the URL transmitted by Magento during authentication. A mismatch in domain, protocol, admin route path, or account ID will trigger this error.

**Resolution**:
1. Log in to the [Etsy Developers Console](https://www.etsy.com/developers/your-apps).
2. Open your registered Etsy application and edit its settings.
3. In the **Callback URLs** field, enter the appropriate callback URL(s) (one per line):
   - **For Admin Panel Accounts**:
     ```text
     https://<your-store-domain>/<admin_frontname>/mpetsymagentoconnect/oauth/index/id/<account_id>
     ```
     *(Example for default admin path and account ID 1: `https://<your-store-domain>/admin/mpetsymagentoconnect/oauth/index/id/1`)*
   - **For Marketplace Sellers (Frontend)**:
     ```text
     https://<your-store-domain>/mpetsymagentoconnect/oauth/index/
     ```
4. Verify:
   - Protocol must be `https://` (Etsy strictly rejects `http://`).
   - Domain must match your Magento base URL (including or excluding `www` according to your store configuration).
   - For Admin accounts, verify `<admin_frontname>` matches `app/etc/env.php` (e.g. `admin`) and `<account_id>` matches the Etsy account ID in Magento.
   - If managing multiple Etsy accounts in Magento Admin, register each account's URL (e.g., `/id/1`, `/id/2`).

---

### Issue: Account Remains "Not Authenticated" After Granting Permissions
**Symptoms**: After clicking "Grant Access" on Etsy, you are returned to Magento, but the button does not change to the green "Authenticated" state.

**Resolution**:
1. Check the Magento system log:
   ```bash
   tail -n 100 var/log/system.log
   tail -n 100 var/log/exception.log
   ```
2. Verify that your server's outbound cURL can reach Etsy:
   ```bash
   curl -I https://openapi.etsy.com/v3/application/openapi-ping
   ```
3. Check PHP session configuration: Ensure cookies and sessions are preserved across external OAuth redirects. Ensure `SameSite` cookie policy is not set to `Strict` for frontend/admin sessions.

---

### Issue: License Status Remains "UNVERIFIED" in Module License Tracker
**Symptoms**: After entering the license key in **Stores → Configuration → Webkul → Module License** and clicking **Save & Verify**, the status badge remains `UNVERIFIED` or an error message is returned.

**Resolution**:
1. **Verify the License Key**: Ensure you are using the exact license key for your purchased domain, copied directly from your [Webkul Customer Account](https://store.webkul.com/customer/account/) under downloadable orders.
2. **Check Outbound Server Connectivity**: Confirm your server allows outbound HTTPS requests (port 443) to Webkul's licensing validation server:
   ```bash
   curl -I https://store.webkul.com/
   ```
3. **Verify Webkul Base Module**: Ensure the `Webkul_Base` module is installed and enabled (`php bin/magento module:status Webkul_Base`).
4. **Flush Configuration Cache**:
   ```bash
   php bin/magento cache:clean config
   ```

---

### Issue: 401 Unauthorized / Expired Token Errors During Sync
**Symptoms**: Product import or order sync fails with `401 Unauthorized` or `Invalid OAuth token`.

**Root Cause**: Etsy API v3 access tokens expire after **1 hour** (3600 seconds).

**Resolution**:
1. Check if Magento Cron is running:
   ```bash
   php bin/magento cron:run
   ```
   The `mpetsyconnect_tokenrefresh` cron job automatically refreshes tokens before they expire.
2. If the token was revoked on Etsy or cron was stopped for an extended period, open **Etsy Accounts Manager**, edit the account, and click **Authenticate** to re-authenticate manually.

---

## 2. Product Synchronization Issues

### Issue: "Default Shipping Template is Required" During Product Export
**Symptoms**: The export profiler fails with an error stating that shipping details could not be found.

**Root Cause**: Etsy mandates that every listing must be assigned to an active Etsy Shipping Profile.

**Resolution**:
1. Go to **Etsy Accounts Manager** (or seller **Etsy Settings**).
2. Edit the Etsy account.
3. Under **Default Shipping Template**, select one of your existing Etsy shipping profiles from the dropdown list.
4. Click **Save Account** and re-run the export profiler.

---

### Issue: "Category is not mapped" During Product Export
**Symptoms**: Product export profiler skips an item and reports missing taxonomy.

**Resolution**:
1. Identify the primary category assigned to the Magento product.
2. Navigate to **Marketplace → Map Category**.
3. Create a mapping linking that Magento category to the corresponding Etsy taxonomy node.
4. Save the mapping and re-run product export.

---

### Issue: Image Import Profiler Times Out or Fails
**Symptoms**: Product data imports successfully, but image import hangs or returns `504 Gateway Timeout`.

**Resolution**:
1. High-resolution images on Etsy can take several seconds to download. Increase PHP execution and memory limits in `php.ini` or `.user.ini`:
   ```ini
   max_execution_time = 300
   memory_limit = 2G
   ```
2. In Nginx, ensure fastcgi timeout values accommodate media processing:
   ```nginx
   fastcgi_read_timeout 300;
   proxy_read_timeout 300;
   ```
3. Ensure write permissions on Magento's media directory:
   ```bash
   chmod -R 775 pub/media/
   chown -R www-data:www-data pub/media/
   ```

---

## 3. Order Synchronization Issues

### Issue: Orders Not Syncing Automatically
**Symptoms**: New sales appear on Etsy, but native Magento orders are not generated automatically.

**Resolution**:
1. Verify the module is enabled in **Stores → Configuration → Webkul → Marketplace Etsy Magento Connect**:
   - **Enable Marketplace Etsy Connector** must be set to **Yes**.
2. Verify Magento cron is running every minute:
   ```bash
   crontab -l -u www-data
   ```
3. Check cron execution logs for `mpetsyconnect_ordersync`:
   ```bash
   grep "mpetsyconnect_ordersync" var/log/cron.log
   ```
4. Run manual order import from the admin or seller dashboard to confirm whether API credentials successfully fetch receipts.

---

### Issue: "Email is a required field" During Order Import
**Symptoms**: Earlier versions failed when Etsy masked the customer's email address.

**Resolution**:
- Upgrade to version **5.0.1+**.
- The connector includes an automatic fallback generator that constructs a deterministic email (`buyer_{receipt_id}@etsy-customer.com`), preventing customer validation errors.

---

## 4. Inspection & Log Files

When reporting issues or diagnosing failures, review the following logs:

| Log File | Path | What It Contains |
|---|---|---|
| **Etsy Connector Log** | `var/log/mpetsy.log` | API request payloads, Etsy HTTP response status codes, and profiler execution details. |
| **Magento System Log** | `var/log/system.log` | General Magento operational events and warnings. |
| **Magento Exception Log** | `var/log/exception.log` | PHP stack traces and fatal error reports. |
| **Cron Log** | `var/log/cron.log` / `var/log/magento.cron.log` | Timestamps and outcomes of scheduled background jobs. |

::: tip Need Assistance?
If an issue persists, open a support ticket with your log files at [Webkul UVdesk Support](https://webkul.uvdesk.com/).
:::
