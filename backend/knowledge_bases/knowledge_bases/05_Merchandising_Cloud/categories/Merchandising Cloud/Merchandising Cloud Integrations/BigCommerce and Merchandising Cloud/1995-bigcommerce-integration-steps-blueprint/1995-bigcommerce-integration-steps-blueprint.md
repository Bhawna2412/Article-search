---
title: "BigCommerce Integration Steps (Blueprint) "
articleID: 1995
category: "Merchandising Cloud Integrations > BigCommerce and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# BigCommerce Integration Steps (Blueprint) 

You can connect Merchandising Cloud to your BigCommerce Blueprint theme to enable AI-powered personalization that helps increase conversion rates and average order value by showing each customer relevant products based on their behavior. The integration process involves credential generation, tracking tag implementation, and search page configuration, establishing the technical foundation for intelligent product discovery features.

Completing these integration steps enables behavioral tracking and personalized search functionality on your BigCommerce store. The tracking tags capture customer interactions that power AI personalization algorithms, while the search page integration delivers dynamic results that adapt to shopper preferences-helping improve product discovery and conversion rates through real-time behavioral learning and personalized product rankings.

To integrate Merchandising Cloud (formerly Findify) into your shop you'll need to follow the steps listed below:

1. Generate your BigCommerce credentials
2. Disable quick search
3. Add the Merchandising Cloud tracking tags
4. Add Merchandising Cloud to your search results page
5. Add the Merchandising Cloud Javascript to the `<head>` section

**Important note**: If you're using **Stencil** you might need extra integration work. Feel free to contact us on [support@maropost.com](mailto:support@maropost.com) if you need further guidance.

## Step1: Generate BigCommerce credentials

See our dedicated and details guide on how to [Generate BigCommerce Credentials](https://developers.findify.io/docs/generate-bigcommerce-credentials). Follow these instructions, and then return here.

## Step 2: Disable quick search

1. Go to you store settings **([store_url]/manage/settings/store)**
2. Choose the **display** tab
3. Scroll down until you find *Enable Quick Search?* section and **uncheck** the box

## Step 3: Add our tracking tags

**Adding the tag to **`product.html`** page:**

1. Go to the `<strong>product.html</strong>` page **([store_url]/admin/designmode.php?ToDo=editFile&File=product.html&f=a)**
2. Paste the code snippet before `<strong></body></strong>` tag

HTML

```plaintext
<div data-findify-event="view-page" data-findify-item-id="%%GLOBAL_ProductId%%"></div><div data-findify-filter="id" data-findify-filter-value="%%GLOBAL_ProductId%%"></div>
```

**Adding the tag to **`order.html`** page:**

1. Go to the `<strong>order.html</strong>` page **([store_url]/admin/designmode.php?ToDo=editFile&File=order.html&f=a)**
2. Paste the code snippet before the `<strong></body></strong>` tag

HTML

```plaintext
<div class="findify_purchase_order" style="display:none">   <span class="order_number">%%GLOBAL_OrderId%%</span></div>
```

## Step 4: Add Merchandising Cloud to your search page

*This is the trickiest part as it may vary for different shops.*

You need to put the tag at the place where you want the search results to be displayed and you may need to create a new `<div>` wrapper around the default BigCommerce element that shows search results.

1. Go to the `<strong>search.html</strong>` page **([store_url]/admin/designmode.php?ToDo=editFile&File=search.html&f=a)**

_If you're using faceted search from BigCommerce, please use this `<strong>search_with_facets.html</strong>` page or this link **([store_url]/admin/designmode.php?ToDo=editFile&File=search_with_facets.html&f=a)**
2. Paste `<strong>data-findify-attr="findify-search-results"</strong>` inside the `<strong><div></strong>` tag that wraps `<strong>%%Panel.SearchPage%%</strong>`
3. If there is no wrapper `<strong><div></strong>`, you should create it yourself and tag it with the tag above

## Step 5: Add JS Script to the header

Go to the [Integration](https://dashboard.findify.io/settings/integration) section of the [Merchant Dashboard](https://dashboard.findify.io/) and copy the script.

1. Go to the `<strong>Panels/HTMLHead.html</strong>` page **([store_url]/admin/designmode.php?ToDo=editFile&File=Panels/HTMLHead.html&f=a)**
2. Paste the script copied from the Merchant Dashboard before the `<strong></head></strong>` tag

**After following these steps the search should be live in your store!**