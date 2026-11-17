# Module Configuration

Store administrators can manage global PWA behavior, Firebase authentication, branding assets, orientation locks, and caching versions from the Magento Admin Panel.

---

## Accessing Configuration Settings

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Stores > Configuration**.
3. Under the **Webkul** tab on the left sidebar, click **Progressive Web Application**.

![PWA Configuration Part 1](/images/configuration-part-one.webp)

---

## Configuration Settings Reference

### 1. Status
* **Options**: `Yes` / `No`
* **Default**: `No`
* **Description**: Enables or disables Progressive Web Application functionality across the store. When set to `Yes`, manifest links, service worker registration scripts, and push prompt hooks are injected into the storefront header.

### 2. Application Name
* **Type**: Text Field (Required)
* **Example**: `Luma Lifestyle Store`
* **Description**: The full name of the application displayed on install banners, splash screens, and desktop app title bars.

### 3. Application Short Name
* **Type**: Text Field (Required)
* **Example**: `Luma Store`
* **Description**: A shortened application name (recommended ≤ 12 characters) displayed underneath the launcher icon on mobile home screens where space is limited.

---

## Firebase FCM V1 Credentials Group

These fields authenticate your Magento store with Google Firebase Cloud Messaging to dispatch push notifications:

### 4. Web API Key
* **Type**: Encrypted Text Field (Required)
* **Description**: Firebase Web API key obtained from Firebase Console **Project Settings > General**.

### 5. FCM Auth Domain
* **Type**: Text Field (Required)
* **Example**: `my-new-project-f2074.firebaseapp.com`
* **Description**: Firebase Auth domain from the Firebase Web SDK initialization snippet.

### 6. Firebase Auth JSON File
* **Type**: File Upload (Required)
* **Description**: Upload the private key JSON file generated in Firebase under **Project Settings > Service accounts > Generate new private key** (e.g., `my-new-project-f2074-firebase-adminsdk-fbsvc-088e5e97c4.json`). Magento securely stores this file under `pub/media/pwa/jsonfile/`.

### 7. FCM Project Id
* **Type**: Text Field (Required)
* **Example**: `my-new-project-f2074`
* **Description**: Your Firebase Project identifier.

### 8. FCM Storage Bucket
* **Type**: Text Field (Required)
* **Example**: `my-new-project-f2074.firebasestorage.app`
* **Description**: Cloud storage bucket URL from Firebase project settings.

### 9. Messaging Sender Id
* **Type**: Encrypted Text Field (Required)
* **Example**: `532922761537`
* **Description**: Sender ID found under **Project Settings > Cloud Messaging**.

### 10. FCM App Id
* **Type**: Encrypted Text Field (Required)
* **Example**: `1:532922761537:web:80a57f39923724e474e1c0`
* **Description**: Unique App ID string from Firebase Web App settings.

### 11. Public Key
* **Type**: Encrypted Text Field (Required)
* **Description**: Web Push Certificate Public Key (VAPID Key) generated under **Cloud Messaging > Web configuration**.

### 12. Measurement Id
* **Type**: Encrypted Text Field (Required)
* **Example**: `G-M2KZ93XTXN`
* **Description**: Google Analytics 4 Measurement ID linked to the Firebase project.

---

## Branding & Display Configuration

![PWA Configuration Part 2](/images/pwa-configuration-part-b.webp)

### 13. Application Icon
* **Type**: Image File Upload (Required, `.png` only)
* **Description**: The master high-resolution icon for the application. Magento automatically resizes and serves this icon in 144x144, 192x192, and 512x512 resolutions for Android and desktop launchers.

### 14. Splash Background Color
* **Type**: Hex Color Picker (Required)
* **Default**: `#bf6bbf`
* **Description**: Background color rendered behind the app icon on the native-like splash loading screen when the PWA launches.

### 15. Theme Color
* **Type**: Hex Color Picker (Required)
* **Default**: `#401740`
* **Description**: Sets the color of the browser status bar, navigation toolbar, and task-switcher header on mobile operating systems.

### 16. Select Orientation
* **Options**:
  * `Any`: Free rotation based on device orientation.
  * `Natural`: Default orientation of the device (portrait on phones, landscape on tablets).
  * `Landscape`: Forces horizontal landscape mode.
  * `Portrait`: Locks the app in vertical portrait mode.
* **Description**: Dictates how the application displays as the user rotates their mobile device.

### 17. Select Display
* **Options**:
  * `Standalone`: Opens in its own window without browser address bars or navigation buttons (Recommended).
  * `Fullscreen`: Occupies the entire screen without any operating system status bar or browser UI.
  * `Minimal UI`: Displays simplified back/forward browser controls.
  * `Browser`: Standard browser tab view.

### 18. IOS Splash Screen Image
* **Type**: Image File Upload (`.png` only)
* **Dimensions**: Must be exactly **2048 x 2732 px**.
* **Description**: High-resolution splash screen image specifically tailored for Apple iOS / iPadOS devices when launched from the home screen.

### 19. Select CMS Page for Offline View
* **Type**: CMS Page Dropdown Selector
* **Description**: Selects the fallback Magento CMS page displayed when a shopper loses internet connection and visits non-cached routes (such as search or checkout).

### 20. Service Worker Version
* **Type**: Text Field (Required)
* **Example**: `1.0.4`
* **Description**: Whenever you modify CSS styles, storefront assets, or service worker behavior, increment this version string (e.g., `1.0.5`). The browser detects the version difference, purges outdated runtime caches, and downloads the fresh service worker.

---

::: tip Save & Flush
After changing any fields in this configuration section, click **Save Config** and run the cache flush command:

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears your store cache so your updated app name, colors, and settings show up on customer devices right away." />
:::
