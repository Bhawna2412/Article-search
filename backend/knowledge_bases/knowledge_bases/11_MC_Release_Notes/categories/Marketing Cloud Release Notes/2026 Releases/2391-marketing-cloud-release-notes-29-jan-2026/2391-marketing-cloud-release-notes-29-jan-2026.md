---
title: "Marketing Cloud Release Notes – 29 Jan 2026"
articleID: 2391
category: "2026 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2026-01-29
---

# Marketing Cloud Release Notes – 29 Jan 2026

## OVERVIEW

In this release, we have introduced some improvements to our existing Marketing Cloud features.

To learn more, kindly read ahead!

## RELATIONAL TABLES ENHANCEMENTS

Custom UID Marketing Cloud users can now create new contacts from relational tables by mapping “**First Name**” and “**Last Name**” with the contact database. This update becomes useful since it can help modify contact information in Marketing Cloud. Likewise, users can also automatically update customer information from relational tables, thereby eliminating the need to create separate customer details or manually update them at regular intervals.

![retables9.png](https://us.v-cdn.net/6038474/uploads/4NH4NGYRVC25/retables9.png)
To learn more about storing, managing, and organizing complex customer data, read our [**Creating Relational Tables**](https://galaxy.maropost.com/kb/articles/914-creating-relational-tables) article.

## TECHNICAL IMPROVEMENTS

Additional fixes have been implemented on sections such as the Domain and Journeys/Data Journeys modules:

- Enhanced the domain security in the [**Brand Management**](https://galaxy.maropost.com/kb/articles/916-brand-management) module that only displays domain names whose “**DKIM**,” “**SPF**,” and “**DMARC**” statuses are completely verified. This ensures you set up a dedicated brand for the respective domain in Marketing Cloud, adhering to modern security laws.
- To reduce timing discrepancies and handling complexities, we have deprecated the “[**User Level Timezone**](https://galaxy.maropost.com/kb/articles/616-set-up-your-account-timezone)” feature in Journeys and Data Journey flows. Henceforth, you can accurately set the desired date & time while configuring the Journey's/Data Journey's schematic.