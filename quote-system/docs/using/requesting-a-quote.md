# Requesting a Quote

What the shopper does.

## From the product page

1. Open a quotable product.
2. Choose any options the product needs — a size, a bundle selection, a custom option.
3. Click **Add to Quote**.
4. The **Enter Quote Details** form opens:

   | Field | Meaning |
   |---|---|
   | **Quantity** | How many they want |
   | **Price per Item** | The price they are asking for |
   | **Note** | Anything they want to tell you about this line |
   | *Your custom fields* | If you configured a [dynamic form](/configuration/dynamic-form) |

5. Click **Submit**. The item joins their quote cart and the header count goes up.

The product's options travel with the request exactly as they would with Add to Cart, so a
configurable added as *Blue / Large* is quoted, approved and ordered as *Blue / Large*.

::: tip
The quantity in the form starts from the quantity on the product page, so a shopper who has
already set 10 does not have to type it twice.
:::

## From a category or search page

Products that need no configuring can be added straight from the listing card — the same form
opens over the page.

Products that need configuring first — configurable, bundle and grouped products, and anything
with required custom options — show a link to the product page instead. There is nothing on a
card to choose options with.

## By product type

| Type | What the shopper sees |
|---|---|
| Simple, Virtual | One quantity, price and note |
| Downloadable | The same, after choosing the links they want |
| Configurable | The same, after choosing the variant |
| Bundle | The same, after building the bundle — the form sits with Add to Cart in the customisation panel |
| Grouped | One block per child they gave a quantity to, each with its own price and note |

Grouped products are the special case: because a group is several products bought together, the
form asks for a price per child rather than one price for the group.

## Validation

The form will not submit if:

- a required product option has not been chosen — the shopper is asked to choose it first
- the quantity is below your [minimum quantity](/configuration/product-display)
- quantity × price is below your [minimum amount](/configuration/product-display)

## Submitting the request

Adding items builds the quote cart; it does not send anything. The shopper sends the request from
the [quote cart](/using/quote-cart).
