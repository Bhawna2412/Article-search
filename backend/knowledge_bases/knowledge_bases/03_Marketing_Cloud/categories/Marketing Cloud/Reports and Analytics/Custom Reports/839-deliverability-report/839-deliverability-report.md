---
title: "Deliverability Report"
articleID: 839
category: "Reports and Analytics > Custom Reports"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Deliverability Report

You can create deliverability reports to enable data-driven decisions about your email campaign performance by analyzing detailed delivery metrics broken down by Internet Service Provider (ISP). These reports help identify improvement opportunities in your sender reputation and email deliverability by revealing patterns in open rates, bounce rates, and complaint rates across different email providers. When properly configured with relevant ISP data and performance metrics, deliverability analysis typically leads to better inbox placement and campaign effectiveness.

Deliverability reporting also helps optimize your email marketing ROI by enabling you to identify which ISPs require attention for improved delivery rates while measuring campaign effectiveness across different subscriber segments and email providers.

A **Deliverability Report** is an analytical report that helps you assess the success of your campaigns based on the deliverability data. The report contains the campaign deliverability metrics broken down by the ISP.

When building a deliverability report, you can select the ISPs and deliverability metrics (such as open rate, bounce rate, complaint rate, and so on) that you want in the report.

To learn about all types of custom reports, see [**Custom Reports: Overview**](https://galaxy.maropost.com/kb/articles/994-custom-reports-overview?utm_source=community-search&utm_medium=organic-search&utm_term=custom+reports%3A+overview).

## Creating a Deliverability Report

To create a deliverability report, perform the following steps:

1. In the Navigation, go to ANALYTICS, and then select Custom Reports.
2. On the Custom Reports Index page, click the New Report button.
3. 
  On the New Custom Report Type page, select the report type as Deliverability.

  ![New_Custom_Report_-_Deliverability.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXA9.05T5g00000BkXA9EAN.png)
4. Choose the name, schedule, and delivery details for the report. See Step 1 - Schedule & Delivery for more details.
5. Choose the report details including the metrics to be included in the report. See Step 2 - Report Details for more details.
6. Finally, when you are done setting up the report, click Submit.

Once the report is generated, you can download the report from the Notification panel. You can also view and download the report from the Custom Reports Index page. In the Navigation, go to Analytics and then select Custom Reports to open the Custom Reports Index page.

### Step 1 - Schedule & Delivery

In this step, you choose the name, schedule, and delivery details for the report.

![Deliverability_Report_Step_1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXA7.05T5g00000BkXA7EAN.png)
Select from or enter values for the following fields:

- **New Report Name:** Enter the name of the report.
-   -     -       -         - **Report Date Range:** Enter the date range for the report. The date range you enter will be used to select all campaigns that were delivered and responses received within that range. Both 'from' and 'to' dates are inclusive, that is, the report will be generated from 12 AM of the 'from' day to 11:59 PM of the 'to' day.

> **Note:** The dates and times are in Eastern Time Zone.

      **Once** - Select this option if you just want to generate the report once.
    -       - **Recur Every:** Select whether to generate the report daily, weekly, monthly, or yearly.
      - **Time:** Specify the time of day (in the Eastern Time Zone) at which the report is to be generated.
      - **Delivery Date:** Specify the date on which the report starts getting generated.

      **Recurring** - Select this option if you want to generate the report on a recurring basis.

  **Schedule Report:** Select frequency and time range for the report generation.

-   - **Recipient Email:** Enter the email address of the recipient.
  - **Subject:** Enter a subject line for the email.
  - **Message:** Enter a message to be sent in the email.

  **Delivery Details**

Specify the delivery details to send the report through email.

**Note**:

- You must provide an email address to receive the recurring report.
- The totals in the report reflect the delivery and response data collected from the preceding time period based on the recurring interval that you have selected. For example, if on Wednesday, you created the custom report and selected the option to have the recurring report generated every day at 6 AM, then Thursday's report will include total delivery and response data collected from 6 AM Wednesday to 6 AM Thursday.

### Step 2 - Report Details

In this step, you specify the report details such as report output type, date format, and the metrics to be included in the report. Here, you can select the ISP and performance metrics data that you need. The report will contain the metrics information broken down by the ISP.

![Deliverability_Report_Step_2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXA8.05T5g00000BkXA8EAN.png)
Select from or enter values for the following fields:

- **Report Type:** Select the file type for the output of the report.
- **Date Format:** Select the date format in which the dates in the report are to be shown. Currently, the supported date formats are MM/DD/YYYY and DD/MM/YYYY.
- **ISP:** Select the ISPs for which you want to get the data.
- **Performance Metrics:** Select the metrics that you want to include in the output file.

## Related Articles

**Analytics & Reporting:**

- [Email Campaign Reports](https://galaxy.maropost.com/kb/articles/846-email-campaign-reports) - Comprehensive campaign performance analysis and metrics
- [AB Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Track A/B test performance and optimization insights
- [Advanced Web Tracking](https://galaxy.maropost.com/kb/articles/855-advanced-web-tracking) - Monitor website visitor behavior and engagement

**Campaign Management:**

- [Creating AB Campaigns](https://galaxy.maropost.com/kb/articles/927-creating-ab-campaigns) - Set up A/B tests to optimize campaign performance
- [Creating Transactional Email Campaigns](https://galaxy.maropost.com/kb/articles/921-creating-transactional-email-campaigns) - Build automated transactional email campaigns