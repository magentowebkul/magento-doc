# Activation & Setup

Once the extension files have been deployed and database migrations have run, verify your extension license and complete the initial setup to activate the Web To Print customizer on your storefront.

---

## Step 1: Module License Verification & Activation

Before enabling settings and presenting the interactive designer on your storefront, verify and activate your Webkul extension license:

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Stores** > **Configuration** > **Webkul** > **Module License**.
3. Under the **Licensed Modules** table:
   - Find the **Web To Print** module entry.
   - Enter your valid **License Key** into the **Enter license key** field.
   - Click the **Save & Verify** button (or click **Save Config** in the top-right corner).
4. After validation, the **Status** badge will switch from **UNVERIFIED** to **VERIFIED**, confirming that your module license is active.

![Module License Configuration](/images/license.png)

::: tip Where to Find Your License Key
You can locate your purchase license key by signing into your [Webkul Store Account](https://store.webkul.com/customer/account/) under **My Account** > **My Downloadable Products** or by referencing your order confirmation email.
:::

---

## Step 2: Enable the Extension in Store Configuration

1. In the Magento Admin Panel, navigate to **Stores** > **Configuration** > **Webkul** > **Web To Print Settings**.
2. Under the **General Settings** group:
   - Set **Active** to **Yes**.
   - Input your customer **Declaration Before Add To Cart** notice.
   - Input your **Instruction Before Add To Cart** guidance.
   - Configure your default **Canvas Width In Pixel** and **Canvas Height In Pixel**.
   - Set your minimum **Image Width In Pixel**, **Image Height In Pixel**, and **Upload Images Minimum DPI**.
3. Click **Save Config** in the upper-right corner.
4. Flush the cache: **System** > **Cache Management** > **Flush Magento Cache** (or run `php bin/magento cache:flush`).

![Web To Print General Configuration](/images/web-to-print-configuration1.webp)

---

## Step 3: Configure Admin User Roles and ACL Permissions

If your store operates with multiple admin user roles (e.g., Catalog Managers, Print Operators, Prepress Staff), grant appropriate access permissions to the Web To Print management sections:

1. Navigate to **System** > **Permissions** > **User Roles**.
2. Select or create the relevant role.
3. Switch to the **Role Resources** tab.
4. Set **Resource Access** to **Custom**.
5. Locate the **Webkul Web To Print** tree node:
   - `Web To Print`: Parent menu and dashboards.
   - `Image Category`: Allows adding, editing, and deleting image categories.
   - `Images`: Allows uploading and managing stock artwork.
   - `WTP Fonts`: Allows uploading and deleting custom font packages.
   - `WTP Color`: Allows configuring preset color swatches.
   - `Web To Print Settings`: Grants access to configuration controls under Stores > Configuration.
6. Click **Save Role**.

---

## Step 4: Populate Core Assets Before Creating Products

To provide a smooth buyer experience on the canvas editor, prepare your asset library before creating your first customizable product:

1. **WTP Fonts**: Upload at least 2–3 standard typography fonts (e.g., Open Sans, Roboto, Montserrat) so buyers have font choices for their text overlays.
2. **WTP Colors**: Add 5–10 popular color swatches (e.g., Black `#000000`, White `#ffffff`, Navy `#000080`, Red `#ff0000`) for instant one-click selection on text and shapes.
3. **Image Categories & Clip Arts**: Create categories like *Badges*, *Icons*, *Borders*, or *Illustrations* and upload transparent PNG/SVG graphics for buyers to place onto designs.

Detailed instructions for managing these assets are covered in the [Print Assets Management](/configuration/manage-assets) guide.
