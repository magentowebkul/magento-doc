# Customer Address Book

In addition to the checkout page, **Magento 2 Google Address Auto Complete** is active within the customer dashboard under **My Account > Address Book**.

Shoppers frequently manage multiple shipping destinations (such as residential, office, and family addresses). Integrating Google autocomplete in the account section ensures that saved addresses are validated upfront before the customer ever initiates checkout.

---

## Adding or Editing an Address in Customer Account

### 1. Navigate to Customer Address Book

1. The customer logs in to their store account.
2. In the left navigation menu, click **Address Book**.
3. Under **Additional Address Entries**, click **Add New Address**, or click **Edit Address** on an existing saved entry.

---

### 2. Live Autocomplete in Address Form

1. In the **Address** section, the customer clicks into the **Street Address** input.
2. Typing begins generating real-time suggestions from Google.

![Customer Address Book Autocomplete](/images/storefront_address_book_autocomplete.webp)

3. When the customer clicks their address from the list, the form fills automatically:
   * **Street Address (Line 1 & Line 2)**
   * **City**
   * **Country**
   * **State / Province**
   * **Zip / Postal Code**

---

### 3. Setting Default Preferences

Customers can designate address preferences directly on the form:

* **Use as my default billing address:** Automatically selects this entry for payment invoicing.
* **Use as my default shipping address:** Pre-selects this address as the default delivery destination on future checkout sessions.

Click **Save Address** to commit the address book entry.

---

## Field Auto-Population Overview

The extension accurately matches Google address elements into Magento address fields:

| Address Field | What Gets Filled | Example |
| :--- | :--- | :--- |
| **Street Address** | Street number and road name | `1600 Amphitheatre Pkwy` |
| **City** | City or town | `Mountain View` |
| **State / Province** | State or regional territory | `California` |
| **Country** | Country selection | `United States` |
| **Zip / Postal Code** | Postal code | `94043` |

::: tip Hyvä Themes Ready
If your store runs the modern Hyvä theme or Hyvä Checkout, proceed to the [Hyvä Theme Support](/hyva/hyva-compatibility.html) chapter.
:::
