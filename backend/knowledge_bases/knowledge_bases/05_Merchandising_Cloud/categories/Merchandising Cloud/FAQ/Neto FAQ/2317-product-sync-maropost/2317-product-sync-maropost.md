---
title: "Product Sync (Maropost)"
articleID: 2317
category: "FAQ > Neto FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Product Sync (Maropost)

> 📘** Maropost Commerce Cloud Product Sync**
> Please, note that the product sync from Maropost Commerce Cloud isn't running in real-time but is based on a regularly exported feed, scheduled to a certain interval in the Maropost Commerce Cloud dashboard.
> 
> To confirm the product sync, you can view the time of each export in the Maropost Commerce Cloud Control Panel and the time of each import in the Merchandising loud Dashboard. Here you can also initiate manual exports/imports.

# Steps to perform product sync:

1. Find the Merchandising loud Export in the Maropost Commerce Cloud CPanel
2. Change the scheduled time for a product export in Maropost Commerce Cloud
3. Manually push the feed export

### Step 1: Find the Merchandising loud Export in the Maropost Commerce Cloud CPanel

When you install 'Merchandising loud' add-on in Maropost Commerce Cloud , there will be a 'Data Export Template' created in Maropost Commerce Cloud CPanel called 'Merchandising loud' in “Settings & tools” → “All settings & tools” → "Data Export Templates":

![2f557f6-Findify-Neto-FAQ-1.png](https://us.v-cdn.net/6038474/uploads/M7BRDY5H0G43/2f557f6-findify-neto-faq-1.png)
If you click on it, you will be able to see all the related information about the product feed export file.

## Step 2: Change the scheduled time for a product export in Maropost Commerce Cloud

You can change the scheduled time for a product export in Maropost Commerce Cloud.
Access the Merchandising loud Add-on through “Settings & tools” → “All settings & tools” → "Data Export Templates".

Click and change "export schedule".

![Image](https://files.readme.io/35adf22-Findify-Neto-FAQ-2.png)

> **Note:** **Note**: You can run one export every 15 minutes in the Maropost Commerce Cloud dashboard. That means that the interval of Merchandising loud is dependent on the total amount of queued exports for all add-ons.

## Step 3: Manually push the feed export

You can push the feed export manually by clicking on 'Generate Data File':

![Image](https://files.readme.io/464ac05-Findify-Neto-FAQ-3.png)
You will then be notified that the export process has been created, which doesn't automatically mean that it has started.

![Image](https://files.readme.io/285207e-Findify-Neto-FAQ-4.png)
If you click on it, you will see the current status of the process (Pending/Running/Finished). You can also push the feed generation manually by clicking on the 'Run Now' button:

![Image](https://files.readme.io/b3afa0f-Findify-Neto-FAQ-5.png)
To see the history of all product exports in Maropost Commerce Cloud, please click on 'View Export History' on the Data Export Template page:

![Image](https://files.readme.io/f00ba4f-Findify-Neto-FAQ-3.png)
![Image](https://files.readme.io/b50efb9-Findify-Neto-FAQ-6.png)

## Step 4: Sync products in Merchandising loud

Whenever you change product information in Maropost Commerce Cloud, it will not be directly synced with Merchandising loud. There are 2 steps of the product sync:

1. Export updated data from Maropost Commerce Cloud. To do that you need to either wait until a scheduled Merchandising loud export process (we are setting the data export template to be processed every 4 hours by default) or push it manually as noted above. Once the export process is set with Status: Finished, then Merchandising loud's product feed file will be updated with the latest data.
2. After that, you would need to sync these updates in Merchandising loud, either with the scheduled sync (by default, the schedule is set to every 4 hours) or by pushing the sync manually. To do that, go to our [Merchant Dashboard](https://dashboard.findify.io/setup/product-sync/overview)
3. Once the sync is completed, the products will be updated with the latest information in Merchandising loud.

![Image](https://files.readme.io/fd8fc07-Product_sync.gif)