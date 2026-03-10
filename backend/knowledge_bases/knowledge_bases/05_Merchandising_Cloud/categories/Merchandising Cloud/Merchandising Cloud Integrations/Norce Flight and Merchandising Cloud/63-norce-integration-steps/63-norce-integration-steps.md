---
title: "Norce Integration Steps"
articleID: 63
category: "Merchandising Cloud Integrations > Norce Flight and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# Norce Integration Steps

Following Norce integration steps helps you successfully implement search and merchandising features within the Norce platform. When you follow platform-specific guidance, you can deploy capabilities more efficiently and avoid common integration issues, which supports faster realization of conversion benefits from improved product discovery and merchandising capabilities in your Norce store.

Norce-specific integration guidance enables successful platform implementations. This helps you leverage Norce's architecture effectively while deploying search and merchandising features, supporting better conversion outcomes through properly integrated product discovery capabilities that work seamlessly within Norce's ecommerce framework.

This article outlines the step-by-step process to integrate **Norce** with **Maropost Merchandising Cloud**. Whether you're syncing product data, enabling personalized search, or configuring advanced merchandising, this guide will walk you through the key technical and dashboard-level actions required for a successful connection.

## Step 1: Generate the Product Feed[https://developers.findify.io/docs/norce-flight#step-1-generate-the-product-feed](https://developers.findify.io/docs/norce-flight#step-1-generate-the-product-feed)

We utilize Norce's [Hyperdrive](https://hyperdrive.jetshop.io/) feature to access product information. In order to configure the hyperdrive feed, please follow these steps:

**A. Log in to **[**Hyperdrive**](https://hyperdrive.jetshop.io/)**.****
**
**B. Set up a new channel:**

![78a5523-1.PNG](https://us.v-cdn.net/6038474/uploads/KUH4407DXAO7/78a5523-1-png.png)
**C. Select the Merchandising Cloud (formerly Findify) Format:**

![c690aa2-2.png](https://us.v-cdn.net/6038474/uploads/EA76HT8RA51H/c690aa2-2.png)
**D. Map required and optional fields:**

> Read About Required & Optional FieldsFeed Specifications

![c040cf8-3.PNG](https://us.v-cdn.net/6038474/uploads/T0XATBQPIL0Z/c040cf8-3-png.png)

## Step 2: Share Product Feed & Onboard in Merchandising Cloud's System[https://developers.findify.io/docs/norce-flight#step-2-share-product-feed--onboard-in-findifys-system](https://developers.findify.io/docs/norce-flight#step-2-share-product-feed--onboard-in-findifys-system)

From Hyperdrive, copy the feed URL and share with Merchandising Cloud.

![e130058-4.png](https://us.v-cdn.net/6038474/uploads/1V2VVU2OZ1HX/e130058-4.png)
![977](https://files.readme.io/e130058-4.png)
Requirements To Onboard The Store

- **Store URL: ***e.g. *[*http://findify.Norce.io/*](http://findify.norce.io/)**Contact:***Name & Email***Store Currency ***e.g. SEK***Store Language***e.g. Swedish***Feed URL:***See above*

**ShopId:** Used to run the automatic collection sync *(See *[*below*](https://developers.findify.io/docs/Norce-flight#step-3-set-up-smart-collections)*)*

## Step 3: Set up Smart Collections[https://developers.findify.io/docs/norce-flight#step-3-set-up-smart-collections](https://developers.findify.io/docs/norce-flight#step-3-set-up-smart-collections)

**Setup:** Share the Shop-ID with Merchandising Cloud and we will set up the Importer.
**Ongoing Import:** Runs automatically once a day.

## Step 4:Install the Flight Front-End (MJS)[https://developers.findify.io/docs/norce-flight#step-4install-the-flight-front-end-mjs](https://developers.findify.io/docs/norce-flight#step-4install-the-flight-front-end-mjs)

**Install Merchandising Cloud:**[Follow these instructions to run the installation](https://github.com/findify/react-bundle#installation)

**Integrate Collections:**[Follow these instructions to run the installation](https://github.com/findify/react-bundle#smart-collection)

**Integrate Recommendations:**[Follow these instructions to run the installation](https://github.com/findify/react-bundle#recommendation)

**Please Note**

The MJS is a prebuilt front-end library with all assets needed to run Merchandising Cloud.

All components in the library are fully customizable to match desired brand experience.

This step is not applicable for API integrations where the front-end is built specifically for the merchant. For API documentation, please read more [here](https://developers.findify.io/reference#getting-started).

## Step 5: Add Analytics Tracking[https://developers.findify.io/docs/norce-flight#step-5-add-analytics-tracking](https://developers.findify.io/docs/norce-flight#step-5-add-analytics-tracking)

Please follow these steps to integrate the analytics tracking across the site for Merchandising Cloud to perform optimally:

[**Analytics**](https://github.com/findify/react-bundle#analytics)

- #1. [Update Cart Event](https://github.com/findify/react-bundle#update-cart-event)
- #2. [Purchase Event](https://github.com/findify/react-bundle#purchase-event)
- #3. [View Page Event](https://github.com/findify/react-bundle#view-page-event)
- #4. [Product Click Event](https://github.com/findify/react-bundle#product-click-event)

Please Add All Analytics Trackers

In order for Merchandising Cloud to work optimally, all trackers need to be in place

## Step 6: Populate Recommendations[https://developers.findify.io/docs/norce-flight#step-6-populate-recommendations](https://developers.findify.io/docs/norce-flight#step-6-populate-recommendations)

Once your Merchandising Cloud account is onboarded, you will get access to the dashboard where you can review analytics, merchandise, and populate recommendations.

**Recommendations**:

Read more about recommendations [here](https://developers.findify.io/docs/norse-integrating-recommendations).