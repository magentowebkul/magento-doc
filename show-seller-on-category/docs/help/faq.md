# Frequently Asked Questions

**Q: Do I need the Multi-Vendor Marketplace extension for this to work?**  
A: Yes. The **Magento 2 Marketplace Show Seller on Category** is an add-on module to the [Magento 2 Multi Vendor Marketplace](https://store.webkul.com/magento2-multi-vendor-marketplace.html). It will not work standalone.

**Q: What is the difference between Sellers Only and Hybrid display modes?**  
A: The difference between Sellers Only and Hybrid display modes is:-
* **Sellers Only:** Replaces the catalog product listing entirely on that category page, showing only a grid of sellers who sell products in that category.
* **Hybrid:** Retains the catalog products grid but also appends/inserts a block of marketplace sellers belonging to that category, allowing customers to browse both products and sellers.

**Q: Can I hide the rating badge or the product/order counts on the seller cards?**  
A: Yes. In the admin configurations (**Stores > Configuration > Webkul > Marketplace Show Seller on Category**), you can toggle **Show Rating**, **Show Product Count**, and **Show Order Count** settings to customize the seller cards' info.

**Q: Does this module support GraphQL APIs for headless platforms?**  
A: Yes. The module extends Magento's default GraphQL queries with `sellerCollection` and `sellerFilterOptions` fields to fetch seller listings and layered navigation filter attributes for headless frontends.
