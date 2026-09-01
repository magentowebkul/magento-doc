# Troubleshooting

If you encounter issues while using the Magento 2 Marketplace Show Seller on Category module, please refer to the following common issues and their solutions.

---

## Module Not Appearing After Installation
Ensure that you have run all the required Magento commands after uploading the module files:

Run the following commands in sequence to ensure all caches, code, and configurations are correctly applied:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="This command enables the Marketplace Show Seller on Category module and applies necessary database schema updates." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="This compiles all dependency injection definitions and generates necessary proxy/interceptor classes." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="This deploys static view files (CSS, JS, images) required by the module for the frontend and Admin panel." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes all data to ensure new configurations and database entries are immediately reflected." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento caches to ensure the new module configurations and files are loaded." />

---

## Sellers List Not Displaying on Category Page
- Verify that the module is enabled in the configuration: **Stores > Configuration > Webkul > Marketplace Show Seller on Category > General Settings > Enable** is set to **Yes**.
- Verify that the category's **Display Mode** is set to either **Sellers Only** or **Hybrid (Products & Sellers)** under **Catalog > Categories > Display Settings**.
- Make sure that there are products in this category that belong to active sellers, or that sellers are properly associated.
- Clean the cache: `php bin/magento cache:flush`.

---

## Layered Navigation Sidebar Filters Missing
- Check if the category is configured as an **Anchor** category under **Catalog > Categories > Display Settings > Anchor** (set to **Yes**). Layered navigation and filters require the category to be an anchor.

---

## Still need help?
For any further queries or assistance, you can drop us an email at **support@webkul.com** or [Open a Ticket](https://webkul.uvdesk.com/en/customer/create-ticket/).
