---
title: "Upload Purchase Orders"
articleID: 363
category: "Purchase and Receiving > Purchasing Products"
knowledgeBase: "Retail Express"
---

# Upload Purchase Orders

You can upload purchase orders in bulk using Excel or CSV files, helping process large orders efficiently without manual line-by-line entry. This improves your retail operations by enabling rapid PO creation for suppliers with extensive product catalogs, with properly configured bulk upload workflows typically reducing data entry time and improving order accuracy through standardized templates.

Understanding PO upload functionality involves recognizing file format requirements, data field mapping, and validation processes to help retail operators focus on the right bulk procurement workflows, ensuring your retail strategy consistently drives better operational efficiency and reduced manual overhead outcomes.

The Purchase Orders Import feature is an incredibly efficient way to simultaneously create products (if they don't already exist in Retail Express) as well as adding the products to a Purchase Order. Orders are created as Incomplete, ready for editing before being placed On-Order.

Using the PO Upload feature you can create Purchase Orders for:

- 1 Supplier a single Outlet
- 1 Supplier for multiple Outlets
- Multiple suppliers for 1 Outlet
- 1 Supplier, 1 Outlet but with multiple invoices (separate order for each)

## []()Download PO Template

To create a PO via Excel Template:

1. Navigate to: **Inventory > PO Management > Multi PO Upload**

> **Note:** You can also select "Upload a PO via MS Excel" when creating a Purchase Order via the PO Manager.

  ![blobid0 (50).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBZEAY.jpg)
2. Select the **Create the Purchase Order For** option as required (this will determine on the type of template available for download)
3. Select the **Country**
4. Select the **Outlet**

> **Note:** To select multiple Outlets ensure you have selected the option "1 Supplier, for Multiple Outlets" and hold the Ctrl button to select the Outlets required.

5. Select the **Supplier**

> **Note:** To select multiple suppliers ensure you have selected the option Multiple Suppliers for 1 Outlet" and hold the Ctrl button to select the Suppliers

6. Click **Get Excel Template**

> **Important:** It's recommended to download a fresh template each time you need to do an upload to avoid any potential errors

7. The file will be downloaded automatically

## []()Complete the Purchase Order Template

Depending on the create purchase orders options you selected, you will be presented with a different spreadsheet template. All PO templates will be generated with:

- **Product Master sheet** (used to create new products)
- Purchase** Order Details** sheet that will create the PO/s for each Supplier / Outlet combination (the tab will have the name of the appropriate entity)

|  |  |
| --- | --- |
| **Option** | **Example Template** |
| 1 Supplier, for 1 Outlet | ![blobid0 (51).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphebEAA.jpg) |
| 1 Supplier, for multiple Outlets | ![blobid2 (16).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiUHEAY.jpg) |
| Multiple Suppliers, for 1 Outlet | ![blobid1 (36).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphLUEAY.jpg) |
| 1 Supplier, 1 Outlet, and multiple invoices | ![blobid2 (17).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppilqEAA.jpg) |

To populate the template:

1. Open the file downloaded in the previous step
2. Click the Product Master sheet (used to create new products)
3. Enter the product details

> **Note:** This sheet behaves the same way as creating products via Mass Upload; if you're not creating new products you can skip this step.

  ![blobid1 (37).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphdmEAA.jpg)
4. Click on the remaining tabs (either Outlet, Supplier or Invoice)
5. Enter the required product information

> **Note:** Mandatory fields are highlighted in red

  ![blobid0 (52).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiebEAA.jpg)
6. Ensure you have entered a **Quantity **for each product in the Qty field
7. Save the file

## []()Upload the Template (Create Purchase Orders)

To upload your Purchase Order/s:

1. Navigate to **Inventory > PO Management > Multi PO Upload**
2. Click the **Upload Excel** tab
  ![mceclip0 - 2023-07-10T035940.522.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppieWEAQ.jpg)
3. Select **Browse**
4. Navigate to the file you saved in the previous section
5. Click **OK**
6. Click **Upload**
7. Once the file has been uploaded navigate to **Inventory > PO Management > PO Manager**

> **Note:** If there are errors in the file preventing the upload they'll be displayed at the bottom of the screen

8. Change the **PO Status **filter to "Incomplete"
  ![mceclip1 - 2023-07-10T035944.782.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppimeEAA.jpg)
9. Update the other **Filters **as required
10. Click **Search**
11. The Purchase Orders will be displayed
12. Click the Purchase Order to open the order for editing
13. Click **Place On-Order **to finalise creating the Purchase Order

> **Note:** The PO must be in the ON Order status to enable you to process a stock receipt or receive stock as available

> **Important:** If you're at all unsure if your Purchase Orders were created, ensure to check the PO Manager prior to performing the Upload again as this could duplicate the purchase orders.