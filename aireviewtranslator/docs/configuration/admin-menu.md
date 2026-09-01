# Admin Menu

Once the module is enabled, an **AI REVIEW TRANSLATOR** entry appears in the admin sidebar.

![The AI Review Translator admin menu](/images/admin-menu.webp)

## What is in it

| Menu item | Goes to |
| --- | --- |
| **Store Configuration** | The **AI Review Translation** config section. |
| **Support → User Guide** | This documentation. |
| **Support → Store Extension** | The extension's page on the Webkul store. |
| **Support → Ticket/Customisations** | Webkul's UVdesk support desk. |
| **Support → Services** | Webkul's services page. |
| **Support → Reviews** | The extension's own store reviews. |

There is no grid of translated reviews. Translations are read on the storefront, through
[GraphQL](../developers/graphql.md), or directly from the
[database table](../developers/data-model.md).

## The menu is missing

Every item depends on `aireviewtranslator/general/status`. An absent menu means the module
is switched off, not broken.

1. Open **Stores → Configuration → Webkul → AI Review Translation**.
2. Set **Enable Module** to **Yes**, save.
3. `php bin/magento cache:flush`.

If it is enabled and still missing, the admin role lacks the menu ACL resource — see
[Access Control](./permissions.md).
