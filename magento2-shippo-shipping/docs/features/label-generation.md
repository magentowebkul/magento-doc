# Shipment & Label Creation

Store fulfillment staff can generate official, carrier-compliant shipping labels with tracking barcodes directly from Magento Admin without opening external shipping portals.

---

## Step-by-Step Label Generation Workflow

### 1. Open the Order Record
1. In the Magento Admin panel, navigate to **Sales > Orders**.
2. Locate the placed order and click **View**.
3. Under the **Shipping & Handling Information** section, confirm the customer's selected Shippo carrier method.

![Admin View Order](/images/admin-order-view.webp)

---

### 2. Initiate Shipment Creation
1. In the top action bar of the order view page, click **Ship**.
2. On the **New Shipment** page, scroll down to the bottom and check the **Create Shipping Label** checkbox.
3. Click **Submit Shipment**.

![Create Shipping with Label](/images/admin-create-shipping.webp)

---

### 3. Package Items & Specify Dimensions
1. A packaging dialog modal appears prompting you to organize the items into parcels.
2. Select the checkbox for each item to be packed into the shipment and click **Add Selected Products To Package**.
3. Verify or adjust the package dimensions (length, width, height) and total package gross weight.
4. Click **Save** to confirm packaging and proceed with shipping label generation.

![Package Items & Specify Dimensions](/images/admin-add-products-to-package.webp)

5. Upon saving, Magento contacts the Shippo API to generate the shipping label, and a confirmation banner verifies: *"The shipment has been created. You created the shipping label."* The order status transitions to **Processing**.

![Shipment & Shipping Label Created](/images/admin-save-package.webp)

---

### 4. Download and Print PDF Shipping Label
1. Once saved, Magento calls the Shippo API to purchase the postage and generate the official carrier label.
2. The carrier tracking number is automatically recorded on the shipment record.
3. On the completed shipment view page, click **Print Shipping Label** to download the high-resolution PDF label ready for thermal or standard printing.

![Print Shipping Label](/images/admin-print-shipping-label.webp)

4. The generated PDF shipping label includes the official carrier routing code, barcodes, and destination details:

![Carrier Shipping Label Sample](/images/carrier-shipping-label-sample.webp)

---

::: tip Label Re-print
If a shipping label needs to be reprinted, navigate to **Sales > Shipments**, open the shipment record, and click **Print Shipping Label**. You can reprint purchased labels at any time without incurring extra charges.
:::
