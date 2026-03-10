---
title: "Multimarket FAQ"
articleID: 2038
category: "Merchandising Cloud Dashboard > Multimarket"
knowledgeBase: "Merchandising Cloud"
---

# Multimarket FAQ

You can find answers to common questions about multimarket implementation and management, helping you understand how to configure and optimize search and merchandising across multiple regions or languages. This resource helps clarify multimarket capabilities, configuration options, and best practices-supporting informed implementation decisions that enable effective international expansion while maintaining the AI-powered personalization that drives conversion in each market.

Understanding multimarket frequently asked questions helps anticipate and resolve common implementation challenges. You can learn about market configuration, language support, currency handling, and data synchronization-enabling smoother multimarket deployments that avoid common pitfalls while ensuring each regional market benefits from personalized search and merchandising tailored to local customer behavior and preferences.

![8beed66ba13f87d43ba057a715ed32a6b633be2218c396d8eddff1e09c5422f5-Picture_2.png](https://us.v-cdn.net/6038474/uploads/77LIP9LYHB34/8beed66ba13f87d43ba057a715ed32a6b633be2218c396d8eddff1e09c5422f5-picture-2.png)
Merchandising Cloud's powerful Multimarket capabilities effectively simplify the management of multiple ecommerce markets within a single environment. With Multimarket, merchants can efficiently handle different languages, currencies, warehouses, inventories, and product availability - all from one streamlined backend.

Whether you're expanding globally or optimizing operations locally, Multimarket provides the flexibility, scalability, and local relevance needed to succeed. It offers complete control, enabling you to run large global campaigns just as easily as highly targeted local variations - all while conveniently maintaining a unified overview of your entire operation.

This FAQ offers detailed answers to common questions about the Multimarket solution.

**Table of Contents**

1. General Overview
2. Technical Requirements & Performance
3. Markets & Regions
4. Languages & Translations
5. Merchandising Functionality
6. Inventory & Warehouses
7. Currency & Prices
8. Additional Topics

## General Overview

### **Q: What is Multimarket?**

*A: Multimarket is a modular solution that enables merchants to manage multiple markets (languages, currencies, inventories) within a single environment. It reduces operational complexity, improves scalability, and ensures localized experiences across diverse regions. Multimarket also gives merchants full control, making it easy to run large global campaigns as well as highly targeted local variations - all while maintaining a convenient, unified overview.*

### **Q: What are the benefits of using Multimarket for a global ecommerce business?**

*A: Multimarket enables local relevance (languages, currencies, product availability) while simplifying global management through a unified backend. It supports targeted campaigns, easier inventory control, faster expansion into new regions, and seamless customer experiences.*

### **Q: Can anyone use Multimarket?**

*A: Yes! Multimarket is designed to work with any platform. There are currently two implementations available: a platform-specific integration for Shopify, and a generic implementation using APIs that can be utilized by all other platforms.*

### **Q: Will Multimarket continue to evolve with new features?**

*A: Yes. Multimarket is not a feature but an expansion of Merchandising Cloud's core capabilities. All future features and improvements will build on top of this modular, multi-market structure.*

### **Q: How does Multimarket prepare my business for global expansion?**

*A: It simplifies managing multiple languages, currencies, and inventories, while offering localized merchandising, search, and personalization experiences. This ensures your store can scale internationally without losing local relevance.*

### **Q: Can Multimarket be expanded to include new markets as my business grows?**

*A: Absolutely. You can add or modify markets easily. For custom setups, this is handled through the Market Configuration Push API.*

### **Q: How much does it cost to use Merchandising Cloud Multimarket?**

*A: Early access is being rolled out for clients on our Enterprise plan. Talk to an account executive to learn how you can gain access.*

## Technical Requirements & Performance

### **Q: What are the technical requirements for implementing Multimarket?**

*A: The following requirements must be met:*

- Markets must be configured through the Market Configuration Push API. [[View Documentation Here](https://developers.findify.io/docs/multimarket-market-configuration-push-api)]
- Product and inventory data must be sent with relevant market context attached through the Product Push API.[[View Documentation Here](https://developers.findify.io/docs/multimarket-product-push-api)]
- *Context needs to be added to the front-end request [*[*View Documentation Here*](https://developers.findify.io/docs/multimarket-context-passing-from-fe)*]*
- *Context needs to be added to the analytics response [*[*View Documentation Here*](https://developers.findify.io/docs/multimarket-sending-analytics-with-context)*]*

> API documentation in Swagger: https://pushapi.findify.io/api-docs

### **Q: Are there any performance implications?**

*A: Multimarket engines are initially deployed to a single regional data warehouse (EU, AU, or US). Response times are optimized for the primary deployment region. Further deployment optimizations may be prioritized based on client needs.*

### **Q: How secure is the data managed by Multimarket?**

*A: Merchandising Cloud is 100% cloud-based with strict security protocols in place. In addition, we do not store any sensitive data, ensuring full GDPR compliance.*

## Markets & Regions

### **Q: What is a region?**

*A: A region is defined according to ISO 3166 standards - the same system used by most global platforms. ISO 3166 primarily lists countries, with 193 of 249 entries being sovereign states. However, to avoid any confusion, we use the term region rather than country for all entries.*

### **Q: How are regions defined?**

*A: Regions are technically defined through the Market Configuration Push API, where you map ISO 3166 codes to the appropriate regions used in your setup. This ensures consistency across systems and enables accurate configuration of warehouses, currencies, and other market-specific data.*

Read more how to define regions in Merchandising Cloud using the Market Configuration Push API. [[View Documentation Here](https://developers.findify.io/docs/multimarket-market-configuration-push-api)]

### **Q: How are markets defined?**

*A: Markets are defined by grouping regions together based on business needs. Merchants have complete flexibility in how they cluster regions - for example, some may define Germany, France, and Italy as separate markets, while others may group all of Europe into one market. Regions are tied to warehouses and currencies, ensuring accurate inventory availability and pricing across different areas. Languages are associated with markets after they are defined, but they are not part of the core market definition. This structure allows merchants to tailor their market setup to align with both operational logistics and commercial strategies.*

Read more how to define markets in Merchandising Cloud using the Market Configuration Push API. [[View Documentation Here](https://developers.findify.io/docs/multimarket-market-configuration-push-api)]

### **Q: How many markets can I have?**

*A: Early adopters can have up to 15 markets. The launch limit is set to 10, but this is subject to change as the platform evolves.*

### **Q: How many regions can I have?**

*A: Regions are defined according to the ISO 3166 standard. Initially, all 249 regions will be supported within a single account, but the number of supported regions may be revisited post-launch based on user needs.*

### **Q: Can I have overlapping regions, such as both regional and country-specific markets?**

*A: Currently, only country-level definitions are available. Smaller regional units are in development.*

### **Q: Are Merchandising Rules applied for Markets or Regions?**

*A: Rules are applied at the market level, offering easier management without needing to manage each individual region separately.*

### **Q: How does Multimarket handle tax variations between markets?**

*A: Tax management is handled at the platform level, but Multimarket respects the inventory and pricing setups to ensure market-specific compliance. Additionally, merchants can pass multiple pricing fields - for example, both tax-inclusive and tax-exclusive prices - depending on their specific operational needs.*

### **Q: Can I prioritize certain products in specific regions or markets?**

*A: Yes. Merchandising rules can prioritize products differently depending on the market context.*

## Languages & Translations

### **Q: How are languages defined?**

*A: Languages are defined according to the ISO 639 standard, ensuring consistency across systems.*

### **Q: How many languages does Multimarket support?**

*A: We support 127 languages, though the level of support (e.g., full translation or minimal interface translation) can vary. For a full list of the languages we support, and their support level, *[*view this documentation*](https://developers.findify.io/docs/supported-languages)*.*

### **Q: How many languages can I activate?**

*A: Depending on your plan, you can initially activate up to 20 languages.*

Read more how to add languages in Merchandising Cloud using the Market Configuration Push API. [[View Documentation Here](https://developers.findify.io/docs/multimarket-market-configuration-push-api)]

Read more about how to sync translation data to merchandising cloud using the Product Push API [[View Documentation Here](https://developers.findify.io/docs/multimarket-product-push-api#multimarket-specific-field-groups-request-examples)]

### **Q: Can I add custom languages that are not natively supported?**

*A: Not at this time. Only standard ISO-639-recognized languages are currently supported.*

### **Q: Can I manually override translations provided by Multimarket?**

*A: Translations can be controlled through the Product Push API. Manual overrides within the dashboard are not supported, as all product data is maintained through a single source of truth to ensure consistency and prevent conflicts across systems.*

### **Q: Does Multimarket automatically detect the shopper's preferred language?**

*A: Language detection is handled by the frontend or platform logic, not directly by Merchandising Cloud. The detected language is then passed to Merchandising Cloud with the request. This setup allows you to implement any combination of detection methods - such as language selectors, IP-based detection, or dedicated landing pages - depending on your business needs.*

### **Q: Can I store my translations in a separate system and integrate them with Multimarket?**

*A: Yes. External translation systems can push translations into Merchandising Cloud via the Product Push API. Multiple sources can be combined as long as the ProductGroupID and the VariantID are consistently applied - these fields are used to group the product data together.*

### **Q: Does Merchandising Cloud support multiple versions of the same language (e.g., American English vs British English)?**

*A: Currently, support for regional language variants is not available. However, the groundwork is already in place and can be expanded in the future based on client needs.*

### **Q: Can I have my collections in multiple languages?**

*A: Yes! Using the Collection Push API, you can add additional translations to your collections, ensuring they are locally relevant in every language.*

Read more about the[Collection Push API](https://developers.findify.io/docs/collection-push-api)

## Merchandising Functionality

### **Q: Can I apply merchandising rules across multiple markets at once?**

*A: Yes! Merchandising rules can now target specific markets or apply globally. We are currently upgrading our dashboard to add new, intuitive merchandising rules natively designed for Multimarket use cases.*

### **Q: Can I pin products differently in different markets?**

*A: Yes. Pinning is now market aware. You can pin different products for a specific market without affecting others.*

### **Q: How does Multimarket handle seasonal campaigns that vary by region?**

*A: You can set up market-specific merchandising rules and collections to support regional seasonality, holidays, and trends.*

## Inventory & Warehouses

### **Q: How does Multimarket manage multiple warehouses and inventory control?**

*A: Inventory is managed at two levels. First, product availability can be defined per market. If a product is set to be excluded from a market, no other actions can accidentally cause it to appear, ensuring 100% compliance with the intended inventory strategy.*

*Second, warehouses are mapped to regions rather than markets, allowing inventory to be managed at the most local level possible. This provides maximum granularity for shipping strategies and ensures products are fulfilled in line with what fits best for the merchant.*

### **Q: Can I set different inventory rules for different markets or regions?**

*A: Yes. You can map specific warehouses to regions, allowing tailored inventory control.*

Read more how to define warehouses in Merchandising Cloud using the Market Configuration Push API. [[View Documentation Here](https://developers.findify.io/docs/multimarket-market-configuration-push-api)]

Read more about how to sync quantity data to merchandising cloud using the Product Push API [[View Documentation Here](https://developers.findify.io/docs/multimarket-product-push-api#mm---inventory-field-group-example)]

### **Q: How does Multimarket handle situations where certain products are only available in specific markets?**

*A: Through the availability settings, products can be excluded from markets where they are not sold.*

### **Q: Can I control which warehouse ships to which market?**

*A: Yes, and in fact, this control is applied at an even lower level - regions. This control happens via custom warehouse-region mappings for custom integrations.*

Read more how to map warehouses in Merchandising Cloud using the Market Configuration Push API. [[View Documentation Here](https://developers.findify.io/docs/multimarket-market-configuration-push-api)]

### **Q: How frequently does Multimarket update inventory data?**

*A: For custom setups, inventory updates occur in real-time via the Push API. To maintain optimal system performance, especially for high-frequency environments, it is recommended to implement relevant trigger points for when updates are sent.*

*Updates are batched in groups of up to 1,000 records. To avoid unnecessary processing and network load, it is best practice to filter out irrelevant quantity updates - for example, avoid pushing minor stock changes that will not meaningfully impact product visibility on the product listing page (PLP) or in search results. Introducing threshold values (e.g., only sending updates when stock levels cross a specific limit) can help minimize unnecessary API calls.*

*While these optimizations are especially important for merchants operating at large update volumes, they are still recommended for lower-frequency merchants to maintain overall system efficiency.*

## Currency & Prices

### **Q: How are currencies defined?**

*A: Currencies are defined according to the ISO 4217 standard, ensuring compatibility across ecommerce platforms.*

### Q: How are currencies configured?

Currencies are configured using the Market Configuration Push API

Read more how to define currencies in Merchandising Cloud using the Market Configuration Push API. [[View Documentation Here](https://developers.findify.io/docs/multimarket-market-configuration-push-api)]

Read more about how to sync price data to merchandising cloud using the Product Push API [[View Documentation Here](https://developers.findify.io/docs/multimarket-product-push-api#mm---pricing-field-group-example)]

### **Q: How many currencies can Multimarket handle simultaneously?**

*A: Each region supports one primary currency. Additionally, you can define a fallback currency at the market level, which will be used if no region-specific price is available. This setup provides flexibility while ensuring consistent pricing across different regions and markets.*

### **Q: How does Multimarket keep currency exchange rates up to date?**

*A: Exchange rates are passed dynamically through the Push API.*

### **Q: Can I set different pricing strategies for different markets?**

*A: Yes. You can define unique prices per market by sending the relevant pricing information through the Product Push API.*

### **Q: How does Multimarket manage price adjustments based on FX rates?**

*A: Exchange rates can be provided dynamically in the payload or synced through integration to maintain up-to-date market pricing.*

### **Q: Can I apply discounts or promotions that are specific to a particular market?**

*A: Yes. Discounts and promotions can be applied at either the regional or market level by including them as part of the pricing fields sent through the Product Push API.*

## Additional Topics

### **Q: Can I manage both B2B and B2C markets with Multimarket?**

*A: Yes, you can run separate B2B and B2C accounts with Merchandising Cloud, both on top of a multi-market setup.*

### **Q: Does Multimarket work for B2B use cases?**

*A: Multimarket works with B2B & B2C use cases in an international context (e.g., localized catalogs, different currencies, and market-specific pricing), but there is also additional work ongoing to maximize the application for B2B. The core of this is to add the dimension of segments on top of markets, to achieve the same dynamic capabilities (product availability and specific price lists) not just for geographies but also for merchant-defined segments. This work is still ongoing and is expected to be released during 2025.*

### **Q: Will analytics show data per market?**

*A: Yes. The revamped dashboard (coming soon) will display analytics segmented by market, providing deeper insights into market-specific performance.*