# Product Content (Admin)

Generate content for one product from the product add and edit pages. There are three tools:

* **Magic Content Generation** — fills many fields from one prompt.
* **Fill with Marketplace AI** — writes the Description or Short Description.
* **Import SEO Content** — writes the SEO meta fields. Needs **Import SEO Content** set to **Yes** in [General Settings](/admin/configuration.md).

Before you start, finish [Admin Configuration](/admin/configuration.md).

---

## Create a Product with Magic Content

**Magic Content Generation** fills many product fields from one prompt. The button sits in the toolbar of the product add and edit pages.

1. Go to **Catalog > Products**.
2. Click **Add Product**. The **New Product** page opens.

   ![New Product page with the Magic Content Generation button in the toolbar](/images/admin/admin-new-product-page.webp)

3. Click **Magic Content Generation** in the page toolbar. The **Magic Content Generation** pop-up opens.

   ![Empty Magic Content Generation pop-up in the admin](/images/admin/admin-magic-content-window.webp)

4. In **Describe your product**, write what the product is. Up to 2,000 characters.
5. Optional: click **Add images** under **Reference images — optional**.
6. Under **Fields to fill**, select the fields AI should write. Up to 10 fields.

   ![Magic Content Generation pop-up with a prompt, a reference image, and fields selected](/images/admin/admin-magic-content-prompt-filled.webp)

7. Click **Generate**. The pop-up shows **Generating content for … attribute(s)...** while it runs.

   ![Magic Content Generation pop-up while content is generating](/images/admin/admin-magic-content-generating.webp)

8. Read the result message **"Content generated. Review the fields and save the product."** It lists the generated fields.

   ![Content generated message listing the generated fields](/images/admin/admin-magic-content-success-popup.webp)

9. Click **OK**.
10. Review the generated Description and Short Description.

    ![Generated Short Description and Description on the product page](/images/admin/admin-magic-content-generated-descriptions.webp)

11. Review the generated meta fields in **Search Engine Optimization**.

    ![Generated Meta Title, Meta Keywords, and Meta Description](/images/admin/admin-magic-content-generated-seo.webp)

12. Click **Save**.

::: tip Fill the meta fields on a saved product
Save the product once, then click **Import SEO Content** in the **Search Engine Optimization** section to fill the meta fields again. New, unsaved products show **"Product ID not found. Please save the product first."** The module fills the attributes selected in **SEO Attributes**.
:::

![Import SEO Content button on the product page](/images/admin/individual-content-generation.webp)

::: tip Write a good prompt
The more specific you are, the better the result. Name the product type, key materials, features, sizes, and audience.
:::

::: tip
The button is hidden when the module is disabled or when **Allowed Content Generation Attributes** is empty.
:::

### Fields to fill

* The list shows the allowed attributes in the current attribute set.
* Some fields are selected when the pop-up opens. Click a field to select or deselect it.
* The counter shows how many fields you selected, for example **4 of 8 selected**.

### Reference images

| Limit | Value |
|---|---|
| Number of images | Up to 5 |
| File types | jpg, jpeg, png, gif, webp |
| Size | 5 MB each |

::: warning
The AI does not see the picture itself. The module sends only the image file name and its embedded text, such as EXIF, IPTC, or PNG title, description, and keywords. Give images descriptive file names.
:::

### Partial results

Some fields may fail. The result then lists:

* **Generated:** — fields that were written.
* **Some attributes could not be generated:** — fields the AI did not return.
* **Not applied** — fields that are not on this form, or whose editor could not be updated.

Click **Generate** again for the missing fields, or fill them by hand.

### Common messages

| Message | Fix |
|---|---|
| Please enter a prompt for content generation. | Fill in **Describe your product**. |
| Please select at least one attribute. | Select at least one field. |
| You can generate up to 10 attributes at a time. | Deselect some fields. |
| Only jpg, jpeg, png, gif and webp images are allowed. | Use a supported image type. |
| Each image must be 5 MB or smaller. | Make the image smaller. |
| No allowed attributes are available on this form. | Allow attributes that exist in this attribute set in [General Settings](/admin/configuration.md). |

---

## Fill the Description and Short Description

1. Open the **Content** section.
2. Click **Fill with Marketplace AI** above **Description** or **Short Description**.
3. Wait for the text to appear in the field.
4. Review the text.
5. Click **Save**.

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

## Result on the Storefront

After you save, customers see the generated content on the product page.

The short description appears next to the product image:

![Generated short description on the product page](/images/admin/admin-storefront-short-description.webp)

The description appears in the **Details** tab:

![Generated description in the Details tab](/images/admin/admin-storefront-long-description.webp)

---

## Content Updated At

The product attribute **Content Updated At** records the date AI content was last written. It is available as a column and a filter in the **Catalog > Products** grid.
