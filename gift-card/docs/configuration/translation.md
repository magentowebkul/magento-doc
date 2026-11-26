# Multi-Lingual Configuration & Translation

The **Magento 2 Gift Card** extension is fully localized and supports multi-lingual Magento storefronts, allowing global merchants to present localized frontend text, labels, and error messages to international shoppers.

---

## Setting Store Locale

To set the default language and locale for a particular store view:

1. Navigate to **Stores > Configuration > General > General > Locale Options**.
2. Deselect **Use Website** if modifying an individual store view.
3. Choose the desired language from the **Locale** dropdown (e.g., *French (France)*, *German (Germany)*, *Arabic (Saudi Arabia)*).
4. Click **Save Config**.

![Locale Configuration Setting](/images/configuration-setting.webp)

---

## Customizing Language Translation (CSV)

All translatable phrases in the module are mapped through standard Magento 2 translation dictionaries.

The module's base language dictionary is located at:

```text
app/code/Webkul/GiftCard/i18n/en_US.csv
```

![Change CSV Language file](/images/22-3.png)

### Step-by-Step Translation Procedure

1. In the `app/code/Webkul/GiftCard/i18n/` directory, create a new CSV file named after the targeted locale code (for example, `de_DE.csv` for German, `fr_FR.csv` for French, `es_ES.csv` for Spanish).

![CSV Translation Folder Structure](/images/Gift-Card-Installation.png)

2. Copy the contents of `en_US.csv` into your new locale CSV file.

3. Edit the translated strings in the second column enclosed in double quotation marks:

```csv
"Gift Card","Geschenkkarte"
"Enter Gift Card Code","Gutscheincode eingeben"
"Apply Gift Card","Geschenkkarte anwenden"
"Your Gift Card Balance","Ihr Geschenkkartenguthaben"
"Gift Card has been applied successfully.","Die Geschenkkarte wurde erfolgreich angewendet."
"Recipient Name","Empfängername"
"Recipient Email","Empfänger-E-Mail"
```

![Edit CSV Dictionary](/images/2016-05-02_16-25-34-3.png)

4. Save the file and flush the Magento cache from the CLI:

```bash
php bin/magento cache:flush
```

---

## RTL (Right-to-Left) Language Compatibility

The module templates support RTL layouts (such as Arabic and Hebrew) automatically when active under an RTL locale store view. Text alignments, delivery schedule pickers, and currency formats automatically adjust to native RTL styling.
