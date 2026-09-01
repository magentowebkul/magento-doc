# Translation Basics

Two paths write translations. Both end in the same table, and both use whatever provider
and model the store view is configured with.

| Path | Trigger | Page |
| --- | --- | --- |
| Automatic | A review is saved with status **Approved** | [Automatic Translation](./automatic.md) |
| Bulk | `php bin/magento Translate:All` | [Bulk CLI Command](./cli.md) |

The full pipeline diagram is on [How It Works](../how-it-works.md).

## What gets translated

| Translated | Not translated |
| --- | --- |
| Review **title** (summary) | Nickname |
| Review **body** (detail) | Rating / stars |
| | Customer ID, product data, order history |

## What gets stored

One row per review **per store view** in `ai_review_translation_list`, holding the
translated body, the translated title, and the locale. See
[Data Model](../developers/data-model.md).

Deleting the review, product, or store view cascades the translation away.

## Only approved reviews

A review submitted by a customer starts as **Pending**. Nothing is translated until it is
approved. Both paths filter on approved status — the observer checks it before publishing,
and the bulk command loads only approved reviews.

## Re-running is safe

Both paths upsert against `(review_id, product_id, store_id)`. Editing an approved review
updates its existing row; re-running the bulk command updates rows in place. You never get
duplicates.

## Next

- [What Is Sent to the Model](./prompt.md)
- [Fallback Behaviour](./fallbacks.md)
- [Automatic Translation](./automatic.md)
- [The Queue Consumer](./queue.md)
