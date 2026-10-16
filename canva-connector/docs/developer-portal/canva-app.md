# Inside Canva (Sidebar UI) Setup

The **Inside Canva** configuration powers the interactive sidebar app inside the Canva design editor, allowing merchants to browse product details, switch configurable variations, add elements to the canvas, and trigger design exports back to Magento.

---

## Step-by-Step Instructions

### Step 1: Create the App Container

1. Log in to the [Canva Developer Portal](https://www.canva.com/developers/apps).
2. Click **Create an app** at the top right.
3. In the modal, enter your **App name** (e.g. `Test Webkul`).
4. Select your distribution preference (e.g. `Public`), accept the terms, and click **Create app**.

![Create an App in Canva Developer Portal](/images/canva/canva-app-create.webp)

---

### Step 2: Copy the App ID to Magento

1. On the app's **Overview** screen, locate the **App ID** (e.g. `AAHOG...`).
2. Click **Copy** next to the App ID.
3. Log in to your **Magento Admin Panel** and navigate to:
   **Stores > Configuration > Webkul > Canva Connect Settings**
4. Paste the copied value into **Canva App ID** under **General Settings**.

![Canva App Overview and App ID](/images/canva/canva-app-overview.webp)

---

### Step 3: Add the Design Editor Intent

1. Return to the Canva Developer Portal.
2. In the left navigation menu under **Build**, click **Inside Canva**.
3. Click **Add an intent** and select the **Design Editor** intent.
4. This registers the app as an interactive side panel inside the Canva editor canvas.

![Design Editor Intent](/images/canva/canva-inside-intent.webp)

---

### Step 4: Configure Inside Canva Permissions

1. In the left menu under **Inside Canva**, click **Permissions**.
2. Enable the following permission checkboxes:
   - **`canva:design:content`**: Check both **Read** and **Write** (allows the sidebar to read canvas state and insert text, pricing, SKU, and imagery).
   - **`canva:asset:private`**: Check both **Read** and **Write** (allows accessing and uploading private assets).
3. Changes save automatically.

![Inside Canva Permissions](/images/canva/canva-inside-permissions.webp)

::: danger Missing Permission Scope
If `canva:design:content` (Read/Write) is not enabled, Canva editor will display:
`[missing_permission]: Some required permissions for this request were not set in the app config: canva:design:content:read`. Always ensure both Read and Write are enabled.
:::

---

### Step 5: Configure Development URL & App Source

1. Under **Inside Canva**, click **Code upload** (or **Configuration**).
2. Under **App source**, enter your running frontend server URL in the **Development URL** field:
   - Local development default: `http://localhost:8085/` (must match the **Frontend Service Port** configured in Magento).
   - Production hosting: `https://your-frontend-domain.com/`
3. Note your **App origin** (e.g. `https://app-xxxx.canva-apps.com`). If enabling Hot Module Replacement (HMR), paste this into Magento Admin.

![Code Upload Development URL](/images/canva/canva-inside-code-upload.webp)

---

### Step 6: Preview the App in Canva Editor

1. Click **Preview** at the top right of the Canva Developer Portal.
2. A new browser tab opens the Canva editor.
3. On the first launch, Canva displays an introductory confirmation dialog — click **Open**.
4. The sidebar will load the frontend bundle from your local development server and display your Magento catalog.
