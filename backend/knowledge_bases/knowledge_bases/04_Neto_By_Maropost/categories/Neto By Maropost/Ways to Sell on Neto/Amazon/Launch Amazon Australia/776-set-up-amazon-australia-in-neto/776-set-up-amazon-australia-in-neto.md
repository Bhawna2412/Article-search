---
title: "Set up Amazon Australia in Neto"
articleID: 776
category: "Ways to Sell on Neto > Amazon > Launch Amazon Australia"
knowledgeBase: "Neto By Maropost"
---

# Set up Amazon Australia in Neto

> **Note:** Learn more about the Neto Amazon integration by reading the [Amazon Australia Getting Started](https://galaxy.maropost.com/kb/articles/777-introduction-to-amazon-australia) guide before completing the setup process.

## Register for an Amazon Australia Account

> **Important:** [Individual selling plans](https://sellercentral.amazon.com/gp/help/external/help.html?itemID=200399460&language=en_US&ref=efph_200399460_cont_181) cannot be linked to Neto as they cannot access Amazon's API. Only Professional selling plans can be linked.

To register as an Amazon seller you need to verify your identity. We recommend gathering the required information before you start. Amazon require:

- An identity document: your passport, driver's license, or national ID.
- A bank account or credit card statement.
- A business license.
- Proof of address: a water, electricity, gas or internet bill.

With this information you can [register for an Amazon Australia seller account](https://sell.amazon.com.au/) and complete the identity verification process.

## Install Amazon Australia

Amazon Australia is a separate sales channel, and may incur an upgrade to your monthly subscription costs. To install the Amazon sales channel:

1. In your Neto control panel click the **Amazon Australia** button.
2. Ensure you read the information outlined in the **Before you get started...** section (you will need to scroll down the page).
3. Click the **Start Amazon Australia setup** button.
4. Check the **If I have no spare sales channels left as part of my subscription, I agree to the subscription cost** box.
5. Click the **Next Step** button.

> **Note:** If you wish to cancel the Amazon Australia integration in Neto, uninstall the add-on.

## Link an Amazon Australia Seller Account

**Please Note**: If you have several Seller Central accounts, we recommend that you are logged out of Seller Central before initiating the authentication process.
To link your Amazon Australia account you will need to retrieve some information for Neto to gain access.

> **Important:** [Individual selling plans](https://sellercentral.amazon.com/gp/help/external/help.html?itemID=200399460&language=en_US&ref=efph_200399460_cont_181) cannot be linked to Neto as they cannot access Amazon's API. Only Professional selling plans can be linked.

1. Click the **Login with Amazon** button to open the Amazon Seller Central login page.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AmazonAustraliaSellerAccount1.05T5g00000QCCS0EAP.png)
2. Enter your **Seller Central credentials**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AmazonAustraliaSellerAccount2.05T5g00000QCBAMEA5.png)

  **Please Note**: if the username is prefilled, ensure that it is the correct account that you wish to connect to your Neto store.
3. Click the **Sign-in** button to be redirected to the Authorise Neto page.
4. On the Authorise Neto page, check the box labelled **direct Amazon to provide Neto access to my Selling Partner account and related data**.
5. Click the **Confirm** button to be redirected back to the Neto Amazon Australia setup wizard page.
6. Click the **Next step** button to confirm and continue to the next step of the wizard.

## Listing Management

Neto can list products to Amazon Australia provided they have already been registered in Amazon's catalogue. Products that aren't in the catalogue can be [configured to register](https://galaxy.maropost.com/kb/articles/700-set-up-amazon-mapping-for-product-registration) once the initial setup is complete.

To search for a match, Neto uses the data you've entered into the product UPC field. If this UPC is in Amazon's database, your product will be listed for sale.

Decide if you want Neto to try and list products for you by selecting **Create and manage from Neto, using the product's UPC** and click **Next Step**.

If you want to let Neto round measurements (height, weight, and length) to two decimal places for you, select the **Enable Field Value Rounding** option.

Select if you want barcodes automatically detected, or if you want to define them manually. Automatic detection looks at the UPC/EAN fields on the product to determine what type they are. If you choose manual you will need to map the product identifier field and identifier type in the [Amazon product field mapping](https://galaxy.maropost.com/kb/articles/700-set-up-amazon-mapping-for-product-registration#product-field-mapping).

## Select Product Pricing

If you have existing listings on Amazon Australia you can continue to use their prices, or you can instead select a price group from your products in Neto:

1. Choose if you want to use **Neto product pricing** or the existing **Amazon Seller Central product pricing**.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonAustraliainMaropostCommerceCloud5.05T5g00000t0kmuEAA.png)

  Seller central pricing allows you to manage listings directly in Amazon, or through a thrid party application.

  If you select your Neto product pricing, choose which price group to use on Amazon. Product prices are kept up to date within Amazon based on the price group you select in this screen. If you've created a specific price group for your Amazon listings, select it on this page. The group selected here will also be assigned to customers when orders are created from your Amazon. If not, we recommend selecting your default price group and reviewing your pricing later.
2. If you've selected a Neto price group, you can also choose to use your promotional prices on Amazon. Check the **Use promo (sale) pricing, if set for a product** box if you'd like your promotional prices on Amazon.
3. Click the **Next step** button.

## Set Stock Controls

Stock levels can be populated from Neto, or managed directly in Amazon (including by third party integrations).

![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonAustraliainMaropostCommerceCloud6.05T5g00000t0kqrEAA.png)

1. Select if you want to use the **Neto product stock** or keep the existing **Amazon Seller Central product stock** levels.
2. If you've chose the Neto product stock, select if you want to list **All stock** or **A limited amount of stock** onto Amazon.
3. Selecting a limited amount of stock will prompt you to enter a quantity that won't be exceeded for each listing on Amazon.
4. Optionally, select the **Set a stock buffer which Amazon Australia can't access, but your other sales channels can (this prevents overselling)** and enter a **Stock buffer quantity** to hold an amount of stock that Amazon Australia will not have access to.
  For example, you have 10 units of a product in stock. If you set the list amount to '10', your Amazon account will list '10', and your other channels will have 10 available for purchase also.

  If you then set the stock buffer to '3', the amount listed on Amazon will change to '7', and 10 units will still be available to be sold through other channels.
5. Click the **Next step** button.

## Map Shipping and Handling

Shipping costs and availability are configured through the Amazon Australia Seller Central. Neto is not able to push shipping rates from your Neto shipping options into Amazon, therefore it's important that rates are configured in Amazon Australia as accurately as possible.

1. Select a **Standard** shipping option from the dropdown.
2. Select an **Expedited** shipping option from the dropdown.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonAustraliainMaropostCommerceCloud7.05T5g00000t0kxYEAQ.png)

  **Please Note**: When a customer makes a purchase through Amazon Australia, the order will display the shipping option selected here to process the order. If shipping options are not mapped, all Amazon orders will be placed on-hold and will need to be processed manually.
3. Enter a **Handling Time** for all orders. This is the number of days between receiving the order from the customer, and shipping it to them. This will apply to all Amazon Australia product listings, but can be [overwritten on individual products](https://galaxy.maropost.com/kb/articles/772-add-handling-time-to-amazon-au-listings) if needed.
4. Click the **Next step** button.

## Review

![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonAustraliainMaropostCommerceCloud8.05T5g00000t0jo8EAA.png)

1. Confirm all the settings are correct before continuing.
  To change any settings, click on the relevant step and make any changes.
2. Click the **Complete Amazon Australia setup** button.

**Please Note**: If you're using an integrated accounting program (e.g. Xero or MYOB), you will need to map the Amazon payment method to an account. To do this, navigate **Settings & tools > Payment Methods** within the Neto control panel and clicking the **Configure** button next to the **Amazon Australia Payments **method.

You have successfully integrated an Amazon Australia Seller account with your Neto control panel. You'll now be taken to the Amazon dashboard where you can view listings or configure mapping to register products on Amazon Australia.