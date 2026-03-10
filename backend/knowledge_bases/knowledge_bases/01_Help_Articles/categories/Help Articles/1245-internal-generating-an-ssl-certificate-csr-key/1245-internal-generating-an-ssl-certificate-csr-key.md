---
title: "Internal - Generating an SSL certificate (CSR key)"
articleID: 1245
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Internal - Generating an SSL certificate (CSR key)

# Internal - Generating an SSL certificate (CSR key)

To generate a CSR:

* Log onto WHM for the appropriate server
* To find out if you?re on the correct server, view the accounts under the ?List Accounts? section
* In the ?SSL? section open ?Generate an SSL Certificate and Signing Request?
* Leave the Key Size as ?2,048? and continue to the next section
* Enter the following sections as per the form from the client:
  + Domain
  + City
  + State (full spelling e.g. Queensland, not QLD)
  + Country
  + Company Name
* Press **Create**
* Copy the information into the email macro in zendesk and send to the client

To install a certificate:

* Click on List Accounts
* Click the CPanel icon
* Open the SSL/TLS Manager
* Paste the certificate in the box above
* Press Save
* Repeat for the Intermediate certificate
* If the install is greyed out, the site hasn?t been pushed live and the URL doesn?t match what?s on the account.