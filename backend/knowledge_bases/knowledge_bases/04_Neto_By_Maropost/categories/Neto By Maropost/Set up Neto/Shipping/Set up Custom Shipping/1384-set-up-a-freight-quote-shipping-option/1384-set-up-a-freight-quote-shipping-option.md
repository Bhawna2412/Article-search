---
title: "Set up a Freight Quote Shipping Option"
articleID: 1384
category: "Set up Neto > Shipping > Set up Custom Shipping"
knowledgeBase: "Neto By Maropost"
---

# Set up a Freight Quote Shipping Option

> **Important:** Sales orders where this shipping option is used cannot automatically be created as a quote. We recommend that you enable the [quotes before checkout](https://galaxy.maropost.com/kb/articles/1037-checkout-settings) setting and direct customers to create a quote, however it is not compulsory for your customers.

## Set up a free shipping option

So that customers can still checkout on your website, the freight quote shipping option needs to free. To set up a free shipping option for freight quote:

1. In your Neto control panel navigate to **Shipping** > **Shipping options**.
2. Click the **Add new shipping option** button.
3. Click the **Set my own pricing** button.
4. Click the **Free domestic** button. If you need to offer this shipping option to different locations the zones can be updated once set up is complete.
5. Name your shipping option appropriately, e.g. Freight quote.
6. Enter a description for your shipping option. It's important to explain to your customer why you can't give an exact shipping cost, and what will happen after they complete checkout. e.g.
  `For bulky items we use several freight carriers to ensure you get the best price. Complete your order or quote and we will get back to you with the available freight options.`
7. Click the **Next Step** button to go to the review page.
8. Review your shipping option and click the **Complete** button.

Your shipping option is now live on your website. You may also want to customise how it works with the optional steps below.

## Optional customisation

### Customise shipping locations

If you followed the steps above your freight quote shipping option will appear for domestic postcodes. You may want to change this to display for other countries, or limit it to remote locations. Whatever the reason, to customise the shipping locations where this option is available:

1. In your Neto control panel navigate to **Shipping** > **Shipping options**.
2. Click on the link to your rates in your freight quote shipping option.
3. Scroll down the page to the shipping rates table section. Only one zone will be in the table.
4.   - Add all countries.
  - Select individual locations in Australia.

  Select zones to add from the **Use Preset Zones** drop down menu, then click the **Add Zones** button. Selected zones will be added to the table. Below are two common examples:

> **Note:** To remove unwanted zones, click the red x.

5. Click the **Save** button.

We strongly recommend you test your shipping option on your website front end, and ensure it functions exactly as required.

### Change the shipping calculator text

You website shipping calculators can show custom text next to any shipping option. By default, this says 'free', but you can make it more meaningful for your freight quote shipping option. Customers will also be less confused as you're messages will be consistent. To customise the shipping calculator text:

1. Navigate to the **Webstore** > **Checkout settings** page.
2.   - Free shipping text at checkout for orders - Checkout page.
  - Free shipping text at checkout for quotes - Quote page.
  - Free shipping text at checkout for web store - Product and cart pages.

  In the shipping rules section there are three fields that you can use to change the free shipping text on your website (e.g. POA). These fields and their locations are:

  You can alter the text in these fields to indicate that the freight cost is not free.

> **Note:** If you have a free shipping option it will also be affected by these changes, so choose your wording carefully.

3. Click the **Save** button.

Your website now displays your custom text next to your shipping option name in your calculators.

### Apply freight quote shipping to products

If you need the freight quote shipping option to display on certain products only, you can create a separate shipping category for them. This will also stop customers from selecting the freight quote option when they have other shipping options available they could use.

To set up a shipping category and assign products to it, follow the steps in this article.

1. In your Neto control panel navigate to **Settings & tools** > **Shipping options**.
2. Click on **Shipping categories**.
3. On the shipping categories page, click **Add New**.
4. Enter a name and description for your shipping category. These details are only visible in your control panel, and won't be seen on your website.
5. Click the **Save & Close** button.

Now that the category is created, the shipping option can be assigned to it.

1. Navigate to **Shipping** > **Shipping options**.
2. Click on your freight quote shipping option to open the edit screen.
3. Scroll down the page to the shipping category section. Remove all but one category by clicking the **Delete** button.
4. Change the remaining shipping category to your newly created freight quote only category.
5. Click the **Save & Close** button to save your changes to the shipping option.

The shipping category can now be assigned to your products.

1. In your Neto control panel navigate to **Products** > **View Products**.
2. Click on the SKU of the product that can only be sent using the freight quote shipping option.
3. Scroll down to the shipping section. In the **Shipping Category** drop down list select your freight quote shipping category.
4. Click the **Save** button, and repeat these steps for any other products that need to be updated.

> **Note:** Shipping category can also be updated using the [import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).

## Sales order workflow

Sales orders using your freight quote shipping option will most often appear as approved, with a status of new or pick. To help stay on top of these orders, we recommend that you [create a custom filter](https://galaxy.maropost.com/kb/articles/1521-custom-search-filters), using criteria below.

To access your filter, hover over the sales orders menu, and you'll find it at the bottom of the page. You can also open any sales orders page, and click the **Custom Filters** button.

When a sales order with freight quote is received:

1. Enter the freight amount in the **Shipping Cost** field.
2. Click the **Save Changes** button.
3. Click the **Unapprove** button (at the bottom of the page) to prevent the order being processed accidentally.
4. Contact your customer with the freight cost. The customer can pay through your website with a credit card, via direct debit or you can enter credit card details into the sales order to take payment.
5. Once paid, the order changes status to approved and can be picked, packed, and dispatched as usual.