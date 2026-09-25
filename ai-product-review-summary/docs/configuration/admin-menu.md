# Admin Menu

Once **Enable Module** is **Yes**, an **AI Product Review Summary** entry appears in the
admin sidebar.

![AI Product Review Summary admin menu](/images/admin-product-review-menu.webp)

| Item | Opens |
| --- | --- |
| **AI Product Review Summary Settings** | **Stores → Configuration → Webkul → AI Product Review Summary** |
| **Support → User Guide** | The user guide, in a new tab |
| **Support → Store Extension** | The extension's page on the Webkul Store |
| **Support → Ticket/Customisations** | The Webkul support desk, to raise a ticket |
| **Support → Services** | Webkul's Magento development services |

## The menu is missing

The menu is hidden while the module is disabled. Enable it the first time from
**Stores → Configuration → Webkul → AI Product Review Summary**, then flush the cache.

If it is still missing, your admin role may lack the menu permissions. See
[Access Control](./permissions.md).

::: tip There is no summaries grid
The menu has no page listing the generated summaries. To see them, open a product page on
the storefront or query the table — see [Useful SQL](../developers/sql.md).
:::

Next: [Access Control](./permissions.md).
