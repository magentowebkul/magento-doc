# Frequently Asked Questions

Common questions and answers regarding the **Magento 2 Marketplace Vendor Attribute Manager** extension.

---

### Q1: Is this module compatible with Magento 2.4.x and PHP 8.x?
**Yes.** The extension supports Magento 2 Open Source and Adobe Commerce versions from 2.0.x through 2.4.x (including 2.4.7 and 2.4.8+) and PHP versions 7.4 through 8.3+.

---

### Q2: Is Webkul Multi Vendor Marketplace required to use this extension?
**Yes.** This module is an add-on for **[Webkul Magento 2 Multi Vendor Marketplace](https://store.webkul.com/magento2-multi-vendor-marketplace.html)** (`Webkul_Marketplace`). It requires the marketplace core module to function properly.

---

### Q3: What input types can I create for custom attributes?
The module supports **8 distinct input types**:
1. Text Field
2. Text Area
3. Date (with interactive calendar picker)
4. Yes/No (boolean switch)
5. Dropdown (single choice)
6. Multiple Select (multiple choices)
7. Media Image (JPEG, PNG, GIF, etc.)
8. File (PDF, DOCX, TXT, XLS, etc.)

---

### Q4: Can I assign an attribute to both customers and sellers?
**Yes.** Under **Marketplace Management > Attribute Manager > Assign Attribute**, you can set the role scope to **Customer**, **Seller**, or **Both**. Attributes assigned to **Both** will be displayed during customer signup and seller onboarding.

---

### Q5: How does group-wise attribute display work?
When **Display Registration Fields Group Wise** is enabled in Store Configuration, attributes assigned to groups are grouped together. On the registration form, users select a group from a dropdown selector, and only the fields associated with that group are revealed dynamically.

---

### Q6: Can existing customers become sellers and fill custom vendor attributes?
**Yes.** Existing logged-in customers can navigate to **Become Seller** in their customer account sidebar. The page displays the vendor custom attribute fields so they can submit their business qualifications to upgrade to seller status.

---

### Q7: Does the module work with Marketplace Landing Page Layout 2 and Layout 3?
**Yes.** The extension integrates natively with Marketplace Landing Page Settings. When Layout 2 or Layout 3 is chosen, prospective sellers register via an intuitive 3-step progressive onboarding wizard on the sell page.

---

### Q8: Can the store admin view and update vendor attributes from the backend?
**Yes.** Administrators can open **Customers > All Customers**, select a seller account, and open the **Vendor Attribute Fields** tab to view, verify, and update their attribute values, uploaded images, and documents.

---

### Q9: Is the extension compatible with Hyvä Themes?
**Yes.** Webkul provides dedicated Hyvä Theme compatibility packages that replace legacy Knockout.js/RequireJS components with Alpine.js and Tailwind CSS styling. You can experience the live frontend and registration flow on the **[Hyvä Theme Marketplace Demo](https://mp-vendor-attribute-manager-hyva-marketplace-magento2.webkul.in/demomanagement/viewdemo/index/demoid/76/)**.

---

### Q10: Does the module support multi-store languages and RTL?
**Yes.** The module includes a comprehensive `i18n/en_US.csv` dictionary that can be translated into any locale (such as `de_DE.csv`, `ar_SA.csv`) and supports both Right-to-Left (RTL) and Left-to-Right (LTR) layouts.
