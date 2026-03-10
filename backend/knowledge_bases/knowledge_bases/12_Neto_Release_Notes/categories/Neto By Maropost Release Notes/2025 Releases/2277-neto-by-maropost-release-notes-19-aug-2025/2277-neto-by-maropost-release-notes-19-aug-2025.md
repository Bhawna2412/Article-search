---
title: "Neto by Maropost Release Notes – 19 Aug 2025"
articleID: 2277
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-08-20
---

# Neto by Maropost Release Notes – 19 Aug 2025

## Overview

This release contains updates for the eCommerce versions **6.340.0**, **6.341.0**, and **6.342.0**.

## New Features and Enhancements

### Changed Record Limit for Inventory Change Log

The record limit criteria for Inventory Change Log has been changed to enforce a limit of record count instead of time period. Now, instead of retaining the records for up to 90 days, Neto will retain **up to 15 Million Inventory Change Log records** irrespective of number of days. This change will help you access historical data for longer period.

### New Configuration – Manual contact “from” email address

Neto has added a new configuration – **Manual contact “from” email address** – that allows you to set up a default value for the “From” email address when manually sending customer emails from your Control Panel. 

You can select from the following options:

- **Staff user email address**: defaulting to the email address of the logged in staff user
- **System email address**: defaulting to the “System e-mail address” configuration
- **Other email address**: an input field to enter the email address of your choice.

This new configuration is found under **Setup & Tools > Business Details** and is particularly useful when using Maropost Identity, in order to configure different “From” email addresses for each of the store that you have access to.

![Configimg1.png](https://us.v-cdn.net/6038474/uploads/NXWKPB1PI5CA/configimg1.png)

### New Configuration – ALLOW_EXTERNAL_TRIGGER_FOR_INVENTORY_CACHE_JOB

Neto has added a new configuration – **ALLOW_EXTERNAL_TRIGGER_FOR_INVENTORY_CACHE_JOB** – that allows you to control the unnecessary running of Inventory Cache job when the **System Refresh** button is clicked in the Control Panel. The new config can found in Advanced Configurations and is designed to reduce unwanted system latencies.

### Ability to Print Put-away sheet Before Receiving Order

You can now print a put-away sheet before receiving an order, so that you can check and put away the received order in the same flow. The newly added button – **Print Receiving Sheet** – on the Purchase Order(PO) “Receive” page is available for POs in Pending or Sent status.

## Fixes

- Fixed an issue where the Voucher balance wasn’t being set to 0 when the order is unapproved via API.
- Fixed an inconsistency issue when using the KitComponents OutputSelector in GetItem API request. The KitComponent property was returning an object or an array of objects depending on the number of kit component. This has been fixed and the KitComponent property now returns array of objects, even if there’s only one component.
- Fixed an issue where the new product category added at the time of creating a new product individually was not getting saved.
- Fixed an issue related to Checkout that was happening intermittently due to inventory cache job. The inventory cache job query causing the issue has been optimized, hence fixing the issue.
- Fixed an issue where in case of order approved via API, the Approval History was showing a "Marked Unapproved on Date / Time" entry. This has been fixed and the Approval History now correctly show "Marked Approved on Date / Time".