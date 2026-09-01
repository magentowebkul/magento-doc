# Data Model

Everything the extension stores lives in one table. Magento's own `review` tables are never
modified — the original review is always intact.

## `ai_review_translation_list`

| Column | Type | Notes |
| --- | --- | --- |
| `entity_id` | `int unsigned` | Primary key, auto-increment. |
| `product_id` | `int unsigned` | FK → `catalog_product_entity.entity_id`, `ON DELETE CASCADE`. |
| `review_id` | `bigint unsigned` | FK → `review.review_id`, `ON DELETE CASCADE`. |
| `store_id` | `smallint unsigned` | FK → `store.store_id`, `ON DELETE CASCADE`. |
| `language_code` | `text` | Locale of the translation, e.g. `de_DE`. |
| `review_message` | `text` | Translated review **body**. |
| `review_message_summary` | `text` | Translated review **title**. |
| `created_at` | `timestamp` | Defaults to insert time. |
| `updated_at` | `timestamp` | Updated on write. |

::: tip Deletes cascade
Delete a review, a product, or a store view and its translations go with it. There is no
orphan cleanup to schedule.
:::

## The grain

One row per **review × store view**. The natural key is
`(review_id, product_id, store_id)`, and both the queue consumer and the CLI command upsert
against it — re-running never duplicates.

::: warning No unique index enforces the grain
Uniqueness is maintained in application code, not by a database constraint. Writing rows
with your own SQL can create duplicates the storefront then reads unpredictably. Go through
the repository — see [Querying from Code](./examples.md).
:::

## Queue and bulk tables

Translation messages use Magento's core message-queue tables on the `db` connection —
`queue`, `queue_message`, `queue_message_status` — plus `magento_bulk` and
`magento_operation` for the bulk-operation summary under **System → Bulk Actions**. The
module adds none of its own.

## Logging

```text
var/log/aireviewlogger.log
```

Queue publishes, per-store translation writes, and provider errors are written here.

Useful queries are on [Useful SQL](./sql.md).
