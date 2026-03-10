---
title: "Configuring Sales Channels for Webstore Integrations"
articleID: 130
category: "Integration > General Webstores"
knowledgeBase: "Retail Express"
---

# Configuring Sales Channels for Webstore Integrations

You can configure sales channels for web store integrations in **Retail Express** to manage multiple eCommerce platforms with different pricing and inventory rules. This feature helps optimize multi-channel retail operations by enabling distinct configurations for each web store, supporting diversified online presence while maintaining centralized management through your retail system.

Setting up sales channels involves defining primary sales outlets, assigning source groups, configuring pricing rules, and establishing fulfillment parameters for each eCommerce platform. When properly configured, sales channels typically lead to better multi-store eCommerce management, improved inventory allocation across channels, and enhanced flexibility in online retail strategy execution.

**Version Note**: eCommerce Integrations

Sales Channels for your web store are responsible for:

- Directing incoming online sales to the relevant outlet
- Retrieving Outlet-specific pricing as part of the product price hierarchy
- Notifying your web store of any changes to be synchronised through the use of the Event Driven Synchronisation (EDS) System

## Configuration Fields

![rtaImage (19).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUjtEAE.jpg)
Fields to be aware of when configuring your Sales Channel:

| **Field** | **Description** |
| --- | --- |
| Primary Sales Outlet | Your Primary Sales Outlet is the Outlet that will receive any sales placed online. The sales will be placed against the Back Office Register - if you're also using the POS system at this Outlet it's important that you set up separate Registers for your in-store sales. This will allow you to keep the two Registers separate for End of Day processes and reporting. Your Primary Sales Outlet is also the first Outlet checked for stock before the Source Priority methods are followed. See the section on Source Groups for more information. |
| Source from PO Threshold | By putting in a number of days on this field, you can select to wait to take stock from the PO rather than move to the next available outlet in your source group. For example, if you have this set to 3 days, and you have a PO with an ETA of tomorrow, Retail Express will source the stock for the web sale from that Purchase Order instead of moving to the next outlet in the source group.  > **Note:** If this field is left blank, it will default to a PO threshold of 7 days. |
| EDS Notification URL | When you make changes within Retail Express, Retail Express notifies your web store of the changes so that synchronisation can occur. In order for this to function, you will need to enter a URL for Retail Express to communicate with. This typically follows the following format: [https://yourwebstoredomain/skylink/eds/notify](https://yourwebstoredomain/skylink/eds/notify) For example, if your web store was [https://ww.mycompany.com.au](https://ww.mycompany.com.au), the URL would be [https://www.mycompany.com.au/skylink/eds/notify](https://www.mycompany.com.au/skylink/eds/notify). This should match exactly, so if there are no www's in your URL, you should not include those. If your web store is [https://www.mycompany.com.au/shop](https://www.mycompany.com.au/shop) the format would be [https://www.mycompany.com.au/shop/skylink/eds/notify](https://www.mycompany.com.au/shop/skylink/eds/notify).  > **Note:** If you are first connecting the site on a staging site, you will need to update this URL when your site goes live to ensure you continue to receive notifications. |

> **Note:** If you are unable to access Sales Channels, you may need to adjust your User settings or request assistance from an enabled User.

## Configuring Sales Channels

To configure your Sales Channel:

1. Log into your Retail Express Back Office
2. Navigate to: **Settings > Locations/Outlets > Sales Channels**
3. Enter a **Name **for your Sales Channel
4. Select the Outlet to be your **Primary Sales Outlet** - where incoming web sales will be placed
5. Select the default option if this will be the default Sales Channel for the web stores
6. Enter the **Source from PO Threshold **as a whole number in days. If you don't wish to use this functionality enter a zero.
7. Enter the **EDS Notification URL**
8. Select a **Source Group **from the right-hand side to confirm where the stock will be sourced from
9. Press **Insert** to add the Sales Channel

> **Note:** Once a Sales Channel has been created and had data associated with it, the channel cannot be deleted and an error will be displayed in Retail Express.