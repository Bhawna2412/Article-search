---
title: "Edit Products – User Permissions"
articleID: 555
category: "POS > Products"
knowledgeBase: "Retail Express"
---

# Edit Products – User Permissions

You can configure role-based product access controls in Retail Express to ensure product data integrity while enabling appropriate staff members to manage inventory and pricing information for their assigned locations. This capability helps protect critical product information while maintaining operational flexibility, which is particularly valuable for multi-store retail operations where different staff roles require different levels of product management access.

Setting up proper user permissions for product editing enables your retail operations to maintain data governance while empowering store managers and regional staff to handle location-specific pricing and inventory adjustments efficiently. This helps optimize retail operations by ensuring the right team members can access the right product information while maintaining centralized control over master product data.

Maintaining the integrity of products and packages is a crucial aspect of your business; therefore, you must maintain control over who can see and edit this information. Retail Express provides five profile security features that aid you in setting up role-based access when managing products and packages.

## Profile Security Features for Managing Products and Packages

> **Note:** These features will be available to all customers by the end of July 2023.

If you are a business with multiple outlets or various staff profiles, you’ll come across scenarios where you want to permit or restrict certain actions or information for your staff based on their duties.

For example, you may want to prevent a user role from having access to edit products whilst retaining access to view product information. In another example, you may want to permit access to view and edit product details but only for their assigned outlets.

There is also a separation between Creating Products and Editing Products, via independent security profile options to allow governance over new product creation processes combined with editing and maintenance responsibilities.

Within the new profile options, is an outlet restriction override "Access All Outlets". The inventory, pricing, and audit pages now only show the logged-in user's "assigned outlets" by default. However, any user with the "Access All Outlets" option enabled will continue to see all outlets, irrespective of their assigned outlets which are in line with the existing/legacy behaviour.

The below-related user profile permissions can be combined in a number of ways to support a variety of scenarios:

- **Create Products/Packages**: Allows the users to create products and packages.
- **Edit Product/Package Master Details**: Allows the users to edit product and package master details.
- **Edit Product/Package Outlet Specific Detail**: Allows the users to view and edit outlet-specific details limited to the assigned outlets only.
- **Edit Product - Access All Outlets**: Allows the users to view and edit all outlet-specific details regardless of assigned outlet access.
- **View Products/Packages**: Allows the users to view products and packages but doesn't allow editing.

### View vs Edit Mode

The Edit Product/Package pages are displayed in view-only mode by default. A user who has access to edit either the master, outlet details, or both, will need to unlock the page by clicking the new **Edit Product** button in the footer.

The workflow is designed to prevent accidental changes and gives users the flexibility to cancel before saving any changes.

> **Note:** If a user profile doesn't have edit permission, the **Edit Details** button on the **Product Details** page is disabled/greyed out for those users. Similarly, a user profile without the "Access All Outlets" profile feature, can only see and edit their assigned outlets.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditDetailsBehavior.05T5g00000pp7D3EAI.gif)
The following table discusses the actions permitted on the Product Details page by each of these Profile Security Features. You can combine permissions to cover a variety of scenarios to suit your needs.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Security Profile Features** | **Product Details Page** |  |  |  |  |  |
| **Main tab** | **Pricing tab and Inventory tab** | **Other tabs** |  |  |  |  |
| **Can View** | **Can Edit** | **Can View** | **Can Edit** | **Can View** | **Can Edit** |  |
| **'Edit Product/Package Master Details' Only** | Yes | Yes | Yes | No | Yes | Yes |
| **'Edit Product/Package Outlet Specific Detail' Only** | Yes | No | Yes - Their Assigned Outlets Only | Yes - Their Assigned Outlets Only | Yes | Yes |
| **'Edit Product - Access All Outlet' Only** | Yes | No | Yes - All Outlets | Yes - All Outlets | Yes | Yes |
| **'View Products/Packages' Only** | Yes | No | No | No | Yes | Yes |

### Access to Mass Upload Feature

The permissions also play a role in determining a user's access to the Mass Upload functionalities. If a user doesn't have access to **Edit Product Master**, then they cannot upload the **Product Master** worksheet of their product or the Purchase Order upload file.

Without the right access, the Product Master worksheet and Purchase Order upload file are ignored and the subsequent worksheets will proceed if they have the required **Edit Outlet Details** access.

Notes

:

- This includes changes to existing items but also new items within the product master.
- For mass upload purposes, editing products is coupled with creating new products because both new and existing products can exist in the same worksheet. If a user has access to edit master details, they can also create products as well - but only via mass upload mechanisms.
- Only users with access to Edit Product Master Details can apply changes to existing products via the product master worksheet when uploaded.

## Updating Profile Security Features

To update the security profile features, go to Security Profiles (**Staff** > **Profile Security**), and then for the desired profile, click **Edit Features**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SecurityProfileNav.05T5g00000pp7K4EAI.png)
Then, from the list of features, select or deselect the features for the user profile based on their access needs.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/productssecurityprofilefeatures.05T5g00000pp17cEAA.gif)
To learn about creating new profiles and enabling/disabling features, see Using Profile Security to Enable Back Office Features.

## Implementation Scenarios

In most cases, you'll use these profile security features in combination to give your staff the intended access. Check out some of the implementation scenarios discussed below:

**Scenario 1**: The user profile is an Assistant Manager for a regional clothing brand that owns multiple outlets. As part of their job, they will need to create and edit products as well as view and edit the pricing and inventory information for all the outlets.

Therefore, the role must have:

- Create Products/Packages
- Edit Product/Package Master Details
- Edit Product/Package Outlet Details
- Edit Product - Access All Outlet

**Scenario 2**: The user profile is a Store Manager in one of the outlets for a sporting goods retailer. As part of their job, they will not need to create new products but will need to view and edit pricing and inventory information for their store.

Therefore, the role must have:

- Edit Product/Package Outlet Specific Details