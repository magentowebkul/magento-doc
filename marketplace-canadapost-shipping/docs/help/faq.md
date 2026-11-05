# Frequently Asked Questions

Find answers to common questions about setting up, configuring, and managing **Magento 2 Marketplace Canada Post Shipping**.

---

### What is the difference between Contract and Non-Contract Agreement Types?
* **Contract Shipping:** Designed for businesses with an official commercial parcel agreement with Canada Post. Offers discounted commercial contract tariffs, customized parcel pick-up terms, and requires an **Agreement / Contract Number**.
* **Non-Contract Shipping:** Designed for standard small businesses and entrepreneurs without a formal shipping contract. Rates reflect Canada Post's commercial base or counter rates and do not require an agreement number.

---

### Can sellers ship from outside of Canada using this module?
No. Canada Post requires that all parcels originate from a physical location within **Canada** with an official Canadian postal code (e.g. `K1A 0B1`). While shipments can be delivered domestically across Canada or internationally to the USA and overseas destinations, the sender address must always be in Canada.

---

### How are shipping fees calculated when a buyer purchases from multiple vendors?
If a customer's shopping cart contains products from multiple marketplace sellers:
1. The extension calculates independent shipping quotes from each vendor's origin Canadian postal code to the buyer's destination address.
2. The shipping charges from all vendors are combined at checkout.
3. Upon order placement, each vendor receives their respective portion of the order and can independently generate their own Canada Post shipment label and tracking number.

---

### Why is Canadian Dollar (CAD) mandatory in Magento Currency Setup?
The Canada Post REST API always quotes postage prices and fuel surcharges in **Canadian Dollars (CAD)**. If CAD is not enabled in your store's allowed currencies or lacks a valid currency conversion rate, Magento cannot convert the live rate into your store's display or base currencies, causing the carrier to fail at checkout.

---

### What shipping methods are available through Canada Post?
The module supports the complete range of Canada Post parcel services:
* **Domestic (within Canada):** Regular Parcel, Expedited Parcel, Xpresspost, and Priority.
* **USA (Transborder):** Expedited Parcel USA, Xpresspost USA, Tracked Packet - US, Small Packet USA Air, and Priority Worldwide.
* **International (Worldwide):** International Parcel (Air & Surface), Xpresspost International, Tracked Packet - International, Small Packet International, and Priority Worldwide.

---

### Can a seller use the administrator's Canada Post credentials?
Yes. If an individual seller has not entered their own Canada Post API credentials in their seller portal, or if the store administrator has set **Allow Sellers to Save Canada Post Details** to **No**, the module automatically routes all rating and label generation requests through the administrator's master Canada Post account.

---

### How do I safely test Canada Post shipping before going live?
1. In the Canada Post Developer Portal, retrieve your **Development** API Key and API Secret.
2. In Magento Admin (**Stores > Configuration > Sales > Delivery Methods > Marketplace Canada Post Shipping**), set **Sandbox Mode** to **Yes**.
3. Input your Development credentials and Customer Number.
4. Add items to your cart, test shipping estimates with Canadian postal codes, and generate test shipments.
5. Once verified, switch **Sandbox Mode** to **No** and replace the development credentials with your **Production** API keys.

---

### Where can customers track their Canada Post packages?
When a shipment is generated, the official Canada Post **Tracking PIN** is automatically assigned to the Magento shipment record. 
* **Customers** can view their tracking number and click the direct Canada Post tracking link from their storefront account under **My Orders > View Order > Shipments**.
* **Sellers** can view tracking details directly under **Marketplace > My Order History**.

---

### Is the module compatible with Hyvä Themes?
Yes. Webkul Marketplace Canada Post Shipping is fully compatible with standard Magento Luma storefronts as well as modern **Hyvä Themes**. Compatibility styling and scripts ensure responsive checkout presentation and label management.

---

### Where can I get technical assistance or report bugs?
If you require custom enhancements, have integration questions, or need technical assistance, submit a support ticket via the official [Webkul Helpdesk](https://webkul.uvdesk.com/en/) or browse other extensions on the [Webkul Store](https://store.webkul.com/).
