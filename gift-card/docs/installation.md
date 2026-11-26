# Installation Guide

Follow the step-by-step instructions below to install and activate the **Magento 2 Gift Card** extension on your Magento 2 store.

---

## Installation via Webkul Store Archive

### Step 1: Extract and Upload Extension Files

1. Log in to your [Webkul Store Account](https://store.webkul.com/) and download the extension ZIP archive from your account dashboard.
2. Unzip the downloaded file on your computer. Inside, locate the folder matching your Magento version.
3. Locate the `app` directory inside the extracted package.
4. Upload the `app` directory contents to the root directory of your Magento 2 installation via SFTP, SCP, or SSH.

![Upload Module Files](/images/2017-02-28_12-22-45.png)

Verify that the extension files reside in the following path:

```text
<Magento_Root>/
└── app/
    └── code/
        └── Webkul/
            └── GiftCard/
```

---

## Installation via Composer & Magento Marketplace

If you acquired the extension through the Adobe Commerce / Magento Marketplace, install it using Composer:

### Step 1: Obtain Access Keys
1. Log in to your Marketplace account and navigate to **My Profile > Marketplace > Access Keys**.
2. Click **Create A New Access Key**, provide a label, and copy your **Public Key** (username) and **Private Key** (password).

![Marketplace Profile](/images/my-profile.png)
![Access Keys](/images/copy-keys.png)
![Create Key Name](/images/create-key-name.png)

### Step 2: Require Package via Composer
In your Magento root directory, run the Composer require command using the component name:

```bash
composer require webkul/gift-card
```

![Component Name and Version](/images/know-component-name-version.png)

When prompted by Composer for authentication credentials, provide your **Public Key** as the username and **Private Key** as the password.

---

## Step 2: Run Deployment CLI Commands

Connect to your server via SSH terminal, navigate to the Magento installation root, and run the following deployment commands:

### 1. Upgrade Database Schema & Module Registration
Registers the `Webkul_GiftCard` module and applies declarative database tables:

```bash
php bin/magento setup:upgrade
```

### 2. Compile Dependency Injection
Generates interceptors, proxies, and DI configuration:

```bash
php bin/magento setup:di:compile
```

### 3. Deploy Static Content
Deploys frontend and admin assets:

```bash
php bin/magento setup:static-content:deploy -f
```

---

## Step 3: Flush Cache & Reindex

After executing the deployment commands, refresh the Magento cache and catalog indexes:

```bash
php bin/magento cache:flush
php bin/magento indexer:reindex
```

Alternatively, navigate to **System > Cache Management** from the Magento Admin panel:
1. Click **Select All**.
2. Select **Refresh** in the Action dropdown.
3. Click **Submit**.

![Flush Magento Cache](/images/webkul_magento2_marketplace_vendor_broadcast_cache_management_4-1.png)

---

## Step 4: Verify Module Status

Confirm that the extension is active and recognized by Magento:

```bash
php bin/magento module:status Webkul_GiftCard
```

The terminal output should display:
```text
Module is enabled
```
