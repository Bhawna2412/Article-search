---
title: "Auto-populate Campaign Details Based on Selected List & More!"
articleID: 1696
knowledgeBase: "Help Articles"
lastUpdated: 2021-11-12
---

# Auto-populate Campaign Details Based on Selected List & More!

**Release Date:** 12th March, 2020

## Overview

This release contains a list of interesting new features and changes that will certainly simplify your tasks. Now, you have a flexible way to push your contact data to other platforms. By introducing custom payload feature in our journey actions, we made it easier for you to integrate with third-party platforms. We also automated the process of SSL certificate provisioning for the link tracking domains. So, you don't have to manually do it anymore. Also, did you miss having certain fields automatically populated when creating an email campaign? This feature is back!

Read on for more details on each item.

## New Feature

**Journey - Custom Payload in HTTP Post**

You can now push your contact data into a third-party application based on event triggers making integrations with other platform simpler. Using the custom payload feature, you can customize the header and body of an HTTP Post to reference the contact data and push it to another platform.

For more information, see the **HTTP Post** section of [Journey Actions](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.maropost.com%2Fhc%2Fen-us%2Farticles%2F360015556394).

**Automatic Provisioning of SSL Certificate for Link Tracking Domains**

You don't have to manage the SSL certificate for your link tracking domains anymore. Maropost will automatically provision the SSL certificate for you. Not just that, we will renew the expiring SSL certificate, so you don't have to worry about the renew date and process. All you need to do is to add the link tracking domain in your account details.

📋Note: This feature is being introduced for the link tracking domains used for email campaigns and is not applicable for link tracking domains used for brands.

For more information, see [Automatic Provisioning of SSL Certificate for Link Tracking Domains](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.maropost.com%2Fhc%2Fen-us%2Farticles%2F360043560073).

## Enhancements and Changes

**Creating Email Campaigns - Automatically Populating Fields Based on Selected List**

In the email campaign creation flow, when you select a contact list in Step 2, the following subsequent fields get populated automatically based on the list:

* From Name
* From Email
* Reply To
* Language

For consistent process flow, the above-mentioned fields have been moved from Step 1 to Step 2. To reiterate the current behaviour, in Step 2, you select the lists for the email campaign. And then, the fields, From Name, From Email, Reply To, and Language, get populated automatically. If the selected list doesn't contain these values, the fields remain blank and you must manually enter the values.

📋**Notes:**

* You can manually enter different values to replace the automatically populated values. However, if you enter values in these fields before selecting a list, then the entered values get overridden when you select a list.
* If you are selecting multiple lists, then the fields get populated based on the last selected list.

For more information, see the **Campaign Creation - Step 2** section of [Creating Email Campaigns](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.maropost.com%2Fhc%2Fen-us%2Farticles%2F360041572374).

  
  
  
  

## Bug Fixes

To see a summary of bugs that were fixed during this release, see [Bug Fixes - March 2020](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.maropost.com%2Fhc%2Fen-us%2Farticles%2F360044703774).