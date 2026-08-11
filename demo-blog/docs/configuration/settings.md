# Settings

Every field in **Stores → Configuration → Demo Blog**, in the order it appears.

## General

![General and Listing settings](/images/config-general.webp)

| Field | Default | What it does |
|---|---|---|
| Enable Blog | `No` | Master switch. `No` hides every blog URL and returns 404. |
| Blog Route | `blog` | The first URL segment. `journal` gives `/journal`. |
| Blog Title | `Blog` | Heading on the listing page and the `<title>` suffix. |
| Meta Description | empty | Meta description for the listing page only. Posts have their own. |

::: warning
Changing **Blog Route** changes every blog URL. Old links 404 unless you add
redirects in **Marketing → URL Rewrites**. Pick the route before you publish.
:::

### Listing

| Field | Default | What it does |
|---|---|---|
| Posts Per Page | `9` | Posts before pagination. Use a multiple of your column count. |
| Sort Posts By | Publish date — newest first | Also: oldest first, title A–Z, manual position. |
| Show Author | `Yes` | Shows the author name under each post title. |

## Display

![Layout and sidebar settings](/images/config-display.webp)

| Field | Default | What it does |
|---|---|---|
| Listing Layout | Grid — 3 columns | Grid (2, 3, or 4 columns) or a single-column list. |
| Sidebar Position | Right | `Right`, `Left`, or `None`. `None` gives a full-width listing. |
| Featured Image Ratio | `16:9` | Crop ratio for listing thumbnails. Also `4:3` and `1:1`. |

### Sidebar Widgets

| Field | Default | What it does |
|---|---|---|
| Show Categories | `Yes` | Category list with a post count each. |
| Show Recent Posts | `Yes` | The five most recent published posts. |
| Show Search | `No` | Keyword search across post titles and content. |

::: tip
With **Sidebar Position** set to `None`, the widget switches have no effect. The
fields stay editable — they apply again as soon as you restore a sidebar.
:::

## Comments

| Field | Default | What it does |
|---|---|---|
| Enable Comments | `Yes` | `No` hides the comment form and existing comments. |
| Who Can Comment | Logged-in customers | Or `Everyone`, which adds name and email fields. |
| Require Approval | `Yes` | New comments wait in **Pending** until an admin approves. |
| Notify Admin | `Yes` | Sends an email on each new comment. |
| Notification Email | store owner | Where those emails go. Accepts one address. |

::: danger
Setting **Who Can Comment** to `Everyone` while **Require Approval** is `No`
publishes anonymous comments instantly. Expect spam. Keep approval on.
:::

## Full reference of defaults

```
demoblog/general/enabled              = 0
demoblog/general/route                = blog
demoblog/general/title                = Blog
demoblog/listing/posts_per_page       = 9
demoblog/listing/sort_by              = published_desc
demoblog/listing/show_author          = 1
demoblog/display/layout               = grid_3
demoblog/display/sidebar              = right
demoblog/display/image_ratio          = 16_9
demoblog/comments/enabled             = 1
demoblog/comments/who                 = customers
demoblog/comments/require_approval    = 1
```

Read a live value from the command line:

```bash
bin/magento config:show demoblog/general/route
```

## Next step

Publish something — [Managing Content → Posts](/managing-content/posts).
