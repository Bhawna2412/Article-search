---
title: "Neto by Maropost Release Notes – 17 Sep 2024"
articleID: 2109
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 17 Sep 2024

## Overview

This release contains updates of the Ecommerce version v.**6.306.0 **to** v.6.307.0**

## **Enhancements and Updates**

### **Couriers Please Service Code Updates**

Neto has updated the service codes for the 250 gm weight class for the Courier Please shipping option. The updated codes are as follows-
![Accepted Service Codes](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240917at64800AM.068J1000004cNd7IAE.png)

The updated service codes will be displayed as following in the control panel-
![Service Codes displayed in Cpanel](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240828at93810AM.068J1000004cPqEIAU.png)

## **Fixes**

**eBay GetTransaction Process - Timeout Issue**

In some cases, while creating orders via eBay sales channel, the corresponding orders were not being recorded at Neto’s end as created. Further investigation revealed that while processing the eBay GetTransaction API, timeout was one of the issues that was leading to a ‘Stopping’ of the API. This issue has been identified and resolved.

**Neto POS Bug Report function fixed to send new report emails**

The Neto POS Bug Report feature, when used to report a bug in the system by by the salesperson at the register, Neto Support was not able to receive the bug report. This issue has been fixed.