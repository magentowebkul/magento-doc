# FAQ

## Does Webkul see my customers' Zoho data?

No. Sign-in goes directly between your store and Zoho. Nothing passes through Webkul.

## Does my store ever see the customer's Zoho password?

No. The customer types it on Zoho's own page. Your store only receives a one-time code,
then a token it uses once to read the email and name.

## Do I need a paid Zoho plan?

No. Creating an OAuth client in the Zoho API Console is free.

## Can admin users sign in to the Magento admin with Zoho?

No. The extension is for storefront customers only.

## Can I add Google or other providers?

Not with this extension. The provider list holds Zoho only.

## What happens to customers who already have an account?

If the Zoho email matches an account on the same website, they are logged in to that
account. Nothing is duplicated. See [Accounts & Matching](../storefront/accounts.md).

## Can a Zoho customer also use a password?

Yes. Accounts created through Zoho have no password at first. The customer can set one with
**Forgot Your Password?** and then use either method.

## Which customer group do new Zoho customers get?

The **Default Customer Group for New Accounts** you choose. Existing customers keep their
group.

## Are addresses or phone numbers imported?

No. Only email, first name, and last name.

## Does it work on mobile?

Yes. On touch devices the sign-in happens in the same tab instead of a popup.

## Does it work with Hyvä or a PWA storefront?

The module targets Luma-based themes. Hyvä and headless storefronts need a customisation.

## Is there a REST or GraphQL API?

No.

## Can I change the button text?

Yes. The labels **Or sign in with**, **Sign in with Zoho**, **Or sign up with**, and
**Sign up with Zoho** are translatable through `i18n/en_US.csv` or your theme's
translation file.

## What happens when I uninstall?

The Zoho button disappears. Customers created through Zoho stay as ordinary customers and
can sign in with a password after resetting it. The module creates no tables, so nothing
else is left behind except `zohosso/options/*` rows in `core_config_data`.

## Where do I get help?

Raise a ticket at [webkul.uvdesk.com](https://webkul.uvdesk.com/). Include the module
version (shown at the bottom of the configuration page) and the relevant lines from
`var/log/zohosso.log`.
