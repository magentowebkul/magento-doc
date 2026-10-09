# Installation

The EGSMA Marketplace Integration is an **Adobe App Builder** app. You set up an App Builder project in Adobe Developer Console, then install the app from Adobe Exchange.

---

## 1. Create the App Builder Project

1. Log in to the **Adobe Developer Console**.
2. Select your organization from the dropdown menu in the top-right corner.
3. Click **Create new project > Project from template**, then select **App Builder**.
4. Enter a **Project Title** and **App Name**.
5. Make sure the **Include Runtime with each workspace** checkbox is selected.

---

## 2. Add the Required APIs

1. From your workspace, add the **Adobe Commerce as a Cloud Service** API.
2. On the **Configure API** page, select **OAuth Server-to-Server** and click **Save configured API**.
3. From the workspace front page, click **Add service**, select **API**, filter by **Experience Cloud**, and add **Adobe I/O Events for Adobe Commerce**. See [Adobe's eventing project setup](https://developer.adobe.com/commerce/extensibility/events/project-setup/).

::: warning API not listed?
If you do not see **Adobe Commerce as a Cloud Service** in the list, ask your admin for developer permissions for **Adobe Commerce as a Cloud Service – Backend – Commerce Cloud Manager** in your organization.
:::

---

## 3. Install the App from Adobe Exchange

1. Go to **[Adobe Exchange](https://exchange.adobe.com)**.
2. Find the app and click **Install**.
3. Complete the installation for your organization.

After you acquire the app, it appears in **App Management**.

![Acquire App](/images/accuire-app.webp)

::: tip No local setup needed
The app is non-downloadable. All credentials and endpoints are collected during installation, in the App Management **Configure** section. Continue to [Configure & Activate](/activation.md).
:::
