---
title: "Cash Up (End of Day)"
articleID: 486
category: "POS > Advanced POS"
knowledgeBase: "Retail Express"
---

# Cash Up (End of Day)

You can ensure accurate financial reconciliation through end-of-day cash-up procedures in **Retail Express** POS, which enable systematic counting and verification of cash drawer contents against recorded transactions. This critical closing procedure helps retail operators maintain financial accuracy and identify discrepancies, with proper cash-up processes typically reducing cash handling errors and supporting reliable financial management across Australian retail operations.

Cash-up functionality in **Retail Express** enables retail operators to reconcile physical cash with system records, track payment method totals, and identify variances requiring investigation, helping ensure accurate financial records and accountability. This reconciliation process helps ensure your retail operations maintain accurate cash tracking while supporting audit requirements and financial control throughout daily operations.

The Cash Up process is the action of reconciling the cash drawer from the last time the Cash Up was completed, accounting for all incoming payments (including those other than cash e.g. Credit Card). Typically a Cash Up would be completed at the end of the day but can be run multiple times throughout the day if required.

![pos_cashup_icon.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poULwEAM.jpg)
There are many benefits to running a frequent Cash Up and being able to account for the cash in the register, including:

- If a customer complains they have received the wrong change
- If the store is robbed you have an accurate record of how much cash was in the till
- To detect any theft by store employees
- Limiting the amount of cash in the till on the floor (i.e. reconciling and safely storing the cash elsewhere)

## Before you Begin

It can be helpful to just spend a couple of minutes preparing some reports and doing some final system checks before proceeding any further, so that if any variances arise you're able to troubleshoot them easily.

- Print a copy of a **Payment Settlement/Summary Report for any non-cash Payment Methods** - credit cards, Finance etc. For example, the Tyro Terminal can print a Reconciliation Report. This will be used when reconciling payments during the Cash Up process.
- Print the Retail Express **Income Report **(listing all transactions by tender type with timestamps) - the report is available at **Reports > Finance Reports > Income Report**
- Check there are **no sales on hold**. You should Void or Finalise any sales for the register prior to beginning a Cash Up.

## The Cash Up process

There are 5 steps involved in the Cash Up process - click on each heading below to view more details.

**Did you know? **: You can put a Cash Up on Hold at any point - see the [Cash up - On Hold](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#cashup-hold) section in this article for more information.

### [Step 1 - Count all Cash in the Register](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#step1)

The first step of the Cash Up process is to count all the cash in the register. You will be prompted to enter the total count of each denomination (Retail Express will calculate the total value for you).

> **Note:** Ensure you *include* any Float value in the cash - you will be able to enter the float value in a future step so that it's deducted from the overall balance.

To begin the Cash Up process and count the cash:

1. Log into **Retail Express**
2. Click **POS**
3. Enter a **User ID **and **Password**
4. Select the **Outlet **and **Register**

> **Note:** You will need to select the Register for which you will be performing the Cash Up process

5. Click **Login**
6. From the POS landing page click the **Cash Up **menu item
  ![pos_cashup_icononly.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUMLEA2.jpg)
7. Enter a valid **Staff ID**
8. Click **Log In**
9. Begin to count the **individual cash denominations**, entering in the total count in the field next to it (not the value) e.g. if there were 20 x 5c coins enter the value of "20" - the system will calculate the total to be $1 automatically)
  ![pos_cashup_cashvaluecoins.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUMQEA2.jpg)
10. Repeat for all the remaining coin and note values
11. The final value will be displayed in the **Total Cash** field
12. Click **Next **to proceed onto the next step

### [Step 2 - Cash Summary](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#step2)

The Cash Summary screen performs a reconciliation of the expected cash amount by comparing:

- The recorded value of all POS transactions made since the last Cash Up was completed
- The value of cash counted in Step 1

The difference is displayed in the **Cash Variance **section of the screen.

1. **Review the Summary** at the top of the screen
2. A **list of transactions** created since the last Cash Up will be displayed at the bottom of the screen

> **Note:** If a sales transaction occurred but there was no cash recorded against the sale the entire transaction will not be displayed (as the Cash Up process is primarily concerned with transactions where payments were made)

3. To view an individual transaction click **Preview**
4. If an error has been made in a transaction click **Edit Sale** from the Preview window to edit the transaction as required (the Cash Up will be put on Hold - refer to the [Cash Up on Hold](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#cashup-hold) section below for details on how to resume a Cash Up)
5. If no changes are required click **Next **to proceed to step 3

![pos_cashup_cashsummary.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUMuEAM.jpg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Cash Payments Received | Cash payments received via POS transactions |
| Cash Removed from Register | The value of cash removed from the register via the Money In/Out feature (for Petty Cash etc) |
| Cash Added To Register | Any cash added to the register via the Money In/Out feature |
| Cash Expected | The amount of cash expected to be in the Register |
| Actual Cash Counted | The value of cash counted in Step 1 |
| Opening Float | The value of the Float reconciled when the last Cash Up was completed. The Opening Float value will carry forward from each completed Cash Up, and populate automatically for the next Cash Up. The first time you complete the Cash Up process click into the field and enter the Float amount. |
| Cash Variance | The difference between the Cash Expected and the Actual Cash Counted For assistance in troubleshooting, any variances refer to the [Frequently Asked Questions](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#Faqs) below. |

### [Step 3 - Reconcile other Payment Methods](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#step3)

You will now be prompted to reconcile your other payments to confirm the amounts received through those methods matches the payments recorded in POS.

> **Note:** Depending on your Payment Method you will be able to print a **Summary/Settlement Report** of the payments received e.g. EFTPOS Terminals will typically print a terminal summary, or your account online will display a list of transactions.

To reconcile your payments:

1. Enter a value into the **Amount Reconciled **field
2. The **Variance **field will be updated (a small red arrow will be displayed while processing the calculation)
3. To view a list of sales against each Payment Method click** **the link in the **Detail** column (if there are no sales for that method a hyphen (-) will appear)  - To view detailed information on a transaction click **Preview**
  - To edit the transaction click **Edit Sale **(the Cash Up will be put [on Hold](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#cashup-hold))
4. Any comments entered in the previous Cash Up will be displayed in the **Previous Cash Up Comments **field
5. Click **Next** to proceed to the next step

![pos_cashup_reconcileotherpaymentmethods.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUMzEAM.jpg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Payment Method | The name of the Payment Method within Retail Express. Note that multiple payment types may be combined into one Payment Method e.g. Online may have been used to group all payments received through an integrated web store so they're kept separate from in-store transactions listed against a more detailed Payment Method. |
| Amount Expected | The value of payments of the POS transactions made since the last Cash Up was completed |
| Amount Reconciled | Used to enter the amount recorded by the Payment Method summary/settlement reports. |
| Variance | The difference between the Amount Reconciled and the Amount Expected |
| Detail | Provides a summary of the number of transactions recorded against each Payment Method (clicking the link will display a list of transactions in more detail) |

### [Step 4 - Summary and Submit](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#step4)

The Summary window displays the information to be submitted, and the ability to submit comments for any issues that have arisen during the current Cash Up.

To submit the Cash Up:

1. Enter any comments for the Cash Up in the **Comments **field e.g. incorrect change provided to the customer for sale 16-00000035
2. Click **Back **to return to a previous step and make any corrections as required
3. Click **Submit **to finalise the Cash Up and move onto the next step (printing/emailing a summary)
4. Click **OK** to confirm

> **Note:** Once you Submit a Cash Up it **cannot be edited** - ensure all changes are made prior to Submitting the Cash Up. Refer to the [Cash Up on Hold](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#cashup-hold) process if you need to pause the Cash Up process at any time.

![pos_cashup_summary.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUN4EAM.jpg)
[Step 5 - Print/Email the Cash Up Summary](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#step5)

Once the Cash Up has been submitted you can choose to either Print or Email a summary of the report.

1. To print, click the **Print to Document Printer**. A preview will be displayed and you will be able to select the Printer as required
2. To email the report:  1. Click the **Send to Email **button
  2. Enter an **Email Address**
  3. Click **Send**
3. Click **Done **to return to the main window of POS

> **Note:** Retail Express has an End of Day report where you can review any completed Cash Ups performed at POS. Refer to the Reports - End of Day Report article for more information.

![pos_cashup_submitted.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUN9EAM.jpg)

## Placing a Cash Up on Hold

The **Hold **feature allows you to pause a Cash Up and return back to the process at a later point in time.

[Put a Cash Up on Hold](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#cashup-hold-hold)

1. Click the red **Hold **button at the bottom of the Cash Up window
2. The Cash Up will be paused, and you will be returned to the main window of POS
3. An **exclamation icon** will appear over the Cash Up menu button to indicate there is a Cash Up on hold

![pos_cashup_holdicon.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUNEEA2.jpg)
[Resuming a Cash Up](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#cashup-hold-resume)

1. Click the **Cash Up** icon
2. Enter a valid **User ID**
3. The Cash Up will be resumed
4. Click **Refresh**
5. Click **OK**
6. Any new transactions with payments will be loaded into the new Cash Up

![pos_cashup_refresh.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUNAEA2.jpg)

## Frequently Asked Questions

[Investigating Cash Variances](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#cash-variance)

If you encounter a variance in your Cash Up there are a few steps you can take to troubleshoot the issue.

- Use the Cash Up process to review the **list of sales transactions** displayed - only transactions with payments recorded will be shown. If there's a transaction missing it may be that the payment has not been entered correctly
- Check the **End of Day Report** to see when the last Cash Up was created. The Cash Up process displays transactions from the last time the Cash Up was performed (e.g. if a Cash Up was completed in the evening, then a transaction entered that night will be included in the following day's Cash Up)
- Print the **Income Report **to review a list of transactions (this can be used in conjunction with the End of Day Report to compare dates and times)
- If you have put the [**Cash Up on Hold**](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#cashup-hold), any new transactions will not be included unless you click the Refresh button
- Check if there are any **Sales on hold** and if there are any payments against those sales
- **Contact Support **- if the Cash Up doesn't balance and you're unable to find the cause put the Cash Up on hold and contact our support desk for assistance.

[What email address is the Email Summary sent from?](https://galaxy.maropost.com/kb/articles/486-cash-up-end-of-day#email-address)

The email of the **Cash Up ****Summary **is sent from **pos@retailexpress.com.au**. This email contains:

- The Outlet Name
- The Register
- The User that submitted the summary
- The time the Cash Up was submitted
- A PDF version of the report

> **Note:** PDF Viewer software will be required to view the report e.g. [Adobe Acrobat Reader.](https://get.adobe.com/reader/)

[If you have tried sending the email but it hasn't been received you may need to add ](https://get.adobe.com/reader/)[pos@retailexpress.com.au](mailto:pos@retailexpress.com.au)to your Safe Senders list so it doesn't go to the Junk Mail folder. For any queries, contact your Systems Administrator.