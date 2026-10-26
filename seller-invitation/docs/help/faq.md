# Frequently Asked Questions

Find quick answers to common questions about the **Webkul Marketplace Seller Invitation for Magento 2** extension.

---

## General & Architecture

### What is the primary purpose of the Seller Invitation extension?
By default, the Webkul Marketplace allows any registered customer or visitor to apply as a seller. The **Seller Invitation** extension converts your marketplace into an **invite-only** platform where only individuals who receive an administrative invitation link can register as sellers.

### Is the Webkul Multi-Vendor Marketplace extension required?
**Yes.** This extension is an add-on module built specifically for the **Webkul Multi-Vendor Marketplace for Magento 2** ecosystem. It depends on `webkul/module-marketplace: 5.*` and `webkul/module-base: ^4.0`.

### Can uninvited visitors still register as regular retail customers?
**Yes.** Standard customer registration remains fully functional. When the module is enabled, the extension simply hides the "Do You Want To Become A Seller / Vendor?" option on the registration page, so uninvited visitors register as standard shoppers.

---

## Invitations & Links

### Can an invitation link be used more than once?
**No.** Every invitation link contains a unique 16-character cryptographic token (`inviteCode`). Once a seller completes their registration, the database immediately marks that record as **Registered (`status = 1`)**. Any subsequent registration attempt using that link is rejected.

### Can an invitee change their email address during registration?
**No.** For security, the system validates that the email address submitted during registration exactly matches the email address to which the invitation was sent. If an invitee attempts to submit a different email address, the registration is rejected.

### How does link expiration work?
When **Enable Link Expiry** is set to **Yes** in System Configuration, administrators define an expiration window in **Hours** (e.g., `24` or `48` hours). If the invitee does not complete registration within that timeframe, the link expires and can no longer be used.

### Can the administrator resend an invitation if the previous link expired?
**Yes.** If link expiration is enabled, once an invitation link expires, the administrator can send a new invitation to that same email address. The system will generate a fresh token and dispatch a new email.

### Can the administrator send multiple invites to the same email while an invite is still active?
**No.** To prevent spam and confusion, if an invitation is currently active and unexpired, the system displays a warning preventing duplicate invitations until the previous link expires or is deleted.

---

## Existing Customers

### How do existing registered customers become sellers?
If the administrator sends an invitation to an email address that already belongs to a registered customer:
1. The invitation email notifies them to log in to their account.
2. They navigate to **My Account → Become Seller**.
3. Because an active invitation exists for their email address, the system displays the **Seller Request Panel** with the Shop URL field.
4. Saving their shop details updates their account to vendor status and marks the invitation as Registered.

### What happens if an existing customer visits "Become Seller" without an invitation?
The form is hidden, and the page displays: *"Please ask admin to send Invitation URL to register as a seller."*

---

## Administration & Customization

### Can I customize the invitation email content?
**Yes.** You can customize the transactional email template under **Marketing → Email Templates** in Magento Admin, or modify the default template provided by the module. You can also type custom text in the **Description** field of the invite form, which is injected directly into the email body.

### What administrative permissions (ACL) are needed?
Administrators require access to the **Marketplace → Seller Invitation → Invite Seller** permission (`Webkul_SellerInvitation::invite`).

### How does rate limiting protect the admin invite form?
The controller tracks submissions per remote IP and restricts requests to **5 per minute**. It also calculates a SHA-256 hash of each request to block accidental duplicate form submissions within 60 seconds.

---

## Still Have Questions?

If you need technical assistance, custom feature development, or have questions not answered here:

- **Create a Support Ticket**: [Webkul UVdesk Support](https://webkul.uvdesk.com/)
- **Explore User Guide**: [Webkul Seller Invitation Documentation](https://webkul.com/blog/magento2-seller-invitation-documentation/)
- **Store Page**: [Webkul Store Product Page](https://store.webkul.com/Magento2-Marketplace-Seller-Invitation.html)
