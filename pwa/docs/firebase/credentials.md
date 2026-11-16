# Firebase Project & Credentials Setup

To send web push notifications to Android and iOS devices, the **Magento 2 Progressive Web Application** module integrates with Google's **Firebase Cloud Messaging (FCM V1 API)**.

This guide walks you step-by-step through creating a Firebase project, registering a Web Application, obtaining your API keys, generating Web Push (VAPID) certificate keys, and downloading the Firebase Auth JSON private key file.

---

## Step 1 — Create a Firebase Project

1. Open the **[Firebase Console](https://console.firebase.google.com/)** and sign in with your Google account.
2. Click **Create a new Firebase project** (or **Add project**).

![Create New Project](/images/create-new-plan-1.webp)

3. Enter a project name (e.g., `My New Project`), accept the terms, and click **Continue**.

![Set Project Name](/images/set-project-name-2.webp)

4. Configure AI assistance for your project (optional) and click **Continue**.

![Google Analytics Setup](/images/google-analytics-setup.webp)

5. Configure Google Analytics (select or create an Analytics account, such as `Default Account for Firebase`), then click **Create project**.

![Select Analytics Account](/images/select-google-analytics-account-and-continue.webp)

6. Wait for project provisioning to complete, then click **Continue**.

![New Project Created](/images/new-project-created.webp)

---

## Step 2 — Register Web Application in Firebase

1. From the project overview dashboard, click **+ Add app**, then select the **Web icon (`</>`)** (highlighted in red).

![Project Overview](/images/project-overview-section.webp)
![Project add app](/images/project-add-app.webp)

2. Enter an **App nickname** (e.g., `My new web app`) and click **Register app**.

![New Web App](/images/new-app.webp)

3. Firebase displays the SDK initialization configuration object. Keep this tab open or copy the values:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDSrypO7KxTXkTgYpj0Hfr30VvW3jrIMY8",
  authDomain: "my-new-project-f2074.firebaseapp.com",
  projectId: "my-new-project-f2074",
  storageBucket: "my-new-project-f2074.firebasestorage.app",
  messagingSenderId: "532922761537",
  appId: "1:532922761537:web:80a57f39923724e474e1c0",
  measurementId: "G-M2KZ93XTXN"
};
```

![Firebase SDK Credentials](/images/firebase-sdk.webp)

4. Click **Continue to console**.

---

## Step 3 — Generate Web Push Certificate (Public VAPID Key)

1. In the left navigation sidebar, click the **Gear icon (Settings)** and select **General** (or Project settings).

![Project Settings Menu](/images/project-settings.webp)

2. Switch to the **Cloud Messaging** tab at the top of the settings page.
3. Under **Firebase Cloud Messaging API (V1)**, note your **Sender ID** (e.g., `532922761537`).
4. Scroll down to the **Web configuration** section.
5. Under **Web Push certificates**, click **Generate key pair**.

![Firebase Cloud Messaging Web Push Certificate](/images/firebase-cloud-message-service-api-1.webp)

6. Copy the generated **Key pair string**. This will be pasted into the Magento Admin **Public Key** field.

---

## Step 4 — Generate Firebase Auth JSON Private Key File

The module uses Google's Service Account OAuth2 credentials (`google/auth`) to authenticate requests to the FCM V1 HTTP API:

1. Inside **Project Settings**, switch to the **Service accounts** tab.

![Service Account Tab](/images/service-account-tab.webp)

2. Ensure **Firebase Admin SDK** is selected.
3. Click the blue button labeled **Generate new private key**.

![Generate Key](/images/generate-key.webp)

4. A confirmation dialog appears warning that private keys should be kept confidential. Click **Generate key**.
5. A `.json` credential file will download to your machine (e.g., `my-new-project-f2074-firebase-adminsdk-fbsvc-088e5e97c4.json`).

![JSON File Structure](/images/json-file.webp)

---

## Summary of Credentials Needed for Magento

Have the following values ready before configuring Magento:

| Magento Admin Field | Firebase Source Location | Example Value (from Screenshots) |
| :--- | :--- | :--- |
| **Web API Key** | Project Settings > General > Web API Key | `AIzaSyDSrypO7KxTXkTgYpj0Hfr30VvW3jrIMY8` |
| **FCM Auth Domain** | Project Settings > General > Web App Config | `my-new-project-f2074.firebaseapp.com` |
| **FCM Project Id** | Project Settings > General > Project ID | `my-new-project-f2074` |
| **FCM Storage Bucket** | Project Settings > General > Web App Config | `my-new-project-f2074.firebasestorage.app` |
| **Messaging Sender Id** | Project Settings > Cloud Messaging > Sender ID | `532922761537` |
| **FCM App Id** | Project Settings > General > Web App Config | `1:532922761537:web:80a57f39923724e474e1c0` |
| **Public Key** | Project Settings > Cloud Messaging > Web Push Certificate | `BOm5Jq...` (Generated key pair) |
| **Measurement Id** | Project Settings > General > Web App Config | `G-M2KZ93XTXN` |
| **Firebase Auth JSON File** | Project Settings > Service accounts > Generated JSON | `my-new-project-f2074-firebase-adminsdk-fbsvc-088e5e97c4.json` |

::: tip Security Notice
Keep your Firebase Auth JSON file confidential. Never commit it to public version control or expose it publicly via web-accessible HTTP directories.

If placing the file manually on the server, secure its file permissions:
```bash:no-line-numbers
chmod 644 app/etc/my-new-project-f2074-firebase-adminsdk-fbsvc-088e5e97c4.json
```
<ExplainCode explanation="Protects your Firebase key file so your store can read it safely without exposing it." />
:::
