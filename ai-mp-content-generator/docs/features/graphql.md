# GraphQL API

Two GraphQL queries let a headless storefront or a seller app generate product content. Both act on behalf of a seller.

---

## Authentication

Every request passes two arguments:

* `sellerEmail` — the seller's email address.
* `sellerToken` — a customer token for that seller. Get it with Magento's `generateCustomerToken` mutation.

The token must belong to the customer with that email, and the customer must be a seller.

---

## List the Allowed Attributes

Returns the product attributes the seller can generate content for.

```graphql
query {
  getAllowedProductContentAttributes(
    sellerEmail: "seller@example.com"
    sellerToken: "<customer-token>"
  ) {
    code
    label
  }
}
```

Response:

```json
{
  "data": {
    "getAllowedProductContentAttributes": [
      { "code": "description", "label": "Description" },
      { "code": "short_description", "label": "Short Description" },
      { "code": "meta_title", "label": "Meta Title" }
    ]
  }
}
```

---

## Generate Product Content

Sends one prompt and returns a value for each requested attribute.

```graphql
query {
  generateProductContent(
    sellerEmail: "seller@example.com"
    sellerToken: "<customer-token>"
    prompt: "Lightweight waterproof hiking jacket with taped seams and a packable hood"
    attributes: [
      { code: "description", label: "Description" }
      { code: "meta_title", label: "Meta Title" }
    ]
  ) {
    attributes {
      code
      label
      value
    }
  }
}
```

| Argument | Type | Description |
|---|---|---|
| `sellerEmail` | `String` | The seller's email. |
| `sellerToken` | `String` | The seller's customer token. |
| `prompt` | `String` | What the product is. |
| `attributes` | `[ProductContentAttributeInput!]` | The attributes to generate. `code` is required. `label` is optional. |

The query returns the content only. It does not save the product.

---

## Errors

| Message | Cause |
|---|---|
| Please provide valid seller credentials. | `sellerEmail` or `sellerToken` is missing. |
| Seller Authentication Failed. Please check credentials again. | The token does not match the email. |
| No valid seller credentials found. | The attribute list could not be loaded. Check the module configuration and the logs. |
| Invalid content generation request. | The prompt or attribute list is invalid. |
| Rate limit exceeded. Please try again after some time. | The seller uses admin credentials and went over the limit. |
