# REST API

Two REST endpoints let a headless storefront or a mobile app show the same recommendation blocks as the Magento storefront.

1. **`getAiRecommendationList`** returns the active recommendation blocks for a page.
2. **`getAiRecommendation`** returns the recommended products for one block.

Both endpoints use `GET` and need no authentication.

---

## 1. List Recommendation Blocks

```http:no-line-numbers
GET /rest/V1/getAiRecommendationList/?data[page_type]=2&data[current_category_id]=5
```

### Parameters

| Parameter | Type | Description |
|---|---|---|
| `data[page_type]` | int | Page context: `1` Home, `2` Category, `3` Product, `4` Cart, `5` Order Confirmation. |
| `data[current_category_id]` | int | Current category ID. Used with `page_type=2`. |
| `data[recommendation_type]` | string | Optional. Returns only blocks of this type, for example `userrecommendation`. |

### Examples

```bash:no-line-numbers
# Home page blocks
curl "https://<your-store-url>/rest/V1/getAiRecommendationList/?data[page_type]=1"

# Category page blocks for category 18
curl "https://<your-store-url>/rest/V1/getAiRecommendationList/?data[page_type]=2&data[current_category_id]=18"

# Product page blocks
curl "https://<your-store-url>/rest/V1/getAiRecommendationList/?data[page_type]=3"

# Only User blocks on the home page
curl "https://<your-store-url>/rest/V1/getAiRecommendationList/?data[page_type]=1&data[recommendation_type]=userrecommendation"
```

### Response

```json
{
  "items": [
    {
      "entity_id": "1",
      "status": "1",
      "name": "Trending",
      "page_type": "[\"2\",\"3\",\"1\"]",
      "recommendation_type": "[\"trendingbasedrecommendation\",[\"1\",\"2\",\"3\",\"4\",\"5\"]]",
      "start_timing": "2026-03-03 10:50:00",
      "end_timing": "2026-04-29 09:50:00",
      "product_count": "3",
      "sort_order": "1",
      "filter_child_category": "0",
      "applied_filters": "",
      "filter_status": "0",
      "created_at": "2026-03-31 09:51:02",
      "updated_at": "2026-04-06 05:54:16"
    }
  ]
}
```

Pass each block's `recommendation_type`, `product_count`, `filter_child_category`, `filter_status`, and `applied_filters` to the second endpoint.

---

## 2. Get Recommended Products

```http:no-line-numbers
GET /rest/V1/getAiRecommendation/?data[recommendation_type]=["textsimilarityrecommendation"]&data[product_count]=10&data[current_product_id]=2
```

### Common parameters

| Parameter | Description |
|---|---|
| `data[recommendation_type]` | JSON array with one type code. |
| `data[product_count]` | Number of products to return. |
| `data[filter_status]` | Optional. `1` applies `data[applied_filters]`. |
| `data[applied_filters]` | Optional. The filters saved on the block. |

### Parameters by type

| Type code | Required | Optional |
|---|---|---|
| `trendingbasedrecommendation` | `product_count` | `filter_status`, `applied_filters` |
| `reviewratingrecommendation` | `product_count` | `filter_status`, `applied_filters` |
| `categoryrecommendation` | `product_count`, `current_category_id` | `filter_child_category`, `filter_status`, `applied_filters` |
| `textsimilarityrecommendation` | `product_count`, `current_product_id` | `filter_status`, `applied_filters` |
| `visualsimilarityrecommendation` | `product_count`, `current_product_id` | `filter_status`, `applied_filters` |
| `userrecommendation` | `product_count`, `user_id` | `filter_status`, `applied_filters` |
| `recentlyviewedrecommendation` | `customer_id` | `product_count`, `filter_status`, `applied_filters` |

### Examples

```bash:no-line-numbers
# Trending
curl -g 'https://<your-store-url>/rest/V1/getAiRecommendation/?data[recommendation_type]=["trendingbasedrecommendation"]&data[product_count]=10'

# Category, including child categories
curl -g 'https://<your-store-url>/rest/V1/getAiRecommendation/?data[recommendation_type]=["categoryrecommendation"]&data[product_count]=10&data[current_category_id]=18&data[filter_child_category]=1'

# Visual Similarity for product 42
curl -g 'https://<your-store-url>/rest/V1/getAiRecommendation/?data[recommendation_type]=["visualsimilarityrecommendation"]&data[product_count]=10&data[current_product_id]=42'

# User recommendations for customer 25
curl -g 'https://<your-store-url>/rest/V1/getAiRecommendation/?data[recommendation_type]=["userrecommendation"]&data[product_count]=10&data[user_id]=25'
```
<ExplainCode explanation="The -g flag stops curl from treating the square brackets in the query string as a URL pattern." />

### Response

```json
{
  "items": {
    "id_0": {
      "entity_id": "1",
      "product_name": "test product",
      "sku": "test product",
      "is_saleable": true,
      "image": "https://<store-url>/media/catalog/product/cache/.../fiery-red_33.png",
      "product_url": "https://<store-url>/test-product.html",
      "price": 100,
      "final_price": "$100.00",
      "add_cart_action": "https://<store-url>/checkout/cart/add/product/1/",
      "wishlist_allow": true,
      "reviews_count": null,
      "rating_summary": null,
      "param_name_url_encode": "uenc",
      "form_key": "nwNlzmoxyJhdWYce"
    }
  }
}
```

The full response also includes `post_params`, `wishlist_params`, and `compare_params`. They carry the action URL and data for **Add to Cart**, **Add to Wish List**, and **Add to Compare**. URLs, encoded values, and form keys are generated per request.
