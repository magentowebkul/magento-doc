# Frequently Asked Questions

Answers to common questions regarding the installation, configuration, and operation of the **Webkul Magento 2 Make An Offer** extension.

---

## Can guest customers place price offers without creating an account?
Yes. When **Allowed For Guest User** is set to **Yes** under **Stores > Configuration > Webkul > Make An Offer**, unauthenticated visitors can submit offers by providing their email address. When the store administrator accepts the quotation, the guest receives an email containing a secure promotional purchase link to complete checkout.

---

## How does the module handle configurable products with child options?
The Make An Offer form dynamically detects child product attributes (such as color, size, and material). Customers pick their specific option combinations directly within the modal or tab form. The extension tracks the exact child SKU and original retail price, ensuring that negotiated pricing applies strictly to the selected variant.

---

## What happens if a customer negotiates for 5 units but changes the cart quantity to 1?
When the administrator accepts an offer, the promotion specifies both the negotiated unit price and the required **Product Qty** threshold. The generated cart rule enforces the agreed-upon quantity. If the customer decreases the cart quantity below the agreed terms, the special promotional rate will not apply.

---

## What happens when a promotion expires?
Each accepted offer includes an administrator-configured **Number of Days** validity window. Once that period lapses, the coupon is automatically invalidated, and the record is moved from the **Recent Promotions** tab to the **Old Promotions** tab. This frees up the customer to submit a new bargaining request for that product if desired.

---

## Can an administrator accept an offer that was previously declined?
Yes. If market conditions, inventory levels, or seasonal strategies change, store administrators can view previously declined offers in **Make An Offer > Manage Offer**, click **View**, and click **Accept** to generate a new promotion for the customer.

---

## How does the direct promotional checkout link work?
When an administrator accepts an offer, the extension creates a unique promotional coupon and generates a direct checkout URL. Clicking this link automatically loads the negotiated item and quantity into the customer's cart, applies the promotional discount code, and routes them directly to checkout without requiring manual code entry.

---

## Is this extension compatible with the Hyvä Theme?
Yes. The extension offers full compatibility with [Hyvä Theme](https://webkul.com/hyva-theme-development/) via the official companion module `Webkul_MakeAnOfferHyva` (`webkul/makeanoffer-hyva`), providing ultra-fast Alpine.js components and Tailwind CSS styling.

---

## Can I customize the promotional coupon code prefix?
Yes. Under **Stores > Configuration > Webkul > Make An Offer > General Settings**, you can set any custom text in the **Promo code Prefix** field (such as `Webkul_`, `BARGAIN-`, or `VIP-`). Generated coupons will follow the format `<PREFIX><RANDOM_STRING>`.

---

## Are GraphQL APIs available for headless commerce?
Yes. The module includes native GraphQL schema definitions (`etc/schema.graphqls`) supporting all customer and administrative actions, including listing offers, submitting offers, accepting/declining quotes, and retrieving promotion details.
