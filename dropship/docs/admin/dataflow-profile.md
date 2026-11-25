# Dataflow Profile Mapping

The **Dropship Dataflow Profile** allows store owners to import supplier feeds without manually editing or renaming vendor spreadsheet columns. By creating a field mapping profile, the module automatically translates external column names into your store's product fields.

---

## Accessing Dataflow Profiles

Navigate to **Dropship Manager > Dropship Dataflow Profile**.

The grid lists all configured profiles along with their **Profile ID**, **Profile Name**, **Creation Date**, and **Action Links**.

![Dropship Dataflow Profile Grid](/images/admin_dataflow_profile.webp)
![Dropship Dataflow Profile Grid](/images/admin_dataflow_profile_mapping.webp)

---

## Creating a New Dataflow Profile

Click **Add New Dataflow Profile** to open the field mapping interface:

1. **Profile Information:**
   * Enter a friendly **Profile Name** (e.g., *Shenzhen Electronics Feed*, *Supplier X Product List*).

2. **Field Mapping Rows:**
   * **In Database Value:** Select your store's product attribute from the dropdown (e.g., `name`, `sku`, `price`, `description`, `qty`, `weight`, `supplier`).
   * **In File Value:** Type the exact column header name used in your supplier's spreadsheet (e.g., `ITEM_NAME`, `PROD_CODE`, `UNIT_COST`, `STOCK_AVAILABLE`).
   * Click **Add Mapping** to add more fields.

3. Click **Save Profile**.

---

## How Field Mapping Works

Suppliers often use different column titles in their spreadsheets. For example:

| Supplier Spreadsheet Column (`In File Value`) | Your Store Field (`In Database Value`) | What It Updates |
| :--- | :--- | :--- |
| `ITEM_TITLE` | `name` | Product Name in your catalog |
| `PRODUCT_CODE` | `sku` | Unique Product SKU |
| `WHOLESALE_PRICE` | `price` | Product cost / retail price |
| `AVAILABLE_UNITS` | `qty` | Warehouse stock inventory |
| `VENDOR_EMAIL` | `supplier` | Links item to the warehouse account |

### Key Mapping Fields to Include:
* **`sku` (Product SKU):** Required so the system knows whether to create a new product or update an existing one.
* **`name` (Product Name):** Required when importing new products.
* **`price` (Price/Cost):** The base product price before applying any markup rules.
* **`qty` (Stock Quantity):** The number of units available in the warehouse.
* **`supplier` (Warehouse Email):** The email address of the supplier warehouse. If the warehouse doesn't exist, the system creates it automatically.

Once saved, choose this mapping profile whenever you upload feeds under [Dropship Product Profile](/admin/product-profile.html).

::: tip Next Steps
Map supplier categories to store categories in [Category Mapping](/admin/category-mapping.html).
:::
