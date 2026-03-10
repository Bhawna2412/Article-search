---
title: "Fulfillment"
articleID: 2356
category: "Products"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2025-12-01
---

# Fulfillment

The **Fulfillments** tab is your centralized hub to track how each order is being processed, picked, packed, and shipped — making it easier to manage post-order operations. Whether you're overseeing dozens or thousands of orders, this tab helps you stay in control by surfacing the **status of fulfillment, payment, inventory movements, and timelines** — all in one place.

The **Fulfillments tab** is designed to answer one key question: “What is the current status of each order in terms of being fulfilled and shipped?”

It offers a real-time view of all fulfillment activities — helping your team coordinate between order management, warehouse handling, and logistics execution.

## To access,

go to Orders >> Fulfillment

![image.png](https://us.v-cdn.net/6038474/uploads/Y988EIG7JE1H/image.png)

## Overview of the Fulfillment Table Columns

Let’s break down what each column in the table means and how you can use it:

| Column | Description |
| --- | --- |
| **ID** | Unique identifier for each fulfillment event. Clickable to view fulfillment details. |
| **Order** | Links to the corresponding Sales Order (e.g. #MCC-10000258). |
| **Customer** | Email address of the customer who placed the order. |
| **Warehouse** | Shows which warehouse the item is being fulfilled from. |
| **Fulfillment Status** | Displays the state of order processing — e.g., `Picked`, `Shipped`, or `Cancelled`. |
| **Payment Status** | Indicates whether the order is `Paid`, `Not Paid`, or `Refunded`. |
| **Product QTY** | Quantity of items in the fulfillment batch. |
| **Order Status** | Order Status shows the current state of the order—such as Pending, Processing, Completed, or Cancelled. |
| **Sales Channel** | Sales Channel displays the name of the channel the order came through. |
| **Created At** | Timestamp when the fulfillment record was created. Helps with timeline tracking. |
| **Total** | Order value associated with the fulfillment. |

> **Note:** **Note**: There can be multiple fulfilments in the same Order. We have **Order Status** column to define which order does this fulfilment belongs to. 
>  Two or more fulfilments can have same Order number shown.

## Understanding Key Statuses

### Fulfillment Status

These statuses reflect the operational progress of the order being prepared and dispatched:

| Status | Meaning |
| --- | --- |
| **Picked** | Items have been picked from inventory. |
| **Packed** | Items have been packed, and the selection of the shipping carrier is pending. |
| **Pick Carrier** | The shipping carrier has been chosen, and the order is ready for shipment. |
| **Canceled** | Fulfillment was canceled before shipment. |

### Payment Status Options

The payment status helps you identify the financial state of each fulfillment. Below are the available statuses:

| Status | Meaning |
| --- | --- |
| **Confirmed** | Payment is acknowledged by the system. |
| **Paid** | Full payment has been received. |
| **Not Paid** | Payment is missing or failed. |
| **Partially Paid** | Partial payment has been received. |
| **Awaiting** | Payment is expected but not yet received. |
| **Captured** | Payment was successfully captured. |
| **Refund Requested** | Buyer has requested a refund. |
| **Difference Refunded** | Partial refund has been issued (price difference, etc.). |
| **Partially Refunded** | Only a portion of the order value was refunded. |
| **Refunded** | Full refund issued. |
| **Requires Action** | Payment requires manual action or review. |
| **Canceled** | Payment was canceled. |

### Order Status

*The “Order Status” shows the current stage of the order in its lifecycle — from initiation to completion, including any issues or cancellations.*

| **Order Status** | **Explanation (One-liner)** |
| --- | --- |
| **Pending** | The order has been received but is yet to begin processing. |
| **Processing** | The order is currently being worked on. |
| **Requires Action** | The order is on hold and needs manual intervention or a response to proceed. |
| **Canceled** | The order was terminated before completion. |
| **Archived** | The order is old or inactive and has been stored for record-keeping. |
| **Completed** | The order has been fully processed and finalized. |

## Filtering & Sorting

To help you find the information you need quickly, the Fulfillments tab includes powerful filter and sort options:

- **Location filter:** Choose which warehouse/location you want to view fulfillment for.
- **Sorting:** Sort by columns such as Created At, or Fulfilment Status.
- **Advanced filters:** Filter by order status, payment status, fulfillment status, sales channel, and created date.
- You can also **save filters** so teams can reuse them for recurring operational workflows.

These tools help you identify delays, troubleshoot issues, and maintain smooth fulfillment operations.