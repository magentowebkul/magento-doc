# Access Control

Restrict who can change Zoho SSO under **System → Permissions → User Roles → Role
Resources**.

| Resource | Allows |
| --- | --- |
| **Zoho SSO** | The top-level admin menu |
| **Zoho SSO → Configuration** | The Configuration menu link |
| **Zoho SSO → Support** (and its children) | The support links |
| **Stores → Settings → Configuration → Zoho SSO Configuration** | Viewing and saving the settings page |

To let a role see the settings, grant **Zoho SSO Configuration** under **Stores → Settings
→ Configuration**. Without it, the Zoho SSO section is hidden from that role.

::: tip Protect the Client Secret
The secret is encrypted in the database, but anyone who can save the configuration can
replace it. Grant **Zoho SSO Configuration** only to roles that manage integrations.
:::
