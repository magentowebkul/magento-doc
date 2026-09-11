# Installation

You can install the **Magento 2 Marketplace Size Chart Template** extension either via Composer or by manually extracting the extension archive into your Magento `app/code` directory.

::: warning Prerequisite
Ensure the **Webkul Marketplace Multi Vendor Module** (`webkul/module-marketplace`) is installed and enabled in your Magento instance before installing this module.
:::

---

## Method 1: Manual ZIP Installation

### Step 1: Upload Files

1. Extract the downloaded extension ZIP archive.
2. In your Magento root directory, create the folder path `app/code/Webkul/MpSizeChartTemplate/` if it does not already exist:
   ```bash
   mkdir -p app/code/Webkul/MpSizeChartTemplate
   ```
3. Copy all extracted extension files into `app/code/Webkul/MpSizeChartTemplate/`.

Confirm the directory structure appears as follows:
```
<Magento_Root>/
└── app/
    └── code/
        └── Webkul/
            └── MpSizeChartTemplate/
                ├── Api/
                │   ├── Data/
                │   └── ...
                ├── Block/
                │   ├── Account/
                │   ├── Adminhtml/
                │   ├── Measurement/
                │   ├── SizeUnits/
                │   └── Template/
                ├── Controller/
                │   ├── Adminhtml/
                │   ├── Measurements/
                │   ├── SizeUnits/
                │   └── Templates/
                ├── Helper/
                ├── Model/
                │   ├── Config/
                │   └── ResourceModel/
                ├── Observer/
                ├── Plugin/
                ├── Setup/
                │   └── Patch/Data/
                ├── ViewModel/
                ├── etc/
                ├── view/
                ├── composer.json
                └── registration.php
```

---

## Method 2: Composer Installation

If you received access via Webkul's Composer repository:

```bash
composer require webkul/marketplace-size-chart
```

---

## Run Magento Setup Commands

From your Magento 2 root directory, execute the standard deployment commands via terminal:

### 1. Upgrade the Database Schema & Data

```bash
php bin/magento setup:upgrade
```

::: tip What this does
This command:
- Registers `Webkul_MpSizeChartTemplate` in `app/etc/config.php`.
- Creates the three core declarative database tables: `wk_mp_sizeunits`, `wk_mp_body_measurements`, and `wk_mpsizechart_templates`.
- Executes data patch `Webkul\MpSizeChartTemplate\Setup\Patch\Data\CreateAttributes` to register the product attribute `wk_mpsizechart_template` in the `Marketplace Size Chart` attribute group across all catalog attribute sets.
:::

### 2. Compile Dependency Injection

```bash
php bin/magento setup:di:compile
```

### 3. Deploy Static Content

```bash
php bin/magento setup:static-content:deploy -f
```

### 4. Flush and Clean Cache

```bash
php bin/magento cache:clean
php bin/magento cache:flush
```

---

## Verify Installation

To verify that the module is installed and active in Magento:

```bash
php bin/magento module:status Webkul_MpSizeChartTemplate
```

Expected output:
```text
Module is enabled
```
