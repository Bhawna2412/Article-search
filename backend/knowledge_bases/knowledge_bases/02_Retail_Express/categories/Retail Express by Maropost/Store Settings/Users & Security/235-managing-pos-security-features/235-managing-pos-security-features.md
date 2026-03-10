---
title: "Managing POS Security Features"
articleID: 235
category: "Store Settings > Users & Security"
knowledgeBase: "Retail Express"
---

# Managing POS Security Features

You can control which POS functions different security profiles can access by configuring POS security features, restricting capabilities like refunds, price changes, cost visibility, and voucher creation based on staff roles and responsibilities. Properly configured POS security helps protect your retail operations from unauthorized discounting, inappropriate refunds, and access to sensitive cost information, ensuring appropriate staff oversight for high-risk transaction functions.

Setting up role-based POS security profiles helps retail operators balance operational efficiency with appropriate controls, allowing managers enhanced permissions while restricting junior staff to basic transaction processing, with security overrides available when authorized users need to grant temporary access.

The POS Security area controls which POS functions are enabled or disabled for different Security Profiles e.g refunds, editing of sales and viewing cost information.

To explain the different sections of user security:

|  |  |
| --- | --- |
| Profile Security | Used to create Security Profiles, and enable/disable access to Back Office functionality for each Profile. |
| POS Security | Used to enable/disable POS features for each Security Profile |
| Users | Individual logins for staff members. Each user is assigned to a Security Profile, and inherit access to different features of the system as defined in the Profile Security and POS Security areas. |

> **Note:** The ability to access POS Security Features is determined by the User Security Profile. If you cannot access this feature please contact your company administrative staff.

The ability to create vouchers can be turned on/off per Security Profile, along with the specific *type *of Voucher e.g. Credit Note, Gift Voucher etc. For example, your system could be configured so that Store Managers can issue Credit Notes, while all staff are able to create Gift Vouchers. See the Voucher section below for more information.

## Enabling/Disabling features for Profiles

To manage access to POS features:

1. Navigate to **Staff > POS Security Features**
2. Select a **Profile** from the drop-down
3. Tick the **Enabled **tick box to enable access to the required features
4. Untick the **Enabled **tick box to remove access
5. Click **Save**
6. Ensure all users **log out of POS **for the changes to take effect (note that closing the browser will not be enough for the changes to take place - see the article on Logging Out for more information)

> **Note:** If you need to create a new Profile navigate to **Staff > Profile Security.** For detailed information, see the Profile Security article.

![mceclip0 - 2023-07-08T184514.135.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTmyEAE.jpg)

> **Note:** Should a User try to access a function they are not enabled for a security prompt will appear at POS. An authorised user can enter their User ID and Password to perform an override and grant temporary access to the function.

## List of Features

|  |  |
| --- | --- |
| **Feature** | **Explanation** |
| Allow Change of Fixed Price Group | Allow the user to change a customer Fixed Price Group from within POS |
| Allow Change Of Price Group | Allow the user to change a customer Price Group from within POS |
| Allow Creation Of Blank Refunds | Allow the User to create Blank Refunds at POS |
| Allow Creation Of Refunds | Allow the User to create Refunds at POS |
| Allow Creation Of Zero Quantity Refunds | Allow the User to refund a sale with zero quantity of stock |
| Allow Discount Past Maximum Discount | Allow discounting of a sell price in a sale past the Maximum Discount Rule for that product |
| Allow Duplicate Customer E-Mail Address | Allow the User to create customers with Duplicate Email Addresses |
| Allow Editing And Changing A Processed Sale | Allow the ability to edit existing products, add/reverse payments and other income-related functions in Processed sales |
| Allow Editing Invoice Email Message | Allow the user to edit the default message when emailing an invoice |
| Allow Editing Of Payment Dates | Allow the User to Edit the Payment Date against an order |
| Allow Editing Order Comment History | Allow the user to edit/delete the comment history that has been created against an order |
| Allow Editing Voucher Expiry Date | This is a legacy setting no longer in use. Manage Voucher settings and expiry here |
| Allow Forward Date Invoice | Allow the user to change the date of the invoice to a future date |
| Allow Insufficient Credit | Allow the User to finalise a credit order for a customer with insufficient credit available |
| Allow Items On Blank Refunds To Exceed Current Sale Price | Allow the user to add items to a Blank Refund in POS at a value greater than the Current Sale Price for that item. |
| Allow Money In / Out | Allow the user to perform Money In/Out |
| Allow Negative Dispatch | This is a legacy setting no longer in use. You cannot apply a negative dispatch. |
| Allow Negative Payments | This is a legacy setting no longer in use. You cannot enter a negative payment amount, please see Processing a Refund or Return. |
| Allow Override of Invalid Coupon | Allow the user to add an invalid Coupon to an Order (the Coupon Code must still be valid) e.g. expired code. |
| Allow Override Of Minimum Deposit | Allow the User to finalise a sale when the Minimum Deposit has not been met. |
| Allow The User To Change The Register's Theme | Allow the user to change the register's POS Theme |
| Allow The User to View All Transactions in POS | If enabled, users can view all transactions in POS for any Outlet when using the Lookup, Search and Return functions. If unticked, the user will be restricted to viewing only transactions for Outlets as per the Outlet Access list in their User Settings. |
| Allow The User To View Any Offline Server Details | Allow the user to view any Offline Server details |
| Allow The User To View The Dashboard | Allow the user to view the POS Dashboard |
| Allow Transfers | Allow the user to access Transfers at POS |
| Allow Transfers - Void | Allow the user to Void Transfers in POS |
| Cancel Order | Cancel or VOID a Sale. This does not delete the sale or any payments made, which will still apply to income, however does exclude the sale from any stock movement calculations. |
| Change User/Date | Change the Staff Member, Outlet, Register, Sales Date/Time associated with the sale. This will only change the date of the sale, and will not affect the date/time of payments or of allocation/fulfilment of products. |
| Edit Order Status | Manually edit the order status (e.g., Incomplete, Awaiting Payment) |
| Marketing & Loyalty | Allow the user to access the Marketing & Loyalty page to manage Loyalty Redemption and Survey Segments questions |
| No Tax On The Order | Allows access to the "No Tax" checkbox to Remove Tax from the order. |
| Show Comments | View and apply Public and Private Comments to the order. Public comments appear on the invoice and receipt. Private comments are only viewable by staff. |
| Show Costs | Access display of associated Cost Price and GP information for all products on an order. |

## Enabling/disabling different voucher types for each Profile

All users will have access to redeem all voucher types, provided vouchers are enabled as a Payment Type. However, you can restrict the ability to create individual voucher types within POS to specific Profiles only.

1. Navigate to **Staff > POS Security Features**
2. Select the **Security Profile** from the drop-down
3. Scroll to the bottom of the page to locate the **Voucher Type **section
4. Tick the **Enabled **option to enable access to a particular voucher
5. Click **Save**
6. Ensure all users **log out of POS **for the changes to take effect (note that closing the browser will not be enough for the changes to take place - see the article on Logging Out for more information

> **Note:** Loyalty is a legacy voucher type no longer in use.

![mceclip0 - 2023-07-08T184524.197.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTnSEAU.jpg)