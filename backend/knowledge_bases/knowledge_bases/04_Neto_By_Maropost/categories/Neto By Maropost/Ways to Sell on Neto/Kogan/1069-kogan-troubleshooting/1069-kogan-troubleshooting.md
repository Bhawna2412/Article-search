---
title: "Kogan Troubleshooting"
articleID: 1069
category: "Ways to Sell on Neto > Kogan"
knowledgeBase: "Neto By Maropost"
---

# Kogan Troubleshooting

**Important**: The Kogan integration is developed and supported by CrescoData. [Contact Cresco](https://crescodata.atlassian.net/servicedesk/customer/portal/1) for set up support and issues in the Cresco dashboard.

| Issue | Cause | Solution |
| --- | --- | --- |
| Settings have changed in Cresco but listings aren’t updated. | Setting changes require a manual sync. | Refer to the “publishing products” section in Cresco’s documentation [here](https://crescodata.com/help-center-faq/integrations/kogan/). |
| ## Error: Message: Invalid carrier code, please refer to the list on the page [Supported Carrier Codes](https://koganmarketplace.zendesk.com/hc/en-us/articles/900005468863-Supported-Carrier-Codes) or contact your account manager. | Shipping is not mapped correctly or the rate table is missing in Neto. | 1. Check the shipping service on the consignment in Neto is mapped to a Kogan carrier in your Cresco settings page. 			2. If you can’t find that service in the Cresco settings page, the [shipping option](https://galaxy.maropost.com/kb/articles/1385-add-a-shipping-option) or [rate table](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) needs to exist in Neto. Note that the prices don’t need to be in the rate table, it just needs to be active and have a name. |
| Child products not listing individually on Kogan. | Cresco’s Kogan integration doesn’t support product variations being listed individually. | Set the parent product as **Approved for Kogan** to list the child products as a variation listing. |
| Shippit tracking doesn’t work. | Shipping is not mapped correctly or is missing in Neto. | 1. Check that Shippit is mapped to a Kogan carrier in your Cresco settings page. 			2. If you can’t find that service in the Cresco settings page, the [shipping option](https://galaxy.maropost.com/kb/articles/1385-add-a-shipping-option) or [rate table](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) needs to exist in Neto. Note that the prices don’t need to be in the rate table, it just needs to be active and have a name. |