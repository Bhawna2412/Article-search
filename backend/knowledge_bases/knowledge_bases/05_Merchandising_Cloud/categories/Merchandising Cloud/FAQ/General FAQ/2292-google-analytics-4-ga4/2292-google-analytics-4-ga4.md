---
title: "Google Analytics 4 (GA4)"
articleID: 2292
category: "FAQ > General FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Google Analytics 4 (GA4)

## To enable Site Search tracking on GA 4

### Step 1: Log into your Google Account

Log into your[ Google Account](https://analytics.google.com/)

### Step 2: Go to "Data Streams"

In the admin panel, navigate to "Data Streams" Settings, or use the search bar on top

![52d4d92-1._Data_Streams.png](https://us.v-cdn.net/6038474/uploads/U260S7AL72UM/52d4d92-1-data-streams.png)
Click on the website you want to enable or verify site search settings

### Step 3: Configure "Enhanced Measurement"

First, confirm that the 'Enhanced measurement' option has been activated.

![ff9abfa-2._Enhanced_measurement.png](https://us.v-cdn.net/6038474/uploads/HQX3NQUH4AGL/ff9abfa-2-enhanced-measurement.png)
Then, click on the small gear icon located on the right-hand side to unveil the expanded list of enhanced settings. It is important to verify that the 'Site search' setting is activated.

### Step 4: Configure query parameter

In the menu, go to "Site Search" settings & click on the "Show advanced settings" to configure the query parameters. Query parameter can be adjusted in Merchandising Cloud and the most commonly used are **findify_q** or **search_q **.

You'll easiest find the parameter used in your store by conducting a search & reviewing the URL.

e.g. **q** in [[Search Results](https://demo.findify.io/pages/search-results) ?**q**=item]

![0910a20-3._Site_Search.png](https://us.v-cdn.net/6038474/uploads/3XXMS2ARU3HX/0910a20-3-site-search.png)
Ensure that the parameter you're using is listed in the advanced settings.

> 📘 Default Tracking
> By default, search events are automatically tracked by Google Analytics if you have Site Search Tracking enabled in your Google Analytics setup.
> However, in certain cases, Findify query parameters can conflict with your site query parameters which can cause issues. To overcome this issue, we're prefixing our parameters with a common prefix, e.g. `findify`, so instead of `q` to identify the query parameter, `findify_q` is used, which is not tracked by Google Analytics by default.

![9410805-5._Configure_Parameter.png](https://us.v-cdn.net/6038474/uploads/NBVJ1AQQXHHO/9410805-5-configure-parameter.png)

### Step 5: Save your changes

Make sure you save your changes before exiting the Enhanced measurement tab.

**Note:** Query parameters cannot have additional characters like "_", "-" etc.

If you have special requirements, out the Findify support team for help with setting this up in the best way.

# How to create a custom audience in GA4

### What is a GA4 Audience?

Simplified, an audience is a group of users that you want to monitor based on any combination of interactions in a given timeframe. The audience allows you to segment the users based on events, dimensions and metrics important to a business.

### Examples

**Mobile audience:** users who visited the website on a mobile device

**Purchasers: **users who make a purchase.

GA4 evaluates if a user belongs to an audience group based on the criteria that is set up, if a user qualifies they are added. If they no longer meet a criteria they are also automatically removed. A user that satisfies the conditions of multiple audience groups will be included in all of them ([Read more here](https://support.google.com/analytics/answer/12799087?hl=en))

By default, Google automatically creates two audiences for you ‘All users’ and ‘Purchasers’.

In order to collect and track site specific Findify search activity you need to create a custom audience that captures and satisfies certain criteria.

Before we begin ensure you have enabled site search on your Google account (as described in section above).

### Step 1: Log into your Google Account

Log into your[ Google Account](https://analytics.google.com/)

### Step 2: Go to "Audience" Settings

In the admin panel, navigate to "Audience" settings, or use the search bar on top.

Select New Audience.

![69ea535-1._Audience_Settings.png](https://us.v-cdn.net/6038474/uploads/7R4RIXQ5RML2/69ea535-1-audience-settings.png)

### Step 3: Configure the New Audience

Select New Custom Audience

When setting up an audience you need to define the scope, event, dimension, or metric that you would like to apply

Scope : This defines the scope of when conditions will be met

- Across all sessions - adds a user to the audience if the condition is true for all the previous sessions
- Within the same session - adds a user to the audience if the condition is true for the current session (live session)
- Single event - adds the user to the audience if the condition is true for a particular event
- Select "Within the same session

![8ccd404-8._Session.png](https://us.v-cdn.net/6038474/uploads/L83M801U9GEG/8ccd404-8-session.png)
Set duration to 1 day to capture activity per day.

By default, GA4 fires the "view_search_results" event when a user inputs a query and clicks on the search button on the website. As the event gets fired on the website, Google sends default parameters such as search_term, page_location and source.

Select the event "view_search_results".

Note: If there is no "view_search_results" - event, the site search tracking is not correctly defined or there is no analytics captured.

[Untitled Image](https://files.readme.io/02f8181-6._Critera.png)
Additional criteria can be added as sequences let you specify conditions that need to be met for a user to become a member of this audience.

In order to know the activity that triggered a purchase as a result of search on the website, a sequence of event "purchase" can be added.

[Untitled Image](https://files.readme.io/1f21565-7._Sequence.png)
[Untitled Image](https://files.readme.io/ec76703-9._Purchase.png)
It is important to keep the scope the same as before ‘Within the same session’.

[Untitled Image](https://files.readme.io/8ccd404-8._Session.png)

> `📘 DebugView`
> `If something is off in your data, Google has added a great functionality in DebugView.Read more how to use it in this `[`external blogpost`](https://www.analyticsmania.com/post/debugview-in-google-analytics-4/)