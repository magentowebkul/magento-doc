# Installation

Follow this step-by-step procedure to install the **Magento 2 Table Rate Shipping** module on your store.

## Step 1: Download and Extract Module

1. Log in to your [Webkul Store Account](https://store.webkul.com/customer/account/login/).
2. Navigate to **My Account → My Purchased Products**.
3. Locate **Magento 2 Multi Shipping Method with Price Range and Zip Range** and download the ZIP archive.
4. Extract the contents on your local system.

## Step 2: Upload Files to Server

1. Open your terminal or SFTP client.
2. Navigate to your Magento root directory.
3. Verify or create the destination directory `app/code/Webkul/MageTableRate`.
4. Copy all extracted module files into `app/code/Webkul/MageTableRate`.

```bash
mkdir -p app/code/Webkul/MageTableRate
cp -r /path/to/extracted/MageTableRate/* app/code/Webkul/MageTableRate/
```

![Upload module folder](/images/installation-folder.webp)

## Step 3: Run Magento CLI Commands

From your Magento project root directory, run the following commands in sequence:

```bash
# 1. Enable module schema and data updates
php bin/magento setup:upgrade

# 2. Compile dependency injection and code generators
php bin/magento setup:di:compile

# 3. Deploy static view files for admin and storefront
php bin/magento setup:static-content:deploy

# 4. Rebuild Magento search and carrier indexes
php bin/magento indexer:reindex

# 5. Flush Magento system cache
php bin/magento cache:flush
```

::: tip Production Mode
If your store is running in **production** mode, ensure you deploy static content with `-f` or pre-compile assets to avoid storefront downtime.
:::

## Language Translation (Optional)

The module comes with standard English strings (`i18n/en_US.csv`) and supports both Left-to-Right (LTR) and Right-to-Left (RTL) languages.

1. Navigate to `app/code/Webkul/MageTableRate/i18n/`.
2. Copy `en_US.csv` and rename it with your locale code (for example, `ar_SA.csv` for Arabic).
3. Translate all values on the right-hand side of each comma-delimited line.
4. Save the file and upload it to `app/code/Webkul/MageTableRate/i18n/`.

![i18n directory location](/images/i18n-folder.webp)

![i18n CSV translation format](/images/i18n-csv.webp)

5. Flush the cache to apply translations:
   ```bash
   php bin/magento cache:flush
   ```

::: tip Next Step
Proceed to [Activate & Connect](/activation) to confirm module enablement and admin access.
:::
