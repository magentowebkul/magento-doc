# Installation Guide

Follow these steps to install the **Magento 2 Marketplace Catalog Translation** extension on your server.

---

## Step 1: Extract and Upload Extension Files

1. Download the extension ZIP file from your Webkul Store account.
2. Extract the ZIP package on your local computer.
3. Inside the extracted folder, locate the `src/app/` directory.
4. Using an SSH/SFTP client (such as FileZilla or Cyberduck), upload the contents of `app` into your Magento 2 root installation folder on the server.

![File Transfer Structure](/images/image.png)

```
<Magento_Root>/
└── app/
    └── code/
        └── Webkul/
            └── MpCatalogTranslation/
```

---

## Step 2: Run Deployment CLI Commands

Open your terminal, establish an SSH connection to your web server, navigate to your Magento 2 root folder, and execute the standard installation commands:

### 1. Upgrade Setup & Schema
Updates module status and creates required database tables:

```bash
php bin/magento setup:upgrade
```

### 2. Compile Dependency Injection
Compiles interdependency classes and proxy definitions:

```bash
php bin/magento setup:di:compile
```

### 3. Deploy Static Content
Deploys storefront and admin static assets:

```bash
php bin/magento setup:static-content:deploy -f
```

### 4. Reindex Indexers
Rebuilds catalog and search indexers:

```bash
php bin/magento indexer:reindex
```

---

## Step 3: Flush Magento Cache

To ensure the new configuration options and menu entries appear in your admin panel, clear the Magento cache:

1. Log in to your Magento Admin Panel.
2. Navigate to **System > Cache Management**.
3. Click **Flush Magento Cache** at the top right corner.

![Flush Magento Cache](/images/image-1.png)

::: tip Verification
Once installed, verify that **Marketplace Catalog Translation** appears under **Stores > Configuration**.
:::
