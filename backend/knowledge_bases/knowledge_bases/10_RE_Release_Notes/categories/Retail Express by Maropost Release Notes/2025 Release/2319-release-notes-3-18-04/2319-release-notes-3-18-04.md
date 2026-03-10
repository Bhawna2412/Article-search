---
title: "Release Notes 3.18.04"
articleID: 2319
category: "2025 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-10-30
---

# Release Notes 3.18.04

Release 3.18.04 was released to all users throughout September/October 2025.

## **Coming Soon – Back Office Login Update**

**Unified Login - **We’re introducing a refreshed login experience for Back Office as part of the **Maropost Unified Login** initiative. These changes will be launching soon and is designed to streamline access across multiple Maropost platforms and lay the groundwork for future enhancements like *multi-factor authentication.*

Your current login credentials will remain the same, and while the interface may look a little different, we’ll provide clear instructions to guide you through the change.

No action is needed just yet — more details will be shared as we get closer to launch. Keep an eye out for notifications! [View More Details](https://galaxy.maropost.com/kb/articles/2323).

## **POS Enhancements**

**POS – Sign-Up Reminder Prompt & Configuration - **A configurable setting has been added to Settings > POS Settings > Customer Settings that allows businesses to automatically display a “Sign-Up Reminder” prompt when saving new customers. 

This modal helps staff remember to ask about email, SMS, and loyalty sign-ups. The reminder can be turned on or off as needed.

![image.png](https://us.v-cdn.net/6038474/uploads/CPRKF4HMCPW8/image.png)
When enabled, the popup below will appear in POS whilst creating/saving a new csutomer record.

![image.png](https://us.v-cdn.net/6038474/uploads/04ID9QMB0834/image.png)
**Loyalty Enabled for New Customers – Default Setting - **A new option under POS Settings > Customer Settings lets you control whether new customers are automatically marked as Loyalty Enabled on creation. 

Your chosen default (enabled or disabled) is applied consistently in both POS and Back Office. (Mass Uploads are excluded, as loyalty can already be controlled via the upload file.)

![image.png](https://us.v-cdn.net/6038474/uploads/8IHW8BAOK1B2/image.png)
**Default Invoice Comments – Character Limit - **A character limit of 8,000 has been applied to the Default Invoice Comments field in POS Settings to prevent errors when creating sales. Users will now see a clear error message if the limit is exceeded.

**POS Email Subject Line - **Resolved an issue to ensure that emails sent from POS use the subject line entered for the sale instead of the pre-defined template subject, ensuring the email reflects the intended context.

## **Report & Export Enhancements**

**Item Detail Export – Include Attributes & New Fields - **Custom Attributes: New “Include Attributes” option allows up to 8 custom product attributes to be exported as separate columns. New Date Fields: First Received and Last Received added to provide product history.

![image.png](https://us.v-cdn.net/6038474/uploads/QVJ8CRPQJYDY/image.png)
**Sales Performance Summary Report – Inconsistent Results - **Resolved an issue where calculations could be incorrect in certain cases. Updated logic to exclude ITO (Internal Transfers) from the Qty Received Calculations to ensure consistency.

**Customer Mass Download – Outlet Filter Fix - **Filtering by outlets with special characters (e.g., +) now works correctly. While the UI preview may previously have shown no results, the download file now consistently returns the expected customers.

## **Back Office General Enhancements & Resolutions**

**Product Type Editing – Cursor/Page Focus Fix - **When renaming a product type or attribute, the system now keeps the edited item in view instead of returning to the top of the list, making it faster and easier to work through long lists.

**PO Items – Prevent Qty Change if In-Progress Receipt Exists - **To prevent errors during stock receipts, PO item quantities can no longer be adjusted from the PO Item grid if the item is already included in an in-progress receipt. 

A clear message is displayed: “Unable to adjust Qty. Item exists on an In-Progress receipt.” New items can still be added to the PO, and quantities can be changed once the receipt is cancelled or completed.

**Purchase Order Manager – Error when Tab Character Exists - **Searching by PO No in Purchase Order Manager now ignores tab characters, preventing the “Oops, something has gone wrong” error and ensuring valid POs are correctly returned.

**Purchase Order PDF Sort Order Setting**

New setting added within *Settings > PO/Supplier Return Settings > Purchase Order Settings*, enabling configuration of how line items are sorted. Options include PO Item ID (as entered), Product ID, Supplier SKU, Style Code, and more, each with ascending or descending order.

Purchase order PDF documents and exports now respect this setting, ensuring consistent and compliant ordering for supplier requirements.

## **API Enhancements**

**POST /products – Return Product ID - **When creating a new product via the /products endpoint, the response now includes the newly created product ID, reducing the need for additional API calls and improving efficiency for developers.

**API – Shopify Publish for Customers - **Customers created via the /customers API now correctly respect the Back Office Default Publish to Shopify settings. The existing parameter to set Shopify publish status during creation or updates now functions as expected.

**SOAP API – External Reference Handling - **Fix for External Reference Field: Updating private comments via the OrderUpdateCustomerDetails API no longer clears the order’s External Reference field. Behavior Update: The external reference is only cleared if an empty value is explicitly passed in the request. Parameters not included in the request are now correctly ignored, preventing unintended data loss.