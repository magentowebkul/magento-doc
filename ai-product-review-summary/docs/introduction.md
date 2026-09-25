---
title: Magento 2 ChatGPT Product Review Summary
---

# Introduction

A shopper deciding between two products should not have to scroll through forty reviews to
learn what people actually think. The **Magento 2 ChatGPT Product Review Summary**
extension reads every approved review of a product and asks a large language model to
write one short paragraph — what customers like first, then what they dislike — shown under
a **Customers Say** heading on the product page.

The reviews themselves are never changed. Each summary is stored in its own table, one row
per product and store view, and the storefront shows it above the review list.

<p>
  <a href="https://store.webkul.com/magento2-ai-product-review-summary.html" target="_blank" rel="noopener">Buy Now</a>
  &nbsp;·&nbsp;
  <a href="https://webkul.uvdesk.com/" target="_blank" rel="noopener">Support</a>
</p>

## Who it is for

| You are… | This extension gives you… |
| --- | --- |
| A merchant with well-reviewed products | A quick verdict shoppers can read in ten seconds. |
| A merchant with a large review back catalogue | One command that summarises every product. |
| A privacy-conscious merchant | A self-hosted option, so review text never leaves your server. |
| A multi-store merchant | A separate summary for every store view. |

## Bring your own model

The extension is **provider-agnostic**. It talks to nine LLM providers through the
[Symfony AI](https://github.com/symfony/ai) platform layer (and to Ollama directly), so
switching from a hosted model to a self-hosted one is a dropdown change, not a re-install.

You supply the API key (or the Ollama endpoint). Nothing is proxied through Webkul, and
generation is billed by your provider.

See [Provider Overview](./providers/overview.md).

## Next

1. [Key Features](./features.md) — what it can and cannot do.
2. [How It Works](./how-it-works.md) — the pipeline in one diagram.
3. [Requirements](./installation/requirements.md) — before you install.
