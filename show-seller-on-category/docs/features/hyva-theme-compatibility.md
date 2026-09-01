# Hyvä Theme Compatibility

This module is fully compatible with the **Hyvä Theme**, offering a lightweight and responsive frontend experience. It is designed to work seamlessly with Hyvä.

Below are the key details and layouts of how the **Marketplace Show Seller on Category** compatibility module integrates with the Hyvä theme.

---

## Sellers Only Display Mode

When a category's display mode is configured to **Sellers Only**, the category page replaces the product catalog list with a grid of seller profile cards. The grid layout and cards are fully styled with Tailwind CSS to match your Hyvä storefront's theme.

* Responsive grid layout tailored to all devices.
* Displays seller logo, store name, ratings, product count, and order count.
* Actionable links to visit the seller's storefront collection.

![Sellers Only Frontend](/images/sellers_only_hyva.png)

---

## Hybrid Display Mode

When configured to **Hybrid (Products & Sellers)** mode, a dedicated, responsive seller slider block is injected into the category catalog page. This allows customers to view both products and top-performing sellers side-by-side.

* Lazy-loaded seller cards in a horizontal slider/carousel.
* Styled natively using Hyvä Tailwind classes.

![Sellers Hybrid Frontend](/images/sellers_hybrid_hyva.png)

---

## Seller Quick View Modal

To improve customer engagement, each seller card features a **Quick View** trigger. Powered by Alpine.js, it opens an interactive modal overlay containing:

* **Seller Banner & Logo:** Consistent styling matching the main storefront.
* **Quick Stats:** Overall rating score, country/location, and total completed orders.
* **Follow Seller:** Integrated "Follow" action allowing logged-in customers to subscribe to the seller directly from the category page.

![Sellers Hybrid Frontend](/images/seller_quick_view_hyva_modal.png)

---

## Adapted Sorter and Toolbar

The default catalog page toolbar is updated to support sorting sellers by **Name**, **Rating**, **Products count**, or **Completed orders** when viewing categories in seller display modes.

---

## Products Only Display Mode

When configured to **Products Only**, the category page reverts entirely to standard Hyvä theme frontend behavior, displaying only the default product catalog grid layout.

* All marketplace seller profile cards, horizontal slider sections, and Alpine.js-powered quick views are completely hidden.
* Custom layered navigation seller search inputs and location/rating filters are excluded from the Hyvä sidebar.

![Products Only Frontend](/images/product_only_hyva.png)

