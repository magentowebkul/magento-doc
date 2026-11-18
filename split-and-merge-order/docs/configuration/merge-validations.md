# Merge Order Validations

Under the **Merge Order Validations** tab, administrators define quantitative thresholds and rules governing how multiple orders can be merged into a single consolidated consignment.

---

## Configuration Settings

Navigate to **Stores > Configuration > Webkul > Split And Merge Order > Merge Order Validations**.

![Merge Order Validation](/images/merge-order-validation.webp)

| Setting Field | Description | Constraints / Default |
| :--- | :--- | :--- |
| **Minimum Order** | Enter the minimum number of orders required to trigger or allow a merge action. | Value cannot be less than **2**. |
| **Maximum Orders** | Enter the maximum number of orders that can be merged in a single batch. | Positive integer (e.g., **5**, **10**). |
| **Order Amount After Merge (Minimum)** | Specify the minimum acceptable grand total value of the consolidated order after merging. | Numeric currency value (e.g., **10.00**). |
| **Order Amount After Merge (Maximum)** | Specify the ceiling grand total value that a merged order cannot exceed. | Numeric currency value (e.g., **5000.00**). |
| **Collective Weight After Merge Maximum** | Specify the maximum permissible cumulative weight of all products combined in the merged order. | Weight units corresponding to store unit (kg / lbs). |

---

## Merge Validation Checklist & Rules

When an administrator initiates an order merge operation from the sales grid, the system automatically evaluates qualifying criteria before allowing the administrator to proceed to the next step.

![Merge Order Validation Conditions](/images/image-1.png)

### Core Rules Checked During Validation:
1. **Payment Method Homogeneity:**
   - All selected orders must use the **same payment type** (either all Offline or all Online).
   - An offline order (e.g., Cash on Delivery) cannot be merged with an online order (e.g., PayPal/Stripe) to prevent payment reconciliation discrepancies.
2. **Invoice & Shipment State:**
   - Orders that have already been shipped cannot be merged.
   - Orders with existing invoices can only be merged if consistent with payment method and store policies.
3. **Weight & Total Caps:**
   - If the combined weight or order grand total of selected orders exceeds the configured maximum thresholds, the merge will be blocked with a descriptive validation notice.
4. **Customer Assignment:**
   - Orders can be merged into an existing registered customer profile or assigned to a chosen customer from the selection modal.
