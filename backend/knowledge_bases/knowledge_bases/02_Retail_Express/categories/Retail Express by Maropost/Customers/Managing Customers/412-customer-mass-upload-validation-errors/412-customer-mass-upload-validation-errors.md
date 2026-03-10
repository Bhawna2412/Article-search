---
title: "Customer Mass Upload Validation Errors"
articleID: 412
category: "Customers > Managing Customers"
knowledgeBase: "Retail Express"
---

# Customer Mass Upload Validation Errors

You can troubleshoot customer mass upload validation errors to successfully import customer data, helping resolve common data issues and complete bulk customer updates. This improves your retail operations by providing error resolution guidance, with proper validation error handling typically reducing time spent on import troubleshooting and improving data quality.

Understanding validation errors involves recognizing common error types, correction procedures, and data quality requirements to help retail operators focus on the right import troubleshooting workflows, ensuring your retail strategy consistently drives better bulk data management efficiency and accuracy outcomes.

When using the Customer Mass Upload, you may encounter validation errors if there's a problem with your data. Below we've covered the most common errors and how to resolve them.

## Error Types

Errors detected during the upload are grouped into the following types:

|  |  |
| --- | --- |
| **Error** | **Details** |
| Invalid Values | This section displays any entered content that doesn't meet field requirements e.g. invalid characters in a Customer Name. The row for each error is listed so you can find the row in the upload, although you can correct the data directly on the screen. Click on the value to edit the entry, or remove the value from the upload by ticking "Clear Data" |
| Invalid Options | Fields that don't match the configuration of existing options within your Retail Express database e.g. Customer Type names.  All rows with the same invalid option are grouped so you can bulk update them all together by selecting from an available option from the drop-down. If you need to create a new Option, you'll need to do that within Retail Express before re-uploading the file. |
| Duplicate Mobile/Duplicate Emails | Highlights any errors with duplicate data that may result from uploading the file. |

## Field Errors and Resolutions

Click hereto view Customer Upload field requirements e.g. max character length.

|  |  |  |
| --- | --- | --- |
| **Field** | **Errors** | **Resolution** |
| Field Lengths (all columns on the upload) | (Field Name) cannot be more than x characters. | Amend the value to be less than the maximum number of characters. Refer to the Customer Mass Upload Field Requirements article for a list of field lengths. |
| CustomerID | Customer with Customer ID already exists in the file | You have duplicate customers in the file - select which record you need to keep and click "Keep this row" |
| Customer with Customer ID was not found | The Customer ID field is a system-generated number to identify existing customer records. Either enter a correct ID to update an existing customer or re-upload your file and enable "Upload includes new Customers" on the Map Fields screen. |  |
| Customer Number | Customer with Customer Number already present in file Customer with Customer Number already exists | Your upload file contains a duplicate Customer Number code - select which row to keep. |
| Customer with Customer Number not found | Check the Customer Number and reenter a valid number. |  |
| First Name | Customer First Name is required | The First Name is a mandatory field for all new customers. Amend the value to enter a valid First Name. |
| Mobile | Customer with Mobile (number) already exists | Prevents you from uploading duplicated data.  If you have enabled the Prevent Duplicate options for Mobile Phone Numbers, you will be warned when there is a duplicate detected within the upload data. To resolve the issue either select which row to keep. |
|  | Invalid Options | Prevents you from uploading duplicate data. If you have an existing customer in the Retail Express database with this information, you can either change the value on the upload or remove the information from the upload. |
| Email Address | Invalid Email Address | The email address format is incorrect. Check the email address and correct the data e.g. [www.gmail.com](http://www.gmail.com) is not a valid email address. |
| Customer with Email (email address) already exists | Prevents you from uploading duplicated data.  If you have enabled the Prevent Duplicate options for Emails, you will be warned when there is a duplicate detected within the upload data. To resolve the issue select which row in the upload should be kept. |  |
| Invalid Options | Prevents you from uploading duplicate data. If you have an existing customer in the Retail Express database with this information, you can either change the value on the upload or remove the information from the upload. |  |
| Customer Type | Customer Type with name (name) was not found | Select an existing value from the drop-down field, or create a new custom Customer Type and retry the upload |
| Date of Birth | Invalid dates - i.e. Date of Birth is longer than 120 years ago or in the future | The data in the field isn't within the date range or is in the wrong format e.g. "Aug". Enter a valid Date of Birth value in one of the following formats:  - d/mm/yy - d/mm/yyyy - yyyy-MM-dd |
| DateOfBirthWithheld ReceiveEmail ReceivePost ReceiveSMS LoyaltyEnabled LoyaltyAutoPriceGroup AccountCustomerStopCredit | Invalid Boolean value | The value entered in the field is invalid. Select from the True/False drop-down to select to enable or disable the option. |
| Bill Country Del Country | Bill Country with (name) was not found | Must be a valid country name (no abbreviations etc) |
| PriceGroup FixedPriceGroup | Price Group (name) was not found | The name entered doesn't match the name of a Price Group in Retail Express. Update the value on the validation screen to a correct Price Group. |
| AccountCustomerTerms | Account Customer Terms must be set to 0, 30, 60 or 90 | If a customer has been enabled as an Account Customer, the Account Terms must be either 0, 30, 60 or 90 days. Select from one of the options in the drop-down. |
| AccountCustomerLimit | Account Customer limit must be greater than or equal to 0.00 | If the customer has been enabled as an Account Customer, there must be a credit limit specified of 0 or more. Negative limits are not allowed. Click the value field to correct the value. |
| Survey:(name) | Survey (question) with (answer) does not exist Survey (question) does not exist | The information doesn't match one of the Surveys/Survey Answers in Retail Express. Select a valid option from the drop-down. |
| LoyaltyPointsAvailable | Loyalty Points Available cannot be less than zero | If you have a Loyalty Points balance in the negatives, you will need to update the Points Available to be 0 or more, or select "Clear Data" to ignore this field in the upload. |