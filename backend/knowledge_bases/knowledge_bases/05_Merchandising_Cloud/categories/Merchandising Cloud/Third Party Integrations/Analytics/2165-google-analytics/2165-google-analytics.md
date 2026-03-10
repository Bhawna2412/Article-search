---
title: "Google Analytics"
articleID: 2165
category: "Third Party Integrations > Analytics"
knowledgeBase: "Merchandising Cloud"
---

# Google Analytics

You can measure Merchandising Cloud's impact on your store performance using Google Analytics by tracking search refinements and conversion rates. This data helps you understand how improved search relevance reduces repeated searches and enhances customer satisfaction, enabling you to make data-driven decisions about your merchandising strategy.

Setting up proper Google Analytics tracking for your Merchandising Cloud implementation provides measurable insights into search performance and conversion improvements. By comparing sessions with site search to sessions without site search before and after implementation, you can quantify the value of enhanced search and discovery features, helping justify your investment and identify further optimization opportunities.

How do I measure Maropost Merchandising Cloud's impact using Google Analytics?

## Tracking Search Refinements

Log in to to your Google Analytics account, and then view your search refinements. This is the amount of times a user searched again immediately after performing a search. (If the number of search refinements is high, it means shoppers are not getting relevant results.)

To track the impact Merchandising Cloud (formerly Findify) has had on this number, go to your Google Analytics and go to Behaviour > Site Search > Overview.

![c5211b8-Search_Refinements_1.png](https://us.v-cdn.net/6038474/uploads/VYNMY9KCC8OY/c5211b8-search-refinements-1.png)

Chose the metric “Search Refinements” and change the period to cover both before and after your installation of Merchandising Cloud.

Look at the date you went live with Merchandising Cloud and check how much lower your Search Refinements became following the integration.

![e89735d-Search_Refinements_2.png](https://us.v-cdn.net/6038474/uploads/PISSYQHUJ8SD/e89735d-search-refinements-2.png)

## Tracking Conversion

You can estimate the change in conversion created by Merchandising Cloud by comparing sessions with site search to sessions without site search - before and after you went live with our solutions. *NB - This will only work if you have not yet gone live with Smart Collections.*

Because your collections and your search have the same assortment; the same pricing; and the same influence from external sources, you can compare your change in search conversion to your change in collections conversion before and after going live with us.

In Google analytics go to Behaviour > Site Search > Usage.

![6800dcd-Google_Analytics_3.png](https://us.v-cdn.net/6038474/uploads/UIMZCTHMJD0P/6800dcd-google-analytics-3.png)

In the time period (selection on the right side of the screen), chose a time after installing Merchandising Cloud and a period to compare to before.

![e40c665-Google_Analytics_4.png](https://us.v-cdn.net/6038474/uploads/SBVF4PHYA84L/e40c665-google-analytics-4.png)
📘**Top Tip**

In your time period analysis, avoid the inclusion of major events such as Black Friday, Cyber Monday, and holiday sales as these events do not represent day-to-day business and can skew your analysis.

Compare the conversion for sessions with and without site search, before and after going live with Merchandising Cloud.

If the conversion with site search increased by +12% while your collections (without site search) increase by +2%, you can estimate the effect of Merchandising Cloud to be 12%-2% = a 10% increase in conversion.

![fed9357-Google_Analytics_5.png](https://us.v-cdn.net/6038474/uploads/8XIJ5ZAEQQ81/fed9357-google-analytics-5.png)
How do I track search events with Google Analytics?

## **📘Default tracking**

By default, search events are automatically tracked by Google Analytics if you have Site Search Tracking enabled in your Google Analytics setup.

However, in certain cases, Merchandising Cloud query parameters can conflict with your site query parameters which can cause issues. 

To overcome this issue, we're prefixing our parameters with a common prefix, e.g. `findify`, so instead of `q` to identify the query parameter, `findify_q` is used, which is not tracked by Google Analytics by default.

To set up the new query, and make sure all searches are correctly tracked in Google Analytics, please follow these steps:

Step 1 - Identify the query parameter

Step 2 - Add the query parameter to Google Analytics

## Step 1: Identify the query parameter

Perform a search in your store and identify the query parameter in the URL.

Most likely it will be `findify_q` or `search_q`

![d603cef-findify-query-parameter.png](https://us.v-cdn.net/6038474/uploads/NZ9PAP37Y6E9/d603cef-findify-query-parameter.png)
*Find the query parameter name*

## Step 2: Add the query parameter to Google Analytics

1. Go to Google Analytics -> `Admin`page -> 'View Settings
  ![1f59c49-view-settings.png](https://us.v-cdn.net/6038474/uploads/FK0UY3JSHZ3S/1f59c49-view-settings.png)

*Select View Settings*

1. 
2. 
3. Insert a comma and paste the query parameter from step 1`

![06d9cfb-site-search-settins.png](https://us.v-cdn.net/6038474/uploads/8268Y1WRNZ6J/06d9cfb-site-search-settins.png)
*Insert the query parameter obtained in step 1*