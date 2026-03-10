---
title: "Deploy - Franchise Connect (Head Office)"
articleID: 1203
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-06
---

# Deploy - Franchise Connect (Head Office)

# Deploy - Franchise Connect (Head Office)

This article explains how to deploy a Franchise Connect database once a signed contract has been received and paid for:

Create New Head Office Database

![rtaImage (38).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powZOEAY.jpg)

1. Login to MGMT

2. Navigate to **HeadOffice > New HO**

3. Enter details as follows:

*Site Name:* Company Trading As name (no spaces and CamelCase)

*Site Type:* select 'ClientSite' from dropdown

*Server Set:* select default from dropdown menu

*ARI Industry/Vertical:* select appropriate retail vertical from dropdown

4. Click on **Create HO Site**button

5. Ensure that a success message is returned - if process fails advise the development team

Linking up databases to 

![rtaImage (39).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powa6EAA.jpg)

1. When a database is ready to be connected to the Head Office Module go to **HeadOffice > HO Site List**

2. Filter by company name in **Admin Link**

3. Clink on **Edit Members** this will bring up a popup screen where you can select the databases to associate:

![rtaImage (40).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powaBEAQ.jpg)

4. Scroll down the **Non Members** list until you have found the database name to add and then click on the arrow facing right icon and it will move this database name into the **Members** list.

5. Once you have repeated this process as necessary click on the **Submit button**

6. Back in the Head Office Sites list you will see that the **Member Count**has increased accordingly

Zendesk - Sending the email 

![rtaImage (41).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powaGEAQ.jpg)

1. Add a new ticket

2. Add the email address for the contact on the solutions agreement

3. Select the macro **Implementation > Deployment > Franchise Connect**

4. Replace *ClientName, password, linked db names* with the relevant information for the client

5. Submit the ticket as Solved

For Franchisee deployment, see also [Franchise Connect - Franchisee Configuration](https://galaxy.maropost.com/s/article/Franchise-Connect-Franchisee-Configuration "Franchise Connect - Franchisee Configuration")