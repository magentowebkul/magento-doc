# Canva App (Sidebar UI) Setup

The **Canva App** provides the interactive side panel inside the Canva design editor that lets merchants browse Magento product details, switch configurable variations, insert text/graphics, and trigger the export back to Magento.

---

## Step-by-Step Instructions

### Step 1: Create the App

1. Log in to the [Canva Developer Portal](https://www.canva.com/developers/apps).
2. Click **Create an app** at the top right.
3. Enter your app name (e.g. `Magento 2 Connect`).
4. Click **Create**.

---

### Step 2: Configure App Source URL

1. In your app management menu, go to **App source**.
2. Set the **Development URL** to your frontend service URL:
   - For local development: `http://localhost:8083`
   - For production hosting: `https://your-canva-frontend.yourdomain.com`
3. Click **Save Changes**.

---

### Step 3: Configure Capabilities & Scopes

1. In the left navigation menu, click **Scopes / Capabilities**.
2. Enable the following permissions:
   - **`canva:design:content:write`**: Allows the app to insert product titles, prices, descriptions, and media elements directly onto the canvas.
   - **`canva:design:content:read`**: Allows the app to read and export the finished high-resolution canvas design.
3. Click **Save Changes**.

::: danger Missing Permission Error
If `canva:design:content:write` or `canva:design:content:read` are not checked, Canva will display the runtime error:
`[missing_permission]: Some required permissions were not set in app config`. Always ensure both scopes are active.
:::

---

### Step 4: Copy the App ID

1. Return to the app **Overview** or **Basic info** screen.
2. Locate the **App ID** (e.g. `AAHOGAGCvn4`).
3. Copy this App ID — you will paste it into Magento Admin under **Stores > Configuration > Webkul > Canva Connect Settings > Canva App ID**.
