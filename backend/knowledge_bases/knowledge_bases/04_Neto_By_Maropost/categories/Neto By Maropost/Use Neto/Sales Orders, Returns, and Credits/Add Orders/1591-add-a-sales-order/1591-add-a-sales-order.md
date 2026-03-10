---
title: "Add a Sales Order"
articleID: 1591
category: "Use Neto > Sales Orders, Returns, and Credits > Add Orders"
knowledgeBase: "Neto By Maropost"
---

# Add a Sales Order

## Overview

Sales orders can be manually created in your Neto control panel should a customer walk in, phone, or contact you via email. In your Neto control panel, navigate to **Sales Orders** > **Add Order**.

The add sales order page will display allowing you to enter the details of their order.

> **Note:** Sales orders can also be cloned from the **View Orders** page. This will copy across the orderlines (including discounts) but not the customer.

## Customer Details

Sales orders must be associated with a customer for analytics, reporting and returns purposes. When you add a new sales order you can create it for an existing customer, or create a new customer account. To add customer details to a sales order for:

- Existing Customer
- New Customer

### Existing Customer

To add an existing customer to a sales order:

1. Enter all or part of the customer's name or email address in the **Add an Order or Quote For an Existing Customer** field.

> **Note:** If your customer doesn't want an account enter their name as "noreg". The sale will be attributed to the unregistered user account, and they will not be able to track the status of their order.

2. Select the customer you want to add from the list that appears.

The order will update and populate the customer and address details.

### New Customer

To add a new customer to a sales order:

1. Enter a **Username** or click the **Random Username** button to automatically generate a username for the customer.
2. Enter a **Password** or click the **Random Password** button to automatically generate a password for the customer.
3. Select a **User Group** for the customer. If in doubt, leave it as the default.
4. Click the **Newsletter Subscriber** checkbox if the customer wishes to receive marketing and other communications.
5. Add any **Internal Notes** you want to record about the customer.
6. Select the **Active Customer** checkbox. Customers must be active to make purchases on your website, or recieve marketing emails.

The customer record will be created when the order is saved.

## Address Details

To ensure you can bill and ship orders to your customer, each sales order must have both a billing and shipping address.

> **Note:** If you've added an existing customer to the sales order these details will already be populated, but you should confirm them with the customer before proceeding.

To add the customer's address details:

1.   - Name
  - Company (optional)
  - Address
  - Country
  - Post Code/Zip Code
  - Suburb (Australia and USA only)
  - City (outside Australia and USA)
  - State (outside Australia and USA)
  - Phone (optional)
  - Fax (optional)
  - Email address (required for Stripe payments)

  In the billing address details section, enter the customer's informtaion into the fields provided:
2. Select the **Save to Account** checkbox so these details can be loaded automatically in the future from the customer's account.
3. Fill in the same details for the **Shipping Address** section. If the billing and shipping address are the same, select **Billing Address** from the address book drop down menu, and the billing details will be copied across.
4.   - Purchase Order # (optional)
  - Date Required (optional)

  Enter any additional shipping address information:
5. Select the **Save to Address Book** checkbox to save the shipping address to the customer's account.

Address details will be saved to the customer's account when the sales order is saved.

## Order Lines

Orderlines are the products the customer is purchasing on the sales order. To add the orderlines to the sales order:

1. In the order lines section, enter all or part of the product **SKU** or **Name** into the respective fields to search for a product.
2. Select the product from the search results to add it to the sales order.
3. Enter the quantity the customer wishes to purchase in the **Qty** field (min 1).

> **Note:** You can also [add a discount or coupon](https://galaxy.maropost.com/kb/articles/1591-add-a-sales-order#4) to the entire sales order, rather than individual orderlines.

> **Note:** You can also add multiple quantites of similar items in bulk. Click the **Add items in bulk** button, and search for the product name. Enter the quantity next to each prouduct you want to add, and click the **Add Item(s)** button.

Repeat these steps, adding all the orderlines required by your customer.

## Coupons and Discounts

When a customer orders from you, they can use a [coupon code](https://galaxy.maropost.com/kb/articles/1360-add-a-discount-coupon) to recieve a discount. To apply a coupon code to a sales order:

1. Enter all or part of the discount code into the **Coupons and Discount Codes** section.
2. Select the discount you want to apply from the search results. Repeat if more than one discount is being applied.
3. Select the checkboxes for each discount you want to add to the sales order.
4. Click the **Apply discount(s) to order** button.
5. Confirm that the discounts will be added.

The sales order totals will be discounted accordingly.

## Shipping

The shipping section lets you choose which service will deliver the orderlines to your customer. There are a number of carriers that integrate with Neto for live rates and in built labels. To add shipping to a sales order:

1. Select a shipping option from the dropdown menu.
2. Optionally enter a **Shipping Discount** as either a dollar or percentage amount.
3. Click the refresh button to calculate the shipping cost.

The shipping cost will be added in the order summary and included in the grand total.

## Payment

Although not required at this stage, you can select a payment method for the sales order, and any payment terms. Follow the links below to learn how to set up payment methods and payment terms:

**Please Note**: Stripe requires a valid email address to process credit card payments.

- Payment Method Setup
- [Set up Payment Terms](https://galaxy.maropost.com/kb/articles/1095-customer-payment-terms)

## Save as Quote or Order

The sales order can now be saved. You have two save options, quote and order. Quotes are useful if customer doesn't have approval to place the order, or is shopping around and wants to compare prices.

Click the button that corresponds to what the customer wants, either **Save as New Quote** or **Save as New Order**.

Your sales order will be created, awaiting payment and processing.