# Activate the Module

Before the shopping list options and customer dashboard panels appear on your storefront, verify registration and enable the configuration in the Magento Admin backend.

## Check Registration Status

To verify that Magento has recognized and registered the module, run:
```bash
php bin/magento module:status Webkul_ShoppingList
```
<ExplainCode explanation="This CLI command displays whether Webkul_ShoppingList is currently in the list of Enabled or Disabled modules." />

If listed under **Disabled Modules**, execute:
```bash
php bin/magento module:enable Webkul_ShoppingList
php bin/magento setup:upgrade
```
<ExplainCode explanation="Enables the extension and updates the module registration list." />

---

## Module License Verification & Activation

The Shopping List extension features centralized Webkul license key verification via `Webkul_Base`.

### Step 1: Verify License Key
1. Log into your **Magento Admin Panel**.
2. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Module License**
   :::
3. Locate **Webkul_ShoppingList** in the licensed extensions list.
4. Enter your purchased **License Key** in the designated input field.
5. Click **Verify**. The licensing status updates to active/verified.

![Central License Key Verification Panel](/images/admin_license_verification.webp)

### Step 2: Enable Shopping List Configuration
1. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Shopping List** &rarr; **Settings**
   :::
2. Set **Enable** to `Yes`.
3. Click **Save Config** in the top right corner.

![Enable Shopping List Extension in Magento Admin](/images/admin_enable_shopping_list.webp)

---

## Clearing Cache

After saving configuration changes, flush the Magento cache storage:
```bash
php bin/magento cache:clean
php bin/magento cache:flush
```
<ExplainCode explanation="These commands clean and flush all layout XML, configuration, and HTML block caches." />

![Admin Cache Management Panel](/images/admin_cache_management.webp)

The Shopping List feature is now active on your store front and ready for customer use.
