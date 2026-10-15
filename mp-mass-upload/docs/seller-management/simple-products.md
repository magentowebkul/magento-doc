# Uploading Simple Products

Simple products can be mass uploaded using CSV, XLS, or XML file formats.

---

## Step-by-Step Upload Workflow

1. Go to **Mass Upload Product** in the seller panel.
2. Select the **Attribute Set**.
3. Choose the file type (CSV, XLS, or XML) and select the file.
4. Attach the images ZIP file (or include publicly hosted image URLs directly in the file).
5. Click **Upload Profile**.

![Simple Product Mass Upload Screen](/images/image-10.png)

6. A confirmation banner will state: *"Your file was uploaded and unpacked"*.
7. Select the uploaded profile from the profile list and click **Run Profile**.

![Run Profile Action for Simple Products](/images/image-11.png)

8. During profile execution, a progress bar displays execution status per product batch. When finished, a success message appears.

![Run Profile Finished Message](/images/image-14.png)

9. Navigating to **My Product List** displays all newly created simple products.

![Uploaded Products Listed in My Product List](/images/image-15.png)

---

## CSV File Structure

The simple product import file must contain required Magento product headers: `sku`, `name`, `price`, `description`, `short_description`, `qty`, `is_in_stock`, `category`, `image`, `small_image`, `thumbnail`, `tax_class_id`, etc.

![Simple Product CSV Structure - Part 1](/images/image-12.png)
![Simple Product CSV Structure - Part 2](/images/image-13.png)

::: tip External Image URLs
You can use publicly hosted image URLs (e.g. `https://example.com/images/product.jpg`) directly in the `image`, `small_image`, and `thumbnail` columns of your file without attaching an image ZIP file.
:::

---

## Category & Subcategory Assignment Syntax

Products can be automatically assigned to single, nested, or multiple categories during import.

### Example 1: CSV Delimiter Syntax

![Category Assignment CSV Example](/images/image-16.png)

* **Assign to Main Category**: Enter the category name:
  `Electronics`
* **Assign to 1st Sub-category**: Use `>>` separator:
  `Electronics>>Cameras`
* **Assign to 2nd Sub-category**:
  `Electronics>>Computers`
* **Assign to Multiple Sub-categories**: Use `,` separator:
  `Electronics>>Computers,Electronics>>Cameras`
* **Assign to Categories across Multiple Branches**:
  `Electronics>>Computers,Footwear>>Stilettos`

### Example 2: XML Delimiter Syntax

![Category Assignment XML Example](/images/image-17.png)

```xml
<product>
  <sku">PROD001</sku>
  <name>Digital Camera</name>
  <category>Electronics>>Cameras</category>
</product>
```
