# Admin Backend Management & Account Unlock

Store administrators have complete visibility into each customer's 2FA status, failed verification metrics, lockout state, and backup recovery codes directly from the Magento Admin Panel.

---

## Accessing Customer 2FA Details

1. In the Magento Admin Panel, go to **Customers > All Customers**.
2. Find the desired customer in the grid and click **Edit**.
3. In the left navigation menu of the customer edit page, click the **Two Factor Auth** tab.

![Admin Customer Two Factor Auth Tab](/images/image-63.png)

---

## 1. Generating Emergency Backup Codes

When a customer exhausts their 12 backup recovery codes, a notification banner alerts them:

![Backup Codes Exhausted Notification](/images/image-62.png)

An administrator can generate a fresh batch of codes on behalf of the customer:

1. Open **Customers > All Customers > Edit Customer > Two Factor Auth**.
2. Click the **Generate** button.

![Click Generate Button](/images/image-64.png)

3. A brand-new set of 12 single-use backup codes is instantly generated, shown in the admin panel, and automatically emailed to the customer.

![New Backup Codes Generated](/images/image-65.png)

---

## 2. Reviewing Lockout Status & Unlocking Accounts

When brute-force lockout is triggered:

1. Open **Customers > All Customers > Edit Customer > Two Factor Auth**.
2. Review the account metrics:
   - **Account Status:** Displays `LOCKED` (along with remaining lock duration) or `ACTIVE / UNLOCKED`.
   - **Failed Attempts:** Indicates the number of consecutive incorrect 2FA attempts recorded.
3. To restore customer access immediately without waiting for the timer to expire, click the **Unlock 2FA Account** button.
4. The lockout status is cleared, the failure counter is reset to zero, and the customer can log in immediately.
