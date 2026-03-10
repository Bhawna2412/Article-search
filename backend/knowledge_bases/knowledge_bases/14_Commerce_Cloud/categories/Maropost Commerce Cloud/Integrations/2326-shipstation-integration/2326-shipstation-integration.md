---
title: "ShipStation Integration"
articleID: 2326
category: "Integrations"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2025-10-03
---

# ShipStation Integration

This article explains how to integrate your Commerce Cloud account with **ShipStation**, enabling streamlined order fulfillment and shipping automation.

In order to integrate ShipStation with Commerce Cloud, you will need ShipStation API key. 

## **To access the API key**

- Log in to your **ShipStation account**.
- Navigate to: **Settings > Account > API Settings**
- On the API Settings page, go to **Select API Version** and choose **V2 API** from the dropdown menu.
- After selecting the API version, **Production key** will populate. Copy this code, this is the API key that you can use to integrate ShipStation with Commerce Cloud.

![ShipstationAPIAccess-resize.gif](https://us.v-cdn.net/6038474/uploads/PKFYZQLOVRU6/shipstationapiaccess-resize.gif)

## **Integrating ShipStation with Commerce Cloud**

1. Log into your **Commerce Cloud** Back Office.
2. From the left navigation menu, go to: **Settings > Shipping Options**
  ![a03ab371-b5b9-4abc-9cfd-ce6a8305929f.png](https://us.v-cdn.net/6038474/uploads/HZK8ML5H6YW6/a03ab371-b5b9-4abc-9cfd-ce6a8305929f.png)
3. Under ShipStation, click **Connect Account**.
  ![59956ad0-c954-48ff-90fa-ff8439294343.png](https://us.v-cdn.net/6038474/uploads/QLMBKEF8ZH19/59956ad0-c954-48ff-90fa-ff8439294343.png)
4. You will be **redirected to the “Connect New Account”** page in **ShipStation**. This is where you will enter key information to establish the connection between your Commerce Cloud store and ShipStation.  1. **Integration Name: **This is a **custom name** that helps you identify the connection in ShipStation.
  2. **ShipStation V2 API Key: **Paste the **API Key **you copied from the** ShipStation **Account.
  3. **Sales Channel: **Enter the name of the sales channel this store represents.
    ![06a78840-7026-4adf-aaee-4d5efe9fd538.png](https://us.v-cdn.net/6038474/uploads/O5BIQGX93MIK/06a78840-7026-4adf-aaee-4d5efe9fd538.png)

> **Note:** You can connect a single ShipStation account to one or multiple storefronts, or set up separate accounts for each. The only limitation is that each storefront can be linked to only one ShipStation account at a time.

6. Once you can enter all the details,  click to **Submit**. 

![MCC-Shipsation-resize1.gif](https://us.v-cdn.net/6038474/uploads/ELW0V8H8TYTD/mcc-shipsation-resize1.gif)

7. You will see a notification: **Your ShipStation Account Connection Created Successfully**. Your Commerce Cloud Account is now connected to ShipStation Account and ready to be used.  ** **

8. Once the Integration is complete, details will reflect under Shipping Options.

![Screenshot 2025-09-30 at 4.21.29 PM.png](https://us.v-cdn.net/6038474/uploads/DC6ANSXPW0I1/screenshot-2025-09-30-at-4-21-29-e2-80-afpm.png)