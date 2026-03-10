---
title: "/recommend/items/{item_id}/viewed/viewed"
articleID: 2082
category: "API References > Recommendations API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# /recommend/items/{item_id}/viewed/viewed

> **Note:** This is a low level API, we recommend you to use the simple recommendation route to enable easy configuration via the Merchant Dashboard.
>  Please, make sure to create one recommendation of this type in our Merchant Dashboard Recommendation section.
>  You do not have to use this new Recommendation widget, but it should be set as ENABLED - that will notify our backend that you are using this type of the recommendation on your storefront.

Get a list of items that have been viewed in the same session after viewing the currently viewed item by other customers.

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

## Request

### Path Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `item_id` | string | Yes | Item identifier |

### Request Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `t_client` | date-time | Yes | - | Timestamp when the request is sent |
| `user` | object | Yes | - | User identification object |
| `user.uid` | string | Yes | - | User ID (max 32 characters) |
| `user.sid` | string | Yes | - | Session ID (max 32 characters) |
| `user.email` | string | No | - | User email |
| `user.ip` | string | No | - | User IP address |
| `user.ua` | string | No | - | User agent |
| `user.lang` | array of strings | No | - | User language preferences |
| `offset` | integer | No | 0 | Pagination offset |
| `limit` | integer | No | 5 | Number of items to return (max 20) |
| `callback` | string | No | - | JSONP callback function name |
| `log` | boolean | No | - | Enable logging |
| `label` | string | No | - | Optional recommendation label for analytics |
| `rules` | array of objects | No | - | Rules to filter recommendation results |

**sid**stringrequired

`max length: 32 characters`

**email**string**ip**string**ua**string**lang**array of stringsADD string**offset**int32Defaults to 0**limit**int32Defaults to 5

`max = 20`

**callback**string**log**boolean**label**string

`Optional recommendation label (by providing this parameter you'll be able to view analytcs info in Merchant Dashboard for this recommendation widget)`

**rules**array of objects

`Rules to filter recommendation results`

ADD object

## Response

### Response Schema

| Field | Type | Description |
| --- | --- | --- |
| `meta` | object | Response metadata |
| `meta.limit` | integer | Pagination limit |
| `meta.offset` | integer | Pagination offset |
| `meta.user_id` | string | User identifier |
| `meta.total` | integer | Total number of items |
| `meta.rid` | string | Request identifier |
| `items` | array of objects | Recommended items |
| `items[].id` | string | Item ID |
| `items[].title` | string | Item title |
| `items[].description` | string | Item description |
| `items[].price` | array of numbers | Item prices |
| `items[].image_url` | string | Item image URL |
| `items[].product_url` | string | Product page URL |
| `items[].availability` | boolean | Item availability |

## Code Examples

### Shell

```bash
--request POST \
--url https://api-v3.findify.io/v3/recommend/items/6411354119/viewed/viewed \
--header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" \
--header "Content-Type: application/json" \
--data '{"user":{"lang":["en-GB"],"uid":"test1","sid":"ssid","email":"test@test .com","ip":"192.168.0.1","ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"},"t_client":1484742065791,"offset":0,"limit":5,"log":false,"label":"viewed-recommendation"}' \
Javascript Default
```

### JavaScript (SDK)

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
  var request = {
    offset: 0,
    limit: 5,
    item_id: '6411354119',
    label: 'viewed-recommendation'
  };
  client.recommendations('viewed', request).then(function (response) {
      console.log(response);
    });
    Javascript Node
```

### JavaScript (Node.js)

```javascript
var request = require("request");
var options = {
  method: 'POST',
  headers: {
    "X-key": "2e963f3e-38bd-4c00-9636-c00e48945eb7"
  },
  url: 'https://api-v3.findify.io/v3/recommend/items/6411354119/viewed/viewed',
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
    log: false,
    label: 'viewed-recommendation'
  },
  json: true
};
request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
  PHP
```

### PHP

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: key
Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-Key', '2e963f3e-38bd-4c00-9636-c00e48945eb7');
$api_instance = new Swagger\Client\Api\DefaultApi();
$recommendation = new \Swagger\Client\Model\RecommendationRequest(array(
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
    'limit' => 5,
    'log' => false,
  	'label' => 'viewed-recommenation'
));
try {
    $result = $api_instance->recommendItemsItemIdViewedViewedPost('6411354119', $recommendation);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->recommendItemsItemIdViewedViewedPost: ', $e->getMessage(), PHP_EOL;
}
?>
```