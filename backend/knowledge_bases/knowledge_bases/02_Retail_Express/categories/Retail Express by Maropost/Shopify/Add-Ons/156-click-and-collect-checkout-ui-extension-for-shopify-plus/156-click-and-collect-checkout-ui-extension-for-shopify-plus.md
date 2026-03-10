---
title: "Click and Collect Checkout UI Extension for Shopify Plus"
articleID: 156
category: "Shopify > Add-Ons"
knowledgeBase: "Retail Express"
lastUpdated: 2025-11-27
---

# Click and Collect Checkout UI Extension for Shopify Plus

You can implement the **Retail Express** Click and Collect Checkout UI Extension for Shopify Plus stores to enhance your omnichannel customer experience by enabling pickup location selection during checkout. This advanced feature helps improve operational efficiency and customer satisfaction by allowing customers to choose from available store locations with real-time stock visibility, streamlining the click and collect process compared to standard Shopify plans.

Setting up the checkout UI extension involves configuring your Shopify store for checkout extensibility and customizing display options including stock availability, Google Maps integration, and location radius filtering. When properly configured, this extension typically leads to better customer convenience through integrated location selection, improved inventory transparency, and smoother omnichannel fulfillment across your retail operations.

> **Note:** The Retail Express Click and Collect Checkout UI Extension is only available for Shopify Plus stores. See Shopify Checkout UI extensions for more information

The Retail Express Click and Collect UI Extension for Shopify Plus stores is an extension for your Shopify storefront that supports selecting a pickup location (Retail Express Outlet) during the checkout process. While Retail Express Click and Collect is supported on all Shopify plans, for non-Plus stores, the location selection process takes place on the Cart page rather than during checkout.

## Configure Click and Collect Checkout Extension

- 
  In your Shopify store, go to Settings > Checkout
- 
  Your store must have been upgraded to support Checkout Extensibility

[Image: User-added image]
- 
  If your store has not been upgrade, please read the [Shopify migration guide](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fhelp.shopify.com%2Fen%2Fmanual%2Fcheckout-settings%2Fcheckout-extensibility%2Fcheckout-upgrade) first before continuing
- 
  Once your store has been upgraded, you will be able to customize the checkout by clicking on **Customize**
- 
  Select the Shipping step in the checkout editor

[Image: User-added image]
- 
  Click **Add app block**
- 
  Select **Click and Collect **by Retail Express

[Image: User-added image]

Configure the extension settings:

[Image: User-added image]

- Click **Save**

## **How the Checkout Extension will display**

When customers navigate to the Shipping step of the Shopify checkout they will select their preferred shipping method as usual:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image3.05TJ1000002QDJzMAO.jpg)
When the method that was configured in the extension settings as the Click and Collect shipping method (Picking up in-store in this example) is selected, a stock check will be made for each item in the cart for each location configured as a Click and Collect outlet in Retail Express.

When Google Maps is not being used, the full list of outlets is displayed including address and contact details as well as a stock status for each item in the cart:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image4.05TJ1000002QDK4MAO.jpg)
Any outlet that does not have stock available for all items in the cart will still be listed but cannot be selected in the list - for example, Queen St in the list above cannot be chose as a pickup location.

If Show Available Stock is set to True, actual stock levels are shown as per the example above. If Show Available Stock is set to False, a YES/NO indicator is displayed instead.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image5.05TJ1000002QDKJMA4.jpg)
If a Google Maps API Key was entered (also required in Retail Express BackOffice in Shopify Integration settings), a number of additional features are available:

- 
  a map will be shown at the top of the list of outlets
- 
  only outlets within 100km of the customers address (entered in checkout) will be listed
- 
  when customers select a pickup location, the map will centre on the address of that outlet

[Image: User-added image]

## Related Articles

**E-commerce Integration:**

- [Announcing Shopify Split Web Order Fulfilment](https://galaxy.maropost.com/kb/articles/article-1217-announcing-shopify-split-web-order-fulfilment) - Split order fulfillment across multiple store locations for efficient delivery
- [Announcing optimised Shopify Source and Fulfilment](https://galaxy.maropost.com/kb/articles/article-1218-announcing-optimised-shopify-source-and-fulfilment) - Optimize source and fulfillment location selection for web orders
- [Sending Shipping Tracking Numbers for Web Store Sales](https://galaxy.maropost.com/kb/articles/article-132-sending-shipping-tracking-numbers-for-web-store-sales) - Automatically send tracking information to online customers
- [Managing Refunds and Cancellations of Web Orders](https://galaxy.maropost.com/kb/articles/article-133-managing-refundscancellations-of-web-orders) - Process online order refunds and cancellations efficiently
- [Integrate with The Iconic and David Jones Marketplaces](https://galaxy.maropost.com/kb/articles/article-134-integrate-with-the-iconic-and-david-jones-marketplaces) - Connect with major Australian online marketplaces
- [Web Store Integration Setup](https://galaxy.maropost.com/kb/articles/article-131-web-store) - Configure your e-commerce platform integration