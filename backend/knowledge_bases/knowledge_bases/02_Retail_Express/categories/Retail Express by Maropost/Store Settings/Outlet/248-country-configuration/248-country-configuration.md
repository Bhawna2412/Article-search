---
title: "Country Configuration"
articleID: 248
category: "Store Settings > Outlet"
knowledgeBase: "Retail Express"
---

# Country Configuration

You can configure country settings to support retail operations in different geographic regions, enabling appropriate tax calculations, address formats, and regional compliance requirements for Australian and New Zealand retail locations. Properly configured country settings help ensure accurate transaction processing and customer data management across your multi-location retail operations.

Setting up country configurations correctly helps retail operators maintain compliance with regional requirements while supporting appropriate tax treatment and address validation for customer orders and deliveries.

Retail Express is designed to allow you to operate businesses and stores across different countries, and report all country operations through the one central administration console.

Even if you only operate from one country, you should still create and set up the details for that country within the software.

## Benefits

If you operate from multiple countries, the main benefits are:

- **Reporting: **All reports allow you to view information by country and then by ?Outlet?. For example, you can view all your sales transactions  across all countries and outlets from the one report.
- **Currency and tax: **Each country can have a separate currency and tax rate.  The reports allow you to choose the currency that you want to view the information in. The same applies for inventory valuation and cost prices of stock.

## Adding a Country

1. Navigate to **Settings > Locations/Outlets > Countries**
2. In the **Create/Edit Country **fields enter the information as per below (note that Mandatory fields are highlighted with an orange outline)
3. Click **Create**

![mceclip0 (7).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUN5EAM.jpg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Country Code | A code to identify the country ranging from 2 - 4 characters. This code will appear on most reports to identify the country. |
| Country Name | The name of the country. This name will appear in the Reporty Query filters |
| Currency Multiplier | When you create your default Country, the currency multiplier should be set to 1.0 ? this being your ?base?. When creating other trading Countries, you should enter the ?currency multiplier? to convert $1 in your ?base? currency to the other countries equivalent $1.  For example, entering say 1.12 for a country would have its currency 12% higher than your base currency. The purpose of this is for all your sales and inventory reports.  The sales reports for each country will be displayed in their own currency. Likewise, when creating a new product, the default cost price of a product will be calculated by converting the main ?Buy Ex? price of the product by the country's currency multiplier.  E.g if the product costs $1 in the base country, it would become $1.12 in another country if the multiplier was set to 1.12.  The Currency Multiplier field supports values up to 4 x decimal places. |
| Tax Rate | The Tax Rate for the country, which is applied to products when sold.   Enter the Country Tax Rate percentage as a decimal value (0.10).  e.g. enter a 10% Tax Rate as 0.10. The Tax Rate field supports values up to 4 x decimal places. |
| Tax Label | The Label or name of the type of tax applied. e.g. GST, VAT etc. |
| FOB Currency (Free on Board/Freight on Board) | The currency that applies to this country |

## Managing an existing Country

To manage your Country information:

1. Navigate to **Settings > Locations/Outlets > Countries**
2. Click on the blue **Pencil** icon next to the country to be modified
3. The fields at the top will be updated with the existing information
4. Update the information as required
5. Click **Update**

To delete a Country:

1. Navigate to **Settings > Locations/Outlets > Countries**
2. Click on the blue trash can icon next to the country
3. The Country will be deleted.