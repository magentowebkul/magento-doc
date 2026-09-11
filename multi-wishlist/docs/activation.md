# Activation & Configuration

After installing the extension, you must activate the module license and configure store settings in the Magento Admin panel.

---

## 1. Module License Registration

The Multi Wishlist extension requires license verification via **Webkul Base**:

1. Log in to your Magento Admin Panel.
2. Navigate to **Webkul > Module License** (or **Stores > Configuration > Webkul > Module License**).
3. Locate **Multi Wish List** in the module license list.
4. Enter your purchase order details and license key provided in your Webkul account.
5. Click **Save Config**.

![Module License](/images/module_license.png)

---

## 2. Enable Multi Wishlist Extension

1. Go to **Stores > Configuration > Webkul > Multi Wish List**.
2. Set **Enabled** to `Yes`.
3. Click **Save Config** to save settings.

![Module Configuration](/images/module_config.png)

4. Flush the Magento cache under **System > Cache Management**.

![Flush Cache](/images/flush-cache.webp)

---

::: tip Status Path
The store configuration path checked by system logic is `multiwishlist/general_settings/status`. When set to `1` (Enable), multi-wishlist modal buttons, dropdowns, and features appear on product detail pages, category listings, and customer accounts.
:::
