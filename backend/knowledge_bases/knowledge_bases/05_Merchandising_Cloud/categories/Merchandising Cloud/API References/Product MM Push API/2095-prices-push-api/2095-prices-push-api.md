---
title: "Prices Push API"
articleID: 2095
category: "API References > Product MM Push API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Prices Push API

This guide explains how to push region-specific pricing for product variants using the Prices Push API in Maropost Merchandising Cloud (formerly Findify).

## Base URL

**POST** `https://pushapi.findify.io/v3/product`

## Overview

This endpoint allows you to update prices for product variants based on region and currency. This works in combination with your Multi Market configuration.

> **Note:** **Note**: Before using the Prices Push API, you must first push both: Your Multi Market Configuration Initial Product & Variant data

## Payload Schema

```json
{
  "operation": "update",
  "item_groups": [
    {
      "item_group_id": "Some Product ID"
      "variants": [
        {
          "id": "Some Variant ID",
          "field_groups": [
            {
              "groupType": "regional_pricing", //must be regional_pricing
              "groupName": "price_${region_code}",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 100.00,
                    "currencyCode": "CURRENCY_CODE" //ISO 4217
                  },
                  "type": "currency",
                  "context": {
                    "region": "REGION_CODE" //defined in Multi Market configuration 
                  }
                },
                ...
              ]
            },
            ...
          ]
        },
        ...
      ]
    },
    ...
  ]
}
```

## Field Definitions

| Field | Type | Options | Description |
| --- | --- | --- | --- |
| operation | String | `update` | Type of the operation you want to execute, you need to use `update` for prices |
| item_groups.item_group_id | String | Product ID | Product ID in your system |
| variants | Object[] |  | Array of variant objects, more on Variants fields see below |

Variants Fields:

| Field | Type | Options | Description |
| --- | --- | --- | --- |
| id | String | Variant ID | Variant ID in your system |
| field_groups | Object[] |  | Array of fields sent on the variant level |
| groupType | String | `regional_pricing` | For Prices, you need to use: `regional_pricing` |
| groupName | String |  | Internal Price to Region name, follow this template: `price_${region_code}`, i.e. `price_se` |
| fields | Object[] |  | Array of price fields with different currencies |
| fields[].name | String | `price` | `price` field name |
| fields[].value | Object |  |  |
| fields[].value.value | Double |  | Specified currency value |
| fields[].value.currencyCode | String |  | Currency code, ISO 4217 standard |
| fields[].type | String | `currency` | Type of the field must be:`currency` |
| context | Object |  | Object for `context` |
| context.region | String |  | Region Code specified in the Multi Market configuration, i.e. SE, NO, US etc. |

## Sample Use Case – Variant Pricing Across Markets

Prices are defined per variant, across the applicable markets and regional currencies.

| Variant ID | **Market 1 - Nordics: EUR** | **Sweden: SEK** | **Norway: NOK** | **Denmark: DKK** | **Market 2 - Germany: EUR** | **Market 3 - Latin: EUR** | **France: EUR** | **Italy: EUR** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V10001BS | 7 | 70 | 77 | 56 | 7,7 | 7,7 | 9,24 | 7,392 |
| V10001BM | 2 | 20 | 22 | 16 | 2,2 | 2,2 | 2,64 | 2,112 |
| V10001GS | 11 | 110 | 121 | 88 | 12,1 | 12,1 | 14,52 | 11,616 |
| V20002BS | 8 | 80 | 88 | 64 | 8,8 | 8,8 | 10,56 | 8,448 |
| V20002GM | 11 | 110 | 121 | 88 | 12,1 | 12,1 | 14,52 | 11,616 |
| V20002RL | 4 | 40 | 44 | 32 | 4,4 | 4,4 | 5,28 | 4,224 |
| V30003BS | 6 | 60 | 66 | 48 | 6,6 | 6,6 | 7,92 | 6,336 |
| V30003BM | 5 | 50 | 55 | 40 | 5,5 | 5,5 | 6,6 | 5,28 |
| V30003DGL | 9 | 90 | 99 | 72 | 9,9 | 9,9 | 11,88 | 9,504 |

## Sample Payload

```json
{
  "operation": "update",
  "item_groups": [
    {
      "item_group_id": "10001",
      "variants": [
        {
          "id": "V10001BS",
          "field_groups": [
            {
              "groupType": "regional_pricing",
              "groupName": "price_se",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 70,
                    "currencyCode": "SEK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 7,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_no",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 77,
                    "currencyCode": "NOK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 7,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_dk",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 56,
                    "currencyCode": "DKK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 7,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_de",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 7.7,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "DE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_fr",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 9.24,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "FR"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_it",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 7.392,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "IT"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001BM",
          "field_groups": [
            {
              "groupType": "regional_pricing",
              "groupName": "price_se",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 20,
                    "currencyCode": "SEK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 2,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_no",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 22,
                    "currencyCode": "NOK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 2,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_dk",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 16,
                    "currencyCode": "DKK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 2,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_de",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 2.2,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "DE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_fr",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 2.64,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "FR"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_it",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 2.112,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "IT"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001GS",
          "field_groups": [
            {
              "groupType": "regional_pricing",
              "groupName": "price_se",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 110,
                    "currencyCode": "SEK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 11,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_no",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 121,
                    "currencyCode": "NOK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 11,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_dk",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 88,
                    "currencyCode": "DKK"
                  },
                  "type": "currency",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "price",
                  "value": {
                    "value": 11,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "SE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_de",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 12.1,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "DE"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_fr",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 14.52,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "FR"
                  }
                }
              ]
            },
            {
              "groupType": "regional_pricing",
              "groupName": "price_it",
              "fields": [
                {
                  "name": "price",
                  "value": {
                    "value": 11.616,
                    "currencyCode": "EUR"
                  },
                  "type": "currency",
                  "context": {
                    "region": "IT"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
} 
```

## FAQ

**What if I don’t send a price for a region or currency?**

The product may fall back to a default currency, but this is handled on the client side. Always verify the response from the Search API to ensure fallback logic works as expected.

Need support? Reach out to yourfriends@findify.io.