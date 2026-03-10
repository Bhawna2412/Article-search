---
title: "Manual Payment"
articleID: 2382
category: "Sales Channel"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2026-01-26
---

# Manual Payment

The **Manual Payments** page allows you to manage payment methods that are completed **outside of automated payment gateways**, such as bank transfers, cash on delivery, or other offline payment arrangements. Orders placed using manual payment methods require review and approval before they can be fulfilled.

This page serves as a central location to view, create, and manage all manual payment methods configured for a specific sales channel.

## To access

1. Go to **Sales Channels**
2. Select the **sales channel** for which you want to configure payments
  ![image.png](https://us.v-cdn.net/6038474/uploads/QEKZ4WGG3VBH/image.png)
3. Once the sales channel opens, click **Settings**
4. Under Settings, select **Payments**
  ![image.png](https://us.v-cdn.net/6038474/uploads/L4B260000QEZ/image.png)
5. Navigate to the **Manual Payments** tab
  ![image.png](https://us.v-cdn.net/6038474/uploads/61BDK7T9HUX9/image.png)

## Understanding the Manual Payments Page

The Manual Payments page displays all manual payment methods created for the sales channel.

### Page Overview

- The page is divided into two tabs:  - **Payment Gateway** – for automated payment providers
  - **Manual Payments** – for offline or manual payment options
- The **Add Manual Payment** button allows you to create a new manual payment method

![image.png](https://us.v-cdn.net/6038474/uploads/10NDKHEMRZFG/image.png)
If no manual payment methods have been created yet, the page displays a message indicating that no manual payments exist.

### Manual Payment Methods Table

Once manual payment methods are added, they appear in a table with defined columns that allow you to quickly review, manage, and update all manual payment configurations from a single view.

| Column | Description |
| --- | --- |
| **Payment Method Type** | The type of manual payment (for example, Bank Transfer or Cash on Delivery) |
| **Payment Method Display Name** | The name shown to customers during checkout |
| **Customer Groups** | Contact lists or customer groups allowed to use this payment method |
| **Status** | Indicates whether the payment method is active or inactive |
| **Actions** | Options to edit or manage the payment method |

## Add a Manual Payment Method

Once the Manual Payment Method page opens, you can configure how this payment option appears and behaves across checkout and order confirmation pages.

### Basic Settings

| Field | Description |
| --- | --- |
| **Select Manual Payment Method** | Choose the type of manual payment you want to create (for example, Bank Transfer or Cash on Delivery). |
| **Status** | Set the payment method as **Active** or **Inactive**. Only active payment methods are visible to customers during checkout. |

![image.png](https://us.v-cdn.net/6038474/uploads/UEVZNE0B3DIP/image.png)

### Checkout Page Configuration

These fields define what customers see during checkout when they select this manual payment method.

| Field | Description |
| --- | --- |
| **Payment Method Display Name** | The name shown to customers on the checkout page (for example, “Bank Transfer”). |
| **Checkout Description** | Instructions or information shown at checkout to explain how the manual payment works. |

![image.png](https://us.v-cdn.net/6038474/uploads/N3DV09HBY93U/image.png)
This helps customers understand what is required before placing the order.

### Order Confirmation Page Configuration

These settings appear after the order is placed.

| Field | Description |
| --- | --- |
| **Payment & Order Instructions** | Detailed instructions customers see on the order confirmation page, such as how to complete the payment and what steps to follow next. |

![image.png](https://us.v-cdn.net/6038474/uploads/A7B538I7L7XI/image.png)
This ensures customers clearly understand how to finalize payment after checkout.

### Merchant Payment Details

These fields define where and how customers should send their payment.

| Field | Description |
| --- | --- |
| **Name of Bank** | Bank where the payment should be made |
| **Bank Account Name** | Account holder name |
| **Branch Code** | Bank branch code |
| **Bank Account Number** | Account number to receive payments |
| **Surcharge** | Additional fee applied to this payment method |
| **Minimum Spend** | Minimum order value required to use this payment method |
| **Maximum Spend** | Maximum order value allowed for this payment method |

![image.png](https://us.v-cdn.net/6038474/uploads/BP4W8BXBL5IS/image.png)
These details are displayed to customers as part of payment instructions.

### Contact Lists

You can control **who sees this manual payment method**.

| Field | Description |
| --- | --- |
| **Contact Lists** | Select specific contact lists that are allowed to use this payment method. Customers outside these lists will not see it at checkout. |

![image.png](https://us.v-cdn.net/6038474/uploads/F0ZUDGFA5OPK/image.png)
This is useful for offering manual payments only to selected customer groups.

## Saving the Manual Payment Method

After entering all required information:

1. Review the details carefully
2. Click **Save**
3. You will see a confirmation message: **Payment method updated successfully**
  ![image.png](https://us.v-cdn.net/6038474/uploads/7X3HZIM4W6RV/image.png)

Once saved, the manual payment method becomes available on the storefront based on the configured status and contact list visibility.

![image.png](https://us.v-cdn.net/6038474/uploads/1MPB67CBXOGC/image.png)