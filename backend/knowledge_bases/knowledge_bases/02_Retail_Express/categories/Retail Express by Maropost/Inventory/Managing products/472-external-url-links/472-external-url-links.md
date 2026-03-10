---
title: "External URL Links"
articleID: 472
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# External URL Links

You can enhance product information access through external URL links in **Retail Express**, which enable associating web resources with products for quick access to manufacturer specifications, warranty information, or product details. This reference capability helps retail operators provide comprehensive product information to staff and customers, with effective URL link use typically improving customer service and supporting informed product recommendations across Australian retail operations.

External URL functionality in **Retail Express** enables retail operators to connect products with online resources, helping ensure quick access to detailed product information supporting customer inquiries and staff training. This linking capability helps ensure your retail operations can efficiently access manufacturer resources while supporting knowledgeable customer service and informed product discussions.

We have incorporated a feature that allows users to include External URL/hyperlinks for each unique product directly within Quote emails generated from the Point of Sale (POS) system. This enhancement aims to provide users with a more efficient and convenient way to share product information with clients.

## **Product External URL's**

We have added three new, optional URL fields against Products to allow support for mapping URLs against your products. The External Product links are labelled:

- ExternalURL1
- ExternalURL2,
- ExternalImageURL.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/4ea75e9ec7964c4ca5a20ac0253b0d431.05TJ1000000FosdMAC.jpg)

- Users can now edit and set values for the new fields via the Back Office.
- In the Back Office Edit product page, the new fields are added within the "web" section above the existing "Long Description" field.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240508at34254AM1.05TJ1000000Foz4MAC.jpg)
To access/add an external link Go to >> **Inventory >> Product Search >> Edit Product**

- These fields allow users to store optional external URLs for each product, and map any website/URL to any product, typical use cases might include a website/product page on your webstore, a supplier/Manufacturer Warranty Page, or Safety Data Sheet.
- The new fields have also been integrated into the mass upload process, enabling users to map and upload external URLs just like existing custom text fields.
- The new fields are now included in the response for product endpoints, allowing users to retrieve and update external URLs via the product API.  For more information, please refer to [API Documentation](https://developer.retailexpress.com.au/)

## **POS Email Templates Extension:**

- External URL 1 can be slotted into an Email Template by using "OrderItemsURL1" placeholder. This will depict one Link for each product on the order/invoice, wherever you position the placeholder to appear.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240510at114057AM.05TJ1000000Fp8QMAS.png)

> **Note:** Please log out and log back in to activate the updated email template with External URL links after saving your changes

- Users have the option to edit existing email templates to include the external link dynamically or create a new email template with the placeholder - OrderitemsURL1.
- The product "Short Description" is used as the link text. Any products without a URL 1 Mapped, won't appear in the placeholder position.
- The dynamic link included in the email templates will be sourced from the Product information page, ensuring that clients have access to the most up-to-date product information.