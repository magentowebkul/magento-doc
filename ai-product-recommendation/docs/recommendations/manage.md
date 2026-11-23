# Manage Recommendations

A **recommendation** is one block of products on the storefront, such as **Trending Now** on the home page or **You may also like** on the product page. You create and manage all blocks from one grid.

---

## Open the Recommendation List

Go to **AI Product Recommendation Manager > Recommendations**.

![Recommendation Lists grid](/images/admin/admin-recommendation-grid.webp)

---

## Grid Columns

| Column | Shows |
|---|---|
| **ID** | Recommendation ID. |
| **Status** | **Enabled** or **Disabled**. |
| **Name** | Block title shown on the storefront. |
| **Page Type** | Pages where the block appears. |
| **Recommendation Type** | How products are picked. See [Recommendation Types](/recommendations/types.md). |
| **Start Timing** / **End Timing** | When the block starts and stops showing. |
| **Product Count** | Maximum products in the block. |
| **Sort Order** | Position among the other blocks on the same page. |
| **Created At** / **Updated At** | When the block was created and last changed. |
| **Edit/Delete** | **Select** menu to edit or delete the block. |

Use **Filters**, **Columns**, and **Export** like any Magento admin grid.

---

## Add a Recommendation

Click **Add New Recommendation**. See [Create a Recommendation](/recommendations/create.md).

## Edit or Delete One Recommendation

1. In the **Edit/Delete** column, click **Select**.
2. Click **Edit** to open the form, or **Delete** to remove the block.

## Mass Actions

1. Select the rows with the check boxes.
2. Open **Actions**.
3. Choose one:
   * **Enable Recommendations** — show the selected blocks on the storefront.
   * **Disable Recommendations** — hide the selected blocks without deleting them.
   * **Delete Recommendations** — remove the selected blocks.
4. Confirm the action in the pop-up.

::: tip
Disable a block instead of deleting it when you want to pause it. You keep all its settings.
:::

---

## Next Step

Go to [Create a Recommendation](/recommendations/create.md).
