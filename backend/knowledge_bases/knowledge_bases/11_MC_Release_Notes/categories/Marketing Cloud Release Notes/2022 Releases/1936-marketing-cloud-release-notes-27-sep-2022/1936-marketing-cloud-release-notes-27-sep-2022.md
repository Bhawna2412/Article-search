---
title: "Marketing Cloud Release Notes – 27 Sep 2022"
articleID: 1936
category: "2022 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-05-26
---

# Marketing Cloud Release Notes – 27 Sep 2022

**OVERVIEW**

In this release, we are introducing a new input parameter in the GET/delivered_report method to replace an existing parameter.

For more details, read on!

**ENHANCEMENT**

**New Input Parameter in GET /delivered_report Method for Campaign APIs**

A new parameter **per_page** has been introduced in GET/delivered_report method for the Campaign APIs. This new parameter is replacing the parameter **per** that was** **being** **used to set the number of records per page in this method.

The **per_page** parameter enables you to set the number of records that are included in each result page. The parameter accepts a minimum of 200 records per page and a maximum of 5000 records per page. The default value for the parameter is 200.

**Why is the Change Needed?**

While the **per** parameter is used in all Marketing Cloud REST APIs, it was causing duplicated records to be returned in case of the GET /delivered_report method. So, when you used the **per** parameter in this specific method, it returned 10 individual records per virtual page, irrespective of its set value.

But the new **per_page** parameter eliminates the duplication and allows for more records per virtual page.

>  **Note**: The **per_page** parameter is available only for the GET /delivered_report API method. All other methods still accept the **per** input parameter for specifying the number of records to include per virtual page.