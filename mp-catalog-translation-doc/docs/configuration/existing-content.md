# Translating Existing Products & Categories

By default, the Marketplace Catalog Translation module automatically translates **newly created** categories and products when saved or accessed across store views.

If your Magento marketplace already contains historical catalog items created prior to installing this extension, you can translate pre-existing categories and products using dedicated CLI commands.

---

## Existing Content CLI Commands

Run the following commands in your Magento 2 root directory via SSH:

### 1. Translate All Existing Categories

To translate all historical categories across active store views:

```bash
php bin/magento update:translation:category
```

This command iterates over all pre-existing store categories, reads their titles and attributes, queries the Google Cloud Translation API for missing store view locales, and updates the database records.

---

### 2. Translate All Existing Products

To translate all historical products across active store views:

```bash
php bin/magento update:translation:product
```

This command iterates through all store products and translates product names, descriptions, short descriptions, and custom text attributes into target store view languages.

---

### 3. Translate Specific Existing Products by ID

For large catalogs with thousands of products, translating all products at once may exceed Google API quotas or execution limits. Use the `-p` parameter to translate specific products by ID:

```bash
php bin/magento update:translation:product -p 1,2,3
```

- `-p`: Comma-separated list of product IDs to translate (e.g., `-p 101,102,103`).

::: tip Performance Tip
Use batch product translation via script or cron if processing large catalog updates to prevent request timeouts.
:::
