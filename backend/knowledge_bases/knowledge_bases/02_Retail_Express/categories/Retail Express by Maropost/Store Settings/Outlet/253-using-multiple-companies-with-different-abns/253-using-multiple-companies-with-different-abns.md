---
title: "Using multiple companies with different ABNs"
articleID: 253
category: "Store Settings > Outlet"
knowledgeBase: "Retail Express"
---

# Using multiple companies with different ABNs

You can operate multiple legal entities with different ABNs (Australian Business Numbers) within **Retail Express**, enabling proper tax compliance and financial separation for businesses managing multiple companies or franchise arrangements. This configuration helps ensure invoices, receipts, and tax reporting reflect the correct legal entity and ABN for each outlet, maintaining Australian tax compliance across different business structures.

Properly configuring multiple company entities with separate ABNs helps retail operators maintain accurate tax records and legal compliance when managing franchise groups, multiple brands, or separate legal entities under one retail management system.

Retail Express has the ability to maintain a different ABN per Outlet, which makes it possible to have multiple different businesses within a single database. However, some features of the system operate on a global basis rather than individually per Outlet, meaning the settings you select will apply to all stores.

**Reminder**: An Outlet in Retail Express is a Store or Warehouse. Each individual location is referred to as an Outlet, or if POS is not required, an Unmanned Warehouse.

Read through the list below to determine if using a multi-store setup is right for your business.

|  |  |  |
| --- | --- | --- |
| **Feature** | **Global** | **Outlet Specific** |
| Purchase Orders | Global Logo i.e. same logo for all Outlets | Company Details: ABN, Address Details, Company Name, Contact numbers, Country, Comments Create POs Stock Replenishment via PO |
| Invoices and Receipts | - | Company Details: Logo, ABN, Address Details*, Company Name, Contact numbers, Country, Bank Details (A4 invoices only)** Outlet-specific comments for Invoices and Receipts e.g. Terms & Conditions *The option "Display Address on Invoice" option will need to be selected in the Outlet configuration **The option "Display Outlet specific bank details on Invoices" will need to be enabled in the POS Invoice & Receipt settings |
| Statements | Statements show transactions for *all *Outlets i.e. Statements will not display Outlet-specific transactions (and therefore unable to be run per Company/ABN) | Logo, Company Address & Contact Details can be configured to show based on the Outlet Details, rather than Global Details. The Outlet Details will display based on the Customer?s Home Outlet. The Customer?s Home Outlet can be selected at POS, and you can configure Statements to show Home Outlet Details via Global Settings. Click here to learn more about Statements. |
| Accounting Integrations | - | Each Outlet can be linked to their own individual Xero/MYOB file |
| Products | Web Price RRP Price Supplier Buy Price Max Discount Rules Fixed Price Groups (for Customer Loyalty Groups with unique pricing) Auto-Generate PO settings Prevent Disabling (i.e. allow oversell online) Disabled "Product is a Voucher" setting Loyalty Ratio | Cost Price Direct Cost Promotional Price POS Price Promotional Campaigns Inventory |
| Customers | Customers created in Back Office or during a Mass Upload are not associated with an Outlet.  Most reports are not segmented based on Customer Home Outlet | Home Outlet is automatically set to the Outlet the customer was created in during a POS transaction but can be edited manually via Customer Mass Upload. Limited reporting and search |
| Loyalty | Global Loyalty Program i.e. unable to run Company/ABN specific programs No audit reporting on points accrued at particular Outlets | - |
| Label Printing | Global settings - Label printer will need to be configured to the same computer Port number Templates are global | - |
| Newsletters | Global settings: From email address, display name, reply-to address | - |
| POS settings | All POS settings are global | - |
| Payment Types | All Payment Types are global e.g. accepted forms of Payment | - |
| POS | Searching by Invoice Number is global Gift Cards/Vouchers can be redeemed within any Outlet, not locked to a specific Outlet. | Search results in POS can be filtered by Outlet |
| Users | The same User Max Discount Rules applies to all Outlets | Access to Outlets can be restricted |

Further consideration should be given to the following features to determine how they would be handled within your business:

- Would it be likely that there would be any transactions to be transferred between different ABN/Companies e.g. invoices?
- Managing Gift Card sales and redemption between different companies (due to the liability for Gift Voucher sales)
- Currency - there is a currency multiplier in the Country settings, however, this will need to be maintained manually for accurate conversions

If you have any questions or concerns, please contact the [Support team](https://www.retailexpress.com.au/contact) so that we can discuss your options with you.