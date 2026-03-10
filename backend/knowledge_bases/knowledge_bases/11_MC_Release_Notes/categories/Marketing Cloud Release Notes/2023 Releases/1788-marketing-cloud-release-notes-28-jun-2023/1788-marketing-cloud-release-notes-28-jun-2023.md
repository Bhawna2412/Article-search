---
title: "Marketing Cloud Release Notes – 28 Jun 2023"
articleID: 1788
category: "2023 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-08-07
---

# Marketing Cloud Release Notes – 28 Jun 2023

**OVERVIEW**

In this release, we launched a new custom SMS report for solving your billing-related queries. Also, the REST API update is live now.

For more information, read on!

**NEW FEATURE**

**New Custom Report – Custom SMS Message Report**

The Custom SMS Message Report gives you a summary of your outbound and inbound message segments for specific SMS campaigns within the chosen time period.

For the SMS feature, you are invoiced for the SMS message segments and this report will help you better understand the bill charges.

You can apply the following customizations:

- 
- 
- 
- 

The report is available in multiple formats and consists of information such as sending number, receiving number, status, message, SMS campaign ID, segment count, message type, and created at (date).

![SMS Message Report](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SMSMessageReport.0685g00000FSJI8AAP.png)

The report creation is a two-step process and can be initiated at the Custom Reports index page (ANALYTICS > Custom Reports). 

For more information, see [**Custom SMS Message Report**](https://galaxy.maropost.com/s/article/Custom-SMS-Message-Report).

![SMS Message Step 1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SMSMessageStep1.0685g00000FSJISAA5.jpg)

**REST API Update - per Parameter Restriction**

The per parameter in the GET method now only accepts values between 200 and 5000 and therefore, the number of records that can be returned in a single GET method call is 200 to 5000.

Any value less than 200 for the per input parameter will always return 200 records. Similarly, any value greater than 5000 for the per input parameter will always return 5000 records.