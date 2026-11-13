# General Settings

All admin settings live on one configuration page. They control the admin LLM connection and what sellers are allowed to do.

---

## Open the Configuration

Use either path:

* **Stores > Configuration > Webkul > Marketplace AI Content Generator**
* **Marketplace > AI Marketplace Content Generator > Seller's AI Configuration Setting**

![AI Marketplace Content Generator admin menu](/images/admin/menu.webp)

---

## 1. Connect the LLM

| Field | What it does |
|---|---|
| **Enable Module** | Turns the module on or off. All other fields stay hidden while it is **No**. |
| **LLM Provider** | The AI provider: Gemini AI, OpenAI, Anthropic, OpenRouter, Cerebras, DeepSeek, Cohere AI, or Mistral AI. |
| **API Key** | Your key from the provider's dashboard. Stored encrypted. |
| **LLM validation** | The **Validate LLM** button. Checks the key and loads the models it can use. |
| **LLM Model** | The model used to generate content. Locked until the key is validated. |
| **Temperature** | A number from 0 to 1. Default is 1. Lower values give consistent, factual text. Higher values give more varied text. |

### Validate the API key

Follow these steps in order:

1. Select the **LLM Provider**.
2. Paste the **API Key**.
3. Click **Validate LLM**. The button shows **Validating...** while it runs.
4. Wait for the message **"API key validated. Select a model and save the configuration."** The button changes to **✓ Validated**.
5. Select a model from **LLM Model**.
6. Click **Save Config**.

![LLM provider, model, and validated API key](/images/admin/config-llm-setting.webp)

During validation, the module asks the provider for the models your key can use. It lists only chat models. Audio, realtime, embedding, image, and transcription models are left out. It then sends a short test prompt to confirm the model answers.

::: warning
* Until you validate, **LLM Model** shows **"-- Validate API key to load models --"**.
* Changing the provider or the API key clears the validation. Validate again before saving.
* Saving without validation fails with **"Please validate selected LLM configuration before saving."**
:::

::: tip
If the provider's package is not installed, a note under **LLM Model** shows the `composer require` command to run. See [Installation](/installation.md).
:::

---

## 2. Seller Access to Admin Credentials

| Field | What it does |
|---|---|
| **Use Admin credentials if Seller credentials are not available** | **Yes** lets sellers generate content through the admin LLM connection. Sellers then choose whether to use it. |
| **Seller Content Generation Rate Limit** | Shown when the field above is **Yes**. Maximum requests per minute for each seller using the admin credentials. Default is 10. Must be a whole number greater than 0. |

How the limit works:

* It counts requests per seller in a 60-second window.
* It applies only to sellers using the admin LLM configuration. Sellers on their own API key have no limit.
* A seller who goes over the limit sees **"Rate limit exceeded. Please try again after some time."**

![Admin credentials for sellers and rate limit](/images/admin/config-allow-seller-to-use-admin-config.webp)

---

## 3. Content Settings

| Field | What it does |
|---|---|
| **Product Content Based on selected Attribute** | The product attribute the AI reads as its source, such as the product name. |
| **Allowed Content Generation Attributes** | The product attributes AI may write, for the admin and for sellers, one at a time and in bulk. Default: `description`, `short_description`, `meta_title`, `meta_keyword`, `meta_description`. |
| **Import SEO Content** | **Yes** turns on SEO meta content generation. |
| **SEO Attributes** | Shown when **Import SEO Content** is **Yes**. The meta attributes to fill, grouped under Product, Category, and CMSPage. |
| **Allow LLM Providers for Vendors** | The providers sellers can pick on their own configuration page. |

::: warning
If **Allowed Content Generation Attributes** is empty, AI generation for product attributes is turned off for everyone. The **Magic Content Generation** button is also hidden.
:::

**Allowed Content Generation Attributes** lists text, text area, text editor, and Page Builder attributes. System attributes such as `sku`, `url_key`, and layout fields are excluded.

![Content generation attributes and SEO settings](/images/admin/config-content-generation.webp)

---

## 4. Prompt Template Settings

| Field | What it does |
|---|---|
| **Enable Prompt Templates** | **Yes** replaces the built-in prompt with a template you choose. |
| **Product Description Prompt Template** | Template for product descriptions. |
| **Category Description Prompt Template** | Template for category descriptions. |
| **CMS Page Prompt Template** | Template for CMS page content. |

The template lists show admin templates only. Create them in [Prompt Templates](/admin/prompt-templates.md).

---

## Configuration Scope

Every field can be set at the **Default Config**, **Website**, and **Store View** scope. Use the scope switcher to use a different provider or model per store view.

---

## Next Step

Go to [Prompt Templates](/admin/prompt-templates.md).
