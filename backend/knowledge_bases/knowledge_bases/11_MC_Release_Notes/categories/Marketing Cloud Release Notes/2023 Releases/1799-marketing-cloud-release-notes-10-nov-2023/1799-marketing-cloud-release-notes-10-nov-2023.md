---
title: "Marketing Cloud Release Notes - 10 Nov 2023"
articleID: 1799
category: "2023 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-08-07
---

# Marketing Cloud Release Notes - 10 Nov 2023

### **OVERVIEW:**

This release includes an enhancement to the product recommendation feature and the renaming of the Do Not Mail Lists APIs.

For details, please read on!

### **ENHANCEMENTS AND UPDATES:**

#### **Product Catalog Enhancement**

The product link on your product recommendation emails will now take your users to the exact product instead of the storefront page.

Earlier, the **Store URL** field for the products in the Product Catalog was mapped to the storefront URL. So, when clicked, the product link took the users to the storefront page and not directly to the product. Now, with every successful integration, we import the product URLs into Marketing Cloud, and therefore, the Store URL field for individual products is mapped directly to the product page.

**Note**: If the eCommerce platform does not expose the product URLs, the Store URLs will still be mapped to the storefront page.

To learn about the Product Catalogs, see [**Product Catalog**](https://galaxy.maropost.com/s/article/Product-Catalog). 

![prod0](https://us.v-cdn.net/6038474/uploads/attachments/migrated/prod0.0685g00000HjIDPAA3.png)

#### **Changes to the API method for Do Not Mail List**

The API method names for Marketing Cloud’s Do Not Mail Lists have been changed from “**/global_unsubscribes**” to “**/general_unsubscribes**”. The change is intended to eliminate the confusion around the naming inaccuracies.

**What Changed?**

We renamed the Do Not Mail List API methods from “/global_unsubscribes” to “/general_unsubscribes”. These changes are also reflected in the payloads of the various methods.

**What Do You Need to Do?**

Please check and update your systems, as needed. Note that we are still supporting method calls to “/global_unsubscribes” so that you can make the updates at your own schedule.

- 
- 

For any queries, reach out to **support@maropost.com**.