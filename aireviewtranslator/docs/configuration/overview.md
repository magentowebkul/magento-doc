# Configuration Overview

Everything the extension does is driven from one place:

> **Stores → Configuration → Webkul → AI Review Translation**

There is no separate grid, no per-product setting, and no per-review setting. Approve a
review and it is translated with whatever model this page names.

## The two groups

| Group | Holds | Page |
| --- | --- | --- |
| **General Settings** | Master switch, provider, key, model, limits. | [General Settings](./general-settings.md) |
| **Product Information** | Installed module version. Read-only. | — |

## Related pages

| Topic | Page |
| --- | --- |
| Every field, explained | [General Settings](./general-settings.md) |
| Output size and timeouts | [Limits & Timeouts](./limits.md) |
| Which language a store view gets | [Store Views & Languages](./scope.md) |
| The admin menu the module adds | [Admin Menu](./admin-menu.md) |
| Restricting access by role | [Access Control](./permissions.md) |

## Scope

Every field is **store-view scoped**, which matters more here than in most extensions:

- Different store views can use different providers or models — a cheap model for a
  low-traffic view, a stronger one for your flagship.
- Translation can be on for some store views and off for others.
- The **target language** is never configured. It comes from each store view's own locale.

Use the **Scope** switcher at the top-left of the configuration page to move between
Default Config, a website, and a store view. See [Store Views & Languages](./scope.md).

## After any change

```bash
php bin/magento cache:flush
```
