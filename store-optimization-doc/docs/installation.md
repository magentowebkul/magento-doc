# Installation

Follow these steps to install the **Magento 2 Store Optimization** module.

---

## Installation Methods

**Method 1: Install Through ZIP File**

Extract the downloaded module archive and place the files into your Magento 2 root directory under:

```
magento2_root/
└── app/
    └── code/
        └── Webkul/
            └── StoreOptimization/
```

![Upload module folder](/images/move-app-folder.webp)

---

**Method 2: Install Through Composer**

Navigate to your Magento 2 root directory in your SSH terminal and run the composer command in the following format:

```bash:no-line-numbers
composer require <component-name>:<version>
```
<ExplainCode explanation="General command structure to require a package dependency via Composer." />

For example, to install version `4.0.1` of this extension, run:

```bash:no-line-numbers
composer require webkul/module-store-optimization:4.0.1
```
<ExplainCode explanation="Adds the extension dependency to your project's composer.json file." />

---

## Execute Magento CLI Commands

After placing the module files (via ZIP or Composer), navigate to your Magento 2 root directory in your SSH terminal and run the following deployment commands to complete installation:

```bash:no-line-numbers
composer require rosell-dk/webp-convert
```
<ExplainCode explanation="Installs the webp-convert library required for WebP image conversion." />

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_StoreOptimization module and updates database configurations." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles code factories, proxies, and dependency injection classes." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys static storefront assets for configured locales." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes system caches so configuration changes take effect immediately." />

---

## Language Translation

For **Magento 2 Page Speed Optimization** module translation, navigate to the following path in your Magento 2 installation directory:

```
app/code/Webkul/StoreOptimization/i18n/en_US.csv
```

Open the `en_US.csv` file for editing:

![Edit en_US.csv](/images/installation/01.png)

Replace the words on the right side of the comma (`,`) with your translated phrases.

![Translate CSV Terms](/images/installation/02.png)

::: tip Region Language & Country Code
Save the translated file named according to your target region's language and country code (for example: `de_DE.csv` for German, `fr_FR.csv` for French, `es_ES.csv` for Spanish).
:::

Upload the newly created CSV file into the same `i18n/` directory:

```
app/code/Webkul/StoreOptimization/i18n/de_DE.csv
```

![Uploaded Language CSV](/images/installation/03.png)

After uploading the file, run `php bin/magento cache:flush` to complete the module language translation.