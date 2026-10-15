# Email OTP Authentication

Email OTP sends a dynamic verification code directly to the customer's registered email inbox. It requires zero third-party SMS or API accounts, leveraging your existing Magento transactional email configuration.

---

## Configuration

In **Stores > Configuration > Webkul > Two Factor Auth**, set **Send Otp Via** to **Email**.

![Email Configuration](/images/image-18.png)

---

## Workflow 1: New Customer Registration

1. The customer fills out the sign-up form with their details and submits the form.

![Customer Sign-Up](/images/image-19.png)

2. A secure OTP is automatically generated and dispatched to the customer's email address.

![OTP Email Received](/images/image-20.png)

3. The customer copies the code from their email, inputs it into the 2FA verification prompt on the storefront, and confirms.

![Enter Email OTP and Verify](/images/image-21.png)

4. Once verified, the account registration is completed successfully.

---

## Workflow 2: Existing Customer Login

1. The customer enters their email address and password on the storefront login page.

![Customer Login](/images/image-22.png)

2. The 2FA prompt appears on screen and an authentication email is instantly dispatched to their inbox.

![Email with OTP Code](/images/image-23.png)

3. The customer enters the received OTP into the verification form.
4. Upon successful validation, the customer is granted access to their account dashboard.
