# Scope & Store Views

Every Zoho SSO setting can be set at **Default Config**, **Website**, or **Store View**
scope.

## Common setups

| You want… | Do this |
| --- | --- |
| Zoho sign-in everywhere | Set everything at **Default Config**. |
| Zoho sign-in on one website only | Set **Enable Zoho SSO = No** at Default, then **Yes** on that website. |
| A different Zoho client per brand | Set **Zoho Client ID** and **Zoho Client Secret** on each website. |
| A different customer group per store | Set **Default Customer Group for New Accounts** per store view. |

## How to override a value

1. Open **Stores → Configuration → Webkul → Zoho SSO**.
2. Pick a website or store view from the **Scope** switcher at the top left.
3. Clear **Use Default** (or **Use Website**) next to the field.
4. Change the value and click **Save Config**.

## Customer accounts and website scope

Customers are matched per **website**. With **Account Sharing Options → Share Customer
Accounts** set to **Per Website** (Magento's default), the same Zoho email signing in on two
websites gets two separate customer accounts. See
[Accounts & Matching](../storefront/accounts.md).
