# Frequently Asked Questions (FAQ)

### 1. Does the extension support Magento 2 Multi-Source Inventory (MSI)?
Yes. In Magento 2.3+ and 2.4+, the Dropship extension natively integrates with MSI. Each registered warehouse maps directly to an inventory Source. Product stock quantities are tracked against individual warehouse sources.

### 2. Can a single product be assigned to multiple warehouses?
Yes. Administrators can assign a product to multiple regional warehouses with distinct quantity allocations per warehouse.

### 3. How does the module handle backorders?
The Dropship module supports Magento's native backorder functionality. If an item is temporarily out of stock across all warehouses, store owners can still accept orders based on their backorder settings, and route the order once stock is replenished.

### 4. What happens if an order contains items from two different warehouses?
The extension calculates the shipping cost for each warehouse based on its origin and custom shipping rules, combines the rates, and presents the unified shipping total to the customer at checkout.

### 5. Can warehouse suppliers access my main Magento Admin panel?
No. Warehouse managers have restricted credentials that only grant access to their specific warehouse portal to view assigned orders, download packing slips, and enter tracking numbers without seeing other store settings or customer data.

### 6. Are configurable products with swatches supported for AliExpress imports?
Yes. The AliExpress Importer imports configurable products along with color/size variation attributes, swatch thumbnails, and variation-specific prices.

### 7. Does the extension automatically update prices if AliExpress changes them?
Yes. The extension includes a cron job that periodically synchronizes product prices from AliExpress based on your configured price rules and currency conversion factors.

### 8. Where can I request customized features or report bugs?
You can contact the Webkul development team directly by submitting a ticket at the [Webkul UVdesk Support Portal](https://webkul.uvdesk.com/en/customer/create-ticket/).
