# Mobile SMS Authentication (Twilio)

SMS-based authentication delivers high-reliability one-time passcodes (OTP) directly to customer mobile phones via Twilio.

---

## Configuration Summary

Under **Stores > Configuration > Webkul > Two Factor Auth**:
- **Send Otp Via:** `Mobile`
- **Auth ID:** Twilio Account SID
- **Token:** Twilio Auth Token
- **Message:** `Your Auth Code is {auth_code}.`
- **Sender Number:** Twilio phone number

![Twilio Settings](/images/image-10.png)

---

## Workflow 1: New Customer Registration

1. The customer visits the store registration page and fills in their personal details, email address, password, and mobile number.

![Customer Registration Form](/images/image-11.png)

2. Upon clicking **Create an Account**, an SMS OTP is dispatched to the provided phone number.
3. A verification prompt appears on screen asking for the one-time code.

![Verification Code Prompt](/images/image-12.png)

4. The customer inputs the SMS OTP and clicks **Confirm**.
5. Once validated, the customer account is created and the user is redirected to the dashboard.

![Account Created Successfully](/images/image-13.png)

---

## Workflow 2: Existing Customer Login

1. The customer enters their registered email and password on the sign-in page and clicks **Sign In**.

![Customer Login Page](/images/image-14.png)

2. The 2FA modal opens immediately, prompting for the SMS code sent to their registered mobile phone.

![Enter SMS OTP Popup](/images/image-15.png)

3. The customer receives the SMS notification containing the auth code on their mobile device.

![SMS Received on Phone](/images/image-16.png)

4. The customer enters the code (supports direct typing or copy-pasting) and submits.
5. The session is verified and the customer is logged in.

![Customer Logged In](/images/image-17.png)
