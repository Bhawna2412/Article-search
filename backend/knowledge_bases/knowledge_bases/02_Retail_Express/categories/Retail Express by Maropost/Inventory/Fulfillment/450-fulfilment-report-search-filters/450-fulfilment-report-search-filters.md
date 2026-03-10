---
title: "Fulfilment Report Search Filters"
articleID: 450
category: "Inventory > Fulfillment"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-20
---

# Fulfilment Report Search Filters

You can optimize order fulfilment efficiency through advanced search filters in the **Retail Express** Fulfilment Report, which enable precise order identification based on customer details, product attributes, delivery methods, and fulfilment status. These powerful filtering capabilities help retail operators quickly locate specific orders and prioritize fulfilment activities, with effective filter use typically reducing order search time and improving fulfilment accuracy across Australian retail operations.

The comprehensive filter options in the **Retail Express** Fulfilment Report enable retail operators to segment orders by multiple criteria, helping ensure efficient batch processing and systematic fulfilment workflows. This advanced filtering helps ensure your retail operations can focus on priority orders, manage fulfilment by delivery method, and maintain organized fulfilment processes supporting timely customer delivery and operational efficiency.

The Search Fields and Refine Search filters assist you in targeting the Customer Invoices and Products to be fulfilled. For example, if you receive stock from a supplier based on a Purchase Order, you can use the Purchase Order Number field to search for Invoices or Products specific to that Purchase Order.

![mceclip1 (43).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNqGEAU.jpg)

|  |  |
| --- | --- |
| **Search field** | **Detail** |
| Invoice Number | The Customer's Invoice Number in Retail Express |
| Product PLU Code | Product ID or Supplier SKU |
| Customer Name | The Customer's name (can be either first, last or both) |
| Ordered From/Ordered To | Used to select a particular date range the Invoice was created within e.g. the previous calendar day to see any new orders that need to be dispatched |
| External Order Reference | Used to search for an Invoice Number from another system e.g. if using the Shopify integration you can search for the Shopify Order Number  > **Note:** This number can also be entered via POS or any integration using the Webstore/eCommerce integration that sends this information from the external system |
| Only Show Stock Available for Picking | When ticked, the results will only show the products available to dispatch to the customer |
| Delivery From and To | Returns only products that had a manual Fulfilment/Delivery Date entered when sold (at POS) AND whose Fulfilment Date is within the range.  > **Note:** This will ignore all products that did not have a manual Fulfilment/Delivery date entered when sold. |
| Purchase Order Number | Used to search for products ordered on the specified Purchase Order number |
| Purchase Order Options | - Show orders with items contained in this PO - allows you to view only Products on the Purchase Order number entered in the above field. Untick to exclude the products on the Purchase Order number entered into the field above. - Show orders dependent on this PO for fulfilment - allows you to view all products on orders that contain products that are dependent on the delivery of the Purchase Order entered into the field above.  For example if an order contains Product A and Product B, and Product A was ordered on the Purchase Order listed in the Purchase Order Number, ticking this check box will show both Product A and Product B in the results, while un-ticking this check box will ONLY display Product A. |
| Sort By | The Default sorting is via Invoice Date. Select from the drop-down menu for any other preference. |
| Special Orders | By default Special Orders are not included in the results for Fulfilment. You can choose to isolate only sales containing Special Order items, or all sales (regular and Special Orders).  > **Note:** Customer orders where the Special Order items are not available to be fulfilled will not be displayed in the search results. |
| Sales Person | The staff member who processed the original Invoice. |

## Related Articles

**Inventory Management:**

- [Transfer Variance Manager](https://galaxy.maropost.com/kb/articles/article-445-transfer-variance-manager)
- [Receive A Dispatched Transfer](https://galaxy.maropost.com/kb/articles/article-446-receive-a-dispatched-transfer)