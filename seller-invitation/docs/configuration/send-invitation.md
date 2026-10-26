# Sending Seller Invitations

Store administrators can invite prospective vendors to join the marketplace by sending personalized, secure email invitations from the Magento Admin Panel.

---

## Navigating to the Invite Seller Section

1. Log in to the **Magento Admin Panel**.
2. In the left navigation sidebar, click on **Marketplace**.
3. Under the **Seller Invitation** heading, select **Invite Seller**.
4. You will arrive at the **Seller Invitation List** (`sellerinvitation/menu/index`).
5. Click the orange **Send Invite** button located in the top-right corner.

```text
Marketplace > Seller Invitation > Invite Seller > [Send Invite]
```

---

## The Invitation Form Fields

The **Send Invite** form (`sellerinvitation/menu/inviteForm`) allows the administrator to input recipient details and custom invitation messages:

| Field | Input Type | Required | Validation Rules | Description |
|---|---|---|---|---|
| **Name** | Text Input | **Yes** | `required-entry`, `validate-no-html-tags` | The full name of the prospective seller. Stripped of HTML tags for security. Automatically mapped to `{{var name}}` in the email template. |
| **Email** | Text Input | **Yes** | `required-entry`, `validate-email`, `validate-no-html-tags` | The recipient's email address. The invitation code will be strictly linked to this email address. |
| **Description** | Textarea / WYSIWYG | No | Text / Formatted HTML | Personalized message to the invitee explaining marketplace terms, commission perks, or welcoming remarks. Injected into `{{var body}}` of the invitation template. |

![Send Invite Form](/images/invitation-form.png)

---

## Form Submission & Email Generation Logic

When the administrator clicks the **Send Invite** button:

1. **Security & Input Sanitization**:
   - The recipient's name is sanitized using `\Magento\Framework\Filter\StripTags`.
   - The email address is validated using `\Magento\Framework\Validator\EmailAddress`.
2. **Duplicate Protection & Rate Limiting**:
   - A SHA-256 hash of the email address is saved in the admin session along with a timestamp.
   - If a duplicate invitation submission is received within **60 seconds**, the request is blocked:
     ```text
     "Duplicate request detected."
     ```
   - Remote IP address access is rate-limited using Magento's cache backend (maximum **5 requests per minute**). If exceeded:
     ```text
     "Too many attempts. Please try again after 1 minute."
     ```
3. **Invitation State Verification**:
   - If the candidate already registered as a seller using a previous link:
     ```text
     "Customer already registered using invite link"
     ```
   - If an active, unexpired invitation is already pending for this email:
     ```text
     "Invitation code already sent. You will send invitation link again after link expired"
     ```
4. **Token Generation**:
   - The helper generates a 16-character cryptographically random code (`inviteCode`).
   - The system verifies uniqueness against the `wk_mp_invitation` table before committing.
5. **Destination URL Routing**:
   - **For New Sellers**: Generates the registration URL:
     ```text
     https://<store-domain>/customer/account/create/?inviteCode=<random_16_char_code>
     ```
   - **For Existing Registered Customers**: The system detects the email in the customer repository and sets the URL to:
     ```text
     https://<store-domain>/customer/account/login
     ```
     The email body instructs them to log in and open the **Become Seller** menu.
6. **Email Dispatch**:
   - Sender information is pulled from the Marketplace Admin Email (`marketplace/general_settings/adminemail`).
   - The transactional email is constructed and dispatched to the recipient via `TransportBuilder`.
7. **Database Persistence**:
   - A new row is inserted into `wk_mp_invitation`:
     - `name`: Recipient's name
     - `email`: Recipient's email
     - `description`: Custom message
     - `invite_code`: Generated unique token
     - `status`: `0` (*Not Registered*)
     - `created_at`: Current UTC timestamp

---

## Invitation Email Notifications

Once the invitation is dispatched, the prospective seller receives an email corresponding to their customer account status:

### New Candidate Invitation Email
For new candidates without an existing account, the email delivers the invitation message and the **Register Now** button containing their secure single-use token:

![Seller Invitation Email for New Candidates](/images/invitation-email.png)

### Existing Customer Invitation Email
For candidates who already hold a retail account on the store, the email informs them of their registered status and directs them to log in and access the **Become Seller** menu in their account dashboard:

![Seller Invitation Email for Existing Customers](/images/existing-cust.png)

---

## Success Notification

Upon successful submission, the admin is redirected to the invitation grid with the confirmation notice:

```text
"Invitation sent successfully"
```

::: tip Next Step
View and manage all dispatched invitations in the [Invitation Management Grid](/configuration/invitation-list).
:::
