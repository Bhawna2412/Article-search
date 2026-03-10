---
title: "Setup POS Stock Control"
articleID: 692
category: "Use Neto > Point of Sale (POS) > Use Point of Sale"
knowledgeBase: "Neto By Maropost"
---

# Setup POS Stock Control

## Why do we need Stock Control for Neto POS?

Without Stock Control, the Neto POS assumes an item added to a sale is available and does not verify stock levels. With Stock Control, the Neto POS can now check the order against live (available) stock at the register's location and alerts the operator if any item does not have sufficient stock for the sale to go through.

### []()**Before we Begin**

In this article, we will walk you through a collection of updates which will help you enable stock control practices for Neto POS. This feature is particularly useful for merchants who sell items through Neto POS that are not physically present in the location, meaning the customer does not bring them to the register.

### []()**How to enable Stock Control feature for Neto POS?**

1. [Login to your POS register.](https://galaxy.maropost.com/kb/articles/795-log-in-and-navigate-pos)
2. Go to **Settings.**
3. Click on the **Enable Stock Control** option to switch the toggle.![enable POS stock control](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240701051643.05TJ100000AvDj0MAF.png)

> **Important:** Please be aware that Neto POS disables Stock Control temporarily when Neto POS is offline. This is to ensure that Neto POS can continue to function in offline mode even when Stock Control is enabled, as the feature relies on a live connection.

### []()**View Available Stock for Each Item Within the Num-Pad**

Once products have been added to an active register's checkout page, the merchant can click on the individual quantity for each order line. This will open a small num-pad window adjacent to the checkout list where you can modify the quantity according to the **Current Available Quantity** shown as below.![current available quantity](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image5.05TJ100000AvHFHMA3.png)

### []()**Insufficient Stock Warning while Paying**

Once you select the **Pay Now** option on the checkout page, if not all order lines can be fulfilled due to insufficient stock, Neto POS will show an **Insufficient Stock Warning** dialog box. This allows you to review the order and modify order line quantities accordingly. The warning can be ignored by clicking on the **Ignore, proceed to payment **option, should the operator wish to proceed with the sale. Please note that selling more than the available quantity will not result in a backorder being created in the Control Panel. Instead it will result in negative available quantity for the concerned products.![insufficient stock warning](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image6.05TJ100000AvHGjMAN.png)

### []()**Highlighting the Order Line with a Red/Green Icon**

These icons appear in 2 scenarios:

- If the operator does a manual order line quantity change.
- If the operator has proceeded with the purchase by clicking on the **Pay Now** option.

The green icon indicates that there is **Sufficient Stock** to accommodate the order line request for the sale.![green icon highlighting sufficient stock](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image8.05TJ100000AvHQKMA3.png)

The red icon indicates that there is **Insufficient Stock** to accommodate the order line request for the sale.![red icon highlighting insufficient stock](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image7.05TJ100000AvHRDMA3.png)

Additionally, a grey icon indicates that stock has not been checked against live available quantity for that particular order line yet.

![grey icon for non verified quantity checks](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240731015116.05TJ100000AvYjGMAV.png)
These icons will help the operator understand visually which order line items' quantities need to be modified to go ahead with the sale.

> **Important:** In order to optimise operational speed, live stock will not be checked on each "add to cart" action, including adding from the product list, from search or from barcode scan.