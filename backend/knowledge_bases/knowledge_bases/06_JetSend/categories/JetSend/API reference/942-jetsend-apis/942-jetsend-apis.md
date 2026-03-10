---
title: "JetSend APIs"
articleID: 942
category: "API reference"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-16
---

# JetSend APIs

The JetSend APIs follow the Restful pattern. All requests and responses are encoded in JSON. The error codes are indicated in the form of HTTP error codes.

## JetSend API Guide

For the complete list of APIs, see [https://docs.jetsend.com](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdocs.jetsend.com).

## Base URL

All calls to the API need to start with the appropriate base URL: 

```
https://app.jetsend.com/api/v1
```

## Authentication

You must authenticate each request by setting the authorization header with a valid API key or a valid JWT token. You can create and manage your API Keys in your account. You must send the API key in the following format:

```
“Authorization”: “A3a8a802104ca6ba98a87595150ebdac0f1bbb71edbe49544a1108ef367bcb9eb”
```

> **Note:** Store your API keys secure and never share them publicly.

## Success

When you make an API call, you receive a result in the response. The result is received in JSON format and contains the following:

* messageId
* totalRejectedRecipients
* totalAcceptedReceipants

The following is a sample for API call response:

```
{  
“result”: {  
“ID”: “50cffle8-3c5d-11ea-a481-0242acle3125”,  
“TotalAcceptedRecepients”: 1,  
“TotalRejectedRecepients”: 0  
}  
}
```

## Errors

When you make an API call you may receive an error message in response. Either there is something wrong with your request or something went wrong on our end. Errors respond with an error code and JSON that contains a more precise message and API code.    **Example:** 4002 From Address is invalid

```
{  
“errors”: [  
{  
“message”: “from address is invalid”,  
“code”: “4002”  
}  
]  
}
```

**Error Codes:**  The following table discusses the error codes and their respective suggested actions:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **HTTP****CODE** | **STATUS NAME** | **DESCRIPTION** | **SUGGESTED ACTION** | **OUR ERROR CODES** |
| **400** | Bad Request | Problem with your from mail address. It is required. | Add from mail email address. | 4002 |
| **400** | Bad Request | Problem with your from address. It is invalid. | Add valid from mail email address. | 4003 |
| **400** | Bad Request | Problem with the recipient address. It is required. | Add a recipient email address. | 4004 |
| **400** | Bad Request | Problem with the recipient address. It is invalid. | Add a valid recipient email address. | 4005 |
| **500** | Internal Server Error | Something went wrong at our end. | Try the request again later. You can contact JetSend customer support. | 5000 |
| **202** | Accepted | Your email request has been received | \_ | 2002 |