# Installation Guide

Follow these steps to install and set up the **Magento 2 Purchase Management** extension on your server.

---

## Step 1: Extract and Upload Extension Files

1. Download the extension ZIP archive from your [Webkul Store Account](https://store.webkul.com/).
2. Extract the archive onto your computer. You will obtain a directory containing a `src` folder.
3. Inside the `src` folder, find the `app` folder.
4. Upload the contents of the `app` folder into your Magento 2 root directory on your remote server via SFTP/SSH.

![Upload Module Files](/images/install-app-folder.png)

Verify that the files reside in the following path:

```text
<Magento_Root>/
└── app/
    └── code/
        └── Webkul/
            └── PurchaseManagement/
```

---

## Step 2: Run Deployment CLI Commands

Connect to your server via SSH terminal, switch to your Magento filesystem owner user (e.g. `www-data` or your local developer user), navigate to the Magento 2 installation root, and run:

### 1. Upgrade Database Schema & Data
Registers the `Webkul_PurchaseManagement` module and executes declarative schema creation:

```bash
php bin/magento setup:upgrade
```

### 2. Compile Dependency Injection
Generates interceptors, repositories, factories, and dependency injection wiring:

```bash
php bin/magento setup:di:compile
```

### 3. Deploy Static View Assets
Deploys frontend and backend static files (JS, CSS, templates, images):

```bash
php bin/magento setup:static-content:deploy -f
```

---

## Step 3: Flush Magento Cache

1. Log in to your **Magento 2 Admin Panel**.
2. Navigate to **System > Cache Management**.
3. Select all cache types or click the orange **Flush Magento Cache** button in the top-right corner.

![Flush Magento Cache](/images/cache-flush.webp)

Alternatively, clear the cache directly via CLI:

```bash
php bin/magento cache:flush
```

---

## Step 4: Verification in Admin Panel

To verify successful installation:

1. Log in to the Magento Admin Panel.
2. In the left navigation menu, locate the **Purchase Management** menu item.
3. Confirm the presence of child sections:
   - **Quotations**
   - **Purchase Order**
   - **Incoming Shipments**
   - **Incoming Products**
   - **Manage Suppliers**
   - **Manage Attributes**

::: tip Permissions Check
If you are logged in with a restricted administrative role, ensure your role has been granted access under **System > Permissions > User Roles > Webkul Purchase Management**.
:::
