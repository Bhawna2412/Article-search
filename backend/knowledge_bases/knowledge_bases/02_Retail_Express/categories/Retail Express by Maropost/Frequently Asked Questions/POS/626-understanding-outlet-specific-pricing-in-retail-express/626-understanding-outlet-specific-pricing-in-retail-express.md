---
title: "Understanding Outlet Specific Pricing in Retail Express"
articleID: 626
category: "Frequently Asked Questions > POS"
knowledgeBase: "Retail Express"
---

# Understanding Outlet Specific Pricing in Retail Express

# Why is my product scanning at the wrong price?

The most common reason for this issue is an outlet-specific price. Retail Express is designed to support different buy and sell prices at different outlets. If a price has been set at a specific outlet this price will override the standard pricing in the main tab of the Product Edit window.

Products with an outlet-specific price will display a pink shading on the Pricing tab for the product in the Back Office.

![rtaImage - 2023-07-10T061448.277.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplAOEAY.jpg)

> **Note:** Buy Ex and Direct Cost Outlet Specific Pricing is designed to exist to cover for different costs between your diffrent outlets. For example one location may buy an item into stock via purchase order at a diffeferent invoice price to another. For this reason, outlet specific costs will appear different between those two locations.

Outlet specific buy price and direct cost should only be edited in case of resolving an accident or error. Uncessary editing of these values has accounting implications for integrated users and you run the risk of upsetting the true  average weighted cost of the item which the system calculated when received.

To remove the Outlet Specific price:

1. Go to the** Inventory Section**
2. **Select **Schedule Price Changes
3. Click **on the pencil icon for the Scheduled Price**
4. For Price to Change select **Outlet POS Price**
5. Select Outlets to remove the outlet specific price (You can select outlets by simply selecting them and moving them in the right side box by clicking the right arrow)
6. Under Adjustment Details select **'Clear Price'**
7. Click on Next at the bottom of the page
8. Select Save Changes

This will clear any outlet-specific POS pricing that exists for the product/s and outlet/s selected and revert to using Master POS pricing.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240131at22030PM.05T5g000018qEs1EAE.jpg)
A schedule price change can also be the reason to show the price differently.

To remove the Schedule Price Changes:

1. Go to the** Inventory Section**
2. **Select **Schedule Price Changes
3. Click **on the pencil icon for the Scheduled Price**
4. Tick the checkbox for '**Create Revert Job'**
5. The date/time the revert job will be scheduled for.
6. Click on Next and then Save Changes

> **Note:** You can view outlet-specific prices for all products by performing a Mass Download and clicking on the individual Outlet tabs. Refer to the Mass Download article for more information.