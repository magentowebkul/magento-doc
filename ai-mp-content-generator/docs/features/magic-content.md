# Magic Content Generation

**Magic Content Generation** fills many product fields from one prompt. It works for the admin and for sellers.

---

## Where to Find It

| User | Location |
|---|---|
| Admin | **Magic Content Generation** button in the toolbar of the product add and edit pages. |
| Seller | **Magic Content Generation** button on the product add page, the edit page, and the product type selection step. |

On the seller product type selection step, select the product type and attribute set first. Otherwise you see **"Please select the product type and attribute set to generate content."**

::: tip
The button is hidden when the module is disabled or when **Allowed Content Generation Attributes** is empty.
:::

---

## Generate Content

1. Click **Magic Content Generation**. The **Magic Content Generation** pop-up opens.
2. In **Describe your product**, write what the product is. Up to 2,000 characters. The more specific you are, the better the result.
3. Optional: add images under **Reference images — optional**. Click **Add images**.
4. Under **Fields to fill**, select the fields AI should write. Up to 10 fields.
5. Click **Generate**.
6. Review the filled fields, then save the product.

![Magic Content Generation pop-up in the admin](/images/admin/admin-magic-content-generation-window.webp)

![Magic Content Generation pop-up on the seller product page](/images/seller/magic-content-generation-window.webp)

When it finishes, you see **"Content generated. Review the fields and save the product."** On the seller product type step, the product form opens with the content filled in.

---

## Fields to Fill

* The list shows the allowed attributes in the current attribute set.
* Some fields are selected when the pop-up opens. Click a field to select or deselect it.
* The counter shows how many fields you selected, for example **4 of 8 selected**.

---

## Reference Images

| Limit | Value |
|---|---|
| Number of images | Up to 5 |
| File types | jpg, jpeg, png, gif, webp |
| Size | 5 MB each |

::: warning
The AI does not see the picture itself. The module sends only the image file name and its embedded text, such as EXIF, IPTC, or PNG title, description, and keywords. Give images descriptive file names.
:::

---

## Partial Results

Some fields may fail. The result then lists:

* **Generated:** — fields that were written.
* **Some attributes could not be generated:** — fields the AI did not return.
* **Not applied** — fields that are not on this form, or whose editor could not be updated.

Click **Generate** again for the missing fields, or fill them by hand.

---

## Common Messages

| Message | Fix |
|---|---|
| Please enter a prompt for content generation. | Fill in **Describe your product**. |
| Please select at least one attribute. | Select at least one field. |
| You can generate up to 10 attributes at a time. | Deselect some fields. |
| Only jpg, jpeg, png, gif and webp images are allowed. | Use a supported image type. |
| Each image must be 5 MB or smaller. | Make the image smaller. |
| No allowed attributes are available on this form. | The admin must allow attributes that exist in this attribute set. |
| AI content generation is disabled in your seller configuration. | Seller: set **Enable** to **Yes** in [AI Configuration](/seller/configuration.md). |
| Rate limit exceeded. Please try again after some time. | Wait one minute. Applies to sellers using admin credentials. |
