---
title: "Creating Max Discount Rules"
articleID: 577
category: "POS > Settings"
knowledgeBase: "Retail Express"
---

# Creating Max Discount Rules

You can protect profit margins in Retail Express by establishing maximum discount rules that control how much discount staff can apply, helping your retail operations maintain pricing discipline while allowing flexibility for customer service. This capability prevents excessive discounting that can erode profitability, which helps ensure promotional pricing remains within acceptable business parameters.

Setting up proper discount limits enables your retail management to balance competitive pricing with financial performance, helping optimize profitability across all store locations. This helps retail operations maintain control over discount authority while empowering staff to provide appropriate price adjustments for customer satisfaction.

Max Discount Rules are used to limit the discount that can be applied to products, ensuring your staff have the flexibility to discount products as needed but remain profitable.

This article guides you through the process of creating and managing Max Discount Rules to align with your pricing strategies.

## Understanding Discounting

### Types of Discounts

Retail Express utilises two types of discounts:

|  |  |
| --- | --- |
| Manual discounts | Discounts applied by a user within POS by changing a Price or discount-related field |
| System-generated discounts | Discounts applied automatically via:  - Promotional or Outlet-specific discount prices - Promotional Campaigns - Customer Pricing (Standard or Fixed Price Groups) |

### Discount Rules

On top of this there are two different types of Discount Rules that can be applied:

|  |  |
| --- | --- |
| Max Discount Rule | Applies system-wide, including:  - Manual and system-generated discounts - Affects web store and API integrations |
| User Discount Rule | Applies to manual discounts only, and will not affect web store and API integrations |

## []()Group Rules

Group rules define how the maximum discount is calculated.

![mceclip0 (30).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow6qEAA.jpg)

> **Note:** The Cost Price used is the Cost of Goods Sold (Ex Tax) value.

|  |  |
| --- | --- |
| Cost Price Plus % Value | Uses the Cost Price of the product plus the entered % value to calculate the lowest possible price of the product. e.g. a product with a Cost Price of $20 and a 25% value discount has the lowest possible price of $25. |
| Cost Price Plus $ Value | Uses the Cost Price of the product plus the entered $ value to calculate the lowest possible price of the product. e.g. a product with a Cost price of $20 and a $25 value discount has the lowest possible price of $45. |
| Sell Price Minus % Value | Uses the Sell Price of the product minus the entered % value to calculate the lowest possible price of the product. e.g. a product with a Sell Price of $20 and a 25% value discount has the lowest possible price of $15 |
| Sell Price Minus $ Value | Uses the Sell Price of the product plus the entered $ value to calculate the lowest possible price of the product. e.g. a product with a Sell Price of $100 and a $25 value discount has the lowest possible price of $75. |

Be careful not to enter a Minus % or $ calculation that will allow the product to be discounted to $0.

## []()Creating Rules

### Product Max Discount

To create a Max Discount Rule:

1. Navigate to **Settings > Max Discount**
2. Enter a **Group Name**
3. Enter the **Value** of the discount
4. Select the **Group Rule**
5. Click **Create**

![mceclip1 (13).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powEAEAY.jpg)

### User Max Discount

To create a User Discount Rule:

1. Click the **User Discount Rules** tab
  ![mceclip1 (14).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powEKEAY.jpg)
2. A list of **Security Profiles **not yet assigned to a rule will be displayed in the table at the top
  Security Profiles can only be assigned to one Max Discount Rule
3. Click to highlight the **Security Profile** you wish to update (hold Ctrl to select multiple)
4. Click the right arrow to move the profile to the right
5. Select the **Max Discount Rule **from the dropdown
  ![mceclip2 (13).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powEPEAY.jpg)
6. Click **Create**
7. The Security Profile will be added to the table at the bottom
8. Click the **Pencil **icon to edit the Discount Rule assigned to an existing Security Profile
9. Click **Delete **to delete the User Discount Rule
  This will only delete the User Discount Rule associated with a Max Discount Rule, not the Max Discount Rule itself

## []()Enabling POS Override

The ability to override the Max Discount Rule in POS is configured via the POS Security Features.

1. Navigate to **Staff > POS Security Features**
2. Select the Security Profile from the **Profile** drop-down
  **Related: **View more information about Profile Security
3. Tick the following options:
	- Allow Discount Past Maximum Discount
	- Allow Discount Past User Discount Rule
  ![mceclip3 (13).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powEUEAY.jpg)
4. Click **Save**

View the POS Security article for more information on configuring POS Security Features.

## []()Applying Max Discount Rules to Products

Max Discount Rules are product-specific and can be applied to products either individually or in bulk.

- [Individually](https://galaxy.maropost.com/kb/articles/577-creating-max-discount-rules#individual)
- [Multiple Products (Bulk)](https://galaxy.maropost.com/kb/articles/577-creating-max-discount-rules#bulk)

1. Edit a product
2. Locate the **Pricing **section on the Main tab
3. Locate the **Max Discount **field
  ![mceclip0 (31).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powEZEAY.jpg)
4. Select the **Maximum Discount Rule** from the drop-down
5. Click **Save Changes**

1. Navigate to **Inventory > Product Search & Management**
  Refer to the Inventory - Product Search & Management article for detailed step-by-step instructions
2. Use the** Filters** to search for your products
3. Click **Search**
4. Use the **Apply Max Discount **section at the top
  ![mceclip2 (14).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powEeEAI.jpg)
5. Use the **Choose **box to select a Max Discount Rule
6. Select an **Apply To **option to select which products will be updated
7. Click **Apply**

To apply more rules to other products, repeat the steps above.

## Frequently Asked Questions

[How do Max Discounts work in POS?](https://galaxy.maropost.com/kb/articles/577-creating-max-discount-rules#max-pos)

The Max Discounts alert will only be displayed when a discount is entered beyond the maximum allowed discount for that User Profile.

|  |  |
| --- | --- |
| ![mceclip4 (7).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow8NEAQ.jpg) | **With Override Permissions Enabled:** If you have the ability to override the Max Discount Rule you will be prompted to confirm you want to exceed the discount. |
| ![mceclip5 (2).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powEjEAI.jpg) | **Without Override Permissions enabled:** If you don't have access to override the Maximum Discount Rule, you will be prompted to enter user credentials with access to override the discount. Otherwise, press Cancel (the discount will not be applied). |