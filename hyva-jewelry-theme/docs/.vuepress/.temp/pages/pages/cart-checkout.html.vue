<template><div><h1 id="cart-checkout" tabindex="-1"><a class="header-anchor" href="#cart-checkout"><span>Cart &amp; Checkout</span></a></h1>
<p>The <strong>Cart</strong> and <strong>Checkout</strong> pages help shoppers review products, apply discounts, choose shipping, pay, and place the order.</p>
<h2 id="cart-page" tabindex="-1"><a class="header-anchor" href="#cart-page"><span>Cart page</span></a></h2>
<p>The cart page can show:</p>
<table>
<thead>
<tr>
<th>Area</th>
<th>What it does</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Cart items</strong></td>
<td>Shows product image, name, selected options, price, quantity, subtotal, and actions.</td>
</tr>
<tr>
<td><strong>Quantity update</strong></td>
<td>Lets shoppers change quantity and update the cart.</td>
</tr>
<tr>
<td><strong>Remove item</strong></td>
<td>Removes a product from the cart.</td>
</tr>
<tr>
<td><strong>Edit item</strong></td>
<td>Opens the product again when the item has options.</td>
</tr>
<tr>
<td><strong>Clear cart</strong></td>
<td>Removes all products when this option is enabled.</td>
</tr>
<tr>
<td><strong>Continue Shopping</strong></td>
<td>Sends shoppers back to the storefront.</td>
</tr>
<tr>
<td><strong>Discount code</strong></td>
<td>Lets shoppers apply or remove a coupon code.</td>
</tr>
<tr>
<td><strong>Shipping estimate</strong></td>
<td>Lets shoppers estimate shipping before checkout.</td>
</tr>
<tr>
<td><strong>Totals</strong></td>
<td>Shows subtotal, discount, shipping, tax, and grand total.</td>
</tr>
<tr>
<td><strong>Proceed to Checkout</strong></td>
<td>Starts checkout.</td>
</tr>
</tbody>
</table>
<p>When the cart is empty, the page shows a clear empty-cart message and a <strong>Continue Shopping</strong> button.</p>
<h2 id="product-types-in-cart" tabindex="-1"><a class="header-anchor" href="#product-types-in-cart"><span>Product types in cart</span></a></h2>
<p>The cart supports the theme product types:</p>
<ul>
<li>Simple products</li>
<li>Configurable products</li>
<li>Bundle products</li>
<li>Grouped products</li>
<li>Downloadable products</li>
<li>Virtual products</li>
</ul>
<p>Check that selected options show clearly in the cart. For example, a configurable ring should show the selected metal color and ring size.</p>
<h2 id="checkout-page" tabindex="-1"><a class="header-anchor" href="#checkout-page"><span>Checkout page</span></a></h2>
<p>The theme uses a Hyvä checkout flow. The checkout can show:</p>
<table>
<thead>
<tr>
<th>Area</th>
<th>What it does</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Sign in or register</strong></td>
<td>Lets existing customers sign in or new customers continue.</td>
</tr>
<tr>
<td><strong>Shipping address</strong></td>
<td>Collects shipping address for physical products.</td>
</tr>
<tr>
<td><strong>Billing address</strong></td>
<td>Collects billing address when needed.</td>
</tr>
<tr>
<td><strong>Shipping method</strong></td>
<td>Lets shoppers choose an available shipping method.</td>
</tr>
<tr>
<td><strong>Payment method</strong></td>
<td>Lets shoppers choose a payment method.</td>
</tr>
<tr>
<td><strong>Discount code</strong></td>
<td>Lets shoppers apply a coupon during checkout.</td>
</tr>
<tr>
<td><strong>Order summary</strong></td>
<td>Shows cart items and totals.</td>
</tr>
<tr>
<td><strong>Terms and conditions</strong></td>
<td>Shows agreement checkbox when enabled.</td>
</tr>
<tr>
<td><strong>Place Order</strong></td>
<td>Places the final order.</td>
</tr>
<tr>
<td><strong>Success page</strong></td>
<td>Shows the order success message after purchase.</td>
</tr>
</tbody>
</table>
<p>For virtual or downloadable products, checkout may skip shipping address if no physical delivery is needed.</p>
<h2 id="how-to-test-cart-and-checkout" tabindex="-1"><a class="header-anchor" href="#how-to-test-cart-and-checkout"><span>How to test cart and checkout</span></a></h2>
<ol>
<li>Add a simple product to cart.</li>
<li>Add a configurable product with selected options.</li>
<li>Add a bundle product if your store uses bundles.</li>
<li>Open the cart page.</li>
<li>Change quantity and click <strong>Update Shopping Cart</strong>.</li>
<li>Apply a discount code if one is active.</li>
<li>Test shipping estimate.</li>
<li>Remove one product.</li>
<li>Click <strong>Proceed to Checkout</strong>.</li>
<li>Enter address, shipping, and payment details.</li>
<li>Place a test order.</li>
<li>Check the order success page.</li>
</ol>
<h2 id="good-practice" tabindex="-1"><a class="header-anchor" href="#good-practice"><span>Good practice</span></a></h2>
<ul>
<li>Test checkout with guest users and signed-in customers.</li>
<li>Test at least one physical product and one virtual or downloadable product if your store sells them.</li>
<li>Make sure shipping and payment methods are active before going live.</li>
<li>Keep coupon codes simple and easy to type.</li>
<li>Check the cart and checkout on mobile.</li>
</ul>
</div></template>


