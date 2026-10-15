# Backup Recovery Codes

Backup recovery codes serve as a critical fail-safe recovery channel. If a customer loses their phone, loses access to their authenticator app, or cannot receive an SMS/email OTP, they can enter one of their backup codes to regain account access.

---

## Admin Configuration

To enable backup code support:
1. Navigate to **Stores > Configuration > Webkul > Two Factor Auth**.
2. Set **Enable Login Using Backup Codes** to **Yes**.
3. Save the configuration and flush cache.

![Enable Backup Codes Setting](/images/image-57.png)

---

## Code Issuance upon Registration

1. When a new customer completes account registration with 2FA enabled, they are issued **12 single-use backup recovery codes**.

![12 Backup Codes Displayed](/images/image-58.png)

2. The customer can copy these codes to a secure password manager or physical notebook.
3. An automated confirmation email containing all 12 backup codes is simultaneously dispatched to their registered email address for safe keeping.

![Backup Codes Email Notification](/images/image-59.png)

---

## Logging In Using a Backup Code

1. On the 2FA login verification modal, if the customer is unable to access their primary OTP or authenticator device, they click **Sign In another way**.

![Sign In Another Way](/images/image-60.png)

2. The modal toggles to the backup code entry prompt.
3. The customer pastes or types any unused backup recovery code.

![Enter Backup Code](/images/image-61.png)

4. Once verified, the customer is granted access.
5. The used code is immediately invalidated and cannot be reused.
