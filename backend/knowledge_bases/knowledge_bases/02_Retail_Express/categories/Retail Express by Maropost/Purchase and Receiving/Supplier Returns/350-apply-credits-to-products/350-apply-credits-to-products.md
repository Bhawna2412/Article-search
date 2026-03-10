---
title: "Apply Credits to Products"
articleID: 350
category: "Purchase and Receiving > Supplier Returns"
knowledgeBase: "Retail Express"
---

# Apply Credits to Products

You can apply credit notes to approved supplier return items, helping ensure accurate inventory valuation and financial reconciliation when suppliers approve claims. This improves your retail operations by providing systematic credit application with optional supplier reference tracking, with properly configured credit note processing typically enabling better accounting integration accuracy and clear inventory movement logging for audit purposes.

Understanding credit note application involves recognizing original buy price and claim amount verification, international supplier currency conversion requirements, and automatic inventory revaluation or removal based on return type to help retail operators focus on the right supplier credit workflows, ensuring your retail strategy consistently drives better financial accuracy and supplier relationship management outcomes.

This feature allows you to allocate credits effectively, whether for returns, discounts, or other customer incentives, ensuring seamless integration into the sales or return process. This article provides a step-by-step guide to help you apply credits to products accurately and efficiently.

If the Supplier approves your claim on a Supplier Return, you can apply a Credit Note to the products within Retail Express.

Related:Cancel Items on a Supplier Return

## Apply a Credit Note

1. Navigate to **Inventory > Supplier Returns**
2. A list of all Supplier Returns will be displayed
3. Click the **Funnel **icon  to filter the columns to search for your return e.g. RA Number

> **Note:** you can filter and sort multiple columns by clicking the funnel icon or the column heading

4. Click the **Pencil **icon  to edit the Supplier Return
5. **Review the Original Buy Price and Claim Amounts **to ensure they match the supplier's details
  Refer to the FAQs for information on processing international suppliers
6. Click the item to be credited; to select multiple items tick the box in the first column
  You can only select products from the same page - if you have multiple pages you will need to navigate to each page to select all items
7. Click **Process Items**
8. Click **Apply Credit**
9. The **Create Supplier Credit Note **window will be displayed
  [▶ Embedded Video](https://player.vimeo.com/video/901779267?badge=0&autopause=0&player_id=0&app_id=58479&wmode=opaque)
10. Add the Supplier Credit Note Number into the **Supplier Reference **field (optional)
  Symbols should not be used in the Supplier Reference field if you are using an Accounting Integration to Xero or MYOB as it can disconnect the Integration.
11. Review the credits to be applied; if the amounts are incorrect use the back button in the  bottom left-hand corner to cancel and restart the applying credit process
12. Click **Apply Credit Note**
13. A reminder will be displayed if you've left the Credit Note field blank, or if the Credit Note has been used for that supplier already
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240111at125945PM.05T5g000017RrN8EAK.png)
14. The Return Items will be updated to display "Credited" in the **Status** column
  Click the Credited link to view details of the Credit Note
15. If the products have been returned to the supplier the inventory will be updated (recorded in the [Inventory Movement Log]()) to reduce the "On Return" quantity
16. If the products have not been returned to the supplier (for example for an overcharge) the inventory will be updated to revalue the stock by removing the number of products at the incorrect price and re-adding to the inventory at the correct price
17. Once all items have been actioned the Return will be marked as **Finalised**

## Frequently Asked Questions

[How do I process a Supplier Return for an International Supplier?](https://galaxy.maropost.com/kb/articles/350-apply-credits-to-products#international)

Currently, processing Supplier Returns for International Suppliers is not fully supported. We recommend the following process:

1. Create the Supplier Return using the Supplier Buy Ex (in your suppliers' currency)
2. Select Start & email the Supplier Return to your supplier
3. When you receive the Credit Note from your supplier, it's important you manually convert the amounts into your local currency first so you don't incorrectly impact your inventory value
4. Overwrite the Original Buy Price and Claim Amounts to reflect your local price before posting the Credit Note
5. Edit the Credit Note in your accounting package to reflect the correct value in the foreign currency (optional if using an accounting integration)