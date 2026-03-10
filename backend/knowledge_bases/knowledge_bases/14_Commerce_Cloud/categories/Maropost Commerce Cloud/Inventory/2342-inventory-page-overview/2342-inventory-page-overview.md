---
title: "Inventory Page Overview"
articleID: 2342
category: "Inventory"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2025-11-03
---

# Inventory Page Overview

The **Inventory page** offers a centralized view of all product SKUs and their current stock levels across multiple warehouses or fulfillment locations. This helps businesses **track availability**, **monitor stock movement**, and **manage reservations** efficiently.

## To access

Go to Inventory >> Inventory

![image.png](https://us.v-cdn.net/6038474/uploads/MIMWL7RACY5Q/image.png)
The inventory table displays the following columns for each product:

| **Field** | **Description** |
| --- | --- |
| **Title** | The product or variant name, clickable to view more details |
| **SKU** | Unique identifier of the item |
| **Warehouse** | The location where this inventory is stored |
| **Reserved** | Quantity held for pending or confirmed orders |
| **Available** | Number of units available to sell |
| **In Stock** | Total quantity in the system (Reserved + Available) |
| **Actions** | A three-dot menu (`⋮`) offering management options |

## Location Filter

Located in the top-right corner, the **Location dropdown** allows users to filter inventory data by specific warehouses.
This is especially useful for:

- Viewing stock levels at individual locations
- Ensuring that local stores or fulfillment centers have sufficient inventory
- Making regional stock decisions without affecting global data

When a location is selected, the table updates to reflect **only the stock associated with that location**.

![image.png](https://us.v-cdn.net/6038474/uploads/CR7GV0646W3U/image.png)

## Inventory Details Page

You can access the **Inventory Details Page** in two ways:

- By **clicking the product title link** on the Inventory table.
- By selecting **‘Edit’** from the **3-dot (⋮) Actions menu** next to the item.

At the top of the page, you'll see a summary of the specific product variant you're editing. This helps you quickly confirm which product variant you're managing. This includes:

- **SKU**: Unique identifier for the variant (e.g., NK1512_210)
- **Size**: Variant size label (e.g., XS)

![image.png](https://us.v-cdn.net/6038474/uploads/HEQ2OEL8F77P/image.png)

## **Associated Variant Panel**

On the right-hand side, under **Associated Variant**, the currently selected variant (e.g., XS) is shown. You can click on this option to view and edit other variants. 

![image.png](https://us.v-cdn.net/6038474/uploads/3DAGY2PD6NTY/image.png)

## **Inventory Section**

This section allows you to manage barcode identifiers and backorder settings:

- **EAN/UPC/Barcode** fields can be filled in for product tracking.
- **Manage inventory **toggle**: **When enabled, Maropost Commerce Cloud automatically adjusts stock levels based on orders, returns, and manual reservations.
- **Allow backorders** toggle: When enabled, this allows customers to purchase the product even when it’s out of stock.

This helps manage fulfillment flexibility.

![image.png](https://us.v-cdn.net/6038474/uploads/Z9QQYTMR0YRK/image.png)

## **Attributes Panel**

The Attributes section contains physical and identification details about the product:

- **Height, Width, Length, Weight**
- **MID Code**
- **HS Code** (e.g., 62024090)
- **Country of Origin** (e.g., Australia)

These attributes are crucial for shipping, customs, and international compliance. You add/edit these details by click the pencil option. 

![image.png](https://us.v-cdn.net/6038474/uploads/LOO0MGWDJ268/image.png)

## **Locations Section**

This section displays the stock distribution across locations. It provides a real-time snapshot of inventory across fulfillment centers.

- **Reserved**: Quantity currently reserved for orders.
- **In-stock**: Quantity physically available in inventory.
- **Available**: Quantity available for sale (excluding reserved stock).

![image.png](https://us.v-cdn.net/6038474/uploads/6ZX0ZBOAG8RX/image.png)
Clicking on the **3-dot menu** in this section opens a dropdown where you can select **Manage Locations**. Once inside the **Manage Locations** modal, you'll see a list of all locations that stock the selected variant. You can:

- Select or deselect locations to see the available quantity for this variant.
- Click **Save** to apply the changes.

Once, you have selected the location, you will see the available units at that location and make reservations. 

[▶ Inventory Page Overview](https://youtu.be/SxoF8xN5Rhw)