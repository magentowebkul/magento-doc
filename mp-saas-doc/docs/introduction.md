# Introduction

**Webkul Multi Company SaaS Extension for Magento 2 (Adobe Commerce)** transforms your multi-vendor marketplace into a scalable Software-as-a-Service (SaaS) platform. It empowers marketplace sellers to operate as self-contained tenants equipped with dedicated subdomains, custom storefront themes, and automated recurring subscription billing.

In exchange for an active recurring membership subscription, vendors enjoy **0% commission selling**—retaining 100% of their net sales without paying per-order marketplace commission fees to the store administrator.

::: tip SaaS Multi-Tenant Model
By shifting from traditional per-transaction commission fees to predictable recurring subscriptions, marketplace operators secure stable recurring revenue while providing sellers with complete autonomy, branded subdomains, and greater profit margins.
:::

---

## Why Choose Multi Company SaaS for Magento 2?

* **Predictable Recurring Revenue**: Transform sporadic seller commission transactions into consistent, automated subscription revenue cycles.
* **Dedicated Vendor Subdomains**: Each vendor establishes a branded web address (e.g., `brand.yourmarketplace.com`) to showcase their profile and product catalog independently.
* **Storefront Personalization**: Sellers can choose from available marketplace frontend themes to personalize their subdomain appearance.
* **100% Earnings Retention (0% Commission)**: The module automatically bypasses marketplace commission calculations for vendors with an active subscription tier.
* **Automated Gateway Renewals**: Fully integrated with PayPal Recurring Express Checkout and Stripe Billing for seamless lifecycle billing and webhook notifications.
* **Dedicated Checkout Safeguards**: Enforces strict cart exclusivity so SaaS subscription memberships are processed securely through isolated recurring checkout channels.

---

## Architecture Overview

<div class="workflow-flow" style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin: 28px 0;">
  <div style="background: var(--vp-c-bg-elv, #ffffff); border: 1px solid var(--vp-c-border, #eaeaea); border-radius: 8px; padding: 14px 24px; text-align: center; width: 100%; max-width: 480px; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
    <div style="font-weight: 700; font-size: 15px; color: var(--vp-c-text, #171717);">Marketplace Administrator</div>
    <div style="font-size: 13px; color: var(--vp-c-text-mute, #666666); margin-top: 3px;">Defines Duration Types &amp; Configures Recurring Gateways</div>
  </div>
  
  <div style="display: flex; flex-direction: column; align-items: center; color: var(--vp-c-text-mute, #666666);">
    <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 2px;">Publishes Membership Plans</span>
    <span style="font-size: 18px; line-height: 1;">↓</span>
  </div>

  <div style="background: var(--vp-c-bg-elv, #ffffff); border: 1px solid var(--vp-c-border, #eaeaea); border-radius: 8px; padding: 14px 24px; text-align: center; width: 100%; max-width: 480px; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
    <div style="font-weight: 700; font-size: 15px; color: var(--vp-c-text, #171717);">Seller Storefront Portal</div>
    <div style="font-size: 13px; color: var(--vp-c-text-mute, #666666); margin-top: 3px;">Vendors Browse &amp; Subscribe to Plans</div>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; color: var(--vp-c-text-mute, #666666);">
    <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 2px;">Dedicated Recurring Checkout (PayPal / Stripe)</span>
    <span style="font-size: 18px; line-height: 1;">↓</span>
  </div>

  <div style="background: var(--vp-c-bg-elv, #ffffff); border: 2px solid #2563eb; border-radius: 8px; padding: 16px 24px; text-align: center; width: 100%; max-width: 480px; box-shadow: 0 4px 14px rgba(37,99,235,0.12);">
    <div style="font-weight: 800; font-size: 16px; color: #2563eb;">Active Tenant Subscription</div>
    <div style="font-size: 13px; color: var(--vp-c-text-mute, #666666); margin-top: 3px;">Automated Cycle Mandate &amp; Webhook Synchronization</div>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; color: var(--vp-c-text-mute, #666666);">
    <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 2px;">Unlocks Full Tenant Privileges</span>
    <span style="font-size: 18px; line-height: 1;">↓</span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; width: 100%; max-width: 720px;">
    <div style="background: var(--vp-c-bg-elv, #ffffff); border: 1px solid var(--vp-c-border, #eaeaea); border-radius: 8px; padding: 18px 16px; text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
      <div style="font-weight: 700; font-size: 14px; color: var(--vp-c-text, #171717);">Branded Subdomain</div>
      <div style="font-size: 12px; color: var(--vp-c-text-mute, #666666); margin-top: 6px;"><code>vendor.marketplace.com</code></div>
    </div>
    <div style="background: var(--vp-c-bg-elv, #ffffff); border: 1px solid var(--vp-c-border, #eaeaea); border-radius: 8px; padding: 18px 16px; text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
      <div style="font-weight: 700; font-size: 14px; color: var(--vp-c-text, #171717);">Custom Theme</div>
      <div style="font-size: 12px; color: var(--vp-c-text-mute, #666666); margin-top: 6px;">Independent Storefront Aesthetic</div>
    </div>
    <div style="background: var(--vp-c-bg-elv, #ffffff); border: 1px solid var(--vp-c-border, #eaeaea); border-radius: 8px; padding: 18px 16px; text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
      <div style="font-weight: 700; font-size: 14px; color: #16a34a;">0% Commission</div>
      <div style="font-size: 12px; color: var(--vp-c-text-mute, #666666); margin-top: 6px;">100% Net Earnings Retention</div>
    </div>
  </div>
</div>

---

## Key Features

| Capability | Details |
| :--- | :--- |
| **Multi-Tenant Architecture** | Vendors operate as autonomous tenants with isolated branding within the marketplace ecosystem. |
| **Branded Subdomains** | Allows vendors to configure and manage personalized subdomains for their store profiles and collections. |
| **Custom Theme Selector** | Sellers can select and switch among available marketplace themes for their subdomain. |
| **0% Commission Selling** | Marketplace commission deduction is automatically suspended for active subscribers. |
| **Recurring Billing Gateways** | Integrated with PayPal Recurring Express Checkout and Stripe Recurring Billing. |
| **Custom Duration Types** | Admin can configure multiple duration plans (monthly, quarterly, annual) with custom pricing. |
| **Cart Exclusivity** | Enforces dedicated checkout for SaaS plans to protect recurring billing mandates. |
| **Admin Bulk Management** | Assign or revoke membership plans to multiple sellers simultaneously via admin grids. |
| **Multilingual & RTL Support** | Complete CSV translation support, including Right-to-Left (RTL) languages like Arabic. |
| **Hyvä Theme Compatibility** | Supported with Hyvä storefront compatibility via `Webkul_MpSaasHyva`. |

---

## Version & Platform Information

* **Current Extension Version**: `5.0.5`
* **Supported Magento Editions**: Magento Open Source 2.0.x – 2.4.x, Adobe Commerce 2.0.x – 2.4.x (Latest: **2.4.9**)
* **PHP Compatibility**: PHP 8.1, 8.2, 8.3, 8.4, and **8.5**
* **Prerequisites**: Webkul Marketplace Core & Webkul Vendor Subdomain
