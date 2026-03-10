---
title: "/search"
articleID: 2062
category: "API References > Search API"
knowledgeBase: "Merchandising Cloud"
---

# /search

The Search API returns comprehensive search results including products, facets for filtering, sorting options, and optional banners or redirects. This enables you to deliver complete search experiences with customizable result limits, filter combinations, and merchandising rules that control product positioning and visibility.

Search responses provide rich metadata including total result counts, applied filters, facet values with counts, and detailed product information with stickers for discounts and availability. This helps ensure you can build search interfaces that guide customers to relevant products while applying strategic merchandising rules to boost, pin, or exclude specific items based on your business goals.

## Response Schema

```objectivec
// Search response structure
{	
	/** Autocomplete request meta data */
	meta: {
		/** Limit - this is the limitation of the product returned */
		limit: 24,
    /** Offset - number of page in product feed */
    offset: 0,
		/** Query taht was used to perform request */
		q: 'sample',
    /** Total - total found items */
    total: 1000,
    /** Filters - applied filters */
    filters: [
      {
        name: "price",
        type: "range",
        values: [
          {
            "from": 10,
            "to": 15
          }
        ],
        action: "include"
      }
    ],
    /** Sort - applied sort */
    sort: [
      {
      	field: "price",
        order: "desc"
      }
    ]
		/** Rerquest ID - first part: prefix that points to the source of the request (a/s/sc/r/c) */
		/** In case of autocomplete request prefix - is "a" */
		/** Second part is randomly generated string */
		rid: 's-9fcc881c-1420-4e57-bc58-e234829c363c'
	},
  /** Facets - list of facets(aggregate filter values) */
  facets: [
  	{
      "name": "category",
      "type": "category",
      "values": [
        {
          "name": "category1",
          "value": "Sleeve",
          "count": 234,
          "selected": false,
          "has_children": false
        },
        {
          "name": "category1",
          "value": "Wide Headband",
          "count": 182,
          "selected": false,
          "has_children": false
        },
     ]
   }
  ],
  redirect: {
    /** name of the redirect */
    name: "NAME",
    /** url of the redirect */
    url: "URL"
  },
  /** Banner - banner that should be displayed */
  banner: {
    products: {
      /** Image - banner image */
      imageUrl: "some-image_url.jpg",
      /** Name - banner name */
      name: "some name",
      /** targetUrl - ur which the banner leads  */
      targetUrl: "some-target_url.com"
    }
  }
	/** Array of returned product matches */
	items: [
		/** Object that represents default autocomplete product match */
		/** Important note: there might be additional fields in response, it depends on autocomplet returnable fields configuration */
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
			/** Array of availble product prices */
			price: [90],
			/** If product has a sale price this field contains array of numbers */
			/** that represents discount value in percentage for each discounted price */
			discount: [10],
			/** Url for product image */
			image_url: 'https://cdn_name.com/path_the_thumbnail_image',
			/** Object with boolean flags which indicates which stickers to show  */
			stickers: {
				discount: true,
				availability: true,
				in-stock: true,
				out-of-stock: false
			}
		}
	]
}
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
| `user.lang` | array of strings | No | - | Language preferences |
| `q` | string | No | - | Search query |
| `sort` | array of objects | No | - | Sort criteria |
| `filters` | array of objects | No | - | Filter criteria |
| `offset` | integer | No | 0 | Pagination offset |
| `limit` | integer | No | 24 | Results per page (max 120) |
| `callback` | string | No | - | JSONP callback function |
| `log` | boolean | No | - | Enable logging |
| `rules` | array of objects | No | - | Merchandising rules |

## Authentication

Include your API key in the `X-Key` header:

```bash
X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7
```

## Code Examples

### Shell

```bash
--request POST \
--url https://api-v3.findify.io/v3/search \
--header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" \
--header "Content-Type: application/json" \
--data '{"user":{"lang":["en-GB"],"uid":"test1","sid":"ssid","email":"test@test.com","ip":"192.168.0.1","ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"},"q":"Puppy","t_client":1484742065791,"filters":[{"name":"category1","type":"category","values":[{"value": "Dog Food"}]}],"rules":[{"action":"top", "name":"brand","type":"text","values":[{"value": "Brand"}]}],"sort":[{"field":"price","order":"desc"}],"offset":0,"limit":20,"log":false}'
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
    email: 'test@test.com'
  },
  log: false
});
var request = {
  q: 'Puppy',
  filters: [{
    name: 'category1',
    type: 'category',
    values: [{
      "value": "Dog Food"
    }]
  }],
  rules: [{
    action: 'top',
    name: 'brand',
    type: 'text',
    values: [{
      "value": "Brand"
    }]
  }],
  sort: [{
    field: 'price',
    order: 'desc'
  }],
  offset: 0,
  limit: 20,
};
client.search(request).then(function (response) {
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
      email: 'test@test.com',
      ip: '192.168.0.1',
      ua: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    },
    q: 'Puppy',
    t_client: 1484742065791,
    filters: [{
      name: 'category1',
      type: 'category',
      values: [{"value": "Dog Food"}]
    }],
    rules: [{
      action: 'top',
      name: 'brand',
      type: 'text',
      values: [{"value": "Brand"}]
    }],
    sort: [{
      field: 'price',
      order: 'desc'
    }],
    offset: 0,
    limit: 20,
    log: false
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
Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-Key', '2e963f3e-38bd-4c00-9636-c00e48945eb7');
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
    'q' => 'Puppy',
    't_client' => 1484741395471,
    'filters' => array(
        array(
            'name' => 'category1',
            'type' => 'category',
            'values' => array(
                array(
                    'value' => 'Dog Food'
                )
            )
        )
    ),
  'rules' => array(
        array(
            'action' => 'top',
            'name' => 'brand',
            'type' => 'text',
            'values' => array(
                array(
                    'value' => 'brand'
                )
            )
        )
    ),
    'sort' => array(
        array(
            'field' => 'price',
            'order' => 'desc'
        )
    ),
    'offset' => 0,
    'limit' => 20,
    'log' => false
));
try {
    $result = $api_instance->searchePost($search);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->searchePost: ', $e->getMessage(), PHP_EOL;
}
?>
```