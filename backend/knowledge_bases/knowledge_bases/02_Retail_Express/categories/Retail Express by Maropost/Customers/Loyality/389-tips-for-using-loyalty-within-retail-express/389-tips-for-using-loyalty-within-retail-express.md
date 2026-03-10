---
title: "Tips for Using Loyalty within Retail Express"
articleID: 389
category: "Customers > Loyality"
knowledgeBase: "Retail Express"
---

# Tips for Using Loyalty within Retail Express

You can optimize loyalty program implementation by following best practices for **Retail Express** loyalty features, helping maximize program effectiveness and customer engagement. This improves your retail operations by providing proven strategies for loyalty success, with properly implemented loyalty best practices typically enabling better program adoption and increased return on loyalty investment.

Understanding loyalty optimization tips involves recognizing enrollment strategies, communication approaches, and reward structure recommendations to help retail operators focus on the right loyalty program enhancement activities, ensuring your retail strategy consistently drives better customer lifetime value and program ROI outcomes.

The Loyalty feature within Retail Express allows you to offer your customers incentives for repeat purchases, encouraging additional business within your stores. Customers can be awarded points for purchases, and even automatically progress to new Price Groups to receive automatic discounts on all purchases.

## []()Loyalty Configuration Settings

![mceclip5 (29).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiHDEAY.jpg)
The Loyalty Settings are the starting point for using the Loyalty feature within Retail Express. Within the settings you can:

- Enable/disable Loyalty
- Determine the global earning ratio i.e. how many points a customer earns for purchases

> **Note:** You can specify individual loyalty ratios for products if you want to have "bonus points" available for specific products (helping to drive purchases).

- Determine the redemption ratio i.e. how many points are the equivalent of a dollar when used to redeem points as payment for purchases
- Minimum points required to be able to begin redeeming points
- Enable the ability for customers to be assigned to different price groups based on their transaction history (and whether it's based on Points to Date or Points Available)
- Display settings for Invoices and Receipts i.e. including the points balance on the printouts

For detailed information refer to the Loyalty Configuration article.

## []()Automatically expire points

The Loyalty Expiration tab allows you to control whether loyalty points expire after a set period (number of days).

![mceclip0 - 2023-07-10T024643.045.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiLdEAI.jpg)
The **Expiry Override** feature allows you to control which transactions will override the scheduled expiry period, and thus reset the timer.

For example, in the above configuration, if a customer makes a purchase (Sales Order) during the 90-day expiry period, the expiry schedule is reset and the customer's balance will expire 90 days after the new transaction. If another transaction is made in the following 90 days the schedule is reset again, and so on.

If there are no further transactions for 90 days, any points accrued more than 90 days ago will expire.

For detailed information on expiring points refer to the Loyalty Configuration article.

## []()Loyalty Discount Price Groups

Using the Loyalty Discount Price Group settings, you can automatically assign customers to a specific price group based on their points value.

> **Note:** The price groups are the standard Price Groups only, and not the Fixed Price Groups.

![mceclip0 - 2023-07-10T024648.497.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiLiEAI.jpg)
For example, once the customer reaches 1000 points add them to the "Gold" group, at 2000 points add them to the VIP group, and at 3000 points add them to the Platinum Group.

Each Price Group can be configured to receive a discount based on the Cost Price or Sell Price, and at a Percentage (%) or Dollar ($) value.

For more information:

- Loyalty Configuration
- Price Groups - Create & Edit Price Groups

## []()Custom Points for Products, Payment Types and Promotions

You can set custom values for individual entities to help drive purchases in particular areas, even running a higher points multiplier for a specific date range as a promotional campaign!

|  |  |
| --- | --- |
| Products | Individual Loyalty Ratios can be set when editing a product (on the Main tab within the "Advanced Options" section). This can be helpful when you have inventory you want to try and sell off, like slow-moving or discontinued stock. ![mceclip0 - 2023-07-10T024654.012.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiLnEAI.jpg) |
| Payment Types | Individual Payment Types can have Loyalty Multipliers set from within the Payment Types configuration area (Settings > Payment Types). For example, you might want to reward customers paying with Cash or EFTPOS by offering double points, while payments made on Finance earn 0 points. ![mceclip3 (66).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphKrEAI.jpg) |
| Promotions | The Loyalty Promotions area is found within the Loyalty Settings, at Customers > Loyalty Configuration (or Settings > POS Settings > Loyalty Settings).  Using the Promotions you can set a specific multiplier for each Outlet, and a Start and End Date. For example, you could run a "store-wide double points this weekend" promotion for your customers. ![mceclip4 (39).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiLsEAI.jpg) |

For more information:

- Loyalty Configuration (including information on the Promotions tab)
- Settings - Payment Types

## []()Using Loyalty Cards

Using Loyalty Cards for your customers gives you an easy way to add customers to the sales in POS, and therefore more likely the customer will provide their details to accrue points. Barcodes on Loyalty Cards can be scanned and associated with a customer in both POS and Back Office using the Custom Reference field.

> **Note:** Retail Express does not supply Loyalty cards, however, we recommend the vendor Creative Plastic Cards. View their website here and enter the password "retailexpress" to access exclusive deals for Retail Express customers.

When processing a sale, you would simply ask the customer for their card, and scan it into the Cust Ref field. The system will find the matching customer and add them to the sale.

![loyalty1 highlighted.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiLxEAI.jpg)
For more information refer to the Customers - Using Loyalty Cards article.

## []()Viewing Customer Points Balances

There are multiple ways to view a customer's current points balance:

### POS

If a customer with Loyalty enabled is added to the sale the Loyalty box will be populated with:

- Enabled - Y/N
- Points to date
- Points Available
- Points to the next discount group
- Value spend to the next price group

![mceclip6 (18).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphPwEAI.jpg)

### Back Office

In the Back Office within each Customer account is a detailed "Loyalty History" tab. From this tab you can see:

- Date the points were accrued
- Order Number

> **Note:** Clicking the Order Number will open the sale in POS.

- Description of the Transaction e.g. Sales Order (a sale in POS), Bonus Award (points awarded through the Customer Activity Report)
- Product ID of any products purchased
- Product Description for the products
- Qty of products purchased
- Points accrued

![mceclip7 (18).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiM2EAI.jpg)
For more information:

- Create a Customer Back Office
- Add a New Customer to a Sale

## []()Customer Activity Report

The Customer Activity Report is a powerful report allowing you to target customers based on their purchasing habits and more, including their Loyalty configuration.

For example, you can:

- Target customers with a newsletter campaign e.g. Loyalty enabled and with Available Points less than a particular value, to advertise opportunities to earn more points
- Award bonus points e.g. all newsletter subscribers receive a bonus 50 points
- Subtract points
- Reset the points to a particular balance (this will increase/decrease their points automatically to match the new balance)

![carreport.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiM7EAI.jpg)
![mceclip1 - 2023-07-10T024742.143.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiMCEAY.jpg)
Refer to the Customer Activity Report article for detailed information on using this feature.

## Frequently Asked Questions

[Are Loyalty Points integrated with Shopify?](https://galaxy.maropost.com/kb/articles/389-tips-for-using-loyalty-within-retail-express#loyalty-shopify)

Currently, Loyalty Points are not integrated with Shopify using the Retail Express Shopify Connector, however, this is a feature marked for future development on our [Product Roadmap](https://ress.zendesk.com/hc/en-us/articles/360000964916).