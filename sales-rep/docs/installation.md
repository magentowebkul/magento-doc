# Installation

Follow these steps to install the module in your Magento 2 root directory:

## Step 1: Upload Files

Extract the extension zip file and upload the `app` folder into your Magento 2 root directory:

```bash
app/code/Webkul/Salesrep
```

## Step 2: Run Magento CLI Commands

Execute the standard Magento installation commands:

```bash
php bin/magento module:enable Webkul_Salesrep
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
```

## Step 3: Flush Cache

Flush the Magento cache storage:

```bash
php bin/magento cache:flush
```
