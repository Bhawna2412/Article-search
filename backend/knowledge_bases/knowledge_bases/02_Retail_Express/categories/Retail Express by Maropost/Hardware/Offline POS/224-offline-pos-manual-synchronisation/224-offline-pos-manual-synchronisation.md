---
title: "Offline POS Manual Synchronisation"
articleID: 224
category: "Hardware > Offline POS"
knowledgeBase: "Retail Express"
---

# Offline POS Manual Synchronisation

You can manually trigger synchronization for Offline POS terminals in **Retail Express**, ensuring transaction data uploads to the cloud database and product/pricing updates download to terminals. This helps optimize your retail operations by providing control over synchronization timing, enabling verification that offline transactions uploaded correctly, and ensuring terminals have current product and pricing information.

Offline POS has been designed as an emergency POS system. This feature allows your business to continue serving customers in the event that your internet connection is interrupted or there is an issue with access to Retail Express.

Using Retail Express you can manually prompt a resync of the Offline POS system. This will be useful in times where synchronisations were unable to be completed, or there's a need to re-synchronise transactions.

## Confirm Offline POS is installed

Before you begin, you will need to confirm that Offline POS has been installed. If not, you should

1. Access the POS Homepage (where users will land after logging into a Register initially and return to after each sale has been processed)
2. On the upper right-hand corner of the POS Homepage, if Offline POS is installed, an Offline POS icon will be visible alongside a Trade Offline button (hover over the icon to see the sync status)
  ![mceclip1 (65).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkGEAU.jpg)
3. The Offline POS icon will be coloured depending on the status e.g. Green means the synchronisation was last performed less than one hour ago.

## Manually Prompt a Synchronisation

Synchronisations can be prompted from either Back Office or POS, useful where synchronisations were unable to be completed or there's a need to re-synchronise transactions.

### Back Office

To prompt a synchronisation:

1. Log into the Retail Express **Back Office**
2. Navigate to **Reports > External Services > Offline POS Servers**
3. A list of the Offline POS Servers for your database will be displayed
4. The **Resync button** will appear in the new Resync column on the right

[Click to view full size](https://ress.zendesk.com/hc/article_attachments/4413491094543/mceclip1.png)
  ![mceclip1 (66).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkLEAU.jpg)
5. Click **Resync**
6. Wait for an hour for the synchronisation to complete
7. Navigate again to **Reports > External Services > Offline POS** to refresh the page and view updated information
8. If the Offline POS Sync Status icon is amber or red, please [contact support](https://www.retailexpress.com.au/contact)

### On your computer

You can also prompt a synchronisation from your local computer (useful when the "Resync" button isn't available in the Retail Express Back Office).

1. On your computer click the Windows keyboard button or the icon in the taskbar at the bottom of the machine
2. Type **Services**
3. Select the **Services **app that appears in the search results![mceclip0 - 2023-07-08T223500.675.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkQEAU.jpg)
4. The Services app will be displayed
5. Scroll down until you find the following Offline POS services
	- Retail Express Offline POS API Service
	- Retail Express Offline POS Sync Service
	- Retail Express Offline POS Update Service
  ![mceclip2 (44).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkVEAU.jpg)
6. **Right-click** on the Retail Express Offline POS API Service
7. Click **Restart**
  ![mceclip0 - 2023-07-08T223514.669.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkaEAE.jpg)
8. Repeat for the **Offline POS Sync Service **and **Offline POS Update Service**
9. Once all services has been restarted close the Services app
10. Open **POS**
11. **Refresh** the browser by clicking the Refresh button or pressing F5 on the keyboard
12. After an hour confirm if the Sync Status has been updated and if the status icon colour has changed
  ![mceclip1 (67).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVkfEAE.jpg)