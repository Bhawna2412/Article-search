---
title: "Allocate Special Orders to a Purchase Order"
articleID: 497
category: "POS > Fulfillment"
knowledgeBase: "Retail Express"
---

# Allocate Special Orders to a Purchase Order

You can coordinate customer special orders with supplier purchasing through allocating special orders to purchase orders in **Retail Express**, which links customer commitments with incoming supplier stock for efficient order fulfilment. This order coordination helps retail operators manage made-to-order sales and ensure product availability, with effective special order allocation typically improving fulfilment accuracy and reducing inventory risk across Australian retail operations.

Special order allocation in **Retail Express** enables retail operators to link customer orders with specific purchase orders, helping ensure ordered stock fulfills customer commitments and supporting efficient inventory management. This allocation capability helps ensure your retail operations can efficiently manage special order workflows while maintaining clear connections between customer sales and supplier purchasing activities.

When adding a product to a sale to POS, if you don't have any stock you can sell directly from a Purchase Order and dispatch the products to the customer when they arrive.

How that stock is sourced can be controlled in a number of ways:

- Using the Retail Express automated source logic to find the next available product on incoming Purchase Orders, Transfers etc (by changing the sale to any non-Cash & Carry Fulfilment Method)
- Create a new Purchase Order with a direct link to the sale (by changing the item on a sale to a Special Order)
- Allocate the sale to an existing Purchase Order (provided the PO is On-Order or Back Order and has stock available) - this process is covered in detail below

For example, if the customer wants to wait before receiving the stock, you can change the sale to a Special Order and allocate the sale to the most appropriate PO based on the ETA date.

## New Sales

To allocate a sale on a product to a specific Purchase Order:

1. Create a sale in POS
2. Add the product to the sale
3. Click the **Fulfilment Tab**
4. Click the **Basket **icon ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/basket.05TJ100000PMcz6MAD.png) to change the Fulfilment Method to any method other than Cash & Carry
5. Change the "Process As" option to **Special Order**
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20241212at102151AM.05TJ100000PMd1bMAD.png)
6. Click **Update**
7. Click the **Select PO** link in the Sourcing column
	If this link doesn't appear you will need to ensure the "Process As" option has been changed to "Special Order"![mceclip3 (2).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHVLEA2.jpg)
8. Change the **Select Allocation Method **option to "Select PO"![mceclip4 (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmGQkEAM.jpg)
9. A list of Purchase Orders will be displayed in order of ETA date; to be eligible the Purchase Order must be On-Order or Back Order and have enough to fill the quantity required on the sale
10. Use the **Filters** to narrow the search for Purchase Orders if required e.g. ETA date range
11. Click a row to select a **Purchase order**
12. Click **Done**
13. Process the remainder of the sale as normal
14. **Finalise** the sale

> **Note:** The sale is not linked to the Purchase Order until the sale has been finalised. It's essential you finalise the sale to allocate it to the PO to prevent other users/sales from taking the available stock you had intended to use)

15. The Fulfilment Tab will show the details of the selected Purchase Order![mceclip5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHVVEA2.jpg)

## Existing Sales

Existing sales can be edited to update the order allocation, for example, if you have used the automated Retail Express source logic and want to select a specific order, or if you want to change the Purchase Order the sale is already allocated to.

1. Open the sale in POS
2. Click the **Fulfilment **icon
3. Ensure the Cash & Carry Fulfilment Method is not selected (you can use any other method e.g. Delivery)
4. Ensure **Special Order **is selected
5. Click **Update **to return to the sale
6. Click the **Pencil **icon under the Sourcing Outlet![mceclip7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHVaEAM.jpg)
7. Change the **Select Allocation Method **to be "Select PO"![mceclip8.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHWOEA2.jpg)
8. Select the new Purchase Order as required
9. Click **Done**
10. **Update** the sale

> **Note:** The sale is not linked to the Purchase Order until the sale has been finalised. It's essential you finalise the sale to allocate it to the PO to prevent other users/sales from taking the available stock you had intended to use)

## Frequently Asked Questions

[Why is the PO greyed out so I can't select it?](https://galaxy.maropost.com/kb/articles/497-allocate-special-orders-to-a-purchase-order#greyed-out)

There are a few reasons why the Purchase Order might be greyed out:

- The window is currently set to "New PO" - click "Select PO" to enable the list
- The Purchase Order doesn't have enough quantity available to fulfil the order

The Available quantity is determined by the Allocated queue & the number of assigned Special Orders. If there's not enough Available:

- Either the Purchase Order has already been allocated to other orders automatically or linked to other Orders; or
- The required Quantity on the sale is more than the quantity that remains available to customers for the Purchase Orders

[How can I find what Purchase Orders my stock is allocated to?](https://galaxy.maropost.com/kb/articles/497-allocate-special-orders-to-a-purchase-order#faq-allocated)

There are multiple ways to find Purchase Orders

- View the order within POS as described above
- Special Order Report - enter the Order Number (Customer Sale Number) or the Product PLU (Supplier SKU, Product ID etc)
- PO Detail Report - view the Customer Backorders (total Qty of allocated customer orders against each item on a PO ? last 2 columns)
- Purchase Orders display Special Order quantities on the PO Items tab; to view all related Special Orders click the "Linked Special Orders" button at the bottom of the screen![mceclip1 (5).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHIwEAM.jpg)

[What happens when I change the allocated Purchase Order?](https://galaxy.maropost.com/kb/articles/497-allocate-special-orders-to-a-purchase-order#change-allocate)

If your sale has already been assigned to a Purchase Order and you update the allocation to a different PO, the stock on the original PO will become available to be allocated to future sales.

For example:

1. A sale is created for 2 products and automatically assigned to the next available stock on a PO arriving in October
2. The customer decides they don't want their product until November
3. The sale is edited and allocated to a PO coming in November, freeing up the stock on the PO in October
4. A new customer walks in and orders the same product
5. The sale will be automatically allocated to the next available stock - the PO coming in October (unless that sale is also manually allocated, or set to create a new Purchase Order)

[Can I see the history if the allocation is changed?](https://galaxy.maropost.com/kb/articles/497-allocate-special-orders-to-a-purchase-order#change-allocate-audit)

You can!

When an allocated Special Order is changed to use a different PO, the Purchase Order where the sale was removed from is updated with a note in the Internal Comments field. You can also view this information in the "Comments" column of the PO Detail Report.

![mceclip1 (6).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHXbEAM.jpg)
The new Purchase Order the product was shifted to can be found by using the methods described above on how to view allocated Purchase Orders (e.g. Fulfilment Report).