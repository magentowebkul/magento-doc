# Requirements

Before installing the **Magento 2 Price Drop Alert** extension, ensure your system environment meets the prerequisites below.

### Supported Framework Versions

| Component | Supported Versions |
|---|---|
| **Magento / Adobe Commerce** | `2.0.x`, `2.1.x`, `2.2.x`, `2.3.x`, `2.4.x` |
| **PHP** | Matching installed Magento version requirements |
| **Database** | MySQL `8.0` / MariaDB `10.4+` |
| **Frontend Themes** | Luma, Blank, Hyvä Theme |

---

### Technical Prerequisites

- **Active Magento Cron**: Magento cron (`bin/magento cron:run`) must be running to process price changes and dispatch alert emails.
- **SMTP Service**: Active transactional email transport configured in Magento (`Stores > Configuration > System > Mail Sending Settings`).
- **Product Compatibility**: Simple, Virtual, Downloadable, and Configurable products.
