---
title: "Integrate a Third Party Application with Maropost Commerce using OAuth2"
articleID: 1573
knowledgeBase: "Help Articles"
lastUpdated: 2022-06-07
---

# Integrate a Third Party Application with Maropost Commerce using OAuth2

### Introduction

Third party applications can be integrated with a Maropost Commerce store seamlessly using OAuth2. By using the [OAuth2 authorization\_code flow](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Faaronparecki.com%2Foauth-2-simplified%2F%23authorization), a Maropost Commerce user can approve a third party application, allowing the third party application to fetch information about the Maropost Commerce Store and user.

### Domain and URLs

#### Maropost Commerce App Portal Domains

|  |  |
| --- | --- |
| Staging | apps.staging.getneto.com |
| Production | apps.getneto.com |

#### Maropost Commerce App Portal URLs

**Authorisation Page**

|  |  |
| --- | --- |
| URL | [https://{neto](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2F%7Bneto) app portal domain}/oauth/v2/auth |
| Description | Page to redirect user to when accessing the third party application |
| Request Parameters (query string) | The following parameters are supplied in the query string of the Authorisation URL:   | Parameter | Required | Description | | --- | --- | --- | | client\_id | yes | Your application client ID (supplied by Maropost Commerce) | | redirect\_uri | yes | The URI for Maropost Commerce to redirect the user to after authorisation | | response\_type | yes | Must be “code” | | store\_domain | yes | The domain of the Maropost Commerce store that is being authorised | | state | no | A value that is appended to the redirect URI for you to use | |
| Success Response Parameters (query) | Upon success, the follow parameters will be appended to the redirect URI that is supplied with the authorisation request:   | Parameter | Required | Description | | --- | --- | --- | | code | yes | The authorisation code that is required to obtain an authorisation token | | state | no | The state value that was supplied with the Authorisation request | |
| Error Response Parameters (query) | Upon error, the user will be redirected using the supplied redirect URI, and the following parameters will be appended to the query string:   | Parameter | Required | Description | | --- | --- | --- | | error | yes | The unique identifier for the error. This is safe to use for error handling. | | error\_description | yes | The description for the error. While this is safe to show to the user, we advise using it for debugging/logging only, and providing the user with a more meaningful error message based on the context of your application and the error. | |

**Deauthorisation Page**

|  |  |
| --- | --- |
| URL | [https://{neto](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2F%7Bneto) app portal domain}/oauth/v2/deauth |
| Description | Page to redirect user to when closing an account. |
| Request Parameters (query string) | The following parameters are supplied in the query string of the Deauthorisation URL:   | Parameter | Required | Description | | --- | --- | --- | | client\_id | yes | Your application client ID (supplied by Maropost Commerce) | | redirect\_uri | yes | The URI for Maropost Commerce to redirect the user to after confirmation to deauthorise | | response\_type | yes | Must be “code” | | store\_domain | yes | The domain of the Maropost Commerce store that is being authorised | |
| Success Response Parameters (query) | Upon success, the follow parameters will be appended to the redirect URI that is supplied with the deauthorisation request:   | Parameter | Required | Description | | --- | --- | --- | | code | yes | The authorisation code that is required to obtain an authorisation token | | state | no | The state value that was supplied with the Deauthorisation request | |
| Error Response Parameters (query) | Upon error, the user will be redirected using the supplied redirect URI, and the following parameters will be appended to the query string:  | Parameter | Required | Description | | --- | --- | --- | | error | yes | The unique identifier for the error. This is safe to use for error handling. | | error\_description | yes | The description for the error. While this is safe to show to the user, we advise using it for debugging/logging only, and providing the user with a more meaningful error message based on the context of your application and the error. | |

**Token Payload Endpoint**

|  |  |
| --- | --- |
| URL | [https://{neto](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2F%7Bneto) app portal domain}/oauth/v2/token |
| Description | Endpoint to exchange authorisation code for payload. This endpoint must only be accessed from a server-side request. |
| Request Parameters (query string) | The following parameters are supplied in the query string of the Token Payload URL:  | Parameter | Required | Description | | --- | --- | --- | | client\_id | yes | Your application client ID (supplied by Maropost Commerce) | | client\_secret | yes | The application client secret (supplied by Maropost Commerce) | | redirect\_uri | yes | The URI that was supplied with the authorisation/deauthorisation request. | | grant\_type | yes | Must be “authorization\_code” | | code | yes | The authorisation code that was returned from a successful authorisation/deauthorisation request. | |
| Success Payload - Authorisation | The following JSON payload will be returned in the body of the response for a code that was generated from an authorisation request:  ```  {      "scope": "api user address",      "store_id": "A STORE ID",      "store_domain": "www.johnsnetostore.com.au",      "store_name": "John&#39;s Neto Store",      "store_timezone": "Australia/Brisbane",      "access_token": "AN ACCESS TOKEN",      "user": {          "id": "25EC6CF5D2F0DBBCFC8435900F2425FA030CFAB2933F29529F30512A9685810C",         "first_name": "John",          "last_name": "Doe",          "email": "johndoe@johnsnetostore.com.au"      },      "billing_address": {          "street1": "Building 1",          "street2": "123 Fake St",          "city": "Brisbane",          "state": "Queensland",          "post_code": "4000",          "country_name": "Australia",          "country_code": "AU"      }  } ```  | Field | Type | Required Scope | Description | | --- | --- | --- | --- | | scope | string | N/A | List of approved scopes (space-separated) | | store\_id | string | N/A | A unique identifier for the Maropost Commerce Store | | store\_domain | string | N/A | The current domain for the Maropost Commerce Store.  Note: the domain will change during the lifecycle of a Maropost Commerce Store | | store\_name | string | N/A | The name of the Maropost Commerce Store | | store\_timezone | string | N/A | The timezone of the Maropost Commerce Store as defined in the [TZ Database](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FList_of_tz_database_time_zones) | | access\_token | string | api | The API token for the Maropost Commerce Store | | user | object | user | An object containing properties of the user that approved/accessed the third-party app | | user.first\_name | string | user | The first name of the user | | user.last\_name | string | user | The last name of the user | | billing\_address | object | address | The object containing the billing address of the merchant | | billing\_address.street1 | string | address | The first street line | | billing\_address.street2 | string | address | The second street line | | billing\_address.city | string | address | The city | | billing\_address.state | string | address | The state | | billing\_address.post\_code | string | address | The post/zip code | | billing\_address.country\_name | string | address | The country name | | billing\_address.country\_code | string | address | The [ISO3166-1 Alpha-2 code](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FISO_3166-1%23Current_codes) for the country | |
| Success Payload - Deauthorisation | The following JSON payload will be returned in the body of the response for a code that was generated from an deauthorisation request:   ```  {      "store_id": "A STORE ID",      "store_domain": "A STORE DOMAIN"  } ```  | Field | Type | Description | | --- | --- | --- | | store\_id | string | A unique identifier for the Maropost Commerce Store | | store\_domain | string | The current domain for the Maropost Commerce Store.  Note: the domain will change during the lifecycle of a Maropost Commerce Store | |  |  |  | |
| Failure Payload - Authorisation & Deauthorisation | The following JSON payload will be returned in the body of the response for a failed request:   ```  {      "error": "invalid_grant",      "error_description": "Code doesn&#39;t exist or is invalid for the client"  } ```  | Field | Type | Description | | --- | --- | --- | | error | string | The unique identifier for the error. This is safe to use for error handling. | | error\_description | string | The description of the error | |

### Processes

#### Third Party Application Account Provision/Access Process

**Workflows**

Maropost Commerce Initiated Third Party Application Install

[![](https://maropost-inc--c.documentforce.com/servlet/servlet.FileDownload?file=0155g000000uCEp)](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.netohq.com%2Fsupport%2Fservlet%2FrtaImage%3Feid%3Dka10K000000IWza%26feoid%3D00N2800000JL2j1%26refid%3D0EM0K000001UuyY)

Maropost Commerce Initiated Third Party Application Access

[![](https://maropost-inc--c.documentforce.com/servlet/servlet.FileDownload?file=0155g000000uCEu)](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.netohq.com%2Fsupport%2Fservlet%2FrtaImage%3Feid%3Dka10K000000IWza%26feoid%3D00N2800000JL2j1%26refid%3D0EM0K000001Uuyd)

#### Third Party Application Account Closing Process

**Workflow**

[![](https://maropost-inc--c.documentforce.com/servlet/servlet.FileDownload?file=0155g000000uCEz)](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.netohq.com%2Fsupport%2Fservlet%2FrtaImage%3Feid%3Dka10K000000IWza%26feoid%3D00N2800000JL2j1%26refid%3D0EM0K000001Uuyi)

### Using an OAuth2 Access Token with the Maropost Commerce API

Once you have obtained a OAuth2 access token, you can access the API for the store.

Information about how to use the Maropost Commerce API can be found at [https://developers.neto.com.au/documentation/engineers/api-documentation/](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.neto.com.au%2Fdocumentation%2Fengineers%2Fapi-documentation%2Fgetting-started%2Fgetting-started%2F).

**Please Note**: when using an OAuth2 access token, different headers are required than documented in the public documentation.

|  |  |
| --- | --- |
| Endpoint URL | [https://{store](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2F%7Bstore) domain}/do/WS/NetoAPI |
| Method | POST |
| XML Headers | The following headers are required when using using XML with the Maropost Commerce API:  | Header | Required | Description | | --- | --- | --- | | NETOAPI\_ACTION | yes | The request you want to make. | | X\_ACCESS\_KEY | yes | Your application client ID (supplied by Maropost Commerce) | | X\_SECRET\_KEY | yes | The OAuth2 access token for the store | |
| JSON Headers | The following headers are required when using using JSON with the Maropost Commerce API:  | Header | Required | Description | | --- | --- | --- | | NETOAPI\_ACTION | yes | The request you want to make. | | X\_ACCESS\_KEY | yes | Your application client ID (supplied by Maropost Commerce ) | | X\_SECRET\_KEY | yes | The OAuth2 access token for the store | | Accept | yes | Must be “application/json” | |

### Handling Errors during the OAuth2 process

If an error occurs during the OAuth2 process, it is suggested that you redirect the user to the Maropost Commerce OAuth2 error page. This will log an error with Maropost Commerce, allowing us to to act on the error if required.

|  |  |
| --- | --- |
| URL | [https://{neto](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2F%7Bneto) app portal domain}/oauth/v2/error |
| Description | Page to redirect user to when if an error occurs during the OAuth process. This page will present a generic message to end users, while logging an error with Maropost Commerce. |
| Request Parameters (query string) | The following parameters should be supplied in the query string of the error page URL to allow for error tracing:  | Parameter | Required | Description | | --- | --- | --- | | client\_id | no | Your application client ID (supplied by Maropost Commerce) | | error | no | An error code from your application | | error\_description | no | A description of the error.  Note: this error message is not shown to the user, however it will be visible in the URL. Please ensure it is appropriate for end users. | | store\_domain | no | The domain of the Maropost Commerce store that the error occurred for | | store\_id | no | The ID of the Maropost Commerce store that has the error occurred for | |