# Category Mapping

When importing products from external suppliers or AliExpress, supplier category names often differ from your store's catalog structure. The **Category Mapping** feature automatically places imported items into your store's designated categories.

---

## Accessing Category Mapping

Navigate to **Dropship Manager > Category Mapping**.

The grid displays all active category mapping rules:
* **Mapping ID**
* **Supplier Category Name**
* **Assigned Attribute Set**
* **Mapped Magento Store Categories**

![Category Mapping Grid](/images/admin_category_mapping.webp)
![Category Mapping Grid Form](/images/admin_category_mapping_form.webp)

---

## Creating a Category Mapping

Click **Map New Category** in the top-right corner:

1. **Category Name:** Enter the supplier or AliExpress category name exactly as it appears in vendor feeds or on AliExpress.
2. **Attribute Set:** Select the Magento attribute set (e.g., *Default*, *Apparel*, *Electronics*) that should apply to products in this category.
3. **Store Categories:** Select the destination categories in your store catalog where imported products should appear.
4. Click **Save Category Mapping**.

---

## Why Category Mapping is Important

* **Clean Catalog Organization:** If a supplier categorizes items under *"Consumer Electronics > Smart Wearables"*, you can map them directly into your store's *"Accessories > Smartwatches"* category.
* **Automatic Product Attributes:** Choosing an **Attribute Set** ensures imported products automatically receive relevant options (for example, apparel items get *Size* and *Color*, while electronics get *Battery Life* and *Warranty*).
* **Zero Manual Sorting:** Once mapped, every item imported from that supplier category is automatically filed into the right store category with no manual editing needed.

::: tip Next Steps
Learn how to define automatic price markups in [Price Rules](/admin/price-rules.html).
:::
