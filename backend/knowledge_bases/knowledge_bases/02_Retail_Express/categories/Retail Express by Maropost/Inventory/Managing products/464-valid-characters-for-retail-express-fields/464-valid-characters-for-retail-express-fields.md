---
title: "Valid Characters for Retail Express Fields"
articleID: 464
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Valid Characters for Retail Express Fields

You can ensure data integrity and prevent system errors through understanding valid character requirements for **Retail Express** fields, particularly for product codes, customer information, and other critical data entry areas. This data quality awareness helps retail operators avoid data import issues and barcode scanning problems, with proper character usage typically reducing system errors and improving operational reliability across Australian retail operations.

Valid character guidelines in **Retail Express** help retail operators maintain clean data that supports reliable barcode scanning, seamless integrations, and accurate data processing throughout retail operations. Understanding character restrictions helps ensure your retail operations establish data standards supporting system stability and preventing common data-related issues.

Retail Express only allows certain characters and symbols in various fields within the system. If you try to use a character other than these, you may encounter an error. Typically, non-valid characters are referred to as "illegal characters".

> **Note:** Want to know how many characters you can have in each field? View the Field Character Limits article to find out.

## Valid Characters

To see details for specific fields, please refer to the table below.

|  |  |
| --- | --- |
| **Field** | **Character** |
| Supplier SKU* | Alphanumeric eg. a-z, A-Z, 0-9 Underscore _ hyphen -  forward slash / plus +  period/full stop . |
| Manufacturer SKU* | Alphanumeric, with a maximum of 20 characters eg. a-z, A-Z, 0-9 |
| Barcodes (additional product barcodes) | Alphanumeric eg. a-z, A-Z, 0-9 Hyphen -  Forward slash / |
| Descriptions* | Alphanumeric eg. a-z, A-Z, 0-9 Forward slash / **Not allowed: ** Quotes " Apostrophes '  Back slash \ Non-western characters |
| Outlet Names | Alphanumeric eg. a-z, A-Z, 0-9 **Not allowed: ** Quotes " Apostrophes '  Back slash \ Forward slash / Non-western characters |
| Attributes* | Alphanumeric eg. a-z, A-Z, 0-9 Underscore _ Hyphen - Forward slash / Plus +  Period/full stop . |
| XML | If using XML through the API integrations, you will need to ensure that your fields **do not contain: ** Less than < More than >  Any special characters e.g. ¬«?¨????Ž?'€?????????¥????™?????š??á... ƒ?„†'‡Š‚ˆ ‰?¡Œ‹?¤•¢"?"ö?-£-???˜ |

* These restrictions also apply when updating these fields via Mass Upload

## Frequently Asked Questions

[What does an "illegal character" error in the Mass Upload process mean?](https://galaxy.maropost.com/kb/articles/464-valid-characters-for-retail-express-fields#mass-upload-illegal)

Illegal characters used in a Mass Upload Excel spreadsheet will advise with an error similar to the below. the Row and Column affected are indicated within the error details.

To resolve the issue remove the illegal characters and try uploading the file again.![Valid characters for Retail Express fields.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000qWr60EAC.jpg)