# Dropship Product Profile

The **Dropship Product Profile** feature enables store owners to bulk-import product feeds from single or multiple supplier warehouses using CSV, XML, or XLS spreadsheets. You can also import product images using an accompanying ZIP archive.

---

## 1. Uploading Product Profiles

Navigate to **Dropship Manager > Dropship Product Profile**.

![Product Profile Upload](/images/admin_product_profile_upload.webp)
![Product Profile Upload](/images/admin_product_profile_upload_field_mapping.webp)
![Product Profile Upload](/images/admin_product_profile_upload_price_rules.webp)

### Sample File Formats

Before uploading, download the sample spreadsheet matching your goal:

* **Download Samples (If SKU Does Not Exist):** Used to add brand-new products to your catalog. Includes product name, description, price, weight, attribute set, inventory quantity, supplier email, and image filenames.
* **Download Samples (If SKU Exists):** Used to update pricing, stock counts, and warehouse supplier links for existing items already in your catalog.

### Upload Form Fields:

| Field | Description |
| :--- | :--- |
| **Select File Type** | Choose your file format: `CSV`, `XML`, or `XLS`. |
| **Upload Product File** | Attach your prepared product spreadsheet. |
| **Upload Product Images.zip** | Optional ZIP file containing product photos referenced in your spreadsheet. |
| **Dataflow Profile** | Select a mapping profile if your supplier's spreadsheet uses custom column names (see [Dataflow Profiles](/admin/dataflow-profile.html)). |
| **Price Rules** | Select markup rules to automatically increase product prices during import so you earn your target margin. |
| **Skip if Supplier Price is Higher** | Set to **Yes** to avoid importing items whose warehouse cost is higher than your current catalog retail price. |

Click **Upload Profile** to save and validate the feed.

---

## Key Features of Product Feed Processing

### 1. Adding New Products vs. Updating Existing Items
* **New Products (SKU Does Not Exist):** Creates the new product in your catalog, assigns descriptions, photos, and prices, and links stock to the supplier's warehouse email. If a warehouse with that email does not exist yet, the system automatically creates the warehouse account for you.
* **Existing Products (SKU Exists):** Updates stock quantities and wholesale costs without overwriting your custom product descriptions or titles.

### 2. Product Image Zip Extraction
You can upload a `.zip` archive containing all product photos (e.g., `watch_black.jpg`, `watch_silver.jpg`). When the profile runs, photos are automatically attached to the correct product gallery and set as the base image and thumbnail.

### 3. Price Protection ("Skip if Supplier Price is Higher")
If an item in your store retails for `$50.00`, but a new supplier spreadsheet lists their cost at `$55.00`, importing it would cause you to lose money. Turning this setting on automatically skips those items to protect your profit margins.

---

## 2. Running the Product Profile

Navigate to **Dropship Manager > Run Dropship Product Profile**.

![Run Product Profile](/images/admin_run_product_profile.webp)

1. Select your uploaded profile from the **Select Profile** dropdown.
2. Toggle the **Want to skip if product warehouse price is greater than product price** option if desired.
3. Click **Run Profile**.
4. A live progress bar shows products created, inventory updated, and images attached.

::: tip Next Steps
Learn how to create custom column mappings in [Dataflow Profile Mapping](/admin/dataflow-profile.html).
:::
