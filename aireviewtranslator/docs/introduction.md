---
title: Magento 2 AI Review Translator
---

# Introduction

A shopper in your German store view should not have to read reviews written in English.
The **Webkul Magento 2 AI Review Translator** extension takes every approved product review
and translates it into the language of each store view, using a large language model you
choose and pay for directly.

The original review is never overwritten. Translations live in their own table, keyed by
review, product, and store view, and the storefront shows a link under each review so the
shopper can flip between the two.

<p>
  <a href="https://store.webkul.com/magento2-ai-review-translator.html" target="_blank" rel="noopener">Buy Now</a>
  &nbsp;·&nbsp;
  <a href="https://webkul.uvdesk.com/" target="_blank" rel="noopener">Support</a>
</p>

## Who it is for

| You are… | This extension gives you… |
| --- | --- |
| A multi-language merchant | Reviews readable in every store view's language. |
| A merchant with imported reviews | A bulk command to translate a back catalogue in one run. |
| A privacy-conscious merchant | A self-hosted option, so review text never leaves your server. |
| A developer | A GraphQL query returning both the original and the translation. |

## Bring your own model

The extension is **provider-agnostic**. It talks to nine LLM providers through the
[Symfony AI](https://github.com/symfony/ai) platform layer, so switching from a hosted
model to a self-hosted one is a dropdown change, not a re-install.

You supply the API key (or the Ollama endpoint). Nothing is proxied through Webkul, and
translation is billed by your provider.

See [Provider Overview](./providers/overview.md).

## Next

1. [Key Features](./features.md) — what it can and cannot do.
2. [How It Works](./how-it-works.md) — the pipeline in one diagram.
3. [Requirements](./installation/requirements.md) — before you install.
