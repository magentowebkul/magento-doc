# Troubleshooting Guide

Common issues and solutions for **Magento 2 Marketplace Campaign**.

### 1. Marketplace Dependency Error During Setup

> [!WARNING]
> Error: `Class Webkul\Marketplace\Helper\Data does not exist`

**Cause**: The core Webkul Multi-Vendor Marketplace extension is not installed or disabled.

**Solution**:
1. Verify Marketplace is installed:
   ```bash
   php bin/magento module:status Webkul_Marketplace
   ```
2. Enable Marketplace module:
   ```bash
   php bin/magento module:enable Webkul_Marketplace Webkul_MpCampaign
   php bin/magento setup:upgrade
   ```

---

### 2. Campaign Discounts Not Applying at Checkout

**Checklist**:
1. **Dates**: Ensure current date falls between campaign **From** and **To** dates.
2. **Customer Group**: Verify logged-in customer belongs to selected customer group.
3. **Seller Join Status**: Ensure seller has joined campaign and status is **Active**.
4. **Cache**: Run `php bin/magento cache:flush`.

---

### 3. Seller Invitation Emails Not Received

**Solution**:
1. Confirm Magento Cron is running:
   ```bash
   php bin/magento cron:run
   ```
2. Verify SMTP mail settings under **Stores > Configuration > System > Mail Sending Settings**.
3. Check transactional template selection under **Stores > Configuration > Webkul > Marketplace Campaign**.

---

### 4. Admin Menu or Grid Not Appearing

Execute full compilation cycle:

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```
