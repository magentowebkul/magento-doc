# Frequently Asked Questions

Find answers to common questions about **Marketplace USPS Shipping for Magento 2**.

---

### Does this extension support USPS Ground Advantage?
Yes. USPS Ground Advantage is fully supported and can be selected under **Allowed Domestic Mail Methods** in Magento admin settings.

---

### Can individual marketplace sellers use their own USPS accounts?
Yes. When the store administrator enables **Allow Sellers to Save USPS Details**, each seller can configure their own USPS Developer Portal Client ID, Client Secret, and Payment Account (EPS, Permit, or Meter) in their vendor dashboard under **USPS Configuration**.

---

### What happens if a seller does not configure their own USPS details?
If a vendor has not supplied USPS credentials, the module automatically falls back to the store administrator's global USPS credentials configured under **Delivery Methods** &rarr; **Marketplace USPS**.

---

### How are rates calculated when a cart contains products from multiple sellers?
The module calculates shipping rates independently for each seller's group of products based on that seller's configured **Shipping Setting** origin address and combined weight. The rates are then aggregated through Webkul's Marketplace Base Shipping framework.

---

### Can sellers generate official USPS shipping labels?
Yes. When creating an order shipment in the vendor portal, sellers can select the package container type, specify dimensions and weight, and generate an official printable USPS PDF shipping label with an Intelligent Mail barcode and tracking number.

---

### Where are the generated shipping labels stored?
Generated PDF labels are stored directly in the Magento database in the `shipment_label` column (`mediumblob`) of the `marketplace_orders` table. Sellers can reprint or download them at any time from their order shipment view.

---

### Is this extension compatible with the Hyvä storefront theme?
Yes. Webkul offers a dedicated compatibility extension (**`Webkul_MpUSPSShippingHyva`**) built with Alpine.js and Tailwind CSS, ensuring smooth checkout rates and vendor portal integration without legacy Luma JavaScript overhead.

---

### Can I set a free shipping threshold for USPS?
Yes. In admin settings under **Enable Free Shipping Threshold**, you can set a minimum subtotal amount and select which USPS mail class becomes free when the threshold is reached.

---

### Does the module support international shipping?
Yes. The extension supports all primary USPS international services, including Priority Mail International, Priority Mail Express International, and First-Class Package International Service, along with customs declarations and AESITN export codes.

---

### Where can I check API errors and payloads?
Enable **Debug Mode** in the carrier configuration, and inspect `var/log/mpusps_logger.log` on your server for raw request payloads, authentication tokens, and USPS API responses.
