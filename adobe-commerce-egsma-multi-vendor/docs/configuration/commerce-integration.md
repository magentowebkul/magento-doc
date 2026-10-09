# Commerce Integration (PaaS)

PaaS and on-premise stores authenticate with **OAuth 1.0a** credentials. You create them by adding an Integration in the Adobe Commerce Admin panel.

::: tip SaaS users
Skip this page if you run Adobe Commerce as a Cloud Service (ACCS). SaaS uses IMS OAuth instead — see [Field Reference](/configuration/field-reference.md#saas-authentication-ims-oauth).
:::

---

## Create the Integration

1. In the Adobe Commerce Admin panel, go to **System > Extensions > Integrations**.

![Extension Integration](/images/extentionintegration.webp)

2. Click **Add New Integration** and fill in the integration details.

![Integration Form](/images/integrationform.webp)

3. Open the **API** tab and set the resource access to **All**.

![API Roles](/images/apiroles.webp)

4. Save the integration.

---

## Activate the Integration

1. In the integrations grid, click **Activate** for the new integration.

![Activate Credentials](/images/activate-1.webp)

2. Click **Allow** to grant the requested roles.

![Allow Roles](/images/allowroles.webp)

3. Copy the generated credentials:
   - **Consumer Key** → `COMMERCE_CONSUMER_KEY`
   - **Consumer Secret** → `COMMERCE_CONSUMER_SECRET`
   - **Access Token** → `COMMERCE_ACCESS_TOKEN`
   - **Access Token Secret** → `COMMERCE_ACCESS_TOKEN_SECRET`

![Commerce Credentials](/images/consumercredentialsappbuilder.webp)

Enter these values in the app's **Configure** section — see [Configure & Activate](/activation.md).
