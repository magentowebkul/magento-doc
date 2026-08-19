# Canva In-Editor Side Panel

Inside the Canva editor, the **Magento 2 Connect** sidebar provides access to your store catalog, active product context, and child variations.

---

## 1. Opening the App in Canva

1. In the Canva editor, open the left side panel.
2. Click **Apps** and select **Magento 2 Connect** (or search for your app name).
3. The sidebar initializes and verifies your Canva Design Token against Magento's REST Web API.

---

## 2. Currently Selected Product Card

At the top of the sidebar, the app automatically detects and highlights the active product being edited:

- **Product Thumbnail & Title**: Displays the product image and catalog name.
- **SKU & Price**: Displays the primary SKU and currency-formatted price.
- **Quick Action Buttons**:
  - **Add Name**: Inserts formatted product title text directly onto the active canvas.
  - **Add Price**: Inserts the formatted product price tag onto the canvas.
  - **Add Description**: Inserts the product's short or full description as text.

```
+----------------------------------------------------+
| ● Currently Selected Product                       |
| [Img] Driven Backpack (24-WB03)                   |
| Price: $36.00                                      |
|                                                    |
| [ + Add Name ]  [ + Add Price ]  [ + Add Desc ]    |
+----------------------------------------------------+
```

---

## 3. Product Variations Selector (Configurable Products)

If the active product is a Configurable Product with child variations (such as colors, sizes, or styles):

1. The sidebar displays a **Variations** section.
2. Click on any child variation:
   - Updates the preview thumbnail and details in the sidebar.
   - Allows inserting the variation's specific price, title, or image onto the canvas.

---

## 4. Browse & Search Magento Catalog

Below the active product card:
- A live **Search Bar** allows searching across the entire Magento product catalog by name or SKU.
- A paginated grid displays products with infinite scrolling or page navigation.
- Click on any catalog item to inspect its details or insert its assets onto the canvas.
