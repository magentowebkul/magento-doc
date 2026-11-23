# Recommendation Types

Each recommendation block uses one type. The type decides how products are picked.

---

## Overview

| Type | Picks products by | Needs embeddings | Pages |
|---|---|---|---|
| **Trending** | Shopper interactions in the last **Duration** hours | No | All |
| **Reviews** | Highest rating, with at least the minimum number of reviews | No | All |
| **Category** | The current category | No | Category, Product Detail |
| **User** | Products liked by shoppers with a similar profile | User | All, logged-in only |
| **Visual Similarity** | Products whose images look like the current product | Image | Product Detail |
| **Text Similarity** | Products whose attributes read like the current product | Text | Product Detail |
| **Recently Viewed** | Products the shopper viewed in the last **Duration** hours | No | All |

---

## Trending

Ranks products by shopper activity. Choose one or more **Trending Type** values:

* **Most Viewed**
* **Most Purchased**
* **Most Added to Cart**
* **Most Added to Wish List**
* **Most Added to Compare List**

Only interactions from the last **Duration** hours count. Set **Duration** in [General Settings](/configuration/general-settings.md#_3-embedding-and-recommendation-settings).

## Reviews

Shows the products with the highest average rating. A product needs at least **Minimum Review For Review Based Recommendation** approved reviews to qualify.

## Category

Shows products from the current category, in random order. On the product page, the product's categories are used. Set **Filter with current and child category** to **Yes** to include child categories.

## User

Finds customers with a similar profile and shows the products they interacted with. It works for logged-in customers only. Guests do not see this block.

User embeddings are updated every hour by cron. New customers see results after their first interactions are processed.

## Visual Similarity

Compares the image embedding of the current product with all other products. Use it for products where looks matter, such as clothing, shoes, or furniture. It needs image embeddings. See [Generate Embeddings](/embeddings/generate.md).

## Text Similarity

Compares the text embedding of the current product with all other products. The text comes from the attributes in **Select Attributes to create Embeddings**. It needs text embeddings.

## Recently Viewed

Shows the products the current shopper viewed, newest first. It works for both logged-in customers and guests. Only views from the last **Duration** hours count.

---

## How Accuracy Affects Results

**Accuracy** in [General Settings](/configuration/general-settings.md#_3-embedding-and-recommendation-settings) controls how close a match must be for **User**, **Visual Similarity**, and **Text Similarity**.

| Accuracy | Effect |
|---|---|
| **1** | Only very close matches. Fewer products. |
| **10** | Loose matches allowed. More products, some less related. |

If a similarity block shows too few products, raise **Accuracy**. If it shows unrelated products, lower it.

---

## What Counts as an Interaction

The module records these shopper actions for **Trending**, **Recently Viewed**, and **User** recommendations:

* Viewing a product
* Adding a product to, or removing it from, the cart
* Adding a product to, or removing it from, the wish list
* Adding a product to, or removing it from, the compare list
* Placing an order, and canceling an order item

---

## Next Step

Go to [Storefront Results](/recommendations/storefront.md).
