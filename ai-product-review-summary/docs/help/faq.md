# FAQ

## Does Webkul see my reviews or my API key?

No. Calls go straight from your server to your chosen provider. Nothing is proxied through
Webkul.

## Which provider should I use?

Any of them produces a good 120-word summary. Pick the one you already have an account with,
or [Ollama](../providers/ollama.md) if review text must stay on your servers.

## How much will it cost?

One request per product per store view, each containing that product's review text. A
nightly bulk run on 1,000 reviewed products in one store view is 1,000 requests. Small, cheap
models keep this low.

## Are ratings, titles, or reviewer names sent?

No. Only the review text of approved reviews. See
[What Is Sent to the Model](../generating/prompt.md).

## Can I edit a summary by hand?

Not from the admin. You can update the `ai_review_summary` column directly — see
[Data Model](../developers/data-model.md) — but the next regeneration overwrites it.

## Can I change the prompt or the word limit?

Not from the admin. The prompt is fixed in the module.

## Can each store view get a summary in its own language?

The summary language follows the locale active when generation runs, not each store view's
locale, so all store views get the same language. For per-language summaries, contact
[support](https://webkul.uvdesk.com/) about a customisation.

## Is there a REST or GraphQL API?

No.

## Does it work with Hyvä?

The module targets Luma-based themes. Hyvä needs a compatibility layer.

## What happens when I uninstall?

The `wk_ai_review_summary_list` table remains until you drop it. Your reviews are never
modified.

## Where do I get help?

Raise a ticket at [webkul.uvdesk.com](https://webkul.uvdesk.com/). Include the module version
from **Product Information** and the relevant lines from `var/log/system.log`.
