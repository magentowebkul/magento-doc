# Key Features

## What it does

| Feature | Detail |
| --- | --- |
| Per-store-view translation | One translation per review **per store view**, tagged with that store view's locale. |
| Title and body together | The review summary and the review text are translated in the same call. |
| Nine LLM providers | OpenAI, Gemini, Anthropic, Ollama, OpenRouter, Mistral AI, Cerebras, DeepSeek, Cohere. |
| Background processing | Approving a review queues the work; nothing blocks the admin save. |
| Batched bulk runs | 20 reviews per API call by default, tunable from the command line. |
| Storefront toggle | Shoppers switch between original and translated text in place, with no page reload. |
| GraphQL query | `getTranslatedReview(productId, storeId)` for headless storefronts. |
| Safe fallback | A review the model skips keeps its original text — never a blank review. |
| Store-view scoping | Different providers, models, and on/off states per store view. |
| Encrypted key storage | The API key is stored with Magento's encrypted config backend. |

## What it does not do

Worth knowing before you buy:

| Not included | Why |
| --- | --- |
| Translation credits | You bring your own provider account and pay that provider directly. |
| A target-language setting | The target language is the store view's locale, not a field. See [Store Views & Languages](./configuration/scope.md). |
| Translation of product content | Only product **reviews**. Names, descriptions, and CMS pages are untouched. |
| Review moderation | Approval stays a standard Magento workflow; the module only reacts to it. |
| A Hyvä storefront template | The storefront templates target the Luma structure. |
| Automatic re-translation on model change | Existing rows stay until you re-run the [bulk command](./translating/cli.md). |

## Version

This guide documents module version **4.0.4**, which added Cerebras, DeepSeek, and Cohere
support. The installed version is shown under **Product Information** in the configuration
section.

Next: [How It Works](./how-it-works.md).
