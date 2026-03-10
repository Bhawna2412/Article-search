---
title: "Feedback API"
articleID: 2078
category: "API References > Feedback API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Feedback API

Feedback API provides a way to send information about user activity on the web page to power our ML and personalization algorithms.

> **Note:** This is a low level API, we recommend you to use the Findify Merchant JS, or the Findify Feedback JS to speed up the integration.

Sends analytics information in order to help the personalization algorithm deliver more relevant items to the user.

## Generic structure

The rid (request id) parameter can be gathered from the Search API call preceding the click-through.

```json
{
    "event": "EVENT NAME", //REQUIRED, Event name
    "properties": {
        // HERE ARE THE PROPERTIES RELATED TO EACH EVENT
    },
    "key": string, //REQUIRED, Merchant API Key
    "t_client": timestamp, //REQUIRED, Timestamp client in milliseconds
    "user": {
        "uid": string,      //REQUIRED, Permanent User ID
        "sid": string,      //REQUIRED, Session ID
        "ip": string,       //REQUIRED, IP of the customer
        "ua": string,       //REQUIRED, User-agent
        "lang": [string],   //OPTIONAL, Languages
        "email": string     //OPTIONAL, User email
    }
}
```

## Click-suggestion event

Should be sent every time the user will click on the Autocomplete Search Suggestion item.

```json
{
    "event": "click-suggestion",
    "properties": {
        "rid": string,  //REQUIRED, Request id preceding the clickthrough
        "suggestion": string //REQUIRED, Suggestion that is clicked
    }
}
```

## Click-item event

Should be sent every time the customer clicks through the Product Cards in any of our widgets: Autocomplete, Search Results, Smart Collections or Recommendations.

```json
{
    "event": "click-item",
    "properties": {
        "rid": string,      // REQUIRED, Request id preceding the clickthrough, can be retrieved from the preceding Search API response
        "item_id": string,   // REQUIRED, Item ID clicked
      	"variant_item_id": string //REQUIRED, Variant ID clicked
    }
}
```

## Page redirect event

Should be sent every time when the user submits a search query that has a Page Redirect setup in Maropost Merchandising Cloud (formerly Findify).

```json
{
     "event": "redirect",
     "properties": {
        "rid": string,  // REQUIRED, Request id preceding the redirection
        "suggestion": string // REQUIRED, Suggestion that leads to the redirection
     }
}
```

## Purchase event

Should be sent once the Order is confirmed.

> **Note:** **Order Return
> ** If the customer returns (all or part of) an order, there is unfortunately, no event that can be sent to remove the order from our analytics. If the Purchase event is sent to Merchandising Cloud - that means that the order is successfully completed with the assumption that it won't be returned.

```json
{
    "event": "purchase",
    "properties": {
        "order_id": string,     // REQUIRED, Order ID
        "currency": string,     // REQUIRED, Currency of the purchase
        "revenue": double,      // REQUIRED, Total revenue
      	"total_discount": double, // OPTIONAL, total order discount
      	"total_tax": double, //OPTIONAL, total tax applied to the order
      	"total_shipping": double, //OPTIONAL, total shipping applied to the order
        "affiliation": string,  // OPTIONAL, Affiliation of the purchase
        "line_items": [
            {
                "item_id": string,      // REQUIRED, Item ID bought
              	"variant_item_id": string, //REQUIRED, Variant ID bought
                "unit_price": double,   // REQUIRED, Sale price of the product
                "quantity": int         // REQUIRED, Quantity bought
            }
        ]
    }
}
```

## Cart content event

Should be sent on all pages with the line_items data containing all products added to the cart at the moment.

```json
{
    "event": "update-cart",
    "properties": {
        "line_items": [
            {
                "item_id": string,     // REQUIRED, Item ID
                "variant_item_id": string, //REQUIRED, Variant ID clicked
                "unit_price": double,  // REQUIRED, Sale price of the product
                "quantity": int        // REQUIRED, Quantity bought
            }
        ]
    }
}
```

## Add to cart event

Should ONLY be sent if the customer clicked on the custom Add To Cart button ONLY on our Product Cards in Search Results, Smart Collections, Autocomplete or Recommendations.The event needs to be sent along with the click-item event: first click-item event -> add-to-cart event.

```json
{
    "event": "add-to-cart",
    "properties": {
        "item_id": string,     // REQUIRED, Item ID
        "variant_item_id": string, //REQUIRED, Variant ID clicked
        "quantity": int,       // REQUIRED, Quantity bought,
        "rid": string,      // REQUIRED, Request id preceding the add to cart button click from the Findify search results/collections/recommendations
    }
}
```

## Page view

Should be sent on all pages. This is required for proper Personalization and Recommendations (i.e. Recently Viewed type) functionality.

```json
{
    "event": "view-page",
    "properties": {
        "url": string,      // REQUIRED, URL of the page viewed
        "ref": string,      // REQUIRED, Referer of the page
        "width": int,       // REQUIRED, Width of the customer's browser
        "height": int,      // REQUIRED, Height of the customer's browser
        "item_id": string,   // REQUIRED for Product Pages, OPTIONAL for other pages, Product ID
        "variant_item_id": string //REQUIRED for Product Pages, OPTIONAL for other pages, Variant ID
    }
}
```

**Body Params**

**t_client**date-timerequired**user**objectrequireduser object**uid**stringrequired

`max length: 32 characters`

## Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `t_client` | date-time | Yes | Timestamp client in milliseconds |
| `user` | object | Yes | User identification object |
| `user.uid` | string | Yes | Permanent User ID (max 32 characters) |
| `user.sid` | string | Yes | Session ID (max 32 characters) |
| `user.email` | string | No | User email |
| `user.ip` | string | No | IP address of the customer |
| `user.ua` | string | No | User-agent string |
| `user.lang` | array of strings | No | Languages |
| `event` | string | Yes | Event name |
| `properties` | object | Yes | Event properties (varies by event type) |
| `callback` | string | No | Callback function |
| `log` | boolean | No | Enable logging |

## Code Examples

### Shell

```bash
curl --request POST --url https://api-v3.findify.io/v3/feedback --header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" --header "Content-Type: application/json" --data '{"user":{"lang":["en-GB"],"uid":"test1","sid":"ssid","email":"test@test .com","ip":"192.168.0.1","ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"},"t_client":1484742065791, "log": false,"event":"click-item", "properties": {"rid": "r-ea052570-c9a6-4ff1-a5b4-538adb8a1050", "item_id": "6411354119"}}'
Javascript Default 
```

### JavaScript (SDK)

Please, don't forget to include the SDK script. You can find it here: [https://github.com/findify/javascript-sdk](https://github.com/findify/javascript-sdk)

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
rid: 'r-ea052570-c9a6-4ff1-a5b4-538adb8a1050',
item_id: '6411354119'
};
```

```javascript
client.feedback('click-item', request);
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
  url: 'https://api-v3.findify.io/v3/feedback',
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
    log: 'false',
    event: 'click-item',
    properties: {
      rid: "r-ea052570-c9a6-4ff1-a5b4-538adb8a1050",
      item_id: "6411354119"
    }
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
$feedback     = new \Swagger\Client\Model\Feedback(array(
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
    'event' => 'click-item',
    'properties' => array(
        'rid' => 'r-ea052570-c9a6-4ff1-a5b4-538adb8a1050',
        'item_id' => '6411354119'
    ),
    'log' => false
));
try {
    $result = $api_instance->feedbackPost('findify-home-rec-1', $feedback);
    echo $result;
}
catch (Exception $e) {
    echo 'Exception when calling DefaultApi->feedbackPost: ', $e->getMessage(), PHP_EOL;
}
?>
```