# Activate the Module

Before the AI buttons and settings appear in your admin layout, you must activate the module settings in the Magento backend.

## Check Registration Status

To verify that Magento has correctly registered and loaded the module, run:
```bash
bin/magento module:status Webkul_AIContentGenerator
```
<ExplainCode explanation="This command prints the status of the AIContentGenerator module (Enabled or Disabled) in Magento's registry." />

If the module is listed under **Disabled Modules**, enable it with:
```bash
bin/magento module:enable Webkul_AIContentGenerator
bin/magento setup:upgrade
```
<ExplainCode explanation="These commands enable the module and run database updates to finalize registration." />

## Module License Verification & Activation

The AI Content Generator configurations are secured behind centralized Webkul license verification. Upon initial installation, the configurations under **AI Content Generator** are locked or hidden until your license key is verified via the `Webkul_Base` management panel.

### Step 1: Verify Your License Key Centralized
1. Log into your **Magento Admin Panel**.
2. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Module License**
   :::
3. Under the **Licensed Modules** section, locate the row corresponding to **Webkul_AIContentGenerator** (or select it from the list of modules).
4. Enter your purchased **License Key** in the input field.
5. Click the **Verify** button. The system validates the key asynchronously with Webkul's central licensing servers.
6. Once verified, the status will show a green verified label.

![AI Content Generator Module Verification](/images/module_verification.webp)

### Step 2: Enable the Module
1. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **AI Content Generator**
   :::
2. Under **General Settings**, set **Enable Module** to `Yes`.
3. Click **Save Config** in the top-right corner.

   ![Enable AI Content Generator Module](/images/admin_enable_module.webp)

4. Flush the Magento cache using the Admin Cache Management page or the CLI command:
   ```bash
   bin/magento cache:flush
   ```
   <ExplainCode explanation="This command flushes the Magento cache storage so configuration edits take immediate effect." />

Now all functional AI configuration sections (Product, Category, and CMS Settings) are fully unlocked and ready for use.



