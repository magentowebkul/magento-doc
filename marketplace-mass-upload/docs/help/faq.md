# Frequently Asked Questions (FAQ)

Frequently asked questions regarding the **Magento 2 Multi Vendor Mass Upload** module.

---

### Q1: What file formats are supported for mass product upload?
**A:** The extension supports **CSV**, **XLS**, and **XML** data files for importing products.

---

### Q2: What product types can be mass uploaded?
**A:** Sellers and administrators can mass upload **Simple**, **Configurable**, **Virtual**, and **Downloadable** product types.

---

### Q3: Is there any limit on the number of products that can be uploaded?
**A:** No, there is no hardcoded limitation on the number of products. The module uses batch profiler processing to handle large product catalogs efficiently.

---

### Q4: Can I upload product images using external URL links?
**A:** Yes, you can specify publicly hosted image HTTP/HTTPS URLs directly in the image columns of your import file instead of attaching an image ZIP folder.

---

### Q5: Can administrators upload products for sellers?
**A:** Yes, administrators can upload products for individual sellers via **Mass Upload Manager**, or import products for multiple sellers simultaneously using a single CSV containing a `seller_id` column.

---

### Q6: How do I assign products to subcategories during import?
**A:** Use `>>` syntax for nested category paths (e.g. `Electronics>>Computers`) and `,` to separate multiple categories in the category column of your file.

---

### Q7: Is the module compatible with Hyvä Theme and GraphQL?
**A:** Yes, the module source code is fully compatible with **Hyvä Theme**, **GraphQL**, **MSI (Multi-Source Inventory)**, and **Adobe Commerce Cloud**.
