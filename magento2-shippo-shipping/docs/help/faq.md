# Frequently Asked Questions (FAQ)

### Can admins connect their existing Shippo account?
Yes. Admins enter their Shippo private API key in Magento Admin backend settings (**ShippoShipping > Shippo Configuration Settings** or **Stores > Configuration > Sales > Delivery Methods > Webkul Shippo Shipping**). This connects active carrier accounts directly and turns on live rate quotes across store views.

---

### Does this extension support international shipping destinations?
Yes. The extension fetches live global shipping rates during checkout. In addition, it converts carrier rates into your store's base currency automatically so international buyers see clear, transparent pricing.

---

### Are product dimensions required for rate calculation?
Yes. Simple and configurable products need length, width, and height values saved in catalog product data. The module uses these dimensions alongside item weights to calculate proper parcel box volume for exact Shippo freight lookups.

---

### Can admins generate shipping labels directly from the order panel?
Yes. Store administrators check the **Create Shipping Label** option during shipment creation. Then, they package products, purchase postage, and download official print-ready PDF parcel labels directly without leaving Magento Admin.

---

### Do customers receive parcel tracking information?
Yes. Official carrier tracking numbers attach directly to shipment records upon creation. Buyers can track packages conveniently from the order history view inside their customer accounts or via automated shipment confirmation emails.

---

### Does this extension validate customer addresses during checkout?
Yes. An automated address check validates street lines, postal codes, and unit numbers against Shippo's global postal databases, preventing failed or misdirected parcel deliveries before shoppers finish checkout.

---

### Can store owners set a fallback message when carrier rates fail?
Yes. Admins can define custom error guidance in admin backend settings under **Displayed Error Message**. Clear fallback text displays to shoppers whenever carrier networks are unreachable or offline.

---

### Is this extension compatible with Hyvä Themes and Hyvä Checkout?
Yes. Webkul provides a dedicated compatibility package `Webkul_ShippoShippingHyva` (`webkul/module-shippo-shipping-hyva`) that brings native Magewire and Alpine.js real-time address validation directly to Hyvä Checkout.

---

### Can previously generated shipping labels be reprinted?
Yes. Purchased carrier shipping labels remain permanently associated with the shipment record. Warehouse staff can reprint labels at any time from **Sales > Shipments** by opening the shipment and clicking **Print Shipping Label**.
