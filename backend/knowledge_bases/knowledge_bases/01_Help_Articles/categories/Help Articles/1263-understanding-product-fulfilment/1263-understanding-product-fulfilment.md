---
title: "Understanding Product Fulfilment"
articleID: 1263
knowledgeBase: "Help Articles"
lastUpdated: 2023-05-11
---

# Understanding Product Fulfilment

# Understanding Product Fulfilment

Retail Express uses a "First In First Out" (FIFO) process to determine the order of allocating stock to customer orders for dispatch when there is not enough stock available to fulfil the quantity purchased.

When an item is ordered and arrives in store, it is allocated to the first customer in sequential order based on the date they first requested the stock (created the Invoice). As more stock arrives, the products are again allocated to the next customer in the queue.

## First In, First Out (FIFO)

This is the most intuitive and widely used method. It assumes that a business's first product is from the first (or oldest) set of materials or goods it bought and values the inventory accordingly. In general, this is the method that most closely matches the actual inventory costs.

First-in goods are generally cheaper than those that follow because materials prices and other inventory costs tend to rise over time due to inflation. FIFO therefore generally results in a lower COGS and higher gross income than other valuation methods.

FIFO has two significant disadvantages. First, a higher gross income translates to a bigger tax bill. Second, during periods of high inflation, FIFO can result in financial statements that can mislead investors.

Imagine you sell dry chickpeas by the pound. It?s a new business, so your beginning inventory is zero. You initially buy 60 pounds and subsequently purchase an additional 70 pounds and then 80 pounds to stay ahead of future sales demand. The price rises between purchases, as shown in the table. If you sell 170 pounds in the relevant accounting period at $1.50/pound, your revenue will be $255 and your gross profit will be $255.00 ? $177.50 = $77.50.

[Back to top](https://galaxy.maropost.com/s/article/1Understanding-Product-Fulfilment#top)

---

## How to view stock availability

There are two ways to check the availability of the stock for a specific customer order:

1. **POS** - on the Fulfilment tab when the sale is being created/edited [![mceclip1.png](https://ress.zendesk.com/hc/article_attachments/360004418855/mceclip1.png)  
   Click to view full size](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F360004418855%2Fmceclip1.png)
2. **Back Office** - using the Fulfilment Report [![mceclip3.png](https://ress.zendesk.com/hc/article_attachments/360002448436/mceclip3.png)  
   Click to view full size](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F360002448436%2Fmceclip3.png)

The Fulfilment Report also shows which other customers are waiting for the same product. If there's not enough stock to dispatch all orders the "Qty Available to Pick" will only be populated for the earliest orders (following the FIFO rule of first in first out allocation).

[Back to top](https://galaxy.maropost.com/s/article/1Understanding-Product-Fulfilment#top)

---

## Example Scenario

In this example, we'll use a brand new product, never been sold before (so there are no outstanding fulfilments already for this product).

![mens_jacket.jpg](https://ress.zendesk.com/hc/article_attachments/360002343315/mens_jacket.jpg)

**Title:** Mens Leather Jacket  
**SKU:** MLJ12345678  
**Current stock level:**zero

To demonstrate how the allocation process works we'll go through the following process:

1. Customers place orders for the product not yet in stock
2. Product is ordered on a Purchase Order (PO)
3. Product is received from the PO

### Customer Orders placed:

The following orders are placed for the product, using the [Layby](https://galaxy.maropost.com/s/article/Create-a-Layby) feature at POS (since the product is not available to take home with them).

1. Sam Billington
2. Jack Bloggs
3. Michelle Conway

These invoices can be seen in the [Sales Report](https://galaxy.maropost.com/s/article/Sales-Report), and the Fulfilment Report, which cover more below.

### Fulfilment Report:

The Fulfilment Report is used to view the stock allocated to be picked for dispatch to the customer. Things to note:

* Sorted by oldest invoices first (if there were stock to pick the orders at the top would be available to pick)
* Currently none of the orders are available to pick (Avail Pick column)
* Source shows the lead time of 4 days (manually configured when the [product is created](https://galaxy.maropost.com/s/article/Create-and-Edit-Products))

[![mceclip1.png](https://ress.zendesk.com/hc/article_attachments/360002344495/mceclip1.png)  
Click to view full size](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F360002344495%2Fmceclip1.png)

**Product ordered using a Purchase Order**

A [Purchase Order](https://galaxy.maropost.com/s/article/Create-a-Purchase-Order) is then created for the supplier, with the ETA date set as within 2 days. The Fulfilment report now shows:

* Available to Pick remains at 0 (as the stock has not yet arrived)
* The Purchase Order has been allocated to the first sale
* The Order information is displayed (PO Number, ETA date and quantity ordered)
* The remaining sales haven't changed as there's not enough stock on order to allocate to these sales  
  ![mceclip4.png](https://ress.zendesk.com/hc/article_attachments/360002448516/mceclip4.png)

**Purchase Order received**

Once the stock arrives and the [Purchase Order is received](https://galaxy.maropost.com/s/article/Stock-Receipt-Overview) (updating the stock available to 1), the Fulfilment Report will be updated to show the following:

* A product is now available to be picked and dispatched against the earliest invoice (in this case the invoice for Sam Billington).
* This is regardless of the status of the payment for the order e.g. if Sam still had a balance owing on his layby he would still have the stock allocated to his Invoice)
* The remaining invoices still display the lead time depending on when the stock is expected to be received  
  ![mceclip5.png](https://ress.zendesk.com/hc/article_attachments/360002448556/mceclip5.png)

**Note:**Staff can still fulfil the product against other sales e.g. the second order for Jack Bloggs could be fulfilled instead. Sam's order would be updated to show 0 available to be picked/dispatched, but if further stock arrived he would remain first in the queue.

[Back to top](https://galaxy.maropost.com/s/article/1Understanding-Product-Fulfilment#top)