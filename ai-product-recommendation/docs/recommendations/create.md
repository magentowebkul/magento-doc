# Create a Recommendation

Each recommendation is one block of products. Set where it shows, how it picks products, when it runs, and which products it may include.

---

## Open the Form

1. Go to **AI Product Recommendation Manager > Recommendations**.
2. Click **Add New Recommendation**.

To change an existing block, click **Select > Edit** in its row.

---

## 1. Basic Settings

![Page Type options in the Recommendation Form](/images/admin/admin-page-types-in-add-recomm-form.webp)

| Field | What it does |
|---|---|
| **Status** | **Yes** shows the block on the storefront. **No** hides it. |
| **Name** | Block title. It appears above the products on the storefront, for example **You may also like**. Required. |
| **Page Type** | One or more pages: **Home**, **Category**, **Product Detail**, **Cart**, **Order Confirmation**. Select the check boxes and click **Done**. Required. |

## 2. Recommendation Type

![Recommendation Type options](/images/admin/admin-recommendation-types-in-add-recomm-form.webp)

Select one **Recommendation Type**. Required.

| Option | Works on |
|---|---|
| **Trending** | All pages |
| **Reviews** | All pages |
| **Category (Category & Product Page only)** | Category and Product Detail pages |
| **User (For logged in users only)** | All pages, logged-in customers only |
| **Visual Similarity (Product Page Only)** | Product Detail page |
| **Text Similarity (Product Page Only)** | Product Detail page |
| **Recently Viewed** | All pages |

When you select **Trending**, a **Trending Type** field appears. Select one or more: **Most Viewed**, **Most Purchased**, **Most Added to Cart**, **Most Added to Wish List**, **Most Added to Compare List**.

See [Recommendation Types](/recommendations/types.md) for how each type picks products.

::: warning
Match the type to the page. A product-page-only type on the **Home** page has no current product to compare with, so the block stays empty.
:::

## 3. Schedule and Display

| Field | What it does |
|---|---|
| **Start Timing** | Date and time when the block starts to show. Required. |
| **End Timing** | Date and time when the block stops showing. Required. |
| **Product Count** | Maximum number of products in the block. Required. |
| **Sort Order** | Position of this block among the other blocks on the same page. Lower numbers show first. Required. |

---

## 4. Filters

![Filters in the Recommendation Form](/images/admin/admin-applied-filter-in-recommendation-form.webp)

| Field | What it does |
|---|---|
| **Filter with current and child category** | **Yes** limits the products to the current category and its child categories. |
| **Apply Filters** | **Yes** shows the filter fields below. |
| **Select Category** | Show products from the selected categories only. |
| **Select Product** | Show only the selected products. |
| **Price From** | Show products priced above this amount. |
| **Price To** | Show products priced below this amount. |
| **Only Low Stock** | **Yes** shows only products that are low in stock. |
| **Product Type** | Show only the selected product types, such as simple or configurable. |
| **Product Visibility** | Show only products with the selected visibility. **Any** applies no limit. |

::: tip
Filters narrow the results of the recommendation type. Too many filters can leave the block empty. Start with none, then add them one at a time.
:::

---

## 5. Save

* Click **Save** to save and return to the grid.
* Click **Save and Continue Edit** to save and stay on the form.
* Click **Back** to leave without saving.

The block appears on the storefront when **Status** is **Yes** and the current time is between **Start Timing** and **End Timing**. See [Storefront Results](/recommendations/storefront.md).

---

## Example: "You may also like" on the Product Page

| Field | Value |
|---|---|
| **Status** | Yes |
| **Name** | You may also like |
| **Page Type** | Product Detail |
| **Recommendation Type** | Text Similarity (Product Page Only) |
| **Product Count** | 10 |
| **Sort Order** | 2 |

---

## Next Step

Go to [Recommendation Types](/recommendations/types.md).
