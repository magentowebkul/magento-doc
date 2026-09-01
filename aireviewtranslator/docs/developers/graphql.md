# GraphQL API

For PWA Studio or any headless storefront, one query returns both the original and the
translated version of every approved review on a product.

**Endpoint:** `https://<your-store>/graphql`

## The query

```graphql
query {
  getTranslatedReview(productId: 1, storeId: 1) {
    review_id
    original_review {
      title
      detail
    }
    translated_review {
      title
      detail
    }
    store_id
    product_id
    language_code
    nickname
    customer_id
    created_at
  }
}
```

### Arguments

| Argument | Type | Required | Notes |
| --- | --- | --- | --- |
| `productId` | `Int!` | Yes | Catalog product entity ID. `0` or missing raises *Invalid Product.* |
| `storeId` | `Int!` | Yes | Store view whose translations you want. Defaults to `1` if omitted. |

## The response

```json
{
  "data": {
    "getTranslatedReview": [
      {
        "review_id": 1,
        "original_review": {
          "title": "test review",
          "detail": "hello from harsh"
        },
        "translated_review": {
          "title": "Test review",
          "detail": "Hello from Harsh.\n"
        },
        "store_id": 1,
        "product_id": 1,
        "language_code": "en_US",
        "nickname": "customer1",
        "customer_id": null,
        "created_at": "05/08/2025"
      }
    ]
  }
}
```

### Fields

| Field | Type | Notes |
| --- | --- | --- |
| `review_id` | `Int` | Magento review ID. |
| `original_review` | `ReviewContent` | `title` and `detail` as the customer wrote them. |
| `translated_review` | `ReviewContent` | The translation. Falls back to the original when a field is empty. |
| `store_id` | `Int` | Echoes the requested store view. |
| `product_id` | `Int` | Echoes the requested product. |
| `language_code` | `String` | Locale of the translation. Empty when untranslated. |
| `nickname` | `String` | Review author's display name. |
| `customer_id` | `Int` | `null` for guest reviews. |
| `created_at` | `String` | Formatted `MM/DD/YYYY` in the store's timezone. |

Only **approved** reviews are returned.

::: tip Detecting an untranslated review
Compare `translated_review` against `original_review`, or check `language_code` — it is
empty when no translation row exists.
:::

## Authentication

The query is public. No customer token is needed, matching Magento's own review data being
public on the storefront.

::: warning Nickname and customer_id are returned unauthenticated
Both are already visible on the storefront, but if your policy is stricter, do not expose
this query through a public gateway without filtering the response.
:::

## Errors

| Message | Cause |
| --- | --- |
| `Invalid Product.` | `productId` was `0` or absent. |
| `Invalid Request` | The query was called with no arguments at all. |

## Schema

```graphql
type Query {
    getTranslatedReview(productId: Int!, storeId: Int!): [TranslatedReviewDetailsType]
}

type TranslatedReviewDetailsType {
    review_id: Int
    original_review: ReviewContent
    translated_review: ReviewContent
    store_id: Int
    product_id: Int
    language_code: String
    nickname: String
    customer_id: Int
    created_at: String
}

type ReviewContent {
    title: String
    detail: String
}
```

Example calls are on [Querying from Code](./examples.md).
