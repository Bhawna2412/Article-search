---
title: "Marketing Cloud Release Notes – 21 Jul 2020"
articleID: 1687
category: "2020 and 2019 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-08-07
---

# Marketing Cloud Release Notes – 21 Jul 2020

## Overview

Starting this release, the restriction with respect to the number of journeys in each account is applicable for the active journeys only. Moving closer to security changes, the API Event trigger in Journey and Data Journey now supports the HTTPS protocol.

To learn more about the changes, read on!

## Enhancements

**Ability to Create More Journeys Without Deleting the Existing Journeys**

Earlier, the number of journeys allowed in Essential and Professional plans was 5 and 20, respectively. So, if an account had reached the limit and needed more journeys, they were required to delete the existing journeys to create new ones. We have a solution for you now! 

You can now create as many journeys as you need, however, the number of active journeys at any point in time must be limited to what's allowed in the plan, that is, 5 in the case of the Essential plan and 20 in the case of the Professional plan. With a simple toggle on the Journeys index page, you can enable a journey to make it an active Journey. 

Similarly, you can use the same toggle to disable the journey, making it an inactive journey. You can also use the 'Enabled' checkbox on the Create Journey flow to enable/disable a Journey.

To learn more about Journeys, see [Journeys](https://galaxy.maropost.com/kb/articles/871-introduction-to-journeys). 

The following is a screenshot of Enable/Disable toggle on the Journeys index page:

![Enable_Diable.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWkg.05T5g00000BkWkgEAF.png)
**API Event Trigger Supports HTTPS Protocol Only**

The API Event trigger in Journeys and Data Journeys now supports the use of HTTPS Protocol. The move has been made to ensure industry-standard security practices that advocate always encrypting data in transit.