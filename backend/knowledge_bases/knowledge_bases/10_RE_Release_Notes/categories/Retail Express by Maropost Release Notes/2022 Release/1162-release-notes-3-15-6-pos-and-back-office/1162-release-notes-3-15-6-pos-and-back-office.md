---
title: "Release Notes 3.15.6 - POS and Back Office"
articleID: 1162
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes 3.15.6 - POS and Back Office

# Release Notes 3.15.6 - POS and Back Office

This update will become available to all users by the 21st of June 2022.

This release also includes updates to [API Integrations](https://galaxy.maropost.com/s/article/Release-Notes-3-15-6-API-Update).

## Improvements and Resolutions

### Improvements

* We've added Created By/Modified By User Tracking for Supplier Returns in the following locations:

  |  |  |
  | --- | --- |
  | Supplier Returns Grid | blobid0 (30).png |
  | Within a Supplier Return | blobid1 (17).png |
  | Credit Note | blobid3 (7).png |
  | Supplier Return Detail Report | blobid2 (8).png |
* We've added filtering by users to the Supplier Return Detail Report  
  ![mceclip0 - 2023-07-09T181517.407.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppf62EAA.jpg)
* We have updated the "State" field on the customer tab in a POS sale with the following improvements:
  + Visible when the Country selected is New Zealand
  + Renamed to be "State/Region"
  + Free text field instead of a dropdown
* The "Update" button on a POS sale now prompts users specifically when fulfilment and order changes have occurred.
* We've added the Purchase Order Total to the bottom of the PO Quick Receive window
* To update the status of a Purchase Order, users will need to select from the buttons on the footer (rather than the PO Status drop-down) e.g. Place On-Order, or use Quick Receive or Stock Receipt to mark products as Available  
  ![mceclip0 - 2023-07-09T181521.954.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfGfEAI.jpg)
* You can now fulfil and finalise Special Orders in POS using Override if the account customer is over their account limit and the linked Purchase Order is unavailable. Please note you must have the following permissions available for your Staff Profile:
  + Override - Allow Insufficient Credit
  + Override - Allow Fulfilment for Unavailable Special Orders
* We've updated the PO Manager, with the "Advanced Search Options" section collapsed by default, making it easier to access your Search Filters. Click the Advanced Search Options head to expand the section and access additional filters e.g. Sailed Date, Balance Due date, Shipping Status etc.

### Resolutions

* Resolved an issue where users were unable to create refunds under specific circumstances
* We now support User passwords using a Question Mark (?) as the final character
* Resolved an issue that prevented users from being able to modify Max Discount Rules
* Cash Rounding now applies in POS for amounts where there is only 1c or 2c outstanding