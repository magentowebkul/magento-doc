# Installation Guide

Follow these steps to install the **Magento 2 Multi Vendor Custom Option** extension on your server.

---

## Step 1: Upload Extension Files

1. Extract the contents of the downloaded module `.zip` archive on your local computer.
2. Transfer the extracted files into your Magento 2 root directory under:
   `app/code/Webkul/Customoption/`

![Extension Directory Structure](/images/image.png)

::: tip Directory Creation
If the path `app/code/Webkul/Customoption` does not exist yet, manually create these directories inside your Magento 2 root folder before moving files.
:::

![Creating Directory Path](/images/image-1.png)

Verify that the module files sit inside the Magento 2 Root Directory at `app/code/Webkul/Customoption`:

![Verified File Structure](/images/image-2.png)

---

## Step 2: Terminal Setup Commands

Connect to your server via SSH, navigate to your Magento 2 root installation folder, and execute the following deployment commands in sequence:

```bash
# Upgrade database schema and data
php bin/magento setup:upgrade

# Compile dependency injection code
php bin/magento setup:di:compile

# Deploy static view files
php bin/magento setup:static-content:deploy -f

# Reindex data indexes
php bin/magento indexer:reindex

# Flush cache storage
php bin/magento cache:flush
```

---

## Step 3: Flush Cache Storage via Admin Panel

After executing the terminal commands:

1. Log in to the Magento 2 Admin Panel.
2. Navigate to **System → Cache Management**.
3. Click **Flush Cache Storage** / **Flush Magento Cache**.

![Cache Management](/images/image-3.png)
