---
title: "/content/{source}"
articleID: 2064
category: "API References > Content Push API"
knowledgeBase: "Merchandising Cloud"
---

# /content/{source}

Content source operations let you create, update, and delete content items through upsert and delete batch operations, with required fields including id, title, and url. You can add optional fields like images and descriptions that automatically display in search results and autocomplete, helping ensure content is presented attractively to customers.

The API supports flexible content items with custom fields while handling up to 6MB payloads per request. This enables you to manage diverse content types—from blog posts to video content—and keep your searchable content synchronized with your content management system, which helps ensure customers always discover current, relevant information alongside products.

## Payload Structure

```typescript
{  
  "operation": "upsert" | "delete",  
  "items"?: ContentItem[],  
  "ids"?: string[]  
}
```

You can see an example payload structure above.

2 basic batch operations are supported at the moment: *upsert* and *delete*.

## Upsert Operation

Using the *upsert* batch operation you can both create and update existing items. If the item is not present on Merchandising Cloud's end, it will be created, otherwise the item's fields will be updated by Merchandising Cloud (formerly Findify). We use the **id** field that is provided to link the item in the request to our internal content database, so you must provide the same **id** used when creating an item if you need to update it. You don't need to specify which fields to update, Merchandising Cloud will calculate the difference automatically. For this operation you must provide the **items** array with the following structure

```typescript
interface ContentItem {
  id: string,
  title: string,
  url: string,
  image_url?: string, // optional field; used to show image in Search and Autocomplete
  description?: string, // optional field; shown in the Content Card by default
  [optional_field_name]: string | number | boolean | string[] | number[]
}
```

There are 3 required fields that **must** be present in the item that is part of the *upsert* operation: *id*, *title*, *url*.

> **Note:** **image_url and description** If you are using MJS and provide these fields in the content item, MJS will automatically display the image and description in Autocomplete and Search results

Apart from the 3 required fields, you can provide as many optional fields as you want or need as long as they conform to the supported field types.

> **Note:** 🚧 At the moment we don't support objects or nested objects as allowed types of content items

## Delete operation

Merchandising Cloud will remove all content items with the specified IDs if they are present in our system. For this operation you must provide the **ids** parameter in your request.

### Path Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | string | Yes | - | Source ID of the integration as provided in the Merchant Dashboard |

### Request Body Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `operation` | string | Yes | - | Operation type. Either 'upsert' or 'delete' |
| `ids` | array of strings | No | - | Must be present for 'delete' operation. IDs of items to remove. |
| `items` | array | No | - | Must be present for 'upsert' operation. Array of items to upsert in the system |

### Request Headers

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | string | Yes | - | Private Access Key provided from the Merchant Dashboard |

## Credentials

Header 2e963f3e-38bd-4c00-9636-c00e48945eb7

## Code Examples

### Shell

```bash
--request POST \
--url https://push.findify.io/prod/v2/content/test \
--header "Authorization: Bearer 2e964f3e-38bd-4c00-9636-c00e48945e7" \
--header "Content-Type: application/json" \
--data '{"operation": "upsert", "items": [{"id": "test-1", "url": "https://example.com", "title": "Test Item", "tags": ["tag1"]}}]}' \
PHP
```

### PHP

```php
<?php

require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://push.findify.io/prod/v2/content/source', [

  'headers' => [

    'Authorization' => 'Bearer 2e963f3e-38bd-4c00-9636-c00e48945eb7',

    'accept' => 'application/json',

    'content-type' => 'application/json',

  ],

]);

echo $response->getBody();
```