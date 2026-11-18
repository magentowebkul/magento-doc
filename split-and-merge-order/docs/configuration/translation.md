# Multi-Lingual & Language Translation

The **Magento 2 Order Split & Merge** extension includes complete multi-lingual support, allowing you to localize all storefront notices, admin interface labels, and order comments into any language.

---

## Translation Steps

### Step 1: Locate the Dictionary File
Navigate to the module directory on your server:

```text
app/code/Webkul/SplitAndMergeOrder/i18n/en_US.csv
```

![Language Translation File Structure](/images/Webkul-Order-Split-merge-language-Translate.png)

---

### Step 2: Create Your Locale File
1. Copy `en_US.csv` and rename it using the target ISO language and country code. For example:
   - German (Germany): `de_DE.csv`
   - Spanish (Spain): `es_ES.csv`
   - French (France): `fr_FR.csv`
   - Arabic (Saudi Arabia): `ar_SA.csv`
2. Open the file in a UTF-8 compatible text editor or CSV tool.

---

### Step 3: Translate Key Phrases
The file consists of comma-separated pairs:
- **Left Column:** Original English phrase (do not alter this value).
- **Right Column:** Translated phrase for your store locale.

Example snippet:
```csv
"Split Order","Auftrag teilen"
"Merge Orders","Aufträge zusammenführen"
"Select Parent Order","Übergeordneten Auftrag auswählen"
"Split Order Shipping Charges into Two Orders","Versandkosten auf zwei Aufträge aufteilen"
"Use Only Main Shipping Charges","Nur Hauptversandkosten verwenden"
```

Save the file and upload it to:
```text
app/code/Webkul/SplitAndMergeOrder/i18n/
```

---

### Step 4: Refresh Magento Cache
After uploading the translation file, deploy static view files and flush the application cache:

```bash
php bin/magento setup:static-content:deploy -f <locale_code>
php bin/magento cache:flush
```
