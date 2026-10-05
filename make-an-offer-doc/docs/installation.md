# Installation

This guide walks you through installing the **Webkul Magento 2 Make An Offer** extension using manual zip extraction or Composer, followed by static content deployment, cache management, and multi-language translation configuration.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module archive directly from the Webkul Store.

### 1. Download the Module Archive

Log in to your [Webkul Store](https://store.webkul.com/) account, navigate to **My Account > My Purchased Products**, and download the extension archive for `Webkul_MakeAnOffer`.

### 2. Extract & Upload Files

Extract the downloaded zip archive on your local computer. Inside the extracted directory, locate the `src/app` folder. Using SSH, SFTP, or your hosting control panel, copy the contents into your Magento 2 root directory so that the module files reside under:
`app/code/Webkul/MakeAnOffer/`

![Move App Folder to Magento Root](/images/m2_installation-3.png)

<span id="run-commands" style="scroll-margin-top: calc(var(--navbar-height, 3.6rem) + 1.5rem); display: inline-block;">### 3. Run Installation Commands</span>

Open your terminal, navigate to your Magento 2 root directory, and execute the following commands sequentially:

```bash
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_MakeAnOffer in config.php, updates database schema declarations, and creates the offer, promotion, and chat tables." />

```bash
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles code factory files, dependency injection proxies, plugins, and interceptor classes." />

```bash
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="Deploys storefront CSS styles, templates, and JavaScript components across installed themes and active locales." />

```bash
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes all core catalog and rule indices to guarantee immediate availability of negotiated price logic." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes all Magento system configuration, full-page, and layout caches." />

You can also flush caches directly from the Magento Admin Panel by navigating to **System > Tools > Cache Management** and clicking **Flush Magento Cache**.

![Flush Magento Cache](/images/Webkul-Magento-2-Flush-Cache.png)

---

## Option B — Install with Composer

Use this method if your organization manages dependencies through Composer repositories.

1. Add your Webkul Composer repository credentials to your server environment (`auth.json`).
2. Run the Composer command to install the module:

```bash
composer require webkul/module-make-an-offer
```
<ExplainCode explanation="Downloads and installs the Webkul Make An Offer package into your Magento vendor directory." />

If your store utilizes the **Hyvä Theme**, also install the official Hyvä compatibility companion module:

```bash
composer require webkul/module-make-an-offer-hyva
```
<ExplainCode explanation="Installs the Hyva compatibility companion package providing Alpine.js templates and Tailwind CSS styling for Make An Offer." />

3. Execute the deployment commands listed in [**Option A > 3. Run Installation Commands**](#run-commands).

---

## Language & Locale Translation

The extension supports complete internationalization and multilingual storefront operations for both LTR and RTL languages.

### Step 1: Change Storefront Locale

In your Magento Admin Panel, navigate to **Stores > Configuration > General > General > Locale Options**. Select your desired language from the **Locale** dropdown (for example, *German (Germany)*) and click **Save Config**.

![Locale Options](/images/locale.webp)

### Step 2: Edit Translation CSV Dictionary

1. Navigate to the module's translation folder on your server: `app/code/Webkul/MakeAnOffer/i18n/`.
2. Open the base translation dictionary `en_US.csv` in a text editor or spreadsheet application.
3. Replace the translated phrase on the right side of the comma while keeping the original English string intact on the left side:

![Language Translation CSV](/images/Webkul-Magento-2-Make-an-Offer-Language-Translation.png)

4. Save the file using your target locale code (e.g., `de_DE.csv`, `fr_FR.csv`, `es_ES.csv`, or `ar_SA.csv`) and upload it to `app/code/Webkul/MakeAnOffer/i18n/`.
5. Deploy static content for the new locale and clear the Magento cache:

```bash
php bin/magento setup:static-content:deploy <locale_code>
php bin/magento cache:flush
```
<ExplainCode explanation="Deploys localized frontend assets and refreshes configuration caches for the newly configured language." />
