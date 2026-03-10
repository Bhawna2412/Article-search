---
title: "Add SPF Records for Email Authentication"
articleID: 1601
category: "Set up Neto > Launch your Store > Domain Names"
knowledgeBase: "Neto By Maropost"
---

# Add SPF Records for Email Authentication

Some email servers are now checking the DNS settings of the domain name in the 'from' email address. It checks the SPF record to see if the server that sent the email was approved. This check is designed to stop spam emails. An SPF record is recommended so emails sent from your Neto by Maropost website reach their destination.

In order to add an SPF record for your domain name, you will firstly need to find out who is managing your DNS. You can check this [here](http://who.is/dns/).

Once you know the company where your DNS is hosted, you will need to either request for the SPF record to be added or add this yourself (if you have access to the DNS management portal for your domain).

The SPF record that needs to be added is as follows:

- **Host:**yoursite.com.au
- **Type:**TXT
- **Value:**`v=spf1 include:<a href="#">_spf.neto.com.au</a> ~all`

**Please Note** If there is already an SPF record in your DNS settings, you should not add another one. Multiple SPF records will cause deliverability issues. Instead, you should edit the current SPF record to include our our SPF rule: `include:<a href="#">_spf.neto.com.au</a>`

## Testing

Once the SPF record has been added, you should wait an hour or so for it to propagate and then submit a test enquiry on one of your website forms. Please be sure to check your Junk Mail folder. If you still aren't receiving web form emails, please let us know and our support team will look into this further.