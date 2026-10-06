# Configuration Overview

The **Webkul Magento 2 OpenStreetMap Address AutoComplete** extension provides accurate, real-time address suggestion and multi-field auto-population across both the storefront and the Magento Admin Panel.

This guide outlines the system architecture, request flow, address field normalization logic, and supported integration points.

---

## How It Works

Rather than querying external geocoding servers directly from the customer's browser, the module uses a **secure backend proxy pattern**. When a customer types into a street address field, the module waits briefly (debounce), then sends the query through Magento's own server to OpenStreetMap. The server fetches matching addresses and returns them as a clean dropdown list. When the customer selects a suggestion, all address fields are filled automatically.

**The key steps at a glance:**

1. Customer types at least 3 characters into a Street Address field.
2. After a short pause (300ms by default), a request is sent through Magento's backend.
3. Magento queries OpenStreetMap's Nominatim API server-side and normalizes the result.
4. A dropdown list of matching addresses appears below the field.
5. Customer clicks or selects an address — all fields populate instantly.

---

## Supported Integration Points

The extension automatically binds to address forms across 5 key areas of Magento:

| Area | Context | Supported Forms | Config Setting |
|---|---|---|---|
| **Storefront** | One-Page Checkout | Shipping Address & Billing Address | `openstreetmap_autocomplete/frontend/enable_checkout` |
| **Storefront** | Customer Account | Customer Address Book (New / Edit Address) | `openstreetmap_autocomplete/frontend/enable_customer_address` |
| **Admin** | Order Placement | Admin Create Order (Billing & Shipping) | `openstreetmap_autocomplete/admin/enable_create_order` |
| **Admin** | Customer Management | Admin Customer Address Edit tab | `openstreetmap_autocomplete/admin/enable_customer_address` |
| **Admin** | Sales Order View | Admin Edit Order Address form | `openstreetmap_autocomplete/admin/enable_order_address` |

---

## Field Normalization & Mapping Logic

The module translates OpenStreetMap's geocoding schema into standard Magento customer address fields via `Webkul\OpenStreetMapAddressAutoComplete\Model\Address\Parser`:

| Magento Address Field | OpenStreetMap / Nominatim Source | Fallback / Resolution Strategy |
|---|---|---|
| **Street Line 1** | `house_number` + `road` | `pedestrian`, `footway`, `cycleway`, `path`, or first segment of `display_name` |
| **Street Line 2** | `suburb` | `neighbourhood`, `district`, or `city_district` (skips duplicates of line 1, city, or region) |
| **City** | `city` | `town`, `village`, `municipality`, `suburb`, `district`, or `county` |
| **State / Region** | `state` | `state_district` or `county` |
| **Region ID (`region_id`)** | Magento Directory Region Collection | Matched against ISO 3166-2 code or region name for selected `country_id` |
| **Postcode** | `postcode` | Trimmed postal string |
| **Country ID (`country_id`)** | `country_code` | Converted to uppercase 2-letter ISO 3166-1 alpha-2 code |
| **Latitude & Longitude** | `lat`, `lon` | Preserved in search payload for custom extensions or map pins |

---

## Dedicated System Logging

To assist store administrators and developers with debugging and integration monitoring, all API transactions, parsing steps, and HTTP responses are recorded in a dedicated log file:

```
<magento-root>/var/log/openstreetmap_autocomplete.log
```

Log entries include:
- `Request`: Sanitized query text and parameters.
- `API`: Target endpoint URL and HTTP status codes.
- `Response`: Number of matches returned by the geocoding provider.
- `Parser`: Successfully resolved address components and `region_id` mapping.
- `Error`: Connection timeouts, HTTP 429 rate limit triggers, or parse exceptions.

::: tip Next Step
Proceed to [Configuration Settings](/configuration/settings) to configure search limits, country filters, and UI options.
:::
