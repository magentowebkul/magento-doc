# Troubleshooting

This section details common issues you might encounter while using the Magento 2 Shopify Connector and provides solutions to help you resolve them quickly.

## Products are not Exporting to Shopify
**Symptoms:** You run the product export profiler, but no products appear in Shopify.
**Solutions:**
- **Category Mappings:** Ensure that the Magento category the product belongs to is mapped to a Shopify collection. Products will not export if their category mapping is missing.
- **API Credentials:** Verify that your Shopify API token has the correct Write permissions for `Products` and `Inventory`.
- **Product Type:** Ensure the product is either a Simple or Configurable product.

## Products are not Importing to Magento
**Symptoms:** You initiate product import from Shopify, but products do not appear in your Magento catalog.
**Solutions:**
- **Two-Step Process:** Remember that importing is a two-step process. Clicking "Import Product From Shopify" only creates temporary data. You MUST execute the "Run Profile" action to actually create the products in Magento.
- **Missing Images:** Product images are imported separately. Make sure you execute the "Import Product Image" profiler after the products have been created.
- **Account Configuration:** Verify that a valid Default Category and Attribute Set are selected in your Shopify Account settings. Products need an attribute set to be created in Magento.
- **Attribute Mapping:** For configurable products (products with variants in Shopify), ensure that corresponding attributes exist in Magento and are correctly configured for variation generation.
## Orders are not Importing to Magento
**Symptoms:** New orders created on Shopify do not show up in the Magento Sales grid.
**Solutions:**
- **Cron Jobs:** The background synchronization relies heavily on Magento's cron system. Check your Magento logs under `var/log/cron.log` to verify that the connector's cron is executing successfully.
- **Manual Execution:** Run the import orders profiler manually from the admin panel to surface any specific error messages that might be blocking the import.
- **Products Pre-requisite:** Ensure that the products contained in the Shopify orders are enabled in Magento.

## Webhooks are Failing or Not Triggering
**Symptoms:** Real-time updates from Shopify to Magento are delayed or completely missing.
**Solutions:**
- **SSL Certificate (HTTPS):** Shopify strictly requires your Magento 2 webhook endpoint to be a publicly accessible, valid HTTPS URL. Self-signed or expired SSL certificates will cause webhooks to fail silently.
- **Verification Key:** Ensure you have correctly pasted the Webhook verification key from Shopify's notification settings into the module's configuration panel.
- **Webhook Subscriptions:** Verify inside your Shopify Admin (`Settings > Notifications > Webhooks`) that the correct event topics (e.g., `orders/create`, `products/update`) are subscribed to your Magento webhook URL.

## Missing Collections in Shopify Mapping List
**Symptoms:** You cannot find certain Shopify collections when trying to map categories in Magento.
**Solutions:**
- **Manual vs. Automated Collections:** The connector typically fetches **Manual Collections** from Shopify via the API. If you have created "Automated" or "Smart" collections in Shopify based on conditions, they might not populate in the Magento mapping dropdown. Convert them to manual collections.


