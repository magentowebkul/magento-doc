# Seller Shipping Configuration

When the store administrator enables the **Allow Sellers to Save Canada Post Details** option, marketplace vendors can manage their own Canada Post API credentials and customize packing slip documentation directly from their frontend vendor dashboard.

---

## 1. Configure Canada Post API Credentials

1. Log into your seller account on the marketplace storefront.
2. Open your account menu and navigate to **Marketplace > Marketplace Canada Post Configuration**.

![Seller Canada Post Settings](/images/seller-canada-post-settings.webp)

3. Configure the following fields:
   * **Canada Post API Key (Client ID):** Enter your 32-character Canada Post API Key.
   * **Canada Post Customer Number:** Enter your 10-digit Canada Post business Customer Number (e.g., `0001315191`).
   * **Canada Post API Secret (Client Secret):** Enter your developer API Secret.
   * **Agreement Type:** Select **Contract** (if you hold a commercial agreement) or **Non-Contract** (for public counter/commercial rates).
   * **Agreement Number:** *(Displayed if Agreement Type is Contract)* Enter your commercial contract agreement number.
4. Click **Save**.

::: tip Inherited Admin Credentials
If a vendor has not entered their own Canada Post API credentials, the system automatically falls back to the store administrator's credentials configured in the Magento backend.
:::

---

## 2. Set Seller Physical Origin Address

Canada Post requires an accurate origin postal code to calculate shipping charges for a vendor's items.

1. Navigate to **Marketplace > Seller Profile**.
2. Fill in your warehouse physical address:
   * **Country:** Select **Canada**.
   * **State / Province:** Select your Canadian province.
   * **City:** Enter your Canadian city.
   * **Postal Code:** Enter your valid Canadian postal code (e.g., `H3Z 2Y7` or `V6B 1A1`).
3. Click **Save Profile**.

When a customer adds this vendor's items to their cart, Canada Post computes live rates based on this exact postal code.

---

## 3. Customize Print PDF Header Information

Vendors can personalize their customer-facing invoices and shipping slips with branding and legal compliance information:

1. Navigate to **Marketplace > Manage Print PDF Header Info**.

![Manage Print PDF Header Information](/images/seller-pdf-header-info.webp)

2. Fill in the header details:
   * **Company Logo:** Upload your business logo (JPG or PNG format).
   * **Invoice & Packing Slip Address:** Specify the physical return address and warehouse contact information printed on slips.
   * **VAT / TAX Information:** Enter your Canadian GST/HST registration number and provincial tax numbers.
3. Click **Save**.
