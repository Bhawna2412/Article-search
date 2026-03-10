---
title: "/search/content"
articleID: 2265
category: "API References > Search API"
knowledgeBase: "Merchandising Cloud"
---

# /search/content

## Overview

Understanding SearchContent functionality helps you optimize which product data fields are searchable and how search results are generated. When you control searchable content effectively, you help improve search relevance and ensure customers find products through varied search terms, which tends to enhance search-to-purchase conversion and supports better overall product discovery.

SearchContent configuration enables you to fine-tune search behavior to match customer search patterns. This helps improve search relevance and conversion rates by ensuring that product attributes most relevant to customer queries are properly indexed and weighted, supporting better product discovery through more intelligent search result generation.

## Endpoint

```bash
POST https://api-v3.findify.io/v3/search/content
```

## Authentication

Requires API key in X-Key header.

```bash
X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7
```

## Request Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `user` | object | Yes | - | User identification object |
| `t_client` | string | Yes | - | Client timestamp |
| `q` | string | Yes | - | Search query |
| `type` | array of strings | Yes | - | Array of requested content providers |
| `sort` | array of objects | No | - | Array of sort fields (field, order) |
| `offset` | integer | No | 0 | Pagination offset |
| `limit` | integer | No | 24 | Results per page (max 120) |
| `filters` | array of objects | No | - | Filter parameters (name, type, values) |

## Response

### Response Schema

200 - Successful response

### Response Fields

| Field | Type | Description |
| --- | --- | --- |
| `meta` | object | Metadata about the search request and results |
| `meta.q` | string | The search query |
| `meta.offset` | integer | Pagination offset |
| `meta.limit` | integer | Number of results per page |
| `meta.total` | integer | Total number of results |
| `items` | array of objects | Content items (images, posts, etc.) |
| `items[].source` | string | Content source (e.g., instagram) |
| `items[].id` | string | Content item ID |
| `items[].image_url` | string | URL of the content image |
| `items[].post` | object | Post metadata (username, content, etc.) |

## Code Examples

### Shell

```bash
--request POST \
--url https://api-v3.findify.io/v3/search/content \
--header "X-Key: 680d373d-06b3-442b-bebc-d35a5b0868b3" \
--header "Content-Type: application/json" \
--data '{"user":{"lang":["en-GB"],"uid":"test1","sid":"ssid","email":"test@test.com","ip":"192.168.0.1","ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"},"q":"Socks","type": ["instagram"],"t_client":1484742065791,"filters":[{ "name": "post.hashtags", "type": "text", "values": [{ "value": "bamboosocks" }] }], "sort":[],"offset":0,"limit":20}'
```

### JavaScript (SDK)

Please include the SDK script from: https://github.com/findify/javascript-sdk

```javascript
var client = FindifySDK.init({
  key: '680d373d-06b3-442b-bebc-d35a5b0868b3',
  user: {
    uid: 'test1',
    sid: 'ssid',
    email: 'test@test.com'
  },
  log: false
});
var request = {
  q: 'Socks',
  type: ['instagram'],
  filters: [{
    name: 'post.hashtags',
    type: 'text',
    values: [{"value": "bamboosocks"}]
  }],
  sort: [],
  offset: 0,
  limit: 20,
};
client.search.content(request).then(function (response) {
  console.log(response);
});
```

### JavaScript (Node.js)

```javascript
var request = require("request");
var options = {
  method: 'POST',
  url: 'https://api-v3.findify.io/v3/search/content',
  headers: {
    "X-key": "680d373d-06b3-442b-bebc-d35a5b0868b3"
  },
  body: {
    user: {
      lang: ['en-GB'],
      uid: 'test1',
      sid: 'ssid',
      email: 'test@test.com',
      ip: '192.168.0.1',
      ua: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    },
    t_client: "1484742065791",
    q: 'Socks',
    type: ['instagram'],
    t_client: 1484742065791,
    filters: [{
      name: 'post.hashtags',
      type: 'text',
      values: [{"value": "bamboosocks"}]
    }],
    sort: [],
    offset: 0,
    limit: 20
  },
  json: true
};
request(options, function(error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
})
```

### PHP

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: key
Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-Key', '680d373d-06b3-442b-bebc-d35a5b0868b3');
$api_instance = new Swagger\Client\Api\DefaultApi();
$search = new \Swagger\Client\Model\SearchRequest(array(
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
    'q' => 'Socks',
    't_client' => 1484741395471,
    'filters' => array(
        array(
            'name' => 'post.hashtags',
            'type' => 'text',
            'values' => array(
                array(
                    'value' => array('bamboosocks')
                )
            )
        )
    ),
    'sort' => array(),
    'offset' => 0,
    'limit' => 20
));
try {
    $result = $api_instance->contentSearchePost($search);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->searchePost: ', $e->getMessage(), PHP_EOL;
}
?>
```