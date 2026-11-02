# Gateway Credentials & Webhook Setup

Automated recurring subscriptions rely on webhook callbacks from payment processors (PayPal and Stripe) to trigger renewal orders, capture installment payments, and handle subscription lifecycle events.

---

## Part 1: PayPal Express & REST API Setup

### Step 1: Obtain Classic API Credentials (Username, Password, Signature)

1. Log in to your [PayPal Business Account](https://www.paypal.com).
2. Go to **Account Settings > API Access**.
3. Under **NVP/SOAP API integration (Classic)**, click **Manage API credentials**.

![Manage API Credentials](/images/businessmanage-credentials-apiAccess.png)

4. Select **Request API signature** and click **Agree and Submit**.
5. Copy the generated **API Username**, **API Password**, and **Signature**.

![API Signature Details](/images/API-Signature-1.png)

---

### Step 2: Configure PayPal IPN (Instant Payment Notification)

PayPal uses IPN messages to inform Magento when recurring profile payments are completed or failed.

1. In your PayPal account, click the Settings (gear) icon and navigate to **Account Settings > Notifications**.
2. Find **Instant payment notifications** and click **Update**.

![PayPal Activation](/images/screencapture-paypal-activation.png)

3. Click **Choose IPN Settings**.
4. In the **Notification URL** field, enter your store's IPN endpoint:

```text
https://[your-magento-domain]/recurring/paypal/notify
```

5. Select **Receive IPN messages (Enabled)** and click **Save**.

::: important HTTPS Requirement
PayPal requires valid SSL (HTTPS) for notification URLs. If testing locally or on a staging server, ensure the URL is publicly reachable via a secure domain.
:::

---

### Step 3: Obtain PayPal REST App Client ID & Secret for Mass Payouts

For processing mass payouts to marketplace sellers:

1. Navigate to the [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/).
2. Under **My Apps & Credentials**, select **Sandbox** or **Live** mode.

![PayPal My Apps & Credentials](/images/My-apps-credentials-e1595078570853.png)

3. Click **Create App**, give your application a name, and choose the associated account.

![Create Sandbox App](/images/sandbox_create_new_app-1.png)

4. Copy the generated **Client ID** and **Secret Key**, and paste them into the Magento admin payment configuration.

![Sandbox Credentials](/images/SANDBOX-API-CREDENTIALS.png)

---

## Part 2: Stripe Connect & Webhooks Setup

### Step 1: Retrieve Stripe API Keys

1. Log in to the [Stripe Dashboard](https://dashboard.stripe.com/login).

![Stripe Login](/images/Login-Screen.png)

2. Use the **Test mode** toggle in the top navigation bar to switch between test and live modes.

![Enable View Test Data](/images/Enable-View-Test-Data.png)

3. Navigate to **Developers > API keys**.
4. Copy the **Publishable key** (`pk_test_...` or `pk_live_...`).
5. Click **Reveal secret key** to obtain the **Secret key** (`sk_test_...` or `sk_live_...`).

![Stripe API Keys](/images/Clik-Api-Menu-Option-1.png)

---

### Step 2: Configure Stripe Connect Settings

To allow marketplace sellers to connect their Stripe accounts:

1. In Stripe Dashboard, navigate to **Connect > Settings**.
2. Under **Integration**, locate your **Client ID** (`ca_...`).
3. Set the **Redirect URIs**:

```text
https://[your-magento-domain]/mprecurring/connect/stripe/
```

4. Retrieve your platform **Account ID** from the upper right profile icon:

![Stripe Account ID](/images/Webkul-magento2-MP-stripe-payment-gateway-strip-account-id.png)

---

### Step 3: Set Webhook Endpoint in Stripe

1. In Stripe Dashboard, navigate to **Developers > Webhooks**.
2. Click **Add destination** (or **Add endpoint**).

![Add Stripe Webhook Endpoint](/images/webkul-magento2-recurring-subscription-add-point-1.png)

3. Enter the endpoint URL:

```text
https://[your-magento-domain]/recurring/stripe/notify/
```

4. Select the events to listen to:
   * `customer.subscription.created`
   * `customer.subscription.updated`
   * `customer.subscription.deleted`
   * `invoice.payment_succeeded`
   * `invoice.payment_failed`
   * `charge.succeeded`

![Stripe Webhook Configuration](/images/webkul-magento2-recurring-subscription-step-4.png)

5. Click **Add endpoint**.
6. You can test the endpoint using the **Send test event** utility.

![Send Test Webhook](/images/Dashboard-Whosthechef-Stripe-Test-1.png)
