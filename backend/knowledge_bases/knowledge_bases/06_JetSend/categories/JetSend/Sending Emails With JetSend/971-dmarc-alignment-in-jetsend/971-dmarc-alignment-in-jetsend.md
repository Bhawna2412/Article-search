---
title: "DMARC Alignment in JetSend"
articleID: 971
category: "Sending Emails With JetSend"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-11
---

# DMARC Alignment in JetSend

During the email validation, DMARC checks the following identifiers: 'from' address email domain, return-path address, DKIM-signature domain. If one of the domains used by DKIM or SPF matches with the domain in the 'from' header, the email passes the DMARC alignment check.  
  
The following diagram shows the process sequence of DMARC alignment check:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DMARCAlignment.05T5g00000IAChYEAX.png)

## Types of DMARC Alignment

There are two types of DMARC alignment:

* **Strict Alignment**: Strict alignment requires an exact match between FROM header domain and either the return-path or DKIM-signature domain. Therefore, the originating domain must be identical to the FROM header domain.
* **Relaxed Alignment**: Relaxed alignment has more relaxed requirements. The subdomains can be used as long as the top-level domains are identical.

JetSend supports both Strict alignment and Relaxed alignment.

## How JetSend Supports DMARC Alignment?

As part of setting up a sending domain, you can set up a custom return path for your domain. One of the many tasks the DMARC system does is to check for alignment between sender name and return-path name. So, a custom Return-Path that aligns with your sending domain helps you achieve full DMARC alignment.

For a step-to-step guide on setting up a custom return path, see DMARC Alignment section in the [Set Up Sending Domains in JetSend](https://galaxy.maropost.com/s/article/Set-Up-Sending-Domains-in-JetSend) article.