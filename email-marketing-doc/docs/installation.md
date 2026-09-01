# Installation

Follow these steps to install the **Magento 2 Email Marketing** extension.

---

## Installation Methods

**Method 1: Install Through ZIP File**

Extract the downloaded module archive and place the files into your Magento 2 root directory under:

```
magento2_root/
└── app/
    └── code/
        └── Webkul/
            └── EmailMarketing/
```

![Directory Structure](/images/installation/03.webp)

---

**Method 2: Install Through Composer**

Navigate to your Magento 2 root directory in your SSH terminal and run the composer command in the following format:

```bash:no-line-numbers
composer require <component-name>:<version>
```
<ExplainCode explanation="General command structure to require a package and its specific version via Composer." />

For example, to install version `5.0.4` of this extension, run:

```bash:no-line-numbers
composer require webkul/module-emailmarketing:5.0.4
```
<ExplainCode explanation="Adds the extension dependency to your project's composer.json file." />

---

## Execute Magento CLI Commands

After placing the module files (via ZIP or Composer), navigate to your Magento 2 root directory in your SSH terminal and run the following deployment commands to complete installation:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers the Webkul_EmailMarketing module and updates database configurations." />

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

The module supports multiple languages, including both RTL (Right-to-Left) and LTR (Left-to-Right) layouts. To translate the module into another language, such as German:

1. Navigate to the module's `i18n` directory: `app/code/Webkul/EmailMarketing/i18n` (or the equivalent path in your installation).
2. Edit the `en_US.csv` file. Replace the words on the right side of the comma (,) with your translated phrases.

   ![Translate CSV Terms](/images/installation/04.png)

3. Rename the CSV file to match your target locale, for example, `de_DE.csv` for German.
4. Save the file.
5. Upload the translated CSV file to the `app/code/Webkul/EmailMarketing/i18n` path on your server.

![Rename CSV](/images/installation/01.png)

6. Navigate to your Adobe Commerce Cloud admin panel, go to **Store** &rarr; **Configuration** &rarr; **General** &rarr; **Locale Options** and select your desired locale.

![Locale Option](/images/installation/02.webp)

7. Run the static content deployment and cache flush commands again:
   ```bash:no-line-numbers
   php bin/magento setup:static-content:deploy -f
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Deploys static storefront assets for configured locales and flushes system caches so language translations take effect." />
The module will now be translated into your selected language.

::: warning Translation Note
Always ensure that the structure of the CSV (the English key on the left) remains unmodified. Only change the translated string on the right side.
:::

