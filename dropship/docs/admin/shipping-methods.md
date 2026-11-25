# Shipping Method Configuration

The Dropship extension includes a dedicated shipping carrier method that dynamically calculates delivery rates based on the warehouse's physical origin and the customer's delivery destination.

---

## Configuring the Dropship Carrier

To manage dropship shipping rates for storefront checkout:
1. Navigate to **Stores > Configuration > Sales > Delivery Methods**.
2. Locate and expand the **Dropship** section.

![Dropship Shipping Method Configuration](/images/admin_shipping_method_config.webp)

| Option | Description |
| :--- | :--- |
| **Enabled** | Set to **Yes** to enable the dropship shipping carrier on the storefront checkout. |
| **Title** | The custom label displayed to customers at checkout (e.g., *Dropship Delivery*, *Standard Ground Shipping*). |
| **Method Name** | Internal name representing the shipping method service level. |
| **Price / Handling Fee** | Base handling fee added to the calculated rate. |
| **Calculate Handling Fee** | Choose between **Fixed** (e.g., +$3.00) or **Percent** (e.g., +5%) calculation for additional handling charges. |
| **Displayed Error Message** | Custom message shown to customers if dropship shipping cannot be calculated for their destination address. |
| **Show Method if Not Applicable** | If set to **Yes**, the shipping method appears as disabled with the error message when no matching rate rule exists. |

---

## How Shipping Rates Are Calculated

When a customer checks out, the Dropship carrier automatically determines the delivery charge based on the items in their cart and the warehouses fulfilling them:

### 1. Single Warehouse Cart
If all items in the customer's shopping cart belong to the same warehouse:
* The module matches the customer's destination country, postal code, and package weight against the warehouse's custom shipping rate rules.
* Any configured handling fee (e.g., fixed `$2.00`) is added to the rate.
* The final shipping cost is displayed clearly to the customer.

### 2. Multi-Warehouse Cart (Split Shipments)
If an order contains items fulfilled by different warehouses (for example, Item A from *Warehouse East* and Item B from *Warehouse West*):
1. The module calculates the shipping rate for Item A from *Warehouse East* to the customer's address.
2. The module calculates the shipping rate for Item B from *Warehouse West* to the customer's address.
3. The total delivery fee presented to the customer is the combined sum of both shipments.
4. When the order is placed, separate fulfillment records are created in **Warehouse Order Manager** so each warehouse can pack and ship its portion independently.

::: tip Managing Table Rates
To learn how to define and upload custom shipping rate CSV files for each warehouse, see the [Manage Shipping Rules](/admin/shipping-rules.html) guide.
:::
