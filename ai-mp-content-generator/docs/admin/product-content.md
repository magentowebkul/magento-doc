# Product Content (Admin)

Generate content for one product from the product edit page. There are three tools:

* **Fill with Marketplace AI** — writes the Description or Short Description.
* **Import SEO Content** — writes the SEO meta fields.
* **Magic Content Generation** — fills many fields from one prompt. See [Magic Content Generation](/features/magic-content.md).

Open a product from **Catalog > Products**, or add a new one.

---

## Fill the Description and Short Description

1. Open the **Content** section.
2. Click **Fill with Marketplace AI** above **Description** or **Short Description**.
3. Wait for the text to appear in the field.
4. Review the text, then click **Save**.

By default, the AI writes from the product name, or from the attribute set in **Product Content Based on selected Attribute**. If the product name is empty, you see **"Please fill product name"**.

### Write from a custom query

You can tell the AI exactly what to write about:

1. In the **Description** field, type a backslash, a space, and your query.

   ```text
   \ Write a description for a waterproof hiking jacket with taped seams and a hood
   ```

2. Click **Fill with Marketplace AI**.

The AI uses the text after `\ ` as the query instead of the product name.

::: tip
Keep one space after the backslash. The module skips the character right after `\`.
:::

---

## Generate SEO Content

**Import SEO Content** must be **Yes** in [General Settings](/admin/configuration.md).

1. Save the product at least once. New, unsaved products show **"Product ID not found. Please save the product first."**
2. Open the **Search Engine Optimization** section.
3. Click **Import SEO Content**.
4. Review the meta fields, then click **Save**.

![Import SEO Content and Magic Content Generation on the product page](/images/admin/individual-content-generation.webp)

The module fills the attributes selected in **SEO Attributes**.

---

## Magic Content Generation

The **Magic Content Generation** button sits in the product page toolbar. It fills many fields from one prompt. See [Magic Content Generation](/features/magic-content.md).

---

## Content Updated At

The product attribute **Content Updated At** records the date AI content was last written. It is available as a column and a filter in the **Catalog > Products** grid.
