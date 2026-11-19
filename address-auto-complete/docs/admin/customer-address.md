# Customer Address Management

When managing customer records in the Magento Admin Panel, administrators often need to add new customer shipping destinations, update billing information, or correct address discrepancies reported by warehouse dispatch teams.

**Webkul Google Address Auto Complete** seamlessly integrates into the customer edit interface under **Customers > All Customers**.

---

## Modifying Customer Addresses in Admin

### 1. Access Customer Profile

1. Log in to the Magento Admin Panel.
2. In the left menu, navigate to **Customers > All Customers**.
3. Locate the target customer in the grid and click **Edit** under the **Action** column.

---

### 2. Open Addresses Tab

1. In the customer edit view, click on the **Addresses** tab in the left-hand navigation menu.
2. You can either select an existing address card to modify it or click the **Add New Address** button to register a new destination.

---

### 3. Autofill Address Information

1. Locate the **Street Address** text input field.
2. Begin typing the customer's address (e.g., house number, street name, commercial building, or landmark).
3. Google Places autocomplete generates predictions in real time.

![Admin Edit Customer Address Autocomplete](/images/admin_customer_edit_address.webp)

4. Click the appropriate address entry from the suggestion list.
5. All address fields update instantly:
   * **Street Address Line 1 & Line 2:** Normalized street number and road name.
   * **City:** Automatically filled.
   * **Country:** The corresponding country is automatically selected in the dropdown.
   * **State / Province:** The state or administrative region updates automatically.
   * **Zip / Postal Code:** The verified postal code is inserted.

---

## Setting Default Billing & Shipping Designations

Under the address form, admins can choose:

* **Default Billing Address:** Check to designate this address for future customer invoice records.
* **Default Shipping Address:** Check to make this the primary dispatch destination for one-click checkout.

Click **Save Customer** in the top right to commit the changes.

---

## Benefits for Operations Teams

| Operational Challenge | How Autocomplete Solves It |
| :--- | :--- |
| **Ambiguous Address Formats** | Standardizes address formatting following international postal standards. |
| **Missing Zip Codes** | Automatically supplies the postal code corresponding to the selected street address. |
| **Wrong State Selected** | Synchronizes state/province dropdown with the precise geographic boundaries returned by Google Places. |
| **Data Entry Time** | Replaces multi-field manual entry with a single selection, saving up to 70% of address form entry time. |

::: tip Next Steps
Explore the customer-facing experience in [Storefront Checkout Autocomplete](/frontend/checkout.html) and [Address Book Autocomplete](/frontend/address-book.html).
:::
