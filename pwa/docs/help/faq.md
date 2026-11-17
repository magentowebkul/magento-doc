# Frequently Asked Questions (FAQ)

Frequently asked questions regarding **Magento 2 Progressive Web Application (PWA)** features, compatibility, and management.

---

### 1. Does the customer need to install an app from the App Store or Play Store?
No. Progressive Web Applications run directly in modern web browsers. Customers can install the app to their home screen with a single tap directly from your website, bypassing app store fees, reviews, and large downloads.

---

### 2. How does PWA improve website performance?
PWA utilizes **Google Workbox** service workers to precache essential site assets and store visited pages in local browser Cache Storage. When a customer navigates between pages, assets load instantly from the device rather than making round-trip server requests over slow mobile networks.

---

### 3. Can customers browse while offline?
Yes. Visited catalog pages, category listings, and static assets remain stored in the browser's Cache Storage and can be browsed without an internet connection. If a shopper navigates to an uncached route, the service worker displays your configured CMS offline fallback page.

---

### 4. What is Workbox Background Sync?
Workbox Background Sync detects when a network connection drops while a shopper is searching or submitting forms. It queues the interrupted request locally in IndexedDB and automatically executes it as soon as the shopper's device reconnects to the internet.

---

### 5. Can I send push notifications to specific customers?
Yes! Store administrators can navigate to **Customers > All Customers**, filter by **PWA Notification Token = Yes**, select specific customer records, and use the mass action **Send Notification Message** to dispatch targeted alerts.

---

### 6. Are push notifications supported on Apple iOS devices?
Yes. Beginning with **iOS 16.4**, Apple supports the Web Push API for PWAs that have been added to the Home Screen. Once a user adds your store to their iPhone Home Screen and opens it, they can opt in to push notifications just like on Android or desktop.

---

### 7. Does the extension support multiple websites and store views?
Yes. Store administrators can customize the **Application Name**, **Short Name**, **Application Icon**, **Theme Color**, and **Splash Background Color** independently for each website or store view.

---

### 8. Is the extension compatible with Hyvä Themes?
Yes. Webkul provides a dedicated compatibility package—`Webkul_PwaHyva`—which replaces legacy Luma JavaScript libraries with lightweight **Alpine.js** and utility-first **Tailwind CSS**, preserving Hyvä's 100/100 Core Web Vitals score.

---

### 9. Which Firebase API is used for push notifications?
The extension utilizes the modern **Firebase Cloud Messaging (FCM V1 API)** with OAuth2 service account tokens, complying with Google's latest security and reliability standards.

---

### 10. How can I get technical support or request custom modifications?
For technical support, feature requests, or custom design requirements, submit a ticket through the official **[Webkul UVdesk Support Portal](https://webkul.uvdesk.com/en/)** or visit the **[Webkul Help Center](https://store.webkul.com/support.html/)**.
