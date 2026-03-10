---
title: "Important Upcoming Security Change"
articleID: 1751
knowledgeBase: "Help Articles"
lastUpdated: 2021-10-21
---

# Important Upcoming Security Change

**Expected Date:** September 29th, 2020

**What is changing?**

We care about your reputation and securing the data of your customers. In conformance with modern security protocols, we have decided to **no longer support unsecure HTTP data transfers**.

## Who is impacted by this change?

All Maropost customers, as well as those who receive emails through Maropost’s platform, will benefit from this security change – adding an extra layer of protection of all personal information. 

Maropost Customers who are using the following may be impacted by this change and will be required to make changes on their end to migrate from HTTP to HTTPS: 

* REST APIs
* Relational Tables
* Integrations with 3Rd Parties:
  + Infusionsoft Integration
  + Salesforce Integration
  + Dynamic CRM Integration
  + Netsuite Integration
  + Shopify Integration
  + Magento Integration

**If you are not using any of the above integrations – you will not be impacted.**

If you are currently using any of the above integrations, you must confirm if the integration is transferring data using HTTP or HTTPS. Not sure how to find out? The best way to confirm if your integration is using HTTP vs HTTPS is to contact the technical members of your team that helped configure the integration initially. This team will inspect and step through the integration code to validate which connection type (HTTP or HTTPS) is being used. 

**If****you****r****integrations****are****already****using HTTPS – you will not be impacted by this change.** 

If you know or discover the integrations you are using are connected via HTTP – please read the below step-by-step instructions for each integration on the required changes your team will need to make to ensure no data transfer is lost, or integration is broken with this security update. 

## HTTP to HTTPS Migration Plans

* REST APIs
* Relational Tables
* Integrations with 3rd Parties

### REST APIs

As a reminder, our [REST API](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fapi.maropost.com%2Fapi) is the integration that your team has set up to allow your internal systems to speak to Maropost to share, edit and update data such as contacts, campaigns, lists, SMS campaigns, etc. 

Since each Maropost customer has a unique use case for the REST API, the safest way to identify what needs to be changed is to do the following:

* Engage in your technical team who helped build the integrations (forward this article to them)
* Have the team inspect their code step-by-step and identify any HTTP protocols
* Adjust these to HTTPS

📋  **Note:** Standard HTTP practice is to receive code 200 or 201 to indicate “success”. If you fail to change your REST API from HTTP to HTTPS, any calls made after the security update on June 23rd will respond with a 308 redirect code instead of a 200 or 201.

### Relational Tables

As a reminder, Relational Tables is a way to store more information into your database, such as storing a contact’s membership ID number, birthdate, or answer to a security question. Relational tables connect a contact stored in Maropost with this additional information.  If you are using Maropost’s relational tables to enrich your data, you are sending the extra data either via our REST API or through a MySQL Client Remote Connection. 

**Relational Tables via Rest API** 

If you are using our REST API to create and populate Relational Tables, please follow the [migration instructions for REST API](#h_f99a7a6c-44f6-482e-a503-d4b3093371f8).

**Relational Tables via MySQL Remote Client** 

If you are using a MySQL Remote Client to directly create and populate Relational Tables, please contact [support@maropost.com](mailto:support@maropost.com) to obtain a set of 3 files that are used for encrypting/decrypting data in transit.  Please be sure to include your Account ID in your request.

📋  **Note:** If you fail to update your encryption and secure your relational table data transfers by February 26th, 2021 you will not be able to connect and their automated jobs will fail.

### 3rd Party Integrations

If your organization is leveraging one of Maropost’s native integrations to connect with other tools within your ecosystem, such as Infusionsoft, Salesforce, Dynamic CRM, Netsuite, Shopify or Magento, updating your integration to be compatible with our new security policy is as simple as changing the URL within the "Post URL" field (this is where you would have the Maropost-generated API endpoint) from HTTP to HTTPS.