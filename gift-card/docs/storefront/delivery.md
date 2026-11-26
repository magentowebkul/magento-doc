# Multi-Channel Delivery (Email, SMS & Share Link)

Once an order containing a gift card has been invoiced by the administrator, the automated delivery engine dispatches the gift card voucher to the recipient via their chosen communication channel.

---

## 1. Email Delivery Experience

If the buyer selected **Email Delivery**, the recipient receives an email formatted with store branding and the chosen card design.

![Email Notification Preview](/images/Screenshot-5-1.png)

### Key Elements of the Notification Email

- **Gift Voucher Code:** A unique, secure alphanumeric code (e.g., `1EIE5Z0TN8BZ5`) ready to apply directly on the cart or checkout page.
- **Card Balance & Currency:** The full credit amount allocated to the card.
- **Personal Message:** The greeting written by the sender during purchase.
- **Expiration Notice:** The deadline date by which the voucher must be redeemed.
- **Direct Store Link:** A link pointing directly to the merchant's online storefront with instructions on how to redeem.

---

## 2. SMS Delivery Experience (via Twilio)

If the buyer selected **SMS Delivery**, the recipient receives an SMS text message on their mobile phone from the store's configured Twilio sender number.

```text
From: YourStore (+12025550143)
"Hello Sarah! John sent you a $100.00 Gift Card for YourStore! 
Code: 1EIE5Z0TN8BZ5. 
Message: Happy Birthday! Enjoy shopping! 
Redeem at: https://yourstore.com"
```

---

## 3. Share Link Experience

If the buyer selected **Share Link**, no email address or phone number is mandatory during checkout.

- Once the order is invoiced, a unique landing page URL is generated (`wkgiftcard/giftcard/sharelink?itemId=<ID>&code=<CODE>`).
- The purchaser can copy and share this link directly via instant messaging (WhatsApp, Telegram, Slack) or social media.
- When the recipient opens the link, a dedicated page renders displaying the card design template, allocated value, personal message, and a direct **Add Gift Card to your Account** button.

---

## Scheduled Background Processing

For orders where the customer configured a **Send Later** date:

1. The order is placed and invoiced normally.
2. The voucher record is created in the database with status set to scheduled.
3. The background Magento cron job runs periodically (`* * * * *`), inspecting scheduled delivery dates and target timezones.
4. When the target date and time arrive in the recipient's timezone, the delivery engine automatically triggers the email and SMS dispatch.
