---
title: "Release Notes 3.15.12 - API Integrations"
articleID: 1289
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes 3.15.12 - API Integrations

# Release Notes 3.15.12 - API Integrations

This release will be available to all customers by the 24th November 2022.

## Unified API

### GET /supplierreturns

We've added the ability to retrieve Credit Note information linked to Supplier Returns, with a flag for **include\_credit\_notes**.

The following filters are now also available:

* ID
* total\_return\_quantity
* total\_claim\_amount\_ex
* total\_claim\_amount\_tax
* total\_claim\_amount\_inc
* total\_credit\_received\_ex
* total\_credit\_received\_inc
* credit\_note\_number

The credit\_note\_number value can match either the ID or Supplier Reference of any Credit Notes linked to the Supplier Return.

Supported operators are:

* eq (equals)
* neq (not equals)
* contains
* doesnotcontain
* in
* notin

### GET /suppliers

We've added the ability to limit the fields included in the response, to get only the essential supplier information quickly.

You can now limit the response to any/all of the following fields:

* ID
* supplier\_code
* Name