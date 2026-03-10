---
title: "Generating BigCommerce Credentials"
articleID: 1994
category: "Merchandising Cloud Integrations > BigCommerce and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# Generating BigCommerce Credentials

You can generate BigCommerce API credentials to establish secure connections between your store and Merchandising Cloud, enabling automatic product data synchronization and personalization features. Creating read-only API access with appropriate permissions ensures data security while allowing the platform to retrieve product information, inventory levels, and order data needed for AI-powered personalization algorithms.

Following these credential generation steps helps streamline the BigCommerce integration process. The API credentials establish the technical foundation for Active Sync functionality, ensuring your product catalog, pricing, and inventory remain continuously up-to-date in Merchandising Cloud-critical for maintaining accurate search results and recommendations that reflect current product availability and drive conversion.

This document outlines the steps for updating or generating new BigCommerce API credentials, which are required for Maropost Merchandising Cloud (formerly Findify) integration. Follow these instructions to create API credentials in your BigCommerce store and share them securely with Merchandising Cloud.

## **Steps to Generate API Credentials**

1. Access the BigCommerce Admin Panel:  - Navigate to the BigCommerce admin panel: [https://www.bigcommerce.com](https://www.bigcommerce.com/).
  - In the left-hand menu, click on 'Settings'.
2. Create API Account:  - In the Settings menu, select 'Store-level API accounts'.
  - Click on the 'Create API Account' button.
    ![64c59d165f869db3acad5bffc4c37bd02cb596af721b6bfc33eb4e3279a25079-4SrfOl.png](https://us.v-cdn.net/6038474/uploads/ASVAJR1GQV5W/64c59d165f869db3acad5bffc4c37bd02cb596af721b6bfc33eb4e3279a25079-4srfol.png)
3. Fill in the API Account Details:  - Name: Enter `Findify`.
  - API Path: ****Copy the URL from the panel and send it to us (this is the API path for your store).
    ![21fa05f6e8e9617ae4de838e350785a8f3338e6358989a50f5d48876786115f0-1.png](https://us.v-cdn.net/6038474/uploads/07OSRL3P0A6J/21fa05f6e8e9617ae4de838e350785a8f3338e6358989a50f5d48876786115f0-1.png)
  - Permissions:    - Content
    - Information & Settings
    - Orders
    - Products
    - Themes
    - Sites & Routes
    - Channel Settings
    - Store Inventory
    - Order Fulfillment
  - Access: Set all access to 'Read-only' as shown below:
    ![981d593299cd244e14f548b488c50cc4e33f70173ea34e45d6bf60c62f44d2b3-pic3.jpg](https://us.v-cdn.net/6038474/uploads/85QBX4JF45KM/981d593299cd244e14f548b488c50cc4e33f70173ea34e45d6bf60c62f44d2b3-pic3.jpg)
4. Save the API Account:  - Once you have entered the details, click 'Save**'**.
  - A popup will appear containing the credentials you need.
    ![aa8cb89adec88185088c75986bceb39dc53123b404d477111300cb3e9e5dd71c-2.png](https://us.v-cdn.net/6038474/uploads/PJZAOBIWH9SR/aa8cb89adec88185088c75986bceb39dc53123b404d477111300cb3e9e5dd71c-2.png)
5. Collect API Credentials:  - Do not close the popup until you have saved the following information locally:    - Client ID
    - Client Secret
    - Access Token
6. Send Credentials to us:  - Share the following information with us by emailing it to [support@maropost .com](mailto:support@maropost.com):    - API Path
    - Client ID
    - Client Secret
    - Access Token

> Note: Ensure that the credentials are saved securely and do not share them via unsecured channels.

> Note: This documentation can be used to update existing credentials as well as onboarding new accounts.

If you have any further questions, or encounter any issues, please don't hesitate to reach out to us on [support@maropost .com](mailto:support@maropost.com).