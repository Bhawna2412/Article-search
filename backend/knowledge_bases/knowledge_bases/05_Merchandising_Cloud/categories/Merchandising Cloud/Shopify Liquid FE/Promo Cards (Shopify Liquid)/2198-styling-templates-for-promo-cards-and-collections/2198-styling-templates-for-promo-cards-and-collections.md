---
title: "Styling Templates for Promo Cards and Collections"
articleID: 2198
category: "Shopify Liquid FE > Promo Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Styling Templates for Promo Cards and Collections

You can create styling templates for promo cards and collections to maintain consistent visual presentation across your promotional content. Template-based styling streamlines the process of creating new promotional elements while ensuring brand consistency across all marketing touchpoints.

Using styling templates for promo cards helps you efficiently deploy promotional content that maintains visual coherence with your brand guidelines. This template approach reduces the effort required to create new campaigns while ensuring promotional elements remain visually aligned, supporting faster campaign execution and consistent brand presentation.

We provides advanced solutions for search, merchandising, and recommendations tailored for ecommerce merchants. Our native Shopify app, built using the Liquid language, allows users to customize the appearance and behavior of Collection Grids and Promo Cards for different templates. This documentation will guide you through configuring these components.

## Collection Grid Template Configuration

Collection Grids can be customized for each specific template. If you have multiple collection templates, settings must be configured separately for each one. This flexibility allows you to tailor the appearance and behavior of collection grids to suit different templates.

![135e413eac02269b658387678928639a1d2115d2c87a022a51cd21a7ae9b0651-Screenshot_1_1.png](https://us.v-cdn.net/6038474/uploads/S7P04AY9QGDT/135e413eac02269b658387678928639a1d2115d2c87a022a51cd21a7ae9b0651-screenshot-1-1.png)

For example, two different collection templates can have distinct configurations, enabling a unique look and feel for each one.

![c7e597da65a6e1f57944fe432a548b09915337c6c77625d82d6b56a9e8255289-Screenshot_1_2.png](https://us.v-cdn.net/6038474/uploads/HSPWGRIZ6N86/c7e597da65a6e1f57944fe432a548b09915337c6c77625d82d6b56a9e8255289-screenshot-1-2.png)

## Promo Card Template Configuration

Similarly, Promo Cards can also be configured for individual templates. This allows you to design promo cards that align with the specific aesthetics and functionality of each template.

![6b370d07771420f86515a795905ce8702c8d818a597872db8a8b8921956edd7d-Screenshot_1_3.png](https://us.v-cdn.net/6038474/uploads/GZTEM47DGCZ1/6b370d07771420f86515a795905ce8702c8d818a597872db8a8b8921956edd7d-screenshot-1-3.png)
For instance, a single Promo Card in the Merchant Dashboard can appear differently across various templates, providing a customized user experience.

![13e38cda34a35215b1f6cb1278acd52a1fd7c60a6b98d846b50d37905b2a839c-Screenshot_1_4.png](https://us.v-cdn.net/6038474/uploads/JKOB6Z74V9EV/13e38cda34a35215b1f6cb1278acd52a1fd7c60a6b98d846b50d37905b2a839c-screenshot-1-4.png)

## Adjusting Styles

To adjust specific styles for a collection template, use the Section ID and add styles to the relevant `.css` files. This approach allows for granular control over the appearance of different sections within your templates.

### Example

Add the following CSS to your stylesheet to target a specific section ID:

CSS

```css
/* Example CSS for a specific section ID */#section-id-1234 .collection-grid-item {    background-color: #f5f5f5;    border-radius: 8px;}
```

![db981f3dcd117a02edb2c3f9562e8885a73d8b13644a28bd205bcf37c8382704-Screenshot_1_5.png](https://us.v-cdn.net/6038474/uploads/GCJH8QJGQBAK/db981f3dcd117a02edb2c3f9562e8885a73d8b13644a28bd205bcf37c8382704-screenshot-1-5.png)

By utilizing section IDs, you can ensure that each collection template and promo card has a distinct and tailored design that aligns with your brand's needs.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)