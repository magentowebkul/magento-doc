# Storefront Rate Calculation

When a customer navigates through checkout or views shipping estimates in the shopping cart, the **Marketplace USPS Shipping** carrier dynamically queries the USPS V3 Prices API to return live shipping quotes.

---

## The Checkout Experience

### 1. Estimating Shipping in Cart & Checkout
As soon as the customer provides their shipping address (destination country, state, and postal code), Magento requests rates from all enabled carriers.

![USPS Shipping Methods at Checkout](/images/buyer-checkout-usps-method.webp)

Each permitted USPS mail class (such as **USPS Ground Advantage**, **Priority Mail**, or **Priority Mail International**) appears under the carrier title defined in admin configuration (e.g., `Marketplace USPS`).

### 2. Multi-Seller Split Calculations
When a cart contains items from multiple vendors:
1. The carrier groups items by seller ID.
2. For each seller group, the origin address is resolved from that seller's **Shipping Setting**.
3. Total package weight for that seller's items is calculated.
4. Independent rate queries are dispatched to USPS for each package.
5. The shipping rates are combined according to the Marketplace Base Shipping rules.

![Shopping Cart Delivery Rates Overview](/images/checkout-shipping-rates.webp)

### 3. Order Review & Confirmation
After the customer selects their preferred USPS method, the chosen service and total shipping cost appear in the **Order Summary** sidebar on the payment step and the final order review page.

![Order Review Summary Page](/images/buyer-order-review-summary.webp)

---

## Technical Rate Calculation Pipeline

The calculation flow operates in `Webkul\MpUSPSShipping\Model\Carrier::collectRates()`:

```mermaid
sequenceDiagram
    autonumber
    actor Customer as Customer / Browser
    participant Cart as Magento Checkout
    participant Carrier as MpUSPSShipping Carrier
    participant Token as mpuspsshipping_token
    participant USPS as USPS V3 REST API

    Customer->>Cart: Enters Destination ZIP Code
    Cart->>Carrier: collectRates(RateRequest)
    Carrier->>Carrier: Resolve Seller Origin Address
    Carrier->>Token: Check Cached Access Token
    alt Token Missing or Expired
        Carrier->>USPS: POST /oauth2/v3/token
        USPS-->>Carrier: Return New Access Token
        Carrier->>Token: Cache Token with Expiration
    end
    Carrier->>USPS: POST /prices/v3/total-rates/search
    USPS-->>Carrier: Return Eligible Mail Classes & Prices
    Carrier->>Carrier: Filter by domestic_allow_methods
    Carrier->>Carrier: Apply Handling Fee (Fixed / %)
    Carrier-->>Cart: Return Rate Results
    Cart-->>Customer: Render USPS Options on Checkout
```

---

## Handling Fees & Price Adjustments

Store administrators can apply a markup to live carrier rates to cover handling, packaging materials, or warehouse fulfillment costs:

- **Fixed Fee Per Order:** Adds a flat surcharge once to the order (e.g., `$2.50` total).
- **Fixed Fee Per Package:** Multiplies the flat surcharge by the number of packages in the shipment.
- **Percent Fee:** Calculates a percentage markup based on the base USPS rate quote (e.g., `5%` markup).

Handling fees are seamlessly factored into the rate displayed to the customer.
