---
title: "View, Approve, Reply or Export Product Reviews"
articleID: 1449
category: "Use Neto > Products > Maintenance & Tweaks - Products"
knowledgeBase: "Neto By Maropost"
---

# View, Approve, Reply or Export Product Reviews

## View, Reply or Approve a Review

When a customer leaves a review on a product you have the ability to approve, reply or delete the review:

1. In your Neto control panel, navigate to **Products** > **Reviews**
2. Select the review to open it.
3. From the **Status** drop down menu, choose to view, hide, set as new or follow-up the review.
4. You can also edit the content of the comment or to reply to the review in this page.

Review and your replies will then display in the tabulated section of your product page much like the example below.

## Product Review Settings

If product reviews are not displaying, you may need to turn on a setting:

1. In your Neto control panel, Navigate to **Settings & Tools** > **All Settings & Tools**.
2. Click on **Advanced Configuration**.
3. Search for `SHOW_PRODUCT_REVIEWS` in the name field, and change it to **Yes** to display your reviews.
4. Navigate to **Webstore** > **Webstore Settings**.
5. In the customer reviews sections you can auto-approve reviews, and allow anonymous reviews.

## Export Product Reviews

Product reviews can be exported by creating a product export template.

**Please Note**: Product reviews cannot be imported.

1. In your Neto control panel, navigate to **Settings & tools** > **Export data**.
2. Click the **Perform complex export** button, and choose **Create new custom export template**.
3. Fill the fields in as per the table below:
4. Click the **Save & Continue** button.
5. Change the **Send File To** drop down menu to **Local Server**. The File Location (HTTPS URL) field displays where the file can be downloaded once it is generated.
6. `SKU,Inventory ID,username,name,Date Formatted as yyyy-mm-dd hh:mm:ss,Rating,Review Title,Review`
  Copy the below details and paste them into the relevant sections of the file builder:

  **FILE HEADER**

  **FILE BODY - body**

> **Important:** There is no carriage return/extra line required after this code.

7. Click the **Save Changes** button.
8. Click the **Generate Data File** button at the top of the page.

Wait 5 - 10 minutes for the file to be created, and then download it from the link in step 5.

## Reviews Actions

Reviews can have a number of actions applied to them to help you manage them:

| Action | Status change | Description |
| --- | --- | --- |
| Approve | Sets the status as ‘Approved’ | Approves the review to display on the webstore |
| Set New | Sets the status as ‘New’ | Indicates that the review is new in the control panel view |
| Hide | Sets the status as ‘Hidden’ | Hides the review from appearing on the webstore |
| Set Follow Up | Sets the status as ‘Followup’ | If it’s a negative review, use this to flag the review and set a follow-up to email the reviewer |
| Bulk Change Product | NA | Allows you to change the product that the review/s are assigned to (such as, if the SKU changed or incorrect product) |
| Bulk Email | NA | Send a mass email to single/multiple reviewers |
| Delete | NA | Deletes the review from the system |