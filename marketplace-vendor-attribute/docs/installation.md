# Installation

Installing the **Magento 2 Marketplace Vendor Attribute Manager** module is straightforward. Follow the instructions below to upload, compile, and configure the module.

---

## Option A — Install from Zip Package

Use this method if you obtained the extension zip package from the **[Webkul Store](https://store.webkul.com/)**.

### 1. Extract Package
Extract the downloaded zip file on your local workstation. The archive contains an `src` directory containing an `app` folder.

### 2. Upload Code Directory
Connect to your server via SSH/SFTP. Upload the extracted `app` directory into your Magento 2 root directory. The module files should reside under:
`app/code/Webkul/MpVendorAttributeManager/`

![Move App Folder](/images/move-app-folder.webp)

### 3. Execute Deployment Commands
Open a terminal, navigate to your Magento 2 root directory, and execute the following commands in sequence:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Applies database schema updates, creates vendor attribute tables, and registers Webkul_MpVendorAttributeManager in Magento." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles dependency injection definitions, proxies, factories, and repository preferences." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys view assets, CSS stylesheets, and JavaScript files for storefront and adminhtml themes." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes catalog, customer, and marketplace data to ensure new attribute fields are indexed immediately." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes Magento application cache storage so that new configurations and UI layouts take effect." />

You can also flush the cache via the admin panel. Navigate to **System -> Tools -> Cache Management** and click the **Flush Magento Cache** button.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install with Composer

Use this method if your organization uses Composer repositories:

```bash:no-line-numbers
composer require webkul/marketplace-vendor-attribute-manager
```
<ExplainCode explanation="Downloads and installs the Webkul Marketplace Vendor Attribute Manager package and required dependencies via Composer." />

After requiring the package, execute the deployment commands outlined in **Option A > Step 3**.

---

## Multilingual Support & Translation

The extension supports multiple languages, including Right-to-Left (RTL) and Left-to-Right (LTR) storefront orientations. To translate the module into another language, such as German:

1. Navigate to the module's internationalization directory: `app/code/Webkul/MpVendorAttributeManager/i18n`.

![Translation First](/images/translation-first.webp)

2. Open the `en_US.csv` file.
3. Duplicate and rename the CSV file to match your target locale, for example, `de_DE.csv` for German.

![Translation Second](/images/translation-second.webp)

4. Translate all strings on the right side of the comma into your target language.

![Translation Third](/images/translation-third.webp)

5. Save the file and upload it to `app/code/Webkul/MpVendorAttributeManager/i18n` on your server.
6. In your Adobe Commerce / Magento admin panel, navigate to **Stores -> Configuration -> General -> General -> Locale Options** and select your desired locale.

![Locale Options](/images/rvp-locale-option.webp)

7. Deploy static content and flush the cache again:
```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```
