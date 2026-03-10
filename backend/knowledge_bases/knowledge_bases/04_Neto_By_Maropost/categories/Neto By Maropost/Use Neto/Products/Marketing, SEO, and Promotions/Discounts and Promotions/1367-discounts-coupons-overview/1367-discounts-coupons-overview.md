---
title: "Discounts / Coupons Overview"
articleID: 1367
category: "Use Neto > Products > Marketing, SEO, and Promotions > Discounts and Promotions"
knowledgeBase: "Neto By Maropost"
---

# Discounts / Coupons Overview

## What Are Discounts / Coupons?

A discount or coupon is a way to reduce the price of products & services as a special limited time offer. This is useful to increase traffic to your website and increase cart size and conversions, or move old stock as well as build stronger relationships with your customers.

## Anatomy Of Discounts / Coupons

In Neto, discounts and coupons consist of several parts that work together depending on what you want to discount, and how you want the discount to be calculated.

### Naming & Visibility

Here you will enter a title and subtitle for your discount that will be visible to customers. Set it to active once you want the discount to go live and enter a discount key, which is a unique id for the discount.

### Discount Rules

Discount rules consist of two parts, the conditions that are required for the discount to apply, and the actual discount that will be given to your customers.

**Conditions**

The condition is a requirement that must be true for a discount to apply. There's a number of conditions that you can use, which are explained in the table below.

| Condition | Description | Example Use |
| --- | --- | --- |
| Cart quantity | Used to specify how many products are required for a discount | Buy any five items and get 10% off |
| Category | Products in this category will have the discount applied | 20% of all snowboard apparel |
| Coupon code | Create a coupon code for customers to use in checkout to receive a discount | 5% off with the coupon code 5%OFF |
| Customer username | This discount will apply if the customer’s username matches the one entered | 10% off coupon for your 1,000th customer |
| Kit component quantity | Used to specify how many pieces of a kit are required before the discount will apply | Buy 4 different flavours, and get a 5th free |
| Product subtotal | The total of the order before shipping costs have been added | Free shipping when you spend $100 or more |
| Shipping subtotal | The total of the shipping costs | Don’t pay more than $50 shipping on any order |
| Product | Requires that a specific product is on the order | Free shipping when you buy a new Samsung Galaxy S8 |
| Product dropship supplier |  |  |
| Shipping category | The trigger requires that products belong to the shipping category specified in the value | Free shipping for all small letters |
| Shipping option | Mandates which shipping options are permitted for the discount to apply | $5 off when you pickup in store |
| User group | The customer buying your products belongs to the specified price group | 10% off for wholesale customers |

Conditions can require a coupon code, or apply without one, depending on how you wish to offer the discount. You can combine two or more conditions so that all or any of the conditions will result in the discount applying. For example:

In the above image we have two conditions that both need to be met for the discount to apply. Customers must spend $100 or more on products, and they also need to apply the coupon code to qualify for the discount. This is called an **AND** condition.

> **Note:** A great way to test if a discount works correctly is to create a customer account for yourself, and add an AND condition for **Customer Username** equal to your account. Log in to your website front end, and only you will see if it works correctly, and remove the condition when it is ready for customers.

This example is different, in that we have two conditions where either can be met for the discount to apply. Specifically, if a customer makes a purchase from the men's or women's category, they will qualify for a discount. This is called an **OR** condition.

By using AND and OR between your conditions, you can specific exactly what is required for a customer to qualify for a discount.

**Discounts**

The discount is the effect that is applied once the conditions are met, and they are usually a reduction in cost by dollar or percentage amount. Consult the below table for the discounts available and examples of their use.

| Discount | Description | Example Use |
| --- | --- | --- |
| Product discount | Reduce the cost of a product(s) on an order | 5% off the Samsung Note 8 when you spend $100 or more. |
| Category discount | Reduce the cost of products in a specific category | 20% of all snowboard apparel |
| Free product | Give a free product that you specify (cannot be a gift voucher, use reward program instead). Free gifts must be Active, Approved to show on Webstore, and available to the customer group. They cannot have a zero price, be hidden, a gift card or an editable kit. | Free oil filter when you buy 12 litres of performance oil |
| Product subtotal | Take a dollar or percentage off the order subtotal (not incl. shipping) | 10% off when you spend $100 or more |
| Shipping subtotal | Take a dollar or percentage off the shipping costs | Free shipping when you spend $50 or more |
| Product cost cap | Set an upper limit for the cost of a product(s) on the order | Pay a maximum of $50 on Adidas sneakers when you buy 2 or more pairs. |
| Shipping cost cap | Set an upper limit for the cost of shipping on the order | Don’t pay more than $20 for postage with the coupon CHEAPSHIPPING |

Like the conditions, multiple discounts can be added to a promotion so that either they all apply, or just one. For example:

In this example once the conditions are met, the customer will qualify for two discounts. The cost of shipping will be capped at $20, and they will also receive a free gift.

However, if we add the option of two gifts like the above example, customers will only receive one of the free gifts. While they won't be given a choice of which item, setting up multiple free products is useful in case one runs out of stock.

**Advanced Options**

Conditions and discounts both have advanced settings that can be applied, depending on the condition and discount type selected. Consult the table below for the most common advanced options, as well as those specific to individual conditions and discounts.

| Advanced Option | Description | Condtion/Discount |
| --- | --- | --- |
| Active | Turn this condition/discount on or off as required. | All conditions and discounts |
| Sort order | Set the order conditions and discounts appear to customers when multiples are configured. | All conditions and discounts |
| Order must be at least | Set a minimum dollar amount for the order so that the condition can apply. | All conditions except product subtotal and shipping subtotal. |
| Usage Policy | Choose if coupons can be used once per customer or multiple times. Note that one time usage will only be enforced if the customer logs in, otherwise the usage can't be tracked. | Coupon code |
| Max discount allowed | Set a maximum dollar amount that the discount won’t exceed. | All discounts. |
| Max repeats allowed | Choose how many times a discount can apply, should a customer buy multiple qualifying products. | All discounts. |
| Max quantity allowed | Configure the maximum amount of a product that a customer can buy using this discount.  > **Note:** For the Product Cost Cap Discount type this value represents the product quantity that forms the base of the discount.			E.G. Buy 3 for $30, the Max quantity allowed value would be 3. The discount would apply to every set of 3 valid products in the cart. | Product discount, product cost cap, shipping cost cap, free product |
| Apply discount from | Choose if the discount is to be taken from all products, or the highest or lowest priced items. | Product discount, product cost cap |
| Apply discount to | Choose if the discount is applicable to all products, or just those equal or lower in price to the configured product. | Product discount |

Advanced options are completely optional, but can help enhance your conditions and discounts with their settings.

### Additional Rules

Conditions and discounts can be given their own advanced settings, but in the additional rules section you can apply similar restrictions to all conditions and discounts. There's also some new options you can set.

| Additional rule | Description |
| --- | --- |
| Use start and end dates | Toggle this setting to configure a start and end date for your promotion. It won’t be live until the start date, and will automatically end on the end date. |
| Exclude products with promotional pricing | Products that have an active price promotion already won't be eligible for this discount. Shipping and other discounts will still apply. |
| Use alongside other promotions | Products that are part of a promotion already will be eligible for this discount. |
| Usage policy | Choose if this promotion can be used just once, or an unlimited number of times |
| Automatically apply discount | Set this to yes if you didn’t include a condition for a coupon code. You can also set it to yes if you want anyone to get the discount, even if they don’t have the code. |

### Pop-up

The pop-up window appears to customers when the conditions have been met for the discount. Toggle the **Show A Pop-up When Used** setting, and use the editor to enter a message to your customers.