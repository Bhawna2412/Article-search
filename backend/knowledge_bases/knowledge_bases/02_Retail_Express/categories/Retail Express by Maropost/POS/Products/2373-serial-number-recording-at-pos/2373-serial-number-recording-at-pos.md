---
title: "Serial Number Recording at POS"
articleID: 2373
category: "POS > Products"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-19
---

# Serial Number Recording at POS

This feature enables you to record serial numbers for products during the fulfilment process. At the product level, there are three configuration options that control how the product is handled when it is sold and fulfilled.

- **Required** — A serial number must be recorded prior to fulfilment
- **Optional** — A serial number can be recorded, but it’s not mandatory
- **Disabled** — Serial numbers are not used for this product

## How to Configure Serial Number Requirements

You can configure serial number requirements (Optional, Required, Disabled) in several areas of the system:

- **Creating and Editing Products/Packages Manually -** including via PO and POS Quick Create Product features. All existing products will assume the “Disabled” mode by default, and new products unless specified otherwise, will also default to Disabled.
- **Mass Upload/Download CSV -** Specify the Serial Number Option when creating/editing products using the Mass Upload/Download CSV feature. Note: Not Supported in Legacy Mass Download.
- **Product Search & Management Actions **Assign *Serial Number Option from Results* using Apply Product Edit Setting.
- **POS Quick Create Products Feature - **Select the Serial Number Mode during POS Quick Create Product.
- **PO Quick Create Product - **Select the Serial Number Mode when creating new products in the PO Item Page
- **Retail Express API 's- **via related endpoints for updating product details via API/Integrations.

## Where Are Serial Numbers Captured?

- **Point of Sale (POS) - **Sales staff are prompted to enter serial numbers for required or optional items. POS will prevent fulfilment of an item if a required serial number hasn't been entered. Click on the fulfilment method icon (the left side of the page) beside any order item that is setup as optional or required to collect a serial number. The serial number can then be entered or scanned into the box on the popup that appears.
- **Fulfilment Report-  **Team members handling order dispatch can enter serial numbers during the fulfilment process. The values are then shown on fulfilment report exports and run sheets to assist with warehouse and delivery workflows to ensure the correct serial number is delivered to the right customer.
- **Retail Express API’s - **For users of third-party systems or custom integrations, both the REST and Warehouse Management Service API’s received changes to support the Serial Number Feature, more details provided further in this document.

Serial numbers can be deleted and re-added freely up until the point of fulfilment to correct mistakes or update values. After fulfilment, any changes must be handled through a return and refund process followed by a re-issue of the item on a new invoice to maintain accurate transaction records and traceability.

## Serial Number Indicators in POS

To make it easier for staff to manage serialised items during a sale, we’ve introduced colour-coded indicators that appear below the fulfilment method icon on the far left of the page when adding products to a sale:

- **Red Barcode** – Serial number required, not yet entered
- **Orange Barcode** – Serial number is optional, not yet entered
- **Blue Barcode** – Serial number has been successfully recorded
- No Barcode - Product is set to Serial Number Not Required/Disabled.

These icons appear next to each item in the POS order screen, giving a clear visual prompt for staff to complete serial recording where applicable.

![image.png](https://us.v-cdn.net/6038474/uploads/49T8ESNYF3YK/image.png)
If you don’t have the serial number at the time of sale — for example, in the case of lay-bys, special orders, or items to be collected later — that’s no problem. You can enter the serial number later via POS, fulfilment, or API, as long as it’s recorded before fulfilment occurs. This approach ensures operational flexibility while enforcing that no serialised item leaves your store without being properly recorded.

Record the Serial Number at any stage via the fulfilment mode button on the left, or use the auto-prompt (if enabled) to enter or scan the serial number when first adding the item to the sale.

![image.png](https://us.v-cdn.net/6038474/uploads/V4BSRQURUKMP/image.png)

## Multiple Quantities where Serial Number is Optional or Required

When selling products that require or optionally allow serial number recording, POS automatically splits the quantity into separate order lines—one per unit. For example, buying three iPhones (set to require serial numbers) creates three individual rows with quantity one each. Increasing the qty of a single line is not possible, a prompt is shown explaining to add the item as a new, separate line.

This design ensures each unit has its own serial number for accurate tracking, refunds, exchanges, and traceability. It overrides the “POS Aggregate Dupllicate Order Items” setting, which still applies only to products with serial number tracking disabled. This approach maintains accuracy when managing multiples of a specific product within the same sale.

## Handling Returns and Refunds

When refunding or cancelling an item that had a serial number recorded, you’ll be given full visibility of the individual order items, including their serial numbers. This allows you to select the exact item being returned and maintain the paper trail.

![image.png](https://us.v-cdn.net/6038474/uploads/03CDMRZYHE22/image.png)
This is especially important when a customer has purchased multiple of the same product — for example, two laptops or three power tools — and only one of them is being returned. You’ll be able to confidently match the return to the originally sold unit, complete with its serial number.

## Serial Numbers and Package Products

Serial number recording also works with package products, with some key behaviours:

- **Consolidated Packages**
You can configure a serial number requirement directly against the package product. This is useful when the package is treated as a single physical item, such as a bundle in one box with one serial number.
- **Exploded Packages**
Each component item within the package uses its own serial number settings. The package product itself is ignored for serial purposes in this mode. This allows for flexibility — some components may require a serial number, others may not.

## Reporting on Serial Numbers Sold

Support for Serial Numbers has been extended to several back office reports:

- **Sales Report**  - New “Product Serial Number” filter and column in the results.
- **Fulfilment Report**  - New “Show Items Pending Serial Number” filter to help locate products which will require a serial before fulfilling.
  - Added Serial Number field in the results grid to allow adding/editing of serial number values.
- **Sales Detail Export**.  - New Filter added to assist in finding specific serial numbers sold
  - **Column Changes:**    - Added Serial Number Column to the results
    - Added Sale Type (Sale or Special Order) to the results
    - Modified Existing “Delivery Mode” column to denote the full name0 of the delivery mode for all methods - previously showed blank for cash and carry.
    - Moved “Delivery Mode” to be beside the Serial Number column.

This makes it easy to find who purchased a specific serial number and when. You can also filter by product or SKU to narrow the search to a particular serial number for a given item.

## **Fulfilment Management and Picking Lists**

We’ve enhanced the** fulfilment Report** and **Picklist** functionality to fully support serial numbers throughout the order fulfilment process. Key improvements include:

- Assign and View Serial Numbers: Users can now assign and view serial numbers directly against orders and order items, helping ensure accurate tracking of serialized products.
- Identify Missing Serial Numbers: New Filter/Checkbox in the report helps locate containing products that require a serial number but do not yet have one assigned, streamlining the fulfilment process.
- Export Enhancements: Serial number details are now included in fulfilment Report exports—including Picklists and Excel exports—making it easier for warehouse staff to locate specific serial numbers for clients (Exlcuding Invoice Pick List).

## Related Settings for Serial Number Features

**Auto-Prompt Modal for Serial Number Entry:**

- Enable or disable the modal pop-up that appears when adding required serial number items at POS.
- The auto-prompt triggers only when a product’s serial number setting is *Required*, and does not trigger for products marked as *Optional or Disabled*.
- If your staff usually have the goods on hand at the point of sale, enabling the pop-up provides a quick and easy way to capture serial numbers as you add each item to a sale.
- If you often don’t have the serial number available immediately you might prefer to disable the pop-up to avoid interruptions, entering the serial number later before fulfilment.
- Configurable via Settings > POS Settings > Product Settings > “Auto-Prompt for Serial Number for Applicable Products”.

![image.png](https://us.v-cdn.net/6038474/uploads/TQSAKDW9RMZ9/image.png)
**Show Serial Numbers on Customer Invoices:**

- Choose whether serial numbers appear on the customer invoice as part of the line item details within the PDF or remain hidden.
- This is configured via Settings > POS Settings > Invoice and Receipt Settings > “Display Serial Number on Invoice.”