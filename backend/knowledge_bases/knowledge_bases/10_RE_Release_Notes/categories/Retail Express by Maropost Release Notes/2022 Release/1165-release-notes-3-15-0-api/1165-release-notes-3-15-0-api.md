---
title: "Release Notes 3.15.0 - API"
articleID: 1165
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes 3.15.0 - API

This release will be available to all users between 17th - 25th of January 2022.

---

## EDS API Gift Voucher Integration

![Gift Voucher Integration.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbhTEAQ.jpg)

Omni Channel Gift Vouchers has been a huge success for our Shopify merchants, and we're extremely excited to announce we've updated the [Event-Driven Synchronisation (EDS) API](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520EDS%2520API.pdf) to allow integrators and third-party developers to build their own Gift Voucher integrations!

The EDS API now offers the ability to build your own custom Gift Voucher integration, including:

* Purchase Gift Vouchers online
* Redeem Gift Vouchers
* Check Voucher Balances

How this is achieved will be dependent on the web-store capabilities. Please note - any integration is the responsibility of the integration and client to design, implement and test based on the specific needs and technology of the project.

To assist you, we have prepared detailed information including:

* Recommended approaches
* Important Concepts (e.g. how Voucher Products and Voucher Expiry function in Retail Express)
* Implementation Approaches (including sample API code)
* Flowcharts to assist in designing your integration

[Click here to view the Gift Voucher Integration documentation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520EDS%2520Integrated%2520Gift%2520Vouchers.pdf).

---

## Core API Update

We've extended the Core API with additional endpoints for retrieving Order Items, Fulfilment, and Payments, both in bulk and targeted to specific records.

In addition, the results can be filtered and sorted by various parameters (including created and modified date) to ensure you are only retrieving necessary information, allowing for faster, more useful results.

New endpoints:

* orderitems
* orderitems/{id}
* orderfulfilments
* orderfulfilments/{id}
* orderpayments
* orderpayments/{id}

Full details will be available on the [Developer Console](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2Fapi-details%23api%3Dretail-express-api%26operation%3Dget-creditnotes-id) after 25th of January.