# General Configuration

Configure global module settings, backend permissions, and storefront toggles for the Shopping List extension.

---

## Admin Configuration Path

To access the configuration panel:

1. Log into your **Magento Admin Panel**.
2. Navigate to **Stores > Configuration > Webkul > Shopping List**.

![Shopping List General Configuration Panel](/images/admin_enable_shopping_list.webp)

---

## Configuration Settings Reference

| Setting Field | Type | Description |
| :--- | :--- | :--- |
| **Enable** | Select (`Yes` / `No`) | Enable or disable the Shopping List module functionality storefront wide. |

---

## Admin Menu & Access Control (ACL)

The extension adds access control roles under:
- **Resource Permission**: `Webkul_ShoppingList::config_shoppinglist`

![Admin User Role ACL Permissions for Shopping List](/images/admin_acl_permissions.webp)

This allows system administrators to grant or restrict backend permissions for managing Shopping List configurations for sub-admin users.
