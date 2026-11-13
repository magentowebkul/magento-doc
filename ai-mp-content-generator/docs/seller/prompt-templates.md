# My Prompt Templates (Seller)

Sellers can create their own prompt templates and use the templates the admin creates.

---

## Open the Template List

In your seller account, open **AI Marketplace Content Generator > My Prompt Templates**.

![My Prompt Templates list](/images/seller/prompt-template-listing.webp)

The list shows your templates and the admin's templates.

* Your templates show **Edit**.
* Admin templates show **View**. You can use them but not change them.

---

## Create a Template

1. Click **Add New Prompt Template**. The **New Prompt Template** pop-up opens.
2. Fill in **Template details**:
   * **Template Title** — a name you will recognise when you pick the template later.
3. Fill in **Choose a template**:
   * **Category** — Copywriting, Marketing, SEO, Social Media, Productivity, or Professionals.
   * **Sub-category** — a sub-category of the chosen category.
   * **Templates** — a starter template. A description of the selected template appears below it.
4. Fill in **Template options**:
   * **Languages**, **Countries**, **Voice Tones**, and **Writing Styles**.
   * **Prompt Template** — the final text sent to the AI.
5. Click **Save Template**.

![New Prompt Template pop-up](/images/seller/add-new-prompt-templat-form.webp)

**Reset** clears your changes. **Cancel** closes the pop-up without saving.

::: tip
Use `{{importContentFor}}` in the **Prompt Template** text. It is replaced with the product value when content is generated.
:::

---

## Edit a Template

1. In the template list, click **Edit** in the row of your template.
2. Change the fields.
3. Click **Save Template**.

![Edit prompt template form](/images/seller/edit-prompt-templat-form.webp)

You can edit only your own templates. Admin templates open with **View**.

---

## Use a Template

1. Open [AI Configuration](/seller/configuration.md).
2. Set **Enable Prompt Templates** to **Yes**.
3. Select the template in **Product Description Prompt Template**.
4. Click **Save Config**.

---

## Delete Templates

Select your templates in the list and choose **Actions > Delete**.

::: tip
The admin can view, edit, and delete seller templates from the admin panel.
:::
