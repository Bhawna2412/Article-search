---
title: "Custom Search Filters"
articleID: 1521
category: "Use Neto > Dashboard and Reporting > Use your Dashboard"
knowledgeBase: "Neto By Maropost"
---

# Custom Search Filters

**Please Note**: The example below focuses on orders, however the steps to create customised filters are the same for all pages.

## Create a custom order filter

1. In your Neto control panel navigate to **Orders** > **View All Orders**.
2. Open the filter options by clicking on the down arrow on the right of the filter box.
3. Set your filters to display the orders that you are wanting to save and click **Apply**.
4. To save these filters click on the **Custom Filters** button above the order list. The select **Save Current Filter.**
5. Enter a name for your filter. If you would like to share this filter with other staff members, check **Save Filter For All Users**. Click **Okay** to save the filter.
  Once your filter has been saved it will appear as a new filter in the **Custom Filters** list. You can also select **Manage Filters** to delete a filter, make it system wide, or to get the link to it for the next step.

## Add A Filter To The Control Panel Menu

You can also add filters to the control panel menu so you can quickly access those that you use most often.

1. In your Neto control panel navigate to **Settings & Tools** > **All Settings & Tools**.
2. From the side menu select **Control Panel** and choose **Custom Control Panel Links**.
3. Click **Add New Menu Item**, enter a **Name** and add the link to your filter. Click **Accept** and then **Save**.
4. Refresh your control panel, and you will now have a menu item called **Custom Links** which includes your filter.

## Use relative time in filters

One of the most popular fields to filter orders by is date placed. So that date placed can be used in custom filters Neto supports relative times / dates in its date filter fields. For example you can filter an order list to show all orders placed more than 6 hours ago. Use the relative time / date fields in a date filter to achieve this.

### Example Use Case:

So that you can fulfill a large number of orders efficiently in a batch pick fashion you may want to frequently return a list of all orders that only have products in a single pick zone, sorted by date placed.

In this case you would set up a custom filter with the following parameters:

- Multi Pick Zones = Single Pick Zone
- Sort By = date placed, ascending

Users can then use this custom filter to return the orders they need to fulfill at the click of a button.

For example a user wanted to further refine your filter to only display orders that were placed more than 6 hours ago they could add the date placed filter **Date Placed To**: 6 hours ago.