# Nominatim & Provider Architecture

The **Webkul Magento 2 OpenStreetMap Address AutoComplete** extension is built upon an extensible, service-oriented architecture centered around OpenStreetMap's **Nominatim** geocoding engine.

This guide explains how Nominatim handles address queries, how to configure public vs. self-hosted endpoints, and how developers can leverage the provider pool to introduce custom geocoding providers.

---

## What is Nominatim?

[Nominatim](https://nominatim.org/) is the open-source search engine that powers address search and reverse geocoding on the [OpenStreetMap](https://www.openstreetmap.org/) project. It indexes open geographic data contributed by millions of mappers worldwide, delivering rich structured address data without proprietary licensing costs.

When your store sends an address query, the module passes the following parameters to Nominatim:

- `q` — the search query (what the customer typed)
- `format=jsonv2` — returns structured JSON data
- `addressdetails=1` — includes full address breakdown (house number, road, city, state, country)
- `countrycodes` — optional country restriction
- `viewbox` — optional geographic bounding box bias
- `accept-language` — language preference for returned place names
- `featureType` — optional result type filter

---

## Public Endpoint vs. Self-Hosted Nominatim

Merchants have the flexibility to use either the official public OpenStreetMap server or deploy an internal, self-hosted Nominatim container:

| Capability | Public Nominatim Server | Self-Hosted Nominatim Server |
|---|---|---|
| **Endpoint URL** | `https://nominatim.openstreetmap.org/search` | Custom (e.g. `https://nominatim.yourstore.com/search`) |
| **Cost** | 100% Free | Infrastructure hosting costs only |
| **API Keys / Credit Card** | None required | None required |
| **Rate Limit** | 1 request per second (enforced by OSM) | Unlimited (governed by your hardware) |
| **Data Privacy** | Queries processed on OSM infrastructure | Queries remain entirely within your private network |
| **Ideal For** | Small to mid-sized eCommerce stores | High-volume merchants, flash sales, enterprise B2B |

---

## Configuring a Custom Nominatim Endpoint

To direct the extension to a private, self-hosted Nominatim instance:

1. In the Magento Admin Panel, go to **Stores → Configuration → Webkul → OpenStreetMap Address Autocomplete**.
2. Under **General Settings**, locate **Nominatim Endpoint URL**.
3. Replace the default URL with your private server endpoint:
   ```text
   https://nominatim.yourdomain.com/search
   ```
   *(Or an internal network address, e.g. `http://10.0.1.25:8080/search`)*.
4. Click **Save Config** and flush the configuration cache:
   ```bash
   php bin/magento cache:clean config
   ```

---

## API Client & Security

The extension's HTTP client (`Webkul\OpenStreetMapAddressAutoComplete\Model\Api\Client`) handles network transport using Magento's native cURL adapter with these safeguards:

1. **User-Agent Generation**:
   Constructs a standards-compliant header identifying your store domain and optional contact email:
   ```text
   Magento2-Webkul-OpenStreetMapAddressAutoComplete/4.0.0 (mystore.com; admin@mystore.com)
   ```
2. **Timeout Protection**:
   Enforces a strict 10-second timeout window. If the geocoding provider fails to respond in time, an exception is caught and a clean user-facing notice is returned without blocking page execution.
3. **HTTP Error Handling**:
   - **400 Bad Request**: Invalid search query format.
   - **401 / 403 Forbidden**: Access denied or blocked IP.
   - **429 Rate Limited**: Query rate limit exceeded; advises the user to wait briefly before retrying.
   - **500 / 502 / 503 Server Error**: Provider service outage handled gracefully.
4. **Credential Sanitization in Logs**:
   Before logging query parameters to `var/log/openstreetmap_autocomplete.log`, the client masks sensitive keys (`key`, `token`, `secret`, `password`) with `***`.

---

## Extensible Provider Architecture

The module utilizes the **Provider Pool Pattern**, making it easy for developers to add alternative geocoding backends without modifying core extension files.

### 1. `ProviderInterface.php`

Any custom geocoding provider must implement `Webkul\OpenStreetMapAddressAutoComplete\Model\Provider\ProviderInterface`:

```php
namespace Webkul\OpenStreetMapAddressAutoComplete\Model\Provider;

interface ProviderInterface
{
    /**
     * Search address suggestions
     */
    public function autocomplete(string $query, array $options = []): array;

    /**
     * Normalize provider response into standard address schema
     */
    public function normalizeResponse(array $response): array;
}
```

### 2. Registering a Custom Provider in `di.xml`

To register a new geocoding provider, declare your class in your custom module's `etc/di.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Webkul\OpenStreetMapAddressAutoComplete\Model\Provider\ProviderPool">
        <arguments>
            <argument name="providers" xsi:type="array">
                <item name="custom_provider" xsi:type="object">Vendor\CustomModule\Model\Provider\CustomProvider</item>
            </argument>
        </arguments>
    </type>
</config>
```

The new provider will immediately be accessible by code through `ProviderPool::getProvider('custom_provider')`.

::: tip Next Step
Review version updates and changes in [Release Notes & Changelog](/configuration/changelog).
:::
