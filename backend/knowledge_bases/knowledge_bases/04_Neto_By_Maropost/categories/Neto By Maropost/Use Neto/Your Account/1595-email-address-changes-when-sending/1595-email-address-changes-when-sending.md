---
title: "Email Address Changes when Sending"
articleID: 1595
category: "Use Neto > Your Account"
knowledgeBase: "Neto By Maropost"
---

# Email Address Changes when Sending

Neto mitigates email delivery failure automatically when your email domain doesn’t match your website domain. Some mail servers look at this information to identify spoofed addresses and spam. To prevent your legitimate mail from being identified this way, Neto alters the sender email addresses.

**Important**: These rules only apply when your Neto control panel domain doesn’t match your system email address domain.

For example, if you use a bigpond.com, gmail.com, or yahoo.com email account this will apply. Also, if your Neto webstore isn’t live yet, and uses a `my-company.neto.com.au` website URL, this will also apply to you.

Find out how your emails may be affected in the table below:

| Neto Webstore URL | System Email Address | Sender Email Address | Reply-To Email Address |
| --- | --- | --- | --- |
| company-name.neto.com.au | admin@yourdomain.com.au | noreply-company-name@netomail.com.au | admin@yourdomain.com.au |
| www.yourdomain.com.au | company-name@gmail.com.au | noreply-yourdomain@netomail.com.au | company-name@gmail.com.au |
| store.yourdomain.com.au | admin@company-name.com.au | no-reply.yourdomain@netomail.com.au | admin@company-name.com.au |

In all cases, the reply-to email address will not be changed, so that customer replies will be received without issue.