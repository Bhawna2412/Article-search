---
title: "Catch Overview"
articleID: 1119
category: "Neto by Maropost > Catch"
knowledgeBase: "Article Archive"
lastUpdated: 2025-12-01
---

# Catch Overview

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CatchOverview1.05T5g00000gPnA6EAK.png)
Catch (formerly Catch of the Day) is an online marketplace for retailers to sell alongside [fashion outlets](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.catch.com.au%2Fshop%2Foutlets%2F) and products supplied by Catch themselves.

Catch is one of Australia's fastest-growing online marketplaces. Connect your store to Catch to bring your products to the millions of loyal customers and club members that shop there each day.

### In this Article

- Maropost Commerce Cloud and Catch Integration
- Catch Offers
- Offer Price
- Catch Order Process
- Tracking Orders
- Variation Products
- Get Started

### Maropost Commerce Cloud and Catch Integration

Integrate your Catch account with Maropost Commerce to centralise the management of your offers and orders. With the Maropost Commerce Catch integration you can:

- List products from Maropost Commerce using Catch's catalogue information.
- Register new products in Catch's catalogue.
- Maintain your Catch offer's stock level and price in Maropost Commerce.
- Process Catch orders in Maropost Commerce using the same process as other sales channels.
- Manage Catch customers alongside customers from other sales channels.
- Upload tracking information to Catch, so customers can see when their order is dispatched.
- Updates in Maropost Commerce sync through every 15 mins.

### Catch Offers

When you sell on Catch, identical products are combined into one listing from all sellers. As a result, Maropost Commerce only requires your 'offer' information to list a product that already exists on Catch. Catch display one seller as the main 'offer' with other sellers less prominent on the page.

![CatchOverview2.05T5g00000gPnNgEAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CatchOverview2.05T5g00000gPnNgEAK.png)
Catch doesn't disclose what is required to be the most prominent seller on a page, but it is assumed to be a combination of:

- Price
- Stock availability
- Seller rating
- Shipping cost
- Delivery time

Be sure to keep an eye on your performance on your Catch account to see where offers can be tweaked to improve conversions.

### Offer Price

Listings on Catch will usually display two prices, the RRP and the selling price. When Maropost Commerce sends your product prices to Catch, it uses a combination of RRP, store price (Price A or the price group), and the Promo Price.

![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CatchOverview3.05T5g00000tuBwdEAE.png)
If the RRP is available on the product, it is sent to Catch as the *Don't Pay* price. The selling price will then be the lowest available (i.e. promo price if the promotion is active). If your only price is the store price it will be displayed on Catch by itself.

### Catch Order Process

Maropost Commerce will automatically pull new sales orders from Catch into your control panel. When they first appear these orders be 'On Hold' and will not have a customer address, which Catch runs a fraud check. The sales order is still created in Maropost Commerce so that stock for the order line(s) can be committed and prevent accidental overselling.

![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CatchOverview4.05T5g00000tuDNeEAM.png)
Once the fraud check is complete, the sales order will either be approved (and changed to the status you've set up) or cancelled (if the fraud check fails). If approved, the sales order can be [processed normally](https://galaxy.maropost.com/s/article/pick-pack-and-dispatch-a-sales-order).

For more information, please see [this help topic](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fhelp.catch.com.au%2Fhc%2Fen-us%2Farticles%2F115002293287-Why-is-my-order-on-hold-) on the Catch website.

### Tracking Orders

When sales orders are dispatched, the tracking number and carrier information is sent to Catch so that the customer is notified. Catch can only support one tracking number per order. If you ship a single order using multiple carriers, or from multiple warehouses, only one tracking number will be sent to Catch. We also do not recommend that you split or combine sales orders from Catch, as this may have the same effect. Carrier tracking needs to be set up at the end of the [Catch set-up process](https://galaxy.maropost.com/s/article/set-up-catch#8).

### Variation Products

Catch accepts variation products based on size, colour, or both size *and* colour together. The Catch integration can list size and/or colour variations that you set up in your [product field mapping](https://galaxy.maropost.com/s/article/set-up-catch-category-and-field-mapping#3) . Catch will only accept certain values for the product size or colour, so it's important to make sure your data complies. You can find the accepted values on the product field mapping page, by clicking the "i" tooltip for the variation fields.

If you list a variation product on Catch with both size *and* colour variants, they won't display together. Currently, Catch will split the different colour variants into separate products, with size variations within.

![b.png](https://catchmarketplace.zendesk.com/hc/article_attachments/360001111915/b.png)
If the product varies by size and colour (e.g. small, & large, blue & red), Maropost Commerce groups the images by colour, and uses them across all of the products for that colour. In effect, we make sure the blue products have the correct images for the blue variations, and the red products have images for the red variations.

We do this by picking one of the variations and using its images across the rest of the variants. This is because each variation's images in Maropost Commerce will have a unique URL, and we need to use the same image URLs across all the variations of the same colour.

Other product information, including the title, brand, image size chart, and description, all come from the parent product.

### Get Started

There are several steps that must be completed before connecting your Catch account to Maropost Commerce.

#### Sign up for a Catch Account

If you don't already have a Catch account, you will need to sign up for one [here](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fselloncatch.com%2Fneto). All new sellers go through an approval process, during which time Catch may contact you for more information about your business.

#### Reset Catch Product Mapping

If you already have a Catch account you need to remove any existing Catch mapping, as it is not compatible with the data Maropost Commerce uploads.

1. 
  Log in to your Catch account.
2. 
  Navigate to **Settings** > **Imports**.
3. 
  Scroll to the bottom of the page in the **Reset the Product Mapping Configuration** section and click the **Delete my configuration** and **Delete my value lists** buttons.

  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CatchOverview5.05T5g00000tuDPBEA2.png)

#### Set up Catch Shipping

Your shipping costs need to be set up and managed in Catch, they cannot be imported from Maropost Commerce. To set up your shipping costs in Catch, please consult the Catch marketplace [help documentation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fpartner.catch.com.au%2Fmarketplacehelp%2Fs%2F%3Farticle%3D000001480).

Each logistic class you create needs to be associated with your Maropost Commerce products so that the shipping costs are correct when listed.

> **Note:** Create a custom product field to record your Catch logistics class for each product.

#### Add Barcodes to Products

Catch requires barcodes on products to match them to their product catalogue. In Maropost Commerce, add the barcodes to the **UPC/EAN** fields so that they can be automatically identified and uploaded to Catch.

Alternatively, you can [create a custom product field](https://galaxy.maropost.com/s/article/add-and-manage-products#10) or [item specific](https://galaxy.maropost.com/s/article/add-specifics-or-filters-to-a-product) to store the product identifier and identifier type, and manually set up the product identifier field to use. You can then populate these fields using the [product import wizard](https://galaxy.maropost.com/s/article/product-import-wizard).

If your products do not have barcodes, you can still register products using the product SKU as the MPN on Catch. Maropost Commerce will automatically attempt to list products with your SKU if all of the UPC/EAN fields are empty (automatic detection) or the MPN is set up as the identifier and type (manual detection).

> **Warning:** Products with a barcode that has been generated in Maropost Commerce are not valid on Catch, and should not be used. Remove any automatically generated barcodes before integrating with Catch.

### Related Articles

- [Set up Catch](https://galaxy.maropost.com/s/article/set-up-catch)
- [Set up Catch Category and Field Mapping](https://galaxy.maropost.com/s/article/set-up-catch-category-and-field-mapping)
- [Approve Products to List on Catch](https://galaxy.maropost.com/s/article/approve-products-to-list-on-catch)