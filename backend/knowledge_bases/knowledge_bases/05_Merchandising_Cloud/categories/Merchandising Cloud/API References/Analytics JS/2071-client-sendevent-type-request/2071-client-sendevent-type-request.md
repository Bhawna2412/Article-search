---
title: "client.sendEvent(type, request)"
articleID: 2071
category: "API References > Analytics JS"
knowledgeBase: "Merchandising Cloud"
---

# client.sendEvent(type, request)

Sending behavioral events through the Analytics client enables tracking of customer interactions like clicks, purchases, add-to-cart actions, and page views that power personalization and machine learning. Each event type requires specific parameters that capture the context needed to understand customer behavior and improve recommendation quality.

Event tracking provides the behavioral data foundation for AI-driven features, from understanding which search suggestions customers click to tracking complete purchase journeys. This helps ensure the personalization engine has accurate signals to optimize search relevance, product recommendations, and merchandising strategies based on actual customer actions.

This method has dynamic `request` argument. It depends on provided event `type`. See description below to get definitions of `request` argument for every event `type`.

## Click Suggestion Event

### Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | Yes | 'click-suggestion' | Click suggestion event type |
| `request.rid` | string | Yes | - | ID of request where user clicked on suggestion |
| `request.suggestion` | string | Yes | - | Suggestion title |

## Click Item Event

### Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | Yes | 'click-item' | Click item event type |
| `request.item_id` | string | Yes | - | ID of item which user clicked |
| `request.variant_item_id` | string | No | - | ID of item variant |
| `request.rid` | string | No | - | ID of request where user clicked on item |

## Redirect Event

### Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | Yes | 'redirect' | Redirect event type |
| `request.rid` | string | Yes | - | ID of request where redirect happened |
| `request.suggestion` | string | Yes | - | Suggestion that leads to the redirection |

## Purchase Event

### Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | Yes | 'purchase' | Purchase event type |
| `request.order_id` | string | Yes | - | ID of order |
| `request.currency` | string | Yes | - | Currency of the purchase |
| `request.revenue` | number | Yes | - | Total revenue of the purchase |
| `request.total_discount` | number | No | - | Total discount of the purchase |
| `request.total_tax` | number | No | - | Total tax of the purchase |
| `request.shipping` | number | No | - | Total shipping of the purchase |
| `request.line_items` | line_item[] | Yes | - | Items in cart |
| `request.affiliation` | string | No | - | Affiliation of the purchase |

## Update Cart Event

### Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | Yes | 'update-cart' | Update cart event type |
| `request.line_items` | line_item[] | Yes | - | Items in cart |

## Add to Cart Event

### Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | Yes | 'add-to-cart' | Add to cart event type |
| `request.item_id` | string | Yes | - | ID of item added to cart |
| `request.variant_item_id` | string | No | - | ID of item variant |
| `request.rid` | string | No | - | ID of request where add to cart button was clicked |
| `request.quantity` | number | No | 1 | Quantity of items added to cart |

## View Page Event

### Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | Yes | 'view-page' | View page event type |
| `request.item_id` | string | No | - | ID of item (only for product pages) |
| `request.variant_item_id` | string | No | - | ID of item variant |

## Line Item Type

### Properties

| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `line_item.item_id` | string | Yes | - | ID of item |
| `line_item.unit_price` | number | Yes | - | Price of the product |
| `line_item.quantity` | number | Yes | - | Quantity of items |
| `line_item.variant_item_id` | string | No | - | ID of item variant |

## Code Examples

### Click Suggestion Event

```javascript
// Click suggestion event
var request = {
    rid: '892',
    suggestion: 'White t-shirts'
};
client.sendEvent('click-suggestion', request);
```

### Click Item Event

```javascript
// Click item event
var request = {
    rid: '892',
    item_id: '9842'
};
client.sendEvent('click-item', request);
```

### Redirect Event

```javascript
// Redirect event
var request = {
    rid: '892',
    suggestion: '9842'
};
client.sendEvent('redirect', request);
```

### Purchase Event

```javascript
// Purchase event
var request = {
    order_id: '451',
    currency: 'usd',
    revenue: 394.1,
    line_items: [{
        item_id: '5028',
        unit_price: 394.1,
        quantity: 2
    }]
};
client.sendEvent('purchase', request);
```

### Update Cart Event

```javascript
// Update cart event
var request = {
    line_items: [{
        item_id: '5028',
        unit_price: 394.1,
        quantity: 2
    }]
};
client.sendEvent('update-cart', request);
```

### Add to Cart Event

```javascript
// Add to cart event
var request = {
    item_id: '5720',
    rid: '72046',
    quantity: 1
};
client.sendEvent('add-to-cart', request);
```

### View Page Event

```javascript
// View page event
var request = {
    item_id: '8572'
};
client.sendEvent('view-page', request);
```