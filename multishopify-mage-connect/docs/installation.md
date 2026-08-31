# Installation

Installing the Magento 2 Multi Shopify Store Connector module is a straightforward process. Please follow the steps below to successfully install and prepare the module for use.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module package directly from the Webkul Store.

## 1. Download Module
Customers will get a zip folder and they have to extract the contents of this zip folder on their system.

## 2. Upload Folder
The extracted folder has an `src` folder, inside the `src` folder you have the `app` folder.
You need to transfer this `app` folder into the Magento 2 root directory on the server.

![INSTALLATION](/images/1-9-e1634634198330.png)

## 3. Run Commands
After the successful upload, you have to run these commands in the Magento 2 root directory:

```bash
php bin/magento setup:upgrade
```
<ExplainCode explanation="This command enables the Multi Shopify Mage Connect module and applies necessary database schema updates." />

```bash
php bin/magento setup:di:compile
```
<ExplainCode explanation="This compiles all dependency injection definitions and generates necessary proxy/interceptor classes." />

```bash
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="This deploys static view files (CSS, JS, images) required by the module for the frontend and Admin panel." />

```bash
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes all data to ensure new configurations and database entries are immediately reflected." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento caches to ensure the new module configurations and files are loaded." />

```bash
php bin/magento shopify:import:categories
```
<ExplainCode explanation="Generates the Shopify categories for mapping purposes." />

---

## Option B — Install with Composer

Use this method if the module package is available in your Composer repository.

You need to add the provided access keys during purchase. After that, run the Composer require command to install the package:

```bash
composer require webkul/multi-shopify-account-connector
```
<ExplainCode explanation="This command pulls the Magento 2 Multi Shopify Store Connector package from your configured Composer repository." />

After that, you need to run the installation commands provided in **[Option A > 3. Run Commands](#_3-run-commands)**.

---

For Multilingual support, please navigate to **Store > Configuration > General > Locale Options**. And select your desired language from the Locale option.

![locale](/images/webkul-magento2-shopify-connector-locale.webp)

## Language Translation

For module translation, navigate to the following path in your system: 
`app/code/Webkul/MultiShopifyStoreMageConnect/i18n/en_US.csv`.

![LANGUAGE TRANSLATION](/images/22-3.png)

1. Open the file named `en_US.csv` for editing.

![Shopify Magento 2 csv](/images/csv.png)

2. Replace the words after the comma (`,`) on the right in the file with your translated words.
3. After editing and translating the CSV file, save the translated file name according to your region language and country code (e.g., `de_DE.csv`).
4. Upload the translated file to the same folder from where you obtained it. Your module translation is complete.

![Shopify Magento 2 Language translation](/images/2016-05-02_16-25-34-3.png)
