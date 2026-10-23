# Vendor Profile & Information

This page details how custom attributes are displayed on the public marketplace storefront, how vendors manage their profile attributes, and how administrators review seller information in the Magento backend.

---

## Public Storefront Vendor Profile

Buyers browsing the marketplace can view custom vendor details directly on the seller's public profile page:

![Marketplace Seller Profile Storefront](/images/marketplace_seller_profile_storefront.webp)

### Key Profile Display Elements
* **Custom Section Heading**: Labeled according to the **Seller Profile Label** defined in [Module Configuration](/admin/configuration.html).
* **Attribute Values**: Text, date, selection, and boolean values rendered in a clear, formatted specifications table.
* **Uploaded Images & Badges**: Business licenses, facility photos, and verification badges (when **Image Display On Vendor Profile** is enabled).
* **Downloadable Document Files**: Product catalogs, quality compliance certificates, or warranties available for customer download (when **File Display On Vendor Profile** is enabled).

---

## Vendor Profile Edit Dashboard

Marketplace vendors can update their custom attributes at any time from their seller account dashboard under **Marketplace > Seller Profile** (or **Edit Profile**):

![Seller Profile Edit Form Part 1](/images/seller_profile_edit_1.webp)

The editor allows vendors to:
1. Update business contact details, company description, and operational hours.
2. Upload new media images or updated documentation files.

![Seller Profile Edit Form Part 2](/images/seller_profile_edit_2.webp)

3. Modify dropdown choices, multiselect options, and specific questionnaire answers.

![Seller Profile Edit Form Part 3](/images/seller_profile_edit_3.webp)

---

## Admin Customer & Vendor Attribute Inspection

Store administrators can inspect and modify attribute values for any seller or customer directly from the Magento Admin:

1. In the admin sidebar, navigate to **Customers > All Customers**.
2. Locate the customer or seller account and click **Edit**.

### 1. Vendor Attribute Fields Tab
For accounts registered as sellers, a dedicated **Vendor Attribute Fields** tab displays all seller-assigned attributes:

![Admin Customer Vendor Attribute Fields](/images/admin_customer_vendor_attribute_fields.webp)

Administrators can view current values, inspect uploaded files, and update values on behalf of the vendor:

![Admin Editing Vendor Attribute Fields](/images/admin_edit_vendor_attribute_fields.webp)

### 2. Additional Information Tab
Attributes assigned to customers appear under the **Additional Information** tab:

![Admin Customer Additional Information Tab](/images/admin_customer_additional_info.webp)

If an attribute is assigned strictly to sellers, it will not appear in the customer Additional Information tab, ensuring clean separation between buyer and seller metadata.
