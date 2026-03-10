---
title: "Neto by Maropost Release Notes – 19 Mar 2025"
articleID: 2086
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-06-25
---

# Neto by Maropost Release Notes – 19 Mar 2025

## **Overview**

This release includes updates from eCommerce releases **6.322.0**, **6.323.0**, and **6.324.0**.

## **Enhancements and Changes**

### **Introducing a New API - RedeemVoucher**

You can now use the newly launched API -  **RedeemVoucher** - to redeem gift vouchers on your Neto website. The API accepts **OrderID**, **VoucherID**, and **DateRedeemed** as mandatory payload parameters.

For more information on the API, see [RedeemVoucher API](https://docs.uat.neto.net.au/documentation/engineers/api-documentation/voucher/redeemvoucher/redeemvoucher/).

### **Decommissioned Legacy Payment Gateways**

Several legacy payment gateways have been decommissioned to streamline our systems and improve site speeds. Note that the customers using these payment gateways have been notified in advance to avoid any disruptions.

The following is the list of payment gateways that are no longer supported:

- ANZ Datacash
- T24 Quickgateway
- St. George Quickgateway
- Paystream
- Paymark Online EFTPOS
- Bendigo Bank Payments
- Bartercard
- Advam

### **New Fields Added to GetShippingQuote API Response**

The **GetShippingQuote** API response has been updated to include the **SortOrder** and **RoutingGroup** fields under **<ShippingMethod>**.

For more information on the API, see [GetShippingQuotes API](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote). 

### **Receipt Option Added in UpdateOrder API**

In the **UpdateOrder** API, a new option - receipt - has been added for the **SendOrderEmail** field. This enables you to trigger order receipt emails through the **UpdateOrder** API.

For more information on the API, see [UpdateOrder API](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder).

### **eBay Version Upgrade**

eBay version has been upgraded from 1327 to 1395.

### **Zip Payment Integration Updated**

Zip Payments integration has been updated to support their recent endpoint changes.

## **BUG FIXES**

- Fixed an issue where users were getting a DNS failure error upon clicking the **Update my business policies on eBay** link.
- Fixed an issue where the Return Merchandise Authorization (RMA) created via the control panel or AddRma API call wasn’t using the customer's 'Default Document Template' value.
- Fixed an issue where customer statements were generated based on incorrect dates.