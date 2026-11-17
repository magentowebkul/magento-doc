# Product Content (Seller)

Sellers generate content on the product add and edit pages in the seller account. There are three tools:

* **Magic Content Generation** — fills many fields from one prompt.
* **Fill with Marketplace AI** — writes the Description or Short Description.
* **Import AI Content** — writes the SEO meta fields.

Before you start, set up [AI Configuration](/seller/configuration.md).

---

## Create a Product with Magic Content

**Magic Content Generation** fills many product fields from one prompt. The button appears on the product type selection step, the product add page, and the product edit page.

1. In your seller account, open **Products > Add Products**. The **Add New Product** page opens on the **Product Type** step.

   ![Add New Product page with the Magic Content Generation button](/images/seller/seller-new-product-page.webp)

2. Select the product type and attribute set. Otherwise you see **"Please select the product type and attribute set to generate content."**
3. Click **Magic Content Generation**. The **Magic Content Generation** pop-up opens.

   ![Empty Magic Content Generation pop-up on the seller product page](/images/seller/seller-magic-content-window.webp)

4. In **Describe your product**, write what the product is. Up to 2,000 characters.
5. Optional: click **Add images** under **Reference images — optional**.
6. Under **Fields to fill**, select the fields AI should write. Up to 10 fields.

   ![Magic Content Generation pop-up with a prompt, a reference image, and fields selected](/images/seller/seller-magic-content-prompt-filled.webp)

7. Click **Generate**. The pop-up shows **Generating content for … attribute(s)...** while it runs.

   ![Magic Content Generation pop-up while content is generating](/images/seller/seller-magic-content-generating.webp)

8. Read the result message **"Content generated. Review the fields and save the product."** It lists the generated fields. If you started on the product type step, the product form opens on **Basic Info** with the content filled in.

   ![Content generated message over the seller product form](/images/seller/seller-magic-content-success-popup.webp)

9. Click **OK**.
10. Review the generated Description and Short Description in **Basic Info**.

    ![Generated Description and Short Description on the seller product form](/images/seller/seller-magic-content-generated-descriptions.webp)

11. Review the generated meta fields in the **SEO** step.

    ![Generated Meta Title, Meta Keywords, and Meta Description in the SEO step](/images/seller/seller-magic-content-generated-seo.webp)

12. Save the product.

::: tip Fill one field with Marketplace AI
On a saved product, click **Fill with Marketplace AI** above **Description** or **Short Description** to write only that field. The AI writes from the product name. To write from your own words, type a backslash, a space, and your query in the field first, then click **Fill with Marketplace AI**:

```text
\ Write a description for handmade ceramic coffee mugs, 350 ml, dishwasher safe
```
:::

![Fill with Marketplace AI on the seller product form](/images/seller/individual-field-content-generation.webp)

The fields, reference image limits, and partial results work the same as for the admin. See [Fields to fill](/admin/product-content.md#fields-to-fill), [Reference images](/admin/product-content.md#reference-images), and [Partial results](/admin/product-content.md#partial-results).

### Seller messages

| Message | Fix |
|---|---|
| AI content generation is disabled in your seller configuration. | Set **Enable** to **Yes** in [AI Configuration](/seller/configuration.md). |
| Rate limit exceeded. Please try again after some time. | Wait one minute. Applies when you use the admin LLM configuration. |
| No allowed attributes are available on this form. | Ask the admin to allow attributes that exist in this attribute set. |

For the other pop-up messages, see [Common messages](/admin/product-content.md#common-messages).

---

## Generate SEO Content

Shown only when the admin turns on SEO content.

1. Scroll to the meta fields on the product form.
2. Click **Import AI Content**.
3. Review the meta fields.
4. Save the product.

---

## Result on the Storefront

After you save, customers see the generated content on the product page:

![Generated content on the storefront product page](/images/seller/seller-storefront-result.webp)

---

## Which Fields Can AI Write?

The admin decides this with **Allowed Content Generation Attributes**. If a field you expect has no AI option, ask the admin to allow it.
