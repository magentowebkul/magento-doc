# Installation

Follow this step-by-step guide to install the **Webkul Magento 2 OpenStreetMap Address AutoComplete** module on your store.

The extension ships in two editions:
- **Luma / Blank Theme Edition** — `Webkul_OpenStreetMapAddressAutoComplete`
- **Hyvä Theme Edition** — `Webkul_OpenStreetMapAddressAutoCompleteHyva` *(requires the Luma edition as a base)*

---

## Luma / Blank Theme Installation

### Step 1: Download and Extract Module

1. Log in to your [Webkul Store Account](https://store.webkul.com/customer/account/login/).
2. Navigate to **My Account → My Purchased Products**.
3. Locate **OpenStreetMap Address AutoComplete for Magento 2** and download the ZIP archive.
4. Extract the ZIP archive on your local workstation.

Inside the package, you will find the module source folder:

```
app/code/Webkul/OpenStreetMapAddressAutoComplete/
├── Block/
├── Controller/
├── Helper/
├── Logger/
├── Model/
├── ViewModel/
├── etc/
├── i18n/
├── view/
├── composer.json
└── registration.php
```

### Step 2: Upload Files to Magento

1. Connect to your server via SSH or SFTP.
2. Navigate to the Magento root directory (`<magento-root>`).
3. Ensure the destination directory exists:
   ```bash
   mkdir -p app/code/Webkul/OpenStreetMapAddressAutoComplete
   ```
4. Copy the extracted module files into `app/code/Webkul/OpenStreetMapAddressAutoComplete/`.

### Step 3: Run Magento CLI Commands

Execute the following commands in sequence from your Magento root directory as the Magento filesystem owner:

```bash
# 1. Enable module and register schema declarations
php bin/magento setup:upgrade

# 2. Compile dependency injection, view models, and interceptors
php bin/magento setup:di:compile

# 3. Deploy frontend and adminhtml static view assets
php bin/magento setup:static-content:deploy -f

# 4. Flush the Magento cache
php bin/magento cache:flush
```

::: tip Production Mode Notice
If running in **production** mode, ensure static content deployment and compilation are executed during a planned maintenance window to prevent layout asset disruption.
:::

### Step 4: Verify Module Status

Check that Magento recognizes and activates the extension:

```bash
php bin/magento module:status Webkul_OpenStreetMapAddressAutoComplete
```

Expected output:
```text
Module is enabled:
Webkul_OpenStreetMapAddressAutoComplete
```

If the module is listed under disabled modules, enable it manually:

```bash
php bin/magento module:enable Webkul_OpenStreetMapAddressAutoComplete
php bin/magento setup:upgrade
php bin/magento cache:flush
```

### Step 5: Multi-Language Translation (Optional)

The module includes standard English UI strings located in:
`app/code/Webkul/OpenStreetMapAddressAutoComplete/i18n/en_US.csv`.

To customize UI messages or translate suggestions into other languages:

1. Create a copy of `en_US.csv` named after your target locale (e.g., `de_DE.csv` for German, `fr_FR.csv` for French, `es_ES.csv` for Spanish).
2. Edit the second column of each line with your translated phrases:
   ```csv
   "Address autocomplete is disabled.","Die Adress-Autovervollständigung ist deaktiviert."
   "Address lookup request timed out. Please try again.","Zeitüberschreitung bei der Adresssuche. Bitte versuchen Sie es erneut."
   ```
3. Save the file and flush the Magento cache:
   ```bash
   php bin/magento cache:clean translate
   ```

---

## Hyvä Theme Edition Installation

::: important Prerequisite
The **Luma / Blank Theme Edition** (`Webkul_OpenStreetMapAddressAutoComplete`) must already be installed and enabled before installing the Hyvä compatibility module.
:::

### Step 1: Download and Extract Hyvä Module

1. Log in to your [Webkul Store Account](https://store.webkul.com/customer/account/login/).
2. Navigate to **My Account → My Purchased Products**.
3. Locate **OpenStreetMap Address AutoComplete for Magento 2 — Hyvä Edition** and download the ZIP archive.
4. Extract the ZIP archive on your local workstation.

Inside the package, you will find:

```
app/code/Webkul/OpenStreetMapAddressAutoCompleteHyva/
├── etc/
│   └── module.xml
├── view/
│   └── frontend/
│       ├── layout/
│       ├── tailwind/
│       ├── templates/
│       │   └── autofilladdress.phtml
│       └── web/
│           └── css/
│               └── autocomplete.css
├── composer.json
└── registration.php
```

### Step 2: Upload Files to Magento

1. Ensure the destination directory exists:
   ```bash
   mkdir -p app/code/Webkul/OpenStreetMapAddressAutoCompleteHyva
   ```
2. Copy the extracted module files into `app/code/Webkul/OpenStreetMapAddressAutoCompleteHyva/`.

### Step 3: Run Magento CLI Commands

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

### Step 4: Verify Module Status

```bash
php bin/magento module:status Webkul_OpenStreetMapAddressAutoCompleteHyva
```

Expected output:
```text
Module is enabled:
Webkul_OpenStreetMapAddressAutoCompleteHyva
```

::: tip No Extra Configuration Needed
The Hyvä module automatically overrides the Luma template with a Hyvä-compatible inline script. All configuration settings remain in the same location: **Stores → Configuration → Webkul → OpenStreetMap Address Autocomplete**.
:::

::: tip Next Step
Proceed to [Activate & Connect](/activation) to verify administrative access, menu navigation, and ACL configuration.
:::
