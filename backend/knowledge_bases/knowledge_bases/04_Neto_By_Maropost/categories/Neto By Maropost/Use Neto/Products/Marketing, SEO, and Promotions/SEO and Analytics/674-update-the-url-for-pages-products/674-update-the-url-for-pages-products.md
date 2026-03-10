---
title: "Update the URL for Pages / Products"
articleID: 674
category: "Use Neto > Products > Marketing, SEO, and Promotions > SEO and Analytics"
knowledgeBase: "Neto By Maropost"
---

# Update the URL for Pages / Products

## Update the URL for Webstore Pages

Neto lets you customise the URL for any content page, product or product category:

1. In your Neto control panel navigate to **Webstore** and select either **Web Page** or **Product Category** and click into the page you wish to edit.
2. Find the **Naming** section and untick **Automatic URL**.
3. Enter the custom URL you wish to use.
  ![Screen Shot 2024-09-25 at 11.34.41 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gnc0pMAB.jpg)
4. Click **Save**.

> **Important:** If you intend on changing your homepage URL, ensure the custom URL is blank.
> www.domainname.com.au/home = Wrong
> www.domainname.com.au = Correct
> To remove the string on the end of the home page URL, follow the steps above and when you reach step 4, just clear the field and then press **Save**.

If you change the URL of a page or product, a 301 redirect will be automatically created to help preserve your previous search engine rankings.

You can manage your 301 redirects from your Neto control panel by navigating to **Settings & Tools** > **All Settings & Tools**. Select **Webstore** from the left side menu and then choose **301 Redirects**.

## Update the URL for Products

To edit a product URL:

1. In your Neto control panel navigate to **Products** > **View Products** and click into the product you wish to edit.
2. Select **SEO** tab (by default, this is at the bottom of the page).
3. Under **Product URL** clear the **Automatically Update** checkbox.
  ![Screen Shot 2024-09-25 at 11.36.08 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gnc14MAB.jpg)
4. Enter the custom **Product URL** you wish to use.
5. Click **Save**.
6. Lastly, navigate to **Products** > **View Products**.
7. Select the **More** button at the top of the page, then **Create URLs For Products Missing URLs** and **Regenerate URLs For All Products**.

> **Important:** The 'Regenerate URLs for all for all products' process does not automatically create 301 redirects for URLs that have changed. If you need to implement 301 redirects, you will need to export product URLs before you start the process, so that you can reimport the redirects at a later date.

## Custom Product URLs

You can also define a custom prefix for your product URLs:

1. In your Neto control panel navigate to **Settings & tools** > **All settings & tools**.
2. Select **Other** from the left side menu, and then click on **Advanced Configuration**.
3. Search for **SITE_URL_FORMAT_PRODUCT** in the **Name** field and click the **Apply Filter** button.
4. Click the config, and enter the custom path you'd like for all products. For example, to add **/store** to each product URL, you can configure it as below.
  ![Screen Shot 2024-09-25 at 11.55.09 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gnc5uMAB.jpg)
5. Each product now needs the **Automatically update URL** checkbox selected. You can do this individually on each product, or in bulk using the [product import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) by importing the `Generate URL Automatically` field set to yes.
  ![Screen Shot 2024-09-25 at 11.57.11 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gnc6EMAR.jpg)