---
title: "Push API for Multimarket"
articleID: 2091
category: "API References > Product MM Push API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Push API for Multimarket

This is guide will help you setup and send Product updates via Push API for Multimarket accounts.

Make sure you have the `PRIVATE ACCESS KEY` from here: [Authentication Doc](https://galaxy.maropost.com/kb/articles/2088-authentication)

## Base URL

**POST **[`https://pushapi.findify.io/v3/${endpoint}`](https://pushapi.findify.io/${endpoint})

## Workflow

The initial setup for Multimarket accounts consists of 3 steps:

1. Send the Markets Configuration. Before you send the product data to our system, you must first provide your Multimarket configuration to our system. You only need to send the configuration during the initial setup, unless you have updated your Multimarket setup (i.e. added new language, region or currency) - then you need to send an update market configuration.
2. Send the Product Data for default region, currency and language.
3. Send Translations, send prices and inventory.

## Sections

1. Market Config (endpoint: `/market-config`)
2. Send initial Product Data (endpoint: `/product`)
3. Send Translations (endpoint: `/product`)
4. Send Prices (endpoint: `/product`)
5. Send Inventory (endpoint: `/product`)