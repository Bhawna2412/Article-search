---
title: "Loyalty Configuration"
articleID: 387
category: "Customers > Loyality"
knowledgeBase: "Retail Express"
---

# Loyalty Configuration

You can configure loyalty program settings including point earning rates, redemption rules, and reward tiers to align with your business objectives and customer engagement strategy. This improves your retail operations by providing flexible loyalty program design, with properly configured loyalty settings typically enabling better customer retention and increased purchase frequency through targeted rewards.

Understanding loyalty configuration involves recognizing points-per-dollar settings, redemption value calculations, and tier structures to help retail operators focus on the right customer reward strategies, ensuring your retail strategy consistently drives better customer engagement and loyalty outcomes.

Using the Retail Express Loyalty feature you can manage customer discount groups and award loyalty points to your customers as they purchase products.

- Used as a tender by redeeming points for transactions
- Automatically move your customers through your Price Groups (e.g. receive greater discounts as they earn more points)
- Award bonus points with promotions
- Manually award/remove points from customers (adjustments)
- Expire points after a period of time (override feature available)
- Display points on customer Invoices and Receipts

![mceclip0 (97).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTaiEAE.jpg)

## Configuring Loyalty Settings

To manage your Loyalty configuration:

1. Navigate to **Settings > POS Settings > Loyalty Settings**

> **Note:** You can also navigate to the settings via Customers > Loyalty Configuration.

2. Click on each tab and update the settings (see below for detailed information)
3. Click **Save Changes**

> **Important:** Once you have enabled Loyalty you will need to configure your Payment Types so points can be accrued when paying using various methods. Refer to the "Enable Payment Type Loyalty" section for more information.

## []()Enable Payment Type Loyalty

You can restrict which Payment Methods are available to earn Loyalty Points with e.g. EFTPOS and Credit Card, but not on sales paid by gift vouchers. You can also configure Loyalty Multipliers, so that customers paying in cash can earn more points than someone using an Interest Free payment method.

> **Note:** If you don't enable Loyalty for any payment methods customers will not be able to earn points.

To enable Loyalty for different payment methods:

1. Navigate to **Settings > Payment Types**
2. Tick the **Loyalty **tick box
3. Enter a value in the **Loyalty Multiplier **field e.g. to earn double points enter 2
4. Click **Save Changes**

![mceclip0 (98).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppRHaEAM.jpg)

## []()Settings tab

Enable and configure the basic settings for how your loyalty system will work.

![mceclip1 (58).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTbqEAE.jpg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Enable Loyalty Points | Turn on the Loyalty system and allow the accrual of loyalty points from Invoices for all customers who are set to accrue Loyalty Points |
| Points per Dollar Earning Ratio | Enter a number (up to 2 x decimal places) to determine the number of points a customer receives per dollar spent for fulfilled items e.g. 0.5 will award customers 0.5 (half) of a point for each dollar spent on fulfilled items. |
| Dollars per Points Redemption Ratio | Enter a number (up to 2 decimal places) which will determine the dollar redemption value of loyalty points. e.g. 0.5 will provide $0.50 (50c) worth of tender for each point available. |
| Minimum Points for Redemption | The minimum number of points a customer must have earned or have Available before they can redeem points.   - Points Available - the total points accrued from previous transactions minus any points previously redeemed - Points to Date - the total points earned from previous transactions (ignoring any points redeemed) |
| Enable Automatic Calculation of Price Groups / Discounts based on Transaction History | Enable or disable the ability for customers to be automatically added to price groups based on how many points they have. Ensure you've configured a point threshold for your price groups via the Discount Price Groups tab.  > **Note:** If customers have a Price Group manually selected (via their Customer Account) the Automatic Price Groups won't apply. |
| For Calculating Automatic Price Groups / Discounts, use | Select either Points Available or Points To Date to determine when customers reach the number of points required for automatic allocation to price groups.  - Points Available - a customer will only automatically move up through the price groups if they leave enough points unredeemed to reach the next level - Points To Date - option will allow your customers to redeem points and still move up through the price groups |
| Display Loyalty Points on Invoice | Tick to display the customer's current available loyalty points on A4 invoices printed from POS or via the Sales Report |
| Display Loyalty Points on Receipt | Tick to display the customer's current available loyalty points on receipts printed from POS |

## []()Discount Price Groups tab

Automate your loyalty system by setting points thresholds, allowing customers to automatically move through Price Groups as they accrue more points.

> **Note:** To use this option you will need to have existing Price Groups. See Create and Edit Price Groups for more information.

![mceclip1 (59).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTbvEAE.jpg)
To create a Price Group threshold:

1. Enter a **Points** quantity
2. Select the **Price Group** to associate to
3. Click **Create**

For example, if you have Gold, VIP and Platinum price groups, and set them to 1000, 2000 and 3000 points respectively, a customer will automatically become allocated to Gold once they accrue 1000 points, VIP once they accrue 2000 points, and Platinum once they accrue 3000 points.

> **Note:** To edit or delete existing loyalty points price group rule use the Edit and delete icons on the right of each line.

## []()Loyalty Promotions tab

![mceclip2 (41).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTKvEAM.jpg)
For promotional periods you can enter a special points multiplier. During this period, customers making purchases at those Outlets will receive points based on the Multiplier and either the Points per Dollar Earning Ratio (Settings tab) or the Product Loyalty Ratio (manually specified for each product on the Product Edit screen).

For the required Outlet, enter a **Multiplier, Start Date** and **End Date (Inclusive)**.

> **Note:** The Multiplier will be applied to the Points per Dollar Earning Ratio value specified in the Settings tab or or the Product Loyalty Ratio (manually specified for each product on the Product Edit screen).

For example if the earning Points per Dollar Earning Ratio is 1 and the Multiplier for an Outlet is 2, the resulting ratio will be 2 (1 x 2). If a Product-specific Loyalty Ratio is applied as per the Loyalty Ratio setting in the product configuration (Main tab > Advanced Options), it will be used in place of the Points per Dollar Earning Ratio.

## []()Loyalty Expiration tab

![mceclip5 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTV0EAM.jpg)
The Loyalty Expiration tab allows you to control whether loyalty points expire after a set period (number of days).

The **Expiry Override** feature allows you to control which transactions will override the scheduled expiry period, and thus reset the timer.

For example, in the above configuration if a customer makes a purchase (Sales Order) during the 90 day expiry period, the expiry schedule is reset and the customer's balance will expire 90 days after the new transaction. If another transaction is made in the following 90 days the schedule is reset again, and so on.

If there are no further transactions for 90 days, any points accrued more than 90 days ago will expire.

To use Loyalty Expiration:

1. Click the confirmation message to enable Loyalty Integration

> **Note:** If using an integration with Retail Express please ensure your integration is compatible - see below for details.

2. Select **Expire points after _ days**
3. Enter the **number of days **for the points to expire
4. To enable the **Expiry Override **feature select the appropriate transactions and click the **right arrow **to assign the transaction type to the right box
5. Click **Save Changes**

> **Note:** If you are using either the Webstore/eCommerce API or the Inventory Planning Service API (IPS) you will need to amend your integration to be compatible with this feature, and avoid bulk customer synchronisations when points are reset. You will be prompted to confirm the updated changes when enabling Loyalty to ensure any integrations have been updated. For more information refer to the Loyalty Integration through Retail Express APIs article.  .

## []()Adjustment Reasons tab

![mceclip7 (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTU7EAM.jpg)
The Adjustment Reasons tab allow you to create and maintain custom reasons for adjusting your customer loyalty points through the Customer Activity Report e.g. Bonus Awards, Birthday awards etc.

To create a new Adjustment Reason:

1. Enter a name into the **Adjustment Reason **field
2. Click **Create**

To edit or delete an Adjustment Reason click the **Pencil **or **Trash Can **icon.

> **Note:** If you delete an Adjustment Reason, customers will still retain any points awarded and the associated Adjustment Reason for any historical transactions - you will just not be able to select the Adjustment Reason from the Customer Activity Report.