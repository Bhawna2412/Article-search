---
title: "Understanding Product Fulfilment"
articleID: 959
knowledgeBase: "Help Articles"
lastUpdated: 2024-04-16
---

# Understanding Product Fulfilment

# Understanding Product Fulfilment

Retail Express uses a "First In First Out" (FIFO) process to determine the order of allocating stock to customer orders for dispatch where there is not enough stock available to fulfil the quantity purchased.

When an item is ordered and arrives in store, it is allocated to the first customer in sequential order based on the date they first requested the stock (created the Invoice). As more stock arrives, the products are again allocated to the next customer in the queue.

---

## How to view stock availability

There are two ways to check the availability of the stock for a specific customer order:

**POS** - on the Fulfilment tab when the sale is being created/edited

  
  

**Back Office**- using the Fulfilment Report

The Fulfilment Report also shows which other customers are waiting for the same product. If there's not enough stock to dispatch all orders the "Qty Available to Pick" will only be populated for the earliest orders (following the FIFO rule of first in first out allocation).

---

## Example Scenario

In this example we'll use a brand new product, never sold before (so there are no outstanding fulfilments already for this product).

**Title:** Mens Leather Jacket  
**SKU:** MLJ12345678  
**Current stock level:**zero

To demonstrate how the allocation process works we'll go through the following process:

1. Customers place orders for the product not yet in stock
2. Product is ordered on a Purchase Order (PO)
3. Product is received from the PO

**Customer Orders placed:**

The following orders are placed for the product, using the [Layby](https://galaxy.maropost.com/s/article/Create-a-Layby) feature at POS (since the product is not available to take home with them).

1. Sam Billington
2. Jack Bloggs
3. Michelle Conway

These invoices can be seen in the [Sales Report](https://galaxy.maropost.com/s/article/Sales-Report), as well as the Fulfilment Report, covered more below.

**Fulfilment Report:**

The Fulfilment Report is used to view the stock allocated to be picked for dispatch to the customer. Things to note:

* Sorted by oldest invoices first (if there were stock to pick the orders at the top would be available to pick)
* Currently none of the orders are available to pick (Avail Pick column)
* Source shows the lead time of 4 days (manually configured when the [product is created](https://galaxy.maropost.com/s/article/Create-and-Edit-Products))

**Product ordered using a Purchase Order**

A [Purchase Order](https://galaxy.maropost.com/s/article/Create-a-Purchase-Order) is then created for the supplier, with the ETA date set as within 2 days. The Fulfilment report now shows:

* Available to Pick remains at 0 (as the stock has not yet arrived)
* The Purchase Order has been allocated to the first sale
* The Order information is displayed (PO Number, ETA date and quantity ordered)
* The remaining sales haven't changed as there's not enough stock on order to allocate to these sales

**Purchase Order received**

Once the stock arrives and the [Purchase Order is received](https://galaxy.maropost.com/s/article/Stock-Receipt-Overview) (updating the stock available to 1), the Fulfilment Report will be updated to show the following:

* A product is now available to be picked and dispatched against the earliest invoice (in this case the invoice for Sam Billington).
* This is regardless of the status of the payment for the order e.g. if Sam still had a balance owing on his layby he would still have the stock allocated to his Invoice)
* The remaining invoices still display the lead time depending on when the stock is expected to be received

**Note:**Staff can still fulfil the product against other sales e.g. the second order for Jack Bloggs could be fulfilled instead. Sam's order would be updated to show 0 available to be picked/dispatched, but if further stock arrived he would remain first in the queue.

[Back to top](#top)

---

## Frequently Asked Questions

[What happens if the product is exchanged?](#product-removed)

  
  

In the event Sam decides he no longer wants the Jacket changes the layby to another item (for example another Jacket), the Jacket that was allocated to him now moves down the queue to the next customer, Jack Bloggs. When running the fulfilment report again, we can see Sam's bike on layby in the list (still at the top as it was the earliest invoice) however the "1 Jacket available to Pick" is now flagged as Jack's and is ready to be collected/dispatched.

As and when we received a further purchase order with more Jackets, the available to pick will adjust accordingly in order of allocation sequence for all customers.

**Tip:** The fulfilment report also has a filter/checkbox that can be used to "Only show orders with goods available to pick" to hide orders that are not yet available for dispatch.

Using the "Only Show Orders with Goods Available to Pick" option in the scenario above, we wouldn't see Michelle's order. This is handy with reducing the number of results on the Fulfilment Report if you are only searching for orders ready for dispatch.

  
  

[What happens if the Source or Fulfil Location is changed?](#location-changed)

  
  

Changing the source or fulfilment location of an existing layby (i.e. to collect from a different store location) will reset the position of that order in the queue as it needs to obey the existing orders ahead in the queue at the new store location.