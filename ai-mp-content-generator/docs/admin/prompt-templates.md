# Prompt Templates

A prompt template replaces the built-in prompt the module sends to the LLM. Use templates to control language, tone, writing style, and structure.

The admin manages two grids:

* **Prompt Templates** — templates the admin creates. Sellers can view and use them.
* **Seller's Prompt Template** — templates sellers create. The admin can view, edit, and delete them.

---

## Admin Prompt Templates

Go to **Marketplace > AI Marketplace Content Generator > Prompt Templates**.

The grid shows **ID**, **Template Title**, **Category**, **Sub Category**, **Template**, **Created At**, and **Updated At**. The **Prompt** column is hidden by default. Turn it on from **Columns**.

![Marketplace AIContentGenerator Prompt Templates grid](/images/admin/admin-prompt-template-form.webp)

### Create a template

1. Click **Add New Prompt Template**.
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

![Add Marketplace AIContentGenerator Prompt Template form](/images/admin/admin-add-new-prompt-template-form.webp)

The message **"Prompt Template saved successfully."** confirms the save.

* **Reset** clears your changes.
* **Go back** returns to the grid without saving.

::: tip The `{{importContentFor}}` variable
Put `{{importContentFor}}` in the **Prompt Template** text. When content is generated, it is replaced with the product value, for example the product name.

```text
Write an SEO-friendly product description for {{importContentFor}} in 150 words.
```
:::

### Edit a template

1. In the grid, click **Edit** in the row of the template.
2. Change the fields.
3. Click **Save Template**.

![Edit Marketplace AIContentGenerator Prompt Template form](/images/admin/admin-edit-prompt-template-form.webp)

### Use the template

1. Go to [General Settings](/admin/configuration.md).
2. Set **Enable Prompt Templates** to **Yes**.
3. Select your template in **Product Description Prompt Template**, **Category Description Prompt Template**, or **CMS Page Prompt Template**.
4. Click **Save Config**.

### Delete templates

Select rows in the grid, then choose **Actions > Delete**.

---

## Seller's Prompt Templates

Go to **Marketplace > AI Marketplace Content Generator > Seller's Prompt Template**.

This grid has the same columns as the admin grid, plus **Seller Name**. Click a seller name to open that customer's account.

* **Edit** a template: click **Edit** in the row. Change the fields in the **Edit Prompt Template** pop-up and click **Save Template**.
* **Delete** templates: select rows and choose **Actions > Delete**.

---

## Access Control

Admin user roles control access to each grid. Set them in **System > Permissions > User Roles > Role Resources > Marketplace Management > Menu > AI Marketplace Content Generator**.
