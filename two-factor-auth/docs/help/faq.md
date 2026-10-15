# FAQ & Support

Frequently asked questions and technical support resources for **Magento 2 Two Factor Authentication (Webkul_TwoFactorAuth)**.

---

## Frequently Asked Questions

### Does this extension protect both registration and login?
Yes. You can mandate 2FA verification for new customer registrations and existing customer logins independently or concurrently from the admin configuration.

### Can customers use Google Authenticator and Microsoft Authenticator?
Yes. Any standard RFC 6238 TOTP authenticator application (Google Authenticator, Microsoft Authenticator, Authy, 1Password, Bitwarden) is fully supported.

### How do backup recovery codes work?
When a customer registers with 2FA enabled, they are issued 12 single-use backup recovery codes on-screen and via email. If their phone or authenticator app is inaccessible, they can click "Sign In another way" and enter an unused backup code. Each code can only be used once.

### Can an administrator manually unlock a customer who exceeded failed attempts?
Yes. Store administrators can navigate to **Customers > All Customers > Edit Customer > Two Factor Auth** and click **Unlock 2FA Account** to reset failure counters and clear the lockout.

### Can specific office or corporate IP addresses bypass 2FA?
Yes. Under **Trusted IP Addresses (Whitelist)** in the module configuration, you can enter individual IP addresses or CIDR subnets (e.g., `192.168.1.50`, `10.0.0.0/24`) to bypass 2FA verification.

### Does this module support Adobe Commerce (Cloud) and Hyvä theme?
Yes. It is fully compatible with Magento 2.0.x through 2.4.x and works seamlessly with standard Luma as well as modern frontend themes.

---

## Contact Support & Resources

For technical assistance, bug reports, or customization inquiries, reach out to Webkul:

- **Webkul HelpDesk:** [https://webkul.uvdesk.com/](https://webkul.uvdesk.com/)
- **Webkul Store Support Policy:** [https://store.webkul.com/support.html/](https://store.webkul.com/support.html/)
- **Webkul Official Website:** [https://webkul.com/](https://webkul.com/)
- **Extension Blog & Guide:** [https://webkul.com/blog/magento2-two-factor-authentication/](https://webkul.com/blog/magento2-two-factor-authentication/)
