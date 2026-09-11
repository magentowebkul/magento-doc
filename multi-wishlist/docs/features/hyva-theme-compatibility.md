# Hyvä Theme Compatibility

The **[Webkul_MultiWishlistHyva](file:///home/users/adarsh.gupta/www/html/mg_249NL/app/code/Webkul/MultiWishlistHyva)** extension provides native, high-performance compatibility with **Hyvä Themes**. It replaces legacy Luma RequireJS, Knockout.js, and jQuery UI scripts with lightweight **Alpine.js** state management and utility-first **Tailwind CSS** styling.

---

## Architecture & Integration

### 1. Fallback Compatibility Registration
The module registers itself with Hyvä's `CompatModuleRegistry` in [`etc/frontend/di.xml`](file:///home/users/adarsh.gupta/www/html/mg_249NL/app/code/Webkul/MultiWishlistHyva/etc/frontend/di.xml):

```xml
<type name="Hyva\CompatModuleFallback\Model\CompatModuleRegistry">
    <arguments>
        <argument name="compatModules" xsi:type="array">
            <item name="hyva-magento2-webkul-multiwishlist" xsi:type="array">
                <item name="original_module" xsi:type="string">Webkul_MultiWishlist</item>
                <item name="compat_module" xsi:type="string">Webkul_MultiWishlistHyva</item>
            </item>
        </argument>
    </arguments>
</type>
```

When a Hyvä theme is active, Magento automatically loads template overrides, layout XML, and ViewModels from `Webkul_MultiWishlistHyva` instead of Luma templates.

### 2. Architectural Highlights
* **Zero Backend Code Duplication:** `Webkul_MultiWishlistHyva` contains no database schemas or controllers. It relies 100% on the core logic, repositories, and endpoints of `Webkul_MultiWishlist`.
* **Alpine.js Reactive Modals:** All wishlist popups (adding, moving, and renaming wishlists) use Alpine.js reactive components (`x-data`, `x-show`, `@click`) paired with Hyvä's native modal ViewModel (`Hyva\Theme\ViewModel\Modal`).
* **Tailwind CSS Design System:** All frontend components are fully responsive and styled using Tailwind CSS utility classes matching Hyvä default design guidelines.
* **Lightweight ViewModel (`MultiWishlistCheck`):** Injects helper methods into `.phtml` templates to verify module status (`isMultiWishlistEnabled()`).

---

## Frontend User Experience & Features on Hyvä

### 1. Product Detail Page (PDP) & Category Listings (PLP)
* **Wishlist Trigger:** Product cards on PLP (`hyva_catalog_list_item.xml`) and the product view block on PDP (`hyva_catalog_product_view.xml`) render a heart icon / **Add to Wish List** button powered by `wishlist.phtml`.
* **Interactive Modal (`addWishlistmodal.phtml`):**
  - Clicking the wishlist button opens a reactive Alpine.js modal.
  - Customers can choose an existing custom wishlist from a dropdown or type a new wishlist name on the fly.
  - Submitting sends an asynchronous fetch request and displays instant Alpine feedback without full page reloads.

### 2. Customer Dashboard — Manage Wish List
* **Responsive Layout:** Inside **My Account > Manage Wish List**, custom wishlists are displayed in clean Tailwind CSS card sections with real-time item counts.

![Hyva Wishlist](/images/hyva_wishlist.png)

* **Wishlist Actions Toolbar:**
  - **Create New Wish List:** Triggers an Alpine modal to quickly create a new named wishlist container.

![Hyva Create Wishlist](/images/hyva_create_wishlist.png)

  - **Move All to Wish List:** Opens a dialog to bulk-transfer all items from the active wishlist to another selected or new wishlist.

![Hyva Move All to Wishlist](/images/hyva_move_all.png)

  - **Rename Wish List:** Opens an Alpine dialog (`renamewishlist-dialog`) to update custom wishlist names.

![Hyva Rename Wishlist](/images/hyva_rename_wishlist.png)

  - **Update Wish List & Add All to Cart:** Perform bulk updates or transfer all items directly to the shopping cart.
  - **Delete Wish List:** Prompts confirmation before removing custom wishlists.

![Hyva Delete Wishlist](/images/hyva_delete_wishlist.png)

### 3. Guest Wishlist Experience
* Guest visitors browsing a Hyvä storefront can add items to guest wishlists.
* Guest items are stored in cookie/session state and displayed in the Hyvä guest wishlist view.
* Upon customer login or registration, saved guest items automatically merge into the customer's permanent account wishlist.

### 4. Wishlist Sharing
* **Sharing Form:** Styled with Hyvä Tailwind form controls, allowing customers to enter recipient emails and custom messages.

![Hyva Share Wishlist](/images/hyva_share_wishlist.png)

### 5. Shopping Cart Integration
* Adds a **Move to Wishlist** option directly inside Hyvä cart item renderers, allowing shoppers to transfer items from their cart into any custom wishlist without leaving the cart page.

---
