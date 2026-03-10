---
title: "Marketing Cloud Release Notes – 9 Apr 2025"
articleID: 1975
category: "2025 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-09-11
---

# Marketing Cloud Release Notes – 9 Apr 2025

## OVERVIEW

Greetings, Maropostians!!

We have updated our contact management process to combine email and SMS records and create a single location for the organization. These changes make it easy to engage your contacts across multiple channels.

## NEW FEATURE - CONTACTS PAGE

The new contacts page allows you to manage all your email and SMS contacts in one place. Additionally, email and SMS can belong to the same contact and will be reflected on this page.

![uid75.png](https://us.v-cdn.net/6038474/uploads/H27VWBIDH8GF/uid75.png)
To upload contacts more quickly, you can directly import the file (containing phone numbers, email, and subscription statuses) from the contacts index page itself.

![uid76.png](https://us.v-cdn.net/6038474/uploads/TAAX6TDLPA13/uid76.png)
To learn more about our new offering, see our [**Creating a Contact**](https://galaxy.maropost.com/s/article/Creating-and-Managing-Contacts-New) article.

## CONTACT 360 OVERVIEW ENHANCEMENT

Email and SMS contacts have been combined for an optimal cross-channel experience. For contacts that have opted for both channels, you can check their SMS and Email activity in the same section.

To support this combination, contacts are now identified in Marketing Cloud by a Maropost-assigned **unique identifier (UID)**. You do not need to manage this UID, but you will be able to see it on the contact screen.

Henceforth, the overview page will consolidate every contact’s email and SMS engagement insights and display them. Likewise, the contact’s UID information will be shown on the contact card.

![uid123.png](https://us.v-cdn.net/6038474/uploads/3CY19VQ67M8J/uid123.png)
Additionally, if the contact is subscribed to an email or SMS list, both types of lists will be displayed in the list management section. The list will also be color-coded to indicate whether the contact has chosen to subscribe or unsubscribe. Furthermore, contacts who have opted not to receive further communication from Marketing Cloud can be added to the Do Not Mail and SMS list from the overview page itself.

![uid78.png](https://us.v-cdn.net/6038474/uploads/1PMNCTGCY04J/uid78.png)
To get an in-depth understanding of this page, read our [**Contact 360 Overview**](https://galaxy.maropost.com/s/article/Contact-360-Overview-New) article.

## CONTACT LISTS PAGE AND OVERVIEW ENHANCEMENT

From now on, the email and SMS contact lists are merged into a single unified list known as “**Contact Lists**,” which can be accessed from the **Audience** menu. The index page has been slightly modified to show both email and SMS subscribers on a list.

![uid79.png](https://us.v-cdn.net/6038474/uploads/NQUWYHGGSQ3I/uid79.png)
While viewing contacts in a particular list, you can rearrange the column filters (next to the Actions column) to check other parameters or statuses of such contacts.

![uid80.png](https://us.v-cdn.net/6038474/uploads/B59NMEO8XG7W/uid80.png)
Also, the contact list overview page now has updated infographics showing the total subscribers and unsubscribers for email and SMS campaigns.

![uid124.png](https://us.v-cdn.net/6038474/uploads/KIOLKSBSB2UF/uid124.png)
To learn more about the changes to this section, read our [**Contact Lists: Overview**](https://galaxy.maropost.com/s/article/Contact-Lists-Overview-New) article.

## ACQUISITION FORM ENHANCEMENT

You can now add phone numbers and contact name fields along with the mandatory email address field while creating surveys, signups, or feedback forms.

![uid72.png](https://us.v-cdn.net/6038474/uploads/Y52JJ3G7G2ZK/uid72.png)
To learn how to create forms, visit and read our [**Acquisition Form**](https://galaxy.maropost.com/s/article/Creating-and-Using-Acquisition-Forms) and [**Surveys**](https://galaxy.maropost.com/s/article/Surveys61711db9b5b5c) articles.

## JOURNEYS ENHANCEMENT

Journeys will now support both SMS and Email in the same automation. If a contact does not have an email or an SMS, that node will be skipped, and they will move on to the next phase of the journey.

To avoid such pitfalls, we have now adopted a “SKIP” automation process in our journeys. The automation will “SKIP” (jump over) the "**Send Email**" action if the contact only has a phone number and will “SKIP” (jump over) the "**Send SMS**" action if the contact only has an email ID​. This ensures that a contact’s journey doesn’t abruptly end, and they continue to remain in the marketing funnel.

![uid82.png](https://us.v-cdn.net/6038474/uploads/NE0AQKPNEWI0/uid82.png)
Along with this enhancement, we have configured the API Event trigger with updated “**POST**” API calls.

![uid74.png](https://us.v-cdn.net/6038474/uploads/HZTX2QRLQ8FU/uid74.png)
To learn more about sending automated messages to individuals or contact groups, read our [**Introduction to Journeys**](https://galaxy.maropost.com/s/article/Introduction-to-Journeys) article.

## RELATIONAL TABLES ENHANCEMENT

Relational tables will now use the Maropost-generated UID as an identifier. Please note that the legacy Unique Identifier option has been sunset.

![uid83.png](https://us.v-cdn.net/6038474/uploads/UDAUBD7QWE0I/uid83.png)
To learn more about these structured tables that can be used to add or retrieve information, read our [**Introduction to Relational Tables**](https://galaxy.maropost.com/s/article/Introduction-to-Relational-Tables)** **article.

## CUSTOM UNIQUE IDENTIFIER (UID)

Besides a normal account whose contact's unique identifier is assigned automatically by Maropost, a custom UID-based account will manually add the unique identifier provided by the client during contact creation.

These UID-based contacts can then be utilized in segmentation, campaigns, acquisition, journeys, etc., thereby giving you a greater scope of brand outreach to a select group of audiences.

However, such a custom account has some limitations in other aspects of marketing. Hence, we recommend that you consult your customer success manager beforehand, as you cannot revert any changes made to the account thereafter.

To learn more about these custom attributes, read our [**Custom Unique Identifier (Custom UID)**](https://galaxy.maropost.com/s/article/Custom-Unique-Identifier-Custom-UID) article.