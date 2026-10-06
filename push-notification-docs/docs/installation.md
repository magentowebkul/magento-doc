# Installation Guide

Follow these steps to install the **Magento 2 Multi Vendor Web Push Notification** extension on your server.

---

## Step 1: Extract and Upload Extension Files

1. Download the module ZIP package from your Webkul Store account.
2. Extract the ZIP file on your local machine.
3. Locate the `src/app/` folder inside the extracted directory.
4. Upload/transfer the `app` directory into your Magento 2 root installation folder on your server.

![Upload App Folder](/images/image.png)

```text
<Magento_Root>/
└── app/
    └── code/
        └── Webkul/
            └── MpPushNotification/
```

---

## Step 2: Run Deployment CLI Commands

Connect to your server via SSH, navigate to your Magento 2 root folder, and execute the following deployment commands:

### 1. Upgrade Database Schema
Updates module status and creates push notification database tables:

```bash
php bin/magento setup:upgrade
```

### 2. Compile Dependency Injection
Compiles generated code and dependency injection classes:

```bash
php bin/magento setup:di:compile
```

### 3. Deploy Static View Content
Deploys storefront and admin static assets:

```bash
php bin/magento setup:static-content:deploy -f
```

---

## Step 3: Flush Magento Cache

1. Log in to the Magento 2 Admin Panel.
2. Navigate to **System > Tools > Cache Management**.
3. Select all cache items and click **Flush Magento Cache**.

![Flush Magento Cache](/images/image-1.png)

::: info Verification
To confirm successful installation:
1. Log in to your Magento Admin Panel.
2. Check the side menu under **Marketplace Management**.
3. Verify that **Push Notification Manager** is visible.
:::
