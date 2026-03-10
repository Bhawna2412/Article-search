---
title: "/recommend/items/{item_id}/bought/bought"
articleID: 2084
category: "API References > Recommendations API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# /recommend/items/{item_id}/bought/bought

> **Note:** This is a low level API, we recommend you to use the simple recommendation route to enable easy configuration via the Merchant Dashboard.

Get a list of items that have been purchased together with the currently viewed item in the same session by other customers.

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
| `item_ids` | string | Yes | Item IDs separated by comma |

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
| `offset` | integer | No | 0 | Pagination offset |
| `limit` | integer | No | 5 | Number of items to return (max 20) |
| `callback` | string | No | - | JSONP callback function |
| `log` | boolean | No | - | Enable logging |
| `label` | string | No | - | Optional recommendation label for analytics tracking |
| `rules` | array of objects | No | - | Rules to filter recommendation results |

## Response

Returns a list of recommended items that were frequently bought together with the specified item.

## Authentication

Requires X-Key header with API key: 2e963f3e-38bd-4c00-9636-c00e48945eb7

## Code Examples

### Shell

```bash
curl --request POST \
  --url https://api-v3.findify.io/v3/recommend/items/6411354119,10116071626/bought/bought \
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
    "label": "bought-bought-recommendation"
  }'
```

### JavaScript (SDK)

```javascript
// Please, don't forget to include the SDK script
// Which you can find here: https://github.com/findify/javascript-sdk
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
  item_ids: ['6411354119', '10116071626'],
  label: 'bought-bought-recommendation'
};
client.recommendations('frequentlyPurchased', request).then(function (response) {
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
  url: 'https://api-v3.findify.io/v3/recommend/items/6411354119,10116071626/bought/bought',
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
    label: 'bought-bought-recommendation'
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
Swagger\\Client\\Configuration::getDefaultConfiguration()->setApiKey('X-Key', '2e963f3e-38bd-4c00-9636-c00e48945eb7');
$api_instance = new Swagger\\Client\\Api\\DefaultApi();
$recommendation = new \\Swagger\\Client\\Model\\RecommendationRequest(array(
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
    'label' => 'bought-bought-recommendation'
));
try {
    $result = $api_instance->recommendItemsItemIdBoughtBoughtPost('6411354119,10116071626', $recommendation);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->recommendItemsItemIdBoughtBoughtPost: ', $e->getMessage(), PHP_EOL;
}
?>
```