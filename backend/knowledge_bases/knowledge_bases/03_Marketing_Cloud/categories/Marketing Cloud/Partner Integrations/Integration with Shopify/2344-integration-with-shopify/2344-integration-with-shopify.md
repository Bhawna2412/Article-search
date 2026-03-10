---
title: "Integration with Shopify"
articleID: 2344
category: "Partner Integrations > Integration with Shopify"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-11
---

# Integration with Shopify

You can connect your Shopify store with Marketing Cloud to automatically sync customer data and purchase history in real-time, which significantly improves your email marketing targeting capabilities. This integration enables you to create more personalized campaigns based on actual purchase behavior and helps optimize your marketing effectiveness by ensuring you're messaging the right customers with relevant product recommendations and offers.

When properly configured, this integration streamlines your workflow by eliminating manual data entry and provides comprehensive customer insights that can substantially improve engagement rates through better segmentation and personalized messaging.

Contacts and their purchases are passed from Shopify to Marketing Cloud in real-time as soon as the orders are placed on your Shopify web store. Contacts who have not yet purchased but have opted into receiving emails via the signup form will also sync to Marketing Cloud in real time.

Contact records in Marketing Cloud are either updated or created using the email address as the lookup key. If the email address exists in Maropost, then the contact record is updated with the latest purchase history. If the email address does not exist, then a new contact is created with that email address.

<details>
<summary>Things to remember about Shopify Integration</summary>

- The integration imports data from all the orders, including the archived orders, irrespective of the order status.
- Any subsequent updates made to a Shopify order's financial status are synced in Marketing Cloud in real time.
- Contacts who have subscribed to the marketing emails are synced even if they haven't made any purchases.

</details>

For step-by-step instructions on adding a Shopify integration, see [**Adding a Shopify Integration**](https://galaxy.maropost.com/s/article/Adding-a-Shopify-Integration).

## Shopify Fields Mapping to Maropost Fields

|  | Maropost Fields | Shopify Fields |
| --- | --- | --- |
| **Orders** | total_price | grand_total |
|  | order_number | original_order_id |
|  | created_at | order_date |
|  | financial_status | order_status |
| **Products** | variant_id | item_id |
|  | quantity | quantity |
|  | name | description |
|  | title | name |
|  | price | price |
|  | title | description |
|  | product_type | categories |
|  | image[src] | image_url |
|  | status | status |
|  | vendor | brand |
|  | published_scope | published |
|  | inventory_quantity | availability |
| **Contact Records** | first_name | first_name |
|  | last_name | last_name |
|  | email | email |
|  | phone | phone |
|  | email_marketing_consent / sms_marketing_consent | status |

> **Note:** **Note:** Shopify customer tags will be shown under **contact** **tags**.

<details>
<summary>**What does the "Status" field in Integration mean?**</summary>

The "**Status**" field in Marketing Cloud denotes a contact's email list subscription status. If the status is "**true**," the contact has subscribed, and if the status is "**false**," the contact has unsubscribed from the email list. 

Additionally, the shipping address from Shopify can be stored as a custom field in Marketing Cloud. Create the following custom fields named exactly as follows:

- sh_ship_city
- sh_ship_province
- sh_ship_address
- sh_ship_zip
- sh_ship_country

> **Note:** **Note:** This information comes from Shopify as a hash of city, province, address1, zip, and country.

</details>

## Related Articles

**Integrations:**

- [Integration With Shopping Carts](https://galaxy.maropost.com/kb/articles/736-integration-with-shopping-carts) - Connect other e-commerce platforms with Marketing Cloud
- [Webhook Integrations](https://galaxy.maropost.com/kb/articles/1399-webhook-integrations) - Advanced integration options for data synchronization
- [Api Overview](https://galaxy.maropost.com/kb/articles/648-api-overview) - Technical integration capabilities and endpoints

**Contact Management:**

- [Custom Fields](https://galaxy.maropost.com/kb/articles/45-custom-fields) - Store additional Shopify data with custom contact fields
- [Creating A Contact List New](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Organize your Shopify customers for targeted campaigns

**Campaign Management:**

- [Product Recommendations](https://galaxy.maropost.com/kb/articles/879-product-recommendations) - Use Shopify product data for personalized recommendations