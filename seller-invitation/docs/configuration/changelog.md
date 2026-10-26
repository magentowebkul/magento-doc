# Release Notes & Changelog

Track feature enhancements, bug fixes, and version compatibility updates across releases of the **Webkul Marketplace Seller Invitation for Magento 2** extension.

---

## Version 5.0.4

*Release Date: Current Production Release*

- **Compatibility**:
  - Enhanced compatibility with **Webkul Multi-Vendor Marketplace 5.1.2**.
- **Refactoring & Polish**:
  - Code hygiene improvements complying with Magento Coding Standards (PSR-12).

---

## Version 5.0.3

*Release Date: Recent Release*

- **Compatibility**:
  - Added compatibility with **Magento 2.4.8^** and **PHP 8.4**.
- **Architecture**:
  - Updated type hinting and dependency injection declarations.

---

## Version 5.0.2

*Release Date: Maintenance Release*

- **Compatibility**:
  - Added compatibility with **Magento 2.4.7^** and **PHP 8.3**.
- **Security**:
  - Strengthened form input sanitization and rate limiting on admin invitation controllers.

---

## Version 5.0.1

*Release Date: Feature Release*

- **New Features**:
  - **Resend Invitation After Expiry**: When the link expiration feature is enabled, the store administrator can now re-invite a candidate after their previous invitation link expires.
  - **Existing Customer Seller Onboarding**: Existing registered customers can now be invited and can register as a seller directly via the **Become Seller** customer dashboard menu.
- **Compatibility**:
  - Certified compatibility with **Magento 2.4.6**.
- **Bug Fixes**:
  - Corrected timezone calculations during link expiration checks.

---

## Version 5.0.0

*Release Date: Major Architecture Release*

- **Core Capabilities**:
  - Certified compatibility with **Webkul Multi-Vendor Marketplace 5.0.3**.
  - Restrict public seller registration and introduce invite-only vendor onboarding.
  - Email notification system with personalized invitation links.
  - Cryptographic single-use invitation tokens (`inviteCode`).
  - Dedicated admin UI component grid for tracking sent invitations.
  - Configurable link expiration time in hours (`marketplace/sellerinvitation/link_expiry`).
  - Live AJAX shop URL validation on frontend registration forms.
  - Declarative database schema implementation (`etc/db_schema.xml`).

::: tip Next Step
Find answers to common operational questions in the [Frequently Asked Questions](/help/faq).
:::
