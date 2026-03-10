---
title: "Run MYOB Integration Tasks"
articleID: 1527
category: "Use Neto > Accounting > MYOB accounting"
knowledgeBase: "Neto By Maropost"
lastUpdated: 2025-12-05
---

# Run MYOB Integration Tasks

### In this Article

- [Edit Task Schedules](#1)
- [Run an Integration Task Manually](#2)
- [Check Task Progress](#3)
- [Check Task Logs](#4)
- [Add a Custom Schedule](#5)

### Edit Tasks and Schedules

Integration tasks will run automatically based on the schedule assigned to each task. The system will automatically assign an appropriate schedule to each task. To edit the default schedule assigned to a task go to **MYOB Live** > **Tasks**.

You can click on the task ID to edit it.

**Please Note**: We recommend using the default schedules automatically assigned by the application.

### Run an Integration Task Manually

Although integration tasks will run automatically on a schedule, you can run these tasks at any time. For example, if you want to urgently export all your latest sales data to your accounting app, you can run the "export sales" task.

To run an integration task manually go to **MYOB Live** > **Tasks**. You can then click on the **Run Task** button on the right of the task you want to run.

Alternatively, you can select multiple tasks to run, scroll down to the bottom of the page and select **With Selected > Run Selected Task**.

### Check Task Progress

Depending on the amount of data being transferred and the complexity of the task, it may take several minutes for a task to complete.

You can check on the progress of a task in your Maropost Commerce control panel by navigating to **Settings & Tools** > **All settings & tools**. Click on the **Import and Export** tab and click Import/Export Processes.

Filter by **accapi_batch**. Here you will see a list of all pending processes. A process is complete when it it's status is **Finished**.

### Check Task Logs

The system logs all data that is exported to and imported from your third party apps. You can access these logs by going to **MYOB Live** > **Export Log**.

When exporting data to a third party app, the system will also store the response from the third party app in the export log. If a transaction fails, for example the third party app rejects the order you are trying to export, you will see this failure in the export log.

You can then attend to the reason for failure and re-export the related transaction. The system will also automatically try to re-export failed transactions for you at scheduled times.

### Add a Custom Schedule

You can create your own schedules to run tasks at custom times. Follow the steps in [this artilce](https://galaxy.maropost.com/s/article/Add-an-import-or-export-process-schedule) to add a custom schedule.

### Related Articles

- [MYOB Common Errors ](https://galaxy.maropost.com/s/article/Common-Errors)
- [Apply Credit or Over Payment to an Invoice in Xero, MYOB or Unleashed](https://galaxy.maropost.com/s/article/apply-credit-or-over-payment-to-an-invoice-in-xero-myob-or-unleashed)