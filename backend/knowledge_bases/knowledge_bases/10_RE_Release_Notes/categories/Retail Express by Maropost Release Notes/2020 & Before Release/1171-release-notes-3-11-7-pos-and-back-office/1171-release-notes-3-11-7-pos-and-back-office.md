---
title: "Release Notes 3.11.7 - POS and Back Office"
articleID: 1171
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes 3.11.7 - POS and Back Office

# Release Notes 3.11.7 - POS and Back Office

**Release Date:** 21-04-2020

In this release we've added some new functionality to our APIs for recent Loyalty enhancements, added some new filters to the POS Transfers feature, and made 3 improvements and resolutions.

---

### **Loyalty Enhancements for Web Store API**

In this release we've added two new methods to the Webstore API, taking advantage of the new Loyalty Expiration Enhancements released in [version 3.11.0](https://galaxy.maropost.com/s/article/Release-Notes-v3-11-0-POS-and-Back-Offic).

**Please note:**The Shopify Connector does not currently utilise these new features but enhancements for Loyalty Point visibility is earmarked for future development on our [Product Roadmap](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fportal.productboard.com%2Fxjc5eqgr3wpp4lregjvharq3)

|  |  |
| --- | --- |
| **Method** | **Details** |
| CustomerGetBulkLoyaltyTransactions | Used to export Loyalty history for customers for a given date range. Includes the following parameters:   * Transaction Date from/To * Only customers with email addresses * Only customers enabled for export   This method is limited to a maximum transaction history range of 31 days, and will display only transactions where points have been accrued/redeemed. Any transactions not affecting the customer's loyalty balance will be excluded. |
| CustomersGetBulkLoyaltyExpiringPoints | Used to display a list of points set to expire per day per customer within a given number of days from the current date, based on the current loyalty history.  e.g. display all points set to expire in the next 7 days.  This method includes the following parameters:   * Customisable date range (up to 31 days) * Only customers with email addresses * Only customers enabled for export   This method is limited to a maximum history of 31 days. |

[Back to top](#top)

### **New POS Transfer Filters**

When creating Transfers through POS, we have added new filters to the Product Advanced Search feature, making it easier than ever to find products.

![mceclip1 - 2023-07-09T161948.869.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppe6aEAA.jpg)

To use the filters:

1. Log into POS
2. Click **Transfers**
3. Enter your User ID
4. Click **Send Stock to another store**
5. Click **Create New**(bottom right-hand corner)
6. Select your **To**Outlet
7. Enter some product keywords in the **Description** field
8. Click the **Advanced Search**button  
   ![mceclip2 (65).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdIzEAI.jpg)

The filters will be displayed at the top of the page.

[Back to top](#top)

---

### **Resolutions**

|  |  |
| --- | --- |
| Stock Receipt | Performance Improvements |
| POS | Resolved an issue where Registers enabled for Quick Product Auto Launch would not automatically display the Quick Products window in POS. The Quick Product Auto Launch setting can be configured via **Settings > POS Settings > Registers** |
| MYOB Export | A rare issue has been resolved where an additional line was incorrectly created in MYOB Exports for Stock Adjustments for more than one store. |