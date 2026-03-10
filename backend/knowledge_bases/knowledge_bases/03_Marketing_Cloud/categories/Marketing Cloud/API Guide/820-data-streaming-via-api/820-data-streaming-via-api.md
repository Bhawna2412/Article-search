---
title: "Data Streaming via API"
articleID: 820
category: "API Guide"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Data Streaming via API

You can use Marketing Cloud's data streaming API to streamlines your workflow and significantly improves the efficiency of large data retrievals. This helps optimize campaign data extraction while reducing the overhead of multiple API calls, enabling faster data analysis and reporting for your email marketing operations.

When properly configured, streaming APIs automates routine data collection tasks and enables you to process campaign reports, contact activities, and performance metrics in real-time. This reduces manual effort and helps optimize your data integration processes, making it easier to analyze email marketing performance across large datasets.

Maropost for Marketing has a streaming option for data-intensive API methods. This option sends the requested data in a continuous stream until all data has been sent.

The advantage of using the streaming option for large data sets is that it saves time. Because of constraints in the HTTP protocol, Maropost's API normally sends data in virtual XML or JSON-formatted "pages" containing a defined number of records per page.

The system developer must iterate through each page to retrieve the full result set. Streaming removes the overhead of having to make repetitive API method calls for each page of data. It allows the system developer to receive the full result set in a single API method call.

To take advantage of this option, it is assumed that your system can keep the socket connection open long enough to receive the full result set and it has the ability to consume the data in real-time (e.g. write the streamed data to a file or a message queue or to a database) without incurring a memory overflow condition.

The domain of the streaming data server is **stream.maropost.com**. This server can be used for all API methods that use a GET command.  If you send any other command (POST/PUT/DELETE/ etc.), then the server will return an HTTP Status Code 403, forbidding you to do so.

## Query String Parameters

- **Stream** - Indicates whether you want the data streamed to you or not. By default, the value is set to 'false.'  Set the value to 'true' in order to receive your data as a continual stream. If you omit this parameter, then the data will be sent in the usual XML or JSON-formatted "pages" as documented in the [**API Overview**](https://galaxy.maropost.com/s/article/API-Overview).
- **Limit **- Sets a limit to the number of total records to return in the response. System developers are advised to use this optional parameter when developing the integration for receiving the data stream. Limiting the number of records returned in the data stream avoids wasting resources pulling data that is not needed during the development phase.
- **Per** - Used only when "stream=false" (or simply omitted from the API method call). This optional query string parameter defines how many records you want to be included per page.  Specify "per=*N*" where *N* is an integer between 200 and 5000. The default value is 200 records per page. The exception is the GET /reports/journeys API method. Due to the large amount of data included in its payload, you can specify as low as "per=10".
- **Page** - Used only when "stream=false" (or simply omitted from the API method call). This optional query string parameter instructs Maropost for Marketing to send data from the specific "page". Most GET API methods include a "total-pages" attribute that corresponds to the number of total virtual pages containing the result set. Specify "page=*N*" where *N* is the specific page number containing the data.

## API Methods Enabled for Streaming

The following API methods are currently enabled for streaming.

### Campaigns API

- /campaigns
- /campaigns/:id/delivered_report
- /campaigns/:id/open_report
- /campaigns/:id/click_report
- /campaigns/:id/link_report
- /campaigns/:id/bounce_report
- /campaigns/:id/soft_bounce_report
- /campaigns/:id/hard_bounce_report
- /campaigns/:id/unsubscribe_report
- /campaigns/:id/complaint_report

### Reports API

- /reports
- /reports/opens
- /reports/clicks
- /reports/bounces
- /reports/unsubscribes
- /reports/complaints

## The Streamed Data Structures

Maropost for Marketing's streaming API returns data in either XML, JSON, or CSV format. Specify which format you want by appending .xml, .json, or .csv to the API method path. (e.g. [https://stream.maropost.com/accounts/4/opens.json?stream=true&auth_token=](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fstream.maropost.com%2Faccounts%2F4%2Fopens.json%3Fstream%3Dtrue%26auth_token%3D)*xxxxxxxxxx*).

### XML format

The response to the method call GET /campaigns/*nnn*/delivered_report.xml?stream=true

```plaintext
  jenni@example.com  78  1203725  123456  2016-05-25T08:03:44-04:00  2016-05-25T08:03:44-04:00  bea_schwartz@example.com  78  1203725  64321  2016-05-25T08:03:44-04:00  2016-05-25T08:03:44-04:00  erica@example.com  78  1203725  234567  2016-05-25T08:03:44-04:00  2016-05-25T08:03:44-04:00  jsmith@example.com  78  1203725  765432  2016-05-25T08:03:44-04:00  2016-05-25T08:03:44-04:00
```

### JSON format

The response to the method call GET /campaigns/*nnn*/delivered_report.json?stream=true

Note that this type of response is streamed JSON objects separated by a new line character.

```plaintext
{"email":"jenni@example.com","account_id":78,"campaign_id":1203725,"contact_id":123456,"created_at":"2016-05-25T08:03:44.000-04:00","updated_at":"2016-05-25T08:03:44.000-04:00"}{"email":"bea_schwartz@example.com","account_id":78,"campaign_id":1203725,"contact_id":654321,"created_at":"2016-05-25T08:03:44.000-04:00","updated_at":"2016-05-25T08:03:44.000-04:00"}{"email":"erica@example.com","account_id":78,"campaign_id":1203725,"contact_id":234567,"created_at":"2016-05-25T08:03:44.000-04:00","updated_at":"2016-05-25T08:03:44.000-04:00"}{"email":"jsmith@example.com","account_id":78,"campaign_id":1203725,"contact_id":765432,"created_at":"2016-05-25T08:03:44.000-04:00","updated_at":"2016-05-25T08:03:44.000-04:00"}
```

### CSV format

The response to the method call GET /campaigns/*nnn*/delivered_report.csv?stream=true

```plaintext
email,account_id,campaign_id,contact_id,created_at,updated_atjenni@example.com,78,1203725,123456,2016-05-25 08:03:44 -0400,2016-05-25 08:03:44 -0400bea_schwartz@example.com,78,1203725,654321,2016-05-25 08:03:44 -0400,2016-05-25 08:03:44 -0400erica@example.com,78,1203725,234567,2016-05-25 08:03:44 -0400,2016-05-25 08:03:44 -0400jsmith@example.com,78,1203725,765432,2016-05-25 08:03:44 -0400,2016-05-25 08:03:44 -0400
```