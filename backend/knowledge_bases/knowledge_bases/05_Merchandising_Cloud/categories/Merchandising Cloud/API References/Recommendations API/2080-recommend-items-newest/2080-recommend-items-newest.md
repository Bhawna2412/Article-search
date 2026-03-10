---
title: "/recommend/items/newest"
articleID: 2080
category: "API References > Recommendations API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# /recommend/items/newest

> **Note:** This is a low level API, we recommend you to use the simple recommendation route to enable easy configuration via the Merchant Dashboard.

Get the list of the newest items.

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

### Request Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `t_client` | date-time | Yes | - | Timestamp when request is sent |
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
| `label` | string | No | - | Optional recommendation label for analytics |
| `rules` | array of objects | No | - | Rules to filter recommendation results |
| `rules[].action` | string | No | - | What to do with corresponding products |
| `rules[].type` | string | No | - | Rule type (text, range, category) |
| `rules[].name` | string | No | - | Field name to filter on |
| `rules[].values` | array of objects | No | - | Filter values |

## Response

### Response Schema

## Credentials

Header 2e963f3e-38bd-4c00-9636-c00e48945eb7

## Code Examples

### Shell

```bash
--request POST \
--url https://api-v3.findify.io/v3/recommend/items/newest \
--header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" \
--header "Content-Type: application/json" \
--data '{"user":{"lang":["en-GB"],"uid":"test1","sid":"ssid","email":"test@test .com","ip":"192.168.0.1","ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"},"t_client":1484742065791,"offset":0,"limit":5,"log":false}'
```

### JavaScript (SDK)

```javascript
//Please, don't forget to include the SDK script
//Which you can find here: https://github.com/findify/javascript-sdk
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
    label: 'newest-recommendation'
  };
  client.recommendations('newest', request).then(function (response) {
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
  url: 'https://api-v3.findify.io/v3/recommend/items/newest',
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
    label: 'newest-recommendation'
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
  	'label' => 'newest-recommendation'
));
try {
    $result = $api_instance->recommendItemsNewestPost($recommendation);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->recommendItemsNewestPost: ', $e->getMessage(), PHP_EOL;
}
?>
```