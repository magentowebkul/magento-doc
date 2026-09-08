# Troubleshooting

Solutions to common questions and issues when installing or operating the Shopping Cart Scanner module.

## 1. Mobile Camera Scanner Not Opening
* **Symptom:** Tapping the camera scanner icon `[▪]` in the mobile header shows a permission denied error or fails to open camera stream.
* **Cause:** Mobile browsers enforce HTTPS security policies for camera device access.
* **Solution:** Ensure your website URL is served over `https://` with a valid SSL certificate.

## 2. Dynamic QR Code Shows "Expired" Immediately
* **Symptom:** QR code displays the expired overlay upon generation.
* **Cause:** Server timezone or system clock unsynchronized, or TTL duration set too low.
* **Solution:** Verify server time NTP synchronization (`timedatectl`), and increase **QR Code & Token Expiration (TTL)** under **Stores > Configuration > Webkul > Cart Scanner > General Settings**.

## 3. Mini-Cart QR Code Widget Missing
* **Symptom:** Mini-cart dropdown opens, but no QR code widget is visible.
* **Cause:** **Display in Mini-Cart** setting disabled or layout cache stale.
* **Solution:** Set **Stores > Configuration > Webkul > Cart Scanner > Display & Widget Customization > Display in Mini-Cart** to **Yes**, then run `php bin/magento cache:flush`.

## 4. Hyvä Storefront Compatibility
* **Symptom:** Scanner widget styles or Alpine.js bindings break on Hyvä Theme.
* **Solution:** Verify that the `Webkul_CartScannerHyva` compatibility module is enabled in `app/etc/config.php` and rebuild Tailwind CSS assets.
