---
title: "Release Notes 3.15.9 - API Integrations"
articleID: 1295
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes 3.15.9 - API Integrations

# Release Notes 3.15.9 - API Integrations

This release will be available to all customers by the 6th September 2022.

## New Features

### Unified REST API - Retrieve PO info for linked Special Orders

We've added the ability to retrieve Purchase Order information linked to Customer Special Orders. We now include the following data when retrieving Order Items via **GET /orders** and **GET /orderitems:**

* POID (Purchase Order ID)
* Status
* ETA Date
* and more...

From this release onwards, updating the Purchase Order will now mark the Special Order Line Item with a "Last Updated" date, allowing you to retrieve the most up-to-date information on ETA dates.

Please note: Linked Purchase Order data is only available for Order Line Items with Process Mode 2 = Special Order.

  

---

## Improvements

### EDS eCommerce API - Voucher Integration

We've extended our Voucher Integration process, and you can now specify a Voucher Code to be used during Voucher Creation. The VoucherCode parameter is optional:

* If there is no VoucherCode specified, we will automatically generate a code
* If the VoucherCode is specified, we will set the VoucherCode accordingly.

VoucherCodes are required to be unique and have a maximum length of 20 characters.

For detailed information on how to manage Vouchers through the API please refer to the [EDS API Documentation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520EDS%2520API.pdf) and [Integrated Gift Vouchers Guide](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520EDS%2520Integrated%2520Gift%2520Vouchers.pdf).

### Unified REST API - Orders Update

To improve reconciling and utilising Order Data within external solutions, we've added the following data to **GET /orders**:

* We've added "**fulfilled\_in\_full\_on**" and "**paid\_in\_full\_on**" dates to the order header
  + "fulfilled\_in\_full\_on" date - set once all items on an order have been marked as fulfilled  

    **Note:**This date will reset if new unfulfilled items are added to the order at a later time
  + "paid\_in\_full\_on" date - set once the full payment has been received against an order
* "**include\_order\_vouchers**" to return the vouchers associated with this order
  + Data includes the code, type, initial value, balance, created date and expiry date
  + Previously, separate calls had to be made to obtain Voucher Data associated with specific transactions; this improvement allows you to obtain vouchers sold within this order for ease of reconciling order totals