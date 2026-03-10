---
title: "Release Notes 3.17.06"
articleID: 600
category: "2024 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-11-29
---

# Release Notes 3.17.06

### **Gift Voucher Re-Printing from POS**

Users now can re-print a voucher directly from the voucher lookup screen within the POS system. This new feature includes displaying the voucher’s “current remaining value” at the time of printing, ensuring accurate and up-to-date information.

Furthermore, users can print via the thermal document printer (if configured) or an A4 document printer, providing flexibility based on available resources and specific needs. Additionally, for those who need to review the original sale or voucher details further, we’ve added a shortcut to “open the sale” directly from the voucher lookup screen.

## User-added image

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/112.05TJ100000ONBZOMA5.png)  

For more information regarding Gift Vouchers, please click [here](https://galaxy.maropost.com/s/article/Create-a-Gift-Voucher-or-Credit-Note)

## **Authentication Enhancements:**

We are implementing several key authentication enhancements.designed to improve the security of user access and data handling processes. The key updates include:

* **Account Locking:** Accounts will be automatically locked after a predefined number of failed login attempts to prevent unauthorized access.

  + Account locking will occur for repeated failed logins via all forms of authentication including Backoffice, POS, Offline POS, and API access.
  + User accounts will be locked after 5 failed login attempts (POS allows for up to 10 failed login attempts to account for inadvertent authentication attempts when tabbing between fields).

* **Email Notifications:** System Admins will receive an email notification for any account lockout, ensuring immediate attention to suspicious activity. Notifications will be sent to a new system email address configured in **Global Settings > System Email Notifications.**  
    
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240918at115634PM.05TJ100000Fs0nkMAB.png)  
    
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Untitleddesign111.05TJ100000Fs2EIMAZ.jpg)
* **Session Auto-Logout** ***:*** Back Office Session expiry is now reduced from 3 days to 1. This means a user will be required to login after a 24 hour period since their last sign-in.”
* **Export Download Manager Access Rules:** Users will only have access to reports in the Download Manager if they have the required permissions at the time of opening the export download manager. If permissions have been revoked to a given report that the user previously could access, the associated reports will no longer be visible or downloadable.  
    
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240918at115852PM.05TJ100000Fs0nIMAR.png)  
    
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240919at121118AM.05TJ100000Fs0zWMAR.png)

These security enhancements ensure better control over user access, reduce the risk of unauthorized logins, and improve the overall safety of the system.

## **Bug Fixes and Performance Enhancements**

* PO Items - Resolved an issue where adding products to an On-Order PO was assigning Outlet Specifc POS Pricing unnecessarily.
* Resolved an issue with POS - Advanced Search Filter controls.
* Re-instated the ability to sort by any/all column headers within the results of the Product Search and Management feature.
* Resolved theissue where enabling the Dialpad widget interfered with the “copy across” functionality in Transfer Management pages.
* **REST API Enhancement** - GET /inventory endpoint has been extended to include support for filtering, and ordering, by MSL qty. For full details please review the API Documentation.

## 

📋 Hotfixes

* **MYOB Integration:** Resolved an issue where unapplied credit values were inconsistent between MYOB and Retail Express, ensuring accurate accounting data synchronization.
* **Shopify Integration:** Fixed an intermittent error occurring when accessing the Shopify integration page, improving reliability and reducing dependency on incognito mode.
* **Customer Account Statements:** Optimized bulk generation of Customer Account Statements to prevent timeout errors and enhance report generation performance.
* **EDS Notifications :** Optimized the EDS Notifier Service to address the issue of missing logs and restore notifications.
* **Stock List Export:** Corrected issues in the Stock List export where certain SKUs appeared only when "Show Disabled Products" was selected, ensuring consistent reporting.
* **PO Report**: Improved performance to ensure faster and smoother generation of Purchase Order reports, resolving timeout issues.
* **PO Advanced Search:** Resolved a 500 error occurring when accessing Advanced Search in the PO Items tab, ensuring smoother navigation and functionality.
* **Xero Integration:** Upgraded the integration with Xero to support updated file naming conventions and API changes, ensuring compatibility with new and existing plans.
* **Inventory Allocation:** Fixed an issue where changing fulfillment locations caused incorrect inventory allocation due to sequence errors in updates and fulfillment.
* **PO Cancellation During Stock Receipt:** Implemented validation to prevent cancellation of PO items when a stock receipt is in progress, ensuring data consistency and accurate stock management.
* **REST API Enhancement**: Enhanced response times for user data, making it quicker and more efficient to handle large datasets.