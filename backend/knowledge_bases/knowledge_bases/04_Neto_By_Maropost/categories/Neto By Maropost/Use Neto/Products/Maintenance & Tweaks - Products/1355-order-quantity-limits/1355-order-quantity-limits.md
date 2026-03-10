---
title: "Order Quantity Limits"
articleID: 1355
category: "Use Neto > Products > Maintenance & Tweaks - Products"
knowledgeBase: "Neto By Maropost"
---

# Order Quantity Limits

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OrderCustomFields1.05T5g00000jGEjMEAW.png)

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

## Overview

Order limits fields will be added to the **Pricing & Tax** section of each product in the control panel:

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OrderQuantityLimits2.05T5g00000jG9HEEA0.jpg)
You can set the minimum and maximum number of this product that the customer can purchase in a single order. Customers won't be able to checkout with a quantity outside of the amounts your specify in a single order.

You can also sell the product in bundles by entering a figure under **Multi**. Customers will only be able to order in multiples of that number.

If you want customers to only order in bundles over a certain initial quantity, enter that amount into the **Start Multi **field. They will still be able to buy any number of the product under the **Start Multi** figure. However, when ordering over that amount the quantity order will need to be in multiples of the figure in the **Multi** field.

## Install the Order Quantity Limits Add-on

To install the add-on:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the order management section, find the **Order Quantity Limits** add-on and click the **Install** button.
3. Confirm by clicking the **Install** button in the pop-up that appears.

Once installed the min, max, mult and start mult fields will appear on all products in your control panel.

## Sell in Multiples, Lots or Batches

To sell products in lots (e.g. 12 to a case):

1. In your Neto control panel navigate to **Products** > **View Products**.
2. Click on the product you wish to edit.
3. Click the **Pricing & Tax** tab. In this section you will see a field labelled **Mult**. This is where you define your multiplier quantity.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OrderQuantityLimits3.05T5g00000jGEjgEAG.png)

  It's also possible to define a multiplier quantity for a product based on user group, click on the "Show all" button to reveal the fields for all user groups in the system. This requires the [Customer Groups](https://galaxy.maropost.com/kb/articles/693-customer-groups) add-on.

## Add Order Limits Per Product

You can limit how much a customer can buy in a single order, on a product by product basis. Order limits can be added individually or in bulk:

### Individually

1. In your Neto control panel navigate to **Products** > **View Products**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OrderQuantityLimits4.05T5g00000jGCr6EAG.png)
2. Select a product by clicking the **SKU**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OrderQuantityLimits5.05T5g00000jGEkoEAG.png)
3. In the **Pricing & Tax** section you will find **Min** and **Max** fields, which is where you enter your minimum or maximum quantities for the product.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OrderQuantityLimits6.05T5g00000jGDbYEAW.png)

  Min/max quantities can also vary depending on the user group. To define these, click on the **Show All** button to reveal the fields for all user groups.

### In Bulk

Order limits can be added to products in bulk by using the [Complex Import Wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard#complex-import), and the field **Min Order Qty List (User Group)**. The format for this import field looks like this:

`user_group:min_qty;multiplier_qty;max_qty,`

In the example below, customer group A can purchase a minimum of 5, in multiples of 5, up to a maximum of 25, while customer group B can purchase a minimum of 10, in multiples of 5, up to a maximum of 50.

`1:5;5;25,2:10;5;50,`