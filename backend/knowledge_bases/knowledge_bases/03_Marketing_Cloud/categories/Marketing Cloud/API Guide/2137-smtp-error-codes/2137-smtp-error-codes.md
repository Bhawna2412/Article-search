---
title: "SMTP Error Codes"
articleID: 2137
category: "API Guide"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-16
---

# SMTP Error Codes

Errors with invalid or missing required X-Headers result in an immediate bounce code issued from Maropost’s email exchange server. If a transactional email fails further on in the process, then the error will appear in the transactional campaign’s email bounce report.

| Bounce Code | Message | Reason |
| --- | --- | --- |
| 500 5.5.2 | unrecognized command | The wrong SMTP command was sent by the client application. |
| 501 5.5.2 | MAIL FROM syntax error | The FROM email address is in the wrong format. |
| 501 5.5.2 | RCPT TO syntax error | The TO email address is in the wrong format. |
| 503 5.5.1 | RCPT TO without MAIL FROM | The FROM email address is missing. |
| 503 5.5.1 | DATA without MAIL FROM | The client tries to send data without prior email sending. |
| 503 5.5.1 | DATA without RCPT TO | The TO email address is missing. |
| 554 | Transaction failed[Missing Header X-ApiKey] | The X-ApiKey is missing from the email headers. |
| 554 | Transaction failed[Missing Header X-CampaignID] | The X-CampaignID header is missing. (Required ONLY if you log in to app.maropost.com) |
| 554 | Transaction failed[Invalid X-CampaignID] | The X-CampaignID header is in the wrong format. The Campaign ID is always an integer. |
| 554 | Transaction failed[Missing Required Headers From or To[see RFC2822 section 3.6]] | The message sent to Maropost’s SMTP API is missing the standard required headers. |
| 554 | Transaction failed[Missing Header X-CampaignName] | X-Campaign Name is missing from the email header. |
| 554 | Transaction failed[Missing Header X-AccountID] | X-AccountID is missing from the email header. |
| 554 | Transaction failed[Invalid Header X-AccountID] | X-AccountID is in the wrong format. The Account ID is always an integer. |
| 554 | Transaction failed[Service Temporarily Unavailable. Please try after a few minutes.] | An extremely rare response that may occur if the SMTP service is temporarily unavailable. |
| 554 | Transaction failed[Cc recipients are not supported by this server] | Marketing Cloud's transactional emails do not support CC:. |