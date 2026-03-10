---
title: "User Accounts"
articleID: 234
category: "Store Settings > Users & Security"
knowledgeBase: "Retail Express"
---

# User Accounts

You can maintain proper access controls and accurate staff reporting throughout **Retail Express** by creating individual user accounts with security profile assignments, outlet access permissions, and appropriate feature restrictions for each team member. Properly configured user accounts help ensure staff can access the retail operations features they need while protecting sensitive data, with individual user tracking enabling accurate staff sales reporting and performance analysis.

Setting up user accounts correctly through individual creation or bulk Excel upload helps retail operators manage multi-store team access efficiently, ensuring each staff member has appropriate permissions for their role while maintaining security and accountability across your retail operations.

User Accounts should be created for each individual staff member accessing Back Office and POS. Each User will have unique details, including name and the Outlet/s they are associated with.

As part of the configuration, the User will be assigned to a Security Profile. The features the User can access are inherited based on the Security Profile. Users can also be reported on in various reports within the system e.g. Staff Sales Report.

To explain the different sections of user security:

|  |  |
| --- | --- |
| Profile Security | Used to create Security Profiles, and enable/disable access to Back Office functionality for each Profile. |
| POS Security | Used to enable/disable POS features for each Security Profile |
| Users | Individual logins for staff members. Each user is assigned to a Security Profile, and inherit access to different features of the system as defined in the Profile Security and POS Security areas. |

> **Note:** To access this feature you must be logged in as a User with the **Users **feature assigned to your Security Profile. If you cannot access this feature please contact your company administrative staff.

## Adding new Users

Users can be added individually, or uploaded by using a Microsoft Excel spreadsheet (useful when first initially setting up Retail Express). Click on the headings below to view detailed information on each method.

> **Note:** After Users have been created via Upload you will need to edit each User to assign the Outlets in the Outlet Access and Stock Outlet Access areas. Without these settings, the user will be unable to log into the system.

### Individual Users

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240131at90044AM.05T5g000018q60fEAA.jpg)
To add a new User:

1. Navigate to: **Staff > Users**
2. **Add information** to the fields at the top of the screen
3. Highlight the appropriate **Outlets **in the **Outlet Access List** and **Stock Outlet Access List**
4. Press **Insert**

> **Note:** Mandatory fields are highlighted with a red vertical bar on the left of the field e.g. Code.

|  |  |
| --- | --- |
| **Field** | **Information** |
| Code | Staff ID/User Code used to log into both Back Office (the admin section of Retail Express) and POS. Format is a 3-8 character alpha/numerical combination; illegal characters cannot be entered into this field (& * ~ ` : ; and ?) |
| First Name | Staff member's first name |
| Surname | Staff member's surname |
| Password | The user's password. Passwords require a minimum of 6 characters, including a number. Illegal characters cannot be entered into this field (& * ~ ` : ; and ?) |
| Email | Staff member's email address |
| Profile | The Security Profile the user is allocated to; determines the features the user can access |
| Admin User | Tick to enable the user to create Purchase Orders for Suppliers with "Admin Only Orders" selected. If "Admin User" is unticked* *any supplier with "Admin Only Orders" enabled will not be available to select when creating a Purchase Order. |
| Days Off | Text-entry field used to track basic information about the user e.g. the number of days leave taken by the user, or days the user is unavailable to work.  > **Note:** This information is displayed in the staff Commission Report. |
| Active (Enabled) | Allows the user to log into Retail Express. When unticked the user is disabled. They will not be able to log in or use any part of the Back Office or POS, and will be excluded from most reports. |
| Outlet Access List | The Outlets the user will have access to. If an Outlet is not selected the User will not be able to view reports, create sales or use any functionality for that Outlet. If the POS Security Permission "Allow the User to View All Transactions in POS" is disabled, users will be limited to only viewing transactions in POS for the Outlets selected in this list. |
| Stock Outlet Access List | The Outlets users can see the inventory levels for, including searching for products in POS, and Transfers. The user will be able to set the outlet as the Source Location for sales in POS (automatically creating a Transfer if the Fulfilment Location is different to the Source Location). |

### Multiple Users via Upload

If you have a large number of users to be added to the system, the most efficient way to enter them is by editing an Excel spreadsheet and uploading the file into Retail Express. This spreadsheet contains the following fields:

- User Code
- First Name
- Surname
- Password
- Is Admin (related to the Admin Only Orders feature for Supplier Purchase Orders)

When Users are uploaded they will be enabled by default, but require the remaining settings to be finalised before they can log in e.g. assigned a Security Profile.

> **Note:** When mass-uploading users via Excel, you can include Outlet Access, Stock Outlet Access, and Security Profile for assignment during user creation. Use "All" to set access for all outlets/stock outlets or specify outlet IDs in a comma-delimited string.

1. Navigate to: **Staff > Users > Upload Via Excel **tab
2. In **Step 1 **right-click the link and select **Save Link As **(or Save Target As, depending on which browser you're using)
3. **Save **the file
4. **Ope****n **the file
5. Click **Enable Editing **to unlock the file
6. A sample user will be displayed in the first row

> **Note:** You will need to Delete this user prior to uploading the file to avoid the user from being created in your system.

7. Update the columns for each of your Users; each User should be on a new line
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240131at113826AM.05T5g000018qAOvEAM.png)
8. You can also specify the Profile ID to allocate a profile to the user, To see/edit the features of the profile ID, Go to Staff > Profile Security > Edit Features
9. **Save **the file
10. Open **Retail Express**
11. In **Step 2 **click **Choose File**
12. Navigate to where you saved the UserTemplate file
13. Click **Upload File**
14. The file will be uploaded and checked for errors

> **Note:** If there are errors detected the information will be displayed in the Preview screen at the bottom; you will need to correct the errors and re-upload the file in step 2

15. Click **Import Excel Data** to create the users
16. Click the **Manage Users **tab
17. You will need to **Edit **each User to **finalise the settings **e.g. assign a Profile

> **Important:** Without these settings configured the User will be unable to log into the system

18. Click the **Pencil **icon for the user
19. **Update **the settings in the window at the top
20. Click **Save**

|  |  |
| --- | --- |
| **Field** | **Information** |
| Code* | Staff ID/User Code used to log into both Back Office (the admin section of Retail Express) and POS. Format is a 3-8 character alpha/numerical combination; illegal characters cannot be entered into this field (& * ~ ` : ; and ?) |
| First Name* | Staff member's first name |
| Surname* | Staff member's surname |
| Password* | The user's password. Passwords require a minimum of 6 characters, including a number. Illegal characters cannot be entered into this field (& * ~ ` : ; and ?) |
| Email* | Staff member's email address |
| Profile | The Security Profile the user is allocated to; determines the features the user can access |
| Admin User* | Tick to enable the user to create Purchase Orders for Suppliers with "Admin Only Orders" selected. If "Admin User" is unticked* *any supplier with "Admin Only Orders" enabled will not be available to select when creating a Purchase Order. |
| Days Off | Text-entry field used to track basic information about the user e.g. the number of days leave taken by the user, or days the user is unavailable to work. |
| Active (Enabled) | Allows the user to log into Retail Express. When unticked the user is disabled. They will not be able to log in or use any part of the Back Office or POS, and will be excluded from most reports. |
| Outlet Access List | The Outlets the user will have access to. If an Outlet is not selected the User will not be able to view reports, create sales or use any functionality for that Outlet. If the POS Security Permission "Allow the User to View All Transactions in POS" is disabled, users will be limited to only viewing transactions in POS for the Outlets selected in this list. |
| Stock Outlet Access List | The Outlets users can see the inventory levels for, including searching for products in POS, and Transfers. The user will be able to set the outlet as the Source Location for sales in POS (automatically creating a Transfer if the Fulfilment Location is different to the Source Location). |

* Available in the Excel upload file

## Edit an existing User

The bottom half of the screen lists Users that have already been created within the system.

By default, only **Active **user accounts are displayed. Change the **Display **drop-down to toggle whether Inactive users are displayed.

![mceclip1 - 2023-07-10T040825.462.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppirtEAA.jpg)
To edit a user:

1. Click the blue **pencil **(edit) icon for the user ![mceclip3 (71).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiryEAA.jpg)
2. **Update** the details as required
3. Click **Reset Password** to enter a new password for the user
4. Click **Save**

> **Note:** When creating or updating Users the mandatory fields of Code, First Name, Surname and Password must be completed. Passwords also require a minimum of 6 characters, including a number.

|  |  |
| --- | --- |
| **Field** | **Information** |
| Code | Staff ID/User Code used to log into both Back Office (the admin section of Retail Express) and POS. Format is a 3-8 character alpha/numerical combination; illegal characters cannot be entered into this field (& * ~ ` : ; and ?) |
| First Name | Staff member's first name |
| Surname | Staff member's surname |
| Password | The user's password. Passwords require a minimum of 6 characters, including a number. Illegal characters cannot be entered into this field (& * ~ ` : ; and ?) |
| Email | Staff member's email address |
| Profile | The Security Profile the user is allocated to; determines the features the user can access |
| Admin User | Tick to enable the user to create Purchase Orders for Suppliers with "Admin Only Orders" selected. If "Admin User" is unticked* *any supplier with "Admin Only Orders" enabled will not be available to select when creating a Purchase Order. |
| Days Off | Text-entry field used to track basic information about the user e.g. the number of days leave taken by the user, or days the user is unavailable to work. |
| Active (Enabled) | Allows the user to log into Retail Express. When unticked the user is disabled. They will not be able to log in or use any part of the Back Office or POS, and will be excluded from most reports. |
| Outlet Access List | The Outlets the user will have access to. If an Outlet is not selected the User will not be able to view reports, create sales or use any functionality for that Outlet. If the POS Security Permission "Allow the User to View All Transactions in POS" is disabled, users will be limited to only viewing transactions in POS for the Outlets selected in this list. |
| Stock Outlet Access List | The Outlets users can see the inventory levels for, including searching for products in POS, and Transfers. The user will be able to set the outlet as the Source Location for sales in POS (automatically creating a Transfer if the Fulfilment Location is different to the Source Location). |

## Activate/Deactivate a User Account

When a user no longer requires access to Retail Express they can be deactivated. This will preserve their data (including sales) but will prevent them from logging in.

To deactivate a user:

1. Click the blue **pencil **(edit) icon for the user ![mceclip3 (72).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppis3EAA.jpg)
2. **Untick **the **Active (Enabled) **field
3. Click **Save**

![mceclip0 - 2023-07-10T040842.664.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppis8EAA.jpg)
To reactivate a user:

1. From the **Display **drop-down at the top of the user table select **Inactive Users Only**
2. A list of the inactive users will be displayed
3. Click the blue **pencil **(edit) icon for the user
4. **Tick **the **Active (Enabled) **field
5. Click **Save**

![mceclip1 - 2023-07-10T040848.347.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppisXEAQ.jpg)

## []()Frequently Asked Questions

[User cannot see specific Outlets when running Reports](https://galaxy.maropost.com/kb/articles/234-user-accounts#user-outlets)

If you're unable to view specific Outlets when running reports or Transfers, it's likely the user doesn't have access to that specific Outlet.

You will need to edit the User to add the outlet to the Outlet Access List as per the steps above.