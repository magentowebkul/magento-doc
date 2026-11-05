# Seller Order & Label Management

Marketplace vendors can fulfill customer orders independently from their frontend dashboard, generating real Canada Post barcode labels, registering tracking numbers, and downloading branded invoices and shipping slips.

---

## 1. Manage Orders from Seller Dashboard

1. Navigate to **Marketplace > My Order History**.
2. Locate the customer order in the orders grid and click **View Order**.

![Seller Order History Grid](/images/seller-order-history-grid.webp)

3. Review the ordered items, quantities, shipping address, and chosen Canada Post method (e.g. *Expedited Parcel* or *Xpresspost*).

![Seller Order Details](/images/seller-order-ship-action.webp)

---

## 2. Generate Invoices & Shipments

1. Click **Invoice** to generate the commercial invoice for your products.
2. Click **Ship** to create the physical parcel shipment.
3. On the shipment creation screen, check the **Create Shipping Label** checkbox.
4. Select the ordered items to pack into the parcel and specify parcel dimensions:
   * **Length**, **Width**, and **Height** (in cm or inches).
   * **Weight** (in kg or lbs).
5. Click **Save** to confirm.

Upon submission, the extension contacts Canada Post via the REST API, books the shipment, captures the tracking PIN, and generates the barcoded PDF shipping label.

![Complete Order View with Tracking](/images/seller-complete-order-view.webp)

---

## 3. Official Canada Post PDF Shipping Labels

Vendors can click **Print Shipping Label** to download official Canada Post barcode labels formatted for standard laser printers or 4×6 thermal parcel printers:

### Canada to Domestic Destination
Designed for Canadian domestic deliveries with postal tracking bar codes and transit routing indicators:

![Canada to Canada Shipping Label](/images/seller-canada-domestic-label.webp)

### Canada to USA Destination
Includes customs declarations, harmonized system (HS) indicators, and US Postal Service exchange barcodes:

![Canada to USA Shipping Label](/images/seller-canada-usa-label.webp)

### Canada to Worldwide Destination
Full international parcel label with multi-part customs declaration forms (e.g., Canada to India, Europe, Asia):

![Canada to International Shipping Label](/images/seller-canada-intl-label.webp)

---

## 4. Packing Slips & Invoice Slips

Sellers can download professional packing and invoice slips featuring their custom branding, logo, and VAT information:

* **Shipping Slip PDF:** Accompanies the package to detail the enclosed merchandise for the customer.
  
  ![Shipping Slip PDF](/images/seller-shipping-slip-sample.webp)

* **Invoice Slip PDF:** Details payment totals, shipping fees, and taxes collected.
  
  ![Invoice Slip PDF](/images/seller-invoice-slip-sample.webp)

---

## 5. Bulk Slip Downloads by Date Range

For high-volume merchants, the module offers consolidated batch downloads of all packing slips and invoices:

1. Under **Marketplace > My Order History**, locate the bulk action buttons:
   * **Download All Invoice Slip**
   * **Download All Shipping Slip**

![Bulk Slips Download Buttons](/images/seller-bulk-slips-download.webp)

2. Click **Download All Invoice Slip**; select the date range up to which invoices should be consolidated, then click **Download**.

![Download Invoice Slips Modal](/images/seller-download-invoices-modal.webp)

3. Click **Download All Shipping Slip**; select the desired date filter and download the consolidated PDF archive.

![Download Shipping Slips Modal](/images/seller-download-shipping-slips-modal.webp)
