# Product-Supplier Association & Cost Priority

A single catalog product can often be sourced from multiple independent suppliers. The **Webkul Purchase Management** extension allows you to map multiple suppliers to any product, assign distinct vendor cost prices, and prioritize which supplier is selected first during automatic replenishment.

---

## Setting Supplier Price from Assigned Products Grid

Within **Purchase Management > Manage Suppliers > [Edit Supplier] > Assigned Products**, store administrators can configure tiered pricing and vendor costs directly:

1. Locate the product in the **Assigned Products** table and click the **Set Price** button in its row.
2. In the modal dialog that appears:
   - Enter the **Minimum Product Quantity** required to trigger the tier (e.g. `1000`).
   - Enter the **Per Unit Cost** for that quantity tier (e.g. `20`).
   - To add additional tiered price breaks, click **Add New Cost**. To remove a row, click **Delete Row**.
3. Click **Save** in the modal.
4. A confirmation modal will appear with the message: *"Price and quantity updated successfully"*. Click **OK**.

![Set Supplier Product Price Modal](/images/supplier-set-price-popup.webp)
![Price Update Success](/images/supplier-set-price-success.webp)

### Inline Editing of Quantity, Lead Time, and Priority

Store administrators can also quickly update product replenishment rules directly within the **Assigned Products** grid:

1. Select the product row in the **Assigned Products** grid by ticking its checkbox.
2. The editable inline fields for **Minimal Quantity**, **Lead Time (In Days)**, and **Priority** will open directly in the table row along with inline **Cancel** and **Save** buttons.
3. Update the required values and click **Save** to persist the changes immediately without leaving the page.

![Inline Quantity Adjustment](/images/supplier-product-inline-qty.webp)


---

## Configuring Suppliers from Catalog Product Edit Page

You can also configure supplier associations directly while editing any catalog product:

1. Navigate to **Catalog > Products**.
2. Click **Edit** on your target product (Simple, Configurable, Grouped, or Bundle).
3. Scroll down and locate the **Purchase Management / Suppliers** tab.

![Product Edit Supplier Settings](/images/product-edit-supplier-tab.webp)

Here you will see:
- Associated suppliers for this product.
- **Supplier Cost Price:** Sourcing price per unit from each vendor.
- **Supplier Priority:** Set priority ranking (e.g. `1`, `2`, `3`).

![Product Supplier Priority Settings](/images/product-supplier-priority.webp)

::: tip How Priority Works During Automatic Procurement
When automatic replenishment triggers (`Procurement Method = Automatic`), Magento evaluates the product's associated suppliers and automatically selects the vendor with the **highest priority (lowest numerical ranking)** to receive the draft purchase order. If Supplier A has priority `1` and Supplier B has priority `2`, Supplier A is prioritized first.
:::
