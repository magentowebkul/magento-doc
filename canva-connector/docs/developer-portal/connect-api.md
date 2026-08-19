# Canva Connect REST API Setup

The **Canva Connect Integration** handles the backend server-to-server connection between Magento and Canva. It uses OAuth 2.0 with PKCE to authenticate, uploads product images directly to Canva asset storage, and generates new Canva designs dynamically when you click "Design with Canva" in the Magento product grid.

---

## Step-by-Step Instructions

### Step 1: Create an Integration

1. In the [Canva Developer Portal](https://www.canva.com/developers/apps), select **Integrations / Canva Connect APIs** from the navigation.
2. Click **Create an integration**.
3. Enter an Integration Name (e.g. `Magento 2 Store Integration`).
4. Click **Create**.

---

### Step 2: Configure OAuth 2.0 URIs

Under the **Authentication / OAuth 2.0** settings:

1. In **Redirect URLs**, paste the Redirect URI from your Magento Admin (**Stores > Configuration > Webkul > Canva Connect Settings**):
   ```
   https://your-magento-domain.com/canva/auth/callback
   ```
2. In **Return Navigation URLs**, paste the Return Navigation URI from your Magento Admin:
   ```
   https://your-magento-domain.com/canva/auth/return
   ```
3. Click **Save Changes**.

::: warning URL Matching
The Redirect URI and Return Navigation URI must match your Magento store domain exactly (including `https://` protocol and path). Mismatches will cause OAuth error `redirect_uri_mismatch`.
:::

---

### Step 3: Configure Integration Scopes

Under **Permissions / Scopes**, enable the following required scopes:

| Scope | Description |
|---|---|
| `design:content:read` | Read design content metadata |
| `design:content:write` | Create and modify designs |
| `design:meta:read` | Read design entity metadata |
| `asset:read` | Read uploaded image assets |
| `asset:write` | Upload product images to Canva Asset storage |

Click **Save Changes**.

---

### Step 4: Copy Client ID & Secret

1. Under **Client credentials**, locate your:
   - **Client ID** (e.g. `OC-AaATlhMbRH5_`)
   - **Client Secret**
2. Copy both values.
3. In Magento Admin, paste them into **Stores > Configuration > Webkul > Canva Connect Settings** under **Client ID** and **Client Secret**.
4. Click **Save Config**.
