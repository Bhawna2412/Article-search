---
title: "Add Products in Neto from eBay Listings"
articleID: 1076
category: "Ways to Sell on Neto > eBay > Launch eBay Sell"
knowledgeBase: "Neto By Maropost"
---

# Add Products in Neto from eBay Listings

Neto has 2 methods to add products from your eBay listings. The eBay data migration tool allows you to quickly populate a new Neto account with product information from an existing eBay account. Otherwise, products can be added individually by looking up the eBay listing ID. The data transferred from eBay includes:

- Title
- Description
- Images
- Sell price
- Stock level
- Dimensions (height, length, width, weight)
- Store categories
- Item specifics (UPC, MPN, etc)
- Custom label (SKU)

Products are created in Neto with the custom label as the product SKU. Items with identical custom labels can be automatically assigned a unique SKU, so that a separate product is created.

> **Warning:** The data migration tool is best used for initial setup, not as a way to continually sync eBay data to Neto. Some of the risks of continually using this migration tool include:
> 
> Permanently replacing / removing existing imagesOverriding product data (descriptions, prices, etc)

## Add Individual Products

Individual products are added by using the eBay listing ID. To add a product in Neto from an eBay listing individually:

1. In your Neto control panel navigate to **Products** > **Add a product**.
2. Select the **Import from an existing eBay listing** option.
3. Enter the eBay listing ID into the **Import from this eBay listing** field that appears.
4. Check the initial information that will be populated, and make any changes (e.g. approve for sales channels, set to active, change inventory policy to track stock levels).
5. Click the **Continue setup** button and your product will be created.
  **Please Note**: Images may take up to 10 minutes to download.

## Use the Migration Tool

If you intend to use your active eBay listings to populate your Neto control panel you can use the eBay data migration tool.

1. In your Neto control panel, navigate to **eBay** > **Setup & Tools**.
2. Click the **Store Manager** to see all eBay accounts linked to Neto.

> **Note:** If your account is not listed, you can link it using the setup wizard, which also takes you through the migration tool.

3. Click on the store name that contains the listings you want downloaded.
4. Scroll down to the eBay data migration section. Set the options as follows:
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddProductsinMaropostCommerceCloudfromeBayListings1.05T5g00000v5N6HEAU.png)
5. Click the **Start Now** button.

You will see several success messages saying that SKUs have been generated, products imported, and categories imported. There will also be a link to an image download process. Click on it to monitor the process and confirm it is no longer in the **Running** status before moving on to the next step. This may take from 15 minutes to several hours, depending on the number of listings and images.

## Import Item Specifics

Item specifics such as UPC, brand or MPN require some extra steps to import into Neto.

1. In your Neto control panel navigate to **Settings & Tools** > **All Settings and Tools**.
2. Search for **Advanced Configuration** and click on it in the results.
3. In the **Name** field, search for `EBAY_GETITEM_RETURN_ALL_DETAIL`.
4. Click on the configuration to edit it, and change it to **Yes**. Click the **Save** button.

> **Important:** This setting can severely affect the speed of the eBay integration. Once you've completed this process it needs to be turned off, so keep this tab open.

5. You're now ready to run the eBay data migration tool again. Follow the same steps previously to get to the migration settings, and set them as follows:
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddProductsinMaropostCommerceCloudfromeBayListings2.05T5g00000v5Mo5EAE.png)
6. Click the **Start Now** button.
  Again, you'll see the success messages saying SKUs have been generated and all products have been imported. Another process will also be running which downloads the item specifics.
7. Navigate to **eBay** > **View Processes**.
8. Filter the results by adding `GetListing` to the **eBay Module** field and find the most recent task.
9. Once its status has updated to **Success** you can turn off the **EBAY_GETITEM_RETURN_ALL_DETAIL** advanced configuration.

Your products created from eBay listings will now have their item specifics populated in the UPC, supplier item code, and brand fields.