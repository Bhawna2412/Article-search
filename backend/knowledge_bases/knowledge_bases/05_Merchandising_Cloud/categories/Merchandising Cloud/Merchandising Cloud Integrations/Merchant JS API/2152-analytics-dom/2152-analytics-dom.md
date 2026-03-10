---
title: "Analytics DOM"
articleID: 2152
category: "Merchandising Cloud Integrations > Merchant JS API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Analytics DOM

Analytics DOM is a library that allows automatic tracking of events and data collection on the page in the browser that is required by our machine learning platform. The API of the library is the same as [Analytics](https://developers.findify.io/page/findify-analytics) - the only difference is that this library listens for `document.ready` state and collects data that exists on the current page.

## Tracking Events

### Event Data

To collect and send data to our Feedback API automatically from the current page, you should add elements with corresponding `data-findify-event` attributes inside the `<body>` section of the page.

The attributes `data-findify-[property-name]=[value]` should be defined on the elements to collect proper data. The children elements with these attributes will be added to `line_items` array.

HTML

```applescript
<div data-findify-event="purchase" data-findify-order-id="ORDER_ID" data-findify-currency="EUR" data-findify-revenue="288">  <div data-findify-item-id="PRODUCT_ID_1" data-findify-variant-item-id="VARIANT_ID_1" data-findify-unit-price="269" data-findify-quantity="1"></div>  <div data-findify-item-id="PRODUCT_ID_2" data-findify-variant-item-id="VARIANT_ID_2" data-findify-unit-price="19" data-findify-quantity="1"></div></div>
```

...will be sent to the Feedback API as...

JSON

```json
{  "purchase": {     "currency": "EUR",     "line_items": [       {"item_id": "PRODUCT_ID_1", "quantity": "1", "unit_price": "269", "variant_item_id": "VARIANT_ID_1"},       {"item_id": "PRODUCT_ID_2", "quantity": "1", "unit_price": "19", "variant_item_id": "VARIANT_ID_2"}    ],    "order_id": "ORDER_ID",    "revenue": "288"  }}
```

### Click Tracking

To automatically track clicks on elements on the page you should use `data-findify-track=[event-name]` attribute and `data-findify-*` on the same element to send this data in the correct format.

JSON

```kotlin
<button id='suggestion' data-findify-track='click-item' data-findify-id='1' data-findify-rid='2' />
```

...is equal to `sendEvent` function call of the Analytics:

JavaScript

```less
findifyAnalytics.sendEvent('click-item', { id: '1', rid: '2' })
```

> **Request ID (rid): **This attribute must always be always present in the request to the Feedback API. You can obtain the `rid` from Autocomplete \ Search \ Recommendation \ Smart Collection responses.

# Provide Recommendation Filter Data

### Filter Configuration

For recommendation filtering, you need to define the filters manually on the page inside `<body>` section of the page by adding `data-findify-filter="..."` and `data-findify-filter-value="..."` attributes.

HTML

```applescript
<div data-findify-filter="color" data-findify-filter-value="white"></div><div data-findify-filter="price" data-findify-filter-value='{"from": 20, "to": 40}'></div><div data-findify-filter="category" data-findify-filter-value='Jeans'></div><div id="findify-product-1" data-findify-filter="category" data-findify-filter-value="CategoryParent > CategoryChild" />
```