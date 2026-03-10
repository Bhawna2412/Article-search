---
title: "How Does Merchandising Cloud Machine Learning Work?"
articleID: 2295
category: "FAQ > General FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# How Does Merchandising Cloud Machine Learning Work?

Merchandising Cloud has built several artificial intelligence algorithms that are based on the data collected in order to help shoppers find (and buy) exactly what they are looking for - thus increasing store conversion.

Three layers of algorithms are employed at Merchandising Cloud. Each layer is applied on top of the previous one to tailor the results to users and increase sales.

## Basic Search

This is the baseline of the results that the Merchandising Cloud platform returns. By analyzing product data retrieved from the store (title, description, tags, other custom fields) the system extracts results that are relevant to the customer's query. 

Non-relevant results are removed completely (e.g. if you search for **Shorts**, **Jackets** will be removed from results) and more relevant results are ranked higher (e.g. usually the title field is much more relevant than the description). The weights for each field can be adjusted via the Merchandising Cloud Merchant Dashboard.

## Trend Scoring

Merchandising Cloud's Trend Scoring Model analyzes the performance of each product throughout the whole store by taking into account clicks, purchases, page views, searches and other data that Merchandising Cloud collects about the product. 

Merchandising Cloud also collects product popularity for popular search queries and collections which can further influence the end result. As a result of this calculation, the popularity score is generated. This is then merged with the **Basic Search** score to re-rank the products that the customer sees.

## Personalization

Finally, the Personalization Model takes the product ranking to a completely new level. The system analyzes and stores actions of each and every customer and optimizes the results to match the customer's preferences (e.g. if the customer is interested in red clothes, the red color will be promoted in different searches and collections).

Due to the way the Personalization Model works, it will at times override the Basic Search ranking in order to maximize relevance (e.g. a product with a higher Basic Search ranking might appear lower in the results due to the effect of Personalization), however products that are irrelevant to the search query will continue to be excluded from the results.

> `
👍 Want to know more?`
> `Merchandising Cloud's Machine Learning Developer Roman Grebennikov has written an extensive blog post detailing the workings of Findify's best-in-class AI algorithm. `[`Read it here.`](https://www.findify.io/insights/improving-ecommerce-sales-using-better-search-ranking)