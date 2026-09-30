# Requirements

Before installing the **Webkul Magento 2 OpenStreetMap Address AutoComplete** extension, verify that your server environment and Magento instance meet the following prerequisites.

---

## Environment Compatibility

| Component | Requirement | Recommended |
|---|---|---|
| **Magento Platform** | Adobe Commerce / Magento Open Source 2.4.4 – 2.4.9 | 2.4.7 or later |
| **PHP Version** | 8.1, 8.2, 8.3, 8.4, 8.5 | PHP 8.2 / 8.3 / 8.4 |
| **Database** | MySQL 8.0+ or MariaDB 10.4+ | MySQL 8.0.35+ |
| **Web Server** | Apache 2.4+ or Nginx 1.18+ | Nginx with PHP-FPM |
| **cURL Extension** | PHP cURL with OpenSSL (HTTPS support) | Enabled |
| **Outbound Connectivity** | Outbound HTTPS (Port 443) access to Nominatim endpoint | Unrestricted |
| **Node.js** (for documentation) | Node 20.x or 22.x, npm 10.x | Node 22.x LTS |

---

## Magento Framework Dependencies

The extension integrates with core Magento checkout, customer, directory, sales, and UI modules, as declared in its `composer.json`:

```json
{
  "name": "webkul/module-openstreetmapaddressautocomplete",
  "require": {
    "magento/framework": "103.0.*",
    "magento/module-backend": "102.0.*",
    "magento/module-customer": "103.0.*",
    "magento/module-checkout": "100.4.*",
    "magento/module-directory": "100.4.*",
    "magento/module-sales": "103.0.*",
    "magento/module-ui": "101.2.*",
    "webkul/module-base": "^4.0"
  }
}
```

::: important Webkul Base Module
Ensure `webkul/module-base` version `^4.0` is installed. It provides core utilities, license management interfaces, and administrative menu layout structures shared across Webkul extensions.
:::

---

## Hyvä Theme Requirements

If your store uses the **Hyvä Theme**, you must also install the companion Hyvä compatibility module: `Webkul_OpenStreetMapAddressAutoCompleteHyva`.

| Component | Requirement |
|---|---|
| **Hyvä Theme** | Hyvä Themes (any supported version) |
| **Hyvä Compat Module Fallback** | `hyva-themes/magento2-compat-module-fallback ^1.0` |
| **Base Module** | `Webkul_OpenStreetMapAddressAutoComplete ^4.0.0` must be installed first |

The Hyvä module replaces the RequireJS-based JavaScript layer with a native inline script that integrates seamlessly with Alpine.js and Magewire-powered checkout pages. It requires no additional configuration beyond what is already set up in the base module.

---

## Network & API Connectivity

Because autocomplete queries are resolved via server-side cURL requests (`Webkul\OpenStreetMapAddressAutoComplete\Model\Api\Client`), your web server must be capable of establishing outbound HTTPS connections:

1. **Public Nominatim Service**:
   - Host: `https://nominatim.openstreetmap.org/search`
   - Port: `443`
   - Firewall: Allow outbound traffic from the web server IP to OpenStreetMap endpoints.
2. **Self-Hosted Nominatim (Private Endpoint)**:
   - If hosting your own Nominatim instance inside a local network, ensure the internal URL is reachable from Magento PHP-FPM workers without proxy blocks.

You can verify server-side connectivity from your terminal:

```bash
curl -I -A "Magento2-Webkul-OpenStreetMapAddressAutoComplete/4.0.0 (test@yourdomain.com)" \
  "https://nominatim.openstreetmap.org/search?q=London&format=jsonv2&limit=1"
```

A response of `HTTP/2 200` confirms network connectivity.

---

## Nominatim Usage Policy Compliance

When utilizing the free public OpenStreetMap Nominatim endpoint, merchants must adhere to the [Nominatim Usage Policy](https://operations.osmfoundation.org/policies/nominatim/):

- **User-Agent Header**: Nominatim requires a distinct, informative `User-Agent` header identifying the application and domain. The extension automatically generates this header.
- **Contact Email**: Providing a valid contact email in the module settings (`openstreetmap_autocomplete/general/contact_email`) appends your email to the `User-Agent`, enabling Nominatim administrators to contact you if query traffic requires attention rather than abruptly blocking your server IP.
- **Rate Limit**: The public Nominatim server limits client requests to a maximum of 1 request per second. The extension includes client-side keystroke debouncing (default: 300ms), minimum character thresholds (default: 3 chars), and in-memory caching to stay well within operational thresholds.
- **Heavy Volume / Bulk Queries**: For stores with high concurrent checkout traffic, deploying a self-hosted Nominatim container is recommended.

---

## Filesystem Permissions

Ensure the Magento filesystem owner user (e.g., `www-data` or your server's deployment user) has appropriate read and write permissions to standard Magento directories:

```bash
chmod -R 775 app/code generated pub/static var
chown -R www-data:www-data app/code generated pub/static var
```

::: warning Run Commands as Magento User
Never execute Magento CLI commands or file operations as `root`. Always run commands as the Magento filesystem owner.
:::

::: tip Next Step
Once your environment is verified, proceed to [Installation](/installation).
:::
