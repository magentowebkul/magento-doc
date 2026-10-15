# Email Verification Link (One-Click)

The **Sending Email Link** channel provides a passwordless-style second factor. Instead of copying and entering a 6-digit number, customers click a secure, time-limited verification link sent directly to their inbox.

---

## Configuration

In **Stores > Configuration > Webkul > Two Factor Auth**, set **Send Otp Via** to **Sending Email Link**.

![Email Link Configuration](/images/image-24.png)

---

## Workflow 1: New Customer Registration

1. The customer enters their registration details on the storefront and clicks **Create an Account**.

![Customer Account Create](/images/image-25.png)

2. An automated email containing an account activation and verification link is dispatched to the user's email address.

![Email Verification Link](/images/image-26.png)

3. The customer clicks the verification link in their email.
4. The system validates the signed token, marks the email as verified, and activates the new account.

---

## Workflow 2: Existing Customer Login

1. The customer enters their registered email and password on the storefront login page and clicks **Sign In**.

![Login Page](/images/image-27.png)

2. A login confirmation email containing a one-time verification link is sent to the customer's email address.

![Login Verification Email Link](/images/image-28.png)

3. The customer clicks the link in their email message.
4. The storefront confirms the token and automatically logs the user in.
