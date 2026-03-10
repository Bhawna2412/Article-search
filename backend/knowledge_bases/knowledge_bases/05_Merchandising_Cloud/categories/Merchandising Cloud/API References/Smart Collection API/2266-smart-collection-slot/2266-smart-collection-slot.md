---
title: "/smart-collection/{slot}"
articleID: 2266
category: "API References > Smart Collection API"
knowledgeBase: "Merchandising Cloud"
---

# /smart-collection/{slot}

Smart recommendation strategies use AI-powered algorithms to deliver personalized product suggestions based on customer behavior and product relationships. When recommendations adapt to individual browsing patterns and purchase history, you help improve product discovery and tend to enhance conversion rates through more relevant product suggestions that align with each customer's specific interests and needs.

AI-driven smart recommendations enable sophisticated merchandising that learns from customer interactions. This helps improve average order value and customer satisfaction by presenting products that genuinely match customer preferences, supporting better conversion optimization through intelligent product suggestions that evolve based on customer behavior patterns.

## Path Params

- **slot** `string` *(required)*
Collection handle

## Body Params

- **t_client** `date-time` *(required)*
- **user** `object` *(required)*
User object:  - **uid** `string` *(required)* — max length: 32 characters
  - **sid** `string` *(required)* — max length: 32 characters
  - **email** `string`
  - **ip** `string`
  - **ua** `string`
  - **lang** `array of strings`
- **sort** `array of objects`  - **field** `string` *(required)*
  - **order** `string` *(required)*
- **filters** `array of objects`  - **name** `string` *(required)*
  - **type** `string` *(required)*
  - **values** `array of strings` *(required)*
- **offset** `int32` *(default: 0)*
- **limit** `int32` *(default: 24, max: 120)*
- **callback** `string`
- **log** `boolean`
- **rules** `array of objects`

## Responses

### 200 – Success

**Response body** `object`

- **meta** `object`
- **no_result** `boolean` *(default: true)*
- **corrected_q** `string`
- **q** `string`
- **offset** `integer` *(default: 0)*
- **limit** `integer` *(default: 0)*
- **total** `integer` *(default: 0)*
- **filters** `array`
- **sort** `array`
- **rid** `string`
- **facets** `array of objects`  - **name** `string`
  - **type** `string`
  - **values** `array of objects`    - **selected** `boolean` *(default: true)*
    - **count** `integer` *(default: 0)*
    - **has_children** `boolean` *(default: true)*
    - **value** `string`
- **items** `array of objects`  - **seller** `string`
  - **short_description** `string`
  - **product_url** `string`
  - **color** `array`
  - **variants_ids** `array of strings`
  - **image_2_url** `string`
  - **description** `string`
  - **discount** `array of integers`
  - **created_at** `string`
  - **availability** `boolean` *(default: true)*
  - **delivery_time** `string`
  - **variants** `array`
  - **title** `string`
  - **thumbnail_url** `string`
  - **price** `array of numbers`
  - **stickers** `object`
  - **id** `string`
  - **sku** `array of strings`
  - **brand** `string`
  - **quantity** `integer` *(default: 0)*
  - **color_variants** `integer` *(default: 0)*
  - **shipping_cost** `string`
  - **image_url** `string`
  - **custom_fields** `object`
  - **rating_score** `integer` *(default: 0)*
  - **tags** `array of strings`
  - **condition** `string`
  - **product_type** `string`
  - **material** `array`
  - **size** `array`
  - **shipping_weight** `string`
  - **category** `array of objects`    - **category1** `string`
    - **category2** `string`
    - **category3** `string`
    - **category4** `string`
  - **compare_at** `integer` *(default: 0)*
- **banner** `object`

## Credentials

### **Header**

```apache
X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7
```

### Shell

```ada
curl --request POST \
  --url https://api-v3.findify.io/v3/smart-collection/test \
  --header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "lang": ["en-GB"],
      "uid": "test1",
      "sid": "ssid",
      "email": "test@test .com",
      "ip": "192.168.0.1",
      "ua": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
    },
    "t_client": 1484742065791,
    "sort": [
      {
        "field": "price",
        "order": "desc"
      }
    ],
    "offset": 0,
    "limit": 20,
    "log": false
  }'
```

### JavaScript (Default)

```javascript
// Please, don't forget to include the SDK script
// https://github.com/findify/javascript-sdk

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
  slot: 'test',
  sort: [
    {
      field: 'price',
      order: 'desc'
    }
  ],
  offset: 0,
  limit: 20
};

client.collection(request).then(function (response) {
  console.log(response);
});
```

### JavaScript (Node.js)

```javascript
var request = require("request");

var options = {
  method: 'POST',
  url: 'https://api-v3.findify.io/v3/search',
  headers: {
    "X-key": "2e963f3e-38bd-4c00-9636-c00e48945eb7"
  },
  body: {
    user: {
      lang: ['en-GB'],
      uid: 'test1',
      sid: 'ssid',
      email: 'test@test .com',
      ip: '192.168.0.1',
      ua: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    },
    q: '1484742065791',
    t_client: 1484742065791,
    filters: [
      {
        name: 'category1',
        type: 'category',
        values: [{ "value": "Dog Food" }]
      }
    ],
    sort: [
      {
        field: 'price',
        order: 'desc'
      }
    ],
    offset: 0,
    limit: 20,
    log: false
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
```

### PHP

```php
<?php

require_once(__DIR__ . '/vendor/autoload.php');

// Configure API key authorization
Swagger\Client\Configuration::getDefaultConfiguration()
  ->setApiKey('X-Key', '2e963f3e-38bd-4c00-9636-c00e48945eb7');

$api_instance = new Swagger\Client\Api\DefaultApi();

$collection = new \Swagger\Client\Model\CollectionRequest([
  'user' => [
    'uid' => 'test1',
    'sid' => 'ssid',
    'email' => 'test@test .com',
    'ip' => '192.168.0.1',
    'ua' => 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    'lang' => ['en-US', 'en-GB', 'no']
  ],
  't_client' => '1484741395471',
  'offset' => 0,
  'limit' => 20,
  'log' => false
]);

try {
  $result = $api_instance->smartCollectionSlotPost('test', $collection);
  echo $result;
} catch (Exception $e) {
  echo 'Exception when calling DefaultApi->smartCollectionSlotPost: ',
       $e->getMessage(),
       PHP_EOL;
}
```