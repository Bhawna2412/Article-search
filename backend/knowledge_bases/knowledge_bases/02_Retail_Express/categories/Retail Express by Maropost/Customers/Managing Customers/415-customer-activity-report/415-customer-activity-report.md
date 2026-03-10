---
title: "Customer Activity Report"
articleID: 415
category: "Customers > Managing Customers"
knowledgeBase: "Retail Express"
---

# Customer Activity Report

You can generate customer activity reports to analyze purchasing patterns, visit frequency, and spending levels, helping identify valuable customers and engagement opportunities. This improves your retail operations by providing customer behavior insights, with properly configured activity reporting typically enabling better customer retention strategies and targeted marketing approaches.

Understanding customer activity reporting involves recognizing date range selection, activity metrics, and segmentation options to help retail operators focus on the right customer analytics workflows, ensuring your retail strategy consistently drives better customer understanding and retention program effectiveness outcomes.

The Customer Activity Report provides valuable information regarding your customers purchasing habits. Using the information, you can:

- Apply incentives to your customers in bulk, such as Bonus Loyalty Points, Gift Vouchers, Discount Levels or Price Groups
- Award bonus Loyalty points, reset points, or even subtract points
- Use the Newsletter / EDM feature to communicate with your customers

Things to keep in mind:

- Vouchers created using the Customer Activity Report will be set to "Loyalty" (not Gift Voucher, Credit Note etc)
- Sales created for new vouchers will be allocated to the first Outlet listed (regardless of staff Access or what filters were selected)

## []()Using the Customer Activity Report

> **Note:** Customers that have been created but have not yet had any transactions will not display - this report is based on customers with transactions only.

To use the Customer Activity Report:

1. Navigate to **Customers > Customer Activity Report**
2. Apply the **Filters** as required (see below for detailed information)
3. Click **Search**
4. Click the **Results** or **Actions** tab to continue (these tabs are covered in more detail below)

![mceclip0 (39).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powJeEAI.jpg)

## []()Filters

Most of the filtering fields are self explanatory, however see the detailed information below for the more advanced fields.

> **Note:** There are more filters available by clicking the Refine Search and Refine By Attributes tabs.

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Order Number | Entering an order number will ignore all other search options |
| Product PLU Code | Valid PLUs are: SupplierSKU, ManufacturerSKU and Product ID. Only a single Product PLU can be entered |
| Customer Sales were | More than $ - use to target customers with higher purchases 			Less than $ - use to target customers with lesser purchases |
| Customer Available Points | Use to target customers with a specific points threshold  > **Note:** Entering a filter here will ignore other fields including Customer Number, Product PLU, Sales to/From, Had Zero Sales From/To and Sales Type fields. |
| Receive Email, Post and SMS | Related to tick-boxes available via the Customer tab at POS to indicate their communication preferences |
| Show Limited Columns | Ticked by default, this limits the columns generated to basic customer information. Un-ticking this option allows ALL columns to be displayed on-screen and for export, including full customer details and Customer Survey results. |
| Survey Segment Group / Options | You must first select a Survey Segment Group, to enable view and selection of Survey Segment Options. |

## []()Results tab

![mceclip1 (20).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powJjEAI.jpg)
View this report in-page, or export to Excel.

> **Note:** This image is an example of detail displayed when Show Limited Columns (per Special Filters above) is ticked. Should you have this option un-ticked, ensure to scroll to the right to view more column detail.

> **Note:** click column headings to sort into ascending or descending order.

## []()Action tab

Use the Actions tab to perform bulk functions on your selected customers.

![mceclip2 (16).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powJoEAI.jpg)
Most of the Actions are self-explanatory, however see the detailed information below for the more advanced functions.

|  |  |
| --- | --- |
| **Action** | **Description** |
| Change All These Customers' Discount Levels to | Displays a list of your Price Groups. Adding the customers to this group will entitle them to Discounts as configured for the group. |
| Create a Gift Voucher for all these customers to a value of $ | Creates a new voucher for customers based on the value entered into the field. Once created, the list of vouchers can be printed should you wish to physically post or supply the vouchers. Alternatively, Export to Excel.  > **Note:** The creation of vouchers using this feature will create a processed sale within POS.  Vouchers will be created according to your current validity period as set in Voucher Settings.    > **Note:** Special Note for Account Customers: vouchers created in this way for Account Customers will need to be 'paid' for at POS. If payment is not made the voucher will appear on the Statement with a Balance Outstanding. It is recommended to use an alternate Payment Type at POS, for more information see Payment Types |
| Reset selected customer's points to | Will modify the customer's Loyalty Points so they match the value entered in the field. You will need to select an Adjustment Reason (as configured in the Loyalty Configuration) to be displayed in the customer's Loyalty History.   > **Note:** This reason will be the same for all customers, regardless of whether points have increased or decreased. |
| Award loyalty points to selected customers | Adds the entered value of points to the customer's current Loyalty points balance. e.g. If the customer has a balance of 50, and you award 50, their new balance will be 100 points. You will need to select an Adjustment Reason (as configured in the Loyalty Configuration) to be displayed in the customer's Loyalty History. |
| Subtract the following points from selected customers | Reduces the customer's current loyalty balance by the entered value e.g. If the customer has a balance of 50 and you subtract 50, the new balance will be 0 points. You will need to select an Adjustment Reason (as configured in the Loyalty Configuration) to be displayed in the customer's Loyalty History. |
| Add selected customers to newsletter campaign | Adds the customers to the selected Newsletter campaign. For more detailed information on creating of Newsletters, please refer to the Sending Newsletters article. |
| Enable or disable the accrual of loyalty points for the selected customers | Used to enable or disable the calculation of loyalty points on the selected customer accounts  > **Note:** This can also be bulk applied through the Customer Mass Download/Mass Upload process. |
| Enable or disable automatic price group selection based on loyalty points for the selected customers | The Loyalty Program allows you to add customers to Price Groups as they reach a certain points value, potentially increasing their discount levels. For example, automatically add customers to Bronze, Silver and Gold Loyalty Programs. Refer to the Loyalty Configuration article for more information. |

## []()Examples of how to use the Customer Activity Report

Whether you're creating marketing campaigns or rewarding your most loyal customers, the Customer Activity Report can display details onscreen for review, export customer lists to Excel or include your customers in emailed newsletter groups.

Below are common customer-related questions, and how the Customer Activity Report can find the results.

|  |  |
| --- | --- |
| **Question** | **Using the Customer Activity Report to find answers** |
| Which customers have purchased product XYZ? We have an accessory relating to this Product arriving next week that I'm sure they would be interested in knowing about. | Search for customers that have purchased a product using the Product PLU filter. From the Actions tab, push the list of customers into a Newsletter and schedule it to be sent. |
| Which customers have made purchases over $500 during the last six months? I want to create a VIP club to offer them special pricing. | Search for customers who have purchased over a certain value using the Customer Sales filter. From the Actions tab, add these customers to a Price Group (called VIP) so they can receive special discounts when they next purchase. Again, you could also email them the good news via Newsletter. |
| Which customers have not purchased from us in the last three months? I want to encourage them to come and visit us again by awarding them a gift voucher. | Search for customers within a date range using the Had Zero Sales filters. From the Actions tab, create Gift Vouchers, then use Newsletters to email and let them know they have a gift voucher waiting for them in-store. |
| At POS, it's our habit to ask our customers what their favourite brand is. How can we let them know we're hosting a sneak preview one evening next month? | Search for customers using the Survey Segment Option filters. Contact customers via Newsletter, or add a personal touch by giving them a call - their phone details are available on-screen via the Results tab. |
| How can I award a selection of my customer base a Voucher? | Search for your customer selection using the filters. From the Actions tab, create Gift Vouchers, then print vouchers if you wish to physically post or supply them, Alternatively, use Newsletters to email and let them know they have a gift voucher waiting for them in-store |
| I want to review all customers that have over a certain amount of points and award them a voucher to the Value of X. Then, I want to reset their point balance for the next period | Search for customers using the Customer Available Points filter. From the Actions tab, create Gift Vouchers for the required value. Then use the 'Subtract the following points from selected customers' feature to subtract the set amount of points equal to the value of the created vouchers or even reset back to 0. |