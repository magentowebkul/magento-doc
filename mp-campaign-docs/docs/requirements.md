# Requirements

Before installing the **Magento 2 Marketplace Campaign** extension, ensure your environment meets the prerequisites listed below.

### Supported Framework Versions

| System Component | Supported Versions |
|---|---|
| **Magento / Adobe Commerce** | `2.0.x`, `2.1.x`, `2.2.x`, `2.3.x`, `2.4.x` |
| **PHP** | Versions matching installed Magento release requirements |
| **Database** | MySQL `8.0` / MariaDB `10.4+` |

---

### Core Dependencies

> [!IMPORTANT]
> The **Marketplace Campaign** extension is an **add-on module**.

You must install and activate the core dependency before proceeding:

1. **[Webkul Magento 2 Multi-Vendor Marketplace](https://store.webkul.com/magento2-multi-vendor-marketplace.html)** (`version 5.0.0` or higher).

```json
{
    "require": {
        "webkul/module-marketplace": "5.*"
    }
}
```

---

### Server & SSL Recommendations

- **SSL Certificate (HTTPS)**: Mandatory for secure admin panel operation and safe checkout transactions.
- **Cron Jobs**: Active Magento cron configured (`bin/magento cron:run`) for scheduled campaign updates and email dispatches.
- **Email Service (SMTP)**: Configured SMTP transport for automated seller campaign invitations.
