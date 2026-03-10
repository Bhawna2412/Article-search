---
title: "Purchasing & Stock Receipt - Integration & API Summary"
articleID: 2278
category: "Purchase and Receiving > PO and Stock Receipt 2.0"
knowledgeBase: "Retail Express"
---

# Purchasing & Stock Receipt - Integration & API Summary

This guide outlines how to integrate with Retail Express to manage Purchase Orders, Purchase Order Receipts, and Supplier Invoices that are created and actioned using the Purchase Order 2.0 (modern) functionality in Retail Express. These entities work together to support a complete stock ordering and receiving workflow.

## Overview

Retail Express uses three core entities to manage stock procurement:

- **Purchase Orders**: The initial order sent to the supplier.
- **Purchase Order Receipts**: Records of stock received against a Purchase Order, including item-level pricing and costs.
- **Supplier Invoices**: Financial records from the supplier, including total costs, tax, and currency conversion.

### Relationships

- **One-to-One**: Each Purchase Order Receipt is linked to a single Supplier Invoice.
- **One-to-Many**: A single Purchase Order can have multiple Receipts and Supplier Invoices.

**Direct Costs**

- Costs are distributed across items in the associated Purchase Order Receipt.

## Workflow Examples

Retail Express supports multiple workflows for managing Purchase Orders and Receipts:

### 1. Create Purchase Order, Receive and Finalise

### 2. Add Direct Costs to Invoice before Finalising

### 3. Apply Discount and Costs to Invoice before Finalising

### 4. Make Available and Finalise in Separate Steps

### 5. Update Invoice Details after Stock is Made Available

### 6. Cancel Outstanding Quantities for Purchase Order

### 7. Reorder Outstanding Quantities for Purchase Order

## API Endpoints

### Purchase Orders

| Endpoint | Description |
| --- | --- |
| `POST /purchaseorders` | Create a new Purchase Order (with or without items). Status options: Incomplete (5), On-Order (6), Back-Order (9). |
| `PUT /purchaseorders/{id}` | Update Purchase Order status. Item updates not supported. |
| `GET /purchaseorders` / `{id}` | Retrieve or search Purchase Orders. Use `include_items` to fetch item details. |
| `PUT /purchaseorders/{id}/reorder` | Reorder items by creating a new Purchase Order and updating quantities. |

### Purchase Order Items

| Endpoint | Description |
| --- | --- |
| `POST /purchaseorders/{id}/purchaseorderitems` | Add item to an existing Purchase Order. |
| `GET /purchaseorders/{id}/purchaseorderitems` / `{id}` | Retrieve Purchase Order Items. Required for creating Receipts. |
| `PUT /purchaseorders/{id}/purchaseorderitems/{id}` | Update item details. |
| `PUT /purchaseorders/{id}/purchaseorderitems/{id}/cancel` | Cancel remaining quantity. Reason can be logged. |
| `DELETE /purchaseorders/{id}/purchaseorderitems/{id}` | Delete item (only if no receipts exist). |

### Purchase Order Receipts

| Endpoint | Description |
| --- | --- |
| `POST /purchaseorderreceipts` | Create a new Receipt. Must link to Purchase Order and Items. |
| `PUT /purchaseorderreceipts/{id}` | Update Receipt status. |
| `GET /purchaseorderreceipts` / `{id}` | Retrieve Receipts. Use `include_items` to fetch item details. |
| `DELETE /purchaseorderreceipts/{id}` | Delete Receipt (only if status is In Progress). |
| `POST /purchaseorderreceipts/{id}/discount` | Apply discounts to items (by amount or percent). |

### Receipt Items

| Endpoint | Description |
| --- | --- |
| `POST /purchaseorderreceipts/{id}/purchaseorderreceiptitems` | Add item to Receipt. Must link to Purchase Order Item. |
| `GET /purchaseorderreceipts/{id}/purchaseorderreceiptsitems` / `{id}` | Retrieve Receipt Items. |
| `PUT /purchaseorderreceipts/{id}/purchaseorderreceiptsitems/{id}` | Update item details (only when status is In Progress). |
| `DELETE /purchaseorderreceipts/{id}/purchaseorderreceiptsitems/{id}` | Delete item (only when status is In Progress). |

### Supplier Invoices

| Endpoint | Description |
| --- | --- |
| `PUT /supplierinvoices/{id}` | Update invoice details. |
| `GET /supplierinvoices` / `{id}` | Retrieve Supplier Invoices. |
| `PUT /supplierinvoices/{id}/directcosts` | Apply direct costs to Receipt Items. |