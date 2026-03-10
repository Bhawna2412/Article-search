---
title: "Search API Overview"
articleID: 2058
category: "API References > Search API Overview"
knowledgeBase: "Merchandising Cloud"
---

# Search API Overview

## Overview

The Search API provides flexible integration options for implementing search functionality on any platform, offering both low-level HTTP JSON routes and high-level SDKs and JavaScript libraries. This enables you to integrate search features using your preferred development tools while accessing the full range of search capabilities.

You can choose between direct API integration for complete control or SDK-based approaches for easier implementation. The API supports both GET and POST requests with JSON payloads, enabling JSONP for cross-domain requests, which helps ensure you can implement search functionality that fits your specific technical architecture and development workflow.

## Integration Options

Maropost Merchandising Cloud (formerly Findify) provides a set of low- and high-level tools that can help you integrate on any platform using your favorite tools.

For the low-level integration we provide a set of HTTP JSON routes that give you access to all features and tools that we offer.

On a high-level we provide a set of SDK and JS libraries that can ease the integration.

> **Note:** 👍We recommend using high-level tools
>  We recommend using SDKs and especially JS Feedback library and use low-level API only for building new SDKs

## HTTP Methods

All routes support both HTTP GET and HTTP POST verbs.

For POST requests, the request body must be JSON, with the Content-Type header set to application/json.

The GET requests can be used for JSONP. You can adjust the callback name thanks to the "callback" parameter.

### POST Request

```bash
curl -X POST https://api-v3.findify.io/v3/search \
  -H "Content-Type: application/json" \
  -d '{"key": "your-api-key", "query": "search-term"}'
```

### GET Request (JSONP)

```bash
curl "https://api-v3.findify.io/v3/search?key=your-api-key&query=search-term&callback=myCallback"
```