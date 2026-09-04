# GraphQL API

The whole storefront flow is available over GraphQL, so a PWA or headless front end can offer
quoting without the Luma or Hyvä templates.

Point your client at the store's usual `/graphql` endpoint. Customer operations use the standard
`Authorization: Bearer <customer token>` header; guest operations identify the cart by a masked
ID instead.

## Queries

| Query | Returns |
|---|---|
| `raqConfig` | The storefront settings — whether quoting is on, guests are allowed, minimums, attachment rules, dynamic fields |
| `raqCart` | The open quote cart of the customer, or of the guest identified by `raq_cart_id` |
| `raqQuotes` | The submitted quotes of the signed-in customer, filtered and paged |
| `raqQuote` | One quote, by `id` for the owner or by `token` for a guest |

Two fields are added to existing types:

| Field | On | Meaning |
|---|---|---|
| `wk_raq_enabled` | `ProductInterface` | Whether this product can be quoted |
| `quote_system_enabled` | `storeConfig` | Whether the extension is on for this store |

## Mutations

| Mutation | Does |
|---|---|
| `createRaqCart` | Creates an empty guest quote cart and returns its masked ID |
| `addProductsToRaqCart` | Adds products with the price the buyer proposes |
| `updateRaqCartItems` | Changes quantity, proposed price or note on lines |
| `removeItemFromRaqCart` | Removes a line — child lines go with their parent |
| `clearRaqCart` | Empties the quote cart |
| `submitRaqCart` | Sends the request, or starts email verification |
| `verifyRaqQuote` | Confirms the emailed code |
| `resendRaqVerificationCode` | Sends the code again |
| `postRaqMessage` | Posts a conversation message |
| `markRaqQuoteRead` | Clears the buyer's unread count |
| `purchaseApprovedQuote` | Adds an approved quote to the shopping cart at the negotiated prices |

## A guest flow, end to end

```graphql
mutation {
  createRaqCart {
    raq_cart_id
  }
}
```

Keep the returned `raq_cart_id` and pass it to every later call.

```graphql
mutation {
  addProductsToRaqCart(
    raq_cart_id: "aBcD1234..."
    cart_items: [
      {
        sku: "24-MB01"
        quantity: 10
        requested_price: 28.50
        note: "Bulk order for a corporate gift run."
      }
    ]
  ) {
    raq_cart {
      items { id product { name } quantity requested_price }
      subtotal { value currency }
    }
  }
}
```

```graphql
mutation {
  submitRaqCart(input: {
    raq_cart_id: "aBcD1234..."
    email: "buyer@example.com"
    firstname: "Alex"
    lastname: "Brown"
    note: "Please quote for delivery before the end of the month."
  }) {
    quote { increment_id status }
    requires_verification
  }
}
```

If `requires_verification` comes back `true`, a code has been emailed — confirm it:

```graphql
mutation {
  verifyRaqQuote(input: { raq_cart_id: "aBcD1234...", code: "123456" }) {
    quote { increment_id status }
  }
}
```

## Product options

Options use the same inputs as Magento's own `addProductsToCart`, so anything your front end
already does for the shopping cart works here unchanged:

| Input | Use |
|---|---|
| `selected_options` | Chosen option UIDs — configurable variants, dropdown custom options |
| `entered_options` | Values the customer types |
| `bundle_options` | Bundle selections |
| `grouped_options` | The children of a grouped product — specific to quoting |
| `dynamic_fields` | Answers to your [dynamic form](/configuration/dynamic-form) fields |

::: tip
For a configurable, pass the **child** SKU as `sku` and the parent's as `parent_sku`, exactly as
`addProductsToCart` expects.
:::

## Attachments

Attachments can be **read** over GraphQL but not uploaded — Magento's GraphQL endpoint has no
multipart upload. Headless front ends that need uploads should post the file to a REST endpoint
of their own and attach it server-side.

## Full reference

Every type, field and argument is documented in `API.md`, shipped in the extension package as
`UserGuideGraphQl.txt`. The schema is also introspectable, so tools like GraphQL Playground and
Altair will autocomplete against it.
