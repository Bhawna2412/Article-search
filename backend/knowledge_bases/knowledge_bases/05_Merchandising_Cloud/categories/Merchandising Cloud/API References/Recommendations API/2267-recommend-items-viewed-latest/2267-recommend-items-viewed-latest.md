---
title: "/recommend/items/viewed/latest"
articleID: 2267
category: "API References > Recommendations API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# /recommend/items/viewed/latest

## Overview

Get personalized product recommendations based on the latest items viewed by the user. This endpoint returns a list of recommended products tailored to the user's recent browsing history.

## Endpoint

```bash
POST https://api-v3.findify.io/v3/recommend/items/viewed/latest
```

## Authentication

This endpoint requires an API key to be sent in the request headers:

```bash
X-Key: YOUR_API_KEY
```

## Request Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `t_client` | date-time | Yes | - | Timestamp when the request is sent from the browser |
| `user` | object | Yes | - | User identification object |
| `user.uid` | string | Yes | - | User ID (max 32 characters) |
| `user.sid` | string | Yes | - | Session ID (max 32 characters) |
| `user.email` | string | No | - | User email address |
| `user.ip` | string | No | - | User IP address |
| `user.ua` | string | No | - | User agent string |
| `user.lang` | array of strings | No | - | User language preferences |
| `offset` | integer | No | 0 | Pagination offset |
| `limit` | integer | No | 5 | Maximum results to return (max: 20) |
| `callback` | string | No | - | JSONP callback function name |
| `log` | boolean | No | false | Enable request logging |
| `label` | string | No | - | Recommendation widget label for analytics tracking in Merchant Dashboard |

## Response

### Success Response (200)

Returns a recommendation response with metadata and recommended items.

### Response Fields

| Field | Type | Description |
| --- | --- | --- |
| `meta` | object | Response metadata |
| `meta.limit` | integer | Number of items returned |
| `meta.offset` | integer | Pagination offset |
| `meta.user_id` | string | User identifier |
| `meta.total` | integer | Total number of available items |
| `meta.rid` | string | Request ID for tracking |
| `items` | array of objects | Recommended product items |
| `items[].id` | string | Product ID |
| `items[].title` | string | Product title |
| `items[].description` | string | Product description |
| `items[].price` | array of numbers | Product price(s) |
| `items[].compare_at` | integer | Original price for comparison |
| `items[].discount` | array of integers | Discount amounts |
| `items[].image_url` | string | Primary product image URL |
| `items[].thumbnail_url` | string | Thumbnail image URL |
| `items[].product_url` | string | Product page URL |
| `items[].availability` | boolean | Product availability status |
| `items[].brand` | string | Product brand |
| `items[].category` | array of objects | Product categories |
| `items[].sku` | array of strings | Product SKUs |
| `items[].tags` | array of strings | Product tags |
| `items[].rating_score` | integer | Product rating score |
| `items[].created_at` | string | Product creation timestamp |

## Code Examples

### Shell

```bash
curl --request POST \
  --url https://api-v3.findify.io/v3/recommend/items/viewed/latest \
  --header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "lang": ["en-GB"],
      "uid": "test1",
      "sid": "ssid",
      "email": "test@test.com",
      "ip": "192.168.0.1",
      "ua": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
    },
    "t_client": 1484742065791,
    "offset": 0,
    "limit": 5,
    "log": false,
    "label": "latest-recommendation"
  }'
```

### JavaScript (SDK)

Please include the SDK script, which you can find here: https://github.com/findify/javascript-sdk

```javascript
var client = FindifySDK.init({
  key: '2e963f3e-38bd-4c00-9636-c00e48945eb7',
  user: {
    uid: 'test1',
    sid: 'ssid',
    email: 'test@test.com'
  },
  log: false
});
var request = {
  offset: 0,
  limit: 5,
  label: 'latest-recommendation'
};
client.recommendations('latest', request).then(function (response) {
  console.log(response);
});
```

### JavaScript (Node.js)

```javascript
var request = require("request");
var options = {
  method: 'POST',
  headers: {
    "X-key": "2e963f3e-38bd-4c00-9636-c00e48945eb7"
  },
  url: 'https://api-v3.findify.io/v3/recommend/items/viewed/latest',
  body: {
    user: {
      lang: ['en-GB'],
      uid: 'test1',
      sid: 'ssid',
      email: 'test@test.com',
      ip: '192.168.0.1',
      ua: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    },
    t_client: 1484742065791,
    offset: 0,
    limit: 5,
    log: false,
    label: 'latest-recommendation'
  },
  json: true
};
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
        'email' => 'test@test.com',
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
    'limit' => 5,
    'log' => false,
    'label' => 'latest-recommendation'
));
try {
    $result = $api_instance->recommendItemsViewedLatestPost($recommendation);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->recommendItemsViewedLatestPost: ', $e->getMessage(), PHP_EOL;
}
?>
```