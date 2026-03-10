---
title: "Merchant JS API Overview"
articleID: 2147
category: "Merchandising Cloud Integrations > Merchant JS API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Merchant JS API Overview

> **Note: **This guide describes our Merchant Javascript Library API, which allows you to create a custom integration with mostly any Javascript framework, to control the feedback and handle requests from our server.

## Accessing the Maropost Merchandising Cloud (formerly Findify) Instance

JavaScript

```javascript
(window.findifyCallbacks = window.findifyCallbacks || []).push(function(findify) {  console.log(findify) // <- The Findify instance})
```

The *findifyCallbacks* array, including callbacks, will be resolved right after the library is loaded and the initial widgets are rendered. The functions pushed to this array after their initialization will be resolved immediately.

## Configuration

`findify.config` - our configuration is made of an immutable structure containing a global setup of your store's settings. Widgets are picking specific parts based on its type or "slot" (e.g.: recommendations). In case you want to create a manual recommendation widget, the configuration would not be picked automatically, so you need to apply it manually.
You can find an example configuration over here: [Example configuration](https://github.com/findify/findify-js/blob/develop/packages/bundle/src/config.ts)

JavaScript

```dart
const widgetConfiguration = findify.config.getIn(['features', 'search', '#home-findify-rec-2']);findify.widget.attach('#node', 'search', widgetConfiguration.toJS())
```

## Widgets

`findify.widgets` - contains methods to manage widgets

### `findify.widgets.attach([node], [type], [config])`

Will create a custom widget and render it in HTML node.

- *node* - CSS selector or DOM node where the widget will be placed
- *type* - The type of a widget (could be "Autocomplete", "Search", "Recommendation")
- *config* - Extends the [feature configuration](https://github.com/findify/findify-js/blob/develop/packages/bundle/src/config.ts#L75). Also, you can provide a "widgetKey" to be able to access this widget by a key.

### `findify.widgets.detach([widgetKey])`

Will completely remove a widget.

- *widgetKey* - unique widget key or specified one

### `findify.widgets.list()`

List of created widgets on the page.

### `findify.widgets.get([widgetKey])`

Returns a widget by key.

- *widgetKey* - unique widget key or specified one

### `findify.widgets.findByType([type])`

Returns an array of widgets with a specified type

- *type* - either Search, Recommendation or Autocomplete

## Widget Properties

- *type* - widget type
- *key* - unique widget key
- *node* - node where widget is rendered in
- *agent* - [@findify /agent](https://galaxy.maropost.com/kb/articles/2070-findifyanalytics-config) instance reference
- *config* - widget configuration [[sample](https://github.com/findify/findify-js/blob/develop/packages/bundle/src/config.ts#L76)]

## Events

`findify.listen` and `findify.emit` - cross-widget events, you can subscribe to a [widget lifecycle](https://github.com/findify/findify-js/blob/develop/packages/bundle/src/core/events.ts) or emit your own event.

### `findify.listen(callback([type], [*props], [*props]))`

- *type* - [event type](https://github.com/findify/findify-js/blob/develop/packages/bundle/src/core/events.ts)
- *props* - event specific properties

### `findify.emit([type], [props])`

- *type* - [event type](https://github.com/findify/findify-js/blob/develop/packages/bundle/src/core/events.ts)
- *props* - event specific properties

## Analytics

`findify.analytics` - instance of [@findify /analytics](https://galaxy.maropost.com/kb/articles/2070-findifyanalytics-config)

## Utils

`findify.utils` - list of helper functions and validations

- *history* - custom [window history](https://developer.mozilla.org/ru/docs/Web/API/History_API) API instance
- *collectionPath()* - normalized window.location.pathname
- *isCollection(collections[array], slot[string])* - check if current page is collection page
- *isSearch()* - check if current page is Search Page
- *listenHistory(callback[function])* - sets up a listener which will get called every time the location changes
- *getQuery()* - returns an object with proper query parameters of an url
- *buildQuery(query[object])* - creates a string from a query object
- *redirectToSearch(searchTerm[string])* - will redirect to the search page with required query parameters
- *scrollTo(element[string|node], offset[number])* - will scroll to a specific element +- offset(default 0)
- *setQuery(query[object])* - creates a string from the query object and pushes it to the history
- *redirectToPage(redirect[object], meta[object])* - redirects to a given page defined by `redirect.url` property, while also maintaining Findify analytics and functionality.