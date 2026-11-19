# Frequently Asked Questions (FAQ)

Find answers to common questions about **Magento 2 Google Address Auto Complete**, Google Cloud setup, multi-store setups, and compatibility.

---

### General Questions

#### What is required to use Google Address Auto Complete?
You need a valid Google Maps API Key with the **Maps JavaScript API** and **Places API (New)** enabled. For testing and development, you can generate an instant key without a credit card from the official [Google Maps Demo Key](https://developers.google.com/maps/documentation/javascript/demo-key) page, or create a production key in the Google Cloud Console.

#### Does Google Address Auto Complete work on mobile browsers?
Yes! The autocomplete dropdown is fully responsive and touchscreen-optimized. It significantly reduces typing effort and virtual keyboard switching on mobile devices, which directly improves mobile checkout completion rates.

---

### Configuration & Multi-Store

#### Can I use different Google API keys for different store views?
Yes. The Google Map API Key setting in **Stores > Configuration > Google Address Autofill** supports Magento's standard configuration scoping (Default Config, Website, and Store View). You can configure unique API keys with tailored referrer restrictions for separate websites or domains.

#### Does the extension support multi-language and RTL (Right-to-Left) stores?
Yes. The extension is 100% compatible with Magento's localization framework (`i18n`). It includes full support for RTL languages like Arabic and Hebrew as well as standard European languages.

#### Can I restrict address suggestions to specific countries?
Yes. The Google Places Autocomplete API supports country filtering parameters. If your store only delivers to select countries (e.g., United States and Canada), country restrictions can be specified to limit returned predictions.

---

### Compatibility & Performance

#### What is the benefit of Database Address Caching?
When address caching is enabled in your admin settings, verified address results are cached. When customers search for matching addresses, suggestions load directly from the cache instantly without waiting for an external network response. This accelerates address lookups and ensures high performance.

#### Does this extension slow down my store?
No. The extension loads address services smoothly in the background without affecting your store's page loading speed. Keystroke debouncing also ensures that requests only occur when a customer pauses while typing, keeping your store fast.

#### Does it work with Hyvä Themes and Hyvä Checkout?
Yes. Webkul provides a companion package designed specifically for Hyvä Themes and Hyvä Checkout, ensuring full compatibility out of the box.

#### Is the extension compatible with Adobe Commerce and B2B?
Yes. The extension is tested and compatible with Adobe Commerce, Adobe Commerce Cloud, and Magento Open Source, including B2B customer workflows.

---

### Support & Customization

#### Where can I request support or report a bug?
You can create a support ticket directly through the Webkul helpdesk at [Webkul UVdesk Support](https://webkul.uvdesk.com/en/customer/create-ticket/).

#### Can Webkul help customize the extension for our custom theme?
Yes. Webkul offers professional customization services. You can reach out via [Webkul Magento Development Services](https://webkul.com/magento-development/) to discuss custom styling, specialized address parsing rules, or proprietary checkout module integrations.
