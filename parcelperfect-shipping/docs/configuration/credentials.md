# Parcel Perfect Credentials

To connect your Magento store with the Parcel Perfect freight and courier API, you need to obtain account credentials from Parcel Perfect.

---

## How to Get Parcel Perfect Credentials

Follow these steps to obtain test and production API credentials:

### 1. Send Request Email
Send an email to the Parcel Perfect representative team:
- **Recipient:** `support@parcelperfect.com`
- **Subject:** `Request for ecom test account`
- **Body Details:** Provide your business name, contact information, intended shipping origin/destinations, and mention you are integrating with Magento 2.

### 2. Receive Account Credentials
Upon approval of your request, Parcel Perfect will provide you with the necessary credentials:
- **Customer Number** (Parcel Perfect Account Identifier)
- **Email Address / User Name**
- **Password** (For sandbox testing and live production)
- **Web-Service Server URL** (Sandbox test server endpoint and Live server endpoint)

---

## Credential Environment Overview

| Configuration Field | Sandbox / Development (`Production Mode: No`) | Production / Live (`Production Mode: Yes`) |
| :--- | :--- | :--- |
| **PPCUST No.** | Test merchant customer account number | Live merchant customer account number |
| **User Name** | Sandbox API username provided by Parcel Perfect | Live merchant account username |
| **Password** | Sandbox API password | Live merchant account password |
| **Web-Services URL** | `Web-Services URL (Sandbox)` endpoint | `Web-Services URL (Production)` endpoint |
| **Environment Purpose** | Safe simulation of rate quotes, packaging, and test PDF shipping labels | Live real-time customer rate estimation and official waybill booking |

::: info Next Step
After obtaining your credentials, proceed to the [Admin Configuration Settings](/configuration/admin-config.html) to configure your shipping gateway in Magento.
:::
