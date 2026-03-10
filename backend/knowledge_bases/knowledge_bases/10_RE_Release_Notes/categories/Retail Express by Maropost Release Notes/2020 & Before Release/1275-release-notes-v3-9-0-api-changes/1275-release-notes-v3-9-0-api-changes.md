---
title: "Release Notes v3.9.0 - API changes"
articleID: 1275
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes v3.9.0 - API changes

# Release Notes v3.9.0 - API changes

**Release version:** 3.9.0 | **Release Date:** 30th October 2019

The latest Maintenance Release includes the following modifications to the Retail Express APIs.

In this release:

* Inventory Planning
* eCommerce/Webstore

|  |  |  |
| --- | --- | --- |
| **API** | **Method** | **Details** |
| Inventory Planning | SaveProductAttribute | Updated to support 64 characters for custom attributes |
| Inventory Planning | SaveProductAttribute | Attribute names only support alphanumeric characters (including spaces); using special characters will return an error |
| eCommerce/Webstore | OrderCreateByChannel | More checks have been added using the External Order ID to prevent duplicate orders created through the API |