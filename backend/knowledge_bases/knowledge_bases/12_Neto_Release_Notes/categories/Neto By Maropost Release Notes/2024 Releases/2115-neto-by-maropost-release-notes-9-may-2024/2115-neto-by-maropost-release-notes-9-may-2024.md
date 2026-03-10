---
title: "Neto by Maropost Release Notes – 9 May 2024"
articleID: 2115
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 9 May 2024

## **Overview**

This release contains updates of Ecommerce versions **6.292.0** and **6.293.0**.

## **Enhancements and Updates**

### **Added a Condition Descriptor for eBay Listings**

Neto has added a new section called Condition Descriptor in the Configuring eBay Listing page. This will allow merchants to configure trading card listings and their specifics.

While registering a [trading card listing in eBay](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.ebay.com.au%2Fsellercentre%2Fselling-trading-cards), the seller needs to provide info about the trading cards, such as information regarding the condition of the card (used, brand new, and so on). The user can add all the relevant details in the Condition Descriptor section.

The **Item Condition** field accepts 2 conditions:

- 
  If the user selects the **Ungraded **option, the user needs to define the **Card Condition** from the options shown below.

  ![image (2)](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image2.068J1000000U2gHIAS.png)
- 
  If the user selects the **Graded** option, the user needs to select the **Professional Grader** from the given options and select the **Grade** the trading card has been rated.

  ![image (3)](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image3.068J1000000U2ggIAC.png)

## **Fixes**

**Discrepancies while exporting Invoices to Unleashed**

In a few instances, some discrepancies were discovered in recording stock levels when exporting invoices to Unleashed due to some latency issues. This has been fixed. 

**Webstore Orders linked to non-registered customers**

In some cases, orders being created via the webstore checkout page, were getting linked with the non-registered customer card instead of linking the orders to existing customer cards with the matching email address. This issue has been fixed.

**Latency issue while printing MyPost Business labels**

In some cases, the printing of MyPost Business labels was affected due to bad latency. This issue has been fixed by making some database changes and optimising the process to fetch the labels, resulting in significant speed improvements.