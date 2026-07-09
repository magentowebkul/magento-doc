# Magento Docs

This repository contains deployable documentation projects.

## Hyva Jewelry Theme docs

The Magento 2 Hyva Jewelry Theme user guide is inside:

```text
hyva-jewelry-theme/
```

## Cloudflare Pages setup

Connect this GitHub repository to Cloudflare Pages and use these settings:

| Setting | Value |
| --- | --- |
| Project name | `magento-doc` |
| Production branch | `livewine` |
| Root directory | `hyva-jewelry-theme` |
| Build command | `npm ci && npm run build` |
| Build output directory | `docs/.vuepress/dist` |
| Node version | `22` |

The folder also includes the current built output at:

```text
hyva-jewelry-theme/docs/.vuepress/dist/
```

If you want Cloudflare to deploy without rebuilding, use:

| Setting | Value |
| --- | --- |
| Root directory | `hyva-jewelry-theme` |
| Build command | `exit 0` |
| Build output directory | `docs/.vuepress/dist` |

The normal recommended setup is still `npm ci && npm run build`, because Cloudflare will rebuild the docs after each GitHub push.
