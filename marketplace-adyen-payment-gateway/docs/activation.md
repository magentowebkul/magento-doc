# Activate the Module

Before the payment drop-in components and seller payout settings appear in your store layout, you must activate the module settings in the Magento backend.

## Check Registration Status

To verify that Magento has correctly registered and loaded the module, run:
```bash
bin/magento module:status Webkul_MpAdyenPayment
```
<ExplainCode explanation="This command prints the status of the MpAdyenPayment module (Enabled or Disabled) in Magento's registry." />

If the module is listed under **Disabled Modules**, enable it with:
```bash
bin/magento module:enable Webkul_MpAdyenPayment
bin/magento setup:upgrade
```
<ExplainCode explanation="These commands enable the module and run database updates to finalize registration." />

---

## Module License Verification & Activation

The Marketplace Adyen Payment configurations are secured behind centralized Webkul license verification. Upon initial installation, the payment configurations are locked or hidden until your license key is verified via the `Webkul_Base` management panel.

### Step 1: Verify Your License Key Centralized
1. Log into your **Magento Admin Panel**.
2. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Module License**
   :::
3. Under the **Licensed Modules** section, locate the row corresponding to **Webkul_MpAdyenPayment** (or select it from the list of modules).
4. Enter your purchased **License Key** in the input field.
5. Click the **Verify** button. The system validates the key asynchronously with Webkul's central licensing servers.
6. Once verified, the status will show a green verified label.

![Central License Key Verification](/images/admin_general_pre_config.webp)

### Step 2: Enable the Payment Gateway Module
1. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Sales** &rarr; **Payment Methods** &rarr; **Adyen Marketplace Payment Gateway**
   :::
2. Under the **Adyen Marketplace Payment Gateway** fieldset, set **Enabled** to `Yes`.
3. Click **Save Config** in the top-right corner.

![Enable Module Configuration](/images/admin_enable_module.webp)

---

## Clearing Cache

Flush the Magento cache using the Admin Cache Management page or the CLI command:
```bash
bin/magento cache:clean
```
<ExplainCode explanation="This command cleans the Magento cache storage so configuration edits and payment layout changes take immediate effect." />

```bash
bin/magento cache:flush
```
<ExplainCode explanation="This command flushes all cache storage types including layout XML, block HTML, and full page cache." />

Now all functional Adyen Payment configuration sections and seller payout panels are fully unlocked and ready for use.
