# Frequently Asked Questions

Common questions and answers regarding the **Webkul Magento 2 OpenStreetMap Address AutoComplete** extension.

---

## General & Pricing

### Do I need an API key or credit card to use this extension?
**No.** OpenStreetMap and its official Nominatim geocoding service are open-source and free to access. You do not need to register a credit card, configure billing projects, or create developer API keys to start using the extension.

### How does this compare to Google Places Address Autocomplete?
Unlike Google Places Autocomplete:
- **Zero Recurring Fees**: Google charges recurring monthly fees per session or keystroke, which can escalate significantly on busy stores. OpenStreetMap is open-access and incurs zero API subscription charges.
- **No Mandatory Billing Registration**: No requirement for Google Cloud Console setup or credit card attachment.
- **Self-Hosting Freedom**: With OpenStreetMap, you can deploy your own private Nominatim server container to gain unlimited query throughput and total data sovereignty.

### Can I connect a self-hosted Nominatim instance?
**Yes.** Under **Stores → Configuration → Webkul → OpenStreetMap Address Autocomplete → General Settings**, you can replace the default endpoint with your own private URL (e.g. `https://nominatim.yourdomain.com/search`).

---

## Functional & Usability

### Which storefront forms support address autocomplete?
The extension natively supports:
- **One-Page Checkout**: Both the Shipping Address step and the Billing Address step.
- **Customer Account Dashboard**: The Customer Address Book (**Add New Address** and **Edit Address** screens).

### Does autocomplete work when creating orders in the Magento Admin Panel?
**Yes.** When creating orders via **Sales → Orders → Create New Order** (`sales/order_create/index`), autocomplete suggestions are active for both billing and shipping addresses.

### Does "Same as Billing" copy address autocomplete selections?
**Yes.** When the **Same as Billing Address** checkbox is selected during backend order creation, choosing an address for the billing address automatically duplicates the street lines, country, city, state/region, and postcode to the shipping address fields.

### Can I restrict autocomplete suggestions to specific countries?
**Yes.** Under **Address Search Settings → Country Restriction**, you can select one or multiple countries from Magento's Directory list. The search queries will strictly limit suggestions to the selected countries.

### How are states and provinces handled in country dropdowns?
The backend parser resolves OpenStreetMap state names and ISO codes against Magento's internal `directory_country_region` database. Upon selection, the module automatically sets the correct `region_id` in Magento's state selector dropdown.

---

## Technical & Integration

### Does this extension cause browser CORS issues?
**No.** Rather than calling external geocoding servers directly from the customer's browser, all requests pass through Magento's internal backend proxy controllers (`/openstreetmap/autocomplete/search`). This eliminates Cross-Origin Resource Sharing (CORS) errors and ensures all outbound calls carry compliant User-Agent headers.

### What are the debounce time and minimum character settings?
- **Minimum Characters** (default: `3`): The user must type at least this many characters before a search query is dispatched.
- **Debounce Time** (default: `300ms`): A brief delay after the user stops typing before sending the query. This prevents excessive network requests while typing.

### Can developers add custom geocoding providers?
**Yes.** The extension implements the **Provider Pool Pattern**. Developers can implement `Webkul\OpenStreetMapAddressAutoComplete\Model\Provider\ProviderInterface` and register custom providers under `Webkul\OpenStreetMapAddressAutoComplete\Model\Provider\ProviderPool` via `etc/di.xml`.

### Which Magento and PHP versions are supported?
The extension is compatible with **Adobe Commerce and Magento Open Source 2.4.4 through 2.4.9+**, running on **PHP 8.1, 8.2, 8.3, 8.4, and 8.5**.

### Does the extension work with Hyvä Themes?
**Yes.** A dedicated Hyvä compatibility module (`Webkul_OpenStreetMapAddressAutoCompleteHyva`) is available. It provides a native inline JavaScript implementation that integrates with Alpine.js and Magewire-powered checkout pages, replacing the Luma RequireJS approach. It also includes full CSP compliance for Hyvä's Content Security Policy requirements.

---

## Support & Customization

### Where can I get help or request custom feature development?
For technical assistance, bug reports, or custom modifications, visit the [Webkul UVdesk Support Portal](https://webkul.uvdesk.com/) or contact Webkul sales at [support@webkul.com](mailto:support@webkul.com).
