---
title: "Export Custom Fields from Maropost Commerce Cloud to Merchandising Cloud's"
articleID: 2314
category: "FAQ > Neto FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# Export Custom Fields from Maropost Commerce Cloud to Merchandising Cloud's

If you want to export a specific custom field for search/customizations purposes, please proceed to your "Maropost Commerce Cloud Cpanel" (**store_name/_cpanel**) -> Addons" -> find "Findify" app -> click on to edit the product feed:

![d05d7147-487c-421e-851d-9a4c1b4fc5f7 (1).png](https://us.v-cdn.net/6038474/uploads/5EUNXVSTW61Y/d05d7147-487c-421e-851d-9a4c1b4fc5f7-281-29.png)
In the product feed section, find 2 text fields:

- **FILE HEADER** - for CSV file header.
- **FILE BODY - body** - for CSV file logic on which field and how to export it.

The **FILE HEADER** field should contain the field name separated by a comma.
**FILE BODY - body** field should contain the logic for corresponding fields in the header. 

All functions and logic should inserted in double-quotes and should meet the Maropost Commerce Cloud B@SE tag library requirements . For more information, please proceed [here](https://developers.neto.com.au/documentation/web-designers/base-tag-library/).

> **Note:** **NOTE**: Make sure that after **FILE HEADER** and **FILE BODY - body** fields are written in one line, and have the new line inserted after it. This is is crucial for Maropost Commerce Cloud to export the file in the correct CSV format.

![Image](https://files.readme.io/9b6a29d-Custom_field_Neto.png)
Some fields can be exported in the invalid CSV format. In order to make it CSV valid - please wrap the field logic in the [%format%] tag as noted [here](https://developers.neto.com.au/documentation/web-designers/base-tag-library/).

Once the field export updates are completed, you would need to run a manual product sync on Maropost Commerce Cloud side and then on the Merchandising Cloud’s side, as noted in the Product Sync.