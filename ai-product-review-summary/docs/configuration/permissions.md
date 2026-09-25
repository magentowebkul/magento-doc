# Access Control

The module adds its own resources to the role tree in
**System → Permissions → User Roles → Role Resources**.

| Resource title | Resource ID | Grants |
| --- | --- | --- |
| AiReviewSummary Menu | `Webkul_AIProductReviewSummary::aireviewsummary` | Parent node for the menu |
| AiReviewSummary Menu | `Webkul_AIProductReviewSummary::aireviewsummary_menu` | The **AI Product Review Summary** sidebar entry |
| AiReviewSummary Menu Support Link | `Webkul_AIProductReviewSummary::aireviewsummary_support` | The **Support** links |
| Webkul AIProductReviewSummary Config | `Webkul_AIProductReviewSummary::aireviewsummary_config` | The configuration section and **Validate Key and Load Models** |

The config resource sits under **Stores → Settings → Configuration** in the tree.

## Common role set-ups

| Role | Tick |
| --- | --- |
| Can configure the extension | **Webkul AIProductReviewSummary Config** |
| Can regenerate summaries from the reviews grid | Magento's own review permissions (**Marketing → User Content → Reviews**) |
| Only needs the support links | **AiReviewSummary Menu Support Link** |

::: tip Regeneration follows review permissions
The **Update Status** and **Delete** mass actions are Magento's own. Anyone allowed to use
them also triggers summary regeneration — no extra permission is needed.
:::

Next: [Provider Overview](../providers/overview.md).
