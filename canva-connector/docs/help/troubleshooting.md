# Troubleshooting

Common issues and their resolutions when configuring and using the Magento 2 Canva Connector.

---

## 1. `[missing_permission]: Some required permissions were not set in app config: canva:design:content:write`

### Cause
Your Canva App in the Canva Developer Portal is missing required editor scopes.

### Resolution
1. Log in to the [Canva Developer Portal](https://www.canva.com/developers/apps).
2. Open your Canva App (e.g. `Magento 2 Connect`).
3. In the left navigation, click **Scopes / Capabilities**.
4. Check both **`canva:design:content:write`** and **`canva:design:content:read`**.
5. Click **Save Changes**.
6. Refresh the Canva design editor.

---

## 2. OAuth Error: `redirect_uri_mismatch`

### Cause
The Redirect URI registered in the Canva Developer Portal does not match the URL configured in Magento.

### Resolution
1. In Magento Admin, go to **Stores > Configuration > Webkul > Canva Connect Settings**.
2. Copy the exact **Redirect URI** shown on screen (e.g. `https://your-domain.com/canva/auth/callback`).
3. In the Canva Developer Portal, navigate to **Integrations / Canva Connect APIs > Your Integration > Authentication**.
4. Ensure the **Redirect URLs** field contains this exact string, including protocol (`https://`) and trailing path.

---

## 3. 404 Not Found on Return Navigation

### Cause
The Return Navigation URL in Canva is either missing or improperly configured.

### Resolution
1. Verify that your **Return Navigation URI** in Canva Developer Portal is set to:
   ```
   https://your-domain.com/canva/auth/return
   ```
2. Confirm Magento URL rewrites are active on your web server.

---

## 4. Frontend Service Fails to Load in Canva (Port / CORS Issues)

### Cause
The Node development server is not running, running on an incorrect port, or blocked by browser mixed content.

### Resolution
1. Check that the frontend service is running:
   ```bash
   cd /path/to/canva-app-frontend
   npm start
   ```
2. Verify that `http://localhost:8083` is accessible in your browser.
3. In Canva Developer Portal, verify that the **App Source > Development URL** is set to `http://localhost:8083`.
4. In Magento Admin, ensure **Canva App Origin** matches `https://app-<app-id>.canva-apps.com`.

---

## 5. Corrupt or Missing `.env` Configuration

### Cause
Permissions error on server filesystem or invalid path entered in Magento Admin.

### Resolution
1. Go to **Stores > Configuration > Webkul > Canva Connect Settings > Canva App Frontend & API Configuration**.
2. Verify that **Canva Frontend App Server Path** is an absolute directory path that exists and is writable by the web server user (e.g. `www-data`).
3. Click **Save Config** — Magento will validate the path and rewrite the `.env` file automatically.
