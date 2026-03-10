---
title: "Sales Order Import and Export Fields"
articleID: 1458
category: "Use Neto > Data Import and Export > Sales Orders"
knowledgeBase: "Neto By Maropost"
lastUpdated: 2025-11-21
---

# Sales Order Import and Export Fields

The fields listed below are popular fields that are typically populated when importing an order or when adding an order through the user interface. In addition to these fields you will find a list of other fields available in the order database at the end of this document.

**Please Note**: Unless stated, these fields cannot be used to update an existing order, they can only be used to add a new order. Shipping information can be updated using the [order tracking import wizard](https://galaxy.maropost.com/s/article/order-tracking-status-import-wizard).

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Field Name** | **Export/Import Wizard Path** | **Field Type** | **Field Description** | **Field Restrictions** | **Example Input** |
| Order ID | Orders Table > Order ID | Text | The Order ID. If not defined, an Order ID will be automatically generated when importing order data. | Max Length: 15 | ABC1234567 |
| Order Status | Orders Table > Order Status | Text | Order order status the order will be imported as. Options: Quote, New, Pick, Pack, Dispatched, On Hold, Cancelled. | Order Status Name (eg: New, Pick, Pack etc) | New |
| Approved | Orders Table > Approved | Boolean | Only approved orders can be shipped. Set this to "Yes" to approve an order on import. | Yes \| No | Yes |
| Username | Orders Table > Username | Text | The username of the orders related customer in Neto. Username is the unique identifier of the customer in Neto. | Max Length: 25 | sample |
| Email | Orders Table > Email | Text | The email address of the order (order receipts etc sent here). | Max Length: 50 | johnsmith@maropost.com |
| Ship First Name | Orders Table > Ship First Name | Text | Shipping first name. | Max Length: 50 | John |
| Ship Last Name | Orders Table > Ship Last Name | Text | Shipping last name. | Max Length: 50 | Smith |
| Ship Company | Orders Table > Ship Comapny | Text | Shipping company name. | Max Length: 50 | Acme Co Pty Ltd |
| Ship Address Line 1 | Orders Table > Ship Address Line 1 | Text | Shipping address Line 1 | Max Length: 50 | Unit 10 |
| Ship Address Line 2 | Orders Table > Ship Address Line 2 | Text | Shipping address line 2 | Max Length: 50 | 12 Lilly Street |
| Ship City | Orders Table > Ship City | Text | Shipping city or suburb | Max Length: 50 | Capalaba |
| Ship State | Orders Table > Ship State | Text | Shipping state | Max Length: 50 | QLD |
| Ship Post Code | Orders Table > Ship Post Code | Text | Shipping post code | Max Length: 15 | 4157 |
| Ship Country | Orders Table > Ship Country | Text | Shipping country code (eg: AU) | Country | AU |
| Ship Phone | Orders Table > Ship Phone | Text | Shipping phone number | Max Length: 30 | 07 3214 5236 |
| Ship Fax | Orders Table > Ship Fax | Text | Shipping fax  number | Max Length: 30 | 07 3214 5237 |
| Bill First Name | Orders Table > Bill First Name | Text | Billing first name. | Max Length: 50 | John |
| Bill Last Name | Orders Table > Bill Last Name | Text | Billing last name. | Max Length: 50 | Smith |
| Bill Company | Orders Table > Bill Company | Text | Billing company name. | Max Length: 50 | Acme Co Pty Ltd |
| Bill Address Line 1 | Orders Table > Bill Address Line 1 | Text | Billing address Line 1 | Max Length: 50 | Unit 10 |
| Bill Address Line 2 | Orders Table > Bill Address Line 2 | Text | Billing address line 2 | Max Length: 50 | 12 Lilly Street |
| Bill City | Orders Table > Bill City | Text | Billing city or suburb | Max Length: 50 | Capalaba |
| Bill State | Orders Table > Bill State | Text | Billing state | Max Length: 50 | QLD |
| Bill Post Code | Orders Table > Bill Post Code | Text | Billing post code | Max Length: 15 | 4157 |
| Bill Country | Orders Table > Bill Country | Text | Billing country code (eg: AU) | Bill Country | AU |
| Bill Phone | Orders Table > Bill Phone | Text | Billing phone number | Max Length: 30 | 07 3214 5236 |
| Bill Fax | Orders Table > Bill Fax | Text | Billing fax  number | Max Length: 30 | 07 3214 5237 |
| Payment Method | Orders Table > Payment Method | Text | The name of the payment method used for the order. Must match the name of a payment method already set up in the system. Can be used to update existing orders. | Name of payment method. | Visa |
| Shipping Method | Shipping Tracking Table > Order Line Shipping Method | Text | The orders shipping option. Must match the name of a shipping option already setup in the system. | Shipping Option | Standard |
| Shipping Cost | Orders Table > Shipping Cost | Decimal | The total shipping cost to apply to the order. | Price | 20 |
| Shipping Discount Amount | Orders Table > Shipping Discount Amount | Decimal | The total shipping discount to apply to the order. | Price | 10 |
| Customer Instructions | Orders Table > Customer Instructions | Text | The customers order instructions. These will print on shipping labels and other print docs. |  | Leave at front door |
| Internal Notes | Orders Table > Internal Notes | Text | Internal notes for staff usage. Not visible to customers. |  | Sample internal notes |
| Amount Paid | Orders Table > Amount Paid | Decimal | The amount paid to the order. | Price | 5 |
| Date Paid | Date Paid | Date | The date the payment was made. |  | 2014-9-20 |
| Order Line SKU | Order Lines Table > Order Line SKU | Text | The SKU of the order line. Used to identify the product. This must match the SKU of a product already setup in the system. | Max Length: 25 | SAMPLE_P1 |
| Order Line Qty | Order Lines Table > Order Line Qty | Integer | The qty of a SKU on order. | Order Line Qty | 2 |
| Order Line Description | Order Lines Table > Order Line Description | Text | The description of  SKU on order. If not defined, the products name will be used. | Max Length: 255 - Name of product on order. | Sample Product Name |
| Order Line Warehouse Name | Order Line Warehouse Name | Text | The warehouse assigned to fulfill the order line. This must match the name of a warehouse already setup in the system. |  | Secondary Warehouse |
| Order Line Unit Price | Order Line Unit Price | Decimal | The unit price of each SKU on the order line. | Price | 19.95 |
| Order Line Discount Amount | Order Lines Table > Order Line Discount Amount | Decimal | The discount amount to apply to the order line. | Price | 1 |

### Complete List of Order Fields

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Field Name** | **Export/Import Wizard Path** | **Field Type** | **Field Description** | **Field Restrictions** | **Example Input** |
| Order ID | Orders Table > Order ID | Text | The Order ID. If not defined, an Order ID will be automatically generated. | Max Length: 15 | ABC1234567 |
| Group Orderlines By | Group Orderlines By | Text | Used to group order lines together. If not defined, Order ID will be used. | Max Length: 255 | Order ID |
| Send Email Notification | Send Email Notification | Boolean | If Yes, an order receipt email will be sent to the email address defined on the order. | Yes \| No | Yes |
| Parent Order ID | Orders Table > Parent Order ID | Text | The orders related parent Order. Used to define the order this order was created from. | Max Length: 15 | ABC1234564 |
| Purchase Order ID | Orders Table > Purchase Order ID | Text | The customers purchase order number. Used for reference purposes only. Shows on order print docs and in UI. | Max Length: 50 | 1234567890 |
| Order Line Status | Order Lines Table > Order Line Status | Text | Order order status the order will be imported as. Options: Picked, Not Yet Picked). | Order Status Name (Picked, Not Yet Picked) Export only | Not Yet Picked |
| Order Type | Order Type | Text | By default an order is a "Sales" order. For orders that are being dropshipped on a customer's behalf and that do not require invoices use the type "Dropshipping". Automatically the system will not allow warehouse users to print invoices for such orders. | Sales\|Dropshipping | Sales |
| Approved | Orders Table > Approved | Boolean | Only approved orders can be shipped. Set this to "Yes" to approve an order on import. | Yes \| No | Yes |
| User Group | Orders Table > User Group | Integer | The user group / price level used for pricing calculations of the order. Use the group ID. Eg: 1,2,3 etc | User Group Name | 2 |
| Order Payment Plan | Orders Table > Order Payment Plan | Text | The payment plan assigned to the order (for recurring payments module only). Must match a plan name that has already been setup in the system. | Order Payment Plan Name | Weekly |
| Document Template | Orders Table > Document Template | Text | The name of the document template set assigned to the order. Must match the name of a document template set that has already been setup in the system. | Document Template | test |
| Date Placed | Orders Table > Date Placed | Date & Time | The date and time the order was placed. | YYYY-MM-DD HH:MM:SS | 2017-09-20 10:22 |
| Date Required | Orders Table > Date Required | Date & Time | The date and time the order is required (for shipping purposes). | YYYY-MM-DD HH:MM:SS | 2017-09-20 10:22 |
| Payment Due Date | Orders Table > Payment Due Date | Date & Time | The date and time the order is due to be paid. | YYYY-MM-DD HH:MM:SS | 2017-09-20 10:22 |
| Date Completed | Orders Table > Date Completed | Date & Time | The date and time the order was completed (dispatched or cancelled) | YYYY-MM-DD HH:MM:SS | 2017-09-20 10:22 |
| Exported To 3rd Party Software | Exported To 3rd Party Software | Boolean | Defines whether of not the order has already been exported to an accounting system. | Yes \| No | Yes |
| Date Invoiced | Orders Table > Date Invoiced | Date | The date the order was invoiced. | YYYY-MM-DD | 2017-09-20 10:22 |
| Username | Orders Table > Username | Text | The username of the orders related customer in Neto. Username is the unique identifier of the customer in Neto. | Max Length: 25 | sample |
| Email | Orders Table > Email | Text | The email address of the order (order receipts etc sent here). | Max Length: 50 | johnsmith@maropost.com |
| Ship Full Name | Ship Full Name | Text | The shipping first and last name  separated with spaces. | Max Length: 100 | John Smith |
| Ship First Name | Orders Table > Ship First Name | Text | Shipping first name. | Max Length: 50 | John |
| Ship Last Name | Orders Table > Ship Last Name | Text | Shipping last name. | Max Length: 50 | Smith |
| Ship Company | Orders Table > Ship Company | Text | Shipping company name. | Max Length: 50 | Acme Co Pty Ltd |
| Ship Address Line 1 | Orders Table > Ship Address Line 1 | Text | Shipping address Line 1 | Max Length: 50 | Unit 10 |
| Ship Address Line 2 | Orders Table > Ship Address Line 2 | Text | Shipping address line 2 | Max Length: 50 | 12 Lilly Street |
| Ship City | Orders Table > Ship City | Text | Shipping city or suburb | Max Length: 50 | Capalaba |
| Ship State | Orders Table > Ship State | Text | Shipping state | Max Length: 50 | QLD |
| Ship Post Code | Orders Table > Ship Post Code | Text | Shipping post code | Max Length: 15 | 4157 |
| Ship Country | Orders Table > Ship Country | Text | Shipping country code (eg: AU) | Country | AU |
| Ship Phone | Orders Table > Ship Phone | Text | Shipping phone number | Max Length: 30 | 07 3214 5236 |
| Ship Fax | Orders Table > Ship Fax | Text | Shipping fax  number | Max Length: 30 | 07 3214 5237 |
| Bill Full Name | Bill Full Name | Text | The Billing first and last name  separated with spaces. | Max Length: 100 | John Smith |
| Bill First Name | Orders Table > Bill First Name | Text | Billing first name. | Max Length: 50 | John |
| Bill Last Name | Orders Table > Bill Last Name | Text | Billing last name. | Max Length: 50 | Smith |
| Bill Company | Orders Table > Bill Company | Text | Billing company name. | Max Length: 50 | Acme Co Pty Ltd |
| Bill Address Line 1 | Orders Table > Bill Address Line 1 | Text | Billing address Line 1 | Max Length: 50 | Unit 10 |
| Bill Address Line 2 | Orders Table > Bill Address Line 2 | Text | Billing address line 2 | Max Length: 50 | 12 Lilly Street |
| Bill City | Orders Table > Bill City | Text | Billing city or suburb | Max Length: 50 | Capalaba |
| Bill State | Orders Table > Bill State | Text | Billing state | Max Length: 50 | QLD |
| Bill Post Code | Orders Table > Bill Post Code | Text | Billing post code | Max Length: 15 | 4157 |
| Bill Country | Orders Table > Bill Country | Text | Billing country code (eg: AU) | Bill Country | AU |
| Bill Phone | Orders Table > Bill Phone | Text | Billing phone number | Max Length: 30 | 07 3214 5236 |
| Bill Fax | Orders Table > Bill Fax | Text | Billing fax  number | Max Length: 30 | 07 3214 5237 |
| Payment Method | Orders Table > Payment Method | Text | The name of the payment method used for the order. Must match the name of a payment method already setup in the system. | Name of payment method. | Visa |
| BPAY CRN | Orders Table > BPAY CRN | Text | The Bpay CRN of the order. Leave blank for the system to auto generate a CRN. | Max Length: 20 | 123456789 |
| Payment Terms | Orders Table > Payment Terms | Text | The orders payment terms. Must match the name of payment terms already setup in the system. | Payment Terms | Net 30 |
| Sales Channel | Orders Table > Sales Channel | Text | The sales channel that the order was placed through. Eg: Website or eBay | Max Length: 15 | Website |
| Currency Code | Orders Table > Currency Code | Text | The currency code used for order lines. Leave blank to use system default currency. 3 digit currency code. | Currency Code | AUD |
| Shipping Method | Orders Table > Shipping Method | Text | The orders shipping option. Must match the name of a  shipping option already setup in the system. | Shipping Option | Standard |
| Signature Required | Orders Table > Signature Required | Boolean | If yes, signature required will print on shipping address labels. | Yes \| No | Yes |
| Shipping Cost | Orders Table > Shipping Cost | Decimal | The total shipping cost to apply to the order. | Price | 20 |
| Shipping Discount Amount | Orders Table > Shipping Discount Amount | Decimal | The total shipping discount to apply to the order. | Price | 10 |
| Tax Free Shipping | Tax Free Shipping | Boolean | If yes tax will not be applied to shipping. | Yes \| No | Yes |
| Tax Inclusive | Orders Table > Tax Inclusive | Boolean | If yes all pricing on the order will be deemed to be tax inclusive (tax will not be added on top) | Yes \| No | Yes |
| Surcharge Percent | Surcharge Percent | Decimal | The percentage surcharge to apply to the order. Increases the order value by this percentage. | Percentage (%) | 2 |
| Payment Notes | Payment Notes | Text | Internal notes related to the payment. For reference purposes only. |  | Sample payment notes. |
| Fraud Score | Orders Table > Fraud Score | Decimal | The fraud score associated with the order. For reference purposes only. |  | 5.2 |
| Coupon Code | Orders Table > Coupon Code | Comma separated list | A list of coupon codes that apply to the order. The system will apply the discount rules of the codes on import. | Coupon codes separated by commas | ABC123 |
| Customer Instructions | Orders Table > Customer Instructions | Text | The customers order instructions. These will print on shipping labels and other print docs. |  | Leave at front door |
| Internal Notes | Orders Table > Internal Notes | Text | Internal notes for staff usage. Not visible to customers. |  | Sample internal notes |
| Sales Person | Orders Table > Sales Person | Text | The sales person associated with the order. Must match the username of an existing staff member account. | Sales Person | admin |
| Password For New User | Password For New User | Text | If you select to have the system auto generate a user account for the related customer of the order you are importing, you can use this field to define the customers account password. | *RANDOM* = Create a random password ; Max Length: 25 | kvwyc732vf62! |
| Amount Paid | Orders Table > Amount Paid | Decimal | The amount paid to the order. | Price | 5 |
| Date Paid | Date Paid | Date | The date the payment was made. |  | 2014-9-20 |
| Card Holder | Payment Details > Card Holder | Text | The orders credit card holders name. | Max Length: 50 | John Smith |
| Card Number | Card Number | Text | The orders credit card number. For PCI compliance reasons do not import full credit card numbers to this field. | Max Length: 30 | 4950******5 |
| Card Expiry Month | Card Expiry Month | Integer | The orders credit card expiry month. | Month | 11 |
| Card Expiry Year | Card Expiry Year | Integer | The orders credit card expiry year. | Year | 2014 |
| Card Authorisation Code | Card Authorisation Code | Text | The orders credit  card authorisation number returend by the processing bank or gateway at time of payment. | Max Length: 100 | AUTH123 |
| Authorisation Message | Authorisation Message | Text | The transaction number / ID of the payment. | Max Length: 50 | TRANS1 |
| Cheque Number | Cheque Number | Text | The cheque / check number used to make payment. | Max Length: 20 | 1235467 |
| Cheque Account Name | Cheque Account Name | Text | The name of the customers cheque / check account. | Max Length: 50 | Test Account Name |
| Cheque Account BSB | Cheque Account BSB | Text | The bsb of the customers cheque / check account. | Max Length: 10 | 123456 |
| Cheque Account Number | Cheque Account Number | Text | The number of the customers cheque / check account. | Max Length: 20 | 123456789 |
| Order Line SKU | Order Lines Table > Order Line SKU | Text | The SKU of the order line. Used to identify the product. This must match the SKU of a product already setup in the system. | Max Length: 25 | SAMPLE_P1 |
| Order Line Qty | Order Lines Table > Order Line Qty | Integer | The qty of a SKU on order. | Order Line Qty | 2 |
| Order Line Description | Order Lines Table > Order Line Description | Text | The description of  SKU on order. If not defined, the products name will be used. | Max Length: 255 - Name of product on order. | Sample Product Name |
| Order Line Serial Number | Order Lines Table > Order Line Serial Number | Text | The serial number assigned to the order line. For warranty tracking purposes. | Max Length: 50 | 1234567889 |
| Order Line Dropship Supplier | Order Lines Table > Order Line Dropship Supplier | Text | The dropship suppplier assigned to fulfill the order line. This must match the name of a supplier already setup in your system. |  |  |
| Order Line Warehouse Name | Order Line Warehouse Name | Text | The warehouse assigned to fulfill the order line. This must match the name of a warehouse already setup in the system. |  | Secondary Warehouse |
| Order Line Options | Order Lines Table > Order Line Options | List | A list of options selected for the order line. These options must already be setup as options on the SKU in the system. Follow the format provided in the example. | [option_name]=[option_value] (for multiple separate with a semi colon (;). You can define the separator under admin > system setup advanced config) | Gift Wrapping=Gold;Warranty=12 Months |
| Order Line Kitting | Order Line Kitting | List | A list of SKUs and related quantities that make up a kit. For kitted / built products. Follow the format provided in the example. | [component_sku]=[component_qty];[component_sku]=[component_qty]; ... |  |
| Order Line Unit Price | Order Lines Table > Order Line Unit Price | Decimal | The unit price of each SKU on the order line. | Price | 19.95 |
| Order Line Unit Cost | Order Lines Table > Order Line Unit Cost | Decimal | The unit cost of each SKU on the order line. Used for profit reporting. | Price | 9.95 |
| Order Line Shipping Weight | Order Lines Table > Order Line Unit Shipping Weight | Decimal | The weight in KG of each SKU on the order line. | Weight (kg) | 0.25 |
| Order Line Shipping Cubic | Order Lines Table > Order Line Shipping Cubic | Decimal | The cubic volume (CM) of each SKU on the order line. | Volume | 0.001 |
| Order Line Discount Percent | Order Line Discount Percent | Decimal | The discount percentage of an order line. | Percentage (%) | 5 |
| Order Line Discount Amount | Order Lines Table > Order Line Discount Amount | Decimal | The discount amount to apply to the order line. | Price | 1 |
| Shipping Discount Percent | Shipping Discount Percent | Decimal | The discount percentage  to apply to shipping costs. | Percentage (%) | 2 |
| Order Line Tax Free | Order Lines Table > Order Line Tax Free | Boolean | If yes, the order line will be tax free. For example if the order line is a food item where tax does not apply. | Yes \| No | No |
| Order Line Delivery Date | Order Lines Table > Order Line Delivery Date | Date & Time | The customers chosen delivery date for the order line. | YYYY-MM-DD HH:MM:SS | 2017-09-20 10:22 |
| Order Line Job | Order Lines Table > Order Line Job | Text | The job assigned to the order line.  Used or reference or reporting purposes only. The job name must match a job name already setup in the system. | Name of job | Sample Job |
| Order Line Bin Location | Order Lines Table > Order Line Bin Location | Text | The order lines assigned pick bin. Used for mobile pick'n pack. | Max Length: 10 | A-01 |
| Order Line Notes | Order Lines Table > Order Line Notes | Text | Notes related to the order line. You can choose to show these to customers or not. | Max Length: 255 | Sample order line notes. |
| Skip Record | Skip Record | Boolean | If yes, the order line will be skipped during import. | Yes \| No | No |