---
title: "Inventory Reservations"
articleID: 2358
category: "Inventory"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2025-12-12
---

# Inventory Reservations

The Reservations section displays all active stock reservations against orders across different warehouse locations. This feature is critical for maintaining inventory accuracy, avoiding stockouts, and ensuring order fulfillment workflows are aligned.

### **How Reservations Are Generated**

Reservations can be created in two ways: **automatically** during the checkout process or **manually** by staff.

## **1. Automatic Reservations (During Checkout)**

When a shopper completes the checkout and clicks **“Pay”**, the system places a temporary reservation on the item for **10 minutes**.

- If the payment is successful, this reservation becomes **permanent**.
- If the payment fails or times out, the reservation is automatically released, and the item is returned to available stock.

> **Note:** **Note:** Reservations are not made earlier in the shopping process (e.g. cart or shipping page) to avoid stock being held unnecessarily.

![image.png](https://us.v-cdn.net/6038474/uploads/1FC1SNFE81GQ/image.png)

## **2. Manual Reservations (From the Reservations Page)**

Staff can manually reserve stock by clicking the **‘+ Reserve’** button at the top-right of the Inventory Reservations page.

This is useful for internal holds, custom orders, or handling high-priority sales outside the regular checkout flow.

To access, navigate to **Inventory > Reservations** from the left menu.

![image.png](https://us.v-cdn.net/6038474/uploads/3QMSXUEFBG63/image.png)
Each row in the Reservations table represents a reserved product item and includes the following details:

| Column | Description |
| --- | --- |
| **Title** | The name or variant of the reserved product. |
| **SKU** | The unique identifier of the variant. |
| **Order Number** | The order linked to the reservation (clickable for quick access). |
| **Warehouse** | The location where the stock is reserved. |
| **Description** | Notes related to the reservation, usually indicating the purpose or reference order. |
| **QTY** | Quantity of items reserved. |
| **Actions** | Three-dot menu to manage individual reservations |

## Edit Reservation

Clicking the **Edit** option under the Actions menu allows you to modify an existing reservation.
On the **Edit Reservation** page, you can:

- Change the **Item to Reserve**.
- Select the correct **Location** (warehouse).
- View current **In-Stock** and **Available** quantities.
- Adjust the **Reserve Quantity**.
- Update the **Description** field for clarity.

Once done, click **Save Reservation** to apply the changes.

![image.png](https://us.v-cdn.net/6038474/uploads/4R95ATLKI4KD/image.png)

> **Note:** ***Note****: If the item has zero availability or stock, the reservation will still be saved but may impact fulfillment operations.*

#### Filters & Controls

- 
  ![image.png](https://us.v-cdn.net/6038474/uploads/26XSXBDXQSG7/image.png)

  ![image.png](https://us.v-cdn.net/6038474/uploads/GBNCT30AHRTZ/image.png)

## **Create Reservation:**

Click the **Create Reservation** button to manually assign inventory to orders. 

To create a new reservation:

1. Click the **Create Reservation** button on the top-right corner.
2. A new popup will appear with the following fields:  - **Item to Reserve***: Select the product you want to reserve from the dropdown.
  - **Location***: Choose the warehouse for reservation.
  - **Description**: (Optional) Add a note (e.g., “Items reserved for order #291”).
3. Click **Save Reservation** to complete the process.
  ![image.png](https://us.v-cdn.net/6038474/uploads/M9W31LZEY9LQ/image.png)

> **Note:** **Note:** The *Save Reservation* button is enabled only after filling out all mandatory fields.