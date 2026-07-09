# Magento Docs

This repository publishes multiple Magento product guides under one docs domain.

## URL Structure

- Main docs index: `https://magento-doc.webkul.com/`
- Hyvä Jewellery Theme: `https://magento-doc.webkul.com/hyva-jewelry-theme/`

## Cloudflare Pages

Use these settings for the `magento-doc` Pages project:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` |

The root build script builds each product guide with its folder base path and copies it into `dist/<product-folder>/`.

## Auto Deploy

This repo includes `.github/workflows/cloudflare-pages.yml` for direct Cloudflare Pages deployment on every push to `main`.

Required GitHub secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
