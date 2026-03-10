---
title: "Release Notes v3.7.0 - API changes"
articleID: 1272
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.7.0 - API changes

# Release Notes v3.7.0 - API changes

**Release date:** 30th July 2019

In this release we've updated some of our existing APIs with new features and information. Please see below for information.

**On this page:**

- [Inventory Planning API](#ip)
- [eCommerce/Webstore](#ecom)

### []()**Inventory Planning API updates**

We've made some changes to the following Inventory Planning methods:

|  |  |
| --- | --- |
| **Method** | **Updates** |
| GetOrdersWithLines | The results will now be sorted by the Order Number. |

For more information on the Inventory Planning API, please see the[API Technical Document](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F217325707)

### []()**Webstore/eCom API updates**

We've made some changes to the following Webstore/eCom API methods:

|  |  |
| --- | --- |
| **Method** | **Updates** |
| CreateOrder | We've added the ability to accept a Partial Dispatch flag to orders, "PartialDispatch". If not passed, the global setting for Partial Dispatch will take effect.  > **Note:** The Partial Dispatch setting is controlled via Settings > POS Settings > General POS Settings |
| OrderCreateByChannel | The maximum length on the field BillFirstName has been increased to 50 characters. |

For more information on the current version of eCommerce/Webstore API the see the [eCommerce/Webstore API Technical Document](https://galaxy.maropost.com/s/article/API-Plugin-Documentation).

Want more information?[View all release notes.](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)