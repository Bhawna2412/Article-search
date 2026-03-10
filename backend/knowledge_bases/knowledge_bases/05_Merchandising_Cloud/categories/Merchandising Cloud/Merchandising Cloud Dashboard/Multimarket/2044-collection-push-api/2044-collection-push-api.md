---
title: "Collection Push API"
articleID: 2044
category: "Merchandising Cloud Dashboard > Multimarket"
knowledgeBase: "Merchandising Cloud"
---

# Collection Push API

You can use the Collection Push API to programmatically create and manage Smart Collections, enabling automated collection setup and updates through your existing systems or workflows. This API capability helps scale collection management for stores with many collections, allowing you to integrate collection configuration with external product management systems, automate seasonal collection updates, or deploy collection strategies programmatically—supporting efficient merchandising operations at scale.

Leveraging the Collection Push API helps streamline collection management for complex merchandising strategies. You can automate collection creation based on business rules, sync collection configurations from external systems, or deploy collection updates across multiple markets simultaneously—enabling programmatic collection management that reduces manual effort while maintaining the AI-powered personalization and filtering that help improve collection page conversion rates.

The collection Push API allows merchant to set collections in their platform and sync them into Merchandising Cloud.

## COLLECTION endpoint

This endpoint allows the sync of collection data into Merchandising Cloud, it also allows the usage of multiple filter types to be able to create any collection of products needed.

It also provide the ability to send translated data in case of multiple collection slots per collection

This endpoint offers 2 operations

- 
- 

## Request Sample: Create/Update

JSON

```text
curl --location 'https://pushapi.staging.findify.io/collection' \--header 'Content-Type: application/json' \--header 'Authorization: ••••••' \--data '[    {        "filters": [            {                "operator": "AND",                "operands": [                    {                        "action": "include",                        "type": "category",                        "field": "category",                        "values": [                            "Parent category",                            "Child category"                        ]                    },                    {                        "action": "include",                        "type": "term",                        "field": "tags",                        "values": [                            "TAG_NAME"                        ]                    },                    {                        "action": "include",                        "type": "term",                        "field": "brand",                        "values": [                            "BRAND_NAME"                        ]                    },                    {                        "action": "include",                        "type": "range",                        "field": "price",                        "values": [                            {                                "to": 50.99                            }                        ]                    },                    {                        "action": "include",                        "type": "range",                        "field": "quantity",                        "values": [                            {                                "from": 2                            }                        ]                    },                    {                        "action": "exclude",                        "type": "contains-string",                        "field": "title",                        "values": [                            "STRING_TO_USE_FOR_FILTER"                        ]                    }                ]            }        ],        "localeUrls": [            {                "url": "URL_IN_SWEDISH",                "locale": "de"            },            {                "url": "URL_IN_FRENCH",                "locale": "fr"            }        ],        "externalCollection": { // Free JSON field, id should at the minimum be sent to be able to delete a collection by its external ID            "id": "123123"        },        "slot": "COLLECTION/CATEGORY NAME"    }]'
```

## Request Sample: Delete Collections

JSON

```text
curl --location --request DELETE 'https://pushapi.staging.findify.io/collection' \--header 'Content-Type: application/json' \--header 'Authorization: ••••••' \--data '["123123"]'
```