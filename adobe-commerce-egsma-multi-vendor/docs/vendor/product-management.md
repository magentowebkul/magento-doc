# Product Management

Vendors keep their products synchronized between Adobe Commerce and EGSMA in both directions.

---

## Supported Product Operations

| Operation | What it does |
|---|---|
| **Fetch Product by ID** | Look up any product quickly using its ID. |
| **Create Product** | New products added to Adobe Commerce appear on EGSMA automatically, and vice versa. |
| **Update Product** | Changes to product details sync both ways automatically. |
| **Update Product Status** | Enable or disable a product on both platforms at once. |
| **Delete Product** | Removing a product from one platform removes it from the other. |
| **Delete Product Variant** | Remove specific sizes, colors, or other options. |
| **Update Product Variant** | Change variant details such as price or SKU. |
| **Update Product Images** | Product photos stay consistent across platforms. |
| **Update Product Categories** | Category assignments sync automatically. |

---

## Import Product Option Group

Import product option groups from Adobe Commerce into EGSMA so they are available for your marketplace products.

### 1. Open Product Option Group

1. In the EGSMA admin panel, go to **Products > Product Option Group**.
2. The grid lists existing option groups with their **ID**, **Name**, **Channel Group ID**, and **Status**.
3. Click **Import Option Group** in the top-right corner.

![Product Option Group list](/images/product-option-group-list.webp)

### 2. Choose an Import Method

The **Import Product Option Group From Respective Platform** page offers two methods:

- **Method 1: Select Duration** — Pick a **From** and **To** date, then click **Import Option Group** to import all option groups created in that range.
- **Method 2: Using ID or Slug** — Select **On the basis of ID** or **On the basis of Slug**, enter the **Option Group ID** (or slug) from Adobe Commerce, then click **Import Option Group**.

![Import option group by ID](/images/import-option-group-by-id.webp)

### 3. Confirm the Import

A **Successful** message confirms *Product Option Group imported successfully*. The imported group now appears in the **Product Option Group** grid.

![Option group imported successfully](/images/import-option-group-success.webp)

::: tip Finding the ID
The **Channel Group ID** column in the grid shows the option group's ID on the connected Adobe Commerce store — the same ID you enter in **Method 2**.
:::

---

## Supported Product Types

| Type | Description |
|---|---|
| **Simple Products** | Basic products without variants. |
| **Configurable Products** | Products with multiple variants, such as size or color. |

Next: [Product Synchronization](/vendor/product-sync.md).
