---
title: "Consolidating PO Delivery to a single Outlet with Transfers"
articleID: 366
category: "Purchase and Receiving > Purchasing Products"
knowledgeBase: "Retail Express"
---

# Consolidating PO Delivery to a single Outlet with Transfers

You can consolidate purchase order deliveries to a single outlet and use transfers to distribute stock, helping optimize freight costs and centralize receiving operations. This improves your multi-store retail operations by reducing duplicate deliveries, with properly configured PO consolidation typically enabling better freight negotiation and more efficient receiving workflows.

Understanding PO consolidation involves recognizing central warehouse benefits, transfer creation for distribution, and freight cost optimization to help retail operators focus on the right multi-store procurement workflows, ensuring your retail strategy consistently drives better operational efficiency and cost management outcomes.

The Stock Replenishment via Purchase Order includes the ability to order stock for multiple Outlets but deliver it to a single Outlet e.g. a Warehouse for holding stock. Transfers are automatically created and updated during the PO order/receive process, greatly improving the efficiency of the Warehouse staff, and allowing for better inventory control.

## []()How the Consolidate Delivery process works

Using Consolidated Delivery, all stock for all Purchase Orders for multiple Outlets can be delivered to one single Outlet, your "Consolidated Delivery Outlet", and transferred to individual Outlets at a later date.

![mceclip1 (3).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUlaEAE.jpg)
For example, all of the stock may be re-ordered for the Outlets on the left, but delivered to the Warehouse Outlet on the right.

|  |  |
| --- | --- |
| **Outlets** | **Consolidated Delivery Outlet** |
| Bondi Melbourne Gold Coast Brisbane | Warehouse UM |

The Consolidated Delivery feature automatically creates Transfers linked to the Purchase Order. When the stock arrives at the Warehouse via the Purchase Order, the Transfers would then be processed as required.

|  |  |
| --- | --- |
| **Stock Delivered To** | **Transfers To** |
| Warehouse UM | Bondi Melbourne Gold Coast Brisbane |

Using the Linked Transfer Stage feature, when the PO is received, the Transfers will be updated automatically based on the Transfer Stage selected during the Scheduled Replenishment run e.g. the "Allocate" status in the screenshot below.

![mceclip2 (3).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUluEAE.jpg)
This process cuts down on the amount of data processing by the Warehouse staff and allows for better inventory control within multiple Outlets.

> **Note:** The Transfer Stage can be changed at any time up until the PO has been received; edit the Purchase Order through the PO Manager to select the new Linked Transfer Stage.

## []()Effects of using Consolidated Delivery

If Consolidated Delivery is selected:

- The selected Consolidated Delivery Outlet will be displayed in the Delivery Address field of the Purchase Orders
- The quantities for all stock will be combined to form a final number and sent to the supplier (rather than an Outlet break down)
- Retail Express will remember the requested quantity for each Outlet so when the PO is received the stock can be split up easily to transfer to individual Outlets
- A Transfer will be created from the Consolidated Outlet to each of the individual Outlets.

> **Note:** Transfers created through Consolidated Delivery can be found using the Transfer Report.

- When the PO is received the Transfer will be automatically updated based on the Linked Transfer Stage

## []()How to use Consolidated Delivery

Follow the steps in the Stock Replenishment via Purchase Order process ensuring you select the Consolidated Delivery option at the point of processing the Purchase Orders.