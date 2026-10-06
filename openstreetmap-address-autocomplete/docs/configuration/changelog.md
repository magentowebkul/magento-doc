# Release Notes & Changelog

Track version history, new features, compatibility updates, and improvements for **Webkul Magento 2 OpenStreetMap Address AutoComplete**.

---

## Release Legend

| Icon | Classification | Description |
|:---:|---|---|
| `+` | **Feature** | New functionality or integration capability added. |
| `-` | **Bug Fix** | Resolution of defects or edge-case behavior. |
| `*` | **Refactoring** | Code quality, architecture, or performance enhancement. |

---

## Hyvä Compatibility Module — Version 1.0.0

*Initial Release — Hyvä Theme Edition*

### Compatibility & Platform Updates
- `+` **Magento Compatibility**: Compatible with Adobe Commerce and Magento Open Source `^2.4.9` and PHP 8.5.
- `+` **Hyvä Theme Support**: Full compatibility with Hyvä Themes storefront.

### Storefront Integration
- `+` **Hyvä Checkout Autocomplete**: Address suggestion and auto-population on Hyvä-powered checkout pages.
- `+` **Customer Address Form**: Address autocomplete integrated into the Customer Address form on Hyvä storefronts (`customer_address_form.xml`).
- `+` **Alpine.js Region Resolution**: Smart integration with Alpine.js reactive state for automatic region/state selection using `setCountry`, `availableRegions`, and `selectedRegion`.
- `+` **Magewire Checkout Support**: Retry-based region population strategy for Magewire-rendered checkout components with multiple timed attempts (0ms, 50ms, 150ms, 300ms, 600ms, 1000ms, 1500ms, 2500ms).
- `+` **Hyvä CSP Compliance**: Inline scripts are registered with Hyvä's CSP helper (`$hyvaCsp->registerInlineScript()`) automatically.
- `+` **Multi-Layout Coverage**: Dedicated layout handles for all Hyvä page contexts:
  - `default_hyva.xml` — Hyvä default pages
  - `hyva_checkout_index_index.xml` — Hyvä Checkout checkout page
  - `hyva_checkout.xml` — Hyvä Checkout general layout
  - `hyva_default.xml` — Hyvä general default pages
  - `checkout_index_index.xml` — Standard Magento checkout
  - `customer_address_form.xml` — Customer address form pages
- `+` **Luma Conflict Prevention**: Automatically removes the base module's Luma block (`openstreetmap_autofill_form`) on Hyvä pages to prevent duplicate script injection.

---

## Base Module — Version 4.0.0

*Release Date: Current Production Release*

### Compatibility & Platform Updates
- `+` **Magento Compatibility**: Verified and certified compatible with Adobe Commerce and Magento Open Source `^2.4.9` (and backward-compatible with versions `2.4.4` through `2.4.8`).
- `+` **PHP 8.5 Support**: Full compatibility with PHP 8.1, 8.2, 8.3, 8.4, and the latest PHP 8.5 runtimes.
- `*` **Strict Typing**: Standardized with `declare(strict_types=1);` and full PSR-12 coding standard compliance across all helper, model, controller, and block classes.

### Storefront Enhancements
- `+` **Checkout Autocomplete Integration**: Seamless address suggestion and multi-field auto-population on One-Page Checkout for both Shipping Address and Billing Address forms.
- `+` **Customer Account Section**: Address autocomplete integrated into the Customer Address Book (New Address and Edit Address forms).
- `+` **Dynamic Context Detection**: Automatically differentiates between checkout and customer account contexts, applying granular administrator toggle settings (`isCheckoutEnabled`, `isCustomerAddressEnabled`).
- `+` **Asynchronous Region Resolver**: 400ms synchronization window allows Magento's asynchronous region loader to populate country-specific states and select matching region IDs automatically.

### Admin Panel Capabilities
- `+` **Admin Create Order**: Complete address autocomplete on Billing and Shipping address forms during backend order placement (`sales/order_create/index`).
- `+` **Same-as-Billing Synchronization**: Automatically duplicates selected billing address fields to shipping fields when "Same as Billing" is checked.
- `+` **Admin Customer Address Management**: Autocomplete support when adding or modifying addresses from the backend Customer Edit interface (`customer/index/edit`).
- `+` **Admin Order Address Management**: Real-time autocomplete suggestions when modifying order delivery or billing addresses on existing sales orders (`sales/order_address/edit`).

### Search Engine & Architecture
- `+` **Nominatim Engine Integration**: Direct integration with OpenStreetMap's Nominatim Search API (`format=jsonv2`, `addressdetails=1`).
- `+` **Custom Endpoint Support**: Option to specify private self-hosted Nominatim instances for unrestricted query volume and internal data sovereignty.
- `+` **Country Restriction Multiselect**: Restricts autocomplete suggestions to merchant-selected country codes.
- `+` **Result Type Filtering**: Filter suggestions by category (`country`, `state`, `city`, `settlement`, `street`, `postcode`, `amenity`).
- `+` **Search Bias (Viewbox)**: Geographic bounding box bias coordinates (`min_lon,min_lat,max_lon,max_lat`) to prioritize local results.
- `+` **Extensible Provider Pool**: Modular `ProviderInterface` and `ProviderPool` architecture allowing seamless registration of custom geocoding providers.
- `+` **Client-Side Debouncing & In-Memory Caching**: 300ms keystroke debounce and in-memory session caching minimize redundant outbound network requests.
- `+` **Dedicated System Logging**: Separate logging channel outputting to `var/log/openstreetmap_autocomplete.log`.

::: tip Need Assistance?
If you have questions about upgrading or feature compatibility, refer to [Troubleshooting](/help/troubleshooting) or contact [Webkul Support](https://webkul.uvdesk.com/).
:::
