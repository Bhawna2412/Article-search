---
title: "Manage eBay Quantity and Stock Levels"
articleID: 1091
category: "Ways to Sell on Neto > eBay > Troubleshooting"
knowledgeBase: "Neto By Maropost"
---

# Manage eBay Quantity and Stock Levels

## Troubleshoot Quantity and Stock Level Issues

If your stock levels are not updating correctly, follow these steps to troubleshoot the issue:

- [Revise the Listing](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#1)
- [Confirm the Listing is using a Rules Template](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#2)
- [Check the Listing Settings](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#3)
- [Check your Stock Control Settings](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#4)
- [Check the Stock Levels of your Product](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#5)
- [Multiple Listings](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#6)
- [Stock Levels Inaccurate and/or Showing Negative Values](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#7)
- [Stock Lower on eBay than Neto](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#)

### Revise the Listing

Firstly, [revise your listing](https://galaxy.maropost.com/kb/articles/1082-revise-active-ebay-listings) to confirm it updates successfully. Many stock level issues are because the listing cannot be revised, and eBay returns an error. If the revision fails please consult our [common errors guide](https://galaxy.maropost.com/kb/articles/690-troubleshoot-ebay-error-codes) for further help.

If revising the listing fixes the issue, check the automatic revision settings under **eBay** > **Setup & Tools** > **Settings** > **Enable manual eBay listing revision**. If this setting is on, turn it off.

### Confirm the Listing is using a Rules Template

For stock levels to sync with eBay correctly you must have a listing rules template assigned to the listing.

1. Open the product, and select **List to eBay** from the side menu.
2. Confirm that the **Active eBay Listing** has a rules template assigned.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels1.05T5g00000v3wzHEAQ.png)
3. If there is no template assigned, click the red **Listing ID** and assign a template on the **Listing Designer** tab, then **Save & Revise**. If there are many listings without a rules template, you can also [assign templates in bulk](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay).

### Check the Listing Settings

If your listing has a rules template assigned, it may not be updating stock levels if it isn't set to load data:

1. Click the red **List ID** to be taken to the listing information.
2. Select the **Listing Designer** tab, and confirm that **Load Data From eBay Listing Template** is checked.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels2.05T5g00000v42uAEAQ.png)
3. If it isn't select, check this box (and the two below it if required) and **Save & Revise**. If your stock isn't synced, proceed to the next step.

> **Note:** If you believe there may be other listings without these boxes checked, follow the steps below.
> 
> In your Neto control panel navigate to the **eBay** > **Active Listings** menu.
> 
> Expand the filters, and set the **Load data from eBay template** setting to **No**.
> ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels3.05T5g00000v42VDEAY.png)
> 
> The listings without the load data checkbox selected will display.

### Check your Stock Control Settings

Your listing rules template contains settings to control how many units get listed to eBay. While you're still on the **Listing Designer** tab

1. Click on the link to your **Rules Template** to open it in a new browser tab.
2. Select the **Categorisation & Listing Rules** tab and scroll down to **Stock Control**.
3. Ensure you have more than 1 or more set for **Maximum Quantity to List** and also check to see if **Automatically Maintain Stock Levels** is checked.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels4.05T5g00000v43buEAA.png)
4. Correct these fields and select **Save Template & Revise Active Listings**. If your listings stock is not updated, take note of any **Stock Buffer** value that is configured for the next step.

### Check the Stock Levels of your Product

1. Open the product where stock level isn't matching eBay, and select **Stock Control** from the left side menu.
2. Check that the **Qty On Hand** is higher than the **Stock Buffer**, and that the **Inventory Policy** is set to **Track Inventory For This SKU**.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels5.05T5g00000v43dbEAA.png)
3. If your policy is set to **Do Not Track** it tells the system that you have an unlimited supply of stock, and the **Maximum Quantity to List** value will be used as the stock level on eBay.

### Multiple Listings

If you have multiple listings for a single product, your entire stock may be assigned to a single listing. Stock is assigned to one listing first, then any remaining stock can be assigned to the second listing. To prevent overselling, stock levels need to be split between listings, you cannot list more than what you are holding. For example, if you have 5 in stock of a product, 3 can be listed on one listing, and 2 on another.

**Please Note**: This can also apply to variation listings. If the child product is listed separately to the parent, the stock level needs to be split between the two listings.

To correct this, follow the steps below on how to [distribute stock between listings](https://galaxy.maropost.com/kb/articles/1091-manage-ebay-quantity-and-stock-levels#distribute-stock).

## Stock Levels Inaccurate and/or Showing Negative Values

You may need to perform a stocktake and recalculate your stock so values are applied correctly, particularly if you see a negative value in your stock levels.

Follow the simple steps in our guide on how to [recalculate stock levels](https://galaxy.maropost.com/kb/articles/1549-product-stock-level-quantity-management).

### Stock Lower on eBay than Neto

Most issues with stock control involve the stock level being higher on eBay than Neto, which can cause products to be oversold.

Should the situation be reversed, and the stock on eBay is lower than that on Neto, it is usually due to the restock settings in Neto.

1. Navigate to **eBay** > **Setup & Tools** and select **Settings**.
2. Under **Listing Settings** check the restock levels configured.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels6.05T5g00000v43eeEAA.png)
3. If the stock level on eBay hasn't reached either of the restock levels the listing won't be automatically updated. You can either change these settings or wait for the stock level to go below the configured values.

If you're still having problems after consulting this guide, please contact our support team for further analysis.

## Good till Cancelled

All Good till Cancelled (GTC) listings are renewed by eBay automatically every 30 days, so they never go offline. Neto does not control this function, it occurs entirely on eBay's end. Listings can even stay active when there is no stock, for up to 3 months. During this time they can't be purchased, but will retain their sales history in case you re-stock the product.

> **Note:** Your eBay account must be [subscribed to a store](https://sellercentre.ebay.com.au/content/set-your-selling-account) in able to list with the GTC duration.

## Out of Stock Listings

Setting an active eBay listing to out of stock will remove the **Buy it Now** button, hide it from searches (but retain your search ranking), and keep the sales history for up to 3 months. If you fail to restock within this time, the listing will be removed by eBay. To enable out of stock listings:

1. In your Neto control panel navigate to **eBay** > **Setup & Tools**.
2. Click on **Store Manager**.
3. Check that **Out Of Stock Control** says **Yes**. If not click your eBay account name and toggle the setting.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels7.05T5g00000v43iHEAQ.png)

Any listings that sell out will automatically show as **Out Of Stock**. To make a listing with stock show as **Out Of Stock** even when it is in stock:

1. In your Neto control panel navigate to **eBay** > **Listing Rule Templates**.
2. **Clone** an active template that is configured for the product type (standard/variations) with the button on the right hand side.
  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels8.05T5g00000v43jyEAA.png)
3. Change the **Template Name** so that you can easily identify that it is for out of stock listings.
4. Select the **Categorisation & Listing Rules** tab and scroll to the bottom of the page. Set the **Maximum Quantity to List** to 0, then **Save Template**.
  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels9.05T5g00000v43mEEAQ.png)

When this template is used Neto will only ever list a quantity of 0, so each listing will show up as out of stock. To set existing listings so that they use this template, please follow the steps to [assign templates to active listings](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay).

## Distribute Stock Between Listings

To ensure products are not oversold on your sales channels, Neto allocates stock to your eBay listings. For example, if you have 3 listings on a product, and 50 stock of an item, the total amount listed across the 3 listings on eBay won't exceed 50. This can only be overwritten by turning off stock control.

If all stock is assigned to one listing, other listings goes out of stock like in the example below.

![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels10.05T5g00000v41WbEAI.png)
Keep in mind the first listing to revise or be listed will always take priority for utilising any stock not yet assigned to a listing. To manage the stock levels evenly, go into your listing rules template. On the **Categorisation & Listing Rules** tab. Scroll down to the stock control section.

![image11](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels11.05T5g00000v43pSEAQ.png)
Adjust the **Maximum Quantity to List*** to a lower amount, then save and revise all your listings for the product. This quantity will be the maximum amount of stock to allocate to a single listing, which allows the remaining stock to be allocated to other listings.

## 3rd Party Stock Management

If you use a 3rd party stock management tool for eBay, you need to turn off stock management. Otherwise, Neto will override stock levels on your listings. To turn off stock management for eBay:

1. Open your rules templates and click on the **Categorisation & Listing Rules** tab.
2. Select the **Automatically Maintain Stock Levels** checkbox. This will ensure that if you have products out of stock, that it will not put them back into stock.
3. Change the **Turn on Stock Control** drop down menu to **No - Ignore qty in stock, list qty specified above**.
  **Please Note**: what you specify in the **Maximum QTY to List **is what will be listed when you create a new listing.

  ![image12](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels12.05T5g00000v43rJEAQ.jpg)
4. Navigate to the **eBay** > **Setup** > **Settings** menu.
5. Scroll down to the eBay Listing Settings. Change the **Restock eBay fixed listings at "x" QTY** setting to **0**. Do the same with the **Restock eBay listings at "x" qty %**. This will stop the listings to go back up to QTY entered in the **Maximum QTY to List**.
  ![image13](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ManageeBayQuantityandStockLevels13.05T5g00000v43HcEAI.jpg)