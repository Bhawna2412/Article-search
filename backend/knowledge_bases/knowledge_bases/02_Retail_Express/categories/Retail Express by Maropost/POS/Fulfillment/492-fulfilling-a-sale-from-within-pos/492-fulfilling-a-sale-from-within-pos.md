---
title: "Fulfilling a Sale from within POS"
articleID: 492
category: "POS > Fulfillment"
knowledgeBase: "Retail Express"
---

# Fulfilling a Sale from within POS

You can streamline order fulfilment workflows through processing fulfilment directly in **Retail Express** POS, which enables completing click-and-collect pickups and marking orders as fulfilled without accessing Back Office systems. This integrated fulfilment capability helps retail operators improve customer service speed and maintain efficient operations, with POS-based fulfilment typically reducing customer wait times and improving operational efficiency across Australian retail operations.

POS fulfilment functionality in **Retail Express** enables retail staff to complete order pickups seamlessly during regular store operations, helping ensure positive customer experiences and efficient inventory processing. This integrated fulfilment helps ensure your retail operations can efficiently manage omnichannel orders while maintaining smooth in-store operations and supporting excellent customer service.

You can manually dispatch stock to your customer (updating the inventory levels in Retail Express) right from within POS. This makes it much more efficient to process one-off sales at the register, instead of logging into the Back Office to use the Fulfilment Report (better for bulk fulfilment)

## Fulfilling Products

To fulfil products:

1. Click the **Print Pick List **button to generate a PDF version of the Pick List (making it easier to locate and prepare the products for dispatch)
2. To fulfil the **full balance** for a single product click the **Arrow** on the product line
3. To dispatch only a **specific quantity** click into the **Dispatch **field and type in the number required
4. To **fulfil all products** click the arrow in the Column Heading
5. The **Fulfil Now **value will be updated to match the Balance (number of products remaining to be dispatched)
6. **Finalise **the sale to save the changes

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20241212at104622AM.05TJ100000PMdwSMAT.png)
Retail Express has a report showing the inventory changes for a product (when a product is ordered, received, purchased and more) called the Inventory Movement Log. This report is helpful in tracking the increase and decrease of each status for an inventory item including during the product transfer process. For more information refer to the Reports - Inventory Movement Log (New) article.

When a sale is placed the following inventory movements take place, and will be displayed in the Inventory Log:

- Cash & Carry:  - The Available stock is reduced and the Allocated stock is increased
  - The Allocated stock is reduced straight after (as the stock has departed with the customer immediately)
- In all other sales:  - When the sale is placed the Available stock is reduced and the Allocated stock is increased (until the product is dispatched it remains in Allocated to ensure an accurate Stock On Hand level)
  - When the stock is fulfilled to the customer the Allocated stock is reduced

## Using Partial Fulfil

If the customer is to receive products on multiple occasions (for example if something is in stock earlier than another product) tick the **Partial Fulfil **box in the bottom left-hand corner.

![mceclip0 (59).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNoZEAU.jpg)

> **Note:** To view the Fulfilment Status for multiple orders use the Fulfilment Report in the Back Office of Retail Express. This powerful report offers extensive filtering and detailed information and can be used to print Labels and Picklists if required. Refer to the Reports - Inventory - Fulfil Products from the Fulfilment Report article for more information.

## Frequently Asked Questions

[What are fulfilment prompts - why am I being asked if I have "given any more items"?](https://galaxy.maropost.com/kb/articles/492-fulfilling-a-sale-from-within-pos#fulfilment-prompts)

On occasion, you may be asked "Have you given any more of the below items to the customer?" when adding additional payments against a sale in POS - typically during laybys.

![pos_fulfilmentprompt.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNoeEAE.jpg)
This prompt is a reminder to update the inventory if there have been any changes during the process of editing the sale. There are specific circumstances on when this prompt appears, and when it's bypassed.

In order for the prompt to be displayed the order must meet **all **of the following criteria:

- The sale was **previously finalised **- the easiest way to check this is if the red button in the bottom right-hand corner of the order shows "Update" instead of "Finalise"
  ![pos_updatebutton.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNojEAE.jpg)
- There are products with a **Fulfilment method other than Cash & Carry **(as Cash & Carry assumes the customer is taking it with them immediately)
- The **Dispatch Quantity **(the Dispatch column on the Fulfilment tab):  - Is **editable** for one or more items i.e. there are still products to be dispatched
  - Is **zero for all items **i.e. if the user has added a Dispatch quantity of 1 or more for a product it's assumed that the user has considered the remaining other items in the sale
    ![mceclip12 (2).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNooEAE.jpg)
- There has been a **payment **added against the sale since the order was last finalised i.e. the payment was entered during the current transaction and can be edited by clicking on it (the Payment is "unlocked"). The easiest way to see this is if there is a trash can icon alongside the payment:
  ![pos_paymentstab_notfinalised.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNkYEAU.jpg)

> **Note:** The prompt will only be displayed once in a single session when editing a sale; if the sale is updated, reopened and modified the prompt will display again.