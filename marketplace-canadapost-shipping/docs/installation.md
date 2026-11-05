# Installation

Follow the detailed instructions below to install the **Magento 2 Marketplace Canada Post Shipping** module via either manual zip archive upload or Composer package manager.

---

## Option A — Install from Webkul Store Zip Package

Use this method if you downloaded the module archive directly from your **[Webkul Customer Account](https://store.webkul.com/)**.

### 1. Download and Extract Package
Log in to the Webkul Store, open **My Account > My Purchased Products**, locate the extension, and download the `.zip` archive. Extract the contents on your local machine.

### 2. Upload Code to Magento Server
Inside the extracted folder, navigate to `src/app`. Upload the entire `app` folder into your Magento 2 root directory via SFTP or SSH. The module files should reside at:
`app/code/Webkul/MpCanadapostShipping/`

![Upload Module Folder](/images/module-upload-folder.webp)

---

## Option B — Install from Adobe Commerce Marketplace

If you purchased the extension from the Adobe Commerce Marketplace, install via Composer using your marketplace authentication keys.

### 1. Obtain Marketplace Access Keys
1. Log in to the [Adobe Commerce Marketplace](https://commercemarketplace.adobe.com/).
2. Click **My Profile** in the top navigation.
   
   ![Marketplace My Profile](/images/marketplace-my-profile.webp)

3. Navigate to **My Products > Access Keys**.
   
   ![Marketplace Access Keys](/images/marketplace-access-keys.webp)

4. If you have not created keys previously, click **Create A New Access Key**, supply an identifier, and click **OK**.
   
   ![Create Access Key](/images/marketplace-create-access-key.webp)

5. Copy the **Public Key** (username) and **Private Key** (password) into your local credentials storage.

### 2. Verify Component Name and Run Composer
Check the exact component name and version under **My Profile > My Purchases**.

![Component Details](/images/marketplace-component-details.webp)

Open your terminal, navigate to your Magento 2 installation root, and execute:

```bash:no-line-numbers
composer require webkul/marketplace-base-canada-post-shipping
```
<ExplainCode explanation="Pulls the Webkul Canada Post Shipping package and its required dependencies into your project vendor folder." />

---

## Execute Deployment Commands

Once the module files are in place, run the following commands sequentially from the Magento 2 root directory:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers the Webkul_MpCanadapostShipping module in app/etc/config.php and executes database schema scripts." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles dependency injection configurations, factories, proxies, and REST client preferences." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys static view assets, styles, and JavaScript scripts for storefront and backend adminhtml themes." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Rebuilds all core Magento indexers to ensure catalog, stock, and shipping lookup tables are completely synchronized." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento system cache tags so the new shipping carrier and configuration panels load immediately." />

You can also flush system caches from the Magento Admin Panel under **System > Tools > Cache Management** by clicking **Flush Magento Cache**.

![Flush Cache](/images/flush-cache.webp)

---

## Multi-lingual Setup & Localization

The extension is 100% translation-ready and supports both Left-to-Right (LTR) and Right-to-Left (RTL) languages.

### 1. Select Store Locale
In your Magento Admin Panel, navigate to **Stores > Configuration > General > General > Locale Options**. Select the desired store locale (for instance, *French (Canada)* or *German*) and save the configuration.

![Store Locale Options](/images/admin-locale-options.webp)

### 2. Configure Translation CSV
Navigate to the module directory on your server:
`app/code/Webkul/MpCanadapostShipping/i18n/`

![i18n Directory](/images/i18n-folder-structure.webp)

Duplicate the base file `en_US.csv` and rename it to match your target locale code (e.g., `fr_CA.csv` or `de_DE.csv`).

![Rename CSV](/images/i18n-rename-csv.webp)

Open the CSV file in your spreadsheet or text editor. Translate the strings in the right-hand column (after the comma):

![Translate CSV Content](/images/i18n-translation-content.webp)

Once translated, save the file back to `app/code/Webkul/MpCanadapostShipping/i18n/` and flush the Magento cache:

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears the translation dictionary cache to ensure that translated shipping labels and error messages appear on the storefront." />
