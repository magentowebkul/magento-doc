# Installation

You can install the **Marketplace Adyen Payment** module either manually via file copy or through Composer (recommended if packaged in a repository).

## Method 1: Manual Installation (File Transfer)

::: tip Central Base & Marketplace Dependencies
Because the module depends on Webkul base libraries and multi-vendor marketplace core, you must ensure both `Webkul_Base` and `Webkul_Marketplace` are installed at:
```bash
app/code/Webkul/Base
app/code/Webkul/Marketplace
```
If dependencies are missing, Magento compilation and setup upgrades will fail with dependency errors.
:::

1. **Extract Archive**: Extract the zipped code packages for the module.
2. **Move Files**: Copy the extracted folder structure into your Magento root directory:
   * Marketplace Adyen Payment: `app/code/Webkul/MpAdyenPayment`

   ![Move app folder](/images/Move_app_folder_2.webp)

3. **Set Permissions**: Ensure the file permissions and ownership match your Magento user:
   ```bash
   chown -R www-data:www-data app/code/Webkul/MpAdyenPayment
   ```
   <ExplainCode explanation="This command sets file ownership and permissions for the module directory to ensure Magento's web server process can read and execute files." />

---

## Method 2: Composer Installation (If available)

Run the composer require command to automatically download the module and dependencies:
```bash
composer require webkul/marketplace-adyen-payment-gateway
```
<ExplainCode explanation="This command downloads and installs the Marketplace Adyen Payment package and its dependencies into the Magento project." />

---

## Post-Installation Commands

Once the code is in place, compile, update the database schemas, and deploy static assets:

1. **Enable Module**:
   ```bash
   bin/magento module:enable Webkul_MpAdyenPayment
   ```
   <ExplainCode explanation="This command enables the MpAdyenPayment module." />

2. **Run Setup Upgrade**:
   ```bash
   bin/magento setup:upgrade
   ```
   <ExplainCode explanation="This command runs database declarative schema updates for new tables (such as mp_adyen_payout_details, mp_adyen_payout_request, and mp_adyen_webhook_log)." />

3. **Recompile Code**:
   ```bash
   bin/magento setup:di:compile
   ```
   <ExplainCode explanation="This command compiles Magento code, payment gateway builders, and dependency injection configs into the generated directory." />

4. **Deploy Static Content**:
   ```bash
   bin/magento setup:static-content:deploy -f
   ```
   <ExplainCode explanation="This command deploys static frontend assets, JavaScript payment components, and CSS files to the pub/static/ folder. The -f option forces deployment." />

5. **Flush Caches**:
   ```bash
   bin/magento cache:flush
   ```
   <ExplainCode explanation="This command flushes all caches so that Magento picks up the new layout XML, payment method configurations, and template updates." />
