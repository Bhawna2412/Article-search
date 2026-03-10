---
title: "Customer Fields Synchronised to Shopify"
articleID: 165
category: "Shopify > Customers"
knowledgeBase: "Retail Express"
---

# Customer Fields Synchronised to Shopify

You can understand which customer data fields synchronize between **Retail Express** and Shopify to ensure accurate customer information management across your retail channels. This knowledge helps optimize your omnichannel customer data strategy by understanding what information transfers automatically, supporting better customer service and data governance across integrated systems.

Understanding customer field synchronization involves reviewing mapped data elements, synchronization triggers, and data flow directions between systems. When you understand these mappings, you can expect better data quality planning, more effective customer segmentation strategies, and improved troubleshooting of customer data issues across retail channels.

When updates are made to a customer account the following information is synchronised between the two systems:

|  |  |
| --- | --- |
| **Retail Express** | **Shopify** |
| First Name | First Name |
| Last Name | Last Name |
| Email | Email |
| Receives Email | Customer accepts marketing *Note: If a customer chooses to unsubscribe later, their subscription preference is not synchronised. Both Retail Express and Shopify will need to be manually updated to reflect the correct information. |

> **Note:** The following information is not integrated between Retail Express and Shopify
> If the Customer is tax-exemptNotesTagsPrice GroupsLoyalty

## Customer places an order

Orders are synchronised between Shopify and Retail Express, however it is **online orders only**. Customers will not be able to see orders placed in-store.

When an order is sent from Shopify to Retail Express, the following information is updated:

- First name
- Last Name
- Company
- Phone
- Email preferences (i.e. if they have subscribed to the newsletters)

The address information is sent directly to the order itself. No changes are applied to the default customer address in Retail Express.

- Billing Address  - Address Line 1
  - Address Line 2
  - Suburb
  - State
  - Post Code
  - Country
- Delivery Address  - Address Line 1
  - Address Line 2
  - Suburb
  - State
  - Post Code
  - Country