# Bulk Generation (Admin)

Generate content for many products or CMS pages at once with the **Import AI Content** mass action.

---

## Products

1. Go to **Catalog > Products**.
2. Select the products.
3. Open **Actions > Import AI Content**.
4. Choose the store view to write content for.
5. Click **OK** in the confirmation **"Are you sure want to import AI Content For selected items?"**

![Import AI Content mass action on the product grid](/images/admin/bulk-content-generation-option.webp)

The module writes the attributes selected in **Allowed Content Generation Attributes**.

---

## CMS Pages

1. Go to **Content > Elements > Pages**.
2. Select the pages.
3. Open **Actions > Import AI Content**.
4. Choose an option:
   * **Page Content** — writes the page content.
   * **SEO Content** — writes the page meta fields. Shown only when **Import SEO Content** is **Yes**.
5. Confirm the action.

---

## The Run Profile Page

After you confirm, the **Run Profile** page opens and processes the items one by one.

![Run Profile page](/images/admin/bulk-content-generation-profiler.webp)

::: warning
Do not close or refresh the window while it runs. The page shows **"Please don't close or refresh the window while writing content for …"**.
:::

Each item shows one of these results:

* **AI Content imported successfully.**
* **AI Content not imported.**

**Finished Execution.** means the run is done. Click **Go Back** to return to the grid.

::: tip
The mass action is hidden when the module is disabled. If the module is disabled for a CMS page's store view, that page is skipped with a message naming the page and store view.
:::
