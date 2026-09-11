# Shopping List Workflows

Explore the customer storefront features and step-by-step user workflows supported by the **Magento 2 Shopping List** module.

---

## Storefront Workflows

### 1. Creating a New Shopping List
Registered customers can create multiple named shopping lists directly after logging in the storefront:
1. Log into your customer account.
2. Click on the **Shopping List** dropdown menu located in the header navigation bar.
3. Click the **Create New List** button inside the dropdown panel.
4. Enter the desired shopping list name (e.g. *Office Essentials*) and click **Save**.

![Create New Shopping List from Storefront Header Dropdown](/images/storefront_create_list_dropdown.webp)

![Create New Shopping List Popup](/images/storefront_create_list_popup.webp)

---

### 2. Adding Products to Shopping List
Customers can save items directly from product detail pages:
1. Open any product page (Simple, Configurable, Downloadable, Grouped, or Bundle).
2. Select required product options (attributes, links, or bundle choices).
3. Click **Add to Shopping List**.
4. Choose the target list from the dropdown modal or create a new list on the spot.

![Product Page Add to Shopping List Button](/images/storefront_product_page_add_button.webp)

---

### 3. Product Types Compatibility

The **Shopping List** extension seamlessly supports all standard Magento 2 product types, ensuring that customer selections, custom options, and quantities are accurately stored:

- **Simple Products**: Added directly to the shopping list with the desired quantity.
- **Configurable Products**: Preserves the selected super attributes (e.g., color, size) and maps to the underlying child product variant.
- **Downloadable Products**: Preserves customer link choices and downloadable options.
- **Grouped Products**: Supports adding multiple associated child items with specified quantities in a single click.
- **Bundle Products**: Retains all selected bundle option sets, radio choices, checkboxes, and quantities.

---

### 4. Moving Shopping List to Cart (Order Creation)
1. Open **My Shopping List** and select a specific list.
2. Review items, prices, and quantities.
3. Click **Move All to Cart**.
4. All items are validated against current catalog inventory and added directly to the active shopping cart quote.

![Move All Items from Shopping List to Cart](/images/storefront_manage_list_actions.webp)

---

### 5. Managing & Deleting Lists / Items
- **Update Quantity**: Modify item quantities directly in the list view.
- **Delete Item**: Remove specific items from a list using the delete icon.
- **Delete Entire List**: Remove an obsolete list completely.

![Update Item Quantity and Delete List Actions](/images/storefront_manage_list_actions.webp)
