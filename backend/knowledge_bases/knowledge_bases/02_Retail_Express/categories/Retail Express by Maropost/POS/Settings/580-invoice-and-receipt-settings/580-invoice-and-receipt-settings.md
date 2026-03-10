---
title: "Invoice and Receipt Settings"
articleID: 580
category: "POS > Settings"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-20
---

# Invoice and Receipt Settings

You can configure invoice and receipt generation behavior in Retail Express to match your operational workflow and compliance requirements, helping your retail operations provide appropriate customer documentation. This capability allows you to control what information appears on receipts versus full invoices, automatic printing behavior, and format preferences, which helps streamline checkout while meeting regulatory disclosure standards.

Setting up optimal invoice settings enables your retail team to balance operational efficiency with proper documentation, helping optimize the checkout process while ensuring customers receive appropriate transaction records. This helps retail operations maintain compliance with ANZ market requirements while providing professional customer documentation.

Retail Express contains a range of configuration options related to printing Invoice and Receipts from the POS, including product attributes to display and default comments. The Invoice and Receipt Settings allow you to customize the format and details displayed on customer invoices and receipts.

> **Important:** **Did you know?**: Comments on Invoices and Receipts can be default globally or outlet specific. See the Outlet Configuration article for more information.

## Configuring the Invoice and Receipt Settings:

To configure the settings:

1. Navigate to **Settings > POS Settings > Invoice & Receipt Settings**
2. Customise the options as required (see below for detailed information)
3. Click **Save Changes**
4. **Log out of POS** to refresh the settings (use the **Log Out **button at the top of the POS main window)

> **Important:** Closing the browser window will not log you out of POS, and the changes will not be applied. See the article Logging out of POS for more information.

### Configuration Options

![Screenshot 2026-01-20 at 3.50.38 PM.png](https://us.v-cdn.net/6038474/uploads/H9OQ449AHJE3/screenshot-2026-01-20-at-3-50-38-e2-80-afpm.png)

## Serial Number Display on Invoices and Receipts

Retail Express supports displaying **serial number information on invoices and receipts** when products with serial number capture enabled are included in an order.

When products with recorded serial numbers are sold, Retail Express can include the associated serial numbers on printed or emailed:

- **Sales invoices**
- **POS receipts**
- **Dispatch or delivery invoices**

This allows customers and retail operators to have a clear record of the individual items sold, which is useful for warranty tracking, service support, or returns processing.

### **Show Serial Numbers on Customer Invoices:**

- 
  ![Screenshot 2026-01-20 at 3.54.33 PM.png](https://us.v-cdn.net/6038474/uploads/OFIQMEND8PZI/screenshot-2026-01-20-at-3-54-33-e2-80-afpm.png)
- This is configured via Settings > POS Settings > Invoice and Receipt Settings > “Display Serial Number on Invoice.”
  ![Screenshot 2026-01-20 at 3.48.30 PM.png](https://us.v-cdn.net/6038474/uploads/F6UCC4YYC6B8/screenshot-2026-01-20-at-3-48-30-e2-80-afpm.png)

## **Display the Customer's Email Address on the A4 Invoice.**

- To access customer e-mail display setting: Settings > POS Settings > Invoice and Receipt Settings  - "Display Customer/Order Email on Invoice"
  - When enabled, the email address associated with the order will be displayed on the A4 Invoice document, including Dispatch and Delivery Invoices.
  - This setting is obeyed when invoices are printed/emailed from POS and also the Back Office

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Changes.05T5g00000tlBM2EAM.jpeg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Automatically Cut Receipt | Sends a Cut command to the Receipt Printer (supported printers only). This removes the need to manually tear the receipt on the printer. |
| Automatically Print Receipt | Automatically print a receipt when an order is processed. Some business may choose to deselect this option and ask the customer for their preference. Retail Express allows you to email invoices straight from POS, so where some businesses may be aiming for a more environment-friendly business this can be ideal. |
| Default Invoice Comments | Default comments to appear on the receipt and A4 invoices for all outlets, for example refund policies.  > **Note:** Comments can also be configured for individual outlets via the Outlet Configuration. |
| Display Barcode on Invoice | Print a barcode of the Order Number on the invoice. Click Here to learn about Configuring Barcode Scanners |
| Display Barcode on Receipt | Print a barcode of the Order Number on the bottom of the receipt (supported printers only) |
| Display Payment History on Invoice | Displays payments made on Invoices for identification of when and how payments were made against the sale. This is ideal when using the Layby functionality. |
| Display Payment History on Receipt | Displays payments made on Receipts for identification of when and how payments were made against the sale. This is ideal when using the Layby functionality. |
| Feed Receipt before Cut | Feeds the receipt throught the printer the specified number of lines after the receipt text before cutting. This is particularly useful when there is text that may appear close to the bottom of the receipt; increasing the number of lines ensures there is a buffer to avoid any text being potentially cut off. |
| Number of Receipt Prints | The number of receipts to print when an order is processed (regardless of sales status e.g. Processed, Cancelled etc). |
| Print Extra Receipt for Laybys | Automatically print an additional receipt for laybys, for example where a copy of the receipt is attached to the product when being set aside in storage. |
| Show Discounts on Invoice and Tax Receipt | Options available:  - Both Total and Individual Line Item - Only Total - Disable  Show any discounts applied to the order at POS (excluding Price Groups or any other special pricing). Discounts are only displayed if a discount has been applied manually. |
| Show percentage discounts on Invoice and Tax Receipt | If selected percentage discounts will be calculated and displayed beside the total value of the discount. |
| Show Print Receipt Prompt | Used when the option "Bypass Invoice Page on Finalise" is used (managed in the Order Settings) so that when selecting to "Finalise" a sale and complete the checkout that a prompt is displayed to print the Receipt. |
| Show zero quantity order lines on Invoices and Tax Receipts | If selected orders with zero quantity lines will display with a strikethrough on Invoice and Tax Receipts, otherwise the lines will be omitted from the printout. These lines will still appear when viewing the order in POS. |
| Display Product Attributes on Invoice | Used to enable product attributes on Invoices e.g. Size, Colour |
| Display Product Attributes on Receipt | Used to enable product attributes on Receipts e.g. Size, Colour |
| Display outlet specific bank details on invoice | If enabled, bank details configured for an Outlet (Settings > Locations/Outlets > Outlets) will be displayed on Invoices instead of the Global settings. If the Outlet doesn't have bank details configured the Global settings will be used. |