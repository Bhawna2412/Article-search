---
title: "API Request Limits"
articleID: 819
category: "API Guide"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# API Request Limits

You can optimize your API integration performance by understanding and working within the established request limits designed to ensure reliable service for all Marketing Cloud users. These limits help maintain system stability while providing fair access to web services, enabling your applications to integrate effectively with email marketing automation.

The 10 concurrent calls per account limitation ensures consistent API performance and helps prevent resource contention. When properly managed in your application code, these guidelines enable reliable integration while maintaining the responsive performance needed for effective email marketing operations.

Our **API Request Limits** are a result of a longitudinal study of API usage across our entire client base. Our analysis revealed that the majority of API calls get completed in approximately 300 milliseconds. Keeping that in mind, we arrived at the limit that is consistent with industry standards while having minimal impact on our clients.

The API request limit is set as **10 concurrent calls per account**. Remember, there are currently no limits defined for total API calls over a span of 24 hours.

### Frequently Asked Questions

#### Why is Maropost enforcing a request limit for its web services?

While the definition of rate limits varies from company to company, the rate-limiting of web service consumption is an industry-standard practice. This practice prevents monopolization of resources and ensures everyone gets equal access to web services.

#### What happens when you exceed the API call request limit?

On exceeding the request limit, the Maropost API server responds with an HTTP status code 429. The Internet Engineering Task Force (IETF) defines the status code as follows:

"The 429 status code indicates that the user has sent too many requests in a given amount of time ("rate limiting")." Refer to [**RFC 6585**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc6585) to read more about the HTTP status code.

You must implement the response handling in your application code.

### Need Help?

If you would like to discuss further whether Maropost's rate-limiting will impact your consumption of our web services, please contact your Customer Success Manager.

If you do not know who that person is, please email our Customer Success team at [**Success@maropost.com**](mailto:sucess@maropost.com) to be connected with the appropriate person.