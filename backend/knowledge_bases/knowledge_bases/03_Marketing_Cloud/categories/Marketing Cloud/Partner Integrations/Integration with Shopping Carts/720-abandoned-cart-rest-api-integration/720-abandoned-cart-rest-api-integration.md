---
title: "Abandoned Cart REST API Integration"
articleID: 720
category: "Partner Integrations > Integration with Shopping Carts"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Abandoned Cart REST API Integration

You can integrate abandoned cart functionality for third-party e-commerce platforms using Marketing Cloud's REST API, which helps streamline your workflow by automatically triggering abandoned cart email sequences for any custom store implementation. This API integration enables you to automate routine tasks related to cart abandonment recovery while maintaining full control over timing, data structure, and customer journey triggers. When properly implemented, API-driven abandoned cart campaigns typically perform better than manual recovery efforts by ensuring timely, consistent follow-up communication.

The REST API approach also helps maximize email marketing ROI by allowing you to customize abandoned cart data submission, delay timing, and journey automation to match your specific business requirements and customer behavior patterns.

Users with accounts other than Neto, Shopify, and ClickBank can utilize the **REST API** functionality to send abandoned cart emails to customers.

**Important Note**: Only registered users with a Marketing Cloud account can access the **API URL** and get the **Auth Keys** to use them with their store. Users can generate and use different Auth Keys for their multiple stores.

### In This Article

- Authentication Process
- Update Store Details
- Sending Abandoned Cart Data to Marketing Cloud

### Authentication Process

Marketing Cloud users need to register their stores with us and integrate them with their Marketing Cloud account via a series of REST API method calls. The base URL for these REST methods is [***https://api.maropost.com/v2/:account_id***](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fapi.maropost.com%2Fv2%2F%3Aaccount_id).

You can initiate the connection by this API method call:

**POST /register_shop.json**

To access information about this method call from your Marketing Cloud account, visit the **Navigation** panel >> **Integrations** >> **Abandoned Cart REST API**.

![abncart0.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zIesMAE.jpg)
This POST method requires the following JSON payload:

```plaintext
{"shop": {"shop_name": "My Testing Shop","shop_type": "amazon","shop_url": "test.amazon.com.au"},"create_journey": true}
```

"**shop_name**" is the name of your web store that will appear in Marketing Cloud.

"**shop_type**" will appear in the Segment Builder when creating segment rules based on Purchase Activity. The value that you provide here in "shop_type" will be used to determine what product brand and/or product category you wish to specify for your segment.

"**shop_url**" is the base domain of your web store. You do not need to provide the protocol (e.g., omit "https://") from your shop_url. This web store URL will appear in the abandoned cart trigger in the Journey Builder and is used to specify which web store's abandoned cart event will trigger a particular journey.

> **Note:** Once you provide the “shop_url,” you cannot change its value.

You will have a choice to create a journey for your store. By default, "create_journey" is set to "**false**" in the payload. In this case, only the store details get registered, and you'll have to create a new journey from scratch.

If you set "**create_journey**" to "**true,**" the abandoned cart journey gets automatically created. The method response payload will include the Journey ID and auto-generated Journey name. To learn more about creating such journeys, read our [**Abandoned Cart Journey Template**](https://galaxy.maropost.com/s/article/Abandoned-Cart-Journey-Template) article.

A successful POST action will return the HTTP Status Code 201.

Upon a successful POST action, Marketing Cloud registers the store with your account and creates a unique shop ID and shop name.

**Return Response:**

```plaintext
{"data": {"shop_id": 101,"shop_name": "My Testing Shop","shop_url": "test.amazon.com.au","shop_type": "amazon","is_active": true,"created_at": "2024-02-13T08:20:14.000-05:00","updated_at": "2024-02-13T08:20:14.000-05:00","journey_id": 54,"journey_name": "Journey created for the shop: My Testing Shop"},"message": "Shop registered successfully."}
```

The store name and its details get integrated with your Marketing Cloud account.

### Update Store Details

Under the **Actions** tab, you can enable/disable your store depending on the shop's status, permanently disconnect it, or edit its store details.

![abncart1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zJqEMAU.jpg)
Under the **edit** section, you can modify the store name and set the abandoned cart delay timer between **0 to 6 hours**. This delay timer is added to the "**Last Activity**" time field of the **abandoned cart's POST payload**, after which the first abandoned cart email is sent to the contact.

> **Note:** The trigger is initiated based on the timings provided in the "last_activity_at" payload’s field and not when the POST payload is received.

For example, if the last activity time is **1:00 PM** and the abandoned cart delay is set to **30 minutes**, Marketing Cloud will send the first abandoned cart email at **1:30 PM**. However, due to the execution time required to process the information, this email may take up to **5 to 10 minutes longer** to be delivered. So, if you set the abandoned cart delay time to **0**, you might have to wait a further 5 to 10 minutes for the first email to be sent after the cart's "**Last Activity**" time.

By default, the **Abandoned Cart Delay** is set to **30 minutes**.

![abncart2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zJwMMAU.jpg)
You can edit such store details via the **PATCH /update_shop/*****:shop_id*** API method call.

```plaintext
{"shop": {"shop_name": "New shop name","is_active": false}}
```

> **Note:** You can update only the name of your web store and the status of its abandoned cart listener. The web store URL cannot be changed once you set it.

A successful update will return an HTTP Status Code 200.

### Sending Abandoned Cart Data to Marketing Cloud

Once the store is integrated with your Marketing Cloud account, you'll need to build a journey template for customers who have abandoned their carts. By default, a journey draft is not created during the store authentication process. Only when you provide "create_journey": true in the **POST /register_shop.json **method call will one be automatically created.

1. 
  To access the journey draft, go to the **Navigation** panel, select **Automation**, and click on **Journeys**. Choose a draft that you need to edit.

  ![abncart3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zJzBMAU.jpg)
2. 
  You'll be redirected to the builder's page wherein you can modify the journey layout and the trigger settings. Click on the **Abandoned Cart** Trigger box.

  ![abncart4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zF74MAE.jpg)
3. 
  From the drop-down list, choose a store for which the abandoned cart trigger has to be set up. Click on **Save**. However, if you've already registered your store with its journey status set to "**true**", the drop-down gets auto-populated with the URL of the registered store.

  ![abncart5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zK4uMAE.jpg)
4. 
  Similarly, create email templates for the abandoned cart journey. To learn more about such email templates, read our [**Content Builders: Overview**](https://galaxy.maropost.com/s/article/Content-Builders-Overview) article.

  ![abncart6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zK3pMAE.jpg)
5. While creating email templates, you'll need to include the products that were abandoned by the user. To help with this, Marketing Cloud automatically inserts [**abandoned cart tags**](https://galaxy.maropost.com/s/article/Content-Abandoned-Cart-Tags) in such emails. To learn more about the email structure and the contents within it, read our [**Sending Abandoned Cart Emails**](https://galaxy.maropost.com/kb/articles/721-sending-abandoned-cart-emails-to-your-neto-shopify-or-clickbank-contacts?utm_source=community-search&utm_medium=organic-search&utm_term=Sending+Abandoned+Cart+Emails) article.
  ![abncart9.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zK4EMAU.jpg)
6. 
  Once your Journey workflow is prepared, you can now send an abandoned cart's data to Maropost. Use the method call **POST /abandoned_carts/*****:shop_id*** to trigger an abandoned cart event in a Journey.

  ![abncart7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zKA9MAM.jpg)

  A successful triggering of an abandoned cart event will return an HTTP Status Code 200.

**API Payload:**

{

"cart_data": {

"contact": "testing@maropost.com",

"original_cart_id": 104,

"status": "abandoned",

"last_activity_at": "2024-03-21T07:46:48",

"restore_url": "*url_to_the_abandoned_cart_page*",

"order_items": [

{

"name": "Samsung tab",

"sku": "Tab12",

"quantity": "1",

"unit_price": 150,

"image_url": "*actual_image_url_will_be_here*",

"store_url": "*product_landing_page_url_will_be_hhere*"

},

{

"name": "Iphone",

"sku": "IPH15",

"quantity": "2",

"unit_price": 200,

"image_url": "*actual_image_url_will_be_here*",

"store_url": "*product_landing_page_url_will_be_there*"

}

]

}

}

The default timezone for "last_activity_at" is in Eastern time zone (EST). Append a different timezone code if the timezone of your web store is different. For example, "last_activity_at": "2024-03-21T07:46:48Z" will register the abandoned cart event in GMT timezone format.
7. Upon a successful POST, the store's abandoned cart data is sent to Marketing Cloud for processing. Marketing Cloud saves the contact, abandoned cart ID, and abandoned order item information for reference.

**Return Response:**

{

"abandoned_cart": {

"id": 2200,

"original_cart_id": "10",

"status": "abandoned",

"last_activity_at": "2024-04-05T03:35:08.000-04:00",

"restore_url": null,

"abandoned_items": [

{

"name": "Samsung tab",

"sku": "Tab12",

"quantity": 1,

"unit_price": 150000.0,

"image_url": null,

"store_url": null

},

{

"name": "Iphone tab",

"sku": "IPH12",

"quantity": 2,

"unit_price": 150000.0,

"image_url": null,

"store_url": null

}

]

},

"message": "Abandoned cart created successfully. Email will be delivered soon to testing@maropost.com"

}

Henceforth, whenever a store's cart has been left unattended by a customer, an abandoned cart trigger gets initiated, which prompts the system to send an email to the contacts requesting them to complete the checkout process.

Suppose a customer has already purchased the abandoned cart items after getting Abandoned Cart email. In that case, such contacts can be reported to us and no further emails will be sent to these contacts.

To do this, you must report that particular cart with "**Closed**" status in the POST API. Maropost only considers "**Closed**" as a status for recovered carts. No other keywords/statuses will be accepted.

## Related Articles

**API Development & Integration:**

- [Api Overview](https://galaxy.maropost.com/kb/articles/648-api-overview) - Comprehensive guide to Marketing Cloud API capabilities
- [Api Keys](https://galaxy.maropost.com/kb/articles/28-api-keys) - Secure API authentication setup for integrations
- [Api Request Limits](https://galaxy.maropost.com/kb/articles/819-api-request-limits) - Understanding API rate limits and best practices

**Advanced Integrations:**

- [Data Streaming Via Api](https://galaxy.maropost.com/kb/articles/820-data-streaming-via-api) - Real-time data integration techniques
- [Adding A Keap Integration New Ui](https://galaxy.maropost.com/kb/articles/770-adding-a-keap-integration-new-ui) - CRM integration examples and patterns