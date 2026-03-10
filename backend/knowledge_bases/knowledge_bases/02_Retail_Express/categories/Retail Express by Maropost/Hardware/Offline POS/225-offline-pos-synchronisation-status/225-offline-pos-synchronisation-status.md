---
title: "Offline POS Synchronisation Status"
articleID: 225
category: "Hardware > Offline POS"
knowledgeBase: "Retail Express"
---

# Offline POS Synchronisation Status

You can monitor Offline POS synchronization status in **Retail Express**, verifying that offline transactions uploaded successfully and terminals have current data from the cloud database. This helps optimize your retail operations by providing visibility into synchronization health, enabling proactive issue resolution, and ensuring data integrity across online and offline POS operations.

Offline POS uses visual indicators to represent the status of the synchronisation.

## Status Icons

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Status Text** | **Explanation** | **Back Office** | **POS Icon** | **Suggested Actions** |
| In Sync | Less than 1 hr since the last full synchronisation | Green | Green | n/a |
| Syncing in Progress | More than 1 hour and less than 24 hours | Green | Green | n/a |
| Syncing in Progress | More than 24 hours and less than 48 hours | Green | Green | Initiate a resync from Back Office |
| Out of Sync | More than 48 hours since the last synchronisation | Orange | Orange | [Contact Support](https://www.retailexpress.com.au/contact) |
| Sync stalled | More than 24 hours since the synchronisation was last communicated | Red | Orange | [Contact Support](https://www.retailexpress.com.au/contact) |

## View the Offline Status in Back Office

To access the Offline POS Servers status:

1. Navigate to **Reports > External Services > Offline POS Servers**
2. A list of your Offline POS Servers will be displayed, along with an update on their status
3. If prompted by our Support Team, click **Resync **to resynchronise the server

![mceclip0 - 2023-07-08T223741.051.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkkEAE.jpg)

## View the Offline Status in POS

Once the Offline POS installation is complete there will be a new icon when logging into POS.

The **Offline Server Status** icon will be displayed in the top right of the POS screen. Initially the icon will be displayed as a minus sign ( - ) to indicate that your local PC is still synchronising information with your main cloud-based Retail Express database.

Once the synchronisation is complete, the icon will change to display green, as per the screenshot below.

![offlinepos_statushighlight.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkpEAE.jpg)
Click the icon to view detailed information about the synchronisation status:

![mceclip1 (68).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkuEAE.jpg)
Offline POS requires only minimal maintenance, however, we do recommend you check the status each day to ensure your Offline Mode is ready and available immediately should you happen to lose your internet connection.

If the Offline Server is displaying Amber or Red please [contact us](https://www.retailexpress.com.au/contact).