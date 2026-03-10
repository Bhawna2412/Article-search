---
title: "eBay Product Based Shopping Experience"
articleID: 1080
category: "Ways to Sell on Neto > eBay > List your Products"
knowledgeBase: "Neto By Maropost"
---

# eBay Product Based Shopping Experience

One of eBay's newest features is a way to assist buyers find products quicker and easier by enhancing listings in search results. The product-based shopping experience matches seller listings to a catalogue, grouping the same items from all sellers based on the eBay Product ID (ePID).

Listings show all of the products available from every seller for the items in the catalogue, including new, refurbished, auctions and more. The top slot for an item is ranked based on factors such as price, inventory, delivery experience, seller standards and return options.

## Product lines affected

Initially, eBay required an identifier on all of the products listed below:

- Apple TV
- Apple iPhone (All Models/Generations)
- Apple iPad (All Models/Generations)
- Amazon Fire Stick
- Amazon Echo
- Dyson AM Cooling Fan
- Dyson AM Humidifier
- Dyson AM Fan Heater
- Dyson Pure
- Google Chromecast
- Google Home

As of September 24th, listings in the following categories also need to comply:

- Portable Fans
- Space Heaters
- Air Purifiers
- Audio Docks & Mini Speakers
- Programmable Thermostats
- Media Streamers
- Smart Speakers

If you list or plan to list any of the products in this list, you must include the appropriate GTIN (this includes new, used, and refurbished items). Any listings not meeting these standards will not appear in eBay search results.

## Update products to include a GTIN or ePID

Neto can try and match your products to the catalogue automatically with a GTIN (UPC, EAN or ISBN). Products that can't be matched to an ePID automatically by Neto can be assigned an ePID manually with our lookup tool.

> Important: ePIDs cannot be read automatically from any other (including custom) fields. If you have stored the barcode in a different field, use the export & import wizards to populate one of the UPC fields.

To add a GTIN to a product:

1. In your Neto control panel navigate to **Products** > **Active**.
2. Locate one of the product lines to update and click on the SKU to edit it.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayProductBasedShoppingExperience1.05T5g00000v5KmjEAE.png)
3. Select **Warehouse & Picking** from the product menu and enter the GTIN into one of the **UPC/EAN** fields.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayProductBasedShoppingExperience2.05T5g00000v5KzdEAE.png)

> **Note:** Use the same field for each GTIN type (e.g. UPC/EAN for the UPC, UPC/EAN1 for the EAN, UPC/EAN2 for the ISBN) to make management of your products easier.

4. Click **Save**, and repeat these steps for all products that require a GTIN.

> Tip: Products can also be updated in bulk by using the export & import wizards.

## Generate eBay Authorisation Token

To take advantage of the product-based shopping functionality, you must first authorise Neto's access by generating an authorisation token. This is much like the process used to connect your eBay account to Neto. You'll find instructions on how to generate the authorisation token in [this article topic](https://galaxy.maropost.com/kb/articles/1087-manage-your-ebay-integration#3).

## Map ePIDs on Listing Rules Templates

To send the ePIDs on your products through to eBay they must be mapped on your listing rules templates. To map the ePID fields:

1. In your Neto control panel navigate to **eBay** > **Listing rules templates**.
2. Click the ID of the template that needs the ePID field mapped to open the edit page.
3. Click on the field mapping tab.
4. Find the eBay Global Reference ID eBay field. Ensure **Column Name** is selected in the top drop down menu.
5. Underneath column name, select the ePID field which corresponds to the eBay site of your listing rules template. For example, if you're listing products on eBay Australia, choose **ePID for eBay Australia**.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayProductBasedShoppingExperience3.05T5g00000v5KkjEAE.png)
6. Click the **Save template** button.

Repeat these steps for each active listing rules template.

## Match ePIDs manually

Products that match multiple ePIDs need extra scrutiny before they can be assigned. To match products to ePIDs manually:

1. In your Neto control panel navigate to **eBay** > **eBay Product-Based Shopping**.
2. Change the **ePID** filter to **Not Assigned** and click **Apply** to see a list of all products that don't have an ePID.
3. Click the **Search** link next to one you want to assign an ePID to, and you'll be taken to a page with all of the eBay catalogue items that match your product GTIN.
4. Review the options carefully before selecting which one matches to your product. Click the **Select ePID** button on the one you want to apply.

> **Note:** If you can’t find an item in the catalogue to match your product, you can request that eBay create one.

5. Repeat these steps for each product without an ePID that you want to list on eBay.

#### Exclude products from catalogue information

If you don't want products to use the information in the eBay catalogue, you can exclude them individually. Please contact the Neto customer support team to enable this feature.

Your products can now be matched to eBay's catalogue, meeting the requirements for the product-based shopping experience.