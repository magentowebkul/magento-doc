# Module Activation & Verification

Before dropshipping workflows, multi-warehouse routing, and AliExpress product synchronization become active in your store, you must verify the module registration, activate your extension license, and enable the master dropship toggle in the Magento backend.

---

## Check Registration Status

To verify that Magento has correctly registered and loaded the module, execute:

```bash
bin/magento module:status Webkul_Dropship
```
<ExplainCode explanation="Verifies whether Webkul_Dropship is registered and active in your store's module configuration." />

If the module is listed under **Disabled Modules**, enable it with:

```bash
bin/magento module:enable Webkul_Dropship
bin/magento setup:upgrade
```
<ExplainCode explanation="Enables the module and applies database schema updates to register dropship features." />

---

## Module License Verification

Webkul extensions include centralized license verification to ensure authenticity and access to updates.

### Step 1: Verify Your License Key
1. Log into your **Magento Admin Panel**.
2. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Module License**
   :::
3. Locate **Webkul_Dropship** in the list of licensed extensions.
4. Enter your purchased **License Key**.
5. Click **Verify**. The system validates your key with Webkul's licensing servers and displays a verified status.

![Module License Verification](/images/module_license.webp)

---

## Enable the Dropship Module

Once licensed, activate dropship functionality across your store views:

1. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Dropship Manager** &rarr; **General Settings**
   :::
2. Set **Enable Module** to `Yes`.
3. Set **Warehouse Assignment Mode** to `Auto` (to enable live shipping rate calculations at checkout and automatic closest-warehouse routing).
4. Enter your **Google Places API Key** for warehouse address geocoding.
5. Click **Save Config** in the top-right corner.

![General Settings Configuration](/images/admin_general_settings.webp)

---

## Start the Background Queue Consumer

Ensure the background process is running to download AliExpress product images and prepare catalog data:

```bash
php bin/magento queue:consumers:start product.prepare &
```
<ExplainCode explanation="Starts the background queue consumer process responsible for preparing AliExpress products and images asynchronously without slowing down your store." />

---

## Clear Magento Cache

Flush all configuration and layout caches so the new activation settings take immediate effect:

```bash
bin/magento cache:clean
```
<ExplainCode explanation="Cleans configuration and layout caches so new settings take effect." />

```bash
bin/magento cache:flush
```
<ExplainCode explanation="Flushes all cached storage types across your store." />

::: tip Next Steps
Now that the module is active, proceed to [Dropship Configuration](/admin/configuration.html) to fine-tune transactional email notifications, AliExpress credentials, and warehouse settings.
:::
