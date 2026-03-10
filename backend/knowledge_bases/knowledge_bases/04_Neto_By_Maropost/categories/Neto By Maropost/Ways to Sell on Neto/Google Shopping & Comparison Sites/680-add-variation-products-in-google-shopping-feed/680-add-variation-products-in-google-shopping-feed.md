---
title: "Add Variation Products in Google Shopping Feed"
articleID: 680
category: "Ways to Sell on Neto > Google Shopping & Comparison Sites"
knowledgeBase: "Neto By Maropost"
---

# Add Variation Products in Google Shopping Feed

Google Shopping now supports variation products. This is rather limited compared to your webstore, but this is how to add it to an existing export template.

> **Note:** Child products must have an image for Google Shopping to accept the variation.
> Neto  partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Prepare Products

When you send variation products on Google Shopping, Google needs to be able to access each variation product separately. By default, Neto automatically redirects anyone to the parent product. To change this behaviour:

1. In your Neto  control panel navigate to **Settings & tools** > **All settings & tools**.
2. Search for and select **Advanced Configuration**.
3. In the **Name** field search for `REDIRECT_VARIATIONS` and click on it.
4. Change the value to **No** and click the **Save changes** button.

Now that child products won't redirect, you will need to add product data that is normally inherited from the parent product, to the child products. Ensure all of your child products include:

- Description
- Images
- Brand
- Product Category
- SEO data
- Custom field information

If your child products do not have this information your SEO ranking will be negatively impacted.

## Google Shopping Export Template

In this example, we show how you can export the specifics 'Colour' and 'Size' however you can change the wording to whatever specifics you wish to export.

To add variation specifics to your Google Shopping product export:

1. In the file builder add the below information to the file header:

> **Important:** Ensure you add a tab character after each specification, as demonstrated in the example below.

  The image below demonstrates how you would add the colour specific to your data feed:

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddVariationProductsinGoogleShoppingFeed1.05T5g00000w6XchEAE.gif)
2. In the File Body - body section you now need to add the fields that correspond to the new headers:

> **Important:** The below code will only work if the product variations (child products) have 3 or less item specifics.

> **Note:** Ensure your feed is configured to accept [quoted attributes](https://support.google.com/merchants/answer/160037?hl=en).

3.   - Is Child Product
  - Is Not Child Product
  - Doesn't Have Child Product

  Click on the **Filter** tab. Under the **Child/Parent Status** select:

  ![Screen Shot 2024-09-16 at 11.36.30 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqL6sMAF.jpg)
4. Replace [[@descrtiption@]](https://galaxy.maropost.com/profile/descrtiption%40%5D) with `[%if [@description@] eq &#39;&#39; %][%product sku:&#39;[@parent_sku@]&#39;%][%param *body%][@description@][%/param%][%/product%][%else%][@description@][%/if%]`. This will export the description of the child product. If the child product doesn't have a description, it will use the parent product description instead.
5. Click the **Save Changes** button.

Your Google Shopping feed will now include variation products.