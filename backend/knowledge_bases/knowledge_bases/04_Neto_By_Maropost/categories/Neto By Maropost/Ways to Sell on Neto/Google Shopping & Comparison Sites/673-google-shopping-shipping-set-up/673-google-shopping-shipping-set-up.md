---
title: "Google Shopping Shipping Set up"
articleID: 673
category: "Ways to Sell on Neto > Google Shopping & Comparison Sites"
knowledgeBase: "Neto By Maropost"
---

# Google Shopping Shipping Set up

Google Merchant Center requires you to include your shipping rates as part of your feed. Failing to do this will result in errors when attempting to process your feed such as the example below.

Your webstore product prices and shipping costs must match the feed that's sent to the Google Merchant Center.

> **Note:** It's important to recognise Google's shopping data feed does not offer as many options as the Neto shipping calculator so this feed may not be viable for some businesses.

There's a few ways we recommend charging for shipping in Neto so as to best match what Google can calculate:

- **Free shipping**: The easiest way to set up this feed is to have free shipping on your products and will instantly bypass the need to make changes to your feed.
- **Flat Rate Shipping**: Offer Flat Rate Shipping: Offering flat rate shipping for your products is your second best option for your feeds. See our article on setting up flat rate shipping for your products. With this method you can just set up a matching flat rate cost in your Google Shipping Matrix.
- **Create rates based on location**: Configure rates based on shipping destination using countries, and states only.
- **Create rates based on your product details**: Define your shipping rates based on weight. This requires additional set up in the [Google Merchant Centre](https://support.google.com/merchants/answer/6069284?hl=en#shipping-options).

All rates can have their costs calculated based on subtables. Subtables are generally used to set specific delivery locations. For example, you can use subtables to calculate shipping cost based on weight and postcode.

> **Note:** If you provide multiple shipping services for the same product in a country, Google will calculate the **lowest rate** for a product and display that to users.

This is just a few of the options available which we will cover in this guide. If you are looking for something more advanced, we recommend reading more about shipping options in [Google's Products Feed Specification](https://support.google.com/merchants/answer/188494?hl=en).

## Add Shipping Costs

To add your shipping costs to your Google Shopping Feed:

1. In your Neto control panel navigate to **Other **> **Shopping Comparison Feeds**.
2. On the **Google Shopping** feed, click the **Edit** button.
3. Scroll down to the **File Builder**. You will be modifying the **FILE HEADER** and **FILE BODY - body** sections.
  ![Screen Shot 2024-09-18 at 1.17.26 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FrNKoMAN.jpg)
4. In the above screenshot, we've added 'shipping(country:price)'' to the FILE HEADER field and added 'AU:7.40 AUD' to the FILE BODY - body field.
  Identify from the table below which type of shipping you wish to add to your feed and replace these fields accordingly.
5. The table uses tabs between columns, so it's best to copy the space between the existing columns to replicate that tab. Do not use the space-bar to make a column. Once you've added the extra column, add a line-break (ENTER key).
6. Once done, click Save. Go to the top of the feed and click the green **Generate Data File** button. Wait for the export to finish, go back to your Google Merchant Center and click **Fetch Now** in your product feeds.
7. You are now done. Don't forget to [review and correct any errors](https://galaxy.maropost.com/kb/articles/1225-google-shopping-feed-errors-and-warnings) you see along the way.

## Next Steps

- [Import Google Shopping Product Categories]()
- [Add Product Condition to a Google Shopping Feed](https://galaxy.maropost.com/kb/articles/1061-add-product-condition-to-a-google-shopping-feed)