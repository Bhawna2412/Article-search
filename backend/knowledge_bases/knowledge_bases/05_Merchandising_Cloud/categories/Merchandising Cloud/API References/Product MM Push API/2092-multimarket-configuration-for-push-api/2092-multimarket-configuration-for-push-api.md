---
title: "Multimarket Configuration for Push API"
articleID: 2092
category: "API References > Product MM Push API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Multimarket Configuration for Push API

This guide explains how to configure market settings in Maropost Merchandising Cloud (formerly Findify) via the Push API.

## Base URL

**POST** `https://pushapi.findify.io/v3/market-config/`

Swagger Docs: [View Documentation](https://pushapi.findify.io/api-docs#/Market%20Configuration/MarketConfigController_processRequest)

## Overview

Use this endpoint to define the structure of markets, regions, currencies, and languages in your Multimarket setup.

## Payload Schema

```json
//array of markets
"markets": [ 
    {
        //internal market name
        "name": "MARKET NAME",
        //internal market description
        "description": "MARKET DESCRIPTION",
        //whether the market is active or not
        "enabled": true,
        //internal Market ID
        "externalIdentifier": "NM01",
        //list of languages. Allowed languages are listed below
        "languages": [  
            "en",
            "sv"
        ],
        //list of regions that are defined for this market
        "regions": [
            {
                //region code
                "code": "SE",
                //internal name of the region
                "name": "Sweden",
                //list of currencies, must follow ISO 4217 Currency code standard (ref. https://www.iso.org/iso-4217-currency-codes.html)
                "currencies": [
                    "EUR",
                    "SEK"
                ]
            },
            ...
        ],
        //you must set one market to be a default market, true/false
        "defaultMarket": true
    },
    ...
 ]
```

### Definition of a Region

A **region** is a defined geographic or economic area (e.g., a country) used to segment pricing, availability, and currency options within a market. Each region:

- Is identified by a two-letter ISO 3166-1 country code (e.g., `SE` for Sweden).
- Must be assigned at least one supported currency in ISO 4217 format.
- Can share languages and currencies with other regions in the same market.
- Helps ensure accurate content delivery for pricing and availability in localized experiences.

## Supported Languages

For an exhaustive list of the languages we support, view our dedicated documentation here: [Supported Languages Documentation](https://galaxy.maropost.com/kb/articles/1985-supported-languages?utm_source=community-search&utm_medium=organic-search&utm_term=supported)

Below, you will find a selection of supported languages and their short codes. 

| Code | Language |  |
| --- | --- | --- |
| ar | Arabic |  |
| cz | Czech |  |
| da | Danish |  |
| de | German |  |
| en | English |  |
| es | Spanish |  |
| et | Estonian |  |
| fi | Finnish |  |
| fr | French |  |
| he | Hebrew |  |
| hu | Hungarian |  |
| id | Indonesian |  |
| it | Italian |  |
| ja | Japanese |  |
| lv | Latvian |  |
| nb | Norwegian Bokmål |  |
| nl | Dutch |  |
| nn | Norwegian Nynorsk |  |
| no | Norwegian |  |
| pl | Polish |  |
| pt | Portuguese |  |
| pt-br | Portuguese (Brazil) |  |
| ro | Romanian |  |
| ru | Russian |  |
| sk | Slovak |  |
| sl | Slovenian |  |
| sv | Swedish |  |
| tr | Turkish |  |
| zh-hans | Chinese |  |

## Market Structure Example

Below is an illustrative setup of three fictional markets used to simulate real-world ecommerce scenarios. These markets differ by region, language and currency.

### Market 1: Nordics

- Regions: Sweden, Norway, Denmark
- Languages: Swedish, English
- Market Currency: EUR
- Regional Currencies:  - Sweden: SEK
  - Norway: NOK
  - Denmark: DKK
- Default Market: true ✅

### Market 2: Germany

- Region: Germany
- Languages: German, English
- Currency: EUR
- Default Market: false ❌

### Market 3: Latin

- Regions: France, Italy
- Languages: French, English, Italian
- Currency: EUR
- Default Market: false ❌

## Sample CURL Request

```bash
curl --location 'https://pushapi.findify.io/v3/market-config' \
--header 'Authorization: Bearer ${ACCOUNT_PRIVATE_ACCESS_KEY}' \
--header 'Content-Type: application/json' \
--data '{
    "markets": [
        {
            "name": "Nordics",
            "description": "Nordics Market",
            "enabled": true,
            "externalIdentifier": "NM01",
            "languages": [
                "en",
                "sv"
            ],
            "regions": [
                {
                    "code": "SE",
                    "name": "Sweden",
                    "currencies": [
                        "EUR",
                        "SEK"
                    ]
                },
                {
                    "code": "NO",
                    "name": "Norway",
                    "currencies": [
                        "EUR",
                        "NOK"
                    ]
                },
                {
                    "code": "DK",
                    "name": "Denmark",
                    "currencies": [
                        "EUR",
                        "DKK"
                    ]
                }
            ],
            "defaultMarket": true
        },
        {
            "name": "Germany",
            "description": "German Market",
            "enabled": true,
            "externalIdentifier": "GM01",
            "languages": [
                "en",
                "de"
            ],
            "regions": [
                {
                    "code": "DE",
                    "name": "Germany",
                    "currencies": [
                        "EUR"
                    ]
                }
            ],
            "defaultMarket": false
        },
        {
            "name": "Latin",
            "description": "Latin Market",
            "enabled": true,
            "externalIdentifier": "LM01",
            "languages": [
                "en",
                "fr",
                "it"
            ],
            "regions": [
                {
                    "code": "FR",
                    "name": "France",
                    "currencies": [
                        "EUR"
                    ]
                },
                {
                    "code": "IT",
                    "name": "Italy",
                    "currencies": [
                        "EUR"
                    ]
                }
            ],
            "defaultMarket": false
        }
    ]
}'
```

Need help defining regions, languages, or default market structure? Contact [support@maropost.com](mailto:support@maropost.com).