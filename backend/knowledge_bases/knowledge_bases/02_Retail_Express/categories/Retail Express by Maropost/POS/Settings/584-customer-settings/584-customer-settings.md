---
title: "Customer Settings"
articleID: 584
category: "POS > Settings"
knowledgeBase: "Retail Express"
---

# Customer Settings

You can configure customer management behavior in Retail Express to control how customer data is captured and maintained across your operations, helping your retail team build comprehensive customer profiles efficiently. This capability allows you to define required fields, default values, and data validation rules for customer records, which helps ensure consistent, high-quality customer information across all store locations.

Setting up proper customer settings enables your retail operations to standardize customer data collection while accommodating business-specific information needs, helping optimize customer relationship management. This helps retail businesses maintain accurate customer records that support personalized service and effective customer communication strategies.

Customer Settings allows you to manage your mandatory requirements for customer information and behaviour at POS. For example, you can determine whether to allow for duplicate customer emails, or what information your staff are required to ask your customers.

These settings will affect all Outlets at POS.

1. Navigate to **Settings > POS Settings > Customer Settings**
2. Update the fields as required
3. Click **Save Changes**

> **Note:** Ensure to log out completely from POS to allow the setting changes to take effect (closing the POS browser window will not apply the changes).

|  |  |
| --- | --- |
| **Field** | **Description** |
| Allow Duplicate Customer Emails | Allows the creation of duplicate customer emails at POS i.e. allow multiple customers to use the same email address (e.g. a husband and wife that exist as separate Customers but share an email address)  > **Note:** if you have an integrated web store, it is recommended to have these settings disabled to ensure no duplicate Customer Accounts are created. Refer to the Delete/merge customers, products or users article for more information. |
| Default Price Group for new customers | Sets your automatic preference for the default Price Group when creating new customers at POS (the Price Group can also be manually edited for individual customers from the Back Office). |
| Default field when searching/editing customer | The default field the cursor is in when you search for a customer at POS. For example, if you have a loyalty card you may choose to make the default field the Cust Ref field so you can scan the barcode in as the first step. If you don't have a barcode and instead ask customers for their emails you can set the Email field to be the default field. |
| Default Publish to Shopify to Enabled for new customers | Used by the Retail Express Shopify integration. As customers are created in Retail Express you can auto-publish the customers to a default Shopify website as an Inactive customer. For more information on the Customer Synchronisation process refer to the Shopify - Customer Synchronisation article. |
| Default Export to Web Service to Enabled for new customers | Used by Retail Express eCommerce web integrations (not including Shopify). As customers are created in Retail Express you can set the customer to automatically tick the Export to Web Service option. The customer account will then synchronise with any integrated web stores. |
| Required delivery address fields for home deliveries | Tick any fields to set them as mandatory fields when selecting a Fulfilment method of Home Delivery at POS. Note these fields are mandatory and there is no override ability at POS to ignore these fields. Without this information, the customer will not be able to be updated or the sale finalised. |
| Required fields for customers | Tick to select any fields required when creating or editing a customer at POS. Note these fields are mandatory and there is no override ability at POS to ignore these fields. Without this information, the customer details cannot be updated and the sale will be unable to be finalised. Typically not all fields would be set as mandatory for this reason. |

![settings-customersettings.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powNvEAI.jpg)
Looking for information on adding comments to your customer accounts? Refer to the Customers - Public/Private Comments article for more information.