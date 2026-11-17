# Installation

Installing the **Webkul Web To Print** extension on your Magento 2 (Adobe Commerce) store follows the standard Magento extension deployment workflow.

---

## Method 1: Manual Archive Installation (Standard)

### Step 1: Extract and Upload Extension Files

1. Download the extension ZIP package from your [Webkul Store Account](https://store.webkul.com/customer/account/).
2. Extract the archive on your local computer. Navigate to the extracted folder: `src/app/code/Webkul/WebToPrint`.
3. Connect to your web server using SFTP or SSH as the Magento file-system owner (e.g., `www-data` or your deployment user).
4. Create the target directory structure inside your Magento root if it does not already exist:
   ```bash
   mkdir -p app/code/Webkul/WebToPrint
   ```
5. Upload all files and folders from the extracted `WebToPrint` directory into `<MAGENTO_ROOT>/app/code/Webkul/WebToPrint/`.

![Upload Folders Structure](/images/upload-folders.jpg)

Verify the final structure matches:
```text
<MAGENTO_ROOT>/app/code/Webkul/WebToPrint/
├── Api/
├── Block/
├── Console/
├── Controller/
├── Helper/
├── Model/
├── Observer/
├── Plugin/
├── Ui/
├── etc/
│   ├── module.xml
│   ├── db_schema.xml
│   └── product_types.xml
├── i18n/
│   ├── en_US.csv
│   └── ar_SA.csv
├── view/
│   ├── adminhtml/
│   └── frontend/
└── registration.php
```

---

### Step 2: Run Magento Deployment Commands

Navigate to your Magento root directory in your terminal and execute the following commands in sequence:

```bash
# Enable the module
php bin/magento module:enable Webkul_WebToPrint

# Update database schema and register declarative tables
php bin/magento setup:upgrade

# Compile dependency injection, factories, and interceptors
php bin/magento setup:di:compile

# Deploy static view assets for your store locales
php bin/magento setup:static-content:deploy -f

# Flush Magento cache storage
php bin/magento cache:flush
```

::: tip Maintenance Mode
For production stores, enable maintenance mode before executing database migrations:
```bash
php bin/magento maintenance:enable
# ... execute upgrade and compile commands ...
php bin/magento maintenance:disable
```
:::

---

## Method 2: Verification

To confirm that the extension is active and properly registered by the framework:

```bash
php bin/magento module:status Webkul_WebToPrint
```

Expected output:
```text
Module is enabled
```

Log in to the **Magento Admin Panel**. In the left navigation menu, you will observe the new **Web To Print** menu section.

![Web To Print Admin Menu](/images/web-to-print-menu-1.webp)

---

## Language Translation (i18n)

The extension supports multi-language stores out-of-the-box. All storefront canvas prompts, button labels, declarations, and admin texts are localized through CSV translation dictionaries.

1. Navigate to `<MAGENTO_ROOT>/app/code/Webkul/WebToPrint/i18n/`.
2. Open `en_US.csv`.
3. Copy the file and rename it using your target ISO language and country code (for example, `fr_FR.csv`, `es_ES.csv`, `de_DE.csv`).
4. Edit the file, leaving the left column in English and translating the right column:
   ```csv
   "Customize Product","Personnaliser le produit"
   "Declaration Before Add To Cart","Déclaration avant l'ajout au panier"
   "Canvas Width In Pixel","Largeur du canevas en pixels"
   ```
5. Deploy static content and clear cache to apply the translations:
   ```bash
   php bin/magento setup:static-content:deploy fr_FR -f
   php bin/magento cache:flush
   ```

![Language Translation File](/images/web-to-print-translationfile.webp)

---

## Hyvä Theme Compatibility Installation (Optional)

If your storefront is built using **Hyvä Themes**, install the Webkul Web To Print Hyvä Compatibility module to enable optimized Alpine.js and Tailwind CSS templates:

1. Extract the `WebToPrintHyva` package obtained from your [Webkul Store Account](https://store.webkul.com/customer/account/).
2. Upload the extracted folder to `<MAGENTO_ROOT>/app/code/Webkul/WebToPrintHyva/`.
3. Enable the Hyvä compatibility module and execute Magento upgrade commands:
   ```bash
   php bin/magento module:enable Webkul_WebToPrintHyva
   php bin/magento setup:upgrade
   php bin/magento setup:di:compile
   php bin/magento setup:static-content:deploy -f
   php bin/magento cache:flush
   ```
4. Verify the Hyvä module status:
   ```bash
   php bin/magento module:status Webkul_WebToPrintHyva
   ```

