---
title: "Agent Reference"
articleID: 2155
category: "Merchandising Cloud Integrations > Merchant JS API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-26
---

# Agent Reference

## Configuration

The Agent configuration extends [SDK](https://developers.findify.io/reference#js-sdk-introduction) and provides a few more options:

### `immutable`

*boolean [optional][default: false]*

Under the hood, Agent works with [Immutable.js](https://github.com/facebook/immutable-js) data structures, which allows a fast comparison between changes in response. By default this option is set to `false`, which makes Agent convert immutable data to standard JavaScript primitives. Set this option to `true` to switch back to immutable data and remove the overhead produced by calling `Immutable.toJS()`.

### `debounce`

*number [optional]*

This option allows debouncing requests to travel to the server in milliseconds, which is very helpful for `Autocomplete` so that requests are not sent for every typed letter. We recommend setting this option to `300` for autocomplete.

### `onError`

*function [optional]*

The callback function which will be fired if an error has occurred during request to the server.

## Methods

### `.on`

JavaScript

```
.on('change:items', function(items, meta) {})
```

Subscribes to events in Agent's response.

The first argument is the name of the event `[event]:[[deep]:]`, which specifies the event that you are subscribing to. You can subscribe to changes in deeply nested objects, e.g. `change:items:0:title` to get changes just for the title of the first item in the response.

The second argument is a callback function which will be called when an event is triggered. The first argument in the callback is the data you were subscribed to, the second is metadata from the server response.

### `.off`

JavaScript

```ada
.off('change:items') // Unsubscribe from all 'change:items' events.off(function) // Unsubscribe specific callback
```

Unsubscribe from event updates. You can pass either the event name or the handler function.

### `.set`

JavaScript

```lua
.set('q', 'white') // Set "q" value directly.set('filters', function(existFilter){}) // Or merge values
```

Updates query state.

The first argument is the name of the field.

The second argument can be a value or a function to merge new values with ones that already exist.
The 'set' and 'defaults' functions can be chained, which will set the data and merge it with default values before sending the request to the server.

**If you want to send separate requests for **`defaults`** and **`set`** values, use **`setTimeout`** to delay the execution of the function**

### `.defaults`

JavaScript

```
.defaults({ q: 'white', limit: 40 })
```

Set default values for request.

These values can be overwritten by `.set` function and will not be tracked in `.on` event handlers. The behaviour is similar to 'set'.

In order to reset values in `defaults`, just call it with an empty object.

### `.reset`

JavaScript

```sql
.reset() // Will reset whole query to default value.reset('q') // Reset just a "q"
```

If called with a string, this will reset that parameter in the query.

## Query parameters

`q`: [*string*]

- `Autocomplete`: [required]
- `Search`: [optional]
- `SmartSollection`: [optional]

`limit`: [*number*]

- `Autocomplete`: [optional]
- `Search`: [optional]
- `SmartSollection`: [optional]

`offset`: [*number*]

- `Autocomplete`: [optional]
- `Search`: [optional]
- `SmartSollection`: [optional]

`filters`: [*array*]

- `Search`: [optional]
- `SmartSollection`: [optional]

Filters in Agent have a different structure than in SDK. To simplify working with them we have removed `type` and nested object in `values`. The library will *automatically* add needed type and normalize filter values before sending requests to the server .

> **Filter types:** `category`: [*array*]

JavaScript

```css
.defaults({ filters: { category: [[ 'category 1', 'category 2' ]] }) //to define nested categories.defaults({ filters: { category: [[ 'category 1']] })
```

`range`: [*object*]

JavaScript

```css
.defaults({ filters: { price:[{ from: 1, to 20 }] } }).defaults({ filters: { price:[{ from: 1 }] } }).defaults({ filters: { price:[{ to: 20 }] } })
```

`text`: [*string*]

JavaScript

```css
.defaults({ filters: { brand: ['samsung'] } }).defaults({ filters: { brand: ['samsung', 'apple'] } })
```