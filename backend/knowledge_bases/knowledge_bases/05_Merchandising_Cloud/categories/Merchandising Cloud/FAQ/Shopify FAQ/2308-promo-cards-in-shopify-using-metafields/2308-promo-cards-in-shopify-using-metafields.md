---
title: "Promo Cards in Shopify Using Metafields"
articleID: 2308
category: "FAQ > Shopify FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# Promo Cards in Shopify Using Metafields

## #1. What Are Promo Cards?

Promo cards are non product assets displayed alongside products within the grid. The most common types of assets are Images, Text, CTAs, & Links, but can also include GIFs for a more dynamic experience.

- The use cases are many, and include for example:
- Highlighting new assortments/categories.
- Pushing shoppers to campaign pages.
- Storytelling around material, processes, or origins.
- Displaying promotions to drive behavior e.g, free shipping above a set limit.

## #2. Input Values

In Merchandising Cloud best practice, we utilize the following input values to enable a wide set of different use cases. If unpopulated, a field will not appear - therefore it is not necessary to utilize all of them at the same time.

Input Values that can be utilized:

- **Position:** Where in the grid the card should be displayed. #1 = first, etc.
- **Image URL:** Image displayed. We advise this be hosted within Shopify.
- ** Overlay:** Should there be a transparent color overlay? Stated as RGBA color.
- ** Target URL: **Should the area be clickable, and where should it then lead?
- ** Header: **Main message.
- ** Top-header: **Text shown above header.
- ** Sub-header: **Text shown below header.
- ** CTA: "Button" **displayed with call to action.
- ** Footer: **Text shown below the image area.

## #3. Requirements To Apply This Guide

- This guide is applicable for Shopify only.
- This integration requires the merchant to set up the necessary data and populate the promo cards through the use of metafields.
- This solution is built for individual collection control. Bulk management can however be utilized by bulk editing the input values in metafields.

## #4. Time Estimates

- **Set up in Shopify:** 1 hour
- **Integration: ** 1 hour
- **Styling:** 5-15 hours
- **Populating Cards:** *Depends on the scope*

## #5. Overview Of Integration Steps

Step 1: Set up required metafield structure (merchant)
Step 2: Populate at least one card
Step 3: Make the data available
Step 4: Integrate front end activation through Merchandising Cloud DevTools
Step 5: Styling

## Step 1: Set Up Required Metafield Structure (Merchant)

In order to manage metafields in Shopify, you need the capability in place.
For this overview we have utilized the 'Custom Fields' app.

> 👍 Choice of Meta Fields App
> The following guide is done using the 'Custom Fields' app but meta fields are stored in Shopify so please use the meta fields app you prefer. The UX of the dashboard setup might alter, but functionality in your store will be the same.

![0d80bad-__2021-03-24__11.24.49.png](https://us.v-cdn.net/6038474/uploads/1XA02V0VTPEG/0d80bad-2021-03-24-11-24-49.png)
![271c7dc-__2021-03-24__11.25.02.png](https://us.v-cdn.net/6038474/uploads/LA30JRR2U8M8/271c7dc-2021-03-24-11-25-02.png)
Enter the app, ensure you are adding data on a collection level, and set up custom fields. These fields will later be used to populate the cards with all necessary information *(Images, text, links etc.)*

![19de429-__2021-03-24__11.26.01.png](https://us.v-cdn.net/6038474/uploads/2U261DX3Q8GH/19de429-2021-03-24-11-26-01.png)
![f760721-__2021-03-24__11.26.15.png](https://us.v-cdn.net/6038474/uploads/A4P2KVGZ5QNZ/f760721-2021-03-24-11-26-15.png)
Define the **Field Collection Label** *(e.g. Findify Promo Cards)* and add the required fields.

![b32ea21-__2021-03-24__11.27.29.png](https://us.v-cdn.net/6038474/uploads/XXG7GZ11DJ8N/b32ea21-2021-03-24-11-27-29.png)
![6dcf2c0-Promo_Schema.PNG](https://us.v-cdn.net/6038474/uploads/TYQ4YR0A0XOA/6dcf2c0-promo-schema-png.png)
You have now set up the fields that are required.
The next step is to start populating the fields with specific Promo Card data.

## Step 2: Populate At Least One Card

Go back to the Shopify Dashboard and visit a specific collection page.
Products > Collections > "Collection Name"

![c90c1fb-__2021-03-24__11.28.21.png](https://us.v-cdn.net/6038474/uploads/7ADXQALRMJDY/c90c1fb-2021-03-24-11-28-21.png)
Populate the custom fields you previously set up.

![4080abf-__2021-03-24__11.28.33.png](https://us.v-cdn.net/6038474/uploads/IZANVGC56B76/4080abf-2021-03-24-11-28-33.png)
![36f2c18-__2021-03-24__11.29.33.png](https://us.v-cdn.net/6038474/uploads/K0C24PG7XJ9H/36f2c18-2021-03-24-11-29-33.png)
This card is created populating the following data:

![c326637-Displayed_Card.png](https://us.v-cdn.net/6038474/uploads/N6JGTC1EVOXH/c326637-displayed-card.png)
![51766f4-Card_1.PNG](https://us.v-cdn.net/6038474/uploads/2RUEXB0F9A0Q/51766f4-card-1-png.png)

## Step 3: Make The Data Available

In the opened window you can edit the items which will be shown on collection pages.

Then you need to add some code to your collection template. You need to go to the theme files and edit code.

![19023d3-__2021-03-24__11.30.03.png](https://us.v-cdn.net/6038474/uploads/F7VXYQWCNYJQ/19023d3-2021-03-24-11-30-03.png)

Open "Templates" and choose "collection.liquid" file. Add this code into findify-fallback container.

```applescript
<div class="findify-promo-cards">
      <script data-collection-json>
          {{ collection.metafields.custom_fields["field_collection"] | json }}
      </script>
     </div>
```

![Image](https://files.readme.io/b0b6daa-__2021-03-24__11.33.14.png)
Don't forget to save your changes!

## Step 4: Integrate Front End Activation Through Merchandising Cloud DevTools

The promo cards are activated by adding a standard code into the MJS for your store.
Merchandising Cloud’s team will be happy to assist with this task.

## Step 5: Styling

Each component (e.g. Title & Sub-header) can be styled freely utilizing the DevTools.

However, each component will be shown with a consistent style across cards.
Changing the styling between cards is a complex task.

If you want to be able to apply alternative styling (e.g. two different styles for the header) it is much easier to utilize different fields and style each one differently. For example, the field "Header" is used for the standard appearance of the header and the field "top-header" for the alternative style.