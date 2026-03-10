---
title: "Inventory Push API "
articleID: 2096
category: "API References > Product MM Push API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Inventory Push API 

This guide explains how to push region-specific inventory and availability for product variants using the Inventory Push API in Maropost Merchandising Cloud (formerly Findify).

## Base URL

**POST** `https://pushapi.findify.io/v3/product`

## Overview

This endpoint updates inventory, availability, and publication status for variants by region. It relies on your Multi Market Configuration and requires that product and variant data be pushed beforehand.

> **Note:** **Note**: Push both your Multi Market Configuration and initial Product/Variant data before using this endpoint.

## Payload Schema

```json
{
  "operation": "update",
  "item_groups": [
    {
      "item_group_id": "Some Product ID",
      "variants": [
        {
          "id": "Some Variant ID",
          "field_groups": [
            {
              "groupType": "regional_inventory",
              "groupName": "availability_${region_code}",
              "fields": [
                {
                  "name": "quantity",
                  "value": 10,
                  "type": "double",
                  "context": {
                    "region": "REGION_CODE" //defined in the Multi Market configuration
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",  //OR "out of stock"
                  "type": "string",
                  "context": {
                    "region": "REGION_CODE" //defined in the Multi Market configuration
                  }
                },
                {
                  "name": "published",
                  "value": true, //OR false
                  "type": "boolean",
                  "context": {
                    "region": "REGION_CODE" //defined in the Multi Market configuration
                  }
                },
                //optional
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "REGION_CODE" //defined in the Multi Market configuration
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BS",
                  "type": "string",
                  "context": {
                    "region": "REGION_CODE" //defined in the Multi Market configuration
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

## Field Definitions

| Field | Type | Options | Description |
| --- | --- | --- | --- |
| operation | String | `update` | Type of the operation you want to execute, you need to use `update` for inventory |
| item_groups.item_group_id | String | Product ID | Product ID in your system |
| variants | Object[] |  | Array of variant objects, more on Variants fields see below |

Variants Fields

| Field | Type | Options | Description |
| --- | --- | --- | --- |
| id | String | Variant ID | Variant ID in your system |
| field_groups | Object[] |  | Array of fields sent on the variant level |
| groupType | String | `regional_inventory` | For Inventory, you need to use: `regional_inventory` |
| groupName | String |  | Internal Availability to Region name, follow this template: `availability_${region_code}`, i.e. `availability_se` |
| fields | Object[] |  | Array of fields for inventory, see below |

Field: Quantity

| Field | Type | Value | Description |
| --- | --- | --- | --- |
| name | String | `quantity` | Name of the quantity field |
| value | Double |  | Products/variants quantity |
| type | String | `double` | Type of the quantity field |
| context.region | String |  | Region Code specified in the Multi Market configuration, i.e. SE, NO, US etc. |

Field: Availability 

| Field | Type | Value | Description |
| --- | --- | --- | --- |
| name | String | `availability` | Name of the Availability field |
| value | String | `in stock` OR `out of stock` | Defines if the product is in stock or OOS for the specified region. |
| type | String | `string` | Type of the Availabilityfield |
| context.region | String |  | Region Code specified in the Multi Market configuration, i.e. SE, NO, US etc. |

Field: Published

| Field | Type | Value | Description |
| --- | --- | --- | --- |
| name | String | `published` | Name of the Published field |
| value | Bool | `true` OR `false` \| `1` OR `0` | If the product is published within the specified region or not. If not, it will not be shown for this region. |
| type | String | `boolean` | Type of the Published field |
| context.region | String |  | Region Code specified in the Multi Market configuration, i.e. SE, NO, US etc. |

(Optional) Field: inventory_item_id

| Field | Type | Value | Description |
| --- | --- | --- | --- |
| name | String | `inventory_item_id` | Name of the inventory_item_id field |
| value | String |  | In case you have an inventory ID - you can send it to our system |
| type | String | `string` | Type of the inventory_item_id  field |
| context.region | String |  | Region Code specified in the Multi Market configuration, i.e. SE, NO, US etc. |

(Optional) Field: updated_at

| Field | Type | Value | Description |
| --- | --- | --- | --- |
| name | String | `updated_at` | Name of the updated_at field |
| value | String |  | Must follow ISO-8601, i.e. `2024-10-16T14:22:28Z` |
| type | String | `string` | Type of the updated_atfield |
| context.region | String |  | Region Code specified in the Multi Market configuration, i.e. SE, NO, US etc. |

## Sample Product Availability per Market

| **Product Availability** | **Nordics** | **Germany** | **Latin** |
| --- | --- | --- | --- |
| 30003 | Yes | No | Yes |
| 20002 | No | Yes | Yes |
| 10001 | Yes | Yes | No |

Availability reflects market-specific configurations and is not tied solely to inventory. Products may be restricted from markets for legal, licensing, or logistical reasons.

## Sample Product Inventory Configuration

You can set quantities per region, this will allow you precise control per country/region.

| Variant ID | **Sweden** | **Norway** | **Denmark** | **Germany** | **France** | **Italy** |
| --- | --- | --- | --- | --- | --- | --- |
| V10001BS | 20 | 12 | 10 | 1 | 1 | 2 |
| V10001BM | 14 | 14 | 4 | 2 | 12 | 14 |
| V10001GS | 9 | 8 | 7 | 3 | 10 | 13 |
| V20002BS | 10 | 10 | 16 | 8 | 7 | 15 |
| V20002GM | 19 | 22 | 21 | 12 | 3 | 15 |
| V20002RL | 12 | 17 | 25 | 15 | 1 | 16 |
| V30003BS | 22 | 21 | 21 | 10 | 1 | 11 |
| V30003BM | 26 | 20 | 18 | 6 | 13 | 19 |
| V30003DGL | 10 | 2 | 10 | 1 | 14 | 15 |

## Sample Product Payloads

**SE Availability and inventory**

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
              "groupType": "regional_inventory",
              "groupName": "availability_se",
              "fields": [
                {
                  "name": "quantity",
                  "value": 20,
                  "type": "double",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BS",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "SE"
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
              "groupType": "regional_inventory",
              "groupName": "availability_se",
              "fields": [
                {
                  "name": "quantity",
                  "value": 14,
                  "type": "double",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BM",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "SE"
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
              "groupType": "regional_inventory",
              "groupName": "availability_se",
              "fields": [
                {
                  "name": "quantity",
                  "value": 9,
                  "type": "double",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001GS",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "SE"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "SE"
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

**NO Availability and inventory**

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
              "groupType": "regional_inventory",
              "groupName": "availability_no",
              "fields": [
                {
                  "name": "quantity",
                  "value": 12,
                  "type": "double",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BS",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "NO"
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
              "groupType": "regional_inventory",
              "groupName": "availability_no",
              "fields": [
                {
                  "name": "quantity",
                  "value": 14,
                  "type": "double",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BM",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "NO"
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
              "groupType": "regional_inventory",
              "groupName": "availability_no",
              "fields": [
                {
                  "name": "quantity",
                  "value": 8,
                  "type": "double",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001GS",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "NO"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "NO"
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

**DK Availability and inventory**

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
              "groupType": "regional_inventory",
              "groupName": "availability_dk",
              "fields": [
                {
                  "name": "quantity",
                  "value": 10,
                  "type": "double",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BS",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "DK"
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
              "groupType": "regional_inventory",
              "groupName": "availability_dk",
              "fields": [
                {
                  "name": "quantity",
                  "value": 4,
                  "type": "double",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BM",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "DK"
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
              "groupType": "regional_inventory",
              "groupName": "availability_dk",
              "fields": [
                {
                  "name": "quantity",
                  "value": 7,
                  "type": "double",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001GS",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "DK"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "DK"
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

**DE Availability and inventory**

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
              "groupType": "regional_inventory",
              "groupName": "availability_de",
              "fields": [
                {
                  "name": "quantity",
                  "value": 1,
                  "type": "double",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BS",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "DE"
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
              "groupType": "regional_inventory",
              "groupName": "availability_de",
              "fields": [
                {
                  "name": "quantity",
                  "value": 2,
                  "type": "double",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BM",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "DE"
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
              "groupType": "regional_inventory",
              "groupName": "availability_de",
              "fields": [
                {
                  "name": "quantity",
                  "value": 3,
                  "type": "double",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001GS",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "DE"
                  }
                },
                {
                  "name": "published",
                  "value": true,
                  "type": "boolean",
                  "context": {
                    "region": "DE"
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

**FR Availability and inventory**

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
              "groupType": "regional_inventory",
              "groupName": "availability_fr",
              "fields": [
                {
                  "name": "quantity",
                  "value": 1,
                  "type": "double",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BS",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "published",
                  "value": false,
                  "type": "boolean",
                  "context": {
                    "region": "FR"
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
              "groupType": "regional_inventory",
              "groupName": "availability_fr",
              "fields": [
                {
                  "name": "quantity",
                  "value": 12,
                  "type": "double",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BM",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "published",
                  "value": false,
                  "type": "boolean",
                  "context": {
                    "region": "FR"
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
              "groupType": "regional_inventory",
              "groupName": "availability_fr",
              "fields": [
                {
                  "name": "quantity",
                  "value": 10,
                  "type": "double",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001GS",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "FR"
                  }
                },
                {
                  "name": "published",
                  "value": false,
                  "type": "boolean",
                  "context": {
                    "region": "FR"
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

**IT Availability and inventory**

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
              "groupType": "regional_inventory",
              "groupName": "availability_it",
              "fields": [
                {
                  "name": "quantity",
                  "value": 2,
                  "type": "double",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BS",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "published",
                  "value": false,
                  "type": "boolean",
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
              "groupType": "regional_inventory",
              "groupName": "availability_it",
              "fields": [
                {
                  "name": "quantity",
                  "value": 14,
                  "type": "double",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001BM",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "published",
                  "value": false,
                  "type": "boolean",
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
              "groupType": "regional_inventory",
              "groupName": "availability_it",
              "fields": [
                {
                  "name": "quantity",
                  "value": 13,
                  "type": "double",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "updated_at",
                  "value": "2024-10-16T14:22:28Z",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "inventory_item_id",
                  "value": "secondary_ID_for_V10001GS",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string",
                  "context": {
                    "region": "IT"
                  }
                },
                {
                  "name": "published",
                  "value": false,
                  "type": "boolean",
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