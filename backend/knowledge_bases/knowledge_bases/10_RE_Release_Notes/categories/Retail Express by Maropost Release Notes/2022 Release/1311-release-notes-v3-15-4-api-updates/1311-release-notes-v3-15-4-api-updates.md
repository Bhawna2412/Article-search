---
title: "Release Notes v3.15.4 - API Updates"
articleID: 1311
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes v3.15.4 - API Updates

# Release Notes v3.15.4 - API Updates

In this release, we've introduced updates to the Unified Retail Express API. For detailed information please refer to the [Developer API documentation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F).

This update became available to all users from the 20th April 2022.

To preview other changes coming in the future, take a look at our [API Roadmap](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fportal.productboard.com%2Fkq3l8gpssi1xrzfpynvqlmzc%2Ftabs%2F7-in-development).

---

## New endpoints

### GET /vouchers and /vouchertypes

We have added the ability to query voucher data to our REST API and extended the functionality. A full list of available parameters, responses and filters can be found on our [Developer Portal](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F).

In addition to Voucher ID, Code, Dates, Balances & Type you can now also obtain:

* The Original Transaction a Voucher was purchased in
* The associated Customer Record

Please note this is a retrieval method only, and there is no PUT, POST or DELETE options. Vouchers can be created through the order creation process, with custom integrations available to be built via the [Event Driven Synchronisation API](https://galaxy.maropost.com/s/article/Release-Notes-3-15-0-AP).

[Back to top](#top)

---

## Updated Endpoints

### GET /orders

We've simplified the process of retrieving order data by adding the ability to retrieve order items, payments and fulfilments (instead of using separate calls).

We've also introduced filtering to return relevant data only, so you can retrieve orders by:

* Invoice Number (instead of the Order ID)
* Specific status
* Customers with an email address
* Excluding Cash Sales
* Specific orders associated to a Sales Channel, Sales outlet, or Sales Person

### GET /orderitems

To allow greater visibility of Promotional Campaign success for external reporting tools, we've added the ability to retrieve the Campaign ID and Name triggered against a line item for POS processed sales.

Please note:

* Promotional Campaigns are only supported for instore (POS) sales, and cannot be applied to sales created via external channels/API integrations
* The returned data will not include the coupon used against the transaction - if this is important to you please [let us know](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fportal.productboard.com%2Fkq3l8gpssi1xrzfpynvqlmzc%2Fc%2F89-coupon-promotional-campaign-management%3Futm_medium%3Dsocial%26utm_source%3Dportal_share).
* This endpoint allows you to retrieve the promotion that was triggered against a sale after the sale was processed. It is not suitable to qualify if a product is part of a campaign, or to synchronise Promotional Campaigns or their configuration with online Sales Channels. [Let us know if this is important to you](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fportal.productboard.com%2Fkq3l8gpssi1xrzfpynvqlmzc%2Fc%2F89-coupon-promotional-campaign-management%3Futm_medium%3Dsocial%26utm_source%3Dportal_share).

[Back to top](#top)