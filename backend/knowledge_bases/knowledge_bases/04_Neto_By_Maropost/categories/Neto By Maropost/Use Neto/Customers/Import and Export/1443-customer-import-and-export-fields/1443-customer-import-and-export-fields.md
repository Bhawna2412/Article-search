---
title: "Customer Import and Export Fields"
articleID: 1443
category: "Use Neto > Customers > Import and Export"
knowledgeBase: "Neto By Maropost"
---

# Customer Import and Export Fields

| Field Name | Field Type | Field Description | Field Length | Example Data |
| --- | --- | --- | --- | --- |
| Username* | Text String | The name the user can use to log into your website. Required field. By default, the username is limited to 15 characters, however it can be increased up to 25 characters. The reason why it’s set to 15 characters is due to some accounting integrations. | 15 | JohnSample |
| Password | Text String | Password the customer can use to login to their account. This can’t be an encrypted password. 			Import only, cannot be exported. | 100 | lkdshj763! |
| Password Encrypted By Other System | Text String | Deprecated field. Do not use. | 32 | 80aa4f7be2ad93fcd91c9a36f28f34e5 |
| Bill Company | Text String | This customer’s company name. | 50 | Acme Co Pty Ltd |
| Website URL | Text String | Customers website URL | 250 | www.mydomain.com |
| Bill First Name | Text String | This customer’s first name. | 30 | John |
| Bill Middle Name | Text String | This customer’s middle name. | 30 | Thomas |
| Bill Last Name | Text String | This customer’s last name. | 30 | Smith |
| Bill Full Name | Text String | Import the full name of the customer. Everything up to the first space character is the first name (limit of 30 characters) and everything after the space is imported into the last name (limit of 30 characters). | 61 | John Smith |
| Email Address | String | The primary email address associated with this user. This needs to be a unique email address for this customer. | 50 | johnsmith@acme.com |
| Secondary Email Address | Comma Separated Email List | Copies of all orders, quotes and invoices will be send to these email addresses. | 250 | johnsmith@hotmail.com, js@mydomain.com |
| Bill Phone | Text String | The customer’s primary phone number. | 30 | 07 3420 8434 |
| Bill Fax | Text String | The customer’s fax machine number. | 30 | 07 3420 8422 |
| ABN/ACN | Text String | Australian business number or company number. Often used to verify customer for wholesale businesses. | 250 | 999 9999 999999 |
| User Group | String | The customers user group. User groups can be used to determine a customers price level and what pages or categories they can access throughout the system. Can use the group code or group name. | 50 | A |
| Classification 1 | Text String | You can add classification options via **Settings & Tools** > **All Settings & Tools** > **Customers** > **Customer Classification One**. | 20 | VIP |
| Classification 2 | Text String | You can add classification options via **Settings & Tools** > **All Settings & Tools** > **Customers** > **Customer Classification Two**. | 20 | Small Business |
| Permission | Text String | The customers permission type. **Quote**, **Admin**, **POS** or **Store**. These permissions can be used to show or hide content on your website front end. This may require customising your website front end templates (dependent on the theme you are using). | 22 | Admin |
| Default Order Type | Text String | The default order type for new orders created for this customer. Options are: **Sales** or **Dropshipping**. The system will default to Sales. | 14 | Sales |
| Account Manager | Text String | The customers account manager. This must match the username of a staff user you have already setup in the system when importing. Exports the account manager first and last name. | 25 | admin |
| Sales Channel | Text String | The sales channel that the customer was acquired through. For reporting purposes only. | 15 | eBay |
| Gender | Text String | The gender of the customer (M, F or U) | 1 | Male |
| Date Of Birth | Date | The customer’s date of birth in the format YYYY/MM/DD or YYYY-MM-DD. | 10 | 1981/02/16 |
| Identification Type | Text String | The type of document that is used as identification for this customer. |  | Drivers Licence |
| Identification Value | Text String | A value assigned to this document that can uniquely identify the customer. | 25 | 111 222 333 |
| Internal Notes | Text String | Internal notes for your reference only. |  | Contacted us at trade show. |
| Active | Boolean | If **Yes**, the customer is active. Only active customers can login to their online accounts. | 3 | Yes |
| VIP Customer | Boolean | Whether or not the user is a VIP. | 3 | Yes |
| Type | Text String | The type of customer. Options are **Customer** or **Prospect**. Customers with at least 1 sale are automatically changed to the type **Customer**. | 8 | Prospect |
| Newsletter Subscriber | Boolean | If **Yes** customer has agreed to receive email newsletters. | 3 | Yes |
| Skip Record | Boolean | If **Yes**, the customer will be ignored during import. | 3 | No |
| Bill Street Address Line 1 | Text String | The main billing address for the customer. | 50 | Unit 3 |
| Bill Street Address Line 2 | Text String | Optional. The main billing second address line for the customer. | 50 | 123 Main St |
| Bill City | Text String | The primary billing suburb or city for the customer. | 50 | South Brisbane |
| Bill State | Text String | The primary billing state or territory for the customer. | 50 | QLD |
| Bill Post Code | Text String | The primary billing postal code for the customer. | 15 | 4101 |
| Bill Country | Text String | The main billing country for the customer. Use the [2 letter ISO 3166-1 country codes](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes). | 2 | AU |
| Default Ship Address | Number | The ID number of the default shopping address. When a shipping address is created, it generates a unique ID number | 39 | 1 |
| Ship Address Book Title | Text String | The title of the address in the address book. When importing multiple shipping addresses, this must be a unique value for all customers. We recommend prefixing the title with the customer’s username. To import multiple shipping addresses, list each address on a separate line in the import file. | 255 | Home Address |
| Ship Address Residential | Boolean | If **Yes**, the shipping address is a residential address. | 3 | Yes |
| Ship Company | Text String | The company name to associated with this shipping address. | 255 | Acme Co Pty Ltd |
| Ship First Name | Text String | The first name to associated with this shipping address. | 50 | John |
| Ship Last Name | The last name to associated with this shipping address. | 50 | Smith |  |
| Ship Address Line 1 | Text String | The shipping address line for this address. | 50 | Unit 10 |
| Ship Address Line2 | Text String | Optional. The second shipping address line for this address. | 50 | 12 Lilly Street |
| Ship City | Text String | The suburb or city for this shipping address. | 50 | Capalaba |
| Ship State | Text String | The state or territory for this shipping address. | 50 | QLD |
| Ship Post Code | Text String | The postal code for this shipping address. | 50 | 4157 |
| Ship Country | The country for this shipping address. Use the [2 letter ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes). | Text String | 2 | AU |
| Ship Phone | Text String | The phone number associated with this shipping address. | 30 | 07 3214 5236 |
| Ship Fax | Text String | The fax machine number associated with this shipping address. | 30 | 07 3214 5237 |
| Referral Username | Text String | Deprecated. This is the customer that referred this customer to your business. Used for running an affiliate program. The customers username is exported. | 25 | BillGates56 |
| Referral Commission | Number | Deprecated. The commission the customer earns for referring other customers. This is in addition to the commission specified on products. Expressed as a percentage. | 6 | 20.00 |
| Default Document Template | Number | The ID number of the Invoice Template Set. The document template set that is used for this customer by default. Used to apply a specific invoice design to a specific customer. |  | 2 |
| Default Invoice Terms | Text String | Customers default invoice terms. See **Settings & Tools** > **All Settings & Tools** > **Payments & Tax** > **Payment Terms** to setup new invoice terms. | 50 | Net 30 |
| Default Discount Percentage | Number | If specified the customer will receive this percentage off all orders automatically. | 5 | 20 |
| Cheque Account Name | Text String | Name of the customer’s bank. | 50 | Bank Name |
| Cheque Account BSB | Text String | Deprecated - Do not use | NA | NA |
| Cheque Account Number | Text String | The customers BSB and bank account number separated with a hyphen. | 20 | 000123-999988888 |
| Credit Limit | Number | Customers credit limit. If populated customers will receive the option to pay on account. | 9 | 10000.00 |
| On Credit Hold | Boolean | If **Yes**, the customer cannot place orders on your website. | 3 | No |
| Parent Username | Text String | The customers parent customer username. Used for reporting purposes. | 25 | JaneSample90 |
| Quote Approval Username | Text String | The customers quote approver username. Requires quote approver addon. | 25 | T.Wilkins |
| Custom Field #(1 to 30) | Text String or Boolean | These fields can be named anything and will appear in the user interface once added. | 1 - 255 | Anything |