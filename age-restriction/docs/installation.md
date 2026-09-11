# Installation

You can install the **Magento 2 Age Restriction** module either via Composer or by manually extracting the extension archive into your Magento `app/code` directory.

---

## Method 1: Manual ZIP Installation

### Step 1: Upload Files

1. Extract the downloaded extension ZIP archive.
2. In your Magento root directory, create the folder path `app/code/Webkul/AgeRestriction/` if it does not already exist:
   ```bash
   mkdir -p app/code/Webkul/AgeRestriction
   ```
3. Copy all extracted extension files into `app/code/Webkul/AgeRestriction/`.

Confirm the directory structure appears as follows:
```
<Magento_Root>/
└── app/
    └── code/
        └── Webkul/
            └── AgeRestriction/
                ├── Block/
                ├── Controller/
                ├── CustomerData/
                ├── Helper/
                ├── Model/
                ├── Setup/
                ├── etc/
                ├── view/
                ├── composer.json
                └── registration.php
```

---

## Method 2: Composer Installation

If you received access via Webkul's Composer repository:

```bash
composer require webkul/age-restriction
```

---

## Run Magento Setup Commands

From your Magento 2 root directory, execute the standard deployment commands via terminal:

### 1. Upgrade the Database Schema & Data

```bash
php bin/magento setup:upgrade
```
::: tip Note
This command registers `Webkul_AgeRestriction` in `app/etc/config.php` and executes the data patch `Setup/Patch/Data/ProductAttribute.php` to create the `product_age_verification` and `category_age_varification` EAV attributes.
:::

### 2. Compile Dependency Injection

```bash
php bin/magento setup:di:compile
```

### 3. Deploy Static Content

```bash
php bin/magento setup:static-content:deploy -f
```

### 4. Flush and Clean the Cache

```bash
php bin/magento cache:clean
php bin/magento cache:flush
```

### 5. Reindex Data

```bash
php bin/magento indexer:reindex
```

---

## Verify Installation

To verify that the module is installed and active in Magento:

```bash
php bin/magento module:status Webkul_AgeRestriction
```

Expected output:
```text
Module is enabled
```
