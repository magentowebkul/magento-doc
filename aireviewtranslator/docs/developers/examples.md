# Querying from Code

Examples against [`getTranslatedReview`](./graphql.md).

## curl

```bash
curl -s https://example.com/graphql \
  -H 'Content-Type: application/json' \
  -d '{"query":"{ getTranslatedReview(productId: 1, storeId: 1) { review_id language_code original_review { title } translated_review { title } } }"}'
```

## JavaScript

```js
const res = await fetch("/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
      query TranslatedReviews($productId: Int!, $storeId: Int!) {
        getTranslatedReview(productId: $productId, storeId: $storeId) {
          review_id
          original_review { title detail }
          translated_review { title detail }
          language_code
        }
      }
    `,
    variables: { productId: 1, storeId: 1 },
  }),
});

const { data } = await res.json();
```

## React — render with a toggle

```jsx
function Reviews({ reviews }) {
  const [showOriginal, setShowOriginal] = useState({});

  return reviews.map((r) => {
    const shown = showOriginal[r.review_id] ? r.original_review : r.translated_review;
    const translated = r.language_code !== "";

    return (
      <article key={r.review_id}>
        <h3>{shown.title}</h3>
        <p>{shown.detail}</p>
        {translated && (
          <button onClick={() => setShowOriginal((s) => ({ ...s, [r.review_id]: !s[r.review_id] }))}>
            {showOriginal[r.review_id] ? "Show translated review" : "Show original review"}
          </button>
        )}
      </article>
    );
  });
}
```

`language_code` is the reliable "is this actually translated" flag — it is empty when no
translation row exists.

## PHP — the service contracts

Inside Magento, prefer the repository over the model and collection classes:

```php
use Webkul\AIReviewTranslator\Api\ReviewTranslationRepositoryInterface;

public function __construct(
    private readonly ReviewTranslationRepositoryInterface $translations
) {
}
```

| Interface | Purpose |
| --- | --- |
| `Api\Data\ReviewTranslationInterface` | The translation entity. |
| `Api\ReviewTranslationRepositoryInterface` | Load, save, and delete translations. |

## Caching

The response only changes when a review is approved or re-translated, so it is a good
candidate for Varnish or a CDN cache keyed by product and store view.
