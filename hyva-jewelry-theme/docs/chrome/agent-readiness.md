# Agent Readiness

The builder includes an optional **Agent Readiness** layer that helps AI agents, crawlers, and browser-integration tools discover, read, and cite your storefront. It is off by default.

![Desktop performance and agentic browsing check](/screenshots/agentic-performance-desktop.png)

## Enable the layer

Toggle **Enable agent readiness** to publish robots rules, sitemap hints, metadata, and discovery responses.

## Store identity

Used in public store summaries for supported agents and crawlers:

- **Site name** (e.g. *Aurum Vale Jewels*)
- **Contact email**
- **Site description** — a short public description agents may quote

## Crawler access

- **AI crawler policy** — `Allow listed AI crawlers` or `Disallow listed AI crawlers`.
- **AI crawler user agents** — one per line (e.g. `GPTBot`, `ClaudeBot`, `Google-Extended`).
- **Blocked areas** — private store areas to block, such as checkout and customer account pages.
- **Content signal** — choose how agents may use public store content.

## Sitemap

- **Sitemap product limit** — cap the number of product URLs emitted (0–5000) for faster agent indexing.

## Agent outputs

Turn on the discovery formats you want to expose:

| Output | What it does |
| --- | --- |
| **Link headers** | Helps supported tools find your sitemap and discovery information. |
| **Markdown for agents** | Gives supported agents a cleaner text version of public store content. |
| **Well-known documents** | Publishes standard discovery information for supported tools. |
| **WebMCP registration** | Helps browser-based tools understand your storefront. |

![Agent Readiness settings in Magento Admin](/screenshots/agent-readiness-settings.png)

::: warning Privacy
Only enable crawler and discovery features after reviewing the blocked areas. Keep checkout, customer, and admin pages blocked.
:::
