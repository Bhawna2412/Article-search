---
title: " Market Configuration Push API"
articleID: 2040
category: "Merchandising Cloud Dashboard > Multimarket"
knowledgeBase: "Merchandising Cloud"
---

#  Market Configuration Push API

You can use the Market Configuration Push API to programmatically manage multimarket settings, enabling automated configuration updates across markets without manual dashboard intervention. This API capability helps scale international operations efficiently by allowing you to sync market configurations from external systems, deploy updates across multiple markets simultaneously, or integrate market management into existing workflows-supporting operational efficiency for complex multi-region ecommerce implementations.

Leveraging the Market Configuration API helps streamline multimarket management for large-scale operations. You can automate market setup, sync configurations across similar markets, or integrate market management with your existing ecommerce infrastructure-enabling programmatic control that reduces manual effort while maintaining consistent search and merchandising capabilities across all markets that support local conversion optimization.

In order to configure a multimarket environment within Merchandising Cloud, a merchant must prepare their Merchandising Cloud internal configuration to define the markets and the details needed per market;

This is a prerequisite to sending multimarket data.

This API endpoint will be used to allow merchants to send their market definitions and configurations;

Sending this config will be a prerequisite to sending MM field groups as the index needs this data to index products in markets internally.

> This payload is used as upsert, so the full request will be the source of truth;To delete a market just remove it from the payload and send the request again

```plaintext
curl --location 'https://pushapi.staging.findify.io/market-config' \--header 'Content-Type: application/json' \--header 'Authorization: 6ff037ed-987b-4fac-b8c2-c59493745764' \--data '{  "markets": [    {      "name": "Europe Market Test",      "description": "Europe",      "enabled": true,      "externalIdentifier": "123123123",      "languages": ["de", "fr", "en"],      "regions": [        {          "code": "DE",          "name": "Germany",          "warehouses": [],          "currencies": ["EUR"]        },        {          "code": "SE",          "name": "Sweden",          "warehouses": [],          "currencies": ["EUR"]        },        {          "code": "FR",          "name": "France",          "warehouses": [],          "currencies": ["EUR"]        }      ],      "defaultMarket": true    }  ]}'
```

## Related Articles

**Personalization & AI:**

- [Multimarket Overview](https://galaxy.maropost.com/kb/articles/2037-multimarket-overview)
- [Multimarket Faq](https://galaxy.maropost.com/kb/articles/2038-multimarket-faq)
- [Multimarket Translations](https://galaxy.maropost.com/kb/articles/2039-multimarket-translations)
- [Personalized Search](https://galaxy.maropost.com/kb/articles/1977-personalized-search)
- [Supported Languages](https://galaxy.maropost.com/kb/articles/1985-supported-languages)