# iOS Safari Experience

With Apple's introduction of Web Push Notifications and full Service Worker support in **iOS 16.4+**, iPhone and iPad shoppers can install your Magento store as a standalone PWA and receive push notifications on their lock screen.

---

## 1. Installing PWA on iOS Devices

Because Apple's Mobile Safari does not display automatic install banners like Android, installation is initiated through the Safari Share Sheet:

1. Open your Magento store in **Mobile Safari** on an iPhone or iPad.
2. Tap the **Share icon** (the square with an upward arrow) in the bottom Safari toolbar.

![iOS Safari Share Menu](/images/magento2-pwa-ios-device-installation.webp)

3. Scroll through the share sheet actions and tap **Add to Home Screen**.

![Add to Home Screen iOS](/images/magento2-pwa-add-to-home-screen-1.webp)

4. iOS displays the configured application title and icon. Tap **Add** in the top-right corner.

![Confirm Add on iOS](/images/press-add-button-to-add-pwa-ios.webp)

5. The store shortcut is placed on the customer's iOS Home Screen alongside their other native apps.

![iOS Home Screen Launcher](/images/pwa-app-short-cut-launcher-ios-home-screen.webp)

---

## 2. Launching in Standalone Mode & Splash Screen

When the shopper taps the icon on their iOS Home Screen:

1. The application boots with high-resolution Apple splash artwork rendered using the admin-uploaded **IOS Splash Screen Image** (`2048x2732 px`).
2. The PWA runs in **Standalone** mode with no Safari address bar, tabs, or navigation buttons.

---

## 3. Allowing Push Notifications on iOS

::: important iOS 16.4+ Requirement
On iOS, Apple requires that a Progressive Web App be added to the Home Screen and launched in standalone mode before requesting Web Push notification permissions.
:::

1. Upon opening the installed PWA on iOS, the notification prompt appears:

![Allow Notifications iOS](/images/allow-notifications.webp)

2. Tapping **Allow** prompts the native Apple system dialog to approve alerts, sounds, and icon badges.

![Approve Notifications Settings](/images/approve-notifications.webp)

3. Customers can manage or customize their notification preferences at any time under **iOS Settings > Notifications > [Your App Name]**.

---

## 4. Browsing & Cart Management

Shoppers enjoy rapid navigation, fluid gestures, and instant catalog access:

1. Browse categories and product pages in high resolution.

![Add Product to Cart iOS](/images/add-product-to-cart-magento2-pwa-ios.webp)

2. Add items to cart with visual confirmation.

![Product Added to Cart iOS](/images/product-added-to-cart-magento2-pwa-ios.webp)

3. Proceed to checkout seamlessly.

---

## 5. Web Push Alerts on iOS Lock Screen

Notifications arrive directly on the iOS Lock Screen and in the Notification Center:

### Promotional Push Messages
Alert shoppers of special discount events, seasonal sales, or coupon giveaways:

![iOS Promotional Push](/images/push-notification.webp)

### Order Updates & Shipment Tracking
Real-time status updates when an order is received, processed, or out for delivery:

![iOS Order Status Notification](/images/order-status-changed.webp)
