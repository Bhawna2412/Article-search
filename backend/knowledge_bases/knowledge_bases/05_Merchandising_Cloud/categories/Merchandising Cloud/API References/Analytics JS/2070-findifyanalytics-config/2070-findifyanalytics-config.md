---
title: "findifyAnalytics(config)"
articleID: 2070
category: "API References > Analytics JS"
knowledgeBase: "Merchandising Cloud"
---

# findifyAnalytics(config)

## Overview

Initializing the Analytics library with your API key creates a client instance that enables tracking user behavior events critical for personalization and machine learning. This configuration establishes the foundation for sending event data that powers search relevance, recommendations, and AI-driven product positioning.

The client instance provides methods for sending various event types and accessing user objects that integrate with other SDK libraries, helping ensure consistent tracking across your implementation. This helps optimize data collection for features that rely on behavioral patterns to deliver personalized shopping experiences.

## Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `config.key` | string | Yes | - | Merchant API key |

## Returns

Client instance, which could be used further for sending feedback requests to the server.

## Code Examples

### JavaScript (SDK)

```javascript
// First, you need to initialize library:
var client = findifyAnalytics({
    key: 'b9h348b89h439g43'
  });
  // Then, you should initialize client instance.
  // Usually you want to do this on document ready event to collect all data from HTML tags.
  client.initialize();
  // After library initialized, we can send event requests to server with `client` instance. Let's perform click-suggestion request:
  client.sendEvent('click-suggestion', {
      rid: 'request_id',
      suggestion: 'Black t-shirt'
    });
    // You can get `user` instance, which can be used further in `findify-sdk` library:
    var user = client.user;
    // To access events on the page you can use `client.state`,
    // Analytics state represents all events that was defined on the page
    // before findify
    // You can listen for events with `listen` function
    var unsubscribe = client.listen(function(event, payload) {
        console.log(event); // outputs event name
        console.log(payload); // outputs event payload
      });
```