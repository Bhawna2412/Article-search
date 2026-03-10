---
title: "Set up Goals in Google Analytics"
articleID: 1422
category: "Use Neto > Products > Marketing, SEO, and Promotions > SEO and Analytics"
knowledgeBase: "Neto By Maropost"
---

# Set up Goals in Google Analytics

Goals are a versatile way to measure how well your site fulfils your objectives. You can set up individual goals to track discrete actions, like cart abandonment.

## Set up E-commerce Tracking

If you are simply wanting to track sales conversions in Google Analytics you do not need setup goals. Instead, you can simply [turn on e-commerce tracking](https://galaxy.maropost.com/kb/articles/1538-google-analytics-with-ecommerce-tracking) in your Google account settings. The Google tracking code pre-installed in your Neto website and is already compatible with Google e-commerce tracking.

## Set up Goals in Google Analytics

Log in to your Google Analytics account. If you haven’t already setup your Google Analytics and Google Console verification, please do so before proceeding further.

### Goal URLS

The URLs that Neto generates at checkout cannot be used for goal setup, as they are not unique to each stage of the checkout process. Instead Neto passes hidden static URLs to Google. Below are the hidden URL’s for goal destinations on your Neto website. You will need these when setting up your goals in Google Analytics.

**Checkout Complete URL**:

```plaintext
/purchase/invoice.html
```

**Shopping Cart URL**:

```plaintext
/purchase/shopping_cart.html
```

**Address and Payment** (one page checkout):

```plaintext
/purchase/confirmation.html
```

**Contact Form Submission Complete**:

```plaintext
/contact/complete.html
```

### Tracking cart abandonment with goal tracking

Below is the setup for the end goal of a successful customer purchase. You can use this setup to track cart abandonment.

1. In the bottom left corned, click the cog icon.
2. Click on the **Goals** option under **All Web Site Data** to start the setup.
3. Click the **New Goal** button.
4. On the the goal set-up step, select the **Place an order** template and click **Continue**.
5. Fill out the details as per the screenshot below.
6. Click **Save**.

To view your cart abandonment navigate to **Conversions** > **Shopping Behaviour** in your Google analytics account.

### **Custom Static Page URL’s**

If there is a page you want to add as a destination URL in your goal setup but you do not have a static URL for it, you can add the following tag to the related pages source code.

```plaintext
[%GA_FUNNEL%]/page.html[%END GA_FUNNEL%]
  
```

Important

: Replace

/page.html

with the name of URL you want to identify the page by. The content of this tag will be recognised by Google as the page's static URL.

For further information and examples of other goals please visit [Google's support pages](https://support.google.com/analytics/answer/1116091?hl=en&ref_topic=6150929).