# Introduction

**Webkul Marketplace Seller Invitation for Magento 2** transforms your open marketplace into a curated, invite-only vendor platform. It empowers store administrators to govern and restrict seller registrations, ensuring only vetted merchants who receive an official invitation link can open a vendor shop.

In a standard Magento 2 Multi-Vendor Marketplace, any registered customer or public visitor can choose to become a seller during registration or through their customer account dashboard. While open registration works for some marketplaces, growing enterprises require rigorous vetting to maintain catalog quality, verify business credentials, prevent spam or fraudulent sellers, and protect brand reputation.

The **Seller Invitation** extension solves this by disabling open seller onboarding. Only vendors who receive a secure, cryptographically random, single-use invitation link from the store administrator can register as a seller.

::: tip Latest Version Compatibility
The latest release (**v5.0.4**) is compatible with **Webkul Multi-Vendor Marketplace 5.1.2**, **Magento ^2.4.8**, and **PHP 8.4**. It includes advanced link expiration controls, resend capabilities for expired links, seamless existing customer registration, and rate-limiting anti-abuse security. For complete version history, see the [Release Notes & Changelog](/configuration/changelog).
:::

---

## Why Use Seller Invitation for Your Marketplace?

Operating an enterprise multi-vendor marketplace presents distinct seller management challenges:

1. **Unvetted Merchant Sign-Ups**: Open registration allows unauthorized or fraudulent users to establish storefronts without administrative pre-qualification.
2. **Catalog Dilution & Counterfeit Risk**: Unchecked seller influx can flood your store with duplicate, counterfeit, or substandard product listings.
3. **Onboarding Administrative Overhead**: Disapproving unqualified sellers after they register wastes administrative hours and creates vendor friction.
4. **Targeted Vendor Recruitment**: Strategic marketplaces often recruit specific manufacturers, brands, or regional sellers, requiring private, branded onboarding channels.

---

## How Webkul Seller Invitation Solves It

The **Webkul Marketplace Seller Invitation** module provides an end-to-end invite-only infrastructure:

- **Restricted Public Registration**: When enabled, the extension conceals the standard "Do You Want To Become A Seller / Vendor?" option on public sign-up forms. Uninvited visitors can only register as regular retail customers.
- **Cryptographic Single-Use Links**: Invitations generate a 16-character unique random token (`inviteCode`). Once an invitee completes registration, the token is permanently consumed and marked as `Registered`, preventing reuse or forwarding.
- **Configurable Link Expiration (TTL)**: Administrators can enforce a link expiration window (in hours). Prospective sellers must complete registration before the timer elapses.
- **Resend Expired Invitations**: If a prospective merchant misses their registration deadline, the administrator can dispatch a fresh invitation link to that email address.
- **Support for Both New and Existing Customers**:
  - **New Sellers**: Clicking the link opens the sign-up page with the invitee's name and email pre-filled, locks seller registration mode (`is_seller = 1`), and reveals the Shop URL verification input.
  - **Existing Customers**: If an invited email matches a registered customer account, the invitation email prompts them to log in. The **Become Seller** panel validates their active invite code and unlocks vendor registration.
- **Anti-Abuse Rate Limiting & Hashing**: Backend invitation dispatch includes SHA-256 payload hashing and remote IP rate limiting (maximum 5 requests per 60-second window) to block automated spamming or accidental double clicks.
- **Dedicated Admin Invitation Log**: A comprehensive UI component grid displays all dispatched invitations with recipient name, email, generated invite code, seller status (*Registered* / *Not Registered*), and link status (*Active* / *Expired*).
- **Live AJAX Shop URL Validation**: As sellers input their proposed shop URL, real-time AJAX requests verify store URL availability without page reloads.

---

## Key Features at a Glance

| Feature | Description |
|---|---|
| **Curated Vendor Onboarding** | Restrict seller registrations exclusively to invited candidates. |
| **Public Seller Option Control** | Hides the "Do You Want To Become A Seller / Vendor" radio selection from public registration forms. |
| **Unique Random Invite Codes** | Generates unique 16-character cryptographic tokens tied to the invitee's email. |
| **Single-Use Enforcement** | Once a seller registers with an invite code, it cannot be reused. |
| **Configurable Link Expiration** | Define the invitation validity window in hours (`marketplace/sellerinvitation/link_expiry`). |
| **Resend Expired Invitations** | Admin can re-invite candidates whose previous invitation links expired. |
| **Existing Customer Support** | Existing customers can be invited to upgrade their retail accounts to vendor status via the "Become Seller" menu. |
| **Auto-Prefill Registration** | New vendors clicking an invite link find their name and email pre-filled in the sign-up form. |
| **Email Mismatch Protection** | Prevents candidates from using another recipient's invitation code by matching the code against the registered email. |
| **Rate Limiting & Anti-Flood** | Protects the admin invitation controller from rapid-fire submissions using IP caching and request hashing. |
| **WYSIWYG Email Description** | Compose customized invitation messages in the admin panel with rich text or HTML. |
| **Customizable Email Template** | Use Magento's transactional email system to tailor branding, styling, and copy. |
| **Administrative UI Grid** | Manage, filter, search, and mass-delete invitations with real-time status indicators. |
| **Seamless Marketplace Integration** | Fully integrated with Webkul Multi-Vendor Marketplace 5.x. |

::: tip Next Step
Review system compatibility and dependencies in [Requirements](/requirements).
:::
