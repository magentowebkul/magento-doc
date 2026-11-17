# Category & CMS Content (Admin)

The admin can generate content for categories, CMS pages, and Page Builder HTML Code elements. Sellers do not have these tools.

---

## Page Builder HTML Code Element

The module adds a **Marketplace AI** section to the Page Builder panel. It holds the **HTML Code** element. Its editor has a **Fill with Marketplace AI** button. Categories and CMS pages both use this element when the content field opens in Page Builder.

---

## Categories

### Description

1. Go to **Catalog > Categories**.
2. Open a category.
3. Open the **Content** section.
4. Click **Edit with Page Builder** under **Description**.

   ![Category edit page with Edit with Page Builder under Description](/images/admin/admin-category-edit-page.webp)

5. Drag the **HTML Code** element from **Marketplace AI** onto the stage.

   ![HTML Code element from the Marketplace AI section on the Page Builder stage](/images/admin/admin-category-page-builder.webp)

6. Open the element's editor. The **Edit HTML Code** panel opens.

   ![Edit HTML Code panel with the Fill with Marketplace AI button](/images/admin/admin-html-code-editor.webp)

7. Click **Fill with Marketplace AI**.
8. Review the generated HTML.

   ![Generated category content in the Edit HTML Code panel](/images/admin/admin-category-generated-content.webp)

9. Click **Save** in the **Edit HTML Code** panel.
10. Click **Save** on the category page.

If the category name is empty, you see **"Please fill category name"**.

When Page Builder is not used for the field, the **Fill with Marketplace AI** button appears above **Description** instead.

After you save, customers see the content on the category page:

![Generated category content on the storefront](/images/admin/admin-category-storefront-result.webp)

### SEO content

**Import SEO Content** must be **Yes**, and **SEO Attributes** must include category attributes.

1. Open the **Search Engine Optimization** section.
2. Click **Fill with Marketplace AI**.
3. Review the meta fields.
4. Click **Save**.

---

## CMS Pages

1. Go to **Content > Elements > Pages**.
2. Open a page, or add a new one.
3. Enter the **Page Title**.

   ![New Page form with the Page Title filled in](/images/admin/admin-cms-new-page.webp)

4. Open the **Content** section.
5. Click **Edit with Page Builder**.
6. Drag the **HTML Code** element from **Marketplace AI** onto the stage.
7. Open the element's editor. The **Edit HTML Code** panel opens. It looks the same as for categories. See [Categories](#description).
8. Click **Fill with Marketplace AI**.
9. Review the generated HTML.

   ![Generated CMS page content in the Edit HTML Code panel](/images/admin/admin-cms-generated-content.webp)

10. Click **Save** in the **Edit HTML Code** panel.
11. Click **Save** on the page.

If the page title is empty, you see **"Please fill page name"**.

When Page Builder is not used for the field, the **Fill with Marketplace AI** button appears in the **Content** section instead.

After you save, customers see the content on the CMS page:

![Generated CMS page content on the storefront](/images/admin/admin-cms-storefront-result.webp)

To generate content for many pages at once, see [Bulk Generation](/admin/bulk-generation.md).

---

## Custom Queries

Category descriptions, CMS page content, and the HTML Code element accept a custom query. Type a backslash, a space, and your query in the field before you click the button:

```text
\ Write an introduction for our summer sale page
```

The AI writes from your query instead of the name.

---

## Prompt Templates

When **Enable Prompt Templates** is **Yes**, categories use the **Category Description Prompt Template** and CMS pages use the **CMS Page Prompt Template**. See [Prompt Templates](/admin/prompt-templates.md).
