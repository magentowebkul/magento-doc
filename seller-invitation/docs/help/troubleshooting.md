# Troubleshooting Guide

Find diagnostic workflows, root cause analyses, and solutions for common operational and technical questions regarding the **Webkul Marketplace Seller Invitation for Magento 2** extension.

---

## 1. "Seller Invitation Paused. Please contact admin."

### Symptom:
A prospective merchant clicks an invitation link (`customer/account/create/?inviteCode=...`) and is redirected to standard registration with the warning: *"Seller Invitation Paused. Please contact admin."*

### Cause:
The Seller Invitation module is set to **No** (Disabled) under **Stores → Configuration → Marketplace → Seller Invitation**.

### Solution:
1. Log in to the Magento Admin Panel.
2. Navigate to **Stores → Configuration → Marketplace → Seller Invitation**.
3. Set **Enabled** to **Yes**.
4. Click **Save Config** and flush configuration cache:
   ```bash
   php bin/magento cache:clean config
   ```

---

## 2. "Invalid Invitation Code for Seller Registration."

### Symptom:
The candidate opens their registration link and is redirected to the login page with the error: *"Invalid Invitation Code for Seller Registration."*

### Causes:
1. **Already Used**: The token was already consumed by a previous registration (`status = 1`).
2. **Incorrect Token**: Characters in the URL parameter `?inviteCode=` were altered, truncated, or copy-pasted incorrectly.
3. **Record Deleted**: The invitation record was purged from the admin grid via Mass Delete.

### Solution:
1. Open **Marketplace → Seller Invitation → Invite Seller**.
2. Search for the candidate's email address in the grid.
3. If their **Seller Status** shows **Registered**, they already possess an active vendor account and can log in normally.
4. If their link was deleted or truncated, send a fresh invitation to their email address.

---

## 3. "Invitation Code Expired. Please contact admin."

### Symptom:
The candidate receives an error stating the invitation code has expired.

### Cause:
The **Enable Link Expiry** setting is enabled, and the candidate did not complete their registration within the configured **Link Expiry Time** (in hours).

### Solution:
1. Check the invitation in **Marketplace → Seller Invitation → Invite Seller**.
2. The **Link Status** column will show **Expired**.
3. Click **Send Invite** and enter the candidate's details again to generate and dispatch a fresh, active invitation token.

---

## 4. "This invite Code belong to another Email ID, please check your mail"

### Symptom:
During registration, the customer receives an error that the invite code belongs to another email address.

### Cause:
The candidate manually changed the pre-filled email address in the registration form to an email address different from the one invited by the administrator.

### Solution:
Explain to the candidate that the invitation code is cryptographically tied to the exact email address where they received the invitation. They must complete registration using that specific email address.

---

## 5. "Too many attempts. Please try again after 1 minute."

### Symptom:
The administrator sees an error when submitting the **Send Invite** form: *"Too many attempts. Please try again after 1 minute."*

### Cause:
The built-in anti-abuse rate limiter restricts invitation submissions to a maximum of **5 requests per minute** per remote IP address to prevent email flooding.

### Solution:
Wait 60 seconds before submitting the next invitation, or dispatch invitations steadily.

---

## 6. "Duplicate request detected."

### Symptom:
The administrator is redirected with the warning: *"Duplicate request detected."*

### Cause:
The administrator clicked the **Send Invite** button multiple times in rapid succession for the same email address. The system uses a SHA-256 session hash to prevent duplicate transactional emails from being sent.

### Solution:
No action required; the initial invitation was already captured and processed.

---

## 7. Prospective Sellers Not Receiving Invitation Emails

### Diagnostic Checklist:
1. **Spam / Junk Folder**: Check if the email landed in the recipient's junk or spam folder.
2. **Magento Mail Configuration**: Ensure Magento's mail transport is operational. Test by sending a standard customer password reset or order email.
3. **Cron Job Execution**: If you use queue-based email sending, verify that Magento's cron runner is actively processing jobs:
   ```bash
   php bin/magento cron:run
   ```
4. **Email Template Configuration**: In **Stores → Configuration → Marketplace → Seller Invitation**, verify that **Seller Invitation Email Template** is assigned to a valid template.
5. **Exception Logs**: Inspect Magento's error logs for mail transport exceptions:
   ```bash
   tail -n 100 var/log/exception.log
   tail -n 100 var/log/system.log
   ```

---

## 8. "Please ask admin to send Invitation URL to register as a seller"

### Symptom:
An existing customer navigates to **My Account → Become Seller**, but instead of the Shop URL form, they see the message: *"Please ask admin to send Invitation URL to register as a seller."*

### Cause:
The customer is logged in, but the administrator has not sent an invitation to their email address, or their previous invitation has expired.

### Solution:
The administrator must navigate to **Marketplace → Seller Invitation → Invite Seller**, click **Send Invite**, and enter the existing customer's registered email address. Once sent, the customer can refresh the **Become Seller** page to unlock the seller registration form.

---

## Diagnostic CLI Commands

| Action | Command |
|---|---|
| **Check Module Status** | `php bin/magento module:status Webkul_SellerInvitation` |
| **Clean All Caches** | `php bin/magento cache:clean` |
| **Recompile DI Classes** | `php bin/magento setup:di:compile` |
| **Inspect System Logs** | `tail -f var/log/system.log` |
| **Inspect Exception Logs** | `tail -f var/log/exception.log` |
