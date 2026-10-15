# Browser Web Push Notification (Firebase FCM)

Browser push notifications deliver real-time 2FA codes directly to shoppers' desktop and mobile browsers via Google Firebase Cloud Messaging (FCM).

---

## Configuration

In **Stores > Configuration > Webkul > Two Factor Auth**:
- Set **Send Otp Via** to `Push Notification`.
- Enter your Firebase Web API Key, Project ID, Sender ID, App ID, VAPID Public Key, and upload your Service Account JSON file.

![Firebase Admin Configuration](/images/image-37.png)

---

## Workflow 1: New Customer Registration

1. The customer enters their registration details on the storefront.

![Customer Registration](/images/image-38.png)

2. The browser presents the native permission prompt asking the customer to allow notifications for your store domain. The customer clicks **Allow**.

![Allow Push Notifications](/images/image-39.png)

3. A push notification with the dynamic auth code is triggered immediately on the customer's desktop or mobile screen.
4. The customer enters the auth code into the on-screen 2FA popup.

![Push Notification OTP Prompt](/images/image-40.png)

5. Upon validation, account creation is completed.

---

## Workflow 2: Existing Customer Login

1. The customer enters their email address and password on the sign-in page.

![Customer Login Form](/images/image-41.png)

2. A push notification pop-up appears in the customer's browser containing the one-time authentication code.

![Push Notification Popup](/images/image-42.png)

3. The customer types or pastes the received code into the login 2FA modal to access their account.
