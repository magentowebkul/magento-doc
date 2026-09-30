# Introduction

**Webkul OpenStreetMap Address AutoComplete for Magento 2** delivers fast, intelligent address suggestion and auto-population capabilities across your store without requiring expensive third-party mapping subscriptions.

Powered by **OpenStreetMap** and its **Nominatim** geocoding engine, the extension automatically displays matching address suggestions as users type into address street fields, instantly populating the street lines, city, state/province, postal code, and country upon selection.

The extension is available in two editions — one for the default **Luma/Blank** theme and a dedicated **Hyvä Themes** compatibility module — so your store benefits from native address autocomplete regardless of your storefront theme.

---

## Why OpenStreetMap Address Autocomplete?

In modern eCommerce, address entry friction is a primary contributor to checkout abandonment and delivery failures:

1. **Manual Entry Errors**: Misspelled street names, incorrect postal codes, and unmatched province names lead to failed parcel deliveries, return shipping expenses, and dissatisfied customers.
2. **Checkout Friction**: Manually filling out 5–6 address fields on mobile devices slows down the checkout process and increases cart drop-off rates.
3. **High Proprietary API Costs**: Many address autocomplete services (such as Google Places API) require active billing accounts, credit card requirements, and charge recurring fees per keystroke session, which can become costly as store traffic grows.

---

## How Webkul OpenStreetMap Solves It

The **Webkul OpenStreetMap Address AutoComplete** module provides an enterprise-grade solution that eliminates recurring API expenses while delivering seamless autocomplete workflows:

- **Zero API Subscription Fees**: Leverages OpenStreetMap's open geocoding ecosystem. You can use the official Nominatim service out of the box without credit card registration or subscription fees.
- **Self-Hosted Support**: Configure a custom self-hosted Nominatim endpoint for private server environments, higher request throughput, and complete data sovereignty.
- **Full Store Coverage**: Autocomplete suggestions are available wherever addresses are entered:
  - **Storefront Checkout**: Both Shipping Address and Billing Address forms.
  - **Customer Address Book**: New Address and Edit Address forms in the Customer Account dashboard.
  - **Admin Order Creation**: Backend order placement screen (`sales/order_create/index`) with automatic "Same as Billing" synchronization.
  - **Admin Customer Management**: Customer detail address editing in backend customer accounts (`customer/index/edit`).
  - **Admin Order Address Management**: Editing order addresses directly on existing orders (`sales/order_address/edit`).
- **Hyvä Themes Compatibility**: A dedicated companion module (`Webkul_OpenStreetMapAddressAutoCompleteHyva`) replaces the Luma-specific RequireJS layer with a pure inline JavaScript implementation that works natively with Alpine.js and Magewire-powered checkout pages.
- **Complete Address Mapping**: Automatically splits and formats house numbers, road names, suburbs/districts into street lines 1 and 2, maps city and municipality hierarchies, and maps states/provinces to Magento's native directory `region_id` database.
- **Secure Server-Side Proxy**: Autocomplete requests flow through Magento's backend controller rather than direct client-to-API calls, preventing CORS errors, enforcing input sanitization, and adding custom User-Agent identification compliant with the Nominatim Usage Policy.
- **Client-Side Optimization**: Built-in keystroke debouncing, minimum character thresholds, and in-memory request caching minimize unnecessary network requests.

---

## Key Features at a Glance

| Feature | Description |
|---|---|
| **OpenStreetMap & Nominatim** | Fast, free geocoding data without mandatory recurring API billing accounts. |
| **Custom Endpoint Support** | Seamlessly switch between official Nominatim and private self-hosted Nominatim servers. |
| **Storefront Checkout Autofill** | Integrated with Magento 2 checkout for both shipping and billing steps. |
| **Customer Account Address Book** | Suggests and populates addresses on customer address creation and edit forms. |
| **Admin Order Creation** | Full autocomplete support when administrators create orders in the backend. |
| **Same-as-Billing Sync** | Synchronizes autocomplete selections between billing and shipping addresses when linked. |
| **Admin Customer & Order Address Edit** | Autocomplete support for backend customer address and sales order address modifications. |
| **Automatic Region Resolution** | Matches OpenStreetMap state/region names and ISO codes with Magento Directory `region_id`. |
| **Country Restriction** | Filter autocomplete suggestions to specific merchant-selected countries. |
| **Result Type Filtering** | Target suggestions by feature type (country, state, city, settlement, street, postcode). |
| **Search Bias (Viewbox)** | Prioritize geographic areas by defining custom latitude/longitude bounding boxes. |
| **Debounce & Memory Caching** | Prevents rapid API spamming by debouncing input keystrokes and caching repeat queries. |
| **Extensible Provider Pool** | Built using `ProviderInterface` and `ProviderPool` for modular custom provider integration. |
| **Hyvä Themes Ready** | Dedicated companion module with Alpine.js and Magewire support for Hyvä storefronts. |

::: tip Next Step
Review server prerequisites and platform compatibility in [Requirements](/requirements).
:::
