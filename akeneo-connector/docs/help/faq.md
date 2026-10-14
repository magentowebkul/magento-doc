# Frequently Asked Questions (FAQ)

Frequently asked questions regarding integration, configuration, and everyday catalog synchronization with the **Akeneo Connector for Magento 2**.

---

### Does this connector support bidirectional synchronization?
**Yes.** The connector provides complete bi-directional support:
* **Import**: Ingest categories, families (attribute sets), attributes with option values, simple products, and configurable product models from Akeneo PIM into Magento 2.
* **Export**: Export existing Magento categories, attribute sets, super attributes, simple products, and configurable product models directly into Akeneo PIM.

---

### Which product types are supported?
The connector natively synchronizes **Simple** and **Configurable** product types. Configurable products are automatically translated into Akeneo Product Models along with their variant axes and child variant simple items.

---

### Which Akeneo editions and versions are supported?
* **Akeneo Community Edition (CE)**: Versions `4.0.x`, `5.0.x`, `6.0.x`, and `7.0.x`.
* **Akeneo Enterprise Edition (EE)**: Flexibility mode.
* *For Akeneo Enterprise Edition Serenity (Cloud SaaS), please contact Webkul for dedicated SaaS connector packages and middleware.*

---

### How does the connector handle multi-language and multi-store setups?
The connector allows you to map distinct Akeneo channels, locales, and currencies directly to individual Magento websites and store views. When importing or exporting, localized attribute values (titles, descriptions, attributes) are scoped to the correct store view.

---

### In what sequence should imports and exports be executed?
Always follow the hierarchical dependency order:
1. **Categories**
2. **Attribute Sets / Families**
3. **Attributes / Product Models**
4. **Products**

Executing jobs out of order may result in missing category associations or unmapped attributes.

---

### Why is the "Akeneo is not connected" warning showing in Magento Admin?
This banner indicates that Magento cannot reach Akeneo's API or authentication failed. Check:
* **Enable Akeneo Connector** is set to `Yes` under **Stores** → **Configuration** → **Webkul** → **Akeneo Connector** → **General Settings**.
* Correct HTTPS protocol without a trailing slash.
* Valid Client ID, Secret, Username, and Password in **Stores** → **Configuration** → **Webkul** → **Akeneo Connector**.
* Server network and firewall rules permitting outbound cURL traffic to the Akeneo host.

---

### Can I export high-resolution product media files?
**Yes.** Under **Export Configuration**, enable **Allow to Export Media Files**. Product images assigned to Magento base, small, and thumbnail roles will be uploaded to Akeneo via the `/api/rest/v1/media-files` endpoint.

---

### How can I get technical assistance or report an issue?
Webkul provides dedicated technical support:
* **Support Ticket**: [Submit a ticket via UVdesk](https://webkul.uvdesk.com/)
* **Email Support**: [support@webkul.com](mailto:support@webkul.com)
* **Official Store**: [Webkul Magento 2 Extensions Store](https://store.webkul.com/Magento-2.html)
