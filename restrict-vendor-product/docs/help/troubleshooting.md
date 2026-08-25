# Troubleshooting

If you encounter issues while using the Magento 2 Marketplace Restrict Vendor Product module, please refer to the following common issues and their solutions.

## Module Not Appearing After Installation
Ensure that you have run all the required Magento commands after uploading the module files:

Run the following commands in sequence to ensure all caches, code, and configurations are correctly applied:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="This command enables the Marketplace Restrict Vendor Product module and applies necessary database schema updates." />

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

## Vendor Cannot Request Products
- Verify that the vendor's account is approved and active in the marketplace.
- Check if the admin products exist and are enabled in the catalog.
- Ensure the **Magento 2 Multi Vendor Marketplace** extension is installed and functioning correctly.

## Email Notifications Not Sent
- Check your Magento store's email configuration under **Stores > Configuration > Advanced > System > Mail Sending Settings**.
- Make sure that you have selected the appropriate email templates in the module configuration settings.

## Still need help?
For any further queries or assistance, you can drop us an email at **support@webkul.com** or [Open a Ticket](https://webkul.uvdesk.com/en/customer/create-ticket/).
