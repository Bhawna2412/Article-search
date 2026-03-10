---
title: "Special Orders - Process a Purchase Order"
articleID: 342
category: "Purchase and Receiving > Special Orders"
knowledgeBase: "Retail Express"
---

# Special Orders - Process a Purchase Order

The Special Order feature is an efficient process for selling products sourced directly from the supplier (instead of inventory held at your Store or Warehouse).

You can even use the feature to simultaneously sell and order products low in stock (or out of stock altogether) as a way of short cutting the process to create a Purchase Order.

- The Purchase Order is created when a sale containing one or more items marked as Special Order items is finalised in POS
- Purchase Orders are created as **Incomplete** (so they can be reviewed prior to placing On-Order) and linked to the Customer Order
- If you add multiple Special Order items on a sale, one PO will be created for each unique combination of Source Outlet and Supplier e.g. two Special Order items available from two different suppliers will result in two POs

> **Note:** If the Order quantity on the Customer Order is increased or new products are added after the order has been finalised, a separate Purchase Order will be created for the additional quantity. These can be combined into a single Purchase Order before being sent to the Supplier by using the PO Consolidation feature.

## Special Orders Video Series

To find the training video series on Special Orders, see Video - Special Orders.

## Process a Special Order Purchase Order

To review and process the Purchase Order:

1. Open **Back Office**
2. Navigate to **Inventory > PO Management > PO Manager**
3. Use the **Special Orders **filter to view Purchase Orders with Special Order items only
  ![mceclip2 (86).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi30EAA.jpg)
4. Ensure the **PO Status **filter is set to Incomplete

> **Note:** The On-Order status is selected by default

5. Update the rest of the Filters as required
6. Click **Search**
7. **Open** the Purchase Order
8. To quickly view the customer order associated to the Special Order items click the Linked Special Orders button at the bottom
  ![mceclip3 (58).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi35EAA.jpg)

> **Note:** You can do the same with Linked Transfers, but at this point the results will be blank, as the Transfers aren't created until the Purchase Order has been received

9. **Update** the Order as required
10. Add an ETA Date to the Purchase Order if known

> **Note:** The ETA date is displayed on the customer Order in POS on the Fulfilment tab

11. Click the **Add Items** tab
12. Special Order products are indicated by a basket icon on the left of the product
  ![mceclip3 (59).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi3AEAQ.jpg)
13. To increase the quantity of the product for the special order item (if you wanted to grab a few extra to have in stock) click **Pencil **icon
14. Enter the new quantity and click **Save Changes**
  ![mceclip0 - 2023-07-10T004730.732.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi3FEAQ.jpg)
15. The **Total Order Qty **will be increased to show the full amount to be ordered, but the **Special Ord Qty **value will remain the same
  ![mceclip1 - 2023-07-10T004735.020.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi3BEAQ.jpg)
16. To see other items on order from this same supplier on Incomplete Orders still to be be processed click **Consolidate Items**
17. A list of the products will be displayed, use the tick boxes in the right-hand side to select the products
18. Click **Move to current PO**

> **Note:** The Supplier Buy (Ex) price for the products that are moved will be the current Supplier Buy (Ex) price. If a custom price was set on the previous PO, the new PO will need to updated before being placed on order.

19. Click the **Add Items** tab; the new items will be displayed
20. Update the rest of the Purchase Order as required
21. Click **Place On-Order**

At this point the Order in POS will be updated to show the Purchase Order details, including the status of "On-Order".

![mceclip2 (87).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphyaEAA.jpg)

> **Note:** The number displayed will be the number of Special Order items linked to this customer Order, not the total number on the PO.

## []()Frequently Asked Questions

#### **Deleting/removing Special Order items**

A Purchase Order is created immediately after the POS sale is finalised. This PO is linked to the customer sale in POS.

if you need to delete a Special Order item, you'll also need to remove the product from the Purchase Order (assuming you no longer wish to order the product).

To delete a Special Order item:

- **POS - **Delete the product from the sale in POS (for detailed information on this process refer to POS - Managing Products on a Sale)
- **Purchase Order - **Delete the product from the Purchase Order (you will be unable to do this step until the product has been removed from the linked order in POS)

#### **Adding additional Special Order items to the sale**

If you add additional products to the sale in POS after the sale was originally finalised, these products will be created on a separate Purchase Order.

You can consolidate the items onto a single order if required, to ensure you only need to send a single Purchase Order to your supplier. See the Special Orders - Process a Purchase Order article for more information.

Want more information? Find related articles here:

- Special Orders - Special Orders Overview
- Special Orders - Selling Special Order Items
- Special Orders - Receive a Purchase Order
- Special Orders - Processing Transfers
- Special Orders - Fulfilling Sales
- Special Orders - Special Orders Report
- POS Settings - Order Conditions