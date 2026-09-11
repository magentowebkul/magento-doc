# FAQ

Frequently asked questions regarding the **Magento 2 Table Rate Shipping (Multi Shipping Method with Price Range and Zip Range)** extension.

## General Questions

### What makes this module different from Magento's default table rates?
Default Magento table rate shipping only permits one rate evaluation condition at a time (e.g. Weight vs Destination OR Price vs Destination), and does not support alphanumeric zip code prefixes, customer group filtering, quantity tiers, or store view scoping. Webkul Table Rate allows you to combine all these factors into a single unified rate matrix with full GraphQL API support.

### Can I set different shipping rates for different customer groups?
**Yes.** Each shipping rule can be assigned to all customer groups (`*`) or restricted to specific groups such as *General*, *Wholesale*, or custom B2B groups.

### Does the extension support international alphanumeric postal codes?
**Yes.** Set `numeric_zipcode` to `no` and specify the code or prefix in `alphanumeric_zipcode` to support countries with alphanumeric postal systems, such as the United Kingdom (e.g., `SW1A`), Canada (e.g., `K1A`), and the Netherlands.

---

## Configuration & Rules

### How many shipping rules can I upload via CSV?
There is no hardcoded limitation. You can upload thousands of rate rows via CSV. For extremely large matrices (10,000+ rows), ensure your server's `max_execution_time` and `memory_limit` in `php.ini` are appropriately sized.

### Can I temporarily disable a rule without deleting it?
**Yes.** Each rule contains a `status` field. Set status to `0` (Disabled) to deactivate the rule. You can toggle this directly from the admin edit screen or via CSV.

### What happens if a cart matches multiple rules?
If multiple rules match the customer's delivery destination, cart weight, value, and customer group, the carrier will return all matching methods. Customers can choose between the applicable options at checkout (for example, *Standard Delivery* and *Express Air*).

### Can I set free shipping for orders over a specific amount?
**Yes.** Create a rule with `price_from` set to your free shipping threshold (e.g., `100.00`), `price_to` set to `999999`, and `price` set to `0.00` with the method name *"Free Shipping"*.

---

## Technical & Integration

### Is the module compatible with GraphQL and Headless Magento?
**Yes.** The module includes native GraphQL queries and mutations (`listShippingMethod`, `addShippingMethod`, `updateShippingMethod`, `deleteShippingMethod`) for headless storefronts and PWA integrations.

### Does the module support Hyvä Theme?
**Yes.** The checkout shipping method calculation is handled on the backend via standard Magento quote rate requests, making it fully compatible with Luma, Hyvä Theme, and custom storefront themes.

### Which PHP and Magento versions are supported?
The extension supports Magento 2.4.4 up to Magento 2.4.9, running on PHP 8.1, 8.2, 8.3, 8.4, and 8.5.

---

## Support & Customization

### How do I request a custom feature or integration?
Visit the [Webkul UVdesk Support Portal](https://webkul.uvdesk.com/) and create a ticket detailing your custom business requirements. Webkul's engineering team provides customization services for unique shipping workflows.
