---
title: "Breaking Down Bulk Purchase Products for Sale"
articleID: 368
category: "Purchase and Receiving > Purchasing Products"
knowledgeBase: "Retail Express"
---

# Breaking Down Bulk Purchase Products for Sale

You can break down bulk-purchased products into individual sale units, helping manage inventory for items bought wholesale but sold individually. This improves your retail operations by providing accurate unit-level tracking and pricing, with properly configured bulk breakdown workflows typically enabling better cost allocation and inventory accuracy for wholesale-to-retail conversions.

Understanding bulk product breakdown involves recognizing parent-child product relationships, unit cost calculations, and inventory conversion processes to help retail operators focus on the right wholesale management workflows, ensuring your retail strategy consistently drives better inventory accuracy and pricing management outcomes.

Breaking down bulk purchase products into smaller units for individual sale is a common requirement in retail. This article provides step-by-step guidance on configuring your inventory and managing product quantities to ensure accurate stock levels and seamless sales processes.

Do you have products where you purchase from your supplier in a bulk quantity and then sell individual units or pack quantities?

### Here are some examples :

- You purchase a 500m roll of cable and sell in 1m, 5m and 10m lengths ?
- You purchase a carton quantity of 144 units and sell in six-packs as well as individual products.
- You purchase 100kg bag of bird seed and sell in 1kg and 10kg bags?

In each case you can use the following method to handle the requirements of your Supplier, your Customers and your Inventory Control. Let's use the first example, where we purchase computer network cable in 500m rolls and sell in 1m, 10m and 50m lengths.

***The key element is to make a separate product for each quantity break-down and to have them readily selectable in the sales process.***

Here's the product we purchase, let's call it the base product :

SupplierSKU2 = CABLE1234 - The part number you quote to your supplier for purchasing

SupplierSKU = 930546548315

Description = 500m Roll of Cat5 Network Cable model Cable1234

BuypriceEx = 270.54

POSPrice = 975.00

Now to sell in 1m, 5m, and 10m lengths, we need a products for each one. Here's an example of how to configure those break-down quantity products.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| SupplierSKU2 | SupplierSKU | ShortDescription | Size | BuyPriceEx | POSPrice |
| CABLE1234 | 930546548315 | 500m Roll of Cat5 Network Cable   model Cable1234 | 500m | $270.54 | $975.00 |
| CABLE1234 | CABLE1234-1M | 1M Length of Cat5 Network Cable   model Cable1234 | 1m | $0.54 | $3.95 |
| CABLE1234 | CABLE1234-5M | 5M Length of Cat5 Network Cable   model Cable1234 | 5m | $2.71 | $12.95 |
| CABLE1234 | CABLE1234-10M | 10M Length of Cat5 Network Cable model Cable1234 | 10m | $5.42 | $24.95 |

## **Selling the Products**

Note that they are all given the same ManufacturerSKU. This is a key element, so when you sell the cable at the POS, you enter that code and the system will respond with a

list of matching products for you to select from. **So from a Customer perspective you can now sell them a 500m, 10m, 5m or 1m length of cable.**

## **Purchasing the Products and Receiving the Stock in.**

When you create a purchase order for you supplier, just order the base product which is what you supplier expects. Lets say we are ordering 5 x 500m rolls Then email/send the order to your supplier. **So from a Supplier perspective everything is normal.**

Now at this point you can decide how you are going to break down the goods when you receive them. This will of course require the products to be actually broken down when they arrive from the supplier. If you are going to keep 4 rolls intact and break down 1 roll into the smaller lengths, add the other products now into that same purchase order. Remember, your supplier will not see this, you have already sent them the order for 5 rolls.

Reduce the base product order quantity from 5 to 4. Then decide how many of each item you will make from the roll and add that quantity to each break-down product and change the purchase order quantities accordingly.

Here's how that will look in the purchase order.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/breakdown1.05T5g00000mD9Z4EAK.JPG)
This now means that when you receive the invoice and process the goods being received, your invoice totals will still match but you stock will be correct for the breakdown of the items. **So from an Inventory Control perspective, the correct amount of stock and stock value is received.**

## Manually adjusting Inventory.

You can break down your base product at any time using the Stock Adjustment feature. Using this method, you can adjust your base product inventory down by 1 unit and then adjust the break-down product(s) up by the amount that you are creating from the 500m roll.