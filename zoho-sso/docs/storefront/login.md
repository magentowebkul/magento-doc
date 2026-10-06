# Customer Login

**Page:** `/customer/account/login/`

When Zoho SSO is enabled, the **Registered Customers** form gets a divider reading **Or sign
in with**, followed by a Zoho tile. It sits below the regular **Sign In** button, so the
email-and-password login is unchanged.

![Customer Login page with the Or sign in with divider and the Zoho tile below the Sign In button](/images/customer-login-page.webp)

## Signing in

1. The customer clicks the Zoho tile (link title **Sign in with Zoho**).
2. Zoho's sign-in page opens — in a popup on desktop, in the same tab on touch devices.
3. The customer signs in to Zoho and allows access.
4. They land on **My Account**, logged in, with a welcome message.

## Already logged in

A customer who is already logged in and opens the Zoho sign-in link is sent straight to
**My Account**. Zoho is not contacted.

## Accessibility

- The divider is a proper separator (`role="separator"`).
- The tile is a real link with an accessible name, **Sign in with Zoho**, so screen
  readers and keyboard users can reach it.
- The tile has a visible focus outline.

Next: [Create Account](./create-account.md).
