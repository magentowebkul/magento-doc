# Data & Sessions

## Database

The module creates **no tables** and **no EAV attributes**.

| Table | How it is used |
| --- | --- |
| `core_config_data` | Settings under `zohosso/options/*`. `client_secret` is encrypted. |
| `customer_entity` | New customers created on first Zoho sign-in. No password hash. |

## Configuration paths

| Path | Default | Setting |
| --- | --- | --- |
| `zohosso/options/active` | `0` | Enable Zoho SSO |
| `zohosso/options/region` | `us` | Zoho Data Center / Region |
| `zohosso/options/client_id` | — | Zoho Client ID |
| `zohosso/options/client_secret` | — | Zoho Client Secret (encrypted) |
| `zohosso/options/api_version` | `v2` | Zoho OAuth API Version |
| `zohosso/options/redirect_uri` | — | Custom Redirect URI (Optional) |
| `zohosso/options/default_group` | `1` | Default Customer Group for New Accounts |

Set them from the CLI if you deploy configuration as code:

```bash
php bin/magento config:set zohosso/options/active 1
php bin/magento config:set zohosso/options/region eu
php bin/magento config:set zohosso/options/client_id 1000.XXXXXXXXXXXXXXXX
php bin/magento config:set zohosso/options/default_group 1
```

Set **Zoho Client Secret** in the admin so it is stored encrypted. `config:set` stores the
value as plain text. The module still reads a plain-text secret, but it sits unencrypted in
the database.

Region codes: `us`, `eu`, `in`, `au`, `cn`, `jp`, `ca`, `sa`, `uk`, `sg`, `ae`.

## Customer session keys

| Key | Lifetime |
| --- | --- |
| `zoho_sso_state` | Set when sign-in starts, removed on callback |
| `zoho_sso_popup` | Set for popup sign-ins, removed on callback |
| `zoho_sso_return` | Set to `checkout` for checkout sign-ins, removed on callback |
| `zoho_sso_popup_target` | Set before the completion page, removed when it renders |

The state round-trip depends on the session cookie surviving the trip to Zoho and back.

## Caching

The Zoho blocks are not cacheable, so full-page cache never stores a page with a stale
button. Login, registration, and checkout are uncacheable in Magento anyway.
