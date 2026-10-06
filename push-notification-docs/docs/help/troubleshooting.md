# Troubleshooting Guide

Common issues encountered when setting up Web Push Notifications and step-by-step solutions.

---

## 1. Permission Prompt Not Appearing on Storefront

### Symptom
Visitors browse the store, but the browser notification permission prompt never appears.

### Solutions
- **Check SSL (HTTPS):** Ensure your website is served over an active HTTPS connection with a valid SSL certificate. Browsers block Web Push APIs on HTTP.
- **Check Browser Settings:** If the user previously clicked *Block* or *Never Allow*, reset site permissions by clicking the lock icon in the browser address bar.
- **Verify Configuration:** Ensure **Enable Mp Push Notification** is set to `Yes` in Magento Admin (*Stores > Configuration > Webkul > MP Push Notification*).

---

## 2. Push Notifications Not Received After Dispatch

### Symptom
Notifications are sent from Admin/Seller panel, but subscribers do not receive alerts.

### Solutions
- **Verify FCM Credentials:** Ensure the **Web API Key**, **Sender ID**, and **VAPID Public Key** match your Firebase Console project settings.
- **Verify Service Account JSON:** Ensure you uploaded a valid `.json` private key file under **FCM Auth Domain Auth JSON File**.
- **Check Device State:** Ensure the subscriber's browser application is open or running in the background.

---

## 3. Image/Logo Not Displaying in Push Alert

### Symptom
The push notification is received, but the custom logo or image icon is broken or missing.

### Solution
- Ensure logo images uploaded in templates use absolute valid image URLs or reside in accessible web media directories.
