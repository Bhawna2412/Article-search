---
title: "Set up Shipping Costs per Product"
articleID: 1625
category: "Set up Neto > Shipping > Set up Custom Shipping"
knowledgeBase: "Neto By Maropost"
---

# Set up Shipping Costs per Product

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Add a Fixed Rate Shipping Option

1. In your Neto control panel navigate to **Shipping** > **Shipping Options**.
2. Select **Add New Shipping Option**.
3. Choose **Set My Own Pricing**.
4. In the **Advanced Options** click **Flat-rate Per Product**.
5. Choose to **Use Preset Carrier Locations**, or **Select Countries** (for international shipping) that you want the flat rate to be available to. If you choose carrier locations, pick a carrier (e.g. Australia Post eParcel) and select the areas that this shipping option will deliver to. When complete click **Next Step**.
6. Enter a **Name**, **Description** and set the visibility and PO Box settings. Once complete click **Next Step**.
7. Choose how you will print labels, and click **Next Step**.
8. Add in a discount if a customer spends a certain amount (if you wish) and click **Next Step**.
9. Review the settings and click **Complete**.

> **Note:** You can create multiple **Fixed Rate Per Product** options for different shipping services, for example standard delivery and express.

## Edit Products

Now that the shipping option has been created you can set up the shipping cost on your products.

1. In your Neto control panel navigate to **Products** > **Active**.
2. Open a product by selecting the **SKU**.
3. Select **Shipping** from the left side menu, and set up the shipping costs for your **Fixed Price Shipping** option.
4. **Save**, and repeat for all products that will use the fixed rate option.

> **Note:** Fixed rate per product shipping can also be added to products through our [import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).

## Import Product Rates

The easiest way to populate rates on your products is in bulk using the import wizard. Your file needs to contain these four fields:

- `SKU*`
- `Fixed rate method name` 1st Parcel Cost
- `Fixed rate method name` Maximum cost
- `Fixed rate method name` Subsequent parcel cost

For example, if you want to use the Standard Shipping method with 9.95 for the first parcel, 5.00 for subsequent parcels and a maximum charge of $20.00, it would be written as:

`ABC123,standard shipping:9.95,5.00,20;`

Once you have created the CSV or XML import file:

1. In your Neto control panel navigate to **Settings & Tools** > **Import Data**.
2. Select **Complex Import** and then **Start Data Import Wizard**.
3. Click on **Browse** or **Choose File** next to **Upload File**, and select the CSV file you have created, then **Continue to Next Step**.
4. Map the product SKU to **SKU** and map the columns containing the flat rates to the fields above, then click **Continue to Next Step**.
5. Next to **How Do You Want To Update Your Database** select **Update Existing Product Only** and click **Continue to Next Step**.
6. Click on **Process File Now** to queue the import process.

You products will be updated with the flat rate shipping per product charges, which will display to customers on your website.

## Edit your eBay Listing Rules Template (optional)

After configuring the shipping costs on your products, you can update your listing rules templates to pass this on to eBay.

1. In your Neto control panel navigate to **eBay** > **Listing Rules Templates**.
2. Select the template, that you want to use fixed rate shipping, by selecting the **ID**.
3. Select the **Shipping** tab. Under **Domestic Shipping** choose **Flat** in the **How Do You Charge For Shipping?** drop down box. In the **Services** you now have the option to select your **Fixed Rate Per Product** shipping rate.
4. **Save Template & Revise Active Listings** to apply these changes to your eBay listings.

**Please Note**: All products on this template are required to have a shipping cost configured, otherwise they will fail to list/revise.