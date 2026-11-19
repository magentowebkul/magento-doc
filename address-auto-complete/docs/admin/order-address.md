# Admin Order Address Autocomplete

Store administrators frequently process phone orders and backend requests directly from the Magento Admin Panel. **Magento 2 Google Address Auto Complete** integrates Google address suggestions into the backend order creation interface, enabling staff to capture accurate delivery information quickly and without errors.

---

## Creating an Order in the Admin Backend

### 1. Navigate to Order Creation

1. In the Magento Admin Panel, go to **Sales > Orders**.
2. Click the **Create New Order** button in the upper-right corner.
3. Select an existing customer or click **Create New Customer**.
4. Choose the appropriate **Store View**.

---

### 2. Autofilling Address Information

In the **Address Information** section of the order creation page:

1. Click on the **Street Address** input field for either the **Billing Address** or **Shipping Address**.
2. Begin typing the address into the field.
3. A Google address suggestion dropdown will appear with matching addresses.

![Admin Create Order Address Autocomplete](/images/admin_create_order_address.webp)

4. Select the desired address from the suggestions.
5. The extension automatically fills the following fields:
   * **Street Address (Line 1 & Line 2)**
   * **City**
   * **Country**
   * **State / Province**
   * **Zip / Postal Code**

---

### 3. Copy Billing to Shipping

Admins can check the **Same As Billing Address** option on the shipping address section. The autofilled address information will copy over automatically.

---

## Editing Existing Order Addresses

If a customer requests to change their delivery address after placing an order:

1. Navigate to **Sales > Orders** and open the order.
2. In the **Address Information** section, click **Edit** on the address.
3. Type the updated address into the Street Address field and choose the verified address from Google's suggestions.
4. Click **Save Order Address**.

::: tip Operational Benefit
Autofilling addresses in the admin prevents typos, ensuring couriers receive accurate, complete addresses every time.
:::
