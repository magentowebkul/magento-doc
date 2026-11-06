# Activation & License Setup

After installing the extension files and running Magento setup commands, you must verify your module license and enable the Shippo carrier in the admin panel.

---

## 1. Module License Registration

The Shippo Shipping extension requires license verification via **Webkul Base**:

1. Log in to your Magento Admin Panel.
2. Navigate to **Webkul > Module License** (or **Stores > Configuration > Webkul > Module License**).
3. Locate **Webkul_ShippoShipping** in the module license list.
4. Enter your purchase order details and license key provided in your Webkul account.
5. Click **Save & Verify**.

![Module License](/images/module_license.webp)

---

## 2. Enable Shippo Shipping Extension

1. Go to **Stores > Configuration > Sales > Delivery Methods > Webkul Shippo Shipping** (or **ShippoShipping > Shippo Configuration Settings**).
2. Set **Enabled for Checkout** to `Yes`.
3. Provide your private **Shippo API Key** and click **Save Config** to save settings.

![Module Configuration](/images/admin-module-configuration.webp)

4. Flush the Magento cache under **System > Cache Management**.

![Flush Cache](/images/flush-cache.webp)

---

::: tip Activation Note
When **Enabled for Checkout** is set to `Yes`, Shippo carrier methods and live rates will immediately appear on shopping carts and checkout pages.
:::
