# Troubleshooting Guide

Common issues and solutions for **Magento 2 Price Drop Alert**.

### 1. Alert Emails Not Being Sent

**Cause**: Magento Cron is not active or SMTP settings are unconfigured.

**Solution**:
1. Check cron status:
   ```bash
   php bin/magento cron:run
   ```
2. Verify email settings under **Stores > Configuration > System > Mail Sending Settings**.
3. Confirm template assignment under **Stores > Configuration > Webkul > Price Drop Alert**.

---

### 2. Subscription Box Not Visible on Product Page

**Checklist**:
1. Verify module is enabled under **Stores > Configuration > Webkul > Price Drop Alert**.
2. If **Enable Price Drop On All Products** is set to **Select Manually**, ensure **Price Drop Alert** is enabled on the individual product edit page (**Catalog > Products**).
3. Flush cache:
   ```bash
   php bin/magento cache:flush
   ```

---

### 3. Guest Users Unable to Unsubscribe

**Note**: Guest users do not have customer account dashboards and must use the **Unsubscribe** link provided in subscription notification emails.

---

### 4. Admin Menu or Log Grid Missing

Run full compilation cycle:

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```
