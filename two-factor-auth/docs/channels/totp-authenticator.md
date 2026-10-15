# TOTP Authenticator App (Google Authenticator)

Time-based One-Time Password (TOTP) is an industry-standard (RFC 6238) algorithm supported by apps such as Google Authenticator, Microsoft Authenticator, and Authy. It operates entirely offline on the customer's smartphone without relying on cellular networks or SMS delivery.

---

## Configuration

In **Stores > Configuration > Webkul > Two Factor Auth**:
- Set **Send Otp Via** to `TOTP/Authenticator`.
- Enter **Title for TOTP Auth** (e.g. `Webkul Two Factor Auth`).

![TOTP Configuration](/images/image-43.png)

---

## Workflow 1: Registration & Initial QR Code Setup

1. The customer enters their registration details on the sign-up page and submits.

![Customer Registration Page](/images/image-44.png)

2. A 2FA modal opens displaying a unique QR code generated specifically for this customer account.

![Scan QR Code Modal](/images/image-45.png)

3. The customer opens Google Authenticator (or any compatible app) on their smartphone and scans the QR code.
4. The app generates an active 6-digit rolling passcode.

![Google Authenticator App Code](/images/image-46.png)

5. The customer enters the 6-digit passcode into the verification field and clicks **Submit**.

![Submit TOTP Code](/images/image-47.png)

6. Once validated, the authenticator seed is permanently bound to the customer account, and registration completes.

---

## Workflow 2: Existing Customer Login

1. The customer enters their email address and password on the storefront login page.

![Customer Login Page](/images/image-48.png)
![Login Form Filled](/images/image-49.png)

2. The 2FA modal prompts for the 6-digit authenticator code.
3. The customer opens their Authenticator App to retrieve the current dynamic code.

![Authenticator Code Display](/images/image-50.png)

4. The customer inputs the code on the storefront.
5. The session is verified and the customer is logged in.

![Customer Dashboard](/images/image-51.png)

---

## Re-linking / Updating Authenticator App

If a customer changes their phone or wants to re-enroll their authenticator app:

1. The customer logs in and navigates to **My Account > Two-Step Authentication** in the dashboard left menu.

![Two-Step Authentication Menu](/images/image-52.png)
![Two-Step Authentication Panel](/images/image-53.png)

2. Click the **Update** button.

![Click Update](/images/image-54.png)

3. For security, the customer must verify their identity by entering their current 6-digit code from the existing authenticator app.

![Enter Existing Code](/images/image-55.png)

4. Once confirmed, a new QR code is displayed.

![Scan New QR Code](/images/image-56.png)

5. The customer scans the new QR code with their new device to complete the transfer.
