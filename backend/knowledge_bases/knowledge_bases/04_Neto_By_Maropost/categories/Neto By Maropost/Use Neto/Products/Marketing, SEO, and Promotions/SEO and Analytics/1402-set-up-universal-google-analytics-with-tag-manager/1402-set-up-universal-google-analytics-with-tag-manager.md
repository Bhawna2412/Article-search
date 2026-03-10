---
title: "Set up Universal Google Analytics with Tag Manager"
articleID: 1402
category: "Use Neto > Products > Marketing, SEO, and Promotions > SEO and Analytics"
knowledgeBase: "Neto By Maropost"
---

# Set up Universal Google Analytics with Tag Manager

> **Warning:** This add-on has been deprecated, please use the [Google Analytics 4](https://galaxy.maropost.com/kb/articles/1254-google-analytics-4) steps.

## Overview

Google Tag Manager (GTM) makes managing your analytics, marketing and other scripts much easier for the layman. It also includes version control, preview features and an excellent debugging tool.

This guide demonstrates how to implement Google Analytics with GTM and includes **eCommerce**, **enhanced eCommerce** **site search** and **user group tracking**. After completion, you will be able to measure on your website:

- Product Impressions
- Product Clicks
- Views of Product Details
- Additions or Removals from a Shopping Cart
- Promotion Impressions
- Promotion Clicks
- Checkout Steps
- Purchases

> **Note:** If you do not require enhanced ecommerce tracking we recommend the Google Analytics add-on instead.

## Before you Begin

Ensure you already have a [Google Analytics](https://www.google.com/analytics/#?modal_active=none) and [Google Tag Manager](https://tagmanager.google.com/#/admin/accounts/create) account before proceeding with this guide.

## Set up Google Analytics

1. Log in to your [Google Analytics account](https://analytics.google.com/analytics/web/).
2. Select **Admin** from the menu in the lower left corner.
3. In the **View** column, click **E-commerce Settings**.
4. Click the **Enable E-commerce** and **Enable Enhanced Ecommerce Reporting** toggles so that they are **On**.
5.   - Email
  - Billing
  - Terms
  - Payment

  Add the below **Funnel Steps** for each part of the checkout process.

  Once complete, it should look like the below image.
6. Click the **Save** button.
7. Lastly, go to the **Admin** menu, and select **Tracking Info** then **Tracking Code**. Here you will find your Google analytics tracking code, which will look something like `UA-xxxxxxxxx-1`. Copy this as you'll need it in step 8 of the next section.

## Set up Google Tag Manager

1. Download [this json file](https://www.neto.com.au/assets/docs/tag-manager/container_EE.json) and save to your computer. You will need to upload it to tag manager shortly.
2. Log in to [Google Tag Manager](https://tagmanager.google.com/) and select your site.
3. Select the **Admin** menu and click on **Import Container**.
4. Click the **Choose Container File** and select the container_base.json file downloaded earlier.
5. Choose to import it into a new or your existing workspace, and select the **Merge** option.
6. Click the **Confirm** button to start the import.
  The file has everything you need for gathering tracking information from the webstore such as clicks, views, cart and checkout events. It also has the tags required to send this data to Google Analytics.
7. Once the import is complete, click on the **Analytics Tracking ID**.
8. Update the **Tracking ID** to match the one you copied in step 7 of the previous section.

Depending on your theme you may now need to tweak a few settings for all of the tracking features to work. These can be found in the **Neto - Configuration** folder in Google Tag Manager, and are outlined below.

### Carousel Plugin

Banner clicks are tracked based on the class name of the banners. Most Neto themes will use the Bootstrap carousel so you won't need to change anything here but if you're using a different carousel plugin you will need to specify which one. If you're unsure, check with Neto support.

The following carousel plugins have been pre-made in this container:

- Bootstrap 4
- Bootstrap 3
- Owl Carousel 2
- Slick

If you're using one of the above, just change the `Carousel Plugin` variable to the name above exactly.

If you're using a different carousel plugin you will need to update this variable, as well as add the corresponding slide and carousel class to the `Lookup Table - Carousel Container Class` and `Lookup Table - Carousel Slide Class` variables.

### Banner URLs

Banner views are tracked based off part of the banner image URL. Almost all Neto sites will use a URL like `/assets/marketing/banner.jpg` but this can vary as it's an editable option. If you open one of the banner images on your website and you see it's located elsewhere, you will need to update the **Promotion URL** variable.

### Thumbnails

Add the following code on your product thumbnail template (in Neto), on the element which has the thumbnail class.

> **Note:** This template will usually be `theme-name/templates/thumbs/product/template.html`.

`id="product[@inventory_id@][@rndm@]"`

Product thumbnail clicks and views are tracked using the class of the thumbnail container. In most Neto themes this will be thumbnail but this can vary too. If your theme uses a different class for thumbnail containers you will need to update the `Thumbnail Container Class` variable. If unsure, please contact Neto support.

## Set up Neto

To link analytics and tag manager to Neto, you need to set up some custom scripts to run on your site.

1. In your Neto control panel navigate to **Settings and Tools** > **All Settings and Tools**
2. Select **Custom Scripts**.
3. Click the **Add New** button to create a new script.
4. Enter a relevant **Name** for the script, such as `Google Tag Manager - Enhanced Ecommerce`.
5. Copy your [Google Tag Manager Container ID](https://tagmanager.google.com/#/home) into the **Key 1** field.
6.   - [Page Header](https://www.neto.com.au/assets/docs/tag-manager/scripts/page_header.txt)
  - [Page Footer](https://www.neto.com.au/assets/docs/tag-manager/scripts/page_footer.txt)
  - [Purchase Confirmation (Thank You Page)](https://www.neto.com.au/assets/docs/tag-manager/scripts/purchase_confirmation.txt)
  - [Product Page (under description)](https://www.neto.com.au/assets/docs/tag-manager/scripts/product_page.txt)
  - [Product Thumbnails](https://www.neto.com.au/assets/docs/tag-manager/scripts/product_thumbnails.txt)

  Copy the contents of each link below into the relevant tabs of the custom script:
7. When complete, click the **Save** button.
  **Please Note**: Changes to a custom script require you to authenticate your access. Click the **Send Token Now** button and an email will be sent to you with a security token. Copy the token and paste it into the verification field. Click the **Verify Token** button and your changes can be saved. The token will last two hours in case you need to change multiple scripts.

## Advanced Configuration (optional)

These steps are only necessary if you wish to track particular data such as categories or upsells against each other. By default this will list the location of a product view or banner view as the page type, the list for a product view on a category page will appear as category. We recommend using a [Neto partner](https://www.netohq.com/job-request-portal/form) to implement this tracking.

To be able to specify the list for product views you will need to do two things:

1. Remove the caching function from product thumbnails. In each thumbnail template of your theme you will likely find the following at the start of the file:
  `[%CACHE type:'gallery' id:'[@inventory_id@]'%]`

  and the following at the end of the file:

  `[%/CACHE%]`

  You can safely remove these lines from each thumbnail template, but they must be removed from each thumbnail template file.
2. On each template you wish to track (category templates, product templates, and so on) add the following line just before each thumb_list function where you want to specify the list name:
  `[%set [@list_name@]%]LIST_NAME[%/set%]`

## Payment Exclusions

If a customer is using PayPal or Afterpay to checkout on your website, the analytics may show them as being referred from those places. This can easily be countered by adding the following URLs to the [referral exclusion list](https://support.google.com/analytics/answer/2795830?hl=en) in Google Analytics:

- paypal.com
- portal.afterpay.com

You have now set up Google Analytics and Tag Manager with enhanced eCommerce tracking for your Neto website. If you are using the default or another Google Analytics script in Neto, it now needs to be deactivated.