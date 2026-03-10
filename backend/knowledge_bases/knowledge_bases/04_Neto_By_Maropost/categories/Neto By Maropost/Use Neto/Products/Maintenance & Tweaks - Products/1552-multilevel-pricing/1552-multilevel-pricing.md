---
title: "Multilevel Pricing"
articleID: 1552
category: "Use Neto > Products > Maintenance & Tweaks - Products"
knowledgeBase: "Neto By Maropost"
---

# Multilevel Pricing

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

**Please Note**: This add-on is only compatible with the Neto webstore sales channel.

Multi-level pricing lets you to offer discounts per product based on the number of items a customer purchases on a single order. Multi-level discounts are automatically applied. Example of multi-level pricing:

- Buy 1-10 Pay $50 each
- Buy 11-20 Pay $45 each
- Buy 21 or more Pay $40 each

> **Note:** Multilevel pricing discounts are ignored if a better price promotion is in effect.

## Set up the Multilevel Pricing Add-on

1. In your Neto control panel, click on the **Addons** menu.
2. In the Product Management section, find the Multilevel pricing add-on and click the **Install** button.
3. Click the **Install** button in the pop-up that appears. Once installed, click the **Close** button.

When installed, a **Multilevel Pricing** section will appear for each product in your control panel.

> **Note:** If you don't see the Multilevel Pricing section click the **Customise Layout** button at the top of the page and enable it.

## Add Multilevel Pricing to Products

> **Important:** Variation products require the multilevel pricing to be applied to the child products, not the parent products.

1. In your Neto control panel navigate to **Products > View All Products**.
2. Open the product you want to add multilevel pricing to.
3. Scroll down to **Multilevel Pricing** section (just after *Pricing & Tax*).
4. If you don't see the price groups, click on the **Show All** button.
5. Click on the **Add new band** under the price group you want to add the multi-level pricing.
6. Enter a minimum and maximum order quantity and then the price for this level.

> **Important:** A blank or 0 value in the maximum quantity field sets the amount to infinite. This should only be used on the highest quantity tier.

7. Repeat adding bands as needed.
8. You can now enter different pricing for each price group.

> **Note:** If you have the [Customer Groups](https://galaxy.maropost.com/kb/articles/693-customer-groups) turned on, you can click on the **Show All** button to display the other pricing groups.

9. Save changes.

## Import Multilevel Pricing

You can import multi-level pricing using the import system. Import the SKU of a product and the following string:

usergroup#:[min-qty]-[max-qty]=[price],usergroup#:[min-qty]-[max-qty]=[price],usergroup#:[min-qty]-[max-qty]=[price],

e.g.

1:0-6=12.00,1:6-15=13.00,1:15-20=10.00,

> **Note:** Each price break is comma separated.