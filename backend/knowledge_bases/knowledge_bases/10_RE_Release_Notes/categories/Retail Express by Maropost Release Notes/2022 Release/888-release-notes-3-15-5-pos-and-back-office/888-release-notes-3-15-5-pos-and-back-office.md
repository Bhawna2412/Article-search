---
title: "Release Notes 3.15.5 - POS and Back Office"
articleID: 888
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-05-13
---

# Release Notes 3.15.5 - POS and Back Office

# Release Notes 3.15.5 - POS and Back Office

This update will become available to all users by the **10th of May 2022**.

## Improvements and Resolutions

### Improvements

* Offline POS now supports voiding sales in Offline mode
* We have updated the Purchase Order Option filters on the Fulfilment Report to make it easier to narrow your results:
  + Single selection only (instead of being able to select both options)
  + Renamed the filters as per below

![mceclip0 - 2023-07-09T181325.823.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppe0dEAA.jpg)

|  |  |
| --- | --- |
| **Previous Filter Name** | **New Filter Name** |
| Show orders with items contained in this PO | Show order items arriving on this PO |
| Show orders dependent on this PO for fulfilment | Show all items for orders dependent on this PO |

### Resolutions

* Scheduled Replenishments now run at the configured time (where previously an issue caused the Replenishment Run to be processed later than scheduled)
* Resolved an issue to prevent vouchers from being over-redeemed

### REST API Resolutions

* GET Customers - Resolved an issue where the default Customer Delivery Address wasn't returned under specific circumstances
* GET Customers - Survey responses are now returned when querying all customers