# Cart & Checkout

The **Cart** and **Checkout** pages help shoppers review products, apply discounts, choose shipping, pay, and place the order.

## Cart page

The cart page can show:

| Area | What it does |
| --- | --- |
| **Cart items** | Shows product image, name, selected options, price, quantity, subtotal, and actions. |
| **Quantity update** | Lets shoppers change quantity and update the cart. |
| **Remove item** | Removes a product from the cart. |
| **Edit item** | Opens the product again when the item has options. |
| **Clear cart** | Removes all products when this option is enabled. |
| **Continue Shopping** | Sends shoppers back to the storefront. |
| **Discount code** | Lets shoppers apply or remove a coupon code. |
| **Shipping estimate** | Lets shoppers estimate shipping before checkout. |
| **Totals** | Shows subtotal, discount, shipping, tax, and grand total. |
| **Proceed to Checkout** | Starts checkout. |

When the cart is empty, the page shows a clear empty-cart message and a **Continue Shopping** button.

## Product types in cart

The cart supports the theme product types:

- Simple products
- Configurable products
- Bundle products
- Grouped products
- Downloadable products
- Virtual products

Check that selected options show clearly in the cart. For example, a configurable ring should show the selected metal color and ring size.

## Checkout page

The theme uses a Hyvä checkout flow. The checkout can show:

| Area | What it does |
| --- | --- |
| **Sign in or register** | Lets existing customers sign in or new customers continue. |
| **Shipping address** | Collects shipping address for physical products. |
| **Billing address** | Collects billing address when needed. |
| **Shipping method** | Lets shoppers choose an available shipping method. |
| **Payment method** | Lets shoppers choose a payment method. |
| **Discount code** | Lets shoppers apply a coupon during checkout. |
| **Order summary** | Shows cart items and totals. |
| **Terms and conditions** | Shows agreement checkbox when enabled. |
| **Place Order** | Places the final order. |
| **Success page** | Shows the order success message after purchase. |

For virtual or downloadable products, checkout may skip shipping address if no physical delivery is needed.

## How to test cart and checkout

1. Add a simple product to cart.
2. Add a configurable product with selected options.
3. Add a bundle product if your store uses bundles.
4. Open the cart page.
5. Change quantity and click **Update Shopping Cart**.
6. Apply a discount code if one is active.
7. Test shipping estimate.
8. Remove one product.
9. Click **Proceed to Checkout**.
10. Enter address, shipping, and payment details.
11. Place a test order.
12. Check the order success page.

## Good practice

- Test checkout with guest users and signed-in customers.
- Test at least one physical product and one virtual or downloadable product if your store sells them.
- Make sure shipping and payment methods are active before going live.
- Keep coupon codes simple and easy to type.
- Check the cart and checkout on mobile.
