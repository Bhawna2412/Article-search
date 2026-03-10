---
title: "Create a Supplier Return"
articleID: 889
category: "Purchase and Receiving > Supplier Returns"
knowledgeBase: "Retail Express"
---

# Create a Supplier Return

You can process supplier returns systematically in Retail Express to manage defective or incorrect inventory, helping your retail operations maintain accurate stock levels and supplier relationships. This capability enables proper documentation of returned merchandise, which helps ensure you receive appropriate credits while maintaining clear records of return transactions for accounting and inventory management.

Setting up supplier return workflows enables your retail operations to handle product returns to vendors efficiently, helping optimize inventory accuracy and supplier relationship management. This helps retail businesses maintain healthy supplier partnerships by processing returns professionally while ensuring all financial and inventory implications are properly tracked in the system.

Supplier Returns manages the claim process where you are requesting credit from the Supplier. Claims can be made for a variety of reasons, for example:

- Items damaged during transit
- If you were overcharged
- Products were not supplied, missing etc.

Supplier Returns will manage any changes to the inventory value or inventory movements.

## Before You Begin

Before you begin using Supplier Returns, it's essential you do the following:

- Create your own Supplier Return Reasons e.g. Overcharged, Faulty
- Review Understanding Supplier Returns - this essential article includes information on inventory movements and variances

It is not recommended to proceed until you have reviewed these articles.

## Create a Supplier Return

To create a Supplier Return:

1. Navigate to **Inventory > Supplier Returns**
2. A list of all Supplier Returns will be displayed

Click Export to Excel to download a spreadsheet listing the Supplier Returns
3. Click **Create New**
4. Select the **Supplier **and **Outlet** - these can only be edited while the Return Status is Incomplete
5. Click **Create**
6. The Supplier Return **ID **and **Status **will be displayed at the top
  ![mceclip0 (18).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povtvEAA.jpg)
7. Click the **Include Tax In Claim** toggle to exclude tax from the return

Include Tax can only be modified before a Credit Note has been applied; if you have items both with and without tax you will need to prepare separate Supplier Returns
8. Enter a **Return Authorisation** number (RA#)

You can filter Supplier Returns by RA to make it easier to find this Return in the future
9. Enter **Notes** for the supplier (notes will be displayed in the PDF)
10. To add an item enter a code into the **PLU Scan field**

Enter the Product ID, Supplier SKU, Supplier SKU 2, Manufacturer SKU or Barcode
11. As you type, the results will filter to products with a code starting with the text you've entered
  ![mceclip2 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povu0EAA.jpg)
12. **Click the product**, or use your keyboard arrows to highlight the product and press **Enter**
13. The product will be added to the table
14. As you update the fields, the changes will be saved automatically
  ![mceclip1 (7).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povu5EAA.jpg)
15. To **bulk edit **products, select one or more products and click **Edit Items**
16. Edit the options and click **Update**
  ![mceclip0 (19).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povuAEAQ.jpg)
17. To edit a single product click the product row
18. Select the **Return From **inventory status bucket - this will default to Available

Depending on where your inventory is currently located you can choose a return from location e.g. Available, Faulty or None - refer to the FAQs below for more detail on these options
19. Select a **Return Reason **(required)

Create custom reasons via Supplier Return Reasons; if multiple products are being returned for separate reasons, rather than update the quantity you should enter the product code into the PLU box to add a second product line with the other Return Reason
20. Enter **Notes **against the product if required
21. Update the **Quantity**
22. Add an **Original Inv Ref** (optional) - your suppliers may request a reference to the original purchase of the item (the Original Invoice Number), or the date you last purchased the item
23. Edit the **Original Item Buy Ex **if required (the price you purchased the product for, or the amount charged by the supplier - defaults automatically to the Supplier Buy Ex price)
24. Enter the **Item Claim Amount Ex **(the credit amount you're claiming)

The Item Claim Amount Ex cannot be more than the Original Item Buy Ex - see the FAQs below for information on processing overcharges
25. Click **Save**
26. To **delete **an item tick the box in the first column and click Delete

Items can only be deleted when the Supplier Return is in the status of "Incomplete", otherwise, the products will be marked as Cancelled
27. Repeat for any additional products

## Start the Return Process

Once you have created the claim, you're ready to start the return i.e., send the claim to the supplier.

The inventory will be moved from your "Return From" location (Available or Faulty) to the "On Return" status. This will isolate the inventory while you wait for your supplier to process the claim on their end. If you have selected None, no inventory movement will be actioned. View the Inventory Movement Log to see detailed information on the status update.

1. Open the Supplier Return
2. Click **Start Return**
3. Press **Yes **to the confirmation message
4. The status will be updated to **In Progress** in the header of the Return
  ![mceclip2 (10).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povuFEAQ.jpg)
5. The Supplier Return will update to show a status of "Pending" for each of the products
6. The inventory will be updated for products with a "Return From" option of Available or Faulty to decrease the Available/Faulty quantity and increase the "On Return" quantity
7. Click **Export to PDF **to print the Supplier Return
8. Click **Email **to email the Supplier Return
9. Click the **Left Arrow** to return to the list of all Supplier Returns
  ![mceclip0 (20).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pou8GEAQ.jpg)
10. When the Supplier has advised of the outcome of the claim, follow the steps to either Apply a Credit Note or Cancel an Item.

## Frequently Asked Questions

**Can I customise the Supplier Return PDF?**

![mceclip3 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povuKEAQ.jpg)
The Supplier Returns PDF is created by opening a claim and clicking **Export to PDF**.

- The PDF will **sort the products** as per the sorting used on the Supplier Returns window, so if you have multiple products you can click the column headings to sort the products e.g. Supplier SKU 2
- The **code used for the barcode** is as per the Preferred Label Code in the
- The **Date **is the date the Supplier Return was started i.e. moved to "In Progress"

> Tip: Click multiple headings to use multi sort e.g. sort by Manufacturer SKU then Supplier SKU.

**How do I use the "Return From" field?**

The Return From field is used to automatically move inventory to the "On Return" status as a result of the Supplier Claim. It's important to isolate these products while you wait for the supplier to process the claim.

Examples:

| Available | You received a Purchase Order only to find the items were short shipped (missing) or damaged. The products need to be removed from the Available stock as they're not available for sale. |
| --- | --- |
| Faulty | Your in-store staff processed a Refund via POS and the received items were added to the Faulty status. The stock can be moved from Faulty to On Return to indicate the claim is being processed. |
| None | You were overcharged for an item and still want to keep the product but claim a credit for the incorrect charge (refer to Processing Overcharges) |

**How do I process a Supplier Return for an International Supplier?**

Currently, processing Supplier Returns for International Suppliers is not fully supported. We recommend the following process:

1. Create the Supplier Return using the Supplier Buy Ex (in your suppliers' currency)
2. Select Start & email the Supplier Return to your supplier
3. When you receive the Credit Note from your supplier, it's important you manually convert the amounts into your local currency first so you don't incorrectly impact your inventory value
4. Overwrite the Original Buy Price and Claim Amounts to reflect your local price before posting the Credit Note
5. Edit the Credit Note in your accounting package to reflect the correct value in the foreign currency (optional if using an accounting integration)

**How do I manage credits for direct costs, like Freight Charges?**

You currently cannot manage credits for Freight Charges or other on-costs. If this is important to you, please [let us know](https://ress.zendesk.com/hc/en-us/requests/new)!

**How do I report on the "On Return" stock bucket?**

You can view and report on the "On Return" stock bucket in the following locations:

| **Area** | **Details** |
| --- | --- |
| Edit a Product (Inventory Tab) | The "Location and Status" table on the Inventory Tab includes an "On Return" column, where you can see at a glance how many items from each Outlet are being processed on a Supplier Return |
| Inventory Movement Log | Filter by a Movement Type of "Supplier Return" Results show when Supplier Returns are processed e.g. Incomplete to In Progress Results include an On Rtn (On Return) column |
| Item Detail Export | Added as a column in the export file |
| Stock Control Report | New "On Return > 0" filter |
| Stock Value vs Sales | Added On Return to the Stock Value Based On filter (selected by default). |

**How do I change the cc email for Supplier Returns?**

You can automatically include a cc address on emailed Supplier Returns using the global EmailCC e.g. if you want to receive copies by default.

> Note: This will also affect the default CC for Purchase Orders

To change the default email:

1. Navigate to **Settings > Global Settings**
2. Locate the **General **section
3. Update the EmailCC field
  ![mceclip0 (21).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povuUEAQ.jpg)