---
title: "Set up your Neto, Unleashed and Xero Ecosystem"
articleID: 1567
category: "Set up Neto > Inventory Management > Unleashed"
knowledgeBase: "Neto By Maropost"
---

# Set up your Neto, Unleashed and Xero Ecosystem

You can integrate Neto with Unleashed inventory management and Xero accounting to create a unified business ecosystem that automates financial data synchronization and inventory tracking across systems. This helps reduce operational costs through automation, with properly configured integrations typically achieving up to 70% cost reduction in manual data entry and reconciliation tasks. Setting up this three-way integration enables real-time inventory visibility, automated invoice exports, and synchronized financial records, helping ensure your ecommerce operations, inventory management, and accounting systems maintain consistent data without manual intervention.

Configuring the Neto-Unleashed-Xero ecosystem provides centralized management of your B2B operations, helping streamline complex workflows from order receipt through inventory tracking to financial reporting, while maintaining accurate cost of goods sold calculations and stock valuations across all systems.

- [Xero Setup](https://galaxy.maropost.com/kb/articles/1567-set-up-your-neto-unleashed-and-xero-ecosystem#unleashed-setup)
- [Unleashed Setup](https://galaxy.maropost.com/kb/articles/1567-set-up-your-neto-unleashed-and-xero-ecosystem#connect-unleashed-to-xero)
- [Connect Unleashed to Xero](https://galaxy.maropost.com/kb/articles/1567-set-up-your-neto-unleashed-and-xero-ecosystem#connect-maropost-commerce-to-unleashed)
- [Connect Neto to Unleashed](https://galaxy.maropost.com/kb/articles/1567-set-up-your-neto-unleashed-and-xero-ecosystem#connect-maropost-commerce-to-xero)
- [Connect Neto to Xero](https://galaxy.maropost.com/kb/articles/1567-set-up-your-neto-unleashed-and-xero-ecosystem#integration-tasks)
- [Integration Tasks](https://galaxy.maropost.com/kb/articles/1567-set-up-your-neto-unleashed-and-xero-ecosystem#related-articles)

## Xero Setup

In Xero add a "stock on hand" and "cost of goods sold" account:

1. Add a "Current Asset" account called "Stock on Hand". All purchases and journals sent from Unleashed will be coded to this account.
2. Add a "Direct Cost" account called "Cost of Goods Sold". All invoice journals sent to Xero will be coded to Cost of Goods Sold account and the Stock on Hand account mentioned below.

> **Note:** If you already have accounts setup for these you do not need to create new ones.

## Unleashed Setup

In Unleashed, you need to map your warehouses to Neto warehouses. Make sure your warehouse codes in Unleashed match your warehouse codes in Neto, even if you have 1 warehouse.

Your warehouse codes in Unleashed must match the warehouse reference codes you have setup Neto. You can edit the warehouse code and warehouse ref of existing warehouses in both systems to match.

To locate and edit warehouse reference codes In your Neto control panel, navigate to **Products** > **Warehouses / Locations**.

To locate and edit warehouse codes in Unleashed, navigate to **Settings** > **System** > **Warehouses**. This ensures inventory and sales are mapped to the correct warehouses.

## Connect Unleashed to Xero

1. In Unleashed navigate to **Integration** > **Integration Store** > **Xero** > **Configure**.
2. Follow the onscreen instructions to connect your Xero account to your Unleashed account.
3. Select your Unleashed Xero export options as per below.

> **Important:** Leave “Export Sales” un-ticked. Neto will be handling sales exports to Xero.

## Connect Neto to Unleashed

1. In your Neto control panel, activate the accounting module by navigating to **Addons** menu.
2. Navigate to **Accounting** > **Add New** > select **Unleashed**.
3. Enter a name for your integration (eg: Acme Co. Unleashed Integration)
4. Click **Save**.

After completing the above steps, you will be presented with an option to enter your Unleashed API credentials. Click on the button provided to login to your Unleashed account to access these details.

1. Enter your Unleashed API ID and Key into the fields provided and save changes.
2. Enter a start date for your integration (only invoices and credit notes after this date will be exported to Unleashed)
3. Select whether or not you want invoices and credit notes to be individually exported to Unleashed or if you would prefer for these to be exported in batches.

> **Important:** If you plan to process more than 30 invoices per day through Neto you must select to batch invoices. If you do not, you will quickly exceed Xero's transaction limits. This rule only applies to Xero users.

4. Select Export invoices when **Dispatched** or **Approved**.
5. Export invoices to this customer only (Select customer username if batching is on)
6. Select the relevant workflow
7. Map Warehouse(s) downloaded from Unleashed under Warehouse Mapping as show below and press **Save**.

## Connect Neto to Xero

1. In your Neto control panel, navigate to **Accounting (Unleashed)** > Click **Add New** > **Xero**.
2. Enter a name for your integration (eg: Acme Co. Xero Integration).
3. Enter the start date.
4. Select Batching is required or not (Batching is required if you have more than 30 invoices per day).
5. Export invoices to this Xero ContactID (Select customer username if batching is on).
6. Select Export invoices when "**Dispatched**" or **Approved**".
7. Select workflow.
8. Click continue.

After completing the above steps, you will be presented with an option to connect your Neto account to Xero.

1. Click on the "**Connect to Xero**" button.
2. Follow the on screen instructions to authorise access to your Xero file.
3. Enter a start date for your integration (only invoices after this date will be exported to Xero).
4. Select whether or not you want invoices and credit notes to be individually exported to Xero or if you would prefer for these to be exported in batches.

> **Important:** If you plan to process more than 30 invoices per day through Neto you must select to batch invoices. If you do not, you will quickly exceed Xero's transaction limits.

5. Export invoices to this Xero ContactID (Select customer username if batching is on).
6. Select Export invoices when "**Dispatched**" or "**Approved**".
7. Select workflow.
8. Map your Xero accounts and map payment account.

> **Note:** The accounts specified here will be used when you have not specified accounts on payment methods or products individually. You can map accounts on a product and payment method level. To map accounts for each payment method, go to Setup & tools > Payment method > select the payment method > Accounting. To map accounts per product drill into each product and scroll to the “Accounting” section.

9. Save

Congratulations! You have completed the setup of your Neto, Unleashed & Xero Ecosystem.

The system will automatically export and import data to and from Unleashed and Xero at scheduled times.

## Integration Tasks

An integration task is an import or export process that pushes data to or pulls data from a 3rd party application.

To see a full list of tasks that run between Neto and 3rd party systems, in your Neto control panel, navigate to **Xero** / **Unleashed** > **Tasks**.

The tasks required for your integration will automatically run on the schedule set. You can edit a scheduled task by drilling into it. We do not recommend editing the default schedules that have been setup for you.

Manually Initiating Integration Tasks:

1. In your Neto control panel, navigate to **Xero** / **Unleashed** > **Tasks.**
2. Select the task you want to run from the list of active tasks and click the **With Selected** > **Run Selected Task** button at the bottom of the screen.
3. This will run the chosen task within a few minutes.
  The results of your export will be shown in the accounting export logs. In your Neto control panel, navigate to to **Xero** / **Unleashed** > **Export log** to view this log.

  Every single invoice, payment, customer or credit note that is exported to a 3rd party system is logged here. These logs provide in depth reporting into the success or failure of each transaction.

  From these logs you can also re-export any transaction at the click of a button.