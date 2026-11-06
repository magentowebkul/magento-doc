# Shipping Origin & Store Information

For Shippo to accurately compute live shipping quotes and calculate freight distances, your store's origin warehouse location and store business information must be configured.

---

## 1. Configure Shipping Origin Address

The origin address represents the physical warehouse or store location from which parcels are dispatched.

1. In Magento Admin, navigate to **Stores > Configuration > Sales > Shipping Settings > Origin**.
2. Complete all required origin fields:
   * **Country:** Select your warehouse country.
   * **Region / State:** Enter or select the administrative state/province.
   * **ZIP / Postal Code:** Enter the postal code of the fulfillment location.
   * **City:** City name.
   * **Street Address:** Physical street address line (and building/suite number if applicable).
3. Click **Save Config**.

![Origin Settings](/images/shipping-origin.webp)

::: warning Origin Address Accuracy
Shippo's carrier validation engines verify both origin and destination addresses when quoting real-time rates. An invalid or incomplete origin postal code or street name will prevent carrier rate lookups from succeeding.
:::

---

## 2. Store Business Information

Ensure your store business details are populated for carrier invoice and label compliance:

1. Navigate to **Stores > Configuration > General > General > Store Information**.
2. Specify your **Store Name**, **Store Phone Number**, **VAT / Tax ID**, and complete business mailing address.
3. Click **Save Config**.

![Store Information](/images/store-information.webp)

---

## 3. Product Catalog Dimensions

When Shippo calculates freight rates, it takes into account both parcel gross weight and package volume.

Make sure your catalog items have:
* **Weight:** Set in product inventory data.
* **Length, Width, Height (Dimensions):** Configured in catalog product attributes.

::: warning Mandatory Dimensions & Weight
Every catalog item must have **Weight**, **Length**, **Width**, and **Height** configured with values greater than `0`. Shippo requires all four dimensions to calculate accurate freight charges; if any dimension is missing or `0`, the module will not return shipping rates for the cart.
:::
