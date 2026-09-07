# Troubleshooting

If you encounter issues while configuring or using the Webkul Push Notification module for Magento 2, please refer to the common problems and solutions below.

---

## 1. Installation Issues

**Problem:** Module is not visible or causes an error after installation.

**Solutions:**
- **File Placement:** Ensure that you have created the `Webkul` (vendor) and `PushNotification` (module) folders inside your `magento/app/code/` directory, and moved all files to `app/code/Webkul/PushNotification/`.
- **Composer Dependency:** The module requires `google/auth`. Ensure you have run `composer require google/auth` before upgrading the setup.
- **Commands:** Make sure you have run the following commands sequentially:
  ```bash
  php bin/magento setup:upgrade
  php bin/magento setup:di:compile
  php bin/magento setup:static-content:deploy
  ```
- **Cache:** Flush the cache and reindex all data.

---

## 2. Notifications Are Not Being Received

**Problem:** Users are not seeing the push notification prompt or receiving notifications.

**Solutions:**
- **Module Disabled:** Check if the module is enabled. Navigate to **Stores > Configuration > Push Notification > General > Enabled** and ensure it is set to **Yes**.
- **SSL Certificate Required:** Web push notifications require an active SSL certificate. Ensure your website is loaded over HTTPS.
- **FCM V1 API Credentials:** Starting from version 5.0.5, the module uses the FCM V1 API. Ensure your Firebase credentials are correct and updated.
- **Browser Compatibility:** The module works well with Chrome and Mozilla Firefox. Ensure the user's browser supports push notifications and they haven't blocked notifications for your site.

---

## 3. GraphQL API Errors

**Problem:** Errors encountered while trying to register or unregister push tokens via GraphQL.

**Solutions:**
- **Missing Required Fields:** Ensure that `token`, `platform`, and `channel` are provided in the `RegisterPushTokenInput`.
- **App Specific Requirements:** `device_id` is required when using the `DEVICE` or `BOTH` channels for mobile apps.
- **Authentication:** If registering a token for an existing customer, ensure you pass the `Authorization: Bearer <customer_token>` header. For guests, no header is required.
- **"Module is disabled" Error:** Enable the module from the Magento admin configuration.

---

## 4. Notifications Not Delivered Automatically

**Problem:** Scheduled or automatic notifications are not being sent as expected.

**Solutions:**
- **Cron Jobs:** Ensure that your Magento cron jobs are configured and running properly, as they may be responsible for dispatching scheduled notifications.
- **Timezone Settings:** Check your Magento timezone settings. Notification delivery was optimized according to the timezone in version 5.0.2.

---

## 5. Support & Refund Policies

If the above troubleshooting steps do not resolve your issue, please refer to our policies:
- **Support:** [Support Policy](https://store.webkul.com/support.html/)
- **Refunds:** [Refund Policy](https://store.webkul.com/refund-policy.html/)
