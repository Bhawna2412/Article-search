---
title: "Set up Drop Shipping as a Supplier"
articleID: 1093
category: "Ways to Sell on Neto > Wholesale & B2B"
knowledgeBase: "Neto By Maropost"
---

# Set up Drop Shipping as a Supplier

Drop shipping is where a wholesaler sells to a reseller, but holds all the stock and dispatches it directly to the customer. This saves on costs to the supplier by not needing a website, as well as the drop shipping by not holding stock. Neto can be set up to automate a number of these functions to make selling through drop shippers as a supplier a straight forward experience.

To transfer and receive data you will need to create several import and export templates. Instructions to create an export template can be found in this article, but you will find specific examples for fields and filters in the sections below.

You can also learn more in our [Data Import & Export online course](https://galaxy.maropost.com/kb/articles/1662-course-data-import-and-export).

## Create Schedules

Schedules allow you to set up specific times to run your import and export tasks. It's important to co-ordinate with your sellers to agree on the time and frequency that data will be transferred, so that your schedule can run and perform the task. Below are the import and export tasks you will need to perform, and our minimum recommended intervals:

| Task | Frequency (Min) |
| --- | --- |
| Product export | Weekly |
| Stock export | Daily |
| Order import | Daily |
| Order status & tracking | Daily |

While more frequently is better, be careful you don't put too much load on the schedule. For example, exporting your full product list may take a while for your supplier to import, delaying their export of orders or processing stock levels.

Once you've worked out the schedules with your supplier, you can create your schedules:

1. In your Neto control panel navigate to **Settings & tools** > **All settings & tools**.
2. Search for **Task / Feed Schedules** and click on it.
3. You'll see a list of all the default feed schedules. Click the **Add new** button.
4. Enter a name for your schedule so that you can identify it easily.
5. Use the checkboxes to select when the schedule will trigger. In the example below our schedule will trigger every 4 hours, on the hour, every day of every month.
6. Click the **Save & close** button.

Your schedule is now created. Repeat these steps for each schedule you need to create.

## Product & Stock Data Feeds

Products and stock levels need to be sent to your sellers regularly to populate the available products. We recommend 2 separate feeds, one with the product details and a separate one with stock levels. By splitting them up the stock levels can be updated more frequently (e.g daily), and the data will process faster.

### Filters

| Filter | Setting |
| --- | --- |
| Active | Active |
| Product Category Filters | Varies depending on your seller’s verticals |

### Fields

A typical product feed will have the below fields:

```plaintext
SKU, Parent SKU, Brand, Description, Extra Options, Kit Components, Name, Description, Specifics, Supplier Item Code, UPC/EAN, UPC/EAN 1, UPC/EAN 2, UPC/EAN 3, Virtual, Height (Shipping), Length (Shipping), Width (Shipping), Cubic (Shipping), Product Category Full Path List, Image URL, Extra Image 01 URL, Extra Image 02 URL, Extra Image 03 URL, Extra Image 04 URL, Extra Image 05 URL, Extra Image 06 URL, Extra Image 07 URL, Extra Image 08 URL, Extra Image 09 URL, Price, RRP, Weight
```

Whereas the stock feed will only require:

```plaintext
SKU, Quantity
```

## Sales Orders

When your drop ship seller sends orders to the drop ship supplier for fulfilment. Orders are typically sent in a batch, rather than when they come in. The timing and frequency of the exports is up to the seller and supplier to work out, but should be sent at least once a day.

It's very important that sales orders are attributed to the drop ship seller's customer account. By doing this you can correctly charge your seller for the goods sold, and apply specific email templates to their customers.

The orders will still have the buyers details in the shipping information to ensure orders are sent directly to them.

### Fields

A typical order export contains the below fields:

```plaintext
Order ID, Customer Email, Bill First Name, Bill Last Name, Bill Company, Bill Address 1, Bill Address 2, Bill City, Bill State, Bill Postcode, Bill Country, Ship First Name, Ship Last Name, Ship Company, Ship Address 1, Ship Address 2, Ship City, Ship State, Ship Postcode, Ship Country, Ship Phone, Order Status, SKU, Quantity, Item Options, Tax Inclusive, Shipping Method, Item Unit Price, Total Shipping Cost, Delivery Instruction, Payment Method, Amount Paid, Card Holder, Order Status, Product Discount Amount
```

> **Note:** Map the username field to a static value. Make the value your drop ship seller’s username so that orders are attributed to them correctly.

## Order Updates

Customers will receive notifications that their order has been shipped from the drop ship supplier, but this data also needs to be transferred to the seller. That way the seller's orders will be updated, and the customer can see their order history in the "My Account" section of the website.

### Filters

| Filter | Setting |
| --- | --- |
| Order Status | Dispatched |
| Batch Export History Status | Not Yet Exported |

### Fields

```plaintext
Order ID, SKU, Tracking, Status, Method, Date Shipped, Qty Shipped
```

## Email Templates

When you send an invoice to the customer you can customise them with your drop ship seller's branding. This is an optional set up step but it ensures a seamless experience for the customer.

Instructions to set up custom email templates can be found in [this article](https://galaxy.maropost.com/kb/articles/1107-customise-email-and-print-templates#3).)