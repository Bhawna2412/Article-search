---
title: "Process - Sales History Migration"
articleID: 1324
knowledgeBase: "Help Articles"
lastUpdated: 2023-05-11
---

# Process - Sales History Migration

# Process - Sales History Migration

The following article outlines the process for importing a customer's Sales History from a previous system. This is typically part of the onboarding/implementation process, but may be requested by the support team as well.

**Important:**Ensure the customer record is updated in CRM as each step is achieved.

The Sales History Migration process is as per follows:

1. Send template to customer
2. Customer sends template back with data
3. Implementation Team Quality check
4. Ticket assigned to Development team
5. Dev team review
6. Issues to be rectified forwarded to the customer
7. Resubmit ticket to development team
8. Test database import
9. Review & confirm test
10. Final Import performed
11. Customer Advised
12. Tickets solved

---

## Send Template to Customer

To kickstart the process you will need to forward the [Sales Template - History](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fretexpress.sharepoint.com%2F%3Ax%3A%2Fs%2Fsalesmarketing%2FEZvv2MyusJpAlOQ8_bjzTNcBCiSt7lT2reISpIvc8U58ZA%3Fe%3DQd4Ipo) file to the customer. This template is made up of 3 tabs:

1. Order Headers
2. Order Lines
3. Data Dictionary

Each of the columns in the Order Headers and Order Line tabs can be found explained in more detail in the Data Dictionary tab:

![mceclip0.png](https://ress.zendesk.com/hc/article_attachments/360004589555/mceclip0.png)

[Back to top](#top)

## Customer sends template back with data

Customers will be able to send the file back using an online form - [Sales History Migration Form](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fforms.zohopublic.com%2Fvirtualoffice112%2Fform%2FSalesHistoryMigration%2Fformperma%2Fi5P5iKamL7gmf9aNHUer0yxsH5jBBdVaBtLjHpc_m_Y). This form allows customers to:

* Enter contact details for the staff responsible for discussing the template with Retail Express
* Upload the file
* Select a Payment Type for all payments to be associated against

Once the form is submitted an email will be sent to the customer and Retail Express ([implementation@retailexpress.com.au](mailto:implementation@retailexpress.com.au)). This will create a ticket in zendesk for ongoing communication.

[Back to top](#top)

## Implementation Team Quality Check

Once the file has been received the ticket in Zendesk will be sent to the implementation team for review.

As part of this process the Implementation team will need to confirm:

* Order Headers Tab
  + Outlet Names
  + Match the outlet names in the REX database
  + Customer Custom Reference matches this field in REX database
  + All sales have a valid Order ID
* Order Lines Tab
  + All SKUs exist in REX database
  + All lines have an Order ID