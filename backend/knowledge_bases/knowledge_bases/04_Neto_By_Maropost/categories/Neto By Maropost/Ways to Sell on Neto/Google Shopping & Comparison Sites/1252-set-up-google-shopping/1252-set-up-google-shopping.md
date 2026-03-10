---
title: "Set up Google Shopping"
articleID: 1252
category: "Ways to Sell on Neto > Google Shopping & Comparison Sites"
knowledgeBase: "Neto By Maropost"
---

# Set up Google Shopping

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping1.05T5g00000gQA5fEAG.jpg)

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

## Overview

This article is one part of the required steps to advertise your products through Google Shopping. After completing these steps we recommend moving on to the next steps at the end of the article.

To use this service you will need to turn on the feed in Neto and have a merchant account with Google.

Once you have provided the feed URL (from Neto) to Google they will be able to display your products on their website. CSE's will typically poll these URLS daily to update their systems with your latest inventory data.

> **Note:** Neto partners can set this up for you. [Request a data service job](https://www.netohq.com/job-request-portal) for a quote.

## Set up your Google Merchant Account

[▶ YouTube Video](https://youtu.be/apXuW7Qex7k)
For more information on setting up your Google Merchant Account, visit the [Google Merchant Center Beginners Guide](https://support.google.com/merchants/answer/188493?hl=en&ref_topic=3163841&rd=1).

## Set up your Google Shopping Feed

> **Note:** You may need to prove to Google that you own the website you're uploading from. If you're prompted to verify site ownership, please follow the steps [here](https://galaxy.maropost.com/kb/articles/426-google-search-console-setup#verify-site-ownership-with-google-search-console).

1. Log in to your [Google Merchant account](https://www.google.com/retail/solutions/merchant-center/#?modal_active=none).
2. Click on **Products** in the menu and click **Feeds**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping2.05T5g00000gQA6TEAW.png)
3. Click the blue **+** button to add a new primary feed.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping3.05T5g00000gQ9vMEAS.png)
4. Choose your target country and language, then click **Continue**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping4.05T5g00000gQA2DEAW.png)
5. Set a feed name and choose **Scheduled fetch** as your input method. This will grab the products file from your Neto website and keep everything up to date at regular intervals. Once set, click **Continue**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping5.05T5g00000gQA6dEAG.png)
6. In another browser tab, open your Neto control panel. In the **Sales Channels** section navigate to **Other** > **Shopping Comparison Feeds**.
7. Select **Google Shopping Data Feed** and click **Feed URL/Install**.
  **Please Note**: It can take 24 hours for feed data to update from Maropost to Google.

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping6.05T5g00000gQA3QEAW.png)
8. Copy the feed URL and go back to the Google Merchant Center browser tab.
9. In the file name, type in **google.txt**
10. Set your **fetch frequency,** we highly recommend daily.
11. Set your **fetch time** (set this after any other data feeds going into your website) and **time zone**.
12. Paste the **File URL** that you copied from your Neto control panel, and click **Continue**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping7.05T5g00000gQA9DEAW.png)
13. Your feed will be created, but not yet uploaded. To force an upload, click on your feed name.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping8.05T5g00000gQ9znEAC.png)
14. On the right hand side of the page click the three dot button, and click **Fetch Now**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupGoogleShopping9.05T5g00000gQAEXEA4.png)

  **Please Note**: If your file exceeds 20 MB, it must be manually uploaded. Go to the Feed URL in your browser, download the file, then click the **Manual Upload** button on the Google Merchant Center.

Once the file has been successfully uploaded (this may take 5-15 mins depending on the size), [review and correct the errors](https://galaxy.maropost.com/kb/articles/1225-google-shopping-feed-errors-and-warnings) which appear.

## Show Specific Customer Group Price.

1. In the google export template, find the **FILTER** tab, and scroll down to **Product Pricing Filters**.
2. In the option **Show Store Price As Price Level**, select the **price group** you wish to show for your google export feed.

> **Important:** Note that this price must match your website's price display as viewed by an unregistered customer.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/234b642fbf0b40f18a620200059e3126.05T5g00000nHGLFEA4.png)

## Next Steps

To complete the Google shopping set up process, follow the steps in these articles:

- [Import Google Shopping's Australian Product Categories](https://galaxy.maropost.com/kb/articles/1066-import-google-shoppings-australian-product-categories)
- [Google Shopping Shipping Set up](https://galaxy.maropost.com/kb/articles/673-google-shopping-shipping-set-up)