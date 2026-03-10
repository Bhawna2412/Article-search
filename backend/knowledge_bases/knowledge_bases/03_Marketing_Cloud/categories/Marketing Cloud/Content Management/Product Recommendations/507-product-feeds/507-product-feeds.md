---
title: "Product Feeds"
articleID: 507
category: "Content Management > Product Recommendations"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-26
---

# Product Feeds

**Product Feeds** are data sources used to create product recommendations.

Marketing Cloud allows you to create product recommendations based on any of the five metrics: Best Sellers, New Arrivals, Top Trending, Bought Together, and Similar Products. Besides, you can filter categories to include in the recommendations and choose a sorting order for how the recommendations are shown.

## Prerequisites

**For Best Sellers, New Arrivals, and Top Trending:**

Your Marketing Cloud account should have order data for at least 60 days to generate these product recommendations.

**For Bought Together:**

To generate recommendation results as accurately as possible, your Marketing Cloud account should have at least 180 days of historical purchase data. Furthermore, we count every product that is sold at least once with any other product, either as a pair or with multiple products. This recommendation type is only available for the following platforms:

- 
- 
- 
- 

**For Similar Products:**

There should be at least** 101 products **along with proper metadata in the connected store.** **This recommendation type is only available for the following platforms:

- Keap
- Neto
- Shopify
- Rex

## Creating a Product Feed

To create a product feed, follow the steps shown below:

1. From your MMC account, go to the **Navigation** panel, click on **Content**, and select **Product Recommendations**.
  ![profeed0.png](https://us.v-cdn.net/6038474/uploads/YOWSVKWGCSTA/profeed0.png)
2. On the Product Recommendations page, go to the **Product Feeds** tab.
  ![profeed1.png](https://us.v-cdn.net/6038474/uploads/NAWHLK0H5UPJ/profeed1.png)
3. On the **Product Feeds** tab, click **New Product Feed**.
  ![profeed2.png](https://us.v-cdn.net/6038474/uploads/CBBH5X949VCY/profeed2.png)
4. From the slider that opens, enter a product feed name and choose the recommendation filters you wish to apply. These filters allow you to include or exclude a set of products. They are, namely:

***Active products only:**** This filter ensures that only products with an "****Active****" status are included in recommendations, excluding any products marked as "****Inactive****" in the system.

****In Stock products only:**** This filter ensures that recommendations only include products currently available for purchase, excluding any out-of-stock items.

****Approved for Webstore products only:**** This filter includes products that meet specific guidelines for display on a particular webstore, ensuring recommendations are limited to items approved for that platform.*
  ![profeed3.png](https://us.v-cdn.net/6038474/uploads/DWPTI02YW0WQ/profeed3.png)
5. Next, select the e-commerce platform from the Source dropdown, which lists platforms with available data, like Shopify, Neto, Rex, or options passed via API. Then, choose the specific store from which products will be recommended. For more tailored recommendations, select a brand to include product categories associated with the specified brand.
  ![profeed4.png](https://us.v-cdn.net/6038474/uploads/MCLHK42AYKEZ/profeed4.png)
6. `Note:``The Categories drop-down field facilitates hierarchy-based selection, giving you additional control over whether to include or exclude child categories within a parent category.`
  ![profeed5.png](https://us.v-cdn.net/6038474/uploads/5RWDF44IKTC5/profeed5.png)
7. After you’ve selected the categories, choose the recommendation type, based on which the product description is to be generated. Product descriptions are created by joining the **description**, **category**, **brand,** and **name** columns. Hence, make sure your products have a proper name, description, category, and brand data associated with them.

Currently, we are providing five options:

***Best Sellers:**** Recommendations are generated for the recent best-selling products. You can select a date range for a minimum period of “****Last 5 days****” to a maximum period of “****Last 60 days****” so that the best-selling products during the chosen time are considered for generating the recommendations.*

***New Arrivals:**** Recommendations are generated for the newly launched products. You can select a date range for a minimum period of “****Last 7 days****” to a maximum period of “****Last 30 days****” so that the newly-added products during the chosen time are considered for generating the recommendations.*

***Top Trending:**** Recommendations are generated for trending products, which are those showing a surge in popularity. You can select a date range for a minimum period of “****Last 7 days****” to a maximum period of “****Last 30 days****” so that the products trending during the chosen time are considered for generating the recommendations.*

***Bought Together:**** Recommendations are generated for complementary products (such as electronic and household accessories) that customers commonly purchase alongside an item. By using this recommendation, sellers gain insights into customers’ buying patterns and subsequently incentivize them to purchase additional products by bundling items and offering discounts. Currently, the “****Bought Together****” recommendation is only available for Neto, Rex, Keap, and Shopify platforms.*

***Similar Products:**** Recommendations are generated for products whose features or certain attributes (such as price, size, item variant, color, usage type, etc.) share similarities with the products the customer has previously purchased. Such recommendations aim to bring a broader range of products into the spotlight, encouraging customers who might be interested in viewing them, which can potentially generate additional revenue. Currently, the “****Similar Products****” recommendation is only available for Neto, Rex, Keap, and Shopify platforms.*

`Note:``To accurately display product recommendations to the user while viewing the email campaign, it is advised to combine the recommendation type (Bought Together and Similar Products) with a product feed (such as an abandoned cart, best-selling, new arrivals, and top trending) or a list of products identified by their SKU.`
8. Now, select the sorting method to be used in the product recommendation template that will be inserted in the emails. The options are shown below:

***Random****: The recommended products are displayed randomly without any specific order. This option is selected by default.

****Price Low to High****: The recommended products are displayed based on their price range from low to high.

****Price High to Low****: The recommended products are displayed based on their price range from high to low.*

After you’ve added the necessary details in the given fields, click on **Create** to generate the product feed.
  ![profeed7.png](https://us.v-cdn.net/6038474/uploads/QY26V404FK1U/profeed7.png)

<details>
<summary>**What are the "Best Sellers" and "Top Trending" products?**</summary>

"**Best sellers**" are the products that sell the most, while top trending products are those that exhibit significant increases in sales volume.

A product is considered "**trending**" if its sales quantity increases by five units or more. So, depending on your sales growth, you may or may not have any trending products.

</details>

<details>
<summary>**What is an SKU, and its significance?**</summary>

**Stock Keeping Unit**, or simply "**SKU**," is an alphanumeric-based identification code retailers use to track stock levels. It helps assess and manage a store's overall inventory, ensuring the store meets client expectations while maintaining a sufficient stock supply. 

SKU enables businesses to organize products, identify low stock levels, restock more quickly, and optimize supply chains on a much larger scale, thereby improving the likelihood of increased sales.

![profeed6.png](https://us.v-cdn.net/6038474/uploads/XZ0USBOZUZG5/profeed6.png)
</details>

**Important Points to Consider:**

- For new integrations, the system requires a 2-day period to sync and analyze your MMC account’s storage data before generating "**Bought Together**" and “**Similar Products**” recommendations. New customers who recently connected their stores with MMC will need to wait 2 days to access this recommendation type, which will remain disabled for their account during this initial setup phase.
- Ensure you only mention product feeds or products directly related to the items bought or kept in the shopping list by the customer. This is to make sure only relevant “**Bought Together**” and “**Similar Products**” information is shown to the customer while they are checking their abandoned cart or a recently purchased product.
- You can select four types of feeds for the “**Bought Together**” and “**Similar Products**” recommendations, which are, namely, Abandoned Cart, Best Sellers, New Arrivals, and Top Trending. While Best Sellers, New Arrivals, and Top Trending Feeds are static, meaning they display the same product recommendations to all users belonging to a particular store, the Abandoned Cart Feed is dynamic and displays products based on the items left in the cart.
- If no recommended items are available for a cart in the "**Bought Together**" and “**Similar Products**” recommendation types, the system will automatically display the most popular products as a fallback option.
- We also encourage Maropost users to regularly verify and update their product catalog with the latest images, since only products with available images will be suggested to customers. This helps maximize the visibility of your product offerings and maintain visually engaging, relevant product recommendations at all times.

## Use Cases

**Combining “Bought Together” and **“**Similar Products**”** product recommendations with bulk emails:**

“**Bought Together**” and “**Similar Products**” are excellent tools for driving cross-sells when promoting a new or specific product in a bulk email campaign. For example, if you are sending out a sale campaign for a particular product that includes these recommendation feeds, the campaign has been shown to drive click rates and conversions.

Such methods of showcasing complementary product suggestions to a large audience group greatly help increase conversion rates, thus encouraging additional purchases in the long run.

**Combining “Bought Together” and “Similar Products” product recommendations with triggered emails:**

Triggered 1:1 campaigns are ideal for dynamically populating “**Bought Together**” and “**Similar Products**” recommendations. For abandoned cart and browse campaigns, these recommendation types increase the chances of recovery. With campaigns such as purchase confirmations or replenishment notifications that include other relevant products, the likelihood of repeat purchases increases.

## FAQs

**Q1) Can I customize the product feed layout for **“**Bought Together**” **and **“**Similar Products**”** recommendations?**

Yes, once you've created a “**Bought Together**” or “**Similar Products**” product feed, you can customize the layout by creating a product feed template. In the template editor, you can adjust rows, columns, product images, product names, prices, buttons, and styling to match your brand’s look.

**Q2) How do I use **“**Bought Together**” **and **“**Similar Products**”** recommendations in an email campaign?**

After creating a “**Bought Together**” or “**Similar Products**” feed template, you can use it in your email campaigns by following these steps:

1. Go to the **Email Editor** and create a new email or edit an existing one.
2. Insert the “**Bought Together**” or “**Similar Products**” feed template tag into the email content.
3. It is recommended to include the product feed or selected products used to generate the “**Bought Together**” and “**Similar Products**” recommendations, ensuring the recipient gets personalized suggestions.

**Q3) Can I use “Bought Together” and **“**Similar Products**”** recommendations for bulk email campaigns?**

Yes, you can add “**Bought Together**” and “**Similar Products**” recommendations to mass email campaigns. This allows you to provide complementary or similar product suggestions to a broad audience, thereby increasing conversion rates by encouraging customers to purchase related items. We recommend including the associated product feed along with the “**Bought Together**” and “**Similar Products**” recommendations while sending bulk email campaigns.

**Q4) How do **“**Similar Products**”** and “Bought Together” work in abandoned cart flows?**

In abandoned cart emails, the “**Similar Products**” and “**Bought Together**” recommendation type analyzes the products included in the associated abandoned cart feed. It then suggests items of a similar kind or those frequently purchased alongside those products. By providing such suggestions, the feature increases the likelihood of customers completing their purchases while encouraging them to add more products to their cart.

**Q5) How can I use “Bought Together” and **“**Similar Products**”** recommendations in other email campaigns?**

For any email campaign that uses **Product Feed Template Tags**, you can seamlessly integrate “**Bought Together**” and “**Similar Products**” recommendations. This provides dynamic, tailor-made product suggestions to enhance the effectiveness of your email campaigns and drive more sales.

**Q6) What are fallback options, and how do they work?**

Fallback options ensure that recommendations are displayed even when no specific matches are found. This applies specifically to the "**Bought Together**" and “**Similar Products**” recommendation types. If no recommended products are found, the system automatically suggests the most popular products. This ensures users continue to see relevant product options, maintaining engagement and a seamless experience.

**Q7) Can I select specific products to create “Bought Together” and **“**Similar Products**”** recommendations?**

Yes, you can either select an existing product feed (e.g., Best Sellers, Abandoned Cart Feed) or manually choose specific SKUs to create “**Bought Together**” and “**Similar Products**” recommendations. This flexibility allows for more personalized and targeted suggestions.

**Q8) How do fallback options improve the recommendation system?**

Fallback options ensure that if a product or feed lacks sufficient data, the system still provides recommendations based on the available data. This helps avoid gaps in recommendations and improves overall reliability, reducing user drop-off and maintaining customer engagement.

**Q9) Can I use filters while generating “Bought Together” and **“**Similar Products**”** product feeds?**

Yes, while creating a product feed, you can apply filters such as:

- **Active Products Only**.
- **In Stock Products Only**.

You can also apply category filters to include or exclude specific product categories, ensuring the recommendations are relevant.

**Q10) Will the “Bought Together” and **“**Similar Products**”** recommendation features be available for all users in MMC?**

Yes, any MMC user with access to the **Product Recommendations** feature will be able to create and use “**Bought Together**” and** **“**Similar Products**” recommendations, as long as they are using one of the supported platforms (Shopify, Neto, REX, or Keap).

**Q11) What are some example use cases for “Bought Together” and **“**Similar Products**”** recommendations?**

Here are a few common use cases:

**Case 1: Bulk Emails:** Include complementary or comparable product recommendations in mass emails to increase conversion rates.

**Case 2: Abandoned Cart Flow:** Use "**Bought Together**" and** **“**Similar Products**” recommendations to encourage customers to complete their purchase**s** and buy related products.

**Case 3: Email Campaigns with Product Feed Tags:** Dynamically insert personalized product recommendations using product feed template tags in any email campaign.