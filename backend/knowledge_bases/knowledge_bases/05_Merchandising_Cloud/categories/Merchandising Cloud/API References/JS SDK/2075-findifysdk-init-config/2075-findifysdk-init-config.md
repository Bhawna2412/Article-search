---
title: "FindifySDK.init(config)"
articleID: 2075
category: "API References > JS SDK"
knowledgeBase: "Merchandising Cloud"
---

# FindifySDK.init(config)

## Overview

Initializing the SDK with your API key and configuration options creates a client instance for making search, recommendation, and feedback requests. Configuration parameters like request method, timeout duration, and retry count enable you to customize SDK behavior to match your technical requirements and performance needs.

The SDK supports both JSONP and POST request methods along with optional user objects for personalization, providing flexibility in how you integrate platform features while maintaining consistent user tracking. This helps ensure you can implement search and recommendations in ways that align with your application architecture.

## Configuration Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `config.key` | string | Yes | - | Merchant API key |
| `config.user` | user | No | - | User object. Could be provided either at initialization or at request |
| `config.method` | 'jsonp' \|\| 'post' | No | 'jsonp' | Request method |
| `config.log` | boolean | No | - | Defines, should Findify log requests on server |
| `config.url` | string | No | - | Search API url. Used to overwrite the default Search API url |
| `config.timeout` | number | No | 5000ms | Request timeout duration |
| `config.retryCount` | number | No | 3 | Retry count before request fails |
| `config.jsonpCallback` | string | No | - | JSONP callback function name. Required for method: 'jsonp' parameter |

## User Object Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `user.uid` | string | Yes | - | Unique customer id |
| `user.sid` | string | Yes | - | Session id |
| `user.email` | string | No | - | Customer email |
| `user.ip` | number | No | - | Customer ip |
| `user.ua` | string | No | - | Customer user agent |
| `user.lang` | string[] | No | - | Languages |

## Returns

Client instance, which could be used further for sending requests to the server.

## Code Examples

### JavaScript (SDK)

```javascript
var client = FindifySDK.init({
    method: 'post',
    key: 'b9h348b89h439g43',
    user: {
        uid: 'f892hf2938f2g9p2',
        sid: 'g2984hg2jg9823g9',
    }
});
// After, you can send requests to server:
client.send(request).then(function (response) {
    // handle response
});
```