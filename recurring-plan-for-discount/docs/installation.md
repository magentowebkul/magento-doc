# Installation

Installing the **Magento 2 Recurring Plan For Discount** module is a simple and straightforward process. Follow the steps below to successfully install and prepare the extension for use.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module package directly from the Webkul Store.

### 1. Download Module
Log in to your **[Webkul Store](https://store.webkul.com/)** account, navigate to **My Account > My Purchased Products**, and then download and extract the contents of the module zip folder on your local machine.

### 2. Upload Folder
Once the module zip is extracted, navigate to `src/app`. Connect to your server via SSH/SFTP (such as FileZilla). Copy the `app` folder and upload it into your Magento 2 root directory on the server. The files should reside under `app/code/Webkul/RecurringPlanForDiscount/`.

![Upload App Folder](/images/filezila-1200x392.webp)

### 3. Run Commands
Run the following commands in sequence in the Magento 2 root directory via terminal:

```bash:no-line-numbers
composer require stripe/stripe-php
```
<ExplainCode explanation="This installs the official Stripe PHP SDK required for handling recurring card charges, webhooks, and subscriptions." />

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="This enables the Recurring Plan For Discount module and executes database schema/data patches to create necessary tables." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="This compiles all dependency injection definitions and generates necessary interceptors and proxy classes." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="This deploys static view files (CSS, JS, templates) required for both the storefront and admin panels." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes all data to ensure catalog and subscription-related data are immediately reflected." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento caches to ensure newly registered configurations and layout files are loaded." />

You can also flush the cache directly from the admin panel by navigating to **System > Tools > Cache Management** and clicking the **Flush Magento Cache** button.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install with Composer

Use this method if you have purchased access via Composer repository:

1. Add your provided access keys during purchase.
2. Run the Composer require command to install the package:

```bash:no-line-numbers
composer require webkul/recurring-plans-for-discount
```
<ExplainCode explanation="This command pulls the Webkul Recurring Plan For Discount package from your configured Composer repository." />

3. Complete the installation by running the Magento deployment commands listed in **[Option A > 3. Run Commands](#_3-run-commands)**.

---

## Language Translation

The module supports multiple languages, including both RTL (Right-to-Left) and LTR (Left-to-Right) layouts. To translate the module into another language (e.g., German, Spanish, French):

1. Navigate to the module's i18n directory: `app/code/Webkul/RecurringPlanForDiscount/i18n`.
2. Open the `en_US.csv` file.
3. Save a copy of the CSV file matching your target locale, for example, `de_DE.csv` for German or `es_ES.csv` for Spanish.
4. Translate all text strings on the right side of the comma into your target language while preserving the original English strings on the left.
5. Save and upload the translated file to `app/code/Webkul/RecurringPlanForDiscount/i18n` on your server.

![Upload Translated CSV](/images/rvp-rename-the-csv.png)

6. In your Magento Admin panel, navigate to **Stores > Configuration > General > General > Locale Options** and select your desired locale.

![Locale Options](/images/rvp-locale-option.webp)

7. Run the static content deployment and cache flush commands again.

The module will now be translated into your selected language.

::: tip Translation Note
Never modify the structure of the CSV file or the English identifiers on the left side of the comma. Only translate the text on the right side.
:::
