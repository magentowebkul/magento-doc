# FAQ

## General

### Does this replace the customer's original review?

No. The original stays untouched in Magento's own `review` tables. Translations go to a
separate table, and the storefront offers a link to switch between the two.

### Which languages are supported?

Whatever your model supports. The extension does not maintain a language list — it asks the
model to translate into the store view's locale.

### Where does the target language come from?

The store view's locale, at **Stores → Configuration → General → General → Locale Options**.
There is no target-language setting. See
[Store Views & Languages](../configuration/scope.md).

### Can different store views use different models?

Yes. Every field is store-view scoped. See [Switching Providers](../providers/switching.md).

### Does Webkul see my reviews?

No. Your Magento server calls the provider directly with your key. To keep review text
entirely on your own infrastructure, use [Ollama](../providers/ollama/install.md).

### What is actually sent to the model?

The review title and body only, as a JSON array, plus the target locale. See
[What Is Sent to the Model](../translating/prompt.md).

## Cost

### Who pays for the translation?

You do, directly to your LLM provider. The extension licence does not include tokens.

### How many API calls will a backfill make?

`(reviews × store views) ÷ batch size`. 350 reviews across 3 store views at the default
batch of 20 is 54 calls. See [Batch Size](../translating/batch-size.md).

### How do I keep the bill down?

- Use `-s` to translate only the store views you need.
- Keep the batch size high so fewer calls carry more reviews.
- Pick a small-tier model; translation rarely needs a frontier model.
- Or run [Ollama](../providers/ollama/install.md) and pay nothing per token.

### Does clicking "Validate Key and Load Models" cost anything?

A token or two. It sends a one-word prompt to confirm the key works. See
[How Validation Works](../providers/validation.md).

## Setup

### Do I need RabbitMQ?

No. The queue runs on the `db` connection using Magento's MySQL queue.

### Why do I have to install Symfony AI packages separately?

They are `suggest` entries in the module's `composer.json`, so Composer never installs them
automatically. See [Install the AI Packages](../installation/ai-packages.md).

### Can I use a model that is not in the dropdown?

No — the field is not free-text and only lists models the provider reports as text-in /
text-out. If one you expect is missing, check your key has access to it, then re-validate.

### Do I need to keep a process running?

For automatic translation of newly approved reviews, yes — the queue consumer. See
[Running the Consumer](../translating/queue-production.md).

## Behaviour

### When exactly does a review get translated?

When it is saved with status **Approved**. Approving is a save, so approval is the trigger.
See [Automatic Translation](../translating/automatic.md).

### What about reviews created before I installed the module?

They were never queued. Backfill with `php bin/magento Translate:All`.

### If I edit an approved review, is it re-translated?

Yes. The save re-publishes it and the existing row is updated in place.

### Is it safe to run the bulk command twice?

Yes. It upserts on review, product, and store view — updates, not duplicates.

### What happens if the model fails on one review?

That review keeps its original title and body. A blank review is never written. See
[Fallback Behaviour](../translating/fallbacks.md).

### What happens if I disable the module?

The storefront reverts to stock Magento reviews and the admin menu disappears. Existing
translations stay in the database and return when you re-enable it.

### Are translations deleted with the review?

Yes. Foreign keys cascade from `review`, `catalog_product_entity`, and `store`.

## Frontend

### Which text do shoppers see first?

The translated version, when one exists, with a link to show the original.

### The toggle is spelled "Show Orignal Review"

That is the string in the shipped `en_US` file. Override it in your own `i18n` CSV — see
[Translating the Interface](../installation/translations.md#fixing-the-toggle-typo).

### Will Google index the translated reviews?

Yes — the translation renders by default, inside Magento's standard `schema.org/Review`
markup.

### Does it work with a headless storefront?

Yes, through the [GraphQL API](../developers/graphql.md).

### Does it work with Hyvä?

The templates target the Luma structure. A Hyvä theme needs them ported — raise a
customisation request.

## Support

### Where do I get help?

[webkul.uvdesk.com](https://webkul.uvdesk.com/). Include your Magento version, PHP version,
module version, the provider and model in use, and the relevant part of
`var/log/aireviewlogger.log`.

### Where is the refund policy?

[store.webkul.com/refund-policy.html](https://store.webkul.com/refund-policy.html)
