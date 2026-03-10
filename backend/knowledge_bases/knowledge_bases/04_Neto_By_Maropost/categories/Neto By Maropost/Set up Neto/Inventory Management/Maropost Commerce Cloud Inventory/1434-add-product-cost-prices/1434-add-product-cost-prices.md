---
title: "Add Product Cost Prices"
articleID: 1434
category: "Set up Neto > Inventory Management > Maropost Commerce Cloud Inventory"
knowledgeBase: "Neto By Maropost"
---

# Add Product Cost Prices

Neto comes with a basic cost price field which you can use to work out your profit margins. If you're looking for an advanced cost price calculator (to work out average cost of goods, supplier costs, etc), then we highly recommend using the Neto Commerce Inventory add-on. If you use the Neto Commerce Inventory add-on, you will want to do your best to clean up your products as you will not be able to delete them once inventory is turned on (to ensure data integrity), however you will still be able to mark them as inactive.

The cost price on your products, will be used as your Initial stock adjustment cost price, and will impact your reporting as to the total value of your stock on hand.

> **Important:** Neto Commerce Inventory does not allow you to adjust cost price manually. Cost price will update when you receive purchase orders or perform a stock adjustment.

## Add Cost Price on an Individual Product

1. In your Neto control panel navigate to **Products** > **View products** and click on the SKU you wish to change.
2. In the Pricing & Tax find to find the field called **Cost Price (Excl Tax)**. Enter your cost price into this field.
3. Click the **Save Changes** button.

> **Important:** For kitted products we recommend setting the cost price on the individual components only and not on the parent level.

## Find Products Without a Cost Price

To help identify products that currently have a $0 cost price you can use the filters on the product page:

1. In your Neto control panel navigate to **Products** > **View products**.
2. In the search filter, click the **Show Advanced filters** button to expand the search functionality.
3. In the **Unit Cost From $** and **To $** fields, enter `$0` and click the **Apply** button on the search filter.
4. In the columns filter section, click **Edit** mode and click **Columns** to include **Cost Price**. Set a cost price for each product and click **Save Changes** at the bottom.
5. Alternatively, you can go into each product and manually apply cost prices or you can export this list by clicking the **Export** button on the top right hand side to download and populate in an Excel CSV file. Once finished, you can upload this list back into Neto by using the [Data Import Wizard](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#brand).