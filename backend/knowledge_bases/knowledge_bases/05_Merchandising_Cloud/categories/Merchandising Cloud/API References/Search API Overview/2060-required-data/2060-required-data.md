---
title: "Required Data"
articleID: 2060
category: "API References > Search API Overview"
knowledgeBase: "Merchandising Cloud"
---

# Required Data

When integrating with the JSON API or SDKs, you need to provide user objects containing uid and sid identifiers that enable personalization features. These identifiers help the platform track users across sessions and deliver personalized search results, recommendations, and product suggestions tailored to individual shopping behaviors.

For optimal personalization, providing additional user properties like email, IP address, user agent, and language preferences enables more accurate behavioral tracking across devices and better recommendation quality. This helps ensure customers see relevant products based on their complete browsing history and preferences, which tends to enhance engagement and conversion rates.

When using the JSON API directly, or high-level SDKs and JS libraries, there several entities that must be provided.

## The user object

It defines the current user, which gives just enough information to enable personalization.

User object has two properties that are required `uid` and `sid`

### user.uid

**string**
**max length: 32 characters**

This is a unique identified of the user across multiple sessions. You can store the uid in the cookie or get it from any other source (like a database). It must uniquly identify the user.

### user.sid

**string**
**max length: 32 characters**

A unique session identifier, the best is to store the value in a cookie on the client side, with a TTL of 30 minutes or use a session ID that your platform provides.

Other user properties are not required and the API will answer if they are not provided.

> **Note:** 🚧 **Personalization**: For the best results, our personalization platform requires `user.email`, `user.ua`, `user.ip` and `user.lang` properties

### user.email

**string**

The email from the user, if the user is logged in. Providing an email allows us to track the user across devices and give them relevant personalized results.

### user.ip

**string**

By default we get the ip from the request that we receive, but if you are using a direct JSON API integration or for some reason the call is made not from the user's browser, please include the relevant user ip in the request.

### user.ua

**string**

By default we get the user agent from the request that we receive, but if you are using a direct JSON API integration or for some reason the call is made not from the user's browser, please include the relevant user user agent in the request.

### user.lang

**list of string**

By default we get the user languages from the request that we receive, but if you are using a direct JSON API integration or for some reason the call is made not from the user's browser, please include the relevant user user languages in the request. You can use either an ISO 639-1 language format code or include the locale code: `en-GB`.

### t_client

A timestamp from the client side of the user, useful to keep the right ordering of the events that happened.