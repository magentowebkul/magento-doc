# Verify the Installation

Four checks. All four should pass before you configure anything.

## 1. The module is enabled

```bash
php bin/magento module:status Webkul_AIReviewTranslator
```

Expect it under the enabled modules.

## 2. The table exists

```sql
SHOW TABLES LIKE 'ai_review_translation_list';
```

Missing means `setup:upgrade` did not run, or ran before the module was enabled.

## 3. The queue consumer is registered

```bash
php bin/magento queue:consumer:list | grep review
```

Expect `aireview.translation.generate`.

## 4. The configuration section loads

Open **Stores → Configuration → Webkul → AI Review Translation**. You should see a
**General Settings** group with a single **Enable Module** field.

::: tip The admin menu is not visible yet
The **AI REVIEW TRANSLATOR** menu appears only once the module is switched on in
configuration — every menu item depends on `aireviewtranslator/general/status`. An absent
menu at this stage is expected, not a fault.
:::

## If a check fails

| Failed check | Look at |
| --- | --- |
| Module not listed | Re-run `module:enable`, then `setup:upgrade`. |
| Table missing | `setup:upgrade` output for errors; check DB user permissions. |
| Consumer missing | `setup:upgrade` again, then `cache:flush`. |
| Section missing | `cache:flush`; then check the admin role has the config ACL — see [Access Control](../configuration/permissions.md). |

Next: [Content Security Policy](./csp.md) if your store enforces one, otherwise
[Enable the Module](../setup/enable.md).
