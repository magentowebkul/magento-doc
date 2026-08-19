# Frequently Asked Questions (FAQ)

Frequently asked questions regarding the Webkul Magento 2 Canva Connector extension.

---

### Q: Which Magento versions are supported?
**A:** The extension supports **Magento Open Source, Adobe Commerce, and B2B Editions from 2.4.4 through 2.4.9+** running on PHP 8.1, 8.2, 8.3, or 8.4.

---

### Q: Does this require a Canva Pro account?
**A:** No. You can use standard free Canva accounts or Canva Pro accounts. A **Canva Developer Account** is free to create at [canva.com/developers](https://www.canva.com/developers).

---

### Q: What product types are supported?
**A:** The connector supports **Simple Products**, **Configurable Products** (with full child variation support), **Virtual Products**, and **Downloadable Products**.

---

### Q: How does multi-page export work?
**A:** When designing multi-page graphics or multi-angle product banners:
- **Page 1**: Automatically assigned as the primary product image (`Base`, `Small`, `Thumbnail`).
- **Pages 2 through N**: Saved into the product's additional media gallery slider.

---

### Q: Are designs stored in Canva or Magento?
**A:** Both! The editable design project remains stored in your Canva account under your Canva design library (referenced by its `canva_design_id` on the Magento product). The exported high-resolution media files are stored locally in Magento's media gallery (`pub/media/catalog/product/...`).

---

### Q: How do I change the domain when migrating to production?
**A:** In Magento Admin (**Stores > Configuration > Webkul > Canva Connect Settings**):
1. Verify the **Magento Backend Base URL** matches your new production domain.
2. Click **Save Config** — Magento automatically updates the frontend `.env` file.
3. Update your Redirect URI and Return Navigation URI in the Canva Developer Portal to match your production domain.

---

### Q: Where do I get technical assistance or request custom features?
**A:** You can open a support ticket with our engineering team at [Webkul UVdesk](https://webkul.uvdesk.com/) or explore custom extension services at [Webkul Store](https://store.webkul.com/).
