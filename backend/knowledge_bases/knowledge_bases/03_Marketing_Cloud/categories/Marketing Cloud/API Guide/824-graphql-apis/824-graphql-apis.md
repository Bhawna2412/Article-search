---
title: "GraphQL APIs"
articleID: 824
category: "API Guide"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# GraphQL APIs

You can use GraphQL APIs to streamlines your workflow when extracting complex email marketing data from your Marketing Cloud account. This significantly improves operational efficiency by enabling you to retrieve comprehensive campaign information, contact details, and performance metrics in a single API call rather than multiple separate requests.

GraphQL enables you to customize exactly which data points you need for your email marketing analysis, reducing data transfer overhead and helping optimize integration performance. When properly configured, this approach can enhance your data extraction processes and improve the speed of your marketing automation integrations.

**GraphQL** is a data query language and specification developed internally by Facebook in 2012 before being publicly open-sourced in 2015. It provides an alternative to REST-based architectures with the purpose of increasing developer productivity and minimizing the amount of data to be transferred.

### How Does GraphQL Compare to REST?

In many respects, GraphQL and REST share the same concepts: data is requested, submitted, and returned between systems over HTTPS. The transferred data is in a structured format such as JSON.

However, the biggest difference between the two architectures lies in how data is requested and returned.  Think of REST as a fixed-course menu. You only get what the chef has pre-determined will be served; no substitutions are allowed. GraphQL, on the other hand, is like an a la carte menu. You get to choose which elements you want and the order in which they appear in the response payload.

The advantage of GraphQL over REST is that you can extract data in a single method call, which otherwise would take five or six separate REST calls.

### Using GraphQL in Maropost for Marketing

As of the moment, we are using GraphQL as an alternative to REST for retrieving data from your Maropost for Marketing account. If you wish to submit and modify data via our APIs, then you must continue using our REST API for that activity.

In your actual call, your request payload will only include those elements and attributes that you wish to retrieve. GraphQL is an entirely self-defined data structure. By "self-defined", this term means that you determine which elements and attributes you want to retrieve, and how they appear in sequence within the response payload.

Also, see:

- [**API Overview**](https://galaxy.maropost.com/s/article/API-Overview)
- [**REST APIs**](https://galaxy.maropost.com/s/article/REST-APIs)

### Pulling Data Using the GraphQL API Endpoint

The API endpoint for our GraphQL service is [**https://api.maropost.com/accounts/**](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fapi.maropost.com%2Faccounts%2F)***:account_id*****/graphql**. You will still issue a POST command, even though you are retrieving data, and not submitting it.  Also, remember to include an API **auth_token** as a query string parameter in the URL. To learn how to create and manage API keys, see [**API Keys**](https://galaxy.maropost.com/s/article/API-Keys).

The response data is still returned in virtual "pages," just like it is returned by the REST API.  We recommend that you include the "total_pages" attribute in each of your method calls.  By knowing how many records are included in each virtual page and the total number of pages, you can programmatically retrieve the full result set of data.

Each GraphQL API method returns a default number of records per page. For example, the Campaigns API returns three campaigns per page by default. You can change the number of records per page using the **per** parameter. Hence, by including "**per: 50**" as a parameter in the request for Campaign data, you can increase the number to 50 campaigns per virtual page.

### GraphQL API Reference

The GraphQL API Reference lists the various queries that are available for you to construct. You can access the GraphQL API Reference on the Connections page of the application. Click your username in the top-right corner of the application, and from the drop-down menu, select Connections. Then, click the GRAPHQL API tab to see all the supported services categorized into different tabs.

Click the tab of each service to see the full menu of data points that are available to retrieve.

#### Campaigns API

With the Campaigns API, you can use a single method call to retrieve summary data for campaigns (total sends, total unique opens, total unique clicks, and so on) together with information about each individual contact who was sent the campaign.

By default, the Campaigns API returns information for all campaign types. You can include the **type** parameter if you want to only select specific types of campaigns; for example, only Journey campaigns, or only A/B campaigns.

#### Contacts API

The Contacts API gives you access to the entire history of your contacts, including their profile attributes, which lists they have subscribed to, what Journeys they have been in, what orders they have placed, and what campaigns they have responded to.

#### Product and Revenue API

This API method gives you access to the data stored in your Product and Revenue database. As mentioned previously, Maropost's GraphQL API is used only for retrieving data from your account's database. You'll still need to use either the REST API or the [**web tracking script**](https://galaxy.maropost.com/s/article/Capturing-Web-Conversions) to add data to your Product and Revenue database.

#### Journeys API

Use this GraphQL API method to retrieve summary data of Journeys and each campaign within those Journeys. If you want individual contact data for Journey campaigns, then you should use the Campaigns API.