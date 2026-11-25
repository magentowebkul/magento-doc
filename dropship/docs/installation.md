# Installation

Installing the **Magento 2 Dropship Extension (Webkul_Dropship)** is a straightforward process. Follow the step-by-step instructions below to deploy the module and prepare your store for multi-warehouse management and AliExpress product imports.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module archive directly from the [Webkul Store](https://store.webkul.com/magento2-dropship-extension.html).

### Step 1: Download & Extract Archive
1. Log into your Webkul Store account, go to **My Account > My Purchased Products**, and download the extension zip archive.
2. Extract the zip archive on your computer.
3. Inside the extracted folder, locate the `src/app` folder.

### Step 2: Upload Files to Server
Connect to your Magento server using SSH or SFTP. Copy the contents of the `app` folder into your Magento root directory so that the module files are located at:

```text
<Magento_Root>/app/code/Webkul/Dropship/
```

![Upload module files to Magento root](/images/move-app-folder.webp)

### Step 3: Install Required Composer Packages
The Dropship extension relies on `phpoffice/phpspreadsheet` for processing spreadsheet rate sheets and `webkul/aliexpress` for AliExpress connectivity. Run:

```bash
composer require phpoffice/phpspreadsheet
```
<ExplainCode explanation="Installs the PhpSpreadsheet library required to parse CSV, XLS, and XLSX files during product profile and shipping rule uploads." />

```bash
composer require webkul/aliexpress
```
<ExplainCode explanation="Installs the core AliExpress client package used by Webkul Dropship to interact with AliExpress product APIs and parse variants." />

### Step 4: Run Magento Deployment Commands
Run the following standard Magento commands in sequence from your Magento root directory:

```bash
php bin/magento setup:upgrade
```
<ExplainCode explanation="Updates your store database, creating the necessary tables for warehouses, shipping rules, category mappings, and AliExpress tracking." />

```bash
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles Magento code, plugins, and dependencies for optimal production speed." />

```bash
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys admin panel styling, scripts, and storefront visual components." />

```bash
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes catalog data, product prices, and warehouse inventory sources." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes all Magento cache storage types, ensuring the new features appear immediately." />

![Magento Installation Sequence](/images/module_installation.webp)

---

## Option B — Install with Composer

Use this method if the module package is available via your private Composer repository or Webkul Composer channel:

```bash
composer require webkul/module-dropship
```
<ExplainCode explanation="Downloads and installs the Webkul Dropship extension package and automatically resolves all required dependencies." />

After running the composer command, run the standard deployment commands outlined in [Step 4](#step-4-run-magento-deployment-commands).

---

## Step 5: Start the Background Queue Process

The Dropship module uses Magento's background Message Queue to download high-resolution AliExpress product images and prepare catalog data without slowing down your browser.

Run this command in your terminal:

```bash
php bin/magento queue:consumers:start product.prepare &
```
<ExplainCode explanation="Starts the product.prepare queue consumer in the background (&) so AliExpress product photos and details are processed smoothly without waiting." />

---

## Detailed Explanation: What Gets Set Up During Installation

When you run `setup:upgrade`, the extension automatically sets up dedicated storage in your store database for all dropshipping operations:

* **Warehouses:** Stores warehouse profiles, manager logins, contact info, and Google Maps geocoding coordinates.
* **Shipping Rules:** Stores regional table rates by country, postal code range, and package weight for each warehouse.
* **Category Mappings:** Links supplier or AliExpress categories to your store's catalog categories.
* **Price Markup Rules:** Stores your profit margin brackets (e.g., +25% or +$10) to automatically price imported goods.
* **Dataflow Profiles:** Stores custom column mapping templates for vendor spreadsheet feeds.
* **AliExpress Products & Orders:** Tracks imported AliExpress items and orders ready for one-click fulfillment.

---

## Flush Cache via Admin Panel

You can also flush the cache directly from the Magento Admin backend:
1. Navigate to **System > Tools > Cache Management**.
2. Click the orange **Flush Magento Cache** button in the upper right.

![Flush Magento Cache](/images/flush-cache.webp)

---

## Step 6: Verify Admin Menu & Dynamic Version

Log into your Magento Admin panel. In the left navigation sidebar, you will see the **Dropship Manager** menu item.

At the bottom of the **Support** submenu, the module dynamically displays its active version number (e.g., `Version : 5.0.6`).

![Dropship Admin Menu & Dynamic Version](/images/admin_dropship_menu.webp)

---

## Multi-Language Support (i18n)

The extension fully supports multi-lingual stores and Right-to-Left (RTL) / Left-to-Right (LTR) languages:

1. Navigate to `app/code/Webkul/Dropship/i18n/`.
2. Locate the default translation dictionary `en_US.csv`.
3. Copy and rename the file to your target language code (e.g., `de_DE.csv` for German, `fr_FR.csv` for French, `es_ES.csv` for Spanish).
4. Translate all phrases on the right side of each comma.
5. Deploy static content and flush cache:

```bash
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```
<ExplainCode explanation="Deploys the newly translated language files to your store and clears cache so translated labels appear." />

::: tip Next Steps
Now verify and activate your module license in the [Activation Guide](/activation.html).
:::
