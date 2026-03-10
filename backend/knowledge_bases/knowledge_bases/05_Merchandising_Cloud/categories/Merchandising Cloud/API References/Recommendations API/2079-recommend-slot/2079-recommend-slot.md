---
title: "/recommend/{slot}"
articleID: 2079
category: "API References > Recommendations API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# /recommend/{slot}

## Overview

Get the list of items for the specific recommendation slot.

You can pass an array of rules to the widget to filer widget results.

An example of rules object for different types of data:

```javascript
[{
  type: 'text',
  name: 'brand',
  values: [{value: ['Some-Test-Brand']}, {value: ['Some-Other-Brand']}]
}, {
  type: 'range',
  name: 'price',
  values: [{from: 10}, {to: 20}, {from: 10, to: 20}]
}, {
  type: 'category',
  name: 'category',
  values: [{value: ['Top-Level']}, {value: ['Top-Level', 'Second-level']}]
}]
```

### Path Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `slot` | string | Yes | Recommendation slot |

### Request Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `t_client` | date-time | Yes | - | Timestamp when the request is sent |
| `user` | object | Yes | - | User identification object |
| `user.uid` | string | Yes | - | User ID (max 32 characters) |
| `user.sid` | string | Yes | - | Session ID (max 32 characters) |
| `user.email` | string | No | - | User email address |
| `user.ip` | string | No | - | User IP address |
| `user.ua` | string | No | - | User agent string |
| `user.lang` | array of strings | No | - | User language preferences |
| `item_id` | string | No | - | Single item identifier |
| `item_ids` | array of strings | No | - | Multiple item identifiers |
| `offset` | integer | No | 0 | Pagination offset |
| `callback` | string | No | - | JSONP callback function name |
| `log` | boolean | No | - | Enable request logging |
| `rules` | array of objects | No | - | Rules to filter recommendation results |
| `rules[].action` | string | No | - | Action to perform on matching products |
| `rules[].type` | string | No | - | Filter type (text, range, category) |
| `rules[].name` | string | No | - | Field name to filter on |
| `rules[].values` | array of objects | No | - | Filter values |

## Response

### Success Response (200 OK)

#### Response Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `meta` | object | - | Response metadata |
| `meta.limit` | integer | 0 | Maximum number of results |
| `meta.offset` | integer | 0 | Result offset for pagination |
| `meta.user_id` | string | - | User identifier |
| `meta.total` | integer | 0 | Total number of results |
| `meta.rid` | string | - | Request identifier |
| `items` | array of objects | - | Recommended items |
| `items[].id` | string | - | Item identifier |
| `items[].product_url` | string | - | Product page URL |
| `items[].title` | string | - | Product title |
| `items[].description` | string | - | Product description |
| `items[].image_url` | string | - | Product image URL |
| `items[].thumbnail_url` | string | - | Product thumbnail URL |
| `items[].price` | array of numbers | - | Product price(s) |
| `items[].discount` | array of integers | - | Discount amounts |
| `items[].availability` | boolean | true | Product availability status |
| `items[].brand` | string | - | Product brand |
| `items[].category` | array of objects | - | Product categories |
| `items[].sku` | array of strings | - | Product SKU(s) |
| `items[].tags` | array of strings | - | Product tags |
| `items[].quantity` | integer | 0 | Available quantity |
| `items[].variants_ids` | array of strings | - | Product variant identifiers |
| `items[].color_variants` | integer | 0 | Number of color variants |
| `items[].created_at` | string | - | Product creation timestamp |
| `items[].stickers` | object | - | Product stickers/badges |

## Code Examples

### Authentication

Include your API key in the `X-Key` header: `2e963f3e-38bd-4c00-9636-c00e48945eb7`

### Shell

```bash
--request POST \
--url https://api-v3.findify.io/v3/recommend/findify-home-rec-1 \
--header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" \
--header "Content-Type: application/json" \
--data '{"user":{"lang":["en-GB"],"uid":"test1","sid":"ssid","email":"test@test .com","ip":"192.168.0.1","ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"},"t_client":1484742065791,"offset":0,"log":false}'
```

### JavaScript (SDK)

```javascript
//Please, don't forget to include the SDK script
//Which you can find here: https://github.com/findify/javascript-sdk
```

```javascript
var client = FindifySDK.init({
    key: '2e963f3e-38bd-4c00-9636-c00e48945eb7',
    user: {
      uid: 'test1',
      sid: 'ssid',
      email: 'test@test .com'
    },
    log: false
  });
```

```javascript
var request = {
slot: 'product-findify-rec-1'
};
```

```javascript
client.recommendations('predefined', request).then(function(response) {
console.log(response);
});
```

### JavaScript (Node.js)

```javascript
var request = require("request");
```

```javascript
var options = {
  method: 'POST',
  headers: {
    "X-key": "2e963f3e-38bd-4c00-9636-c00e48945eb7"
  },
  url: 'https://api-v3.findify.io/v3/recommend/findify-home-rec-1',
  body: {
    user: {
      lang: ['en-GB'],
      uid: 'test1',
      sid: 'ssid',
      email: 'test@test .com',
      ip: '192.168.0.1',
      ua: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    },
    t_client: 1484742065791,
    offset: 0,
    limit: 5,
    log: false
  },
  json: true
};
```

```javascript
request(options, function(error, response, body) {
if (error) throw new Error(error);
console.log(body);
});
```

### PHP

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: key
Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-Key', '2e963f3e-38bd-4c00-9636-c00e48945eb7');
$api_instance = new Swagger\Client\Api\DefaultApi();
$recommendation = new \Swagger\Client\Model\GenericRecommendationRequest(array(
    'user' => array(
        'uid' => 'test1',
        'sid' => 'ssid',
        'email' => 'test@test .com',
        'ip' => '192.168.0.1',
        'ua' => 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
        'lang' => array(
            'en-US',
            'en-GB',
            'no'
        )
    ),
    't_client' => '1484741395471',
    'offset' => 0,
    'log' => false
));
try {
    $result = $api_instance->recommendSlotPost('findify-home-rec-1', $recommendation);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->recommendSlotPost: ', $e->getMessage(), PHP_EOL;
}
?>
```