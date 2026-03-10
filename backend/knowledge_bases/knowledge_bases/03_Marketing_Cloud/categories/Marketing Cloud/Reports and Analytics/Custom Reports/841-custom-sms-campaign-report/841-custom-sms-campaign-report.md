---
title: "Custom SMS Campaign Report"
articleID: 841
category: "Reports and Analytics > Custom Reports"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Custom SMS Campaign Report

You can create custom SMS campaign reports to track specific performance metrics that matter most to your marketing goals. This enables data-driven optimization of your SMS marketing campaigns, helping you identify which messages resonate with your audience and when to send them for maximum impact. Custom reports significantly improve campaign effectiveness by providing focused insights into delivery rates, engagement patterns, and unsubscribe trends rather than generic overview data.

When properly configured, these reports can enhance your SMS marketing strategy by revealing performance patterns across different campaigns, time periods, and audience segments. This helps optimize message timing, content, and targeting to drive better campaign results while maintaining subscriber satisfaction.

A **Custom SMS Campaign Report** is a detailed summary of your chosen SMS campaigns. You can specify the SMS campaigns and the metrics to be included in the report.

The report is generated for the date range and contains metrics such as contacts, SMS sent, SMS delivered, delivery rate, replies received, replies rate, SMS undelivered/bounced, bounce rate, unsubscribed, unsubscribe rate, and so on.

To learn about all other types of custom reports, see [**Custom Reports: Overview**](https://galaxy.maropost.com/s/article/Custom-Reports-Overview).

## Creating a Custom SMS Campaign Report

To create a custom SMS campaign report, perform the following steps:

1. In the Navigation, go to ANALYTICS, and then select Custom Reports.
2. On the Custom Reports Index page, click the New Report button.
3. 
  On the New Custom Report Type page, select the report type as SMS Campaign.

  ![New_Custom_Report_-_SMS.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXAt.05T5g00000BkXAtEAN.png)
4. Select the schedule, and enter the date range and delivery details for the report. See Step 1 - Schedule & Delivery for more information.
5. Choose the report details such as report name, report file type, date range, and SMS campaigns from which to retrieve the data. See Step 2 - Report Details for more information.
6. Choose the metrics to be included in the report. See Step 3 - Report Metrics for more information.
7. Finally, when you are done setting up the report, click Submit.

Once the report is generated, you can download the report from the Notification panel. You can also view and download the report from the Custom Reports Index page. In the Navigation, go to Analytics and then select Custom Reports to open the Custom Reports Index page.

### Step 1 - Schedule & Delivery

Select the report name, schedule, and date range. Also, enter the delivery details for the custom report.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CustomSMSCampaignReportStep1.05T5g00000Y7edNEAR.png)
Select from or enter values for the following fields:

- **Report Name:** Enter the name of the report.
- **Schedule Report**  - **Once** - Select the option to generate the report once.
  - **Recurring** - Select the option to generate the report on a recurring basis. You have the option to have the report sent to you on a daily, weekly, or monthly basis. You also have the option to specify the time of day (in the Eastern Time Zone) at which the report will be generated.    - You must provide an email address to receive the recurring report.
    - The totals in the report reflect the delivery and response data collected from the preceding time period based on the recurring interval that you have selected. For example, on Wednesday, you created the custom report and selected the option to have the recurring report generated every day at 6 AM. Then, Thursday's report will include total delivery and response data collected from 6 AM Wednesday to 6 AM Thursday.
- **Campaign Date Range**: Enter the date range for the report. The date range you enter is used to select all SMS campaigns that were delivered. Both 'from' and 'to' dates are inclusive, that is, the report is generated from 12 AM of the 'from' day to 11:59 PM of the 'to' day.

> **Note:** The dates and times are in Eastern Time Zone.

- **Delivery Details**: Optionally, you can send the report through email. Enter the email address of the recipient, and then specify a subject line and description for the email to be sent.

### Step 2 - Report Details

Choose the report details such as report file type, date format, date range, and SMS campaigns from which to retrieve the data.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CustomSMSReportStep2.05T5g00000a0FdlEAE.png)
Select from or enter values for the following fields:

- **Report Type: **Select the file type for the output of the report. The supported types are .cvs, .xls, .pdf, and .xlsx.
- **Date Format:** Select the date format in which the dates in the report are to be shown. Currently, the supported date formats are MM/DD/YYYY and DD/MM/YYYY.
- **Journey campaign**: Select the check box to populate the Campaign Name drop-down field with journey SMS campaigns.
- **SMS Campaign**: Select the check box to populate the Campaign Name drop-down field with SMS campaigns.
- **Campaign Name:** Select the SMS campaigns that you want to include in the report.
- **Include Test Messages:** Select the checkbox to include the test messages (for the selected SMS campaigns) in the report.

> **Note:** The Journey campaign and SMS campaign checkboxes are especially useful when you want to create a custom report with all Journey SMS campaigns only or all SMS campaigns only. For selecting Journey SMS campaigns, select the Journey campaign check box. This will populate the Campaign Name drop-down field with only the Journey SMS campaigns created during the selected period. Now, in the Campaign Name field, select the individual campaigns that you want or select the Select All option to include all the Journey SMS campaigns.

### Step 3 - Report Metrics

Choose the metrics to be included in the report. The Mandatory Metrics section displays the metrics that will be included in the report output. Apart from those metrics, you have the option to include more as per your need using the Add Optional Metrics button.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CustomSMSCampaignReportStep3.05T5g00000Y7edSEAR.png)

## Related Articles

**Analytics & Reporting:**

- [Campaign Report](https://galaxy.maropost.com/kb/articles/842-campaign-report) - Comprehensive email campaign performance analysis
- [Email Campaign Reports](https://galaxy.maropost.com/kb/articles/846-email-campaign-reports) - Track email campaign metrics and engagement
- [Conversion Attribution Last](https://galaxy.maropost.com/kb/articles/1368-conversion-attribution-last) - Understand conversion tracking and attribution

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Get started with email campaign creation
- [Creating AB Campaigns](https://galaxy.maropost.com/kb/articles/927-creating-ab-campaigns) - Set up A/B tests for campaign optimization