# Troubleshooting

This section covers common questions, diagnostic checks, and resolutions for potential issues when deploying and running **Magento 2 Progressive Web Application**.

---

## 1. Service Worker Fails to Register

### Symptoms
In Chrome DevTools > Application > Service Workers, the service worker displays an error, or the prompt never appears.

### Common Causes & Fixes
* **Missing HTTPS**: Progressive Web Apps strictly require a secure website address (`https://`). Verify your secure store address:
   ```bash:no-line-numbers
   php bin/magento config:show web/secure/base_url
   ```
   <ExplainCode explanation="Checks that your website address uses a secure https:// link, which is required for PWA apps to work." />

* **Module Status Check**: Verify that `Webkul_Pwa` is active:
   ```bash:no-line-numbers
   php bin/magento module:status Webkul_Pwa
   ```
   <ExplainCode explanation="Checks whether the PWA extension is turned on and enabled in your store." />

* **Mixed Content**: Ensure your store does not load insecure HTTP assets (such as third-party images or scripts).
* **Cache Stale**: In DevTools > Application > Service Workers, check **Update on reload** or click **Unregister** to allow a fresh service worker registration.

---

## 2. Push Notifications Not Delivering

### Symptoms
Clicking **Send** on a push notification in admin shows success, but subscribers never receive the alert on their devices.

### Diagnostic Steps & Solutions

1. **Verify Background Notification Sender is Running**:
   Push notifications are sent out in the background so your site stays fast. Check if the sender helper is active:
   ```bash:no-line-numbers
   ps aux | grep webkul.pwa.notification_send
   ```
   <ExplainCode explanation="Checks whether the background notification sender process is currently running on your server." />

   If it is not running, launch it:
   ```bash:no-line-numbers
   php bin/magento queue:consumers:start webkul.pwa.notification_send &
   ```
   <ExplainCode explanation="Starts the background notification sender so scheduled messages are delivered to customer phones." />

   You can also verify that the background job is recognized by Magento:
   ```bash:no-line-numbers
   php bin/magento queue:consumers:list | grep pwa
   ```
   <ExplainCode explanation="Confirms that Magento has the PWA background sender set up and registered." />

2. **Verify Firebase Auth JSON File**:
   * Confirm that the private key JSON file is uploaded in **Stores > Configuration > Webkul > Progressive Web Application > Firebase Auth JSON File**.
   * Ensure the file has read permissions (`chmod 644`) on the server.

3. **Check FCM V1 API in Google Cloud Console**:
   * In the Google Cloud Console for your project, ensure that **Firebase Cloud Messaging API** is enabled.

---

## 3. Add to Home Screen Prompt Not Showing on Android

### Symptoms
Visiting the store on Android Chrome does not trigger the install prompt.

### Resolution
* **Manifest Validation**: Open Chrome DevTools > **Application** > **Manifest**. Verify there are no errors and that all required fields (`name`, `short_name`, `start_url`, `icons`) are present. You can test the manifest endpoint via terminal:
   ```bash:no-line-numbers
   curl -s -o /dev/null -w "%{http_code}\n" https://yourstore.com/pwa/manifest/
   ```
   <ExplainCode explanation="Tests whether your store's PWA setup file is reachable online (returns 200 when working properly)." />

* **Icon Dimensions**: Ensure your master uploaded icon produces valid `192x192` and `512x512` PNG icons.
* **Browser Heuristics**: Modern browsers require that the user engage with the domain (e.g., at least 30 seconds of interaction) before firing the native install prompt.

---

## 4. Updates or CSS Changes Not Visible in PWA

### Symptoms
You updated storefront styles or templates, but shoppers using the PWA still see the old design.

### Resolution
The PWA saves files on shopper devices to keep the store fast. To send the fresh update to all shoppers:
1. Go to **Stores > Configuration > Webkul > Progressive Web Application**.
2. Increment the **Service Worker Version** field (e.g., `1.0.4` to `1.0.5`).
3. Click **Save Config**.
4. Refresh store design files and clear the cache:
   ```bash:no-line-numbers
   php bin/magento setup:static-content:deploy -f
   ```
   <ExplainCode explanation="Regenerates your store design files and buttons so recent visual updates appear properly." />

   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Clears your store cache so shoppers receive your latest app updates right away." />

---

## 5. Web Push Not Working on iOS

### Symptoms
iPhone users do not see the push notification prompt or cannot receive alerts.

### Resolution
* **iOS Version**: Web Push requires **iOS 16.4 or higher**.
* **Installed Requirement**: On iOS, Safari will **not** display push notification prompts inside a standard browser tab. The shopper must first tap **Share > Add to Home Screen**, then launch the PWA from their Home Screen. Once opened from the Home Screen, the notification opt-in prompt will activate.
