---
title: "Purchase Order (PO) Manager"
articleID: 361
category: "Purchase and Receiving > Purchasing Products"
knowledgeBase: "Retail Express"
lastUpdated: 2025-12-11
---

# Purchase Order (PO) Manager

You can use the PO Manager to search, filter, and manage all purchase orders across your retail operations, helping maintain centralized visibility and control over procurement activities. This improves your retail operations efficiency by providing comprehensive PO tracking with status filtering, supplier sorting, and bulk management capabilities, with properly configured PO management typically enabling better procurement oversight and faster order processing.

Understanding PO Manager functionality involves recognizing status-based filtering, search capabilities across multiple criteria, and bulk action options to help retail operators focus on the right purchase order management workflows, ensuring your retail strategy consistently drives better procurement efficiency and supplier coordination outcomes.

The PO Manager is an advanced search feature to find and manage Purchase Orders within the system. Using the PO Manager, you can edit and receive your orders, as well as consolidate multiple outstanding Incomplete orders.

If using international Purchase Orders, the Advanced Search Options will allow you to search based on the Sailed date, Deposit and Balances, Time of Departures and more. For more information refer to the Purchase Orders - Receive an International Order article

![mceclip0 - 2023-07-09T004205.035.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppXCBEA2.jpg)[Click to view full size](https://ress.zendesk.com/hc/article_attachments/360004393155/mceclip0.png)

## []()Using the PO Manager

To use the Purchase Order Manager:

1. Navigate to **Inventory > PO Management > PO Manager**
2. Select from the filters as required
3. Click **Search**
4. A list of Purchase Orders matching the filters will be displayed

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20230913at94429PM.05T5g00000v56kpEAA.jpg)
Click to view full size

1. Click the **pencil **icon to edit the Purchase Order ![mceclip1 (94).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppXCVEA2.jpg)
2. Click the **R **button to receive the Purchase Order ![mceclip2 (54).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppXCfEAM.jpg)

> **Note:** For information on receiving Purchase Orders refer to the Purchase Orders - Receive a Purchase Order article

3. Click the **$ **button to add a payment to the Purchase Order ![mceclip4 (21).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppXCpEAM.jpg)

> **Note:** Payments are generally used for International Purchase Orders; for more information refer to the Purchase Orders - Receive an International Order article

4. To **bulk update **Orders to be On-Order, tick the checkbox on the right and click **Place Selected On-Order**
5. To **merge **multiple Incomplete Purchase Orders, tick the checkbox on the right and click **Consolidate Selected**

> **Note:** Consolidating Purchase Orders will cancel the original Orders, and create a new single Purchase Order per Supplier/Outlet combination with all products from the selected Orders using the current Supplier Buy Price at the time of consolidation

## **Consolidate On-Order/Backorder Purchase Orders**

We can access Consolidate Purchase Orders functionality, designed to provide you with flexibility and efficiency in managing your purchase orders. With this enhancement, you can now consolidate on-order and back-ordered purchase orders, streamlining your order management process.

**Key Features and Benefits**

- **Multi-Status Selection**: You now have the ability to select multiple purchase orders across various statuses, including Incomplete, On-Order, and Backorder. This enables you to consolidate orders based on their current status.
- **Preservation of Related Data**: When you consolidate purchase orders, any related store transfers and special order quantities will be carried through to the consolidated order.
- **Handling In-Progress Stock Receipts**: In scenarios where selected purchase orders have in-progress stock receipts, you have the option to cancel the receipt first and then proceed with the consolidation.
- **Status Determination for Consolidated Orders**: If your selection contains purchase orders with varying statuses (e.g., Incomplete, On-Order, Backorder), the consolidated purchase order will assume the status of the most progressed order. This automatic status determination simplifies your workflow.

**Examples of Status Determination:**

1. Incomplete PO 1, OnOrder PO 2, Back-Order PO 3 → The consolidated PO 3 will be assigned an On-Order status.
2. Incomplete PO 1, Incomplete PO 2, Back-Order PO 3 → The consolidated PO 3 will be assigned a Back-Order status.
3. Incomplete PO 1, OnOrder PO 2, OnOrder PO 3 → The consolidated PO 3 will be assigned an On-Order status.
4. Incomplete PO 1, Back-Order PO 2, Back-Order PO 3 → The consolidated PO 3 will be assigned a Back-Order status.

To Consolidate Orders, they must be from the same supplier and same outlet.

## []()Search Filters

Most of the filtering fields are self-explanatory, however, see the detailed information below for the more advanced fields.

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Reference PO Number | Compared to the PO No field, the Reference PO Number is the *new* Purchase Order number generated if you chose the Re-Order option from the POE Manager |
| External Order ID | The Order ID used in the external ordering system if using an API integration |
| Special Order | Used to control whether Special Order results should be included in the search results. Special Orders are included by default using the "Show All Orders" filter. |
| Advanced Search Options | The filters in this section mainly apply to International Purchase Orders. For more information refer to the Purchase Orders - Receive an International Order article |
| Linked Transfer Stage | When using Stock Replenishment to create Purchase Orders, you can consolidate your orders to be delivered to a single Outlet for holding. As part of this process, Retail Express automatically creates Transfers in the system for when the stock should be transferred to the Outlets. You can select a "Transfer stage", so that when the PO is received the Transfer status is automatically updated.  For more information on this process refer to the Consolidated Delivery section in the Purchase Orders - Consolidating Delivery to a single Outlet with Transfers article. |