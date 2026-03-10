---
title: "Understanding Product Prices (Buy and Sell)"
articleID: 462
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Understanding Product Prices (Buy and Sell)

You can maintain profitable pricing strategies through understanding buy and sell price relationships in **Retail Express**, which support accurate margin calculations, markup targets, and pricing consistency across your retail operations. This pricing comprehension helps retail operators establish sustainable pricing strategies, with proper buy and sell price management typically supporting better margin control and improved profitability across Australian retail operations.

Product pricing in **Retail Express** enables retail operators to configure weighted average buy prices, markup percentages, and sell prices that support effective margin management and competitive positioning. Understanding pricing field relationships and calculation methods helps ensure your retail operations maintain profitable pricing strategies while supporting accurate financial reporting and strategic pricing decisions.

Products have quite a few different price fields, including the POS price (sell price), Buy Price (what you pay to your supplier), promotional discount prices and more. You can even set up different prices for each Outlet/Store, or separate prices for online vs instore.

If there's an Outlet-specific price, you'll be able to see this on the Product Pricing tab. The Outlet-specific price will be highlighted in red.

> **Note:** To remove Outlet-specific pricing simply clear the contents of the cell; the field will be updated to reflect the global price. You can also use Mass Download to remove Outlet-specific pricing in bulk.

![mceclip0 - 2023-07-10T032326.281.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiS0EAI.jpg)

## []()Main tab - Global Prices

Global Prices are maintained on the Main tab of a product.

![products_editproduct_main_pricing (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiTIEAY.jpg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Supplier Buy Ex | The estimated price of the product in the **supplier's native currency**. This field is used for creating a Purchase Order only to give you an estimated value of a Purchase Order i.e. at the point when you may not yet know the final price in your local currency.  > **Note:** For a detailed explanation of the differences between the Supplier Buy Ex and the Weighted Avg Buy Price refer to this article. |
| Weighted Avg Buy Price (Ex Tax)* | The buy price (excluding tax and direct costs) of the product in your local currency i.e. if the product is $100 USD and the Australian Dollar was at $1.11 per USD this would be $111.26.  > **Note:** For a detailed explanation of the differences between the Supplier Buy Ex and the Weighted Avg Buy Price refer to this article. |
| Direct Costs (Ex Tax) | The additional cost (in local currency) associated with receiving the product. This may include Freight, duties or handling fees etc. Used to calculate the Cost of Goods Sold (Ex Tax) |
| Cost of Goods Sold (Ex Tax) (referred to as COGS) | The final value the product cost to the business to receive. This is a read only field calculated via: COGS = Weighted Average Buy Price (Ex Tax) + Direct Costs (Ex Tax) |
| Markup Target % | A value used to calculate the POS price; as you can only have one global POS price you can select between the Markup Target % and a Fixed Price. When this value is entered the POS price is calculated and rounded based on the settings specified at Settings > POS Settings > Product Settings > Round GP Target Prices By. The Markup Target % Formula: POS Price = (COGS + (COGS * (Markup % /100)) * (1 + TaxRate) |
| Calc POS by % Markup Target/Fixed Price | Used to select between the Markup Target or a Fixed Price to determine the POS Price. |
| POS Price (Inc Tax)* | The Global price for the product.  This can either be calculated using the Markup Target % field or by entering a fixed value directly into the field. |
| Date POS Price Changed | A read-only field used to display the last time the POS Price was changed (either manually or through the Mass Upload process). |
| Promotional Price (Inc Tax) | Used to discount the product for a set period of time.   > **Note:** This promotion will apply from the moment you update the field with a valid price and an Expiry Date. To set future promotional pricing you can use outlet specific prices. |
| Promotional Price Expiry | Used to set a date for the Promotional price to expire. This field is **inclusive**, so if the date was set to the current date the promotion would still apply until midnight. |
| Maximum Discount Rule | Used to prevent the product from being discounted beyond a specified amount. For detailed information on this feature refer to the Maximum Discount Rules article. |
| Web Price (Inc Tax) | Used by web store integrations to specify prices for the web store separate from the in-store price.  > **Note:** If this field is used it can override all other prices online (if integrated with web stores) |
| RRP (Inc Tax) | Used as a reference only, allows you to enter a Recommended Retail Price and display it, along with your price, on product labels or web store. |
| Freight Cost (Inc Tax) | Legacy field This field was previously used to charge customers freight when purchasing the product on a Retail Express web store (not including Shopify/eCommerce API sites - the freight is controlled on the web store itself for these integrations). |

## []()Pricing Tab - Outlet-Specific Prices

Outlet-specific prices are highlighted with a **red shaded background**. These prices will always take precedence over your Global prices. To clear the custom price click into the field, delete the contents and click Tab; the value will be reset to match the Global value.

![products_editproduct_pricing_productpricing.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphscEAA.jpg)

> **Note:** You can also use the Mass Download process to bulk update these fields.** **.

|  |  |
| --- | --- |
| **Field** | **Details** |
| Buy Price Ex 			Direct Costs 			COGS 			Buy Price Inc | These fields are averaged and updated as you receive stock via Purchase Orders and Transfers |
| POS Price | Used to set an outlet-specific POS Price |
| Disc Price Inc 			Disc Start Date 			Disc End Date | Used to schedule promotions using the outlet-specific promotional prices as there is a Discount Start and End date (whereas the global tab uses an end date only). |
| Tax | Used to enable/disable the product for Tax. Note this will affect products on integrated web stores as well. |

## []()Price Groups

![products_editproduct_pricing_pricegroups.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiTNEAY.jpg)
The Price Groups section lists the calculated Price Groups that have been configured in the system, along with the calculated prices. The Group rule and associated value is the rule associated with the Price Group.

> **Note:** These prices are calculated using the Global price. If there's an outlet-specific price the customer's discount will be applied to the outlet-specific price if a sale is created at that Outlet.

These fields are read only. To modify the values you will need to adjust the Price Group. Refer to the Price Groups - Create and Edit Price Groups article for more information.

## []()Price Groups (Fixed)

![products_editproduct_pricing_pricegroupsfixed.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphSDEAY.jpg)
Similar to regular Price Groups, this section lists the Fixed Price Groups along with an editable field for entering a fixed price for the product.

When a customer belongs to a Fixed Price Group, when the product is added at POS it will use the price that offers the customer the greatest discount: Fixed Price Group or Price Group.

Refer to the article Price Groups - Create & Edit Fixed Price Groups for more information.