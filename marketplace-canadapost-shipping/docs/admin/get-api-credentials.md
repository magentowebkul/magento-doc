# Obtain Canada Post API Credentials

To calculate real-time shipping rates and generate official barcoded parcel labels, your store requires an active **Canada Post Business Profile** and registration within the **Canada Post Developer Portal**.

Canada Post utilizes an integrated two-part ecosystem:
1. **Canada Post Main Portal (`canadapost-postescanada.ca`):** Where you register your commercial business profile and retrieve your 10-digit **Customer Number**.
2. **Canada Post Developer Portal (`developer-developpeur.canadapost-postescanada.ca`):** Where you register your application, subscribe to parcel API products, and obtain your modern **OAuth 2.0 API Key (Client ID)** and **API Secret (Client Secret)**.

---

## Step 1: Create a Canada Post Business Account

### 1. Visit Canada Post Homepage
Open [canadapost-postescanada.ca](https://www.canadapost-postescanada.ca/) and click the **Sign in** button in the upper-right corner of the navigation bar.

![Canada Post Sign In](/images/cp-portal-sign-in.webp)

### 2. Access Registration Modal
In the sign-in modal, locate the **Register online** section on the right side and click **Register now**.

![Register Online](/images/cp-portal-register-now.webp)

### 3. Select Business Profile Type
Canada Post will prompt you to choose between a personal account and a commercial account. Under the **Business** card (*"Optimize your business with free features and online shipping tools"*), click **Create business profile**.

![Select Business Profile](/images/cp-portal-profile-selection.webp)

### 4. Request Customer Number
Under the **Ready to grow your business?** prompt, click **Get customer number**.

*(Note: If your business already possesses an offline Canada Post agreement or customer number, you can enter it in the lower section to link it immediately).*

![Get Customer Number](/images/cp-portal-selection.webp)

### 5. Complete Profile Information
Provide your business details across the registration form steps:

* **Username & Password:** Enter your preferred portal username, create a secure password, and confirm it.
  
  ![Username and Password](/images/cp-portal-registration-form-username-password-info.webp)

* **Contact Information:** Enter your primary representative's first and last name (as written on government-issued photo ID), business phone number, extension (optional), and corporate email address.
  
  ![Contact Information](/images/cp-portal-registration-form-contact-info.webp)

* **Business Information:** Enter your legal business name, optional operating name, select **Canada** as the country, and type your verified Canadian street address.
  
  ![Business Information](/images/cp-portal-registration-form-business-info.webp)

* **Security Questions:** Choose two security questions and answers for account verification, agree to the Canada Post Terms and Conditions, and click **Continue**.
  
  ![Security Questions](/images/cp-portal-registration-form-security-question.webp)

### 6. Specify Parcel Volumes & Retrieve Customer Number
On the *Ship more, save more* onboarding step:
1. Enter your estimated monthly parcel volume for domestic Canadian shipments, United States transborder shipments, and International shipments.
2. Select your primary **Business type** (e.g., *Retail*).
3. Choose whether to request a physical Solutions for Small Business™ savings card, then click **Submit**.

![Business Shipping Details and Volume](/images/cp-portal-business-shipping-details.webp)

Upon completion, Canada Post creates your profile and issues your unique **10-digit Customer Number** (e.g., `0001315191`). Save this identifier, as it is required in your Magento configuration.

---

## Step 2: Register on Canada Post Developer Portal

Canada Post manages REST APIs and OAuth 2.0 application keys on its modern developer portal.

### 1. Access Developer Portal
Navigate to the [Canada Post Developer Portal](https://developer-developpeur.canadapost-postescanada.ca/devportal-portaildesdeveloppeurs/) and sign in using your Canada Post business credentials.

![Developer Portal Home](/images/cp-developer-portal.webp)

### 2. Open Apps Management
In the top navigation menu, click **Apps**.

![Developer Portal Apps Navigation](/images/cp-developer-portal-apps.webp)

### 3. Create a New App
In the **Apps** dashboard, click the **Create new app** button on the right side.

![Create New App Button](/images/cp-developer-portal-create-new-app-btn.webp)

### 4. Fill in App Details
On the **Create new app** form:
* **Customer number:** Your 10-digit account number (e.g., `0001315191`) is pre-filled automatically.
* **App type:** Choose between:
  * **Test:** Creates sandbox credentials for local staging environments and rate quote testing.
  * **Production:** Creates live credentials for actual commercial order processing and shipping label generation.
* **App name:** Enter a descriptive identifier (e.g., `[Test] Webkul Pvt Ltd` or `Production Store Shipping`).
* **Description (optional):** Add a reference note (e.g., `Webkul Magento 2 Marketplace Canada Post Shipping`).
* Click **Create**.

![Create New App Form](/images/cp-developer-portal-create-app-form.webp)

### 5. Capture OAuth 2.0 API Key & Secret
Once created, your application dashboard opens with an *"App created"* confirmation banner:
* Scroll to the **Credentials** section under the **Default credentials** tab.
* **API Key:** Click the eye icon to unmask and copy your 32-character hexadecimal **API Key (Client ID)**.
* **API Secret:** Unmask and securely store your cryptographic **API Secret (Client Secret)**.

![App Created and Credentials Dashboard](/images/cp-developer-portal-app-created.webp)

### 6. Subscribe to API Products
Under the **API products** tab of your application:
1. Click **Add API product**.
2. Subscribe to the required services (such as **Tracking 2.0.0**, **Pickup 1.0.0**, **Rating**, and **Shipping**) by clicking **Get access**.

![Add API Product Subscriptions](/images/cp-developer-portal-add-api-product.webp)

---

## Step 3: Contract Agreement Number (If Applicable)

If your organization has signed a formal commercial parcel shipping contract with Canada Post:
* Retrieve your **Agreement / Contract Number** (e.g., `42708517`) from your business contract documents or Canada Post account manager.
* Enter this number in the Magento carrier settings with **Agreement Type** set to **Contract**.

::: tip Non-Contract Mode
If you do not hold a formal volume shipping agreement, simply select **Non-Contract** under **Agreement Type** in the Magento settings. The module will quote live commercial base/counter rates without requiring an Agreement Number.
:::

---

## Summary of Configuration Credentials

Before proceeding to configure the module in Magento, ensure you have gathered the following parameters:

| Parameter | Example Value | Magento Field Name | Description |
| :--- | :--- | :--- | :--- |
| **Customer Number** | `0001315191` | `Customer Number` | 10-digit Canada Post business account identifier. |
| **API Key (Client ID)** | `1cd51b9fdb0f318420205e0b70ab1006` | `API Key (Client ID)` | 32-character OAuth 2.0 client identifier. |
| **API Secret (Client Secret)** | `88c21a0f9b6e45...` | `API Secret (Client Secret)` | Cryptographic key used to request Bearer access tokens. |
| **Agreement Number** | `42708517` | `Agreement Number` | Required only when Agreement Type is set to **Contract**. |
| **Origin Postal Code** | `K1A 0B1` | `Origin Postal Code` | Canadian postal code of the shipping warehouse. |
