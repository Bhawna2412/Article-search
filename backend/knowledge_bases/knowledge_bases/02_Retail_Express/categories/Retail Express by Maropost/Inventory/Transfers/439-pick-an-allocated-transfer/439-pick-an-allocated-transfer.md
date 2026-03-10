---
title: "Pick an Allocated Transfer"
articleID: 439
category: "Inventory > Transfers"
knowledgeBase: "Retail Express"
---

# Pick an Allocated Transfer

You can improve transfer accuracy and warehouse efficiency by using the pick allocation workflow in **Retail Express**, which enables systematic product gathering before dispatch and supports variance management for more complex transfer operations. This advanced transfer stage helps retail operators reduce shipping errors and maintain accurate inventory tracking, particularly valuable for warehouse operations managing multiple concurrent transfers.

The transfer picking functionality in **Retail Express** provides Australian retail operators with structured workflows for validating allocated stock quantities before dispatch, helping ensure transfer accuracy and supporting efficient warehouse operations. This picking workflow helps ensure your retail operations can identify and resolve stock discrepancies before transfers leave the source location, improving overall inventory accuracy and reducing receiving delays.

The Advanced Method for managing Transfers offers greater flexibility by introducing additional statuses that enable more control over stock movement within your system. One of these critical statuses is Picking, which serves as a dedicated phase for organizing and preparing items for dispatch. This stage ensures that the necessary stock is set aside and accounted for before it is transferred to another location.

The Advanced Method for managing Transfers allows more flexibility by providing extra statuses for holding of stock, including Picking. By picking your stock for the Transfer, you're actioning and progressing your stock internal transfer to the next stage using the Advanced Method.

## []()Picking a Transfer

To Pick an Allocated Transfer:

1. Navigate to **Inventory > Transfer Management > Pick**
2. Update the **Filters** as required (see the next section for detailed information)
3. Click **Search**
4. Click the Column Headings to sort the results

> **Note:** sorting of the columns will refresh the page and erase any quantities you have entered. Ensure to apply the sorting prior to entering any quantities.

5. To action the transfer use one of the following methods
	- Scan products directly into the PLU Scan field (each scan will increase the Pick field by a quantity of x 1)
	- Enter quantities directly into the Pick column for each product
	- Click **Copy Across** to process in bulk - the Allocated Qty is copied into the Pick field
  ![mceclip0 - 2023-07-08T225331.105.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppUNTEA2.jpg)
6. Click **Export to Excel **to export the report
7. Enter a title into the **Save As** field to save your progress
8. Click **Save Changes**
9. Press **OK** to update the inventory
10. The Transfer will be moved onto the next stage - Dispatch

## []()Special Filters

Most of the filtering fields are self-explanatory, however, see the detailed information below for the more advanced fields.

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Transfer Number | Entering a transfer number in this field will ignore all other search options. A transfer number that is not available to be moved to the Allocated status will return no results. |
| Transfer Type | Limit the results to only the ticked Transfer Type. Multiple options can be ticked |
| Only show Available for Picking | Limits the result to only products/transfers which have appropriate stock on hand to allow the product to be picked. Nil or negative stock on hand items will be excluded. |
| Delivery | Limit the results to only the ticked Delivery Method. Note: only Customer Order have a Delivery Method |
| Product PLU | Valid PLUs are SupplierSKU, ManufacturerSKU and Product ID. Enter multiple PLUs separated by a comma. |

![mceclip0 - 2023-07-08T225345.369.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVxtEAE.jpg)

## []()Frequently Asked Questions

[Can't find a Transfer Status](https://galaxy.maropost.com/kb/articles/439-pick-an-allocated-transfer#use_a_unique_name)

If you find you cannot access one of the Transfer statuses, it may be because the transfer was created via the Simple Method.

- **Simple Transfers** - only progress through the statuses Proposed > Dispatched and Made Available.
- **Advanced Transfers** - can progress through additional stages: Proposed > Request > Allocate > Pick > Dispatch > Receive > Make Available

You can identify the method used upon creation by editing the Transfer and viewing the Mode.

|  |  |
| --- | --- |
| ![blobid2 (6).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppUycEAE.jpg) | ![blobid3 (5).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppUfpEAE.jpg) |