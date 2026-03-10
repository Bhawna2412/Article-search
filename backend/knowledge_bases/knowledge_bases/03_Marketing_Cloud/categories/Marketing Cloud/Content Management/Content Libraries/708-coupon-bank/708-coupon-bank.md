---
title: "Coupon Bank"
articleID: 708
category: "Content Management > Content Libraries"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-26
---

# Coupon Bank

**Coupon Banks** enable you to deliver personalized promotional campaigns by automatically inserting unique coupon codes into each email, helping optimize campaign effectiveness through individualized offers and comprehensive tracking capabilities. This feature streamlines your workflow by managing coupon distribution at scale while providing valuable insights into customer behavior and redemption patterns.

When properly configured, coupon banks can enhance your email marketing ROI by enabling sophisticated remarketing strategies based on coupon redemption data. This automation helps ensure each subscriber receives their own trackable code, improving campaign attribution and enabling targeted follow-up communications to both redeemers and non-redeemers.

The Coupon Bank stores coupon codes that will be automatically inserted into email campaigns at runtime when the emails for the campaign are being created and sent.

The coupon codes themselves are typically generated and exported from your commerce platform. You will then upload them directly into Maropost from your desktop or via the Start Import action item in [**Data Journeys**](https://galaxy.maropost.com/s/article/Introduction-to-Data-Journeys).

Once you’ve created the Coupon Bank, you will be able to have Marketing Cloud dynamically insert each unique coupon code into the body of an email by using the [**Coupon Code**](https://galaxy.maropost.com/s/article/Content-Coupon-Tags) tag. When you send your next promotional email, each of your contacts receives their own unique coupon code. It’s a great way to track customer loyalty. At the time of purchase, data is passed back into Marketing Cloud with product orders so that you can remarket to your contacts based on who has redeemed your coupons and who hasn’t.

## Managing Coupon Banks

The Coupon Banks index page is where you can create, view, and manage coupon banks (also known as coupon codes).

In Navigation, go to Content, and then select Coupon Banks.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CouponBanksIndexPage.05T5g00000OGhL0EAL.png)

Marketing Cloud gives the following actions to manage the coupon banks:

- 
- 
- 
- 
- 

You can click the Coupon Bank name to view a dashboard showing the coupon details and its performance metrics.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CouponBankDashboard.05T5g00000VGrIyEAL.png)

## Creating a New Coupon Bank

The following are the steps to create a coupon bank:

1. In Navigation, go to CONTENT, and then select Coupon Banks.

2. On the Coupon Banks index page, click **NEW COUPON**.

3. In the New Coupon dialog box, provide details for the new coupon.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewCoupon.05T5g00000OGhBUEA1.png)
The dialog box consists of the following fields:

- **Name**: The name of the coupon bank.
- **Description** *(optional)*: A description of the coupon bank.
- **Coupon Tag**:** **The value you enter here is the coupon tag to be used within the email content.
- **Alert Threshold**: Triggers an alert email when the number of unassigned codes in the coupon bank falls below this threshold.
- **Alert Recipients**: The email addresses of those who will receive the Alert Threshold alert email.
- **Default Coupon Code**: A static coupon code that will be inserted into the body of the email if the Coupon Bank runs out in the middle of a campaign send.

4. Click **Save**.

## Importing Coupon Codes

Marketing Cloud supports two methods for importing coupon codes: File Import and FTP Import.

The following are the steps to import the coupon codes:

1. On the Coupon Banks index page, go to the coupon bank into which you want to import the coupon codes. To learn how to create a coupon bank, scroll up to **Creating a New Coupon Bank**.

2. From the Actions drop-down list, select Import Coupon Code.

3. In the Import Coupon Codes dialog box, select the import method:

- **File Import**: Enables you to import coupon codes from a file on your computer.
- **FTP Import**: Enables you to use our FTP servers to import coupon codes.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportCouponCodes.05T5g00000OGhFgEAL.png)
4. For **File Import**, do the following:

a. Select the file on your computer. The supported file formats are .txt, .csv, and .zip. The ZIP file must contain only one file, which can only be of the .txt or .csv type. The file size limit is 128 MB.

b. Select the delimiter used in the file.

c. Enter the column name or column number of the column containing encrypted email addresses.

d. Select whether to append these codes to the existing unassigned codes or remove the unassigned codes prior to uploading a new set of coupon codes.

5. For **FTP Import**, do the following:

a. Select the file that you’ve uploaded to the FTP folder. There is no file size limit. 

> **Note:** **Note:** Before you can use Maropost's FTP server, you must set up your SFTP Access. See [**SFTP Access**](https://galaxy.maropost.com/s/article/SFTP-Access) for more information.

b. Select the delimiter used in the file.

c. Enter the column name or column number of the column containing encrypted email addresses.

d. Select whether to append these codes to the existing unassigned codes or remove the unassigned codes prior to uploading a new set of coupon codes.

6. Click **Import**. 

You can track the progress of the import on the notification panel (bell icon on the top-right corner of the application). 

> **Note:** **Note:** You can also set a [**Data Journey**](https://galaxy.maropost.com/s/article/Introduction-to-Data-Journeys) to import coupon codes into a Coupon Bank.

## Exporting Coupon Codes

Steps to export the coupon codes:

1. On the Coupon Banks index page, go to the Coupon Bank from which you want to export the coupon codes.

2. From the **Actions** drop-down list, select **Export Coupon Code**.

3. On the Export Coupon Codes dialog box, select the "**Convert email to secure email (MD5 Hash)**" check box if you want to encrypt the coupon codes before exporting them.

4. Choose whether you want to export the coupon codes that have been "**Assigned**" or that have been "**Redeemed**."

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ExportCouponCodes.05T5g00000OGhNfEAL.png)
5. Click **Export**.

## Related Articles

**Content Design:**

- [Content Coupon Tags](https://galaxy.maropost.com/kb/articles/894-content-coupon-tags) - Insert coupon codes from your banks into email content
- [Content Dynamic Tags](https://galaxy.maropost.com/kb/articles/897-content-dynamic-tags) - Personalize coupon campaigns with dynamic elements
- [Wysiwyg Content Builder](https://galaxy.maropost.com/kb/articles/749-wysiwyg-content-builder) - Design compelling promotional emails using coupon codes
- [Liquid Script Examples](https://galaxy.maropost.com/kb/articles/46-liquid-script-examples) - Advanced scripting for conditional coupon display

**Campaign Management:**

- [Test Campaigns Subject Line](https://galaxy.maropost.com/kb/articles/1427-test-campaigns-subject-line) - Optimize promotional campaigns featuring your coupon codes