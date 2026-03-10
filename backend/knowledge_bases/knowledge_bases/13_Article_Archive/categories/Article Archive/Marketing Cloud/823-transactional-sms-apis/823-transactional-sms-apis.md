---
title: "Transactional SMS APIs"
articleID: 823
category: "Marketing Cloud"
knowledgeBase: "Article Archive"
lastUpdated: 2025-09-08
---

# Transactional SMS APIs

Marketing Cloud's **Transactional SMS APIs** can be used to create and deliver transactional SMS campaigns. In this article, you can find information that will help you use the APIs.

### In this Article

- Create Transactional SMS API
- Send Transactional SMS API

## Create Transactional SMS API

### Method Details

**POST /v2/:account_id/sms_campaigns.json**

This method creates a transactional SMS campaign object in the account. The transactional SMS campaign object must exist before it can be sent. This REST method presents an alternative to creating the campaign object. Typically, the transactional SMS campaign object is created directly within the Marketing Cloud application.

Once the Transactional SMS Campaign is created, it can be found in Marketing Cloud by navigating to **CAMPAIGNS **> **Transactional SMS Campaigns**.

**Note**: You can also create a transactional SMS Campaign on the user interface instead of using the API. For more information, see [**Transactional SMS Campaigns**](https://galaxy.maropost.com/s/article/Transactional-SMS-Campaigns).

### Payload

```json
{"sms_campaign":

    {

        "name":"My Transactional SMS Campaign",

        "message":"This is the message of the transactional text message",

        "from_number":"+18555295705",

        "enable_click_tracking":true,

        "organization_name":"Maro12",

        "organization_link":"https://www.apple.com",

        "opt_out":true,

        "compliance_order":["organization_name","message","organization_link"],

        "status": "trans"

    }

}
```

### Attributes

| **Attribute** | **Definition** | **Required?** |
| --- | --- | --- |
| name | The name of the Transactional SMS campaign as it will appear in Marketing Cloud. The name must also be unique. | YES |
| message | A string of text that will be sent in the transactional text message. The text can include emojis. However, note that emojis and other special characters – including letters with diacritics – decreases the number of characters per message. | YES |
| from_number | The sending number assigned to the account | YES |
| enable_click_tracking | The default setting is `TRUE`. Marketing Cloud will substitute all URLs in the message with the shortened URL and track the clicks | NO |
| organization_name | Sets the organization name as required for SMS compliance | YES |
| organization_link | Sets the organization information link as required for SMS compliance | YES |
| opt_out | The default setting is `TRUE`. If `FALSE`, then the words "Text STOP to opt-out" will not be included in the text message. | NO |
| compliance_order | Define the order of the company name, the text message, and the company link as defined in the Transactional SMS campaign’s Compliance settings. | YES |
| status | Set this attribute value to `"trans"`. Defines this SMS campaign object as one used for Transactional text messages. | YES |

### Response Codes

| **Code** | **Definition** |
| --- | --- |
| 201 | A successfully created Transactional SMS Campaign object |
| 422 | An error in the payload. It will either be a required element missing from the payload or an invalid attribute value. |

## Send Transactional SMS API

### Method Details

**POST /v2/:account_id/sms_campaigns/deliver.json**

This method sends a transactional text message to an individual’s mobile device. The transactional SMS campaign object must exist in the account before it can be sent. The transactional SMS campaign object can be created either via the POST /sms_campaigns.json REST method or within the Marketing Cloud application. For more information, see [**Transactional SMS Campaigns**](https://galaxy.maropost.com/s/article/Transactional-SMS-Campaigns).

### Payload

```json
{

   "sms":{

      "sms_campaign_id": 1234,

      "message":"This is an optional message",

      "from_number":"+18555295705",

      "enable_click_tracking":true,

      "ignore_dnm":true,

      "sms_contact":"+15558675309",

      "sms_compliance":{

         "compliance_order":[

            "organization_name",

            "message",

            "organization_link"

         ],

         "organization_name":"Magellan Enterprises",

         "organization_link":"https://www.example.com",

         "opt_out":true

      },

      "tags":{

         "order_id":"12345",

         "currency":"USD",

         "amount":"199.95"

      }

   }

}
```

### Attributes

| **Attribute** | **Definition** | **Required?** |
| --- | --- | --- |
| sms_campaign_id | The transactional SMS campaign ID from the Marketing Cloud account | YES |
| message | A string of text that overrides the message content in the transactional SMS campaign created in Marketing Cloud. | NO |
| from_number | The sending number assigned to the account | YES |
| enable_click_tracking | The default setting is `TRUE`. Marketing Cloud will substitute all URLs in the message with the shortened URL and track the clicks | NO |
| ignore_dnm | The default setting is `FALSE` If `TRUE`, then a mobile contact in the Do Not SMS List will receive the Transactional SMS message. | NO |
| sms_contact | The mobile number (including country code) of the device receiving the text message. | YES |
| sms_compliance : compliance_order | When provided, overrides the order of the company name, the text message, and the company link as defined in the Transactional SMS campaign’s Compliance settings. | NO |
| sms_compliance : organization_name | When provided, overrides the organization name as defined in the Transactional SMS campaign’s Compliance settings | NO |
| sms_compliance : organization_link | When provided, overrides the company information link as defined in the Transactional SMS campaign’s Compliance settings | NO |
| sms_compliance : opt_out | The default setting is `TRUE`. If `FALSE`, then the words "Text STOP to opt-out" will not be included in the text message. | NO |
| tags | The array that stores substitution tags in the body of the text message. Example: The text message is the following: **Here is your Order Confirmation:** **Order ID {{tag.order_id}} for the amount of {{tag.amount}} {{tag.currency}}** The payload includes the actual values that will be substituted into the text message before it is sent to the recipient. |  |

### Response Codes

| **Code** | **Definition** |
| --- | --- |
| 200 | A successfully sent Transactional SMS Campaign |
| 422 | An error in the payload. It will either be a required element missing from the payload or an invalid attribute value. |