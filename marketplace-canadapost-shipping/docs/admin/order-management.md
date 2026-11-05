# Backend Order & Label Workflow

Store administrators can manage customer orders, create Canada Post shipments, define package dimensions, and print official shipping labels directly from the Magento 2 backend.

---

## 1. View Customer Order

1. Log in to the Magento Admin Panel.
2. Navigate to **Sales > Orders**.
3. In the orders grid, locate the order placed using Canada Post Shipping and click **View**.

![Admin Sales Order View](/images/admin-sales-order-view.webp)

---

## 2. Generate Shipment with Shipping Label

1. On the order detail page, click the **Ship** button located in the top action bar.

![Admin Order Ship Action](/images/admin-order-ship-panel.webp)

2. The **New Shipment** fulfillment page opens.
3. Review the shipping address, carrier title, and items to be shipped.
4. Locate the **Shipment Options** section and check the checkbox: **Create Shipping Label**.

![Create Shipping Label Checkbox](/images/admin-create-shipping-label-checkbox.webp)

5. Click **Submit Shipment**.

---

## 3. Package Configuration & Parcel Dimensions

When **Create Shipping Label** is checked, Magento displays the Canada Post packaging window:

![Add Products to Package](/images/admin-add-products-to-package.webp)

1. **Select Products:** Check the items to include in this parcel and click **Add Selected Products To Package**.
2. **Specify Package Type:** Select the package container type (e.g., *Customer Packaging*, *Mailing Box*).
3. **Set Dimensions:**
   * **Length:** Enter package length in centimeters or inches.
   * **Width:** Enter package width in centimeters or inches.
   * **Height:** Enter package height in centimeters or inches.
   * **Weight:** Enter total package gross weight.
4. **Save and Generate:** Click **Save**.

---

## 4. Automatic Tracking & PDF Generation

Once submitted:
1. Magento dispatches an authenticated REST payload to Canada Post's shipment creation endpoint (`/shipping/v1/.../shipments`).
2. Canada Post assigns an official **Tracking PIN** number and creates the barcoded parcel label.
3. Magento captures the binary PDF artifact and attaches the tracking number to the shipment record.
4. The administrator can click **Print Shipping Label** to download the combined PDF or view the tracking progress from the **Shipments** tab.
