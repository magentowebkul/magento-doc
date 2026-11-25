# Manage Shipping Rules

The **Manage Shipping Rules** interface allows store administrators and warehouse managers to configure matrix-based table rates for regional deliveries. Each warehouse can maintain its own independent shipping rate matrix based on destination country, postal code ranges, and shipment weights.

---

## Viewing Existing Shipping Rates

Navigate to **Dropship Manager > Manage Shipping Rule**.

The grid displays all active shipping rates showing:
* **Rule ID**
* **Warehouse Title**
* **Country Code**
* **Zip From & Zip To**
* **Weight Range (Weight From – Weight To)**
* **Shipping Cost / Price**

![Manage Shipping Rules Grid](/images/admin_shipping_rules.webp)
![Manage Shipping Rules Grid](/images/admin_shipping_rules_new.webp)

---

## Adding Shipping Rules via CSV

To add or update shipping rates for a warehouse:

1. Click **Add New Shipping Rules** at the top right of the grid.
2. Select the target **Warehouse** from the dropdown menu.
3. Download the sample CSV template by clicking the **Download Sample File** link.
4. Prepare your shipping rate data following the CSV format below.
5. Upload the CSV file and click **Save**.

---

## Shipping Rate CSV Structure

The CSV file contains six simple columns:

```csv
Country Code,Zip From,Zip To,Price,Weight From,Weight To
US,10001,10020,5.00,0.00,5.00
US,10001,10020,10.00,5.01,15.00
US,90001,90210,12.50,0.00,10.00
GB,*,*,15.00,0.00,20.00
*,*,*,25.00,0.00,50.00
```

### Column Specifications:

| Column Header | Format / Example | Description |
| :--- | :--- | :--- |
| `Country Code` | ISO 2-letter (e.g., `US`, `GB`, `DE`) | Destination country where the rate applies. Use `*` to apply to all countries. |
| `Zip From` | Numeric or text (e.g., `10001`) | Starting postal code boundary. Use `*` as a wildcard for all zip codes. |
| `Zip To` | Numeric or text (e.g., `10020`) | Ending postal code boundary. Use `*` as a wildcard for all zip codes. |
| `Price` | Number (e.g., `8.50`) | Delivery charge applied to orders matching this rule. |
| `Weight From` | Number (e.g., `0.00`) | Minimum package weight. |
| `Weight To` | Number (e.g., `5.00`) | Maximum package weight. |

---

## How Rate Matching Works

When a customer checks out, the extension checks your shipping rules in order of specificity:

1. **Exact Postal Code Range:** If the customer's zip code falls between `Zip From` and `Zip To` for that country, that rule is used first.
2. **Country-Wide Fallback (`*`):** If no specific zip code rule matches, the system looks for rules where the country matches and zip codes are set to `*`.
3. **Worldwide Global Fallback (`*`):** If both Country and Zip are set to `*`, the rule serves as a general fallback for any destination.
4. **Package Weight:** Within the matched geographical rule, the total cart weight must fall within the `Weight From` and `Weight To` limits.

---

## Managing Existing Rules

* **Delete Rate Rules:** Check the boxes next to outdated shipping rules and select **Delete** from the mass action dropdown.
* **Updating Rates:** When you upload a new CSV for a warehouse, it adds the new rules or updates existing matching entries.

::: tip Next Steps
Proceed to [Warehouse Order Manager](/admin/order-manager.html) to review and fulfill incoming customer orders.
:::
