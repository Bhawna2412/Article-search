---
title: "Release Notes v3.15.5 - API Updates"
articleID: 1212
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-06-29
---

# Release Notes v3.15.5 - API Updates

This update will become available to all users by the **10th of May 2022**.

## New Endpoints

### Create and Update Customer Data

You can now create and update customer data using the Retail Express Unified API. In addition to that, using these new methods you can even update customer details not previously available through the legacy APIs:

* Add customers to Price Groups
* Update Survey Segment answers
* Retrieve Loyalty Points Balances (we currently don't allow for points to be updated via API - if this is important to you please [vote for this feature](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fportal.productboard.com%2Fkq3l8gpssi1xrzfpynvqlmzc%2Fc%2F80-rest-loyalty-endpoint%3Futm_medium%3Dsocial%26utm_source%3Dportal_share))

New endpoints:

* **POST /customers**
* **PUT /customers/{id}**
* **GET, POST, PUT, DELETE /customers/{id}/deliveryaddresses** - allows for retrieval, creation, updates, and deletion of delivery addresses for a given customer
* **GET /customersurveysegments** - allows for retrieval of customer survey segments and segment options (questions and answers) as configured in settings
* **GET /customertypes** - allows for retrieve of customer types as configured in settings

[Back to top](#top)

---

## New Parameters

### GET /customers

We've added a new '**order\_by**' parameter which allows results to be ordered by:

* id
* customer\_number
* email, mobile
* first\_name
* last\_name
* company
* customer\_type\_name
* receive\_email
* receive\_post
* receive\_sms
* loyalty\_program\_enabled
* loyalty\_points\_available
* loyalty\_points\_available\_value
* loyalty\_points\_redeemed
* loyalty\_points\_to\_date
* account\_customer\_enabled
* account\_customer\_payment\_terms
* price\_group\_standard
* price\_group\_fixed
* home\_outlet\_name
* custom\_reference
* created\_on
* modified\_on

### GET /orders

We've added a new **'filter\_by**' parameter which allows results to be filtered by:

* order\_number
* order\_status\_id
* sales\_channel\_id
* outlet\_id, customer\_id
* customer\_number
* customer\_email
* sales\_person\_id.

Various operators are available and filters can be combined - please see the [Developer API documentation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2Fgetting-started) for more details.