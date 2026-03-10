---
title: "Understanding the Fulfilment Tab"
articleID: 493
category: "POS > Fulfillment"
knowledgeBase: "Retail Express"
---

# Understanding the Fulfilment Tab

You can manage order processing efficiently through understanding the Fulfilment tab in **Retail Express**, which provides comprehensive order management capabilities supporting various fulfilment workflows and delivery methods. This fulfilment comprehension helps retail operators coordinate efficient order processing and maintain visibility over pending fulfilment, with effective fulfilment tab use typically improving order accuracy and supporting timely customer delivery across Australian retail operations.

The Fulfilment tab in **Retail Express** enables retail operators to access detailed order information, update fulfilment status, and coordinate delivery or pickup activities, helping ensure systematic order processing and customer satisfaction. This fulfilment visibility helps ensure your retail operations can efficiently manage order lifecycles while maintaining clear oversight of pending fulfilment activities supporting operational efficiency.

The Fulfilment Tab serves as a central hub for managing and processing customer orders. This guide provides insights into the functionalities of the Fulfilment Tab, helping you streamline fulfilment tasks, track order statuses, and ensure accurate delivery or pickup processes for your customers.

The Fulfilment tab is extremely powerful for managing the fulfilment of goods to the customer. Within POS you can:

- Change the order **Fulfilment method** e.g. layby, delivery, pick-up
- Change the **Source and Fulfilment Locations** (creating a Transfer within Retail Express)
- Check for an **ETA date** of stock on inbound Purchase Orders
- **Allocate a Special Order **to a specific Purchase Order
- **View the progress** of stock awaiting Fulfilment (if linked to a Purchase Order or Transfer)
- Enter a** Due Date** for customer delivery
- **Fulfil the stock** to the customer

> **Note:** Before continuing with this article it is recommended that you first familiarise yourself with the different Fulfilment methods. Refer to the POS - Fulfilment Methods Overview article for more information, including the Inventory movements associated with each method.

To access the Fulfilment tab:

1. Log into **POS**
2. **Create a Sale**
3. Click on the orange **Fulfilment **tab

## []()Fulfil and Source columns

The Fulfil and Source columns are used to display information about the stock and the process it will take to be delivered to the customer.

- **Source - **Where the stock **originates** from. If the Source and Fulfil locations are different this will create a **Transfer **in Retail Express
- **Fulfil - **Where the product will be **dispatched** to the customer from e.g. this could be the store if the customer is picking up the product from there, or the warehouse if the product is being shipped to the customer

![mceclip2 (100).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiVYEAY.jpg)
To change the Fulfil and Source locations:

1. For **individual products,** double click on the product row, for **all products** click the **Bulk Edit All **button at the bottom of the screen

> **Note:** If using a touch screen or mobile device press and hold on the line.

2. The **Fulfilment Details **window will open
3. A list of **Outlets **and their **Available** stock levels will be displayed (the outlets displayed are determined by the permissions for that user); if Bulk Editing this column will be blank
4. Select a new **Source From **outlet
5. Select a new **Fulfil From **outlet i.e. where the product is dispatched/picked up from
6. Update the **Due Date,**
7. Click **Done**

![mceclip3 (69).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphCjEAI.jpg)
In addition to Outlets, the Source & Fulfil columns will also display:

|  |  |
| --- | --- |
| PO Details | If the sale is waiting on the arrival of a Purchase Order, the PO ID and status will be displayed, along with the ETA date the PO will arrive. ETA dates can be set against Purchase Orders from the Back Office ![mceclip5 (30).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiViEAI.jpg)  > **Note:** Special Orders can be allocated to a specific Purchase Order - click here for information. |
| Transfer Details | If the stock will be fulfilled from a Transfer, the Transfer ID and status will be displayed between both the Source and Fulfil columns: ![mceclip10 (8).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiVsEAI.jpg) |
| Due Date | The date the stock needs to be fulfilled to the customer ![mceclip9 (12).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiJ0EAI.jpg) |
| Lead Time | An indicator of how long the product will take to arrive. Lead times are manually set against each product. For more information refer to the Products - Lead Time article. ![mceclip7 (19).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiD7EAI.jpg) |
| Stock Indicator | A warning sign will be displayed if the product on the sale is currently out of stock. Hover over the icon to display additional detail ![mceclip8 (8).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiVxEAI.jpg) |

## []()Quantity Columns - Qty, Filled and Balance

The Qty, Filled and Balance columns are all used to display the quantities for the order and their status in being provided to the customer.

![pos_fulfilmenttab_qtyfilbal.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiW2EAI.jpg)

|  |  |
| --- | --- |
| **Column** | **Details** |
| Qty | Number of products ordered |
| Fulfilled | Number of products already provided to the customer |
| Balance | Number of products remaining products to be dispatched |

## Frequently Asked Questions

[What are fulfilment prompts - why am I being asked if I have "given any more items"?](https://galaxy.maropost.com/kb/articles/493-understanding-the-fulfilment-tab#fulfilment-prompts)

On occasion, you may be asked "Have you given any more of the below items to the customer?" when adding additional payments against a sale in POS - typically during laybys.

![pos_fulfilmentprompt (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiW7EAI.jpg)
This prompt is a reminder to update the inventory if there have been any changes during the process of editing the sale. There are specific circumstances on when this prompt appears, and when it's bypassed.

In order for the prompt to be displayed the order must meet **all **of the following criteria:

- The sale was **previously finalised **- the easiest way to check this is if the red button in the bottom right-hand corner of the order shows "Update" instead of "Finalise"
  ![pos_updatebutton (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiPWEAY.jpg)
- There are products with a **Fulfilment method other than Cash & Carry **(as Cash & Carry assumes the customer is taking it with them immediately)
- The **Dispatch Quantity **(the Dispatch column on the Fulfilment tab):  - Is **editable** for one or more items i.e. there are still products to be dispatched
  - Is **zero for all items **i.e. if the user has added a Dispatch quantity of 1 or more for a product it's assumed that the user has considered the remaining other items in the sale
    ![mceclip12 (6).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiN1EAI.jpg)
- There has been a **payment **added against the sale since the order was last finalised i.e. the payment was entered during the current transaction and can be edited by clicking on it (the Payment is "unlocked"). The easiest way to see this is if there is a trash can icon alongside the payment:
  ![pos_paymentstab_notfinalised (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphRqEAI.jpg)

> **Note:** The prompt will only be displayed once in a single session when editing a sale; if the sale is updated, reopened and modified the prompt will display again.

[How can I set an order for Home Delivery from Warehouse](https://galaxy.maropost.com/kb/articles/493-understanding-the-fulfilment-tab#deliver-warehouse)

**Scenario: **A product is out of stock in the current location (store A) but in stock in the Warehouse; the product will be delivered to the customer's home.

|  |  |
| --- | --- |
| **Selection** | **Details** |
| Fulfilment Method | Delivery (if the customer was collecting the stock from the Warehouse it would be "Warehouse Pickup") |
| Source Location | Warehouse |
| Fulfil Location | Warehouse - as the product is being dispatched to the customer from the Warehouse and *not *the store, the Warehouse is the Fulfilment location as well |
| ITO Created | No |

[How do you order a product from another location](https://galaxy.maropost.com/kb/articles/493-understanding-the-fulfilment-tab#product-stock-other-location)

**Scenario: **A product is out of stock in the current location (store A) but available in another location (store ![B)](https://galaxy.maropost.com/resources/emoji/sunglasses.png). The customer would like to order the product, have it transferred to the current store and pick it up.

|  |  |
| --- | --- |
| **Selection** | **Details** |
| Fulfilment Method | Layby/Pickup (as the customer is returning to the store to collect the item) |
| Source Location | Store B |
| Fulfil Location | Store A |
| ITO Created | Yes |