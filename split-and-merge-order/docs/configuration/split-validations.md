# Split Order Validations

Under the **Split Order Validations** tab, administrators define constraints that determine whether an order can be split into smaller consignments.

---

## Configuration Settings

Navigate to **Stores > Configuration > Webkul > Split And Merge Order > Split Order Validations**.

![Split Order Validation](/images/split-order-validation.webp)

| Setting Field | Description | Constraints / Default |
| :--- | :--- | :--- |
| **Quantity of Products in Order (Minimum)** | Enter the minimum number of product units that must be present in the order to qualify for splitting. | Must be set to **2** or greater. |
| **Minimum Price of the Order** | Enter the minimum order value required for an order to be eligible for split operations. | Numeric value in base store currency. |

---

## Essential Splitting Rules

When an administrator reviews an order for splitting, the system evaluates the following structural constraints:

::: important Key Rules for Splitting Orders
- **Item Count Constraint:** An order containing only a single item with a quantity of 1 cannot be split, as at least 2 distinct items or multiple units of an item are required.
- **Payment Method Constraint:** In standard configurations, only orders placed with **offline payment methods** (such as Cash on Delivery, Bank Transfer, or Check/Money Order) can be split.
- **Invoice State:** Once an invoice has been generated for an order, it **cannot be split**. Ensure splitting is executed prior to invoicing.
- **Shipment State:** Orders that have already been shipped or partially shipped cannot be split.
:::
