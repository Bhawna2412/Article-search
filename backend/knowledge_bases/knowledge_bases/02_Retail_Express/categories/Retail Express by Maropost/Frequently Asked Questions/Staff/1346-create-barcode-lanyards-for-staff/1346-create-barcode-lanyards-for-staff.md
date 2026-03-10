---
title: "Create Barcode Lanyards for staff"
articleID: 1346
category: "Frequently Asked Questions > Staff"
knowledgeBase: "Retail Express"
---

# Create Barcode Lanyards for staff

You can streamline staff login workflows by creating barcode lanyards that enable quick authentication at POS terminals and when performing stock adjustments, substantially improving operational efficiency during busy retail periods. This helps optimize your retail operations by reducing time spent on manual login processes, allowing staff to focus on customer service and sales activities.

Setting up barcode-based staff authentication involves leveraging **Retail Express** label printing features to create professional staff identification cards. When you implement this workflow, you can expect faster transaction processing and improved accountability, as staff can quickly scan their credentials rather than typing login codes during critical retail operations.

# Create Barcode Lanyards for staff

Staff are required to enter their details when logging into Retail Express, and before creating some transactions e.g. creating a sale in POS, stock adjustments etc.

It can be efficient to have your staff barcode on a lanyard, so instead of typing in the code staff can just simply scan their lanyard with a regular barcode scanner.

If you don't have a barcode/card provider, you can create your own using the Retail Express Label Printing feature, with a product used to create the barcodes for your staff.

- Create the staff member in Retail Express via Staff > Users. (If not already created)
- Create a product type in the system called "Miscellaneous" (this ensures you can restrict any products within this group from appearing on your stock reports). Product Types can be created via Settings > Product Types.
- Create a Supplier in the system called "Miscellaneous" (this ensures you can restrict any products within this group from appearing on your stock reports). Supplier can be created via Settings > Suppliers.
- Create a new product in the system, where the SupplierSKU will be the staff code assigned to the staff member in the first step. The description of the product can be something that is relevant e.g. the staff member's name (this can then be printed on the label if you choose to include the description field on the printout)
- Enter the remaining details, setting prices etc as $0.00.
- Go to Settings > Label Printing > A4 Label Presets OR Zebra Label Presets (depending on the method you use to print labels)
- Create a new label template
- Scroll down until you see the section titled "Barcode". Ensure the field "Barcode graphic represents" is set to "Supplier SKU" and tick Description if you want to show the Staff Member names as above.
- Scroll back up and click the "Preview" button and arrange the label layout as needed.
- Then save the changes.
- Go to Inventory > Label Printing > Search for you "Miscellaneous" Supplier and Product Type.
- Select the QTY you want to Print for your product created earlier
- Update the product you created earlier, changing the description and the Supplier SKU to reflect the employee details you're printing the barcode for and reprint as necessary.
- Once complete make sure you go back to Menu > System Settings > Label Printing > Zebra Label Presets or A4 Label printing and set you profile back to what it was before.