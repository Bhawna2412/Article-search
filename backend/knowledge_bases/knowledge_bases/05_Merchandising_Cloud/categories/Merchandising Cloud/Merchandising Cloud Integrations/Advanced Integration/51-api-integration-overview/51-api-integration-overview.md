---
title: "API Integration Overview"
articleID: 51
category: "Merchandising Cloud Integrations > Advanced Integration"
knowledgeBase: "Merchandising Cloud"
---

# API Integration Overview

Understanding API integration fundamentals helps you leverage the full capabilities of merchandising and search APIs. When you understand how APIs power search, recommendations, and merchandising features, you can implement more sophisticated ecommerce experiences, which tends to enhance conversion rates through better technical implementation of product discovery capabilities.

API integration knowledge enables you to build customized ecommerce experiences that align with your specific business needs. This helps you create differentiated shopping experiences and optimize technical performance, supporting better conversion outcomes through well-architected search and merchandising implementations that leverage API capabilities effectively.

Overall steps for the API integration:

- generate feed (or use platform integrations that already exist)
- create an account with Maropost Merchandising Cloud (formerly Findify)
- choose which capabilities you want to use: Search, Autocomplete, Collections, Recommendations
- integrate Analytics

-- all events from [Feedback API](https://developers.findify.io/reference/feedback-api)
- validate with Merchandising Cloud team that we get all events properly
- go live

## Generate Feed[https://developers.findify.io/docs/api-integration-overview#generate-feed](https://developers.findify.io/docs/api-integration-overview#generate-feed)

You can refer to [Custom](https://developers.findify.io/docs/integrations-custom-steps) integration for feed generation or utilize one of the existing integrations that we have: [Shopify](https://developers.findify.io/docs/shopify) , [Neto](https://developers.findify.io/docs/intgrations-neto) , [BigCommerce](https://developers.findify.io/docs/bigcommerce).

## Integrate Analytics[https://developers.findify.io/docs/api-integration-overview#integrate-analytics](https://developers.findify.io/docs/api-integration-overview#integrate-analytics)

Analytics are an integral part of Merchandising Cloud that allow our ML and Personalization algorithms to operate. It is paramount that you integrate all the analytics events properly.

Some of the events rely on the request-id property that you will receive after performing a request to our backend. This helps us bind the response that we have sent with the actions that user has performed (e.g. clicked on a product in the search results).

Some of the events play a lesser role in the personalization (e.g. click-redirect event that happens when you click on a search suggestion that leads to a redirect), but it's still good to have them as in the future we might rely on such events for new features.

## API Features Controlled via Merchant Dashboard[https://developers.findify.io/docs/api-integration-overview#api-features-controlled-via-merchant-dashboard](https://developers.findify.io/docs/api-integration-overview#api-features-controlled-via-merchant-dashboard)

**Page Redirects**

After setting up a page redirect, you can observe *redirect* property present in both autocomplete and search responses. You can utilize this data to redirect the user to a certain page.

**Banners**

After setting up a banner for search or collection, the API response will contain *banner* property with the details of a banner that can help you render it on the page.

**Dynamic Recommendation Filters**

Dynamic recommendation filters (happens when you choose ' Currently viewed' option in the recommendation filter setup) relies on the values sent from the frontend. If you want to utilize this ability, you will need to send the filter values in the recommendation request.

## Caching Responses[https://developers.findify.io/docs/api-integration-overview#caching-responses](https://developers.findify.io/docs/api-integration-overview#caching-responses)

We strongly advice against caching responses from Merchandising Cloud as it will nullify the effect of ML and personalization.

## Existing SDKs[https://developers.findify.io/docs/api-integration-overview#existing-sdks](https://developers.findify.io/docs/api-integration-overview#existing-sdks)

We have an existing SDK written for JS ([Github: Findify JS SDK](https://developers.findify.io/reference/github-findify-js-sdk)) environments and several helper libraries that can help you build a JS integration and some React-specific libraries, if you are working in React environment.