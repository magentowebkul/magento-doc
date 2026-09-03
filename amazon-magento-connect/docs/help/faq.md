# FAQ

Here are the answers to the most frequently asked questions about the Amazon Magento 2 Connector.

### Q: Do I need an Amazon Professional Seller Account?
A: Yes. Amazon only grants Selling Partner API (SP-API) access and developer credentials to Professional Seller accounts. Individual seller accounts cannot integrate with this extension.

### Q: Can I link multiple Amazon accounts to a single Magento store?
A: Yes. The extension allows you to configure and manage multiple Amazon Seller accounts. You can set individual synchronization parameters, attribute mappings, and default categories for each account.

### Q: Does this extension support real-time price and quantity sync?
A: Yes. When enabled in the configuration, any changes made to a product's price or stock quantity in your Magento backend are pushed to Amazon immediately.

### Q: Are configurable (variant) products supported?
A: Yes. You can map and synchronize simple products as well as configurable products. Ensure that parent and child SKUs align properly between both platforms.

### Q: How are shipping and taxes calculated for imported orders?
A: Imported orders use the shipping rates, taxes, and customer details calculated by Amazon at checkout. These values are recorded as custom line items on the Magento order.

### Q: Can I sync fulfillment status back to Amazon?
A: Yes. When you generate a shipment and enter tracking information for an imported Amazon order in Magento, the extension pushes the tracking ID and shipping status back to Amazon Seller Central automatically.
