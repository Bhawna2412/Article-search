---
title: "/autocomplete"
articleID: 2061
category: "API References > Search API"
knowledgeBase: "Merchandising Cloud"
---

# /autocomplete

The Autocomplete API delivers real-time search suggestions and product matches as customers type, helping them discover relevant products faster and reducing the effort required to find what they're looking for. This improves the search experience by showing both query suggestions and matching products before customers complete their search.

Autocomplete responses include configurable limits for suggestions, product matches, and content items, along with metadata like request IDs for tracking and optional redirects for specific queries. This enables you to customize the autocomplete experience to match your merchandising strategy while helping ensure customers quickly find relevant products, which tends to improve conversion rates.

## Autocomplete response description

```javascript
// Autocomplete response structure
/** Autocomplete request meta data */
meta: {
  /** Item limit - this is the limitation of the product matches returned */
  item_limit: 3,
  /** Suggestion limit - this is the limitation of the suggestions returned */
  suggestion_limit: 6,
  /** Query that was used to perform request */
  q: 'sample',
  /** Request ID - first part: prefix that points to the source of the request (a/s/sc/r/c) */
  /** In case of autocomplete request prefix - is "a" */
  /** Second part is randomly generated string */
  rid: 's-9fcc881c-1420-4e57-bc58-e234829c363c'
},
redirect: {
  /** name of the redirect */
  name: "NAME",
  /** url of the redirect */
  url: "URL"
},
/** Array of returned suggestions */
/** Mapping of returned content items for each requested content source */
content: {
  "shopify-blog_123": [
    {
      /** Returnable content items fields */
      title: "some title",
      url: "some-url",
      [field_name]: "field-value"
    }
  ]
},
suggestions: [
  {
    value: 'a',
    redirect: {
      /** name of the redirect */
      name: "NAME",
      /** url of the redirect */
      url: "URL"
    }
  },
  { value: 'b' }
],
/** Array of returned product matches */
items: [
  /** Object that represents default autocomplete product match */
  /** Important note: there might be additional fields in response, 
  it depends on autocomplete returnable fields configuration */
  {
    /** Boolean flag that indicates whether the product is available or not */
    availability: true,
    /** Product ID */
    id: '4123451324123',
    /** Product URL */
    product_url: 'https://store-name.com/path_to_product',
    /** Price with which the discount price is compared */
    /** In case when product doesn't have sale price this fields will be -1 */
    compare_at: 100,
    /** Array of available product prices */
    price: [90],
    /** If product has a sale price this field contains array of numbers */
    /** that represents discount value in percentage for each discounted price */
    discount: [10],
    /** Url for thumbnail image (cropped main product image) */
    thumbnail_url: 'https://cdn_name.com/path_the_thumbnail_image',
    /** Object with boolean flags which indicates which stickers to show  */
    stickers: {
      discount: true,
      availability: true,
      'in-stock': true,
      'out-of-stock': false
    }
  }
]
```
```

## Request Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `t_client` | date-time | Yes | 1484316253525 | Timestamp when the request is sent from the browser |
| `user` | object | Yes | - | User identification object |
| `user.uid` | string | Yes | - | User ID (max 32 characters) |
| `user.sid` | string | Yes | - | Session ID (max 32 characters) |
| `user.email` | string | No | - | User email address |
| `user.ip` | string | No | - | User IP address |
| `user.ua` | string | No | - | User agent string |
| `user.lang` | array of strings | No | - | User language preferences |
| `q` | string | Yes | - | Search query string |
| `callback` | string | No | - | Callback function name for JSONP |
| `log` | boolean | No | false | Enable debug logging |
| `limits` | object | No | - | Define how many suggestions/product matches/content items to return |
| `limits.suggestions` | integer | No | 6 | Number of search suggestions to return |
| `limits.items` | integer | No | 4 | Number of product matches to return |
| `limits.[content_source]` | integer | No | - | Number of particular content source items to return |

## Response

The API returns a 200 OK response with autocomplete suggestions, product matches, and optional content items.

## Authentication

Include your API key in the `X-Key` header: `2e963f3e-38bd-4c00-9636-c00e48945eb7`

## Code Examples

### Shell

```bash
--request POST \
--url https://api-v3.findify.io/v3/autocomplete \
--header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" \
--header "Content-Type: application/json" \
--data '{"user":{"lang":["en-US","en-GB","no"],"uid":"test1","sid":"ssid","email":"test@test .com","ip":"192.168.0.1","ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"},"q":"t","t_client":1484741395471,"limits": { "suggestions": 10, "items": 10, "shopify-blog_123": 10 },"log":false}'
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
    q: 't',
    limits: {
      suggestions: 10,
      items: 10,
      "shopify-blog_123": 10
    }
  };
  client.autocomplete(request).then(function (response) {
      console.log(response);
    });
```

### JavaScript (Node.js)

```javascript
var request = require("request");
var options = {
  method: 'POST',
  url: 'https://api-v3.findify.io/v3/autocomplete',
  headers: {
    "X-key": "2e963f3e-38bd-4c00-9636-c00e48945eb7"
  },
  body: {
    user: {
      lang: [ 'en-US', 'en-GB', 'no' ],
      uid: 'test1',
      sid: 'ssid',
      email: 'test@test .com',
      ip: '192.168.0.1',
      ua: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    },
    q: 't',
    t_client: 1484741395471,
    limits: {
      suggestions: 10,
      items: 10,
      'shopify-blog_123': 10
    },
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
// Configure API key authorization: key
Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-Key', '2e963f3e-38bd-4c00-9636-c00e48945eb7');
$api_instance = new Swagger\Client\Api\DefaultApi();
$autocomplete = new \Swagger\Client\Model\AutocompleteRequest(array(
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
    'q' => 't',
    't_client' => '1484741395471',
    'limits' => array(
    'suggestions' => 10,
      'items' => 10,
      'shopify-blog_123' => 10
    ),
    'log' => false
));
try {
    $result = $api_instance->autocompletePost($autocomplete);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->autocompletePost: ', $e->getMessage(), PHP_EOL;
}
?>
```