# functional-test — Automated Doc Screenshots

Headless Playwright suite that captures the Magento Admin screenshots referenced in the
VuePress docs, converts PNGs to retina-ready WebP, and drops them into
`docs/.vuepress/public/images/`.

## What it captures

The manifest (`scripts/screenshots.manifest.json`) has two kinds of shots:

- **`spec: "settings-config"`** — captured **automatically** from the Magento Admin config
  section **Stores → Configuration → Webkul → Google Tag Manager Configuration**
  (`google_tag_manager`). Each config group (General, Shopper Actions, Data Tuning, Consent,
  Destinations, GA4/Ads/Meta, Container Export) is cropped to its own image.
- **`spec: "manual"`** — live in third-party UIs (tagmanager.google.com, GA4, Google Ads,
  Meta Events Manager) or need GTM Preview mode + a storefront. These **cannot** be
  automated reliably; capture them by hand (see below).

## Prerequisites

You need a Magento store with **Webkul_GoogleTagManager installed and configured** (a
Container ID entered, destinations toggled on) so the config groups render fully.

## One-time setup

```bash
cd functional-test
npm install
npm run install:browsers    # downloads Chromium (~130 MB)
```

## Run the automated capture

```bash
MAGENTO_BASE_URL=https://your-store.test/ \
MAGENTO_ADMIN_PATH=admin \
MAGENTO_ADMIN_USER=admin \
MAGENTO_ADMIN_PASS=your-password \
npm run all
```

`npm run all` is equivalent to:

```bash
npm run capture   # Playwright headless run → PNGs in artifacts/
npm run process   # sharp: PNG → WebP × 2 variants → docs/.vuepress/public/images/
npm run validate  # cross-checks markdown /images/*.webp refs against disk
```

Sensitive values (Container ID, license, Measurement ID, Conversion ID/Label, Pixel ID,
sGTM URL) are automatically masked with demo placeholders before each capture, so published
screenshots never leak real IDs.

## Manual screenshots

The `manual` shots are captured by hand once per release:

1. Open the relevant UI (e.g. tagmanager.google.com, GA4 DebugView, Meta Events Manager, or
   your storefront with GTM Preview / Tag Assistant connected).
2. Take a screenshot at a 1920-px-wide viewport.
3. Save it as PNG in `artifacts/` using the manifest `id` as the filename
   (e.g. `howto-container-id.png`, `category-tracking.png`).
4. Run `npm run process` — sharp converts it to WebP just like the automated ones.

The manifest `note` on each manual shot says exactly what to capture.

## Individual commands

| Command | What it does |
|---|---|
| `npm run capture` | Headless Playwright — writes PNGs to `artifacts/` |
| `npm run capture:debug` | Same but **headed** with the Playwright Inspector |
| `npm run process` | Converts PNGs to WebP, resizes, drops in `docs/.vuepress/public/images/` |
| `npm run validate` | Reports missing refs and orphan images |
| `npm run docs-layout` | Runs `docs-layout.spec.js` against a locally served build |
| `npm run clean` | Deletes `artifacts/` and `test-results/` |

## Adding a new screenshot

1. Add an entry to `scripts/screenshots.manifest.json`:
   ```json
   { "id": "my-new-shot", "spec": "settings-config", "type": "element", "locator": "#google_tag_manager_general" }
   ```
2. Reference it in markdown: `![caption](/images/my-new-shot.webp)`
3. Run `npm run all`

The runner iterates the manifest automatically — no code changes needed.

## File map

```
functional-test/
├─ playwright.config.js        ← viewport, base URL, projects (screenshot capture)
├─ playwright.docs.config.js   ← config for the docs-layout HTML test
├─ tests/
│  ├─ global-setup.js          ← logs into Magento Admin once, saves storageState
│  ├─ _helpers.js              ← stabilize + mask + capture utilities
│  ├─ settings-config.spec.js  ← iterates manifest.spec === 'settings-config'
│  └─ docs-layout.spec.js      ← validates the built VuePress site
├─ scripts/
│  ├─ screenshots.manifest.json    ← single source of truth
│  ├─ process-screenshots.mjs      ← sharp post-processing (PNG → WebP ×2)
│  └─ validate-images.mjs          ← markdown ↔ disk linter
├─ fixtures/sample-products.csv    ← demo catalog for a clean storefront
├─ artifacts/                  ← raw PNGs (gitignored)
├─ .auth/                      ← Magento admin session (gitignored)
└─ test-results/               ← HTML report (gitignored)
```

## Dimension strategy

- **Master capture:** `1920 × 1200` at `deviceScaleFactor: 2` → effectively `3840 × 2400`.
- **Two WebP outputs per shot:**
  - `xxx.webp` — 1920 px → **zoom / lightbox** source
  - `xxx@1x.webp` — 1480 px → **inline** rendering

The docs use the large `xxx.webp` in `<img src>`; the lightbox (in
`docs/.vuepress/client.js`) opens it at full natural size on click.

## Troubleshooting

| Problem | Fix |
|---|---|
| `Timed out waiting for #username` | The admin login page is unreachable. Check `MAGENTO_BASE_URL` / `MAGENTO_ADMIN_PATH`. |
| `No element matched: #google_tag_manager_...` | Group fieldset id differs on your Magento version — the manifest uses comma-fallback locators; add your id. |
| `missing PNG: xxx.png (skipping)` | The capture for that shot failed, or it is a `manual` shot not yet taken. |
| `net::ERR_CERT_AUTHORITY_INVALID` | HTTPS errors are already ignored via `ignoreHTTPSErrors: true`. |
| Sharp install fails on ARM | `apt install libvips` or `npm install --platform=linux --arch=arm64 sharp`. |

## What's NOT committed

- `artifacts/` — raw PNGs
- `.auth/` — admin session cookies
- `test-results/` — HTML reports and traces
- `node_modules/`

Only the final WebPs under `docs/.vuepress/public/images/` are committed.
