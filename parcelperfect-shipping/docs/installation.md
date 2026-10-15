# Installation Guide

Follow these steps to install the **Magento 2 Parcel Perfect Shipping** extension on your Magento 2 instance.

---

## Step 1: Extract Extension Archive

After purchasing the extension from the [Webkul Store](https://store.webkul.com/), download the zip folder to your local computer and extract its contents:

```text
parcel-perfect-shipping.zip
└── src/
    └── app/
        └── code/
            └── Webkul/
                └── ParcelPerfectShipping/
```

---

## Step 2: Upload Files to Magento 2 Root

Transfer the extracted `app` directory into your Magento 2 root installation directory on the server:

![Transfer app folder to Magento 2 Root](/images/Move-app-folder-2.png)

Ensure the directory structure matches the following path:

```text
<Magento_Root>/
└── app/
    └── code/
        └── Webkul/
            └── ParcelPerfectShipping/
```

---

## Step 3: Run Magento CLI Commands

Connect to your server via SSH, navigate to your Magento 2 root directory, and execute the following deployment commands:

### 1. Upgrade Database Schema & Data

```bash
php bin/magento setup:upgrade
```

![Setup Upgrade Command](/images/command1-upgrade-3.png)

### 2. Compile Dependency Injection

```bash
php bin/magento setup:di:compile
```

![Setup DI Compile Command](/images/command2-compile-2.png)

### 3. Deploy Static Content

```bash
php bin/magento setup:static-content:deploy
```

![Static Content Deploy Command](/images/command3-deploy-1.png)

---

## Step 4: Flush Cache

After executing the commands, flush the Magento cache from the admin panel:
1. Navigate to **System > Cache Management**.
2. Click **Flush Magento Cache**.

![Flush Magento Cache](/images/5-6.png)

Alternatively, flush the cache directly via CLI:

```bash
php bin/magento cache:flush
```

---

## Step 5: Verification

To verify that the extension is active:
1. Run:
```bash
php bin/magento module:status Webkul_ParcelPerfectShipping
```
You should see: `Webkul_ParcelPerfectShipping : Module is enabled`.

2. Log in to the Magento Admin Panel.
3. Navigate to **Stores > Configuration > Sales > Shipping Methods > Parcel Perfect Shipping**. The configuration section will now be available.

::: info Next Step
Follow the [Parcel Perfect Credentials](/configuration/credentials.html) and [Admin Configuration](/configuration/admin-config.html) guides to configure your shipping gateway.
:::
