---
title: Magento 2 Zoho SSO
---

# Introduction

Customers who already work in Zoho should not need another password for your store. The
**Magento 2 Zoho SSO** extension adds a **Sign in with Zoho** button to your storefront.
One click opens Zoho's own sign-in page; when the customer approves, they come back to your
store already logged in.

If an account with that email already exists on the website, the customer is logged in to
it. If not, a new customer account is created for them on the spot, in the customer group
you choose.

<p>
  <a href="https://store.webkul.com/magento2-zoho-sso.html" target="_blank" rel="noopener">Buy Now</a>
  &nbsp;·&nbsp;
  <a href="https://webkul.uvdesk.com/" target="_blank" rel="noopener">Support</a>
</p>

## Where the button appears

| Page | Button label |
| --- | --- |
| Customer Login (`/customer/account/login/`) | **Sign in with Zoho** |
| Create New Customer Account (`/customer/account/create/`) | **Sign up with Zoho** |
| Checkout sign-in popup (`/checkout/`, guests only) | **Sign in with Zoho** |

## Who it is for

| You are… | This extension gives you… |
| --- | --- |
| A B2B merchant whose buyers use Zoho | One-click login with the account they already have. |
| A merchant losing guests at checkout | Sign-in without leaving the checkout page. |
| A merchant with customers outside the US | Support for all 11 Zoho data centers. |
| A merchant who segments new customers | New Zoho sign-ups land in a customer group you pick. |

## Standards-based

The extension uses Zoho's **OAuth 2.0 / OpenID Connect (OIDC)** authorization-code flow.
You register your store once in the Zoho API Console, paste the Client ID and Client
Secret into Magento, and Zoho does the authentication. Customer passwords for Zoho never
pass through your store.

## Next

1. [Key Features](./features.md) — what it can and cannot do.
2. [How It Works](./how-it-works.md) — the sign-in flow in one diagram.
3. [Requirements](./installation/requirements.md) — before you install.
