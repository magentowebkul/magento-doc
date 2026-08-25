---
title: Known Limitations
description: What this version does not do, stated plainly.
---

# Known limitations

## Not supported yet

| Area | Detail |
| --- | --- |
| **Hyvä themes** | Hyvä replaces RequireJS with Alpine, so the interactive layer never boots. Markup and images render; popup, slider drag and analytics do not. A compatibility module is planned. |
| **Hashtag feeds** | The data model supports hashtag sources; there is no admin screen to add them. |
| **Tagged (UGC) feeds** | Tagged posts sync and can be approved, but a feed cannot be sourced *by* tagged media from the UI. |
| **Mixed source feeds** | Selectable; behaves like Account today. |
| **Manual feed curation** | A manual feed renders exactly what is assigned to it, but assigning is not yet in the admin. |
| **Instagram Stories** | Needs Meta App Review permissions beyond the basic scope. |
| **Brand colours in admin** | Layout, spacing and radius are configurable; colours, fonts and hover effects need theme CSS. |
| **GraphQL / headless** | The data layer is separated to make this straightforward, but no resolvers ship yet. |

## Behaviours that surprise people

- **Deleting an account deletes its posts.** They are linked by a foreign key.
  Disconnect instead if you want to keep them.
- **The tile product badge counts tags, not sellable products.** A post tagged
  with three unsellable products shows a badge and an empty popup.
- **Analytics undercount**, as all client-side collection does.
- **A feed with no matching posts renders nothing at all** — no empty frame. There
  is no admin warning when that happens yet.

## Deliberate choices

Not gaps — decisions:

- **Rejected posts are filtered in the query, not the template.** No theme,
  widget or cache can leak one.
- **Product data loads separately from the feed**, so the gallery stays
  page-cacheable while prices and stock stay live.
- **Media is mirrored locally**, because Instagram CDN links expire within a day.
- **The feed works without JavaScript**; the script only adds the popup, slider
  and lazy video.

## See also

- [Requirements](./requirements.md) — supported platforms and themes
- [For Developers](./developers.md) — the seams built for working around these
