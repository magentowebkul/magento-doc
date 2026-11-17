# Android Browser Experience

On Android devices running Google Chrome, Opera, or Samsung Internet, customers enjoy an immersive, native-like shopping journey with zero app store downloads.

---

## 1. Storefront Visit & Push Notification Opt-In

When a customer navigates to your store URL (e.g., `https://yourstore.com/`):

1. A lightweight permission prompt appears at the bottom of the screen asking the customer to allow notifications.

![Notification Prompt on Home Screen](/images/notification-enable-home-screen.webp)

2. Tapping **Allow** grants permission and securely registers the device's FCM token in Magento.

![Notification Enabled Confirmation](/images/notification-enabled.webp)

---

## 2. Add to Home Screen

Android browsers automatically detect the Web App Manifest and provide seamless installation hooks:

1. Shoppers can tap the **Add to Home Screen button (Plus `+` sign)** near the header cart icon or footer bar.

![Add to Home Screen Plus Sign](/images/magento2-pwa-home-page-1.webp)

2. The native Android installation dialog opens with the configured application name and icon:

![Android Install Prompt](/images/install-pwa-app-android.webp)

3. Tapping **Install** automatically places the store application shortcut directly onto the Android Home Screen and App Drawer.

![App Icon on Home Screen](/images/app-icon-home-screen.webp)

---

## 3. Launching the PWA & Splash Screen

When the customer taps the application icon:

1. The PWA boots instantly with a custom branded **Splash Screen** displaying the uploaded application icon and configured splash background color.

![PWA Splash Screen](/images/splash-screen.webp)

2. The application opens in **Standalone** mode, removing the browser URL address bar and navigation controls, creating the exact look and feel of a native Android application.

---

## 4. Browsing Products & Fast Checkout

Inside the standalone PWA, customers can browse catalogs, inspect product descriptions, configure options, and manage their cart with high-speed performance:

![View Product in PWA](/images/view-product-add-to-cart.webp)

1. Tapping **Add to Cart** provides instant feedback.

![Product Added to Cart](/images/product-added-to-cart-magento2-pwa.webp)

2. Customers proceed to standard or one-step checkout to complete purchases securely.

---

## 5. Receiving Push Notifications

Subscribed Android shoppers receive real-time push alerts directly in their device's notification tray, even when the browser or PWA is completely closed:

### Promotional & Flash Sale Alerts
Promote seasonal deals and discount vouchers with actionable links directly to product categories:

![Push Notification on Android](/images/push-notification-android.webp)

### Automated Order Status Notifications
Keep shoppers informed when orders are placed, invoiced, or shipped:

![Order Status Notification](/images/order-notification.webp)
