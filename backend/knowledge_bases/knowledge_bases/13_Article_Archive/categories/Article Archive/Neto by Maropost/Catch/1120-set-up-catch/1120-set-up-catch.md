---
title: "Set up Catch"
articleID: 1120
category: "Neto by Maropost > Catch"
knowledgeBase: "Article Archive"
lastUpdated: 2025-12-01
---

# Set up Catch

> **Note:** Check out our Catch overview and getting started guide to learn how Catch works and get you off on the right foot.

### In this Article

- Install Catch
- Link your Catch Account
- Offer Management
- Product Pricing
- Stock
- Shipping
- Review
- Carrier Mapping

### Install Catch

To install Catch in your Maropost Commerce Cloud control panel:

1. 
  In your Maropost Commerce control panel click on **Catch** from the side menu.
2. 
  Click the **Set up Catch** button.
3. 
  Select the checkbox to agree to a subscription upgrade if you have no sales channels available, and click the **Next Step** button.

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch1.05T5g00000tuD5fEAE.png)

### Link your Catch Account

You now need to add your Catch account API key so that Maropost Commerce can connect to it. To find your API key:

1. 
  Log in to your Catch account. If you don't have a Catch account sign up here.
2. 
  Click on your email address / username in the top right corner of the page.
3. 
  Click **API Key** (under My User Settings).
4. 
  Click the **Generate a New Key** button.

  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch2.05T5g00000tuD72EAE.png)
5. 
  Copy the API key that appears, and paste it into the **API Key** field in Maropost Commerce. Then click the **Next Step** button.

  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch3.05T5g00000tuD6VEAU.png)

### Offer Management

Offer management determines how your products on Catch are controlled. The set your offer management:

1. 
  Select the radio button that indicates how you want to manage your offers, in Maropost Commerce or in Catch. If you select Catch, no products or stock levels will update from Maropost Commerce, the integration will only manage sales orders.
2. 
  Select the **Allow Maropost Commerce to round product fields** toggle to ensure weight, length, width and height fields meet Catch's requirements.
3. 
  Select if you want barcodes automatically detected, or if you want to define them manually. Automatic detection looks at the UPC/EAN fields on the product to determine what type they are. If you choose manual you will need to map the product field and barcode type in the [Catch product field mapping](https://galaxy.maropost.com/s/article/set-up-catch-category-and-field-mapping#3).

  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch4.05T5g00000tuD93EAE.png)
4. 
  Click the **Next Step** button.

### Product Pricing

In this step you set up the product prices you want displayed on Catch, and can enable promotion prices. To set your product pricing:

1. 
  Select the radio button to choose if product prices are sent from Maropost Commerce or not. If you choose to not provide prices from Maropost Commerce, you will need to update prices in Catch.
2. 
  If prices are updated from Maropost Commerce, you can select a specific [customer group](https://galaxy.maropost.com/s/article/customer-groups) for the prices.
3. 
  If you select a customer group other than the default, you can choose what happens if products don't have a price for that group. Select either **Use the price from my default customer group** or **Do not provide a pricing value**.
4. 
  Toggle the **Enable promotion pricing** setting if you want Catch to receive promotion prices.

  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch5.05T5g00000tuD7SEAU.png)
5. 
  Click the **Next Step** button.

### Stock

In this step you can set up how much stock (inventory) is uploaded to Catch, and how it is managed. To set your stock settings:

1. 
  Select the radio button to choose if stock levels are sent from Maropost Commerce or not. If you choose to not provide stock from Maropost Commerce, you will need to update stock levels in Catch.
2. 
  If stock is managed from Maropost Commerce, you can choose to list all stock, or set a maximum amount to list for each product.
3. 
  The **Stock level buffer** will help prevent overselling by hiding an amount of stock from Catch for other sales channels. Set a buffer amount (optional) and click the **Next Step** button.

  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch6.05T5g00000tuD6yEAE.png)

### Shipping

To set your shipping settings:

1. 
  In the shipping step, select a [shipping option](https://galaxy.maropost.com/s/article/Shipping-Carriers-and-Features) in Maropost Commerce to appear on Catch sales orders automatically.
2. 
  Set a default **Lead time to ship** your sales orders. You can override this value on products that may have a longer handling time. Then click the **Next Step** button.

> **Note:** Catch only supports one tracking number per order, so we don't recommend that you split or combine Catch orders.

  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch7.05T5g00000tuAmXEAU.png)

### Review

Review all the settings for your Catch integration to ensure it is set up to your satisfaction. Click the **Complete Catch setup** button and your integration with Catch will be enabled.

![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch8.05T5g00000tuDEDEA2.png)

### Carrier Mapping

We strongly recommend that you set up carrier mapping before moving on to product field and category mapping. Carrier mapping tells Catch which shipping carrier an order has been sent with, so that they correct tracking details are given to your customer. To set up carrier mapping:

1. 
  In your Maropost Commerce control panel navigate to **Shipping** > **Shipping Options**.
2. 
  Locate a shipping option which will be used for Catch orders, and click on the link under the **Service/Rates** column.
3. 
  In the **Marketplace carrier mapping** section, select your Catch shipping carrier from the drop down menu. If your carrier is not in the list, select **Other** and type the name of the carrier in exactly.

  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupCatch9.05T5g00000tuCtQEAU.png)
4. 
  Click the **Save & Close** button. Repeat these steps for any other shipping options you use to dispatch Catch orders.

Your control panel is now connected to Catch and set up to sync data. We recommend that you set up [Catch category and field mapping](https://galaxy.maropost.com/s/article/set-up-catch-category-and-field-mapping) before [approving products to list on Catch](https://galaxy.maropost.com/s/article/approve-products-to-list-on-catch).

### Related Articles

- [Catch Overview](https://galaxy.maropost.com/s/article/catch-overview)
- [Set up Catch Category and Field Mapping](https://galaxy.maropost.com/s/article/set-up-catch-category-and-field-mapping)
- [Approve Products to List on Catch](https://galaxy.maropost.com/s/article/approve-products-to-list-on-catch)