# Firebase Setup for Web Push Notifications

When choosing **Push Notification** as your 2FA verification channel, the extension dispatches real-time OTP popups directly to shoppers' desktop and mobile browsers via Google Firebase Cloud Messaging (FCM).

---

## Step 1: Create a Project in Firebase Console

1. Navigate to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** (or **Get started by setting up a Firebase project**).

![Firebase Get Started](/images/image-29.png)

3. Enter a descriptive project name (e.g., `M customer 2FA`) and click **Continue**.

![Create Firebase Project](/images/image-30.png)

4. Configure Google Analytics settings as needed and click **Continue**.

![Firebase Analytics Setup](/images/image-31.png)

5. Select or create an Analytics account, accept terms, and click **Create project**.

![Select Analytics Account](/images/image-32.png)

6. Wait for project provisioning to complete, then click **Continue**.

![Project Ready](/images/image-33.png)

---

## Step 2: Retrieve Cloud Messaging Credentials

1. In the left navigation bar, click the **Settings (gear)** icon and choose **Project settings**.

![Project Settings Menu](/images/image-34.png)

2. Navigate to the **Cloud Messaging** tab:
   - Copy your **Server Key**.
   - Copy your **Sender ID** (Messaging Sender Id).

![Cloud Messaging Credentials](/images/image-35.png)

3. Under **Web configuration > Web Push certificates**, click **Generate key pair** to generate your **Public Key (VAPID key)**.

---

## Step 3: Register Web App & Get Web SDK Config

1. Go to **Project settings > General**.
2. Under the **Your apps** section, click the **Web icon (`</>`)** to register a new Web App.
3. Enter an app nickname and click **Register app**.
4. Firebase displays your web app configuration:
   - `apiKey` (Web API Key)
   - `authDomain` (FCM Auth Domain)
   - `projectId` (FCM Project Id)
   - `storageBucket` (FCM Storage Bucket)
   - `messagingSenderId` (Messaging Sender Id)
   - `appId` (FCM App Id)
   - `measurementId` (Measurement Id)

![Firebase Web App Credentials](/images/image-36.png)

---

## Step 4: Generate Service Account JSON Key

1. In **Project settings**, go to the **Service accounts** tab.
2. Ensure **Firebase Admin SDK** is selected with Node.js/PHP.
3. Click **Generate new private key** and confirm by clicking **Generate key**.
4. Save the downloaded `.json` file securely on your computer. This file will be uploaded under **Firebase Auth JSON File** in Magento Admin configuration.

::: tip HTTPS Requirement
Browser push notifications and service workers require your storefront to run on a secure HTTPS connection.
:::
