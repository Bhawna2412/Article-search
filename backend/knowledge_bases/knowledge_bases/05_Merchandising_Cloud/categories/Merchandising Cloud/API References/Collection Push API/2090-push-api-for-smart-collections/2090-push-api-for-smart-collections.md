---
title: "Push API for Smart Collections"
articleID: 2090
category: "API References > Collection Push API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Push API for Smart Collections

This guide describes how to use the Push API to create, update, or delete Smart Collections in Maropost Merchandising Cloud (formerly Findify). 

## Base URL

**POST / DELETE** `https://pushapi.findify.io/v3/collection`

Swagger Reference: [View Docs](https://pushapi.findify.io/api-docs#/Collection/CollectionController_UpsertCollections)

Ensure you have your `PRIVATE ACCESS KEY`. For details, see the [Authentication guide.](https://galaxy.maropost.com/kb/articles/2088-authentication)

## Overview

This endpoint lets you:

- Sync collection metadata and filters
- Use logical conditions to define collection rules
- Push translated URLs for multi-market setups

Supported operations:

- **POST** – Create or update a collection
- **DELETE** – Remove one or more collections by ID

## Insert / Update Operation

### Payload Scheme

```json
[
    {
        "filters": [ //list of filters
            {
                "operator": "AND",
                "operands": [
                    {
                        "action": "include",
                        "type": "category",
                        "field": "category", //category field name
                        "values": [
                            "Parent category",
                            "Child category"
                        ]
                    },
                    {
                        "action": "include",
                        "type": "term",
                        "field": "TEXT_BASED_FIELD",
                        "values": [
                            "TEXT_VALUE"
                        ]
                    },
                    {
                        "action": "include",
                        "type": "range",
                        "field": "NUMBER_BASED_FIELD",
                        "values": [
                            {
		                            "from": 10.99,
                                "to": 50.99
                            }
                        ]
                    },
                    {
                        "action": "exclude",
                        "type": "contains-string",
                        "field": "TEXT_BASED_FIELD",
                        "values": [
                            "STRING_TO_USE_FOR_FILTER"
                        ]
                    }
                ]
            }
        ],
        "localeUrls": [ //Applicable ONLY for Multi Market accounts
            {
                "url": "URL_IN_SPECIFIC_LANGUAGE",
                "locale": "sv" //need to provide a language locale
            }
        ],
        "externalCollection": { // Free JSON field, id should at the minimum be sent to be able to delete a collection by its external ID
            "id": "123123"
        },
        "slot": "COLLECTION_URL"
    }
]
```

### Filters []:

### Sample Request

```bash
curl --location '<https://pushapi.findify.io/v3/collection>' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: ••••••' \\
--data '[
    {
        "filters": [
            {
                "operator": "AND",
                "operands": [
                    {
                        "action": "include",
                        "type": "category",
                        "field": "category",
                        "values": [
                            "CATEGORY_1",
                            "CATEGORY_2",
                            ...
                        ]
                    },
                    {
                        "action": "include",
                        "type": "term",
                        "field": "tags",
                        "values": [
                            "TAG_NAME"
                        ]
                    },
                    {
                        "action": "include",
                        "type": "term",
                        "field": "brand",
                        "values": [
                            "BRAND_NAME"
                        ]
                    },
                    {
                        "action": "include",
                        "type": "range",
                        "field": "price",
                        "values": [
                            {
                                "to": 50.99
                            }
                        ]
                    },
                    {
                        "action": "include",
                        "type": "range",
                        "field": "quantity",
                        "values": [
                            {
                                "from": 2
                            }
                        ]
                    },
                    {
                        "action": "exclude",
                        "type": "contains-string",
                        "field": "title",
                        "values": [
                            "STRING_TO_USE_FOR_FILTER"
                        ]
                    }
                ]
            }
        ],
        "localeUrls": [ //Applicable for Multi Market only
            {
                "url": "URL_IN_SWEDISH",
                "locale": "sv"
            },
            {
                "url": "URL_IN_FRENCH",
                "locale": "fr"
            }
        ],
        "externalCollection": { // Free JSON field, id should at the minimum be sent to be able to delete a collection by its external ID
            "id": "123123"
        },
        "slot": "COLLECTION URL"
    }
]'
```

## Delete Operation

Provide an array of `externalCollection.id` values to remove matching collections.

### Sample cURL

```bash
curl --location --request DELETE '<https://pushapi.findify.io/v3/collection>' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: ••••••' \\
--data '["123123", "4564566", ...]'
```