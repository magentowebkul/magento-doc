# Installation Guide

Follow the instructions below to install and activate the **Magento 2 Order Split & Merge** extension on your Magento 2 store.

---

## Step 1: Extract and Upload Extension Files

1. Download the extension ZIP archive from your [Webkul Store Account](https://store.webkul.com/).
2. Extract the contents of the ZIP archive onto your local workstation. Select the folder corresponding to your Magento version.
3. Locate the `app` folder located inside the extracted `src` folder.
4. Upload the `app` directory contents to the root directory of your Magento 2 installation on your remote web server using SFTP, SCP, or SSH.

![Installation of Magento 2 Order Split & Merge](/images/Installation-of-Magento-2-Order-Split-Merge.png)

Verify that the module code resides in the following path:

```text
<Magento_Root>/
└── app/
    └── code/
        └── Webkul/
            └── SplitAndMergeOrder/
```

---

## Step 2: Run Deployment CLI Commands

Connect to your Magento server via SSH terminal, navigate to the Magento root directory, and execute the following commands in sequence:

### 1. Upgrade Database Schema & Module Registration
Registers the `Webkul_SplitAndMergeOrder` module and executes declarative schema updates:

```bash
php bin/magento setup:upgrade
```

### 2. Compile Dependency Injection
Generates interceptors, proxies, factories, and DI configuration:

```bash
php bin/magento setup:di:compile
```

### 3. Deploy Static Content
Generates storefront and admin static assets (CSS, JS, PHTML, email templates):

```bash
php bin/magento setup:static-content:deploy -f
```

---

## Step 3: Flush Cache & Reindex

After successfully running the deployment commands, refresh the Magento application cache and indexes.

You can flush the cache from the command line:

```bash
php bin/magento cache:flush
php bin/magento indexer:reindex
```

Alternatively, navigate to **System > Cache Management** from the Magento Admin panel:
1. Click **Select All** on the cache types list.
2. Ensure the Action dropdown is set to **Refresh**.
3. Click **Submit** or select **Flush Magento Cache**.

![Cache Management](/images/webkul_magento2_marketplace_vendor_broadcast_cache_management_4-1.png)

---

## Step 4: Verify Module Status

To confirm that the extension is properly registered and enabled, run:

```bash
php bin/magento module:status Webkul_SplitAndMergeOrder
```

The terminal should output:
```text
Module is enabled
```
