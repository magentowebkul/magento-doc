# functional-test — Automated Doc Screenshots

Headless Playwright suite that captures every screenshot referenced in the VuePress docs, converts PNGs to retina-ready WebP, and drops them into `docs/.vuepress/public/images/`.

## What it does

1. **Logs in** to `https://192.168.15.143/Webkul-Blog/wp-admin/` as `admin / admin` once, saves the session to `.auth/admin.json`.
2. **Visits every plugin admin page + every wizard step** listed in `scripts/screenshots.manifest.json`.
3. **Stabilizes** the UI (hides carets, disables animations, waits for fonts).
4. **Captures PNG** at `1920 × 1200` viewport with `deviceScaleFactor: 2` (retina HD).
5. **Converts** each PNG into two WebPs — `xxx.webp` (1920 px) for click-to-zoom and `xxx@1x.webp` (1480 px) for inline rendering on a 740 px container.
6. **Drops** the WebPs straight into `../docs/.vuepress/public/images/` so the docs render them instantly.

## One-time setup

```bash
cd functional-test
npm install
npm run install:browsers    # downloads Chromium (~130 MB)
```

## Run everything

```bash
npm run all
```

This is equivalent to:

```bash
npm run capture   # Playwright headless run
npm run process   # sharp: PNG → WebP × 2 variants
npm run validate  # cross-checks markdown refs against disk
```

## Individual commands

| Command | What it does |
|---|---|
| `npm run capture` | Headless Playwright — writes PNGs to `artifacts/` |
| `npm run capture:debug` | Same but **headed** with the Playwright Inspector |
| `npm run process` | Converts PNGs to WebP, resizes, drops in docs repo |
| `npm run validate` | Reports missing refs and orphan images |
| `npm run clean` | Deletes `artifacts/` and `test-results/` |

## Environment overrides

```bash
BASE_URL=https://my.staging.site/ WP_USER=editor WP_PASS=s3cret npm run capture
```

## Adding a new screenshot

1. Add an entry to `scripts/screenshots.manifest.json`:
   ```json
   {
     "id": "my-new-shot",
     "spec": "wp-admin",
     "page": "wp-admin/admin.php?page=wkpbic-alerts&action=new",
     "type": "element",
     "locator": ".wkpbic-alert-form"
   }
   ```
2. Reference it in markdown: `![caption](/images/my-new-shot.webp)`
3. Run `npm run all`

The test runner iterates the manifest automatically — no code changes needed.

## File map

```
functional-test/
├─ playwright.config.js       ← viewport, base URL, projects
├─ tests/
│  ├─ global-setup.js         ← logs in once, saves storageState
│  ├─ _helpers.js             ← stabilize + capture utility
│  ├─ wp-admin.spec.js        ← iterates manifest.spec === 'wp-admin'
│  └─ setup-wizard.spec.js    ← iterates manifest.spec === 'setup-wizard'
├─ scripts/
│  ├─ screenshots.manifest.json    ← single source of truth
│  ├─ process-screenshots.mjs      ← sharp post-processing
│  └─ validate-images.mjs          ← markdown ↔ disk linter
├─ artifacts/                  ← raw PNGs (gitignored)
├─ .auth/                      ← WP session (gitignored)
└─ test-results/               ← HTML report (gitignored)
```

## Azure portal screenshots

The Azure portal (`azure-*` images) **cannot** be automated reliably — its UI changes weekly and MFA blocks headless login. Those five screenshots should be captured by hand once per release cycle:

1. Open [portal.azure.com](https://portal.azure.com) in a regular browser.
2. Take screenshots at 1920-px-wide viewport using the OS screenshot tool.
3. Save as PNG in `artifacts/` with the right filename (e.g. `azure-overview.png`).
4. Run `npm run process` — sharp will convert to WebP just like the automated ones.

## Dimension strategy

- **Master capture:** `1920 × 1200` at `deviceScaleFactor: 2` → effectively `3840 × 2400` physical pixels
- **Two WebP outputs per shot:**
  - `xxx.webp` — 1920 px, quality 88 → **zoom / lightbox** source
  - `xxx@1x.webp` — 1480 px, quality 85 → **inline** (2× of the 740 px docs container)

The docs use the large `xxx.webp` in `<img src>`; MediumZoom (enabled in `docs/.vuepress/config.js`) opens it at full natural size when clicked.

## Troubleshooting

| Problem | Fix |
|---|---|
| `net::ERR_CERT_AUTHORITY_INVALID` | HTTPS errors are already ignored via `ignoreHTTPSErrors: true`. If it still fails, check the staging cert expired. |
| `Timed out waiting for #user_login` | The login page is unreachable. Confirm `BASE_URL` and that the box is online (`curl -k https://192.168.15.143/Webkul-Blog/wp-login.php`). |
| `missing PNG: xxx.png (skipping)` | The test for that shot failed. Check `test-results/html/index.html` for the trace. |
| `Element locator not found` | The plugin DOM changed. Update the `locator` in the manifest. |
| Blurry WebP | Re-run with `--force-device-scale-factor=2` already set (it is by default). |
| Sharp install fails on ARM | `npm install --platform=linux --arch=arm64 sharp` or install via `apt install libvips`. |

## What's NOT committed

- `artifacts/` — raw PNGs
- `.auth/` — session cookies
- `test-results/` — HTML reports and traces
- `node_modules/`

Only the final WebPs under `docs/.vuepress/public/images/` are committed to the docs repo.
