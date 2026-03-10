---
title: "Banners"
articleID: 2033
category: "Merchandising Cloud Dashboard > Merchandising"
knowledgeBase: "Merchandising Cloud"
---

# Banners

You can display targeted banners in search results or collection pages based on specific queries or categories, enabling contextual promotional messaging that aligns with customer search intent.

This capability helps you promote relevant sales, highlight featured categories, or communicate important information at moments when customers are actively engaged in product discovery-potentially improving promotional effectiveness and conversion through timely, relevant messaging.

Configuring banner campaigns helps you deliver strategic visual communication within the search and browsing experience. You can set up query-specific or collection-specific banners with targeted messaging, control timing and frequency, and measure banner performance-enabling data-driven promotional strategies that complement search personalization while maintaining focus on products, supporting both brand communication and the conversion-oriented experience customers expect.

## What are Banners?

Banners are promotional graphics or images that appear on an ecommerce website driving shoppers towards a specific brand, product, or range.

![4db9f0c-Banners.png](https://us.v-cdn.net/6038474/uploads/XLEJYF03DOUC/4db9f0c-banners.png)

## How to Set Up Banners

Go to the Merchant Dashboard and navigate to 'Search > Banners'.

Click on the blue button on the top right of the screen that says 'Create New'.

Next, you will be prompted to name your banner, if you wish, for internal purposes. Then you can upload the image which is to become your banner.

Thirdly, you define what search terms you want to lead to this banner, and then you are given the option to include a link. This means that every time a shopper clicks on the link, they are brought to a predefined address. This can be to a blog post, or a smart collection, a search results page, or any other page the merchant desires.

![675c81d-Banner_creation_.png](https://us.v-cdn.net/6038474/uploads/ANY5UD3EACH1/675c81d-banner-creation.png)

## Why Are Banners Useful?

The main reason merchants create banners for search terms is because shoppers who search have a very high level of intent and merchants want to capture this - and capitalize on it.

Let's say, for example, you're a shop that sells gaming equipment. A shopper goes to your site and types in Pokemon, looking for Pokemon playing cards.

That indicates a very high level of intent. The shopper is essentially coming into your store and telling your sales person: "Hey, I want to buy Pokemon cards".

A merchant can target this intent and create banners, or informational images, to help these customers purchase a brand, a product, or a range they would like to promote.

In this case, perhaps it's a curated range of Pokemon cards, or it could be a sale on a particular item or collection.

![5737768-inked-gaming-banner.png](https://us.v-cdn.net/6038474/uploads/74WUR8CR1DB0/5737768-inked-gaming-banner.png)
*An example of a banner in action on client Inked Gaming's site.*

## How to add a Banner to a Zero Results Page

> **Note:** Components: [components/Banner/index.ts](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Banner/index.ts)

In order to make banners appears on the zero results page, you need to edit 'components/Banner/index.ts' component:

TypeScript:

```plaintext
/** * @module components /Banner */import React from 'react';import { connectBanner } from '@findify /react-connect';import { compose, setDisplayName, withPropsOnChange } from 'recompose';import withTheme from 'helpers/withTheme';import view from 'components/Banner/view';import styles from 'components/Banner/styles.css';export default compose(  setDisplayName('Banner'),  withTheme(styles),  connectBanner,  // we need to add this withPropsOnChange handler  withPropsOnChange(['banner'], ({ banner }) => {    if (banner) {      return banner;    }    const searchWidget = window.findify.widgets.findByType('search')[0];    return {      banner: searchWidget && searchWidget.agent.response.get('banner')    }  }))(view);
```