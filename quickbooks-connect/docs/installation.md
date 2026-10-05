# Installation

Installing the **Magento 2 QuickBooks Connect** module is simple. Follow the steps below to upload files, install required dependencies, compile code, and flush caches.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module zip package directly from the **[Webkul Store](https://store.webkul.com/)**.

### 1. Extract Package
Extract the downloaded zip file on your local computer. Inside the `src` folder, locate the `app` directory.

### 2. Upload Code Directory
Connect to your server via SSH or SFTP. Upload the `app` directory into your Magento 2 root directory so the files reside under:
`app/code/Webkul/QuickbooksConnect/`

![Upload App Folder](/images/app-folder-upload.webp)

### 3. Install QuickBooks V3 PHP SDK
Run composer to install the required Intuit QuickBooks PHP SDK dependency:

```bash:no-line-numbers
composer require quickbooks/v3-php-sdk:6.2
```
<ExplainCode explanation="Downloads and installs the official QuickBooks Online API V3 PHP SDK library required for OAuth2 authentication and data sync." />

### 4. Execute Deployment Commands
Run the following Magento CLI commands sequentially in your root directory:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_QuickbooksConnect in Magento and applies database schema updates for mapping tables." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles dependency injection definitions, QuickBooks SDK wrappers, proxies, and repositories." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys static assets and view templates for Magento Admin backend interfaces." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes catalog and sales data to ensure accurate order data synchronization." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes all application caches to activate newly registered configuration sections and admin menu items." />

You can also flush cache via Admin backend under **System -> Tools -> Cache Management** by clicking **Flush Magento Cache**.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install with Composer

If installing via private Composer repository:

```bash:no-line-numbers
composer require webkul/quickbooks-connect
```
<ExplainCode explanation="Fetches the Webkul QuickBooks Connect extension package and automatically resolves the quickbooks/v3-php-sdk dependency." />

After requiring the package, execute the deployment commands outlined in **Option A > Step 4**.

---

## Language Translation

The module supports multi-lingual environments, including LTR and RTL language layouts. To translate module labels into another language (e.g., German or French):

1. Navigate to the module's translation folder: `app/code/Webkul/QuickbooksConnect/i18n`.
2. Open `en_US.csv`.
3. Save a copy of the file renamed with your target locale code, for example `de_DE.csv` (German) or `fr_FR.csv` (French).
4. Translate all text strings on the right side of the comma into your target language.

![CSV Translation](/images/csv-translation-file.webp)

5. Upload the CSV file back to `app/code/Webkul/QuickbooksConnect/i18n/`.
6. Go to **Stores -> Configuration -> General -> Locale Options** in Magento Admin and select your desired locale.

![Locale Options](/images/magento-locale-options.webp)

7. Run `php bin/magento setup:static-content:deploy <locale_code>` and flush the cache.

::: tip Translation Note
Always preserve the English key string on the left side of the comma. Only modify the translated string on the right side.
:::
