---
title: "Release Notes 3.15.8 - API Updates"
articleID: 1293
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes 3.15.8 - API Updates

# Release Notes 3.15.8 - API Updates

This release will be available to all customers by the 10th August 2022.

In this release, we've made the following updates to the Retail Express Unified REST API.

* **'filter\_by' parameter added to GET /customersurveysegments:** The 'filter\_by' parameter allows results to be filtered by 'id', 'active', 'name'. Various operators are available and filters can be combined
* **'filter\_by' parameter added to GET /customertypes:** The 'filter\_by' parameter allows results to be filtered by 'id', 'active', 'name', 'default', 'deleted', 'modified\_since'. Various operators are available and filters can be combined
* **New operators added to 'filter\_by' parameter on GET /orders and GET /vouchers:** New operators 'isnull', 'isnotnull', 'startswith', 'endswith', and 'doesnotcontain' are now available.
* **New 'order\_by' fields in GET /products:** A number of additional fields are now supported in the 'order\_by' parameter including 'custom1', 'custom2', 'custom3', pricing fields and many more
* We've removed the ability to specify a Customer Number via PUT & POST /customers as this field is system generated

Please refer to the [Developer Console](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2Fgetting-started) for detailed information.