# Import Products

## Import Products From Shopify
The admin can import products from the Shopify store to the Magento store by clicking on the **Map Product** tab.

![Shopify Product](/images/product-page-2.png)

- **Import Product From Shopify**: Creates temporary product data in the Magento 2 database.

![Import Products Grid](/images/webkul-magento2-shopify-connector-map-product.webp)

![Import Products From Shopify](/images/webkul-magento2-shopify-connector-product-import.webp)

- **Run Profile**: Adds the imported products to the Magento 2 store.

![Run Image Import Profiler](/images/profile-product.png)

- **Import Product Image**: Imports product images from Shopify.

![Run Image Import Profiler](/images/webkul-magento2-shopify-connector-image-import-profiler.webp)

::: tip Note
- If category mapping is done, imported products are assigned to the mapped category. Otherwise, they use the default category.
- Simple and Configurable products are supported.
- If importing a product that has no weight, it will have a default weight of 1 in Magento.
:::

- **Imported Product**: Imported products will act as Magento products.

![Imported Product](/images/front-end.png)

## Change the Category of Imported Products
1. Select one or more products from the imported products list.
2. Select **Assign to Category** option from the Actions dropdown.
3. Select the desired category from the Category dropdown.
4. Click **Submit**.

![Change Category of Imported Product](/images/webkul-magento2-shopify-connector-change-category-1.webp)
