# Infinite Scroller

The **Infinite Scroller** feature converts traditional multi-page pagination into a continuous, seamless scrolling experience across catalog category listing pages and search result views.

Instead of requiring shoppers to click through numbered pagination links ("Page 1, 2, 3..."), upcoming products load automatically in the background as the customer scrolls down the page.

---

## Key Benefits

* **Frictionless Product Browsing**: Keeps shoppers engaged by eliminating full-page reloads and manual pagination clicks.
* **Higher Product Discovery & Conversions**: Allows customers to view your entire category catalog continuously on a single page, boosting session duration and sales.
* **Integrated WebP & Lazy Loading**: Newly loaded product cards automatically trigger image lazy loading and WebP compression for maximum storefront performance.

---

## Admin Configuration

Navigate to **Stores → Configuration → Webkul → Store Optimization Settings → Infinite Scroller**.

| Setting | Field Type | Options | Description |
|---|---|---|---|
| **Enable Infinite Scroller** | Select | Yes / No | **Yes**: Showcases all products on a single page as customer scrolls.<br>**No**: Displays category products across multiple separate pages. |

![Infinite Scroller Settings](/images/feature/infinite-loader/01.png)

### Option Breakdown

* **Select "Yes"**: The admin can enable the infinite scroller option by selecting **Yes**. This helps in showcasing all products available in a category on a single page.
  ![Enable Infinite Scroller - Yes](/images/feature/infinite-loader/02.png)

* **Select "No"**: If the option is selected as **No**, the products on the category page will be visible to customers in multiple pages rather than on a single page.
  ![Enable Infinite Scroller - No](/images/feature/infinite-loader/03.png)

---

## Storefront Integration

The Infinite Scroller applies to:
* **Category Product Grids** (`catalog_category_view`)
* **Quick Search Results** (`catalogsearch_result_index`)
* **Advanced Search Results** (`catalogsearch_advanced_result`)

```mermaid
flowchart LR
    A[Customer Scrolls Down Grid] --> B{Page Bottom Entered Viewport?}
    B -- Yes --> C[Background Fetch Next Page Products]
    C --> D[Append New Products to Active Grid]
    D --> E[Re-trigger Image Lazy Loading]
```
