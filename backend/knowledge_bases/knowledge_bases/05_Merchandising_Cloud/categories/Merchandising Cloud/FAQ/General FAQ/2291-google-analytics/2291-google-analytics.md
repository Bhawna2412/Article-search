---
title: "Google Analytics"
articleID: 2291
category: "FAQ > General FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# Google Analytics

## How do I measure Merchandising Cloud's impact using Google Analytics?

## Tracking Search Refinements

Log in to to your Google Analytics account, and then view your search refinements. This is the amount of times a user searched again immediately after performing a search. (If the number of search refinements is high, it means shoppers are not getting relevant results.)

To track the impact Merchandising Cloud has had on this number, go to your Google Analytics and go to Behaviour > Site Search > Overview.

![3.png](https://us.v-cdn.net/6038474/uploads/BV3ZE5DWMWKM/3.png)
Chose the metric “Search Refinements” and change the period to cover both before and after your installation of Merchandising Cloud.

Look at the date you went live with Merchandising Cloud and check how much lower your Search Refinements became following the integration.

![Image](https://files.readme.io/e89735d-Search_Refinements_2.png)

## Tracking Conversion

You can estimate the change in conversion created by Merchandising Cloud by comparing sessions with site search to sessions without site search - before and after you went live with Findify solutions. *NB - This will only work if you have not yet gone live with Smart Collections.*

Because your collections and your search have the same assortment; the same pricing; and the same influence from external sources, you can compare your change in search conversion to your change in collections conversion before and after going live with Merchandising Cloud.

In Google analytics go to Behaviour > Site Search > Usage.

![Image](https://files.readme.io/6800dcd-Google_Analytics_3.png)
In the time period (selection on the right side of the screen), chose a time after installing Merchandising Cloud and a period to compare to before.

![Image](https://files.readme.io/e40c665-Google_Analytics_4.png)

> 📘 Top Tip
> In your time period analysis, avoid the inclusion of major events such as Black Friday, Cyber Monday, and holiday sales as these events do not represent day-to-day business and can skew your analysis.

Compare the conversion for sessions with and without site search, before and after going live with Merchandising Cloud.

If the conversion with site search increased by +12% while your collections (without site search) increase by +2%, you can estimate the effect of Merchandising Cloud to be 12%-2% = a 10% increase in conversion.

![Image](https://files.readme.io/fed9357-Google_Analytics_5.png)

# How do I track search events with Google Analytics?

> 📘 Default tracking
> By default, search events are automatically tracked by Google Analytics if you have Site Search Tracking enabled in your Google Analytics setup.
> However, in certain cases, Merchandising Cloud query parameters can conflict with your site query parameters which can cause issues. To overcome this issue, we're prefixing our parameters with a common prefix, e.g. `findify`, so instead of `q` to identify the query parameter, `findify_q` is used, which is not tracked by Google Analytics by default.

To set up the new query, and make sure all Merchandising Cloud searches are correctly tracked in Google Analytics, please follow these steps:

Step 1 - Identify the query parameter
Step 2 - Add the query parameter to Google Analytics

## Step 1: Identify the query parameter

Perform a search in your store and identify the query parameter in the URL.

Most likely it will be `findify_q` or `search_q`

![d603cef-findify-query-parameter.png](https://us.v-cdn.net/6038474/uploads/7JC96N5PGWUX/d603cef-findify-query-parameter.png)

## Step 2: Add the query parameter to Google Analytics

1. Go to Google Analytics -> `Admin` page -> 'View Settings`

![1f59c49-view-settings.png](https://us.v-cdn.net/6038474/uploads/KZZMF195IMNG/1f59c49-view-settings.png)

1. Scroll down the page to the `Site Search Settings`
2. Enabled the `Site search Tracking` if it's not enabled
3. Insert a comma and paste the query parameter from step 1

![06d9cfb-site-search-settins.png](https://us.v-cdn.net/6038474/uploads/L6P29MMB54AM/06d9cfb-site-search-settins.png)