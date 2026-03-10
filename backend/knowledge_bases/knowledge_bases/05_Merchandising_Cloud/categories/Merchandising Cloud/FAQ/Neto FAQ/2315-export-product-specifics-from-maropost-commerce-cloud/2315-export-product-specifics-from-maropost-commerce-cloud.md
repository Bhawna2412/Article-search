---
title: "Export Product Specifics from Maropost Commerce Cloud"
articleID: 2315
category: "FAQ > Neto FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# Export Product Specifics from Maropost Commerce Cloud

In order to export the Product Specifics, you would need to use [@ebay _specifics@] field. However, this field contains information for all specifics at once.
In order to split the values into separate fields, you would need to set up this rule:

```perl
Generic Product Specifics Export Rule
"[%split delimiter:';' data1:'[@ebay_specifics@]'%][%param *body%][%split delimiter:':' data1:'[@data1@]'%][%param *body%][%if [@^is_field@]%][@data1@][%/if%][%if [@count@] == 0 AND [@data1@] eq 'PRODUCT_SPECIFIC_NAME'%][%set [@^is_field@] %]y[%/set%][%/if%][%if [@^is_field@] AND [@count@] == 1%][%set [@^is_field@] /%][%/if%][%/param%][%/split%][%/param%][%/split%]"
```

If you have a Product Specific called Size, then in order to export the feed you would put the title 'size' in the **FILE HEADER** section (Note: this field is exported by default via Merchandising Cloud Addon), and then set the corresponding rule for this field in **FILE BODY - body** section:

```perl
Example To Export Size Product Specific
"[%split delimiter:';' data1:'[@ebay_specifics@]'%][%param *body%][%split delimiter:':' data1:'[@data1@]'%][%param *body%][%if [@^is_size@]%][@data1@][%/if%][%if [@count@] == 0 AND [@data1@] eq 'Size'%][%set [@^is_size@] %]y[%/set%][%/if%][%if [@^is_size@] AND [@count@] == 1%][%set [@^is_size@] /%][%/if%][%/param%][%/split%][%/param%][%/split%]"
```

If you need to export multiple Product Specifics, then please use the option_list solution:

```perl
Export Multiple Product Specifics
[%set [@hideme@]%][%if [@ebay_specifics@] ne ''%][%option_list values:'[@ebay_specifics@]' option_separator:';' value_separator:':'%][%param *body%][%site_value id:'[@sku@]-[@value@]' body:'[@title@]'/%][%/param%][%/option_list%][%/if%][%/set%]"[%site_value id:'[@sku@]-Colour' type:'load' /%]","[%site_value id:'[@sku@]-Size' type:'load' /%]","[%site_value id:'[@sku@]-ANY_OTHER_PRODUCT_SPECIFIC' type:'load' /%]",...
```

Alternatively, you can use the Product Specific id to export:

```perl
Export a Product Specific using a PS id
"[%format type:'csv'%][%item_specifics id:'[@sku@]'%][%param *body%][%if [@itmspec_id@] eq 'PRODUCT_SPECIFIC_ID'%][@itmspecval_value@][%/if%][%/param%][%/item_specifics%][%/format%]"
```