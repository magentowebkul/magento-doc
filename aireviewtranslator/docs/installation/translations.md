# Translating the Interface

The extension's own labels — admin field names and the storefront toggle link — are
translatable through Magento's standard CSV mechanism. This is separate from translating
review content, which is what the module does at runtime.

## Add a locale

1. Copy `app/code/Webkul/AIReviewTranslator/i18n/en_US.csv`.
2. Rename it to your locale, for example `de_DE.csv`.
3. Translate the **right-hand** column only. Leave the left column untouched — it is the
   lookup key.
4. Put the file back in the module's `i18n` folder.

```csv
"Show Translated Review","Übersetzte Bewertung anzeigen"
"Show Orignal Review","Originalbewertung anzeigen"
"LLM Provider","LLM-Anbieter"
```

5. Deploy and flush:

```bash
php bin/magento setup:static-content:deploy de_DE
php bin/magento cache:flush
```

## Fixing the toggle typo

The shipped `en_US.csv` contains `"Show Orignal Review"` — a spelling mistake in the
module. To correct it without editing the vendor file, override the key in your own theme
or module's `i18n/en_US.csv`:

```csv
"Show Orignal Review","Show Original Review"
```

::: tip Keep the key spelled wrong
The left column must match the string the module actually asks for. Correcting the key as
well as the value means nothing matches and the original typo shows through.
:::

Next: [Enable the Module](../setup/enable.md).
