---
title: "Creating Promotional Campaigns and Coupons"
articleID: 258
category: "Store Settings > General Settings"
knowledgeBase: "Retail Express"
---

# Creating Promotional Campaigns and Coupons

You can drive sales and customer engagement by creating promotional campaigns and discount coupons that incentivize purchases, reward loyalty, or support seasonal sales events. Properly configured promotions help increase transaction values and customer participation, with flexible coupon options enabling percentage discounts, fixed amount reductions, or product-specific offers that align with your retail marketing strategy.

Setting up targeted promotional campaigns with appropriate restrictions and expiry dates helps retail operators execute strategic pricing initiatives while maintaining profit margins and preventing coupon misuse through validation rules.

The Promotional Campaigns feature allows POS to automatically award a discount to products as they are added to an order. For example "Buy a pair of shoes & get second pair 50% off", or the usual 2 for 1 deal. Discounts can be added automatically as the products are added. The Tier feature allows you to increase the discount as the customer buys more products.

Using the Coupons feature, the campaign can be limited to customers able to quote a unique code to "unlock" the discount.

![mceclip0 (32).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povDdEAI.jpg)

> **Important:** Due to the complex calculations required to validate a Promotional Campaign, having too many active Campaigns can cause a reduction in the performance of POS. As an alternative, discounts can also be created in bulk using the product Mass Download feature.

## []()Terminology

When using Promotional Campaigns there are a few terms you should familiarise yourself with:

|  |  |
| --- | --- |
| **Term** | **Details** |
| Qualifying Products | Products that when added to an order will activate the campaign. Qualifying Products can be added using Dynamic Products or Fixed Products. Products cannot be both Qualifying Products And Benefit Products; if there are Benefit Products specified it will be removed from the Qualifying Products list i.e. it will not trigger the promotion. For Qualifying Products to receive the discount there should be no Benefit Products specified in the rule. |
| Benefit Products | Products that can receive the discount, but are not used to activate the campaign. For example, when the customer buys 5 bottles of wine (the Qualifying Products) they get a cork screw (the Benefit Product) for free. Benefit Products can be added using Dynamic Products or Fixed Products. If using Benefit Products the Discount Rule will be limited to "Cheapest Benefit Product". |
| Dynamic Products | Products selected by using Filters, any new products matching those filters will be automatically added to the Campaign |
| Fixed Products | Specific products entered as either a Qualifying or Benefit Product, products are not applicable to the Campaign unless explicitly added |
| Qualifying Customers | Customers that fit *any* of the filters and therefore eligible for the campaign |

## []()Discount Rule Definitions

Discount Rules offer multiple different rules and options to create your campaign.

|  |  |
| --- | --- |
| **Term** | **Details** |
| Buys | Used to specify an exact quantity, including multiples of e.g. "Buys 2" means 2 products exactly, but will also include sets of 2 - 2, 4, 6 etc. |
| Buys at least | Used to specify a minimum quantity e.g. "Buys at least 2" means a quantity of 2 and above - 2, 3, 4 and so on. |
| Spends at least | Used to specify a minimum value e.g. "Spends at least 2" means at least $2 and above |
| Of any | Can be any of the qualifying products, as long as the quantity/value has been met e.g. Buys at least 2 of any qualifying products |
| Of the same | Must be the same qualifying product that meets the quantity/value criteria e.g. Buys at least 2 of the same product |
| Cheapest qualifying product | The discount will apply to the cheapest qualifying product only |
| Cheapest benefit product | The discount will apply to the cheapest benefit product only |
| All qualifying products | The discount will be applied to all qualifying products on the sale |
| % discount | A percentage of the sell price e.g. 10% of $50 is a discount of $5. |
| $ discount | A dollar discount of the sell price e.g. $10 discount of a $50 product is a discount of $10 |
| $ total | The total end price e.g. Buy 2 of any qualifying products they get all qualifying products at 10 $ total - if the customer buys 2 qualifying products normally priced at $50 each they will still pay only $10 for the entire sale |
| $ unit price | The value of each product e.g. Buy 2 get all qualifying products at 10 $ unit price - the customer will pay $20 total (2 x $10). |

## []()Create a new Promotional Campaign

To create a new campaign:

1. Navigate to **Settings > Promotional Campaigns**
2. Click **Create Promotional Campaign**
3. You will be prompted to enter the details of the campaign
  ![mceclip0 (33).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powGzEAI.jpg)
4. Enter a **Name**
5. Enter an internal **Description**
6. Enter the **Invoice/Receipt Name **to be displayed on Invoices for customers
7. Select a date range the promotion will run for by selecting a date in the **Start Date **and **End Date** fields

> **Note:** The End Date is the last date the Campaign will be active for

8. To run the promotional indefinitely leave the End Date field blank
9. Enter a **Coupon Code **to enable redemption by a coupon code only (the Generate function will automatically create a coupon code for you)
10. Enter a **Usage Limit per Customer **to restrict how many times a customer may redeem the coupon

> **Important:** Coupons with a Usage Limit must have a customer added to the sale in POS before it can be finalised

11. Click **Save Changes**
12. New tabs will become active and display at the top of the window
  ![mceclip0 (34).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povzBEAQ.jpg)
13. Click the **Outlets **Tab
14. Click **Add Outlets**
15. Highlight the **Outlets** to be added and click the arrows to allocate them to the box on the right
  ![mceclip1 (15).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powHEEAY.jpg)

> **Note:** Hold Ctrl to select multiple Outlets

16. Click the **Discount **tab
17. Create your rule by entering information into the **Tier**
  ![mceclip1 (16).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pouAIEAY.jpg)
18. Use the drop-down on the right to select between a % discount, $ discount and $ total

> **Note:** If entering a % amount you will need to enter a whole value without decimals

19. To select a **Minimum Spend **change the "Buys" option to "spends at least"
  ![mceclip2 (15).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powHdEAI.jpg)
20. Click **Add Tier** to add additional discount levels to this Campaign (max of 3)
21. Click the **Qualifying Products **tab

> **Note:** This is where you add products that when purchased will activate the campaign

22. The option **All products in the system qualify for this promotional campaign **will be selected by default.
23. To select **specific qualifying products only **untick the All Products option
24. Use the **Dynamic Products **filters to select products by attributes

> **Note:** As new products are added to the system that match these filters they will be automatically added to the Campaign

25. Use the **Fixed Products **section to add specific products to the Campaign
26. Click **Save Changes**
27. Click the **Benefit Products **tab
28. Add** Benefit Products **by using the **Dynamic Products **filters or by entering **Fixed Products **(using their product codes or the search functionality)
29. Click **Save Changes**
30. Click the **Qualifying Customers **tab
31. Use the filters to select the criteria for your customers

> **Note:** Customers that match *any *of the filters will qualify for the campaign

  ![mceclip1 (17).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powHiEAI.jpg)
32. Click **Save Changes**
33. Click **Cancel **to return back to the list of all campaigns

## **Bulk Activate/De-Activate**

Once a Promotional Campaign is created, users can use Bulk Activate/De-Activate option to multi-select Promotional Campaigns and manage the activation status of multiple campaigns simultaneously.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240614at92100AM.05TJ1000004xw7DMAQ.png)

## []()Redeeming Coupons at POS

To redeem a Coupon at POS:

1. Click the **Coupons **button
  ![coupons-redeem.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powHnEAI.jpg)
2. Scan or enter the **Coupon Code**
3. The details of the Promotion will appear on the right-hand side
4. Click **Apply**
5. If the coupon has expired or is invalid, a warning will be displayed. Click **Override **to allow the redemption of the code.

> **Note:** The Coupon Override feature must be enabled for your Security Profile - see the Staff - POS Security Features article for more information.

  ![coupons_override.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powHsEAI.jpg)
6. Click **Done**
7. An **orange tag icon** will be displayed to show the product receiving a discount from a Coupon (hover over the icon to see the name of the Campaign)
  ![coupons_icon.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powHxEAI.jpg)
8. If the Campaign has a **Usage Limit per Customer **click the **Customers **tab and add a customer to the sale

> **Note:** You will not be able to finalise a sale with this type of coupon if a customer has not been added to the sale

If a Coupon has been added to the sale but has not met the requirements for the Campaign, an error will be displayed at the bottom of the window. Click the error to view details:

![coupons_error.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIHEAY.jpg)

### **Gift Voucher Re-Printing from POS**

Users can re-print a voucher directly from the voucher lookup screen within the POS system. This new feature includes displaying the voucher's "current remaining value" at the time of printing, ensuring accurate and up-to-date information.

If needed to review the original sale or voucher details further, a user can select "Open Sale" directly from the voucher lookup screen.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240530at111203AM.05TJ1000004xwRJMAY.png)![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240614at93229AM.05TJ1000004xwkLMAQ.png)

## []()Campaign Rules

The following guidelines provide an outline as to when the Promotional Campaign has been set up correctly, and when it will be applicable to a sale.

**Discounts:**

- Where applicable, the discounts are always applied to the cheapest item in the transaction.
- Products that have been manually discounted, or have had their prices manually set, are not eligible to take part in Promotional Campaigns.
- If the discount from a campaign would be less than the saving from customer pricing, or special pricing, then the promotion will not be awarded.
- Max discount rules, if defined, are still enforced. A campaign cannot discount a product to below the max discount price set.

**Priority order:**

- Promotions are calculated in ascending priority order, from 1 up. This means a campaign which gives the customer a higher saving may not be awarded if a campaign with a higher priority has already used the items to award a discount of lesser value.
- Because promotions are recalculated each time the order changes, campaigns that show as already awarded may be removed if they are no longer eligible, or a better reward can be given by a different campaign/combination of products.

**Product rules:**

- A single item may only take part in one campaign per transaction. If a line item has a quantity greater than 1 then the line item may take part in multiple campaigns.
- Benefit products cannot also be qualifying products. If a product is defined as both a qualifying product and a benefit product then it will be ignored as a qualifying item.

**Best practice recommendations:**

- In order to minimise mistakes going out to the POS it is good practice to keep your campaign flagged as inactive as you create it. Once you have double checked it is correct you can then flag it as active and save it again.

## []()Example Campaigns

Click the heading below to see how to configure each Campaign.

[Buy 1 Get 1 Free](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#campaign-b1g1f)

To configure this Campaign:

**Discount tab:**

|  |  |
| --- | --- |
| Tier | Only one tier required - Tier A |
| Quantity and Combination | 2 of the same i.e. When the customer buys **2 of the same **product from the qualifying products |
| Reward | Cheapest qualifying product |
| Reward value | 100.00 |
| Discount Type | % discount |

![mceclip0 (35).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIMEAY.jpg)
**Qualifying Products**

Add any products applicable to this rule

**Benefit Products**

N/A

[Buy 3 for 2](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#campaign-b3f2)

**Discount Tab:**

|  |  |
| --- | --- |
| Tier | Only one tier required - Tier A |
| Quantity and Combination | 3 of the same i.e. When the customer buys **3 of the same **product from the qualifying products |
| Reward | Cheapest qualifying product |
| Reward value | 100.00 |
| Discount Type | % discount |

![B3F2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIREAY.jpg)
**Qualifying Products**

Add any products applicable to this rule

**Benefit Products**

N/A

[Buy 5 for $50](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#campaign-b5f50)

**Discount Tab:**

|  |  |
| --- | --- |
| Tier | Only one tier required - Tier A |
| Quantity and Combination | 5 of any i.e. When the customer buys **5 of any **product from the qualifying products |
| Reward | All qualifying products |
| Reward value | 50 |
| Discount Type | $ total |

![b5f50.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIWEAY.jpg)
**Qualifying Products**

Add any products applicable to this rule

**Benefit Products**

N/A

[Buy 10 of anything in store and get 10% off your entire order](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#campaign-b10g10off)

**Discount Tab:**

|  |  |
| --- | --- |
| Tier | Only one tier required - Tier A |
| Quantity and Combination | 10 of any i.e. When the customer buys **10 of any **product from the qualifying products |
| Reward | All qualifying products |
| Reward value | 10 |
| Discount Type | % discount |

![b1010off.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIbEAI.jpg)
**Qualifying Products**

Add any products applicable to this rule

**Benefit Products**

N/A

[Buy 2 of X and get 50% off product Y](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#campaign-b2xget50y)

**Discount Tab:**

|  |  |
| --- | --- |
| Tier | Only one tier required - Tier A |
| Quantity and Combination | 2 of the same i.e. When the customer buys **2 of the same **product from the qualifying products |
| Reward | Cheapest benefit product |
| Reward value | 50 |
| Discount Type | % discount |

![b2x50y.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIgEAI.jpg)
**Qualifying Products**

Use the 'Qualifying Products' tab to define which products constitute product X

**Benefit Products**

Use the 'Benefit Products' tab to define which products constitute product Y

[Buy any 3 of product X and get 10% off them, or buy 5 and get 20% off, or buy 8 or more and get 30% off them](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#campaign-tiers)

**Discount Tab:**

|  |  |
| --- | --- |
| Tier | 3 Tiers - A, B and C. Values in the following rows should be the same for all tiers unless otherwise specified |
| Quantity and Combination | - Tier A: 3 of any - Tier B: 5 of any - Tier C: 8 of any  i.e. When the customer buys **3 of the same **product from the qualifying products (similar for purchases of 5 or 8) |
| Reward | All qualifying items |
| Reward value | - Tier A: 10 - Tier B: 20 - Tier C: 30 |
| Discount Type | % discount |

![tiers.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIlEAI.jpg)
**Qualifying Products**

Use the 'Qualifying Products' tab to define which products constitute product X

**Benefit Products**

N/A

[Buy at least 3 products and get them for $10 each](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#campaign-buy-at-least)

This Promotional Campaign is great for when you have products at varying prices but want to offer the products at the same price each when the campaign conditions are met. For example, you may have a range of coffee mugs available from $11 to $14, but if a customer buys 3 of them they'll receive each mug for only $10 each.

**Discount Tab:**

|  |  |
| --- | --- |
| Tier | N/A |
| Quantity and Combination | Buys at least 2 of any i.e. When the customer buys **2 **of any of the qualifying products |
| Reward | All qualifying items |
| Reward value | 10 |
| Discount Type | $ unit price |

![mceclip1 (18).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIqEAI.jpg)
**Qualifying Products**

Use the 'Qualifying Products' tab to define which products constitute product X

**Benefit Products**

N/A

## []()Frequently Asked Questions

[How do Tiers work?](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#tiers)

The Tier feature allows you to increase the discount as the customer buys more products. For example a discount of 10% when 2 products are purchased, compared to 20% off when you buy 3.

- A basic promotion of buy 3 items and get %10 off will require only 1 tier, with a required quantity of 3 and a reward of 10% discount
- You could extend this with a second tier that specifies that if the customer buys 6 items then they will get %15 discount instead
- A further third could tier specify that if they buy 10 items then they will get %20 discount

When the reward is a percentage discount then the tiers are treated as ranges (e.g. buy between 3 and 5 items and get 10% off them, buy between 6 and 9 items and get 15% off the, and buy 10 or more items and get 20% off them).

If the reward is set as a monetary value then the tiers are treated as exact quantities required e.g. Buy exactly 3 items and get $5 off them, but if you buy 5 items then the discount gets upgraded to $10 off. If you bought 4 items you would only get the $5 discount plus one item at full price.

[Can I see what sales were made for a Campaign?](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#sales-report)

The **Sales Report** has a "Campaigns" filter that you can use to see the sales associated with a particular campaign.

1. Navigate to **Reports > Sales Reports > Sales Report**
2. Use the **Promotional Campaigns **filter to select your campaign
3. Update the other fields as required
4. Click **Search**

![mceclip0 (36).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powIvEAI.jpg)
[Can I redeem an invalid Coupon in POS?](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#coupon-override)

Yes - you'll need Coupon Override permissions however. When enabled and you try to redeem an invalid Coupon a warning will be displayed:

Click the **Override **button to override the coupon (you may need to enter User Credentials with access to this feature).

To enable the Coupon Override feature:

1. Navigate to **Staff > POS Security Features**
2. Select your **Profile**
3. Tick **Allow Override of Invalid Coupon**
4. Click **Save**

> **Note:** This feature is only recommended for Management/Senior staff only

[Can I duplicate a Campaign?](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#duplicate-campaign)

Yes - from the Campaign list:

1. Click the **Duplicate icon** on the right:
  ![mceclip4 (8).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powJ0EAI.jpg)
2. Enter a new **Name **for the Campaign
3. Click **Duplicate**

All information will be copied excluding Coupon Codes (as these need to be unique for each Campaign).

![campaigns_duplicate.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powJ5EAI.jpg)
[Can I report on sales using Coupons?](https://galaxy.maropost.com/kb/articles/258-creating-promotional-campaigns-and-coupons#coupon-report)

Using the **Sales Report **you can filter by Promotional Campaigns to view a list of sales from that campaign.

You can filter the Campaign list by Active, Inactive and Deleted campaigns (if Campaigns are deleted any sales will still be associated to the Campaign).

![mceclip0 (37).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powJAEAY.jpg)