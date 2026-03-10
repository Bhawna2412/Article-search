---
title: "Product Push API"
articleID: 2093
category: "API References > Product MM Push API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Product Push API

This guide covers how to push product and variant data to Maropost Merchandising Cloud (formerly Findify) using the Product Push API. It supports multiple operations and is designed to work with both single-market and multi-market configurations.

## Base URL

**POST** `https://pushapi.findify.io/v3/product`

Swagger Docs: [View Documentation](https://pushapi.findify.io/api-docs#/Product/ProductController_processRequest)

## Overview

Product Push API will allow you to push the Product Data to our system.

For Multi Market accounts it is required that you first send the initial product/variant data with the base language, currency and region (defined during onboarding), before you can proceed with other translations, currencies and inventories.

We treat each product as a collection of variants that are joined using the *item_group_id* property. This means that each variant can have it's own full set of fields, including *product_url*, *image_url*, *color*, *price* etc.

After the grouping phase is performed, all the variants with the same *item_group_id* will be joined together and their properties will be propagated in the grouped product. So when querying the Search API, you will receive a *color* field as an array of strings if there are multiple variants with different colors.

## Supported Operations

| Operation | Description |
| --- | --- |
| `upsert` | Create or replace products and variants with full data |
| `update` | Modify existing product or variant fields (partial update) |
| `delete` | Remove item groups from the index |

## Product Push API Payload Schema

```json
{
  "operation": "TYPE_OF_THE_OPERATION",
  "item_groups": [
    {
      "item_group_id": "Some Product ID",
      "variants": [
        {
          "id": "Some Variant ID",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Some Product/Variant Title",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": [
                    "Small",
                    "Medium",
                    "Large"
                  ],
                  "type": "stringArray"
                },
                {
                  "name": "rating",
                  "value": 4.5,
                  "type": "double"
                },
                {
                  "name": "ratings",
                  "value": [4, 4.2, 4.8],
                  "type": "doubleArray"
                },
                {
                  "name": "isNewProduct",
                  "value": true,
                  "type": "boolean"
                },
                {
                  "name": "price",
                  "value": 6,
                  "type": "double"
                },
                ...
              ]
            }
          ]
        },
        ...
      ]
    }
  ]
}
```

## Field Reference

| Field | Type | Options | Description |
| --- | --- | --- | --- |
| operation | String | `upsert`, `update`, `delete` | Type of the operation you want to execute. More on the types below. |
| item_groups.item_group_id | String | Product ID | Product ID in your system |
| variants | Object[] |  | Array of variant objects, more on Variants fields see below |

### Variants Fields

| Field | Type | Options | Description |
| --- | --- | --- | --- |
| id | String | Variant ID | Variant ID in your system |
| field_groups | Object[] |  | Array of fields sent on the variant level |
| groupType | String | `product`, `product_translation`, `regional_pricing`, `regional_inventory` | For initial Product insert you need to use: `product` groupType |
| fields | Object[] |  | Array of fields to be pushed |
| fields[].name | String |  | Product/variant field name |
| fields[].value | `String`, `String[]`, `Double`, `Double[]`, `Bool`, `Object[]` |  | Field Value |
| fields[].type | String | `string`, `stringArray`, `double`, `doubleArray`, `boolean`, `currency` | Type of the field |

## Upsert Operation

**Request:** POST

Using the *upsert* batch operation you can both create and update existing item groups/variants. If the item group/variant is not present on our end, it will be created, otherwise the item group’s/variant’s fields will be updated by our system. We use the **item_group_id** field that is provided to link the item group in the request to our internal product database, so you must provide the same **item_group_id** used when creating an item group if you need to update it. You must provide all required fields in the payload and any number of optional fields that your item group might have.

For *upsert* batch operation you need to provide all the required fields from the model and any number of optional fields if they are relevant to the product you are sending.

### Required Fields

| Field | Type | Value Sample | Description |
| --- | --- | --- | --- |
| title | string | High Heels | Product/variant Title |
| product_url | string | https://some_store.com/product_url | Product/variant URL |
| price | double \| doubleArray \| currency | 150 | Product/variant Price. Initially, you need to send the prices as `double` or `doubleArray`. When you add different currencies - you need send them via `currency` type (ref. [https://galaxy.maropost.com/kb/articles/2095-prices-push-api](https://galaxy.maropost.com/kb/articles/2095-prices-push-api)) |
| availability | string | in stock | `in stock` OR `out of stock` |
| description | string | Great High Heels! | Product Description |
| category | string | Women > Shoes ### Women > Shoes > Heels | Product Category: the only field that can be nested. The format is the following: `category1 > category2 > category3 ### category4 > category5 > category6 ### ...`, where `>` - is a subcategory indicator, `###`  is a delimiter in case you want to send multiple categories for a product |
| image_url | string | https://image.com/women-heels-url-full.jpg | Product/variant image |
| thumbnail_url | string | https://image.com/women-heels-url-thumb.jpg | Product/variant image, smaller version. Usually used for Autocomplete Product Matches |
| created_at | string | 2025-06-18T06:00:00Z | Product/variant creation date, must follow: ISO 8601 date standard |
| updated_at | string | 2025-06-18T06:00:00Z | Product/variant updated_at date, must follow: ISO 8601 date standard |

### Optional Fields

| Field | Type | Value Sample | Description |
| --- | --- | --- | --- |
| quantity | double | 10 | Product/variant quantity |
| color | string \| stringArray | Black | Product/variant colors |
| size | string \| stringArray \| double \| doubleArray | XL | Product/variant size |
| brand | string | MC | Product brand/vendor |
| sale_price | double \| doubleArray \| currency | 100 | Product/variant current sale price (discounted product/variant). Similar to `price` field, initial push with `double` or `doubleArray` type, then with `currency` type (ref. [https://www.notion.so/findify/Prices-Push-API-2169519114f08041a074e9bea67c01b3](https://www.notion.so/Prices-Push-API-2169519114f08041a074e9bea67c01b3?pvs=21)) |

> **Important:** **Choose the correct type** Before you send the initial data, make sure you choose the correct field type, as you will not be able to change it later, unless you fully re-upsert all products again. If you expect a field to have multiple string values, please choose `stringArray` instead of `string` when you send the initial product/variant data.

## Payload Sample

```json
{
  "operation": "upsert",
  "item_groups": [
    {
      "item_group_id": "Some Product ID",
      "variants": [
        {
          "id": "Some Variant ID",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Some Product/Variant Title",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": [
                    "Small",
                    "Medium",
                    "Large"
                  ],
                  "type": "stringArray"
                },
                {
                  "name": "rating",
                  "value": 4.5,
                  "type": "double"
                },
                {
                  "name": "ratings",
                  "value": [
                    4,
                    4.2,
                    4.8
                  ],
                  "type": "doubleArray"
                },
                {
                  "name": "isNewProduct",
                  "value": true,
                  "type": "boolean"
                },
                {
                  "name": "price",
                  "value": 6,
                  "type": "double"
                },
                ...
              ]
            }
          ]
        },
        ...
      ]
    }
  ]
}
```

## Update Operation

**Request:** POST

Unlike *upsert*, *update* operation allows only to update item groups that are already present in Merchandising Cloud - you cannot create add new item groups with update operation. However, the benefit of *update* is that all the fields of the payload, except for **item_group_id** (and variant **id** if **variants** array is present in the payload) are optional, so you can use this route to send partial item group/variant updates to our system. This can be useful when you just need to update the *price*, *availability*, or *quantity* of the item group and don't want to pass the whole object to Merchandising Cloud.

> **Note:** 🚧 Combine multiple item group updates into one request
>  If you need to update several fields of one item group, we recommend to send one update that includes all the fields that need to be updated for optimal performance and fast item group updates.

> **Note:** 🚧Removing a fields is not supported for update operation
>  If you want to remove a field from a product, rather than updating it - you need to use the **upsert** operation.

In the sample below, only the title of the variant: Some Variant ID of product: Some Product ID will be updated.

### Payload Sample

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
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Some Product/Variant Title",
                  "type": "string"
                },
                ...
              ]
            }
          ]
        },
        ...
      ]
    }
  ]
}
```

## Delete Operation

**Request:** POST

Merchandising Cloud will remove all item groups with the specified item group IDs if they are present in our system. For this operation you must provide the **item_group_ids** parameter in your request.

> **Note:** 🚧Removing variants is not supported by delete operation
>  If you need to remove one or more variants, you need to use the **upsert** operation.

### Payload Sample

```json
{
    "operation": "delete",
    "item_group_ids": [
        "Product ID 1", "Product ID 2", ... //string
    ]
}
```

## Product Sample Overview for Multimarket

Below is the sample of the product with 3 variants.

| **PRODUCT A** | **Base Language (English)** |
| --- | --- |
| Group_ID | 10001 |
| Category | Clothing & Accessories > Clothing > Dresses |
| Product_Title | Pleated Sleeve Tunic |
| Description | Great summer dress |
| image_url |  |
| product_url | [https://continental.market-demo.findify.io/collections/all/products/pleated-sleeve-tunic-in-white?variant=44096977207591](https://continental.market-demo.findify.io/collections/all/products/pleated-sleeve-tunic-in-white?variant=44096977207591) |
| thumbnail_url |  |
|  |  |
| Variant ID | V10001BS |
| Title | Pleated Sleeve Tunic in Blue |
| Color | Blue |
| Size | Small |
| Material | Cotton |
| Brand | Nike |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |
|  |  |
| Variant ID | V10001BM |
| Title | Pleated Sleeve Tunic in Blue |
| Color | Blue |
| Size | Medium |
| Material | Cotton |
| Brand | Nike |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |
|  |  |
| Variant ID | V10001GS |
| Title | Pleated Sleeve Tunic in Green |
| Color | Green |
| Size | Small |
| Material | Cotton |
| Brand | Nike |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |

| **PRODUCT B** | **Base Language (English)** |
| --- | --- |
| Group_ID | 20002 |
| Category | Clothing & Accessories > Trousers > Pants |
| Product_title | Winter Pants |
| Description | Warm & comfy winter pants |
| image_url | https://continental.market-demo.findify.io/cdn/shop/products/2014_11_17_Lana_Look29_03.jpg?v=1670348865 |
| product_url | https://continental.market-demo.findify.io/products/winter-pants-in-black?variant=44096983073063 |
| thumbnail_url | https://continental.market-demo.findify.io/cdn/shop/products/2014_11_17_Lana_Look29_03.jpg?v=1670348865 |
|  |  |
| Variant ID | V20002BS |
| Title | Winter Pants in Black |
| Color | Black |
| Size | Small |
| Material | Wool |
| Brand | Adidas |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |
|  |  |
| Variant ID | V20002GM |
| Title | Winter Pants in Gray |
| Color | Gray |
| Size | Medium |
| Material | Wool |
| Brand | Adidas |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |
|  |  |
| Variant ID | V20002RL |
| Title | Winter Pants in Red |
| Color | Red |
| Size | Large |
| Material | Wool |
| Brand | Adidas |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |

| **PRODUCT C** | **Base Language (English)** |
| --- | --- |
| Group_ID | 30003 |
| Product_Title | Distressed Motorcycle Jacket |
| Category | Assecories > Fashion > Jackets |
| Description | Great biker jacket for when you  want to feel cool |
| image_url | https://continental.market-demo.findify.io/cdn/shop/products/2015-02-15_Addis_Look_02_13216_3926.jpg?v=1670346993 |
| product_url | https://continental.market-demo.findify.io/products/black-leather-jacket?variant=44096900530471 |
| thumbnail_url | https://continental.market-demo.findify.io/cdn/shop/products/2015-02-15_Addis_Look_02_13216_3926.jpg?v=1670346993 |
|  |  |
| Variant ID | V30003BS |
| Title | Distressed Motorcycle Jacket in Black |
| Color | Black |
| Size | Small |
| Material | Leather |
| Brand |  |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |
|  |  |
| Variant ID | V30003BM |
| Title | Distressed Motorcycle Jacket in Brown |
| Color | Brown |
| Size | Medium |
| Material | Leather |
| Brand |  |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |
|  |  |
| Variant ID | V30003DGL |
| Title | Distressed Motorcycle Jacket in Dark Gray |
| Color | Dark Gray |
| Size | Large |
| Material | Leather |
| Brand |  |
| availability | in stock |
| created_at | 2014-04-22T06:00:00Z |
| updated_at | 2014-04-22T06:00:00Z |

## CURL Product A Push API request

```bash
curl --location 'https://pushapi.findify.io/v3/product' \
--header 'Authorization: Bearer ${ACCOUNT_PRIVATE_ACCESS_KEY}' \
--header 'Content-Type: application/json' \
--data '{
  "operation": "upsert",
  "item_groups": [
    {
      "item_group_id": "10001",
      "variants": [
        {
          "id": "V10001BS",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Pleated Sleeve Tunic in Blue",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Clothing & Accessories > Clothing > Dresses",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Blue",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Small",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Cotton",
                  "type": "double"
                },
                {
                  "name": "brand",
                  "value": "Nike",
                  "type": "string"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "7",
                  "type": "double"
                },
                {
                  "name": "description",
                  "value": "Great summer dress",
                  "type": "string"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/01052015_Lana_Look22_20293_0768.jpg?v=1670348741",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/collections/all/products/pleated-sleeve-tunic-in-white?variant=44096977207591",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/01052015_Lana_Look22_20293_0768.jpg?v=1670348741",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "id": "V10001BM",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Pleated Sleeve Tunic in Blue",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Clothing & Accessories > Clothing > Dresses",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Blue",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Medium",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Cotton",
                  "type": "double"
                },
                {
                  "name": "brand",
                  "value": "Nike",
                  "type": "string"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "2",
                  "type": "double"
                },
                {
                  "name": "description",
                  "value": "Great summer dress",
                  "type": "string"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/01052015_Lana_Look22_20293_0768.jpg?v=1670348741",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/collections/all/products/pleated-sleeve-tunic-in-white?variant=44096977207591",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/01052015_Lana_Look22_20293_0768.jpg?v=1670348741",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "id": "V10001GS",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Pleated Sleeve Tunic in Green",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Clothing & Accessories > Clothing > Dresses",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Blue",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Small",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Cotton",
                  "type": "double"
                },
                {
                  "name": "brand",
                  "value": "Nike",
                  "type": "string"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "11",
                  "type": "double"
                },
                {
                  "name": "description",
                  "value": "Great summer dress",
                  "type": "string"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/01052015_Lana_Look22_20293_0768.jpg?v=1670348741",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/collections/all/products/pleated-sleeve-tunic-in-white?variant=44096977207591",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/01052015_Lana_Look22_20293_0768.jpg?v=1670348741",
                  "type": "string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
'
```

## CURL Product B Push API request

```bash
curl --location 'https://pushapi.findify.io/v3/product' \
--header 'Authorization: Bearer ${ACCOUNT_PRIVATE_ACCESS_KEY}' \
--header 'Content-Type: application/json' \
--data '{
  "operation": "upsert",
  "item_groups": [
    {
      "item_group_id": "20002",
      "variants": [
        {
          "id": "V20002BS",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Winter Pants in Black",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Black",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Small",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Wool",
                  "type": "double"
                },
                {
                  "name": "brand",
                  "value": "Adidas",
                  "type": "string"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "8",
                  "type": "double"
                },
                {
                  "name": "title",
                  "value": "Winter Pants in Black",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Clothing & Accessories > Trousers > Pants",
                  "type": "string"
                },
                {
                  "name": "description",
                  "value": "Warm & comfy winter pants",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "111",
                  "type": "double"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2014_11_17_Lana_Look29_03.jpg?v=1670348865",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/products/winter-pants-in-black?variant=44096983073063",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2014_11_17_Lana_Look29_03.jpg?v=1670348865",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "id": "V20002GM",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Winter Pants in Gray",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Gray",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Medium",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Wool",
                  "type": "double"
                },
                {
                  "name": "brand",
                  "value": "Adidas",
                  "type": "string"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "11",
                  "type": "double"
                },
                {
                  "name": "title",
                  "value": "Winter Pants in Black",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Clothing & Accessories > Trousers > Pants",
                  "type": "string"
                },
                {
                  "name": "description",
                  "value": "Warm & comfy winter pants",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "111",
                  "type": "double"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2014_11_17_Lana_Look29_03.jpg?v=1670348865",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/products/winter-pants-in-black?variant=44096983073063",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2014_11_17_Lana_Look29_03.jpg?v=1670348865",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "id": "V20002RL",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Winter Pants in Red",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Red",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Large",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Wool",
                  "type": "double"
                },
                {
                  "name": "brand",
                  "value": "Nike",
                  "type": "string"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "4",
                  "type": "double"
                },
                {
                  "name": "title",
                  "value": "Winter Pants in Black",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Clothing & Accessories > Trousers > Pants",
                  "type": "string"
                },
                {
                  "name": "description",
                  "value": "Warm & comfy winter pants",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "111",
                  "type": "double"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2014_11_17_Lana_Look29_03.jpg?v=1670348865",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/products/winter-pants-in-black?variant=44096983073063",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2014_11_17_Lana_Look29_03.jpg?v=1670348865",
                  "type": "string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
'
```

## CURL Product C Push API request

```bash
curl --location 'https://pushapi.findify.io/v3/product' \
--header 'Authorization: Bearer ${PRIVATE_ACCESS_KEY}' \
--header 'Content-Type: application/json' \
--data '{
  "operation": "upsert",
  "item_groups": [
    {
      "item_group_id": "30003",
      "variants": [
        {
          "id": "V30003BS",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Distressed Motorcycle Jacket in Black",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Black",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Small",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Leather",
                  "type": "double"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "6",
                  "type": "double"
                },
                {
                  "name": "title",
                  "value": "Distressed Motorcycle Jacket in Black",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Assecories > Fashion > Jackets",
                  "type": "string"
                },
                {
                  "name": "description",
                  "value": "Great biker jacket for when you  want to feel cool",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "111",
                  "type": "double"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2015-02-15_Addis_Look_02_13216_3926.jpg?v=1670346993",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/products/black-leather-jacket?variant=44096900530471",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2015-02-15_Addis_Look_02_13216_3926.jpg?v=1670346993",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "id": "V30003BM",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Distressed Motorcycle Jacket in Brown",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Brown",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Medium",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Leather",
                  "type": "double"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "5",
                  "type": "double"
                },
                {
                  "name": "title",
                  "value": "Distressed Motorcycle Jacket in Black",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Assecories > Fashion > Jackets",
                  "type": "string"
                },
                {
                  "name": "description",
                  "value": "Great biker jacket for when you  want to feel cool",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "111",
                  "type": "double"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2015-02-15_Addis_Look_02_13216_3926.jpg?v=1670346993",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/products/black-leather-jacket?variant=44096900530471",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2015-02-15_Addis_Look_02_13216_3926.jpg?v=1670346993",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "id": "V30003DGL",
          "field_groups": [
            {
              "groupType": "product",
              "fields": [
                {
                  "name": "title",
                  "value": "Distressed Motorcycle Jacket in Dark Gray",
                  "type": "string"
                },
                {
                  "name": "color",
                  "value": "Dark Gray",
                  "type": "string"
                },
                {
                  "name": "size",
                  "value": "Large",
                  "type": "double"
                },
                {
                  "name": "material",
                  "value": "Leather",
                  "type": "double"
                },
                {
                  "name": "availability",
                  "value": "in stock",
                  "type": "string"
                },
                {
                  "name": "created_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "updated_at",
                  "value": "2014-04-22T06:00:00Z",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "9",
                  "type": "double"
                },
                {
                  "name": "title",
                  "value": "Distressed Motorcycle Jacket in Black",
                  "type": "string"
                },
                {
                  "name": "category",
                  "value": "Assecories > Fashion > Jackets",
                  "type": "string"
                },
                {
                  "name": "description",
                  "value": "Great biker jacket for when you  want to feel cool",
                  "type": "string"
                },
                {
                  "name": "price",
                  "value": "111",
                  "type": "double"
                },
                {
                  "name": "image_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2015-02-15_Addis_Look_02_13216_3926.jpg?v=1670346993",
                  "type": "string"
                },
                {
                  "name": "product_url",
                  "value": "https://continental.market-demo.findify.io/products/black-leather-jacket?variant=44096900530471",
                  "type": "string"
                },
                {
                  "name": "thumbnail_url",
                  "value": "https://continental.market-demo.findify.io/cdn/shop/products/2015-02-15_Addis_Look_02_13216_3926.jpg?v=1670346993",
                  "type": "string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
'
```

## FAQ

### How can I change a field type?

You must re-upsert all products with the correct field type.

### How do I confirm my data was received?

A `201 OK` response means the payload was accepted. If some data appears missing (e.g., translations), contact support for help verifying ingestion.

Contact [support@maropost.com](mailto:support@maropost.com) if you need help validating product payloads or building multimarket structures.