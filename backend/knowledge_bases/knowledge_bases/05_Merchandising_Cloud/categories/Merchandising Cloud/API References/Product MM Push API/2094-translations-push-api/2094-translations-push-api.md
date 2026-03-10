---
title: "Translations Push API"
articleID: 2094
category: "API References > Product MM Push API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Translations Push API

## Base URL

**POST** `https://pushapi.findify.io/v3/product`

Use this endpoint to send product translations according to your Multimarket Configuration.

> **Note:** **Note:** You must first push your Multimarket Configuration and send an initial Product + Variant push before using the Translations API.

## Payload Schema

```json
{
  "operation": "update",
  "item_groups": [
    {
      "item_group_id": "Some Product ID",
      "variants": [
        {
          "id": "Some Variant ID",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Translated swedish title value",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "color",
                  "value": "Translated swedish color value",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "category",
                  "value": "(translated)kategorier1 > kategorier2 > kategorier3 ### kategorier4 > kategorier5 > kategorier6",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "description",
                  "value": "Translated swedish description value",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                ...
              ]
            },
            ...
          ]
        },
        ...
      ]
    }
  ]
}
```

## Fields Explained

| Field | Type | Options | Description |
| --- | --- | --- | --- |
| operation | String | `update` | Type of the operation you want to execute, you need to use `update` for translations |
| item_groups.item_group_id | String | Product ID | Product ID in your system |
| variants | Object[] |  | Array of variant objects, more on Variants fields see below |

Variants Fields: 

| Field | Type | Options | Description |
| --- | --- | --- | --- |
| id | String | Variant ID | Variant ID in your system |
| field_groups | Object[] |  | Array of fields sent on the variant level |
| groupType | String | `product_translation` | For Translations, you need to use: `product_translation` |
| fields | Object[] |  | Array of fields to be translated |
| fields[].name | String |  | Product/variant field name |
| fields[].value | `String`, `String[]`, `Double`, `Double[]`, `Bool`, `Object[]` |  | Translated field Value |
| fields[].type | String | `string`, `stringArray`, `double`, `doubleArray`, `boolean`, `currency` | Type of the field |
| context | Object |  | Object for `context` |
| context.locale | String | [Supported Languages Documentation](https://galaxy.maropost.com/kb/articles/1985-supported-languages?utm_source=community-search&utm_medium=organic-search&utm_term=supported) | Specify a locale (i.e. language) that you want to push defined in the Multi Market Configuration |

## Sample Product with Translations

| **PRODUCT A** | **Base Language (English)** | **French** | **Italian** | **German** | **Swedish** |
| --- | --- | --- | --- | --- | --- |
| Group_ID | 10001 |  |  |  |  |
| Category | Clothing & Accessories > Clothing > Dresses | Vêtements et accessoires > Vêtements > Robes | Abbigliamento e accessori > Abbigliamento > Vestiti | Kleidung & Accessoires > Kleidung > Kleider | Kläder & Accessoarer > Kläder > Klänningar |
| Product_Title | Pleated Sleeve Tunic |  |  |  |  |
| Description | Great summer dress | Superbe robe d'été | Bellissimo vestito estivo | Tolles Sommerkleid | Fin sommarklänning |
| image_url |  |  |  |  |  |
| product_url | [https://continental.market-demo.findify.io/collections/all/products/pleated-sleeve-tunic-in-white?variant=44096977207591](https://continental.market-demo.findify.io/collections/all/products/pleated-sleeve-tunic-in-white?variant=44096977207591) |  |  |  |  |
| thumbnail_url |  |  |  |  |  |
|  |  |  |  |  |  |
| Variant ID | V10001BS |  |  |  |  |
| Title | Pleated Sleeve Tunic in Blue | Tunique à manches plissées en bleu | Tunica con maniche plissettate in blu | Tunika mit plissierten Ärmeln in Blau | Tunika med plisserade ärmar i blått |
| Color | Blue | bleu | blu | blau | blå |
| Size | Small | petit | piccolo | klein | liten |
| Material | Cotton | coton | cotone | Baumwolle | bomull |
| Brand | Nike |  |  |  |  |
| availability | in stock |  |  |  |  |
| created_at | 2014-04-22T06:00:00Z |  |  |  |  |
| updated_at | 2014-04-22T06:00:00Z |  |  |  |  |
|  |  |  |  |  |  |
| Variant ID | V10001BM |  |  |  |  |
| Title | Pleated Sleeve Tunic in Blue | Tunique à manches plissées en bleu | Tunica con maniche plissettate in blu | Tunika mit plissierten Ärmeln in Blau | Tunika med plisserade ärmar i blått |
| Color | Blue | bleu | blu | blau | blå |
| Size | Medium | moyen | medio | mittel | medium |
| Material | Cotton | coton | cotone | Baumwolle | bomull |
| Brand | Nike |  |  |  |  |
| availability | in stock |  |  |  |  |
| created_at | 2014-04-22T06:00:00Z |  |  |  |  |
| updated_at | 2014-04-22T06:00:00Z |  |  |  |  |
|  |  |  |  |  |  |
| Variant ID | V10001GS |  |  |  |  |
| Title | Pleated Sleeve Tunic in Green | Tunique à manches plissées en vert | Tunica con maniche plissettate in verde | Tunika mit plissierten Ärmeln in Grün | Tunika med plisserade ärmar i grönt |
| Color | Green | vert | verde | grün | grön |
| Size | Small | moyen | medio | mittel | medium |
| Material | Cotton | coton | cotone | Baumwolle | bomull |
| Brand | Nike |  |  |  |  |
| availability | in stock |  |  |  |  |
| created_at | 2014-04-22T06:00:00Z |  |  |  |  |
| updated_at | 2014-04-22T06:00:00Z |  |  |  |  |

## Sample Product Push API Translations Requests Payloads

Example request payloads for different locales:

### French (`fr`)

```json
{
  "operation": "update",
  "item_groups": [
    {
      "item_group_id": "10001",
      "variants": [
        {
          "id": "V10001BS",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunique à manches plissées en bleu",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "color",
                  "value": "bleu",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "size",
                  "value": "petit",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "material",
                  "value": "coton",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "category",
                  "value": "Vêtements et accessoires > Vêtements > Robes",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "description",
                  "value": "Superbe robe d'été",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001BM",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunique à manches plissées en bleu",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "color",
                  "value": "bleu",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "size",
                  "value": "moyen",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "material",
                  "value": "coton",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "category",
                  "value": "Vêtements et accessoires > Vêtements > Robes",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "description",
                  "value": "Superbe robe d'été",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001GS",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunique à manches plissées en vert",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "color",
                  "value": "vert",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "size",
                  "value": "moyen",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "material",
                  "value": "coton",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "category",
                  "value": "Vêtements et accessoires > Vêtements > Robes",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                },
                {
                  "name": "description",
                  "value": "Superbe robe d'été",
                  "type": "string",
                  "context": {
                    "locale": "fr"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

### Italian (`it`)

```json
{
  "operation": "update",
  "item_groups": [
    {
      "item_group_id": "10001",
      "variants": [
        {
          "id": "V10001BS",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunica con maniche plissettate in blu",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "color",
                  "value": "blu",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "size",
                  "value": "piccolo",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "material",
                  "value": "cotone",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "category",
                  "value": "Abbigliamento e accessori > Abbigliamento > Vestiti",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "description",
                  "value": "Bellissimo vestito estivo",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001BM",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunica con maniche plissettate in blu",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "color",
                  "value": "blu",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "size",
                  "value": "medio",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "material",
                  "value": "cotone",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "category",
                  "value": "Abbigliamento e accessori > Abbigliamento > Vestiti",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "description",
                  "value": "Bellissimo vestito estivo",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001GS",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunica con maniche plissettate in verde",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "color",
                  "value": "verde",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "size",
                  "value": "medio",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "material",
                  "value": "cotone",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "category",
                  "value": "Abbigliamento e accessori > Abbigliamento > Vestiti",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                },
                {
                  "name": "description",
                  "value": "Bellissimo vestito estivo",
                  "type": "string",
                  "context": {
                    "locale": "it"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

### German (`de`)

```json
{
  "operation": "update",
  "item_groups": [
    {
      "item_group_id": "10001",
      "variants": [
        {
          "id": "V10001BS",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunika mit plissierten Ärmeln in Blau",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "color",
                  "value": "blau",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "size",
                  "value": "klein",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "material",
                  "value": "Baumwolle",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "category",
                  "value": "Kleidung & Accessoires > Kleidung > Kleider",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "description",
                  "value": "Tolles Sommerkleid",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001BM",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunika mit plissierten Ärmeln in Blau",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "color",
                  "value": "blau",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "size",
                  "value": "mittel",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "material",
                  "value": "Baumwolle",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "category",
                  "value": "Kleidung & Accessoires > Kleidung > Kleider",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "description",
                  "value": "Tolles Sommerkleid",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001GS",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunika mit plissierten Ärmeln in Grün",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "color",
                  "value": "grün",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "size",
                  "value": "mittel",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "material",
                  "value": "Baumwolle",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "category",
                  "value": "Kleidung & Accessoires > Kleidung > Kleider",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                },
                {
                  "name": "description",
                  "value": "Tolles Sommerkleid",
                  "type": "string",
                  "context": {
                    "locale": "de"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

### Swedish (`sv`)

```json
{
  "operation": "update",
  "item_groups": [
    {
      "item_group_id": "10001",
      "variants": [
        {
          "id": "V10001BS",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunika med plisserade ärmar i blått",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "color",
                  "value": "blå",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "size",
                  "value": "liten",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "material",
                  "value": "bomull",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "category",
                  "value": "Kläder & Accessoarer > Kläder > Klänningar",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "description",
                  "value": "Fin sommarklänning",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001BM",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunika med plisserade ärmar i blått",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "color",
                  "value": "blå",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "size",
                  "value": "medium",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "material",
                  "value": "bomull",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "category",
                  "value": "Kläder & Accessoarer > Kläder > Klänningar",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "description",
                  "value": "Fin sommarklänning",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "V10001GS",
          "field_groups": [
            {
              "groupType": "product_translation",
              "fields": [
                {
                  "name": "title",
                  "value": "Tunika med plisserade ärmar i grönt",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "color",
                  "value": "grön",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "size",
                  "value": "medium",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "material",
                  "value": "bomull",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "category",
                  "value": "Kläder & Accessoarer > Kläder > Klänningar",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                },
                {
                  "name": "description",
                  "value": "Fin sommarklänning",
                  "type": "string",
                  "context": {
                    "locale": "sv"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## FAQ

**Q: What happens if a translation is missing for a field?**
**A:** If *all* products are missing a translation for a field, the default language will be used. If *only some* products are missing it, behavior is TBD (To Be Confirmed).

Need help formatting translations or market configurations? Contact [support@maropost.com](mailto:support@maropost.com).