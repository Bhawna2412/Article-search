---
title: "Product Push API"
articleID: 2041
category: "Merchandising Cloud Dashboard > Multimarket"
knowledgeBase: "Merchandising Cloud"
---

# Product Push API

You can use the Product Push API to send product data updates directly to Merchandising Cloud in real-time, enabling immediate synchronization of inventory, pricing, and product changes without waiting for scheduled syncs. This API capability helps ensure search results always reflect current product availability and pricing, reducing customer frustration from outdated information and supporting Active Sync infrastructure that keeps your catalog data continuously accurate for optimal conversion.

Implementing the Product Push API helps maintain search accuracy for dynamic catalogs. You can trigger immediate updates when products change, integrating sync operations into your existing product management workflows—enabling real-time catalog synchronization that ensures customers always see accurate information, supporting trust and purchase completion while reducing support burden from inventory discrepancies or pricing errors in search results.

The product push API is used to sync data, with or without market contexts into Maropost Merchandising Cloud (formerly Findify). The push API is built on partial updates which allow you to only sync products that are updated, instead of the entire catalog through a bulk sync (e.g. JSON, CSV or XLM) and hence running a lot quicker syncs.

For this new Push-API, multiple endpoints are exposed

-   -     - 
  -     - 
  - 

## Item Group and Variant

We treat each product as a collection of variants that are joined using the *item_group_id* property. This means that each variant can have it's own full set of fields, including *product_url*, *image_url*, *color*, *price* etc.

After the grouping phase is performed, all the variants with the same *item_group_id* will be joined together and their properties will be propagated in the grouped product. So when querying the Search API, you will receive a *color* field as an array of strings if there are multiple variants with different colors.

All this means, that if you have variants that *own* specific properties, like *color* or *price*, you don't need to provide the values of such properties in the *fields* of the grouped item API request if they are present in the *variants* array.

## Field Groups

For flexibility, we divide the list of fields into field groups, that would allow for specific field groups to be sent to make it easier to upsert/update products via API.

- 
- 

We are working on adding a lot of additional group types to allow the segregation of fields update to make it easier to update fields originating from third party systems (such as reviews fields)

-   - 
  - 
  - 

## Upsert operation

Using the *upsert* batch operation you can both create and update existing item groups. If the item group is not present on our end, it will be created, otherwise the item group's fields will be updated by Merchandising Cloud. We use the **item_group_id** field that is provided to link the item group in the request to our internal product database, so you must provide the same **item_group_id** used when creating an item group if you need to update it. You must provide all required fields in the payload and any number of optional fields that your item group might have.

For *upsert* batch operation you need to provide all the required fields from the model and any number of optional fields if they are relevant to the product you are sending.

## Update operation

Unlike *upsert*, *update* operation allows only to update item groups that are already present in Merchandising Cloud - you cannot create add new item groups with update operation. However, the benefit of *update* is that all the fields of the payload, except for **item_group_id** (and variant **id** if **variants** array is present in the payload) are optional, so you can use this route to send partial item group updates to Merchandising Cloud. This can be useful when you just need to update the *price*, *availability*, or *quantity* of the item group and don't want to pass the whole object to Merchandising Cloud.

## Delete operation

Merchandising Cloud will remove all item groups with the specified item group IDs if they are present in our system. For this operation you must provide the **item_group_ids** parameter in your request.

## Request Samples

### Upsert: Product creation

JSON

```text
curl --location 'https://pushapi.staging.findify.io/product' \--header 'Content-Type: application/json' \--header 'Authorization: ••••••' \--data '{  "operation": "upsert",  "item_groups": [    {      "item_group_id": "test-6",      "field_groups": [        {          "groupType": "product",          "fields": [            { "name": "title", "value": "string", "type": "string" },            { "name": "description", "value": "string", "type": "string" },            { "name": "price", "value": "111", "type": "double" },            {              "name": "image_url",              "value": "http://test.com/imageURL",              "type": "string"            },            {              "name": "product_url",              "value": "http://test.com/productUrl",              "type": "string"            },            { "name": "category", "value": "CATEGORY", "type": "string" },            {              "name": "thumbnail_url",              "value": "http://test.com/thumbnailURL",              "type": "string"            },            { "name": "availability", "value": "in stock", "type": "string" },            {              "name": "created_at",              "value": "2019-06-08 03:52",              "type": "string"            },            {              "name": "updated_at",              "value": "2019-06-08 03:52",              "type": "string"            },            { "name": "sku", "value": "SKU", "type": "string" },            { "name": "brand", "value": "BRAND", "type": "string" },            { "name": "seller", "value": "SLLER", "type": "string" },            { "name": "sale_price", "value": "123", "type": "double" },            { "name": "cost", "value": "333", "type": "double" },            { "name": "size", "value": "Medium", "type": "string" },            { "name": "quantity", "value": "9000", "type": "double" },            {              "name": "reviews.average_score",              "value": "4.5",              "type": "string"            },            { "name": "reviews.count", "value": "200", "type": "string" }          ]        }      ],      "variants": [        {          "id": "test-5-2222",          "field_groups": [            {              "groupType": "product",              "fields": [                { "name": "title", "value": "string", "type": "string" },                { "name": "description", "value": "string", "type": "string" },                { "name": "price", "value": "111", "type": "double" },                {                  "name": "image_url",                  "value": "http://test.com/imageURL",                  "type": "string"                },                {                  "name": "product_url",                  "value": "http://test.com/productUrl",                  "type": "string"                },                { "name": "category", "value": "CATEGORY", "type": "string" },                {                  "name": "thumbnail_url",                  "value": "http://test.com/thumbnailURL",                  "type": "string"                },                {                  "name": "availability",                  "value": "in stock",                  "type": "string"                },                {                  "name": "created_at",                  "value": "2019-06-08 03:52",                  "type": "string"                },                {                  "name": "updated_at",                  "value": "2019-06-08 03:52",                  "type": "string"                },                { "name": "sku", "value": "SKU", "type": "string" },                { "name": "brand", "value": "BRAND", "type": "string" },                { "name": "seller", "value": "SLLER", "type": "string" },                { "name": "sale_price", "value": "123", "type": "double" },                { "name": "cost", "value": "333", "type": "double" },                { "name": "size", "value": "Medium", "type": "string" },                { "name": "quantity", "value": "9000", "type": "double" },                {                  "name": "reviews.average_score",                  "value": "4.5",                  "type": "string"                },                { "name": "reviews.count", "value": "200", "type": "string" }              ]            }          ]        }      ]    }  ]}'
```

### Update

JSON

```text
curl --location 'https://pushapi.staging.findify.io/product' \--header 'Content-Type: application/json' \--header 'Authorization: ••••••' \--data '{    "operation": "update",    "item_groups": [        {            "item_group_id": "test",            "field_groups": [                {                    "groupType": "product",                    "fields": [                        { "name": "title", "value": "string", "type": "string" }                    ]                }            ]        }    ]}'
```

### Delete

JSON

```text
curl --location 'https://pushapi.staging.findify.io/product' \--header 'Content-Type: application/json' \--header 'Authorization: ••••••' \--data '{    "operation": "delete",    "item_group_ids": [        "test"    ]}'
```

## Multimarket specific field groups request examples:

### MM - Translations field group example

JSON

```text
curl --location 'https://pushapi.staging.findify.io/product' \--header 'Content-Type: application/json' \--header 'Authorization: 6ff037ed-987b-4fac-b8c2-c59493745764' \--data '{  "operation": "update",  "item_groups": [    {      "item_group_id": "test-111111",      "variants": [        {          "id": "test-111111-1",          "field_groups": [            {              "groupType": "product_translation",              "groupName": "translations_fr",              "fields": [                {                  "name": "title",                  "value": "titleInFrench",                  "type": "string",                  "context": {                    "region": "FR",                    "locale": "fr"                  }                }              ]            },            {              "groupType": "product_translation",              "groupName": "translations_de",              "fields": [                {                  "name": "title",                  "value": "titleInGerman",                  "type": "string",                  "context": {                    "region": "DE",                    "locale": "de"                  }                }              ]            }          ]        }      ]    }  ]}'
```

### MM - Inventory field group example

JSON

```text
curl --location 'https://pushapi.staging.findify.io/product' \--header 'Content-Type: application/json' \--header 'Authorization: 6ff037ed-987b-4fac-b8c2-c59493745764' \--data '{  "operation": "update",  "item_groups": [    {      "item_group_id": "test-111111",      "variants": [        {          "id": "test-111111-1",          "field_groups": [            {          "groupType": "regional_inventory",          "groupName": "availabilityInFR", // This is free text used to create a bucket of fields within the index to be indentified more efficiently.          "fields": [            {              "name": "quantity",              "value": "123",              "type": "double",              "context": {                "region": "FR"              }            },            {              "name": "updated_at",              "value": "2024-10-16T14:22:28Z",              "type": "string",              "context": {                "region": "FR"              }            },            {              "name": "inventory_item_id",              "value": "secondary_ID",              "type": "string",              "context": {                "region": "FR"              }            }          ]        }          ]        }      ]    }  ]}'
```

### MM - Pricing field group example

```text
## MM - Pricing field group example````Text JSONcurl --location 'https://pushapi.staging.findify.io/product' \--header 'Content-Type: application/json' \--header 'Authorization: 6ff037ed-987b-4fac-b8c2-c59493745764' \--data '{  "operation": "update",  "item_groups": [    {      "item_group_id": "test-111111",      "variants": [        {          "id": "test-111111-1",          "field_groups": [            {          "groupType": "regional_pricing",          "groupName": "priceFR", // This is free text used to create a bucket of fields within the index to be indentified more efficiently.          "fields": [            {              "name": "price",              "value": { "value": 123, "currencyCode": "EUR" },              "type": "currency",              "context": {                "region": "FR"              }            }          ]        }          ]        }      ]    }  ]}'
```