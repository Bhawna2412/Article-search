---
title: "Capturing Web Conversions"
articleID: 1001
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Capturing Web Conversions

You can add products to your Neto catalog to build a streamlined product management system that helps reduce manual data entry and improves operational visibility across all sales channels. Properly configured product catalogs typically enable real-time inventory synchronization across online stores, POS, and marketplaces, helping merchants maintain inventory consistency and avoid overselling scenarios.

Setting up your product catalog provides the foundation for efficient B2B operations by enabling customer-specific pricing strategies, bulk ordering capabilities, and multi-channel inventory tracking. This helps streamline your product organization and supports business scalability as you expand revenue opportunities through unified commerce.

The Orders tab in the Script Builder enables you to attribute online purchases to your contacts who have clicked through from your email campaign to the website. The purchases passed to the web tracking script here will be stored in the Product/Revenue database.

When you view this tab for the first time, you will see that the purchase information is passed to the web tracking script as a JSON-formatted data structure. You'll also note that the data structure is similar to that used by the [**Product/Revenue API**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fapi.maropost.com%2Fapi).

The JSON-formatted data structure passed as an order is strictly used by the Product/Revenue database and is not available for personalization within the body of an email. For that, you will either need to pass the cart data as a web funnel or store it in [**Relational Tables **](https://galaxy.maropost.com/s/article/Introduction-to-Relational-Tables)and use the relational table [**personalization tags **](https://galaxy.maropost.com/s/article/Content-Table-Tags)in the body of your email content.

The way that web tracking for orders works is that your web page will declare universal variables and set values that encapsulate the order data. The JavaScript you write in this section reads those variables and transforms them into the required JSON-formatted data structure. Click [**here **](https://galaxy.maropost.com/s/article/Capturing-Orders-Using-Web-Tracking)to view an example of JavaScript for tracking web orders.

- **Page URL -** This URL should be of your 'Success' page that is displayed when the payment has been completed and all details of the order have been finalized.
- **[Add More] -** Click this button for any additional 'Success' pages in case you have **additional purchase funnels** on your website.

### **Script for Neto Order tracking**

Make sure your Neto domain is valid and distinct to avoid order duplication if you have an active Neto integration and want to opt for capturing order information via web tracking. Plus, the list ID should also be valid, as all contacts that make the purchase will be stored in the list.

An example of JavaScript code used to capture web conversion is as follows:

```plaintext
if (orderitems){var orderItems = [];for (var i = 0; i < orderitems.length; i++) {    var item = orderitems[i];    orderItems.push({        "item_id": item[0],        "price": item[1],        "quantity": item[2],        "description": item[3],        "category": item[4]    });}}var data = {    "order_unique": "true",    "list_ids": "2203",    "order_date": orderDate,    "order_status": orderStatus,    "original_order_id": orderId,    "grand_total": total,    "coupon_code": couponCode,    "source_name": "neto-maro.neto.com.au",    "source_type": "neto",    "order_items": orderItems};return data;
```

### Elements of JSON-formatted Data Structure

The elements of the JSON-formatted data structure are defined as follows:

- **order_unique (optional) -** By default, this value is set to 'False'. If you want to enforce a rule that no two orders for the same contact can have the same 'original_order_id', then set this flag to 'True.'
- **list_ids (optional) -** Allows you to subscribe the contact to any of your mailing lists at the same time you are recording the person's purchase order in the database.
- **order_date (required) -** Provide the date in YYYY-MM-DDTHH:MM:SS format.
- **order_status (required) - **Any keyword that you provide. There is no restriction as to which keywords you want to use. All orders, regardless of status, are captured as orders, and the order amount is calculated for each contact's Lifetime value. The keyword(s) that you provide will appear in the 'Purchased with Status' [**segmentation rule**](https://galaxy.maropost.com/s/article/Introduction-to-Segments).
- **original_order_id (required) -** An alphanumeric sequence of characters. If you have set 'order_unique' to 'True', then the platform will not accept any orders that have duplicate values of 'original_order_id' for the same contact.
- **grand_total (required) -** A float value. The grand total for the order is used to calculate the contact's Lifetime Value. This field accepts up to a maximum of 8 digits to the left of the decimal point.
- **coupon_code -** An alphanumeric sequence of characters. Use this attribute only if you are using Maropost for Marketing's [**Coupon Bank**](https://galaxy.maropost.com/s/article/Coupon-Bank) feature. The value of this attribute is the coupon code that was distributed from the Coupon Bank. When provided, Maropost for Marketing will look in the appropriate Coupon Bank for this coupon code and then update its status to 'Redeemed,' which you'll then see in the Coupon Bank reports. If you provide any other type of coupon code in this payload, including any that do not exist in your coupon banks, then it will be ignored.
- **order_items (required) -** The order_items array allows you to pass in multiple line items that constitute the entire order.  - **item_id (required) -** An alphanumeric sequence of characters. Typically, the Item ID represents the product SKU. The Item ID is displayed when selecting any product-related segmentation rule.
  - **price (required) -** A float value. Refers to the extended cost (not the unit cost) of the order line item.
  - **quantity (required) -** An integer value. Refers to the quantity purchased of this particular product.
  - **description (required) -** A short description of the product. Refers to the description is displayed when selecting any product-related segmentation rule.
  - **adcode (optional) -** An optional identifier for the item purchased.
  - **category (optional) -** The category of the product purchased. The category you provide here is used by the Product Category segmentation rule.

## Related Articles

**Product Catalog:**

- [Creating Product Categories](https://galaxy.maropost.com/kb/articles/200005-product-catalog-management) - Organize products into categories for improved navigation and catalog management
- [Category Management](https://galaxy.maropost.com/kb/articles/1005-creating-product-categories) - Set up hierarchical product categories to streamline catalog organization
- [Add Condition to Products](https://galaxy.maropost.com/kb/articles/1061-add-product-condition-to-a-google-shopping-feed) - Configure product condition attributes for marketplace feeds

**Inventory Management:**

- [Accessing Inventory Management](https://galaxy.maropost.com/kb/articles/1002-managing-inventory) - Monitor and manage product stock levels across warehouses
- [Enable Inventory Tracking](https://galaxy.maropost.com/kb/articles/1003-inventory-management) - Configure real-time inventory tracking for product stock control