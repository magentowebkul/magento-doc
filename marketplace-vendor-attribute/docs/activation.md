# Activation & Verification

After successfully installing the extension, you must verify the module license and configure initial settings in the Magento Admin panel.

---

## 1. Module License Registration

The Marketplace Vendor Attribute Manager extension requires license verification via **Webkul Base**:

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Webkul > Module License** (or **Stores > Configuration > Webkul > Module License**).
3. Locate **Marketplace Vendor Attribute Manager** in the installed module list.
4. Enter your purchase order details and license key provided in your Webkul customer account.
5. Click **Save Config**.

![Module License](/images/module_license.webp)

---

## 2. Initial Module Verification

To verify that the module is active and properly loaded in your store:

1. Navigate to **Stores > Configuration > Marketplace > Vendor Attributes Settings**.
2. Confirm that the configuration settings panel displays properly.
3. Check the admin side menu under **Marketplace Management > Attribute Manager** to verify access to:
   - **Manage Attribute**
   - **Manage Display Fields**
   - **Assign Attribute**
   - **Assign Group**

![Admin Sidepanel Navigation](/images/admin_sidepanel.webp)

4. Flush the Magento application cache under **System > Cache Management** or via CLI:

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes Magento configuration and layout caches to reflect the newly registered admin menu and settings." />

![Flush Cache](/images/flush-cache.webp)

---

::: tip Verification Note
Once verified and enabled, custom vendor attributes will appear on customer registration forms, seller registration forms, and vendor profile management pages according to your configuration rules.
:::
