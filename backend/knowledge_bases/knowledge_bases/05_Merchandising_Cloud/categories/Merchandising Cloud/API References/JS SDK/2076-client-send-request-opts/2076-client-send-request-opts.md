---
title: "client.send(request, opts)"
articleID: 2076
category: "API References > JS SDK"
knowledgeBase: "Merchandising Cloud"
---

# client.send(request, opts)

The SDK send method enables making different request types—autocomplete, search, smart collections, recommendations, content, and feedback—through a unified interface with type-specific parameters. This provides a consistent API for accessing all platform features while handling request formatting, authentication, and response parsing automatically.

Each request type supports specific parameters like query strings, filters, sorting options, and pagination controls that enable precise control over results. This helps ensure you can implement sophisticated search and merchandising experiences while maintaining clean, maintainable code through the SDK's typed interfaces and helper methods.

## Arguments:

`request.type` **required** *(RequestType)*: The type of the request to be sent to the API. Check the type definition below for more details.`request.params` **required** *(Params)*: The parameters that are sent to the request. Check the Types for more details on the params object.

## Types:

`type` **required** *(RequestType)*: 'autocomplete' | 'search' | 'smart-collection' | 'recommendations' | 'feedback' | 'content'. Determines the type of request sent.`user.uid` **required** *(string)*: Unique customer id.`user.sid` **required** *(string)*: Session id.`user.email` **optional** *(string)*: Customer email.`user.ip` **optional** *(number)*: Customer ip.`user.ua` **optional** *(string)*: Customer user agent.`user.lang` **optional** *(string[])*: Languages.

`Params.user` **optional** *(User)*: Current user identity info. Can be provided on initialisation or per-request.

The rest of the `request.params` object depends on the value of `request.type`. Below are listed all different variants of the `Params` type.

## Types

`Filter.name` **required** *(string)*: Name of filter`Filter.type` **required** *(string)*: Type of filter`Filter.values` **optional** *(FilterValue[])*: Array of selected filter values`Sort.field` **required** *(string)*: Field to sort by`Sort.order` **required** *('asc' | 'desc')*: Sorting order`FilterValue.value` **optional** *(string)*: Selected filter value`FilterValue.from` **optional** *(string)*: Selected filter 'from' value (for range filters)`FilterValue.to` **optional** *(string)*: Selected filter 'to' value (for range filters)

### type: autocomplete

`Params.q`: **optional** *(string)*: The autocomplete query`Params.suggestion_limit` **optional** *(number)*: Limit of search suggestions`Params.item_limit` **optional** *(number)*: Limit of product matches

### type: search

`Params.q` **required** *(string)*: The search query`Params.offset` **optional** *(number)*: Offset of product items. Used for pagination`Params.limit` **optional** *(number)*: Number of products in result`Params.filters` **optional** *(Filter[])*: Array of selected filters`Params.sort` **optional** *(Sort[])*: Array of selected sorts

### type: smart-collection

`Params.slot` **required** *(string)*: Collection handle`Params.offset` **optional** *(number)*: Offset of product items. Used for pagination`Params.limit` **optional** *(number)*: Number of products in result`Params.filters` **optional** *(Filter[])*: Array of selected filters`Params.sort` **optional** *(Sort[])*: Array of selected sorts

### type: recommendation

`Params.type`: **required** *('slot' | 'newest' | 'trending' | 'latest' | 'viewed' | 'bought' | 'purchasedTogether' | 'featured')*: The recommendation typeThe rest of the params depend on the recommendation type.

- 
- 
- 
- 

### type: content

`Params.filters` **optional** *(Filter[])*: Array of selected filters`Params.sort` **optional** *(Sort[])*: Array of selected sorts`Params.q` **required** *(string)*: Search query

### type: feedback

`Params.event`: **required** *(EventType)*: The feedback event type. The event can be one of the following values:`EventType`: 'click-suggestion' | 'click-item' | 'redirect' | 'purchase' | 'add-to-cart' | 'update-cart' | 'view-page'

The rest of the properties on the `Params` type depend on which event is being sent. The different `Params` properties are defined below.

## Types:

`LineItem.item_id`: **required** *(string)*: Item ID of the bought item.`LineItem.variant_item_id`: **optional** *(string)*: Variant item ID of the bought item.`LineItem.unit_price`: **required** *(string)*: Sale price of the product.`LineItem.quantity`: **required** *(string)*: Quantity bought.

- 
- 
- 
- 
- 
- 
- 

## Returns:

Result of requested operation, depends on type of request.

## Examples of usage:

### Autocomplete

```javascript
var request = {
  type: 'autocomplete',
  params: {
    q: 'autocomplete-query',
    suggestion_limit: 10,
  }};
  client.send(request).then(function(response) {
    // handle autocomplete response});
```

### Search

```javascript
var request = {
  type: 'search',
  params: {
    q: 'search-query',
    offset: 24,
    limit: 48,
  },};
  client.send(request).then(response => {
    // handle search response});
```

### Smart Collections

```javascript
var request = {
  type: 'smart-collection',
  params: {
    slot: 'collection-name',
    offset: 24,
    limit: 48,
  },};
  client.send(request).then(response => {
    // handle smart collection response});
```

### Recommendations

```javascript
var request = {
  type: 'recommendation',
  params: {
    type: 'trending',
    offset: 24,
    limit: 48,
  },};
  client.send(request).then(response => {
    // handle recommendation response});
```

### Content Search

```javascript
var request = {
  type: 'content',
  params: {
    q: 'search-query',
    offset: 24,
    limit: 48,
  },};
  client.send(request).then(response => {
    // handle content search response});
```

## Feedback

```javascript
var request = {
  type: 'feedback',
  params: {
    event: 'click-item',
    item_id: '1234',
    rid: 'abcd1234',
  },};
  client.send(request).then(response => {
    // handle feedback response});
```