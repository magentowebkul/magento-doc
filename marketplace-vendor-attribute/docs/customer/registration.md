# Customer Registration & Account

This section covers how custom attributes and legal agreements integrate into customer signup workflows and customer account dashboards.

---

## Standard Customer Registration

When a new user visits the store's account creation page (`/customer/account/create`), they complete standard account credentials alongside configured custom attributes.

![Customer Registration Form](/images/customer_registration.webp)

---

## Additional Information Section

Custom attributes assigned to **Customer** or **Both** are rendered inside the **Additional Information** section on the registration page:

![Customer Additional Information](/images/customer_additional_info_registration.webp)

### Group-Wise Attribute Selection

When **Display Registration Fields Group Wise** is enabled in [Module Configuration](/admin/configuration.html), customers can choose an attribute group from a dropdown menu. Upon selection, only the fields associated with that group are presented:

![Group Wise Additional Information](/images/customer_additional_info_group.webp)

This dynamic categorization keeps long forms clean and structured.

---

## Becoming a Seller During Registration

If the user checks the **Do You Want To Become A Partner / Seller?** checkbox during signup:

1. The form expands to request their **Shop URL**.
2. All custom attributes assigned to **Seller** or **Both** appear dynamically under the vendor registration fields.

![Vendor Attribute Fields on Registration](/images/vendor_attribute_fields_registration.webp)

Sellers can complete both their personal profile and their vendor credentials in a single step.

---

## Interactive Terms & Conditions Modals

If enabled in configuration, registration forms require acceptance of the store's **Terms & Conditions** and **Privacy & Cookie Policy**:

* Clicking **Terms & Conditions** displays the modal popup or slide panel:

![Terms and Conditions Modal](/images/terms_and_conditions_modal.webp)

* Clicking **Privacy and Cookie Policy** displays the privacy details:

![Privacy Cookie Policy Modal](/images/privacy_cookie_policy_modal.webp)

The modal style (Popup or Slide), header color, background color, and button color correspond to your store's [Terms & Conditions Settings](/admin/configuration.html#_2-vendor-terms-conditions-and-privacy-settings).

---

## Customer Account Dashboard Features

Logged-in customers can access and update their custom information through dedicated menu items in their account dashboard:

![Customer Account Sidebar Menu](/images/customer_account_menu.webp)

### 1. Additional Customer Information
Navigating to **Additional Customer Information** allows customers to view and update values for attributes assigned to customer accounts:

![Additional Account Information Page](/images/additional_account_information.webp)

### 2. Become a Seller for Existing Customers
If an existing customer decides to open a marketplace seller account, they can click **Become Seller** in their account sidebar:

![Become Seller Account Page](/images/become_seller_page.webp)

The page presents the vendor attributes form, allowing them to provide company documentation, business credentials, and store URLs to request seller status.
