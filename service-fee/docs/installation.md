# Installation

Installing the **Magento 2 Service Fee** module is a straightforward process. Please follow the steps below to successfully install and prepare the module for use.

## Option A — Install from Zip Package

Use this method if you downloaded the module package directly from the Webkul Store.

### 1. Download Module

Log in to your [Webkul Store](https://store.webkul.com/) account, navigate to **My Account > My Purchased Products**, and then download and extract the contents of the module zip folder on your local system.

### 2. Upload Folder

Once the module zip is extracted, navigate to `src/app`. Connect to your server via SSH/SFTP. Copy the `app` folder and upload it into your Magento 2 root directory on the server. The files should reside under:

```text
app/code/Webkul/ServiceFee/
```

![Upload the app folder into the Magento 2 Root folder](/images/Move_app_folder_2.webp)

### 3. Run Commands

Run the following commands in sequence in the Magento 2 root directory to compile, deploy, and clear the cache:

```bash
php bin/magento setup:upgrade
```
<ExplainCode explanation="This command upgrades the database schema and installs module metadata tables." />

```bash
php bin/magento setup:di:compile
```
<ExplainCode explanation="This command compiles Magento code, factory classes, and dependency injection configurations." />

```bash
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="This command deploys static view files, frontend CSS, and JavaScript components to the pub/static directory." />

```bash
php bin/magento indexer:reindex
```
<ExplainCode explanation="This command reindexes catalog, stock, and total price indexers." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="This command flushes all Magento cache storage types." />

You can also use the admin panel to clear the cache. Navigate to **System > Tools > Cache Management** and click the **Flush Magento Cache** button.

![Magento Admin Cache Management](/images/admin_cache_management.webp)

## Option B — Install with Composer

Use this method if the module package is available in your Composer repository.

You need to add the provided access keys during purchase. After that, run the Composer require command to install the package:

```bash
composer require webkul/service-fee
```
<ExplainCode explanation="This command downloads and installs the Service Fee extension package and its dependencies using Composer." />

After that, you need to run the installation commands provided in [Option A > 3. Run Commands](#_3-run-commands).

## Language Translation

The module supports multiple languages, including both RTL (Right-to-Left) and LTR (Left-to-Right) layouts. To translate the module into another language, such as German:

1. Navigate to the module's `i18n` directory:
   ```text
   app/code/Webkul/ServiceFee/i18n
   ```
2. Edit the `en_US.csv` file.
3. Rename the CSV file to match your target locale, for example, `de_DE.csv` for German.
4. Translate all content on the right side of the comma into your target language.
5. Save the file.
6. Upload the translated CSV file to the `app/code/Webkul/ServiceFee/i18n` path on your server.

![Copy edited CSV file to i18n folder](/images/rename_translation_csv.webp)

7. Navigate to your Admin Panel, go to **Stores > Configuration > General > General > Locale Options**, and select your desired locale.

![Admin General Locale Options](/images/admin_locale_options.webp)

8. Run the static content deployment and cache flush commands again.

The module will now be translated into your selected language.

::: tip Translation Note
Always ensure that the structure of the CSV (the English key on the left) remains unmodified. Only change the translated string on the right side of the comma.
:::
