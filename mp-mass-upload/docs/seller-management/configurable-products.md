# Uploading Configurable Products

Configurable products allow sellers to offer variations of a product (such as size or color) under a single parent catalog listing.

---

## Configurable Upload Steps

1. Navigate to **Mass Upload Product** in the seller panel.
2. Select the **Attribute Set** containing configurable attributes.
3. Upload the CSV/XLS/XML file and image ZIP archive.
4. Click **Upload Profile**.

![Configurable Product Upload Setup](/images/image-18.png)

5. Select the super attributes used for product variants (e.g. `color`, `size`) from the configurable attributes selector.
6. Select the created profile and click **Run Profile**.

![Run Profile Execution for Configurable Products](/images/image-19.png)

---

## Configurable CSV File Structure

The import file must contain rows for both the **parent configurable product** and all **child simple associated products**.

![Configurable Product CSV File Layout](/images/image-20.png)

::: important Associated Product Rule
A parent configurable product will **not** be uploaded if any of its child associated simple product SKUs already exist in the marketplace catalog under another seller or mismatched configuration.
:::

When execution completes successfully, a confirmation message appears:

![Profile Execution Success Screen](/images/image-21.png)

View all created configurable products and their child variations in **My Product List**:

![Configurable Products in My Product List](/images/image-22.png)
