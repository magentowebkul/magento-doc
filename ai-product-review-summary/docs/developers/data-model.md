# Data Model

## Table `wk_ai_review_summary_list`

| Column | Type | Notes |
| --- | --- | --- |
| `entity_id` | int, PK, auto-increment | |
| `product_id` | int, nullable | Catalog product entity ID |
| `ai_review_summary` | text | The generated paragraph |
| `status` | smallint, default `1` | Reserved; not used |
| `store_id` | smallint | Store view ID |

There is one row per product and store view. Regeneration updates that row in place.

There are no foreign keys. Rows are removed only when the product is deleted through
Magento (the `catalog_product_delete_after_done` event). Deleting products directly in SQL
leaves orphan rows.

## Repository

`Webkul\AIProductReviewSummary\Api\ProductReviewSummaryRepositoryInterface` provides
`getById()`, `save()`, `delete()`, and `deleteById()`. It is not exposed over REST or
GraphQL.

## Events the module listens to

| Event | Area | Effect |
| --- | --- | --- |
| `controller_action_postdispatch_review_product_massupdatestatus` | adminhtml | Regenerate summaries of the selected reviews' products |
| `controller_action_predispatch_review_product_massdelete` | adminhtml | Regenerate from the reviews that remain |
| `catalog_product_delete_after_done` | global | Delete the product's summaries |

## Configuration paths

All under `aiproductreviewsummary/general/`:

`status`, `ai_model`, `llm_api_key_enabled`, `ollama_endpoint`, `llm_model`, `api_key`
(encrypted).

Next: [Useful SQL](./sql.md).
