# Activate & Connect

Once installed, activate the **Marketplace Size Chart** extension from the Magento 2 Admin Panel and configure initial marketplace settings.

---

## Accessing Module Settings

You can navigate to the configuration panel in two ways:

1. **Via Stores Configuration:**  
   Navigate to **Stores > Configuration > Webkul > Marketplace Size Chart**.

2. **Via Webkul Admin Menu:**  
   Log in to the Magento Admin Panel, select **Webkul** in the sidebar, and click **Marketplace Size Chart**.


---

## Initial Setup Steps

### Step 1: Enter License & Tracker Keys

To validate and unlock the module on your Magento 2 instance:

1. In the **Marketplace Size Chart** configuration page, locate the **License / Module Activation** section.
2. Paste your **License Key** (Serial Key) received in your Webkul order confirmation email or downloaded from your Webkul account dashboard.
3. Paste the **Tracker Key** associated with your registered domain URL.
4. Click **Save Config** (or **Activate License**).
5. Once your keys are verified, the module unlocks and allows you to enable extension features.

### Step 2: Enable the Extension

1. In the **General Settings** section:
   - Set **Module Enabled** to **Yes**.

### Step 3: Configure Custom Chart Notes

When customers choose to submit custom body dimensions on the product detail page, they can be presented with an optional acknowledgement agreement and footer instructions.

1. Expand the **Custom Chart Configuration** subsection (visible when Module Enabled is `Yes`):
   - **Show Acknowledgement Note:** Select `Yes` to display a mandatory terms checkbox in the Custom Size Chart popup.
   - **Acknowledgement Note:** Enter the disclaimer text that buyers must acknowledge before saving custom sizes (e.g., *"I acknowledge that I am responsible for the measurements entered, and in case that I want to take the measurements through the branch, I will go to the nearest branch within 48 hours of my order."*).
   - **Footer Note:** Enter general measurement instructions or guidance that appears at the bottom of the custom chart popup (e.g., *"PLEASE MAKE SURE TO TAKE THE CORRECT DIMENSIONS ACCORDING TO THE PROVIDED INSTRUCTIONS."*).

### Step 4: Save & Flush Cache

1. Click the **Save Config** button in the upper-right corner.
2. Flush the Magento cache via command line or Cache Management:
   ```bash
   php bin/magento cache:clean config full_page
   ```

---

## Verifying Backend & Seller Menus

### Admin Panel Menus
Under the **Marketplace Size Chart** admin menu, you will now see:
- **Menu:**
  - *Size Units* (`mpsizecharttemplate/sizeunits/`)
  - *Measurements* (`mpsizecharttemplate/measurements/`)
  - *Size Chart Templates* (`mpsizecharttemplate/templates/`)
- **Seller Menu:**
  - *Size Units* (`mpsizecharttemplate/seller/sizeunits/`)
  - *Measurements* (`mpsizecharttemplate/seller/measurements/`)
  - *Size Chart Templates* (`mpsizecharttemplate/seller/templates/`)
- **Size Chart Information:**
  - *User Guide, Store Extension, Ticket/Customisations, Services, Reviews*

### Marketplace Seller Dashboard Menus
When marketplace sellers log into their customer account dashboard, the navigation block will show:
- **Marketplace Size Chart:**
  - *Size Units*
  - *Measurements*
  - *Size Chart Templates*
