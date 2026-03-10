---
title: "Trend Scoring: Define Time Window"
articleID: 2036
category: "Merchandising Cloud Dashboard > Merchandising"
knowledgeBase: "Merchandising Cloud"
---

# Trend Scoring: Define Time Window

You can configure the time window for trend scoring to control how the AI identifies and surfaces trending products in search results and recommendations, enabling you to balance recent popularity signals with longer-term trends.

This configuration helps ensure trending product identification aligns with your business cycle-whether promoting hot sellers from the last day, week, or month-supporting dynamic merchandising that responds to customer behavior patterns and seasonal trends for improved relevance and conversion.

Adjusting trend scoring time windows helps optimize how quickly your merchandising responds to changing customer interests. You can configure shorter windows for fast-fashion or trending items where immediacy matters, or longer windows for categories with slower turnover-enabling trend-based product positioning that matches your category dynamics while the AI continuously learns which trending signals best predict purchase intent for your specific customer base and product mix.

![f6049e4-TrendScoring_Preview.png](https://us.v-cdn.net/6038474/uploads/BL3UJ3D89XMS/f6049e4-trendscoring-preview.png)

## What is Trend Scoring?

Trend Scoring captures the dimension of time and is one of the key factors used to rank ideal product order. Trend Scoring measure how popular a product is in recent time, in order to boost or demote products based on season & trends.

The full list of factors are:

- Search Relevance (Query match with product data)
- Context Relevance (How popular a product is in relation to a specific query)
- Time Relevance (Trend Scoring)
- Individual User Relevance (Personalization)
- Business Relevance (Controlled through Merchandising Rules)

## Why would merchants want to control the time window?

All businesses have unique requirements, and our ongoing quest is to provide as much business-relevant control as possible - without making the experience too complex or time consuming.

There could be multiple reasons for needing a shorter time window, e.g.:

- **Holiday Overpowering:***Holiday needs can be very specific and products in focus quickly change after the holiday is over. Using a time window that does not reflect this can keep holiday items ranked too high, for too long.*
- **Micro Trend Cycles:***Some industries have an extreme pace of trends, and yesterday's rockets can be irrelevant tomorrow.*

There could also be multiple reasons for needing a longer time window, e.g.:

- **Low Inventory Turnover:***Large inventory industries or slow sales cycles demand longer time windows to highlight the more popular options.*
- **Campaign Dilution:***Focused campaigns can skew the results where a longer time series provides more robust results, especially in industries with slower trend cycles.*

## How to control the time window

The control mechanism is fairly straightforward.

- Go to Settings > Advanced Setup > Trend Scoring

Change the number of days used to populate the factors.

![7785ddd-Trend_Scoring.png](https://us.v-cdn.net/6038474/uploads/WJKB3T1YJE1M/7785ddd-trend-scoring.png)

## FAQ

#### Q: Do I have to configure Trend Scoring?

**A: No.** *By default, the Trend Scoring time window is set to 30 days rolling.*

#### Q: When will the changes be applied?

**A: Within a few minutes.** *Configuration changes are served through the active sync infrastructure. Updating the Trend Scoring Time Window is a non-breaking change, so no reindex is required to serve the updates. Technically, the change is applied with the next product update flowing through the big data pipeline. With webhooks activated, this should be applied shortly. ****To force an update, you can activate a feed sync from the dashboard.***

#### Q: What features does Trend Scoring affect?

**A: All Features.** *Smart Collections, Search, Autocomplete, and Recommendations (Popular Products)*