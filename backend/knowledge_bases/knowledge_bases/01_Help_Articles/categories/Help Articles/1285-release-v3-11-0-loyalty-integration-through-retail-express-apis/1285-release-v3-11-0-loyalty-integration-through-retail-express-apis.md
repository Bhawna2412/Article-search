---
title: "Release v3.11.0 - Loyalty Integration through Retail Express APIs"
articleID: 1285
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-05
---

# Release v3.11.0 - Loyalty Integration through Retail Express APIs

# Release v3.11.0 - Loyalty Integration through Retail Express APIs

Loyalty Point Balances are available via the **Webstore API (CustomerGetBulkDetails method)** and the **Inventory Planning API (GetCustomers method)** returning the following data:

* Points Earned to Date
* Points Available
* Points Redeemed

Both of these methods accept a **LastUpdated**parameter, which will restrict the customers returned in these methods to those created or modified since the LastUpdated date.

When a customer's loyalty balance is modified, it's considered to be a change to the customer. Queries run based on the LastUpdated date will include customers with loyalty balance updates, even if no other details have changed.

---

## Issues with large datasets

With the [3.11.0 release](https://galaxy.maropost.com/s/article/Release-Notes-v3-11-0-POS-and-Back-Offic), a Loyalty Expiration feature was introduced allowing loyalty balances to automatically expire in bulk on a schedule.

As these changes are considered to be a change to the customer record (as above), it could potentially cause a large number of customers with loyalty balances expiring on the same day, and as a result, trigger very large sets of customer data to be returned via the API methods above.

To address the impact of the Expiration feature, a number of changes have been introduced to the Webstore and Inventory Planning APIs that will take effect if you choose to enable Loyalty Expiration. These changes are detailed further below.

**Important:** Depending on the size of the customer database and the Loyalty Expiration configuration, there may be issues retrieving data from the API. Refer to the suggested changes below to avoid this from occurring.

  
  

---

## Updates

The following updates have been implemented to the APIs to avoid the potential for large customer datasets:

|  |  |
| --- | --- |
| Retail Express | Changes to the customer's Loyalty Balance will no longer be considered an update to the customer record. If the only details that have changed for a customer in a given period is their loyalty balance that customer *will not be returned*in the existing CustomerGetBulkDetails or GetCustomers methods |
| Webstore API | A new method **CustomerGetBulkLoyaltyBalances** has been added to the Webstore API, returning Loyalty Balance details for customers whose balance has been updated since a provided LastUpdated date. |
| Inventory Planning API | A new method **GetCustomersLoyaltyBalance**has been added to the Inventory Planning API, returning loyalty balance details for customers whose balance has been updated since a provided LastUpdated date. |

---

## What you need to do

If you are planning to enable the Loyalty Expiration feature in Retail Express, any integrations using customer data from either the Webstore API or Inventory Planning API should be reviewed.

You will need to determine if the Loyalty Balance data is being used, and if the above changes will impact them. If so, you must update your integrations before you enable Loyalty Expiration to ensure there is no disruption to the data flow to your integration.

**Important:**Your integrations must be updated before Loyalty Expiration is enabled to avoid any impact on your integration