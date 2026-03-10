---
title: "Analytics Reference"
articleID: 2151
category: "Merchandising Cloud Integrations > Merchant JS API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Analytics Reference

Analytics Reference is a library that sets up environment variables and exposes methods you can use to track and store events required by the Feedback API and by our AI algorithms. It will automatically define the best data transfer method depending on the browser version or environment.

## Configuration

### `key`

Your private API key, which you can get in the "[integration section](https://dashboard.findify.io/settings/integration)" of our Merchant Dashboard.

### `events`

Key-value object with events that you don't want to track. You can set to `false` to disable automatic tracking. **By default our Analytics tracks everything**.

JSON

```
events: { 'view-page': false }
```

### `platform`

Enable specific platform-based logic. Currently extra logic is implemented only for `bigcommerce` and for `shopify` platforms.

JSON

```
platofrm: { bigcommerce: true }
```

## Methods

### `sendEvent`

Sends an event to the Feedback API with parameters defined in the second parameter. The third argument determines if this event should be saved in cookies or not, to prevent losing this event when the page reloads.

JavaScript

```
analytics.sendEvent('click-item', { rid: REQUEST_ID, id: ITEM_ID }, true)
```

### `listen`

Allows for listen to **all** events that are tracked through analytics.

JavaScript

```javascript
var unsubsribe = analytics.listen(function (event, props) { }); // Start listening to eventsunsubsribe() // Remove event listener
```

### `invalidate`

Updates `analytic.store` and sends provided events to the Feedback API immediately.

JavaScript

```
analytics.invalidate({ 'click-suggestion': {...} })
```

## Properties

### `user`

**Getter** function, that returns the current user. This `user` object is required in Agents and SDK.

JavaScript

```css
console.log(analytics.user)// > { uid: USER_ID, sid: SESSION_ID, persist: true/false }
```

### `state`

**Getter/Setter** functions, that return information about previously tracked events that are not sent to the Feedback API yet.

JavaScript

```lua
console.log(analytics.state)// > { 'view-page': {...}  }analytics.state = { 'add-top-cart': {...} }console.log(analytics.state)// > { 'view-page': {...}, 'add-top-cart': {...}  }
```