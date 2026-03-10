---
title: "Global Settings"
articleID: 254
category: "Store Settings > General Settings"
knowledgeBase: "Retail Express"
---

# Global Settings

You can configure system-wide operational parameters through global settings that control default behaviors, business rules, and functional preferences across all **Retail Express** retail locations. Properly configured global settings help ensure consistent operational standards throughout your retail network while establishing appropriate defaults for inventory management, customer data, pricing rules, and transaction processing.

Understanding global settings helps retail operators establish consistent business policies across all locations while maintaining the flexibility to override settings at the outlet level when location-specific requirements exist.

The Global Settings area controls the general settings within Retail Express, including Address information, Purchase Order colours and standard Label Printer Settings.

Global Settings are the *default *settings. If you need varying details for each store this can be done by editing the Outlet details - refer to the System Settings - Outlets article for more information).

To access Global Settings navigate to **Settings > Global Settings**.

## []()General

The **General Information** section is a collection of business information, addresses and contact details for your business entity.

![mceclip0 (63).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNxwEAE.jpg)
Most fields are self-explanatory, but some fields of note:

|  |  |
| --- | --- |
| **Field** | **Information** |
| Admin Title | The title for your Retail Express Back Office, used on the tab of the browser: ![mceclip2 (28).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO1nEAE.jpg)  > **Note:** This field can only contain letters and numbers, and should not have symbols e.g. "&". In these cases the word "and" should be used instead. |
| Web Title | Legacy Retail Express inbuilt web stores feature (separate from eCommerce integrations) and not required to be populated. |
| Mobile Dashboard Enabled* | Indicates whether the site has been enabled for the Retail Express Mobile Dashboard feature  			*Read-only field |

## []()Account Customers

Account Customers can make purchases on account, depending on their remaining credit limit and other account settings (configured individually per account). The Account Customers section within the Global Settings is used to configure the information displayed on the account statements (Related: Setting up Account Customers).

![mceclip1 (45).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO22EAE.jpg)

|  |  |
| --- | --- |
| **Field** | **Information** |
| Account Payment Terms | Generic text field used to enter any additional content to be displayed on the statement (Credit Limit and Billing Cycle are configured individually for each customer account). Limited to 2 lines and 100 characters. |
| Home Outlet Specific Statements | The Home Outlet (selected at the time of creating a customer through POS) is used to associate a customer to a specific Outlet for marketing and reporting purposes e.g. the outlet closest to the customer in proximity, or their preferred store. Ticking this option enables the customer account statements to be populated with details relating to the customer Home Outlet, rather than Global Details e.g. Company, contact details and bank details. |
| Hide Aging Buckets on Account Statements | Hides the table on the Customer Account Statements showing the age of outstanding transactions e.g. Current, 30 Days etc. ![mceclip2 (29).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO2HEAU.jpg) |
| Hide Default Terms on Account Statements | Hides the default Payment Terms for the customer (the Account Payment Terms configured in the Global Settings, as configured above, will still be displayed) ![mceclip3 (21).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO2MEAU.jpg) |

## []()Newsletters

This section relates to emails sent via the Retail Express Newsletters feature.

|  |  |
| --- | --- |
| **Field** | **Information** |
| From Display Name | The Display Name for the account the email is sent from. If this is blank it will default to the Company Name in the General section. |
| From Email Address | The email address used to send the newsletter. If this is blank it will default to the Customer Service Email field in the General section. |
| Reply To Email Address | The address used for recipients to respond to newsletters. Leave blank if this is the same as the "From" address. |

![mceclip8 (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO2WEAU.jpg)

## []()Outlet

|  |  |
| --- | --- |
| **Field** | **Information** |
| Auto Generate PO | Enables the ability to automatically generate a Purchase Order automatically when a product is sold. Purchase Orders can be generated:  - Any time the product is sold - When the product is sold and there are 0 or less available in the outlet the stock is coming from  Each product can be configured individually on the Edit Product window or en masse using Product Search & Management. |
| Auto Send Outlet Picking Slip | Used in combination with the previous setting. Ticking this option enables Retail Express send an email copy of the Picking Slip to the outlet the Purchase Order was for. |

![mceclip0 (64).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNKkEAM.jpg)