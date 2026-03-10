---
title: "Troubleshoot Shipping Issues and Errors"
articleID: 1389
category: "Set up Neto > Shipping > Troubleshooting Shipping"
knowledgeBase: "Neto By Maropost"
---

# Troubleshoot Shipping Issues and Errors

Shipping errors are generally caused by a breakdown in the shipping matrix or the shipping setup on a product itself.

As a result, it’s not as simple as looking at the error and finding the solution as there are a few areas within the system that need investigation.

In our example, we’ve received a **Shipping Not Available To Selected Location** error, advising us the postcode we’ve used does not match up with any carriers in that postcode.

## Check the Product and Shipping Category

Based on the above example, we want to look at the shipping category assigned to our product and the carriers which support the postcode we entered on the front-end of the Webstore.

Edit the product and click on the **Shipping** tab to identify which **Shipping Category** has been assigned to it.

In our case, the category is called **Fixed Price**.

Whilst here, it’s best to check that all of the shipping dimensions, such as width, length, height and weight have been populated. Additionally, ensure the Cubic metres field has also been populated.

## Check the Shipping Zones

Now navigate to **Settings & Tools** > **Shipping**.

Select **Shipping Zones**.

Using the search tool, enter the **Postcode** and select **Apply Advanced Filter**.

The results should tell us which couriers ship to that postcode.

If you are not receiving any results, it’s because the zones are not setup and need to be completed. Refer back to our [setup documentation](https://galaxy.maropost.com/kb/articles/500-edit-shipping-zones) for steps on setting up shipping zones.

## Check the Shipping Matrix Overview

1. In your Neto by Maropost control panel navigate to**Settings & Tools**>**Shipping**.
2. Select**Shipping Matrix Overview**.
3. Identify the matrix’s that sues the**Fixed Price**shipping category.

If there is none present, edit a suitable shipping option and [add the Fixed Price shipping category](https://galaxy.maropost.com/kb/articles/1628-add-a-shipping-category) to resolve the issue. Test again, if the issue still occurs, you will need to check the services and rates table.

## Check the Services & Rates Table

Edit each shipping option attached to the **Fixed Price** shipping category and scroll down to the **Shipping Category** section at the bottom of the page.

Select the green arrow next to the associated **Shipping Service / Rates** the shipping category is mapped to.

Scroll down to the **Shipping Rates Table** and ensure the zones associated with the postcode are present.