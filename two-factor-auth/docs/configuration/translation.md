# Multi-Lingual & i18n Translation

The **Magento 2 Two Factor Authentication** extension is built using standard Magento 2 internationalization practices (`__('Text')`), making it translatable into any language for multi-store and regional deployments.

---

## Setting Storefront Locale

To switch your Magento store view locale:

1. In the Magento Admin Panel, navigate to **Stores > Configuration > General > General**.
2. Expand the **Locale Options** group.
3. Deselect **Use system value** for **Locale**.
4. Choose your desired storefront language/region from the dropdown (e.g., *French (France)*, *German (Germany)*, *Spanish (Spain)*).
5. Click **Save Config**.

![Locale Options Configuration](/images/image-5.png)

---

## Translating Extension Phrases via CSV

To customize strings or translate the module into other languages:

1. Locate the module's i18n directory:
```text
app/code/Webkul/TwoFactorAuth/i18n/
```

2. Inside this folder, you will find `en_US.csv`.
3. To add a new translation, create a new CSV file corresponding to your target locale code (for example, `fr_FR.csv` for French, `es_ES.csv` for Spanish, `de_DE.csv` for German).
4. Add the original phrase in the first column and your translation in the second column:

```csv
"Two-Step Authentication","Authentification en deux étapes"
"Enter Auth Code","Entrez le code d'authentification"
"Sign In another way","Se connecter d'une autre façon"
"Backup Code","Code de secours"
"Your account is locked due to too many failed 2FA attempts.","Votre compte est verrouillé en raison d'un trop grand nombre de tentatives infructueuses."
```

5. Save the file and deploy static content:

```bash
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```
