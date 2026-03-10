---
title: "Omit Categories"
articleID: 2316
category: "FAQ > Neto FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# Omit Categories

> ❗️ IMPORTANT!
> Use this setup only in rare cases!
Removing categories with this approach may cause issues to Merchandising Cloud's Collections Importer.

# Steps for how to omit categories from Merchandising Cloud:

1. Edit Merchandising Cloud add-on
2. Add Find and Replace

If you don't want to show certain categories in Merchandising Cloud's search results/collections, you would need to omit those categories from the product feed export template.

## Step 1: Edit Merchandising Cloud add-on

Go to your "CPanel" → "Addons" → find Merchandising Cloud add-on → click on "edit".

![d05d7147-487c-421e-851d-9a4c1b4fc5f7 (2).png](https://us.v-cdn.net/6038474/uploads/8NKZDTU5P8JI/d05d7147-487c-421e-851d-9a4c1b4fc5f7-282-29.png)
In the Export template section, click on the 'Find and Replace' tab:

![Image](https://files.readme.io/6c73926-Neto_FAQ_Findify_Find_Replace.png)

## Step 2: Add Find and Replace

In this section click on the 'Add Find and Replace':

![Image](https://files.readme.io/4e55a53-Neto_FAQ_Findify_Find_Replace_button.png)
You would need to type in categories into the first input, leave the second one as is, and set the tags field to "Category Table (Product Category)" and "Product Category Full Path List".

If you have a list of categories that you want to omit, you would need to put them into separate entries. If you want to omit nested, you would need to use this structure: 'Parent category > Child Category':

![7a971a9-Neto_FAQ_Findify_Example (1).png](https://us.v-cdn.net/6038474/uploads/IF3CQT5JMBX5/7a971a9-neto-faq-findify-example-281-29.png)