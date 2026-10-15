# Troubleshooting Guide

Common questions and resolution steps for **Magento 2 Two Factor Authentication**.

---

## Issue 1: SMS OTP is Not Delivered to Customers

### Probable Causes & Resolution
1. **Invalid Twilio Credentials:** Verify **Auth ID (Account SID)** and **Token (Auth Token)** under **Stores > Configuration > Webkul > Two Factor Auth**.
2. **Invalid Sender Number:** Ensure your **Sender Number** in Magento matches your active Twilio phone number in E.164 international format (e.g. `+1234567890`).
3. **Twilio Trial Account Limitations:** If using a Twilio trial account, SMS messages can only be sent to pre-verified caller IDs in your Twilio Console.
4. **Missing Twilio Composer SDK:** Ensure `twilio/sdk:^8.6` is installed via Composer:
   ```bash
   composer require twilio/sdk:^8.6
   ```

---

## Issue 2: Customer Account is Locked

### Resolution
1. In Magento Admin, go to **Customers > All Customers** and edit the locked customer.
2. Select the **Two Factor Auth** tab.
3. Click **Unlock 2FA Account** to reset failure counters and lift the lockout immediately.
4. Or wait for the **Account Lockout Duration** timer to expire automatically.

---

## Issue 3: TOTP Authenticator Code Shows "Invalid Code"

### Probable Causes & Resolution
1. **Server Clock Drift:** The TOTP algorithm (RFC 6238) depends on synchronized system clocks between the server and the customer's smartphone. If your server clock drifts by more than 30–60 seconds, generated codes will be rejected.
   - Sync your server clock using NTP:
     ```bash
     sudo timedatectl set-ntp on
     sudo systemctl restart systemd-timesyncd
     ```
2. **Device Clock Drift:** The customer's smartphone must have "Set time automatically" enabled in date & time settings.
3. **Expired Time Window:** TOTP codes refresh every 30 seconds. Ensure the customer submits the current rolling code before the timer elapses.

---

## Issue 4: Push Notifications Do Not Appear

### Probable Causes & Resolution
1. **Non-HTTPS Connection:** Push notifications require a secure origin (`https://`). Service workers will not register on insecure HTTP domains.
2. **Browser Permission Blocked:** If the user previously clicked "Block" on the browser notification prompt, they must go to browser site settings and change the notification permission to "Allow".
3. **Invalid Firebase Credentials:** Verify your Web API Key, Project ID, App ID, and ensure your Firebase Service Account JSON file is correctly uploaded.

---

## Issue 5: Customer Cannot Access OTP (Lost Phone / Broken Device)

### Resolution
1. The customer can click **Sign In another way** on the 2FA prompt and enter one of their 12 unused single-use **Backup Recovery Codes**.
2. If the customer does not have any remaining backup codes, the store administrator can generate fresh backup codes from **Customers > All Customers > Edit Customer > Two Factor Auth > Generate**.
