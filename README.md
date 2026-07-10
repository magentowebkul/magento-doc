# Magento Docs by Webkul

Magento Docs is Webkul's public documentation hub for Magento 2 and Adobe Commerce product guides. It publishes focused user guides under one domain, starting with the Magento 2 Hyva Jewellery Theme documentation.

Webkul is a Magento 2 and Adobe Commerce development company with deep experience in storefront engineering, marketplace platforms, custom extensions, integrations, migration, performance optimization, support, and enterprise commerce workflows.

## Magento 2 Development Expertise

Webkul helps merchants, agencies, and enterprise teams build production-ready Magento 2 and Adobe Commerce solutions. Our Magento work covers:

- Custom Magento 2 store development
- Adobe Commerce and Adobe Commerce Cloud implementation
- Hyva theme development and storefront modernization
- B2B commerce, marketplace, and multi-vendor commerce builds
- Headless commerce, PWA, and mobile-first storefront experiences
- Magento 2 extension development and customization
- Payment, shipping, ERP, CRM, PIM, and third-party integrations
- Magento migration, upgrade, support, and maintenance
- Speed optimization, checkout improvements, and technical consulting

Learn more: [Magento Development Services by Webkul](https://webkul.com/magento-development/)

## Documentation Published Here

- Main docs index: `https://magento-doc.webkul.com/`
- Hyva Jewellery Theme guide: `https://magento-doc.webkul.com/hyva-jewelry-theme/`

The root homepage introduces the Magento documentation library. Each product guide lives in its own folder and is built into a matching route under `dist/`.

## Repository Structure

```text
.
├── homepage/                 # Static root homepage
├── hyva-jewelry-theme/       # VuePress product guide
├── scripts/build-pages.mjs   # Builds all docs into dist/
├── dist/                     # Generated Cloudflare Pages output
├── package.json
└── wrangler.toml
```

## Local Development

Install dependencies and build the complete docs site:

```bash
npm install
npm run build
```

Preview the generated output:

```bash
python3 -m http.server 8099 --directory dist
```

Open `http://127.0.0.1:8099/`.

## Cloudflare Pages

Use these settings for the `magento-doc` Pages project:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` |

The build script compiles each product guide with its folder base path, copies it into `dist/<product-folder>/`, and writes the root homepage into `dist/index.html`.

## Deploy

Deploy the generated site to Cloudflare Pages:

```bash
npm run deploy:cloudflare
```

Required Cloudflare permissions:

- Pages write access
- Account read access

## About Webkul

Webkul builds Magento 2, Adobe Commerce, marketplace, mobile commerce, PIM, ERP, CRM, and custom commerce solutions for businesses that need reliable, scalable, and integration-ready digital commerce systems.
