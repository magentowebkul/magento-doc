# GraphQL API

The Marketplace Show Seller on Category extension fully supports headless and PWA architectures by exposing GraphQL queries to fetch category seller listings and filter options.

---

## Products Query Extension

The module extends the standard `products` GraphQL query with two custom fields: `sellerCollection` and `sellerFilterOptions`.

### Endpoint
* **URL:** `{base_url}/graphql`
* **Method:** `POST`

---

## Query Schema

```graphql
{
  products(
    search: ""
    filter: { category_id: { eq: 4 } }
    pageSize: 5
    sort: {}
  ) {
    sellerCollection {
        seller_id
        name
        categoryId
        logoPic
        rating
        productCount
        orderCount
    }
    sellerFilterOptions {
        key
        value {
            count
            label
            url
        }
    }
  }
}
```

### Fields Description

| Field | Type | Description |
|---|---|---|
| `sellerCollection` | List | Returns the details of the sellers operating under the specified category. |
| `seller_id` | Int | Unique seller ID. |
| `name` | String | Seller's name/shop name. |
| `categoryId` | Int | Current category ID. |
| `logoPic` | String | URL to the seller's profile logo. |
| `rating` | Float | Average rating score of the seller. |
| `productCount` | Int | Number of active products listed by the seller under this category. |
| `orderCount` | Int | Count of completed orders. |
| `sellerFilterOptions` | List | Return list of available filter options (e.g., rating ranges, locations) with matching item counts and URLs. |

---

## Response Example

```json
{
    "data": {
        "products": {
            "sellerCollection": [
                {
                    "seller_id": 2,
                    "name": "John Doe",
                    "categoryId": 4,
                    "logoPic": "http://yourstore.com/media/avatar/noimage.png",
                    "rating": 0,
                    "productCount": 4,
                    "orderCount": 1
                }
            ],
            "sellerFilterOptions": [
                {
                    "key": "rating",
                    "value": [
                        {
                            "count": 1,
                            "label": "0 to 1 star",
                            "url": "http://yourstore.com/graphql?rating=1"
                        },
                        {
                            "count": 0,
                            "label": "1 to 2 star",
                            "url": "http://yourstore.com/graphql?rating=2"
                        }
                    ]
                },
                {
                    "key": "country",
                    "value": [
                        {
                            "count": 1,
                            "label": "United States",
                            "url": "http://yourstore.com/graphql?country=US"
                        }
                    ]
                }
            ]
        }
    }
}
```

---

## CategoryPageData Query Extension

This module also extends the `CategoryPageData` GraphQL type (often used in headless/PWA category pages) to fetch seller collection and filters optimized for the active category context.

### Fields Added
* `mpsellerCollection`: Returns the list of sellers associated with the active category.
* `mpsellerFilterOptions`: Returns the available filter options (ratings, countries) for the active category.

### Query Schema Example
```graphql
{
  categoryPageData(id: 4) {
    mpsellerCollection {
      seller_id
      name
      categoryId
      logoPic
      rating
      productCount
      orderCount
    }
    mpsellerFilterOptions {
      key
      value {
        count
        label
        url
      }
    }
  }
}
```

### Fields Description

| Field | Type | Description |
|---|---|---|
| `mpsellerCollection` | List | Returns the details of the sellers operating under this category. |
| `mpsellerFilterOptions` | List | Returns list of available filter options (e.g., rating, country) for the category page. |

### Response Example

```json
{
  "data": {
    "categoryPageData": {
      "mpsellerCollection": [
        {
          "seller_id": 2,
          "name": "John Doe",
          "categoryId": 4,
          "logoPic": "http://yourstore.com/media/avatar/noimage.png",
          "rating": 0,
          "productCount": 4,
          "orderCount": 1
        }
      ],
      "mpsellerFilterOptions": [
        {
          "key": "rating",
          "value": [
            {
              "count": 1,
              "label": "0 to 1 star",
              "url": "http://yourstore.com/graphql?rating=1"
            },
            {
              "count": 0,
              "label": "1 to 2 star",
              "url": "http://yourstore.com/graphql?rating=2"
            }
          ]
        },
        {
          "key": "country",
          "value": [
            {
              "count": 1,
              "label": "United States",
              "url": "http://yourstore.com/graphql?country=US"
            }
          ]
        }
      ]
    }
  }
}
```
