# Product Content (Seller)

Sellers generate content on the product add and edit pages in the seller account. There are three tools:

* **Fill with Marketplace AI** — writes the Description or Short Description.
* **Import AI Content** — writes the SEO meta fields.
* **Magic Content Generation** — fills many fields from one prompt.

Before you start, set up [AI Configuration](/seller/configuration.md).

---

## Fill the Description and Short Description

1. In your seller account, open **Products > Add Products**, or edit a product from **Products > My Products List**.
2. Enter the product name.
3. Click **Fill with Marketplace AI** above **Description** or **Short Description**.
4. Review the text, then save the product.

![Fill with Marketplace AI on the seller product form](/images/seller/individual-field-content-generation.webp)

### Write from a custom query

Type a backslash, a space, and your query in **Description**, then click **Fill with Marketplace AI**:

```text
\ Write a description for handmade ceramic coffee mugs, 350 ml, dishwasher safe
```

The AI writes from your query instead of the product name.

---

## Generate SEO Content

Shown only when the admin turns on SEO content.

1. Scroll to the meta fields on the product form.
2. Click **Import AI Content**.
3. Review the meta fields, then save the product.

---

## Magic Content Generation

Click **Magic Content Generation** on the product page to fill many fields from one prompt. See [Magic Content Generation](/features/magic-content.md).

---

## Result on the Storefront

After you save, customers see the generated content on the product page.

The short description appears next to the product image:

![Generated short description on the product page](/images/frontend/generate-content-catalog-page-short-desc.webp)

The description appears in the **Details** tab:

![Generated description in the Details tab](/images/frontend/generate-content-catalog-page-long-desc.webp)

---

## Which Fields Can AI Write?

The admin decides this with **Allowed Content Generation Attributes**. If a field you expect has no AI option, ask the admin to allow it.
