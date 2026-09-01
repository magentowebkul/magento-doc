# Access Control

Two ACL resources gate the extension, under **System → Permissions → User Roles → Role
Resources**.

| Resource | Controls |
| --- | --- |
| **AI Review Translator** (and its children) | The admin menu and its support links. |
| **Stores → Settings → Configuration → Ai Review Translator configuration** | The configuration section itself. |

## The two are independent

They are in different branches of the ACL tree, which produces two states that look like
bugs:

| Granted | Not granted | The admin sees |
| --- | --- | --- |
| Menu resource | Config resource | The menu, but **Store Configuration** leads to an access-denied page. |
| Config resource | Menu resource | The configuration section via **Stores → Configuration**, but no sidebar menu. |

Grant both to anyone who administers the extension.

## The child resources

Under **AI Review Translator**:

- **Store Configuration**
- **Support** → **User Guide**, **Store Extension**, **Ticket/Customisations**,
  **Services**, **Reviews**

Each hides only its own menu link. They are convenience links, so removing them from a
limited role is harmless.

## Who needs what

| Role | Grant |
| --- | --- |
| Store owner / lead admin | Both resources. |
| Catalogue or content staff | Neither — they approve reviews through the standard **Marketing → Reviews** ACL, and translation follows automatically. |
| Developer / integrator | Both, plus CLI access for [`Translate:All`](../translating/cli.md). |

::: tip The CLI ignores ACL
`php bin/magento Translate:All` runs as whichever system user invokes it. Shell access is
the real control there, not admin roles.
:::
