# Firebase Project Credentials Setup

The extension uses **Firebase Cloud Messaging (FCM)** to send web push notifications to customer browsers. Follow this guide to generate your Firebase credentials.

---

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/) and sign in with your Google account.
2. Click **Add project** or **Create a project**.

![Create New Firebase Project](/images/image-6.png)

3. Enter your **Project Name** (e.g., `My Magento Store Push`), accept terms, and click **Create Project**.

![Enter Project Name](/images/image-7.png)

---

## 2. Access Project Settings

1. Click the **Settings (Gear Icon)** next to *Project Overview* in the left navigation panel.
2. Select **Project settings**.

![Project Settings](/images/image-8.png)

---

## 3. Retrieve Cloud Messaging Credentials

1. Go to the **Cloud Messaging** tab.
2. Note down the **Sender ID** and **Server Key**.

![Cloud Messaging Credentials](/images/image-9.png)

---

## 4. Retrieve Web App Credentials

1. In **Project settings > General** tab, scroll to **Your apps** section.
2. Click the Web icon `</>` to register a Web App.
3. Copy the configuration parameters:
   - **Web API Key** (`apiKey`)
   - **Auth Domain** (`authDomain`)
   - **Database URL** (`databaseURL`)
   - **Project ID** (`projectId`)
   - **Storage Bucket** (`storageBucket`)
   - **Messaging Sender ID** (`messagingSenderId`)
   - **App ID** (`appId`)

![Web App Credentials](/images/image-10.png)

---

## 5. Download Service Account Private Key JSON

1. In Firebase Console, open **Project settings > Service accounts** tab.
2. Click **Generate new private key**.
3. Save the downloaded `.json` file. You will upload this JSON file in Magento Admin configuration under *FCM Auth Domain Auth JSON File*.

::: info Next Steps
Proceed to the [Admin Configuration](/configuration/admin-config.html) page to enter these Firebase API credentials into your Magento Admin.
:::
