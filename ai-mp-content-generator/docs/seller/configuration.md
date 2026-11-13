# AI Configuration (Seller)

Each seller sets up AI content generation from their seller account. A seller can connect their own LLM, or use the admin's LLM configuration when the admin allows it.

---

## Open the Configuration Page

1. Log in to your seller account.
2. In the account menu, open **AI Marketplace Content Generator > Configuration**.

![AI Marketplace Content Generator menu in the seller account](/images/seller/menu.webp)

The page has three sections: **Status**, **LLM connection**, and **Content generation**.

![Seller General Settings: Status section](/images/seller/general-setting.webp)

---

## 1. Status

| Field | What it does |
|---|---|
| **Enable** | Turns AI content generation on or off for your products. When it is off, all other settings are locked. |
| **Use Admin LLM Configuration** | Shown only if the admin allows it. **Yes** generates with the marketplace LLM configuration, and a request limit may apply. **No** lets you connect your own LLM. |

::: tip
A new seller with no saved configuration uses the admin LLM configuration by default, if the admin allows it.
:::

---

## 2. LLM Connection

Skip this section if **Use Admin LLM Configuration** is **Yes**. The section then shows **"You are using the admin LLM configuration."**

To connect your own LLM, follow these steps in order:

1. Select the **LLM Provider**. The list shows only the providers the admin allows.
2. Paste your key in **API Key**. Click **Show** to check what you pasted.
3. Click **Validate LLM**. The status changes to **Validated** when the key is accepted.
4. Select a model in **LLM Model**. It unlocks only after validation.
5. Set **Temperature** from 0 to 1. Lower values give consistent, factual text. Higher values give more varied text.

![Seller LLM connection section](/images/seller/seller-config-llm.webp)

::: warning
* Your API key is stored encrypted. To change it, paste the new key again.
* Changing the provider or the key clears the validation. Validate again before saving.
* If the list says **"Currently no LLM providers are available."**, ask the admin to allow a provider for vendors.
:::

---

## 3. Content Generation

| Field | What it does |
|---|---|
| **Product Content Based on selected Attribute** | The product attribute the AI reads as its source when it writes content. |
| **SEO Attributes** | The meta attributes to fill. Shown only when the admin turns on SEO content. |
| **Enable Prompt Templates** | **Yes** uses a saved prompt template instead of the default prompt. |
| **Product Description Prompt Template** | The template to use. Available when **Enable Prompt Templates** is **Yes**. |

![Seller Content generation section](/images/seller/seller-config-content-generation.webp)

---

## 4. Save

Click **Save Config**. The message **"You have successfully saved the configuration."** confirms the save.

* **Reset** discards unsaved changes.
* **« Back** returns to the previous page.
* **"You have unsaved changes."** means you edited a field and have not saved.

---

## Request Limit with Admin Credentials

When you use the admin LLM configuration, the admin sets a limit on requests per minute. If you go over it, you see:

> Rate limit exceeded. Please try again after some time.

Wait one minute and try again. Sellers using their own API key have no limit.
