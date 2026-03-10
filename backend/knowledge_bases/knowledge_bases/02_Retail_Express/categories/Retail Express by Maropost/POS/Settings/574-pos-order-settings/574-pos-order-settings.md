---
title: "POS Order Settings"
articleID: 574
category: "POS > Settings"
knowledgeBase: "Retail Express"
---

# POS Order Settings

You can configure order processing behavior in Retail Express POS to match your business workflow preferences, helping your retail operators complete transactions more efficiently during peak periods. This capability allows you to customize how orders are displayed, processed, and finalized, which helps reduce unnecessary steps and improve checkout speed.

Setting up optimal order settings enables your retail team to streamline the sales process according to your specific operational needs, helping optimize transaction flow and reduce customer wait times. This helps retail operations balance thoroughness with efficiency by configuring POS behavior to match your customer service standards and business requirements.

These settings include options for managing order types, payment workflows, and fulfillment preferences, providing flexibility to match your store's operational requirements. This article guides you through the configuration of POS Order Settings to optimize order management and enhance the customer experience.

The POS Order Settings configuration allows you to control various settings related to the orders within POS e.g. Minimum Deposits, or bypassing the Invoice Page after finalising/updating a sale.

![mceclip0 - 2023-07-08T234742.377.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWOVEA2.jpg)
To configure the POS Order Settings:

1. Open **Back Office**
2. Navigate to **Settings > POS Settings > Order Settings**
3. Update the fields as required
4. Click **Save Changes**
5. **Log out of POS** to refresh the settings (use the **Log Out **button at the top of the POS main window)

> **Important:** Closing the browser window will not log you out of POS, and the changes will not be applied. See the article Logging out of POS for more information.

|  |  |
| --- | --- |
| **Field** | **Details** |
| Order Items Sort Field | Controls how Order Items are sorted by default when added to an order e.g. As Entered, Description. |
| Order Items Sort Direction | What sorting direction is applied to the Order Items Sort field - ascending or descending |
| Aggregate Duplicate Order Items | When this tick box is checked, identical items are combined into a single line item. If the box is unticked, as each product is scanned it will be displayed on a separate line. |
| Allow Blank Refunds | Allows the creation of Refunds in POS without an original order (see the article on Refunds for more information) |
| Allow Finalise when Minimum Deposit not met | Allows a sale to be finalised when the minimum deposit conditions have not been met (note that Cash and Carry items will still require full payment before the sale can be finalised). |
| Bypass Invoice Page on Finalise | Enabling this option bypasses the Invoice page in POS after the Finalise button is clicked and returns to the main window of POS (where you can create another sale, look up sales etc).  > **Note:** To speed up the finalisation of sales you can choose to skip the final Invoice page but still print a receipt, making it faster to process a sale during peak periods. |
| Minimum Deposit | The minimum amount that must be paid against a sale before it can be entered (the sale will retain the status of "Awaiting Payment" until it is fully paid).  This can be entered as either a dollar ($) or percentage (%) amount e.g. $10 or 10%. To increase the minimum deposit amount simply enter the new value into this field. |
| Default Tax Rate | The default tax rate for sales |
| Special Orders Minimum Deposit | The minimum payment required for Special Order items (this will not affect products not flagged as a Special Order item). Leave blank to use the default minimum deposit. This can be entered as either a dollar ($) or percentage (%) amount e.g. $10 or 10%. In the event that both Special Order items and standard Sale items exist on an order, the minimum deposit will be calculated based on both of these settings. For example, assuming the following configuration:  - Minimum Deposit: 10% - Special Order Minimum Deposit: 50%  If an order contained the below items:  - Standard Item Total = $100.00 - Special Order Item Total = $200.00  The total minimum deposit required for the order would be $110.00 ($100.00 x 10% + $200.00 x 50%). |