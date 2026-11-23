# Storefront Results

Active recommendation blocks appear below the main content of the pages you selected. Each block shows its **Name** as the title and a carousel of products. Blocks on the same page follow their **Sort Order**.

A block appears when all of these are true:

* **Status** is **Yes**.
* The current time is between **Start Timing** and **End Timing**.
* The page matches one of the block's **Page Type** values.
* The recommendation type finds at least one product.

---

## Product Page: Text and Visual Similarity

This is the product the shopper is viewing:

![Product page on the storefront](/images/frontend/product-page.webp)

Below it, two blocks recommend related products:

* **You may also like** — **Text Similarity**. Products with similar names and attributes.
* **Similar to your findings** — **Visual Similarity**. Products whose images look similar.

![Text Similarity and Visual Similarity blocks on the product page](/images/frontend/text-and-visual-similarity-recomm.webp)

---

## Cart Page: Reviews

**Customer Also Loved** is a **Reviews** block on the **Cart** page. It shows top-rated products with enough reviews.

![Reviews block on the cart page](/images/frontend/review-based-recomm-cart.webp)

---

## Category Page: Category

**Product & Category Based Recommendation** is a **Category** block on the **Category** page. It shows products from the current category.

![Category block on the category page](/images/frontend/category-based-recomm.webp)

---

## Home Page: Recently Viewed and Trending

The home page shows the shopper's recently viewed products, followed by **Trending Now**, a **Trending** block.

![Recently Viewed and Trending blocks on the home page](/images/frontend/recently-viewed-product-recommendation.webp)

---

## Shopper Actions in a Block

Products in a block work like any product list. Shoppers can open the product, and add it to the cart, the wish list, or the compare list.

---

## Next Step

Go to [REST API](/developers/rest-api.md) for headless storefronts, or [Troubleshooting](/help/troubleshooting.md) if a block does not appear.
