# Canva Frontend Node Service Setup

The **Canva Frontend App** (`canva-app-frontend`) is a modern React 18 and TypeScript application built with Webpack. It runs inside the Canva editor side panel and interacts directly with the Canva Apps SDK and Magento REST APIs.

---

## 1. Directory Structure

The frontend application structure:

```
canva-app-frontend/
├── package.json          Dependencies and npm scripts
├── webpack.config.ts     Webpack dev server & build bundler
├── tsconfig.json         TypeScript configuration
├── .env                  Generated automatically from Magento Admin
├── dist/                 Compiled production bundles
└── src/
    ├── app.tsx           Main React component & Canva SDK controller
    ├── components/       Product details, variations, and catalog search UI
    └── services/         Magento REST API client & Canva token handler
```

---

## 2. Installation

1. Open your terminal and navigate to the frontend directory:
   ```bash
   cd /path/to/canva-app-frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```

---

## 3. Configuration

Ensure your Magento Admin settings are configured under **Stores > Configuration > Webkul > Canva Connect Settings > Canva App Frontend & API Configuration**:

- Set **Canva Frontend App Server Path** to your absolute directory path (e.g. `/var/www/html/canva-app-frontend`).
- Click **Save Config** — Magento writes the `.env` file automatically.

---

## 4. Running the Development Server

For local development and live testing with Canva:

```bash
npm start
```

- Starts the Webpack Development Server on `http://localhost:8083`.
- Hot Module Replacement (HMR) is enabled for real-time UI updates.
- In your Canva Developer Portal, your Canva App Development URL should point to `http://localhost:8083`.

---

## 5. Building for Production

When deploying to a production server:

```bash
npm run build
```

- Generates optimized, minified bundles into the `dist/` directory (`dist/app.js`, `dist/index.html`).
- Host the `dist/` directory via Nginx, Apache, or a static CDN with HTTPS.
- Update your Canva App Source URL in the Canva Developer Portal to your production HTTPS domain (e.g. `https://canva-app.yourdomain.com`).
