---
title: "Reporting FAQs"
articleID: 1684
category: "Reports and Analytics"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-02
---

# Reporting FAQs

### **Miscellaneous Reporting FAQs**

**1. How do I use Campaign Tags?**

Campaign Tags allow you to group like-minded campaigns for easier reporting. For example, you can tag all campaigns for a certain promotion, then export a custom report for all campaigns with the tag.

For more information, see [**Campaign Tags**](https://galaxy.maropost.com/s/article/Campaign-Tags).
 

**2. How do I view reports for emails in a Journey?**

In Navigation, go to Analytics, and then select Journey Reports. The Journey Reports index page shows all the Journeys sent from your account. You can expand a Journey to see all the campaigns that are part of the Journey. 

You can then click the campaign name to view the Journey campaign report.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/JourneyReport.05T5g00000ENPHiEAP.png)Or, within the journey builder – click on the email element & click 'Report.'

![Screen_Shot_2019-11-07_at_5.03.07_PM.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXFu.05T5g00000BkXFuEAN.png)

![Screen_Shot_2019-11-07_at_5.04.44_PM.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXFv.05T5g00000BkXFvEAN.png)
 **3. How can I export a Campaign Report?**

Open a campaign report. On the top-right corner of the report, select the time period and click Export.

![Screen_Shot_2019-11-07_at_5.09.40_PM.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXFw.05T5g00000BkXFwEAN.png)
### Open and Click Report FAQs

**1. How is Marketing Cloud able to determine if images were downloaded indirectly via a 3rd-party or if a malware scanning software “clicked” a link **

Maropost Marketing Cloud uses an enterprise-grade database to determine whether the IP address of an open event or a click event originated from a known commercial data center. This database is constantly refreshed so that Marketing Cloud gives the most accurate information every time.

**2. What is the impact of images being indirectly downloaded by a 3rd-party data center before being sent to my contact’s email application? **

Certainly, the biggest impact is that the industry-wide practice of using the IP address of a contact’s email open event for location-based targeting will soon fall by the wayside. Marketers wishing to send targeted, location-based email campaigns will have to revert to the old-fashioned practice: asking contacts for their postal codes.

**3. What do the different Data Centers mean in the Campaign Open Report? **

The “Source” column of the report shows the known data centers. The names of the data centers will continue to be updated as time goes by. Some information can be gleaned by knowing the Source. 

For example, “Google” and “Yahoo” as Open Source are strong indicators that the contacts were using Google’s and Yahoo’s web apps to read the email. “Cloudflare” and “Akamai” are strong indicators that the contact read the email using Apple’s email app with the Mail Privacy Protection feature enabled. 

“Other” means that the contact has read the email using an app other than Apple’s email app, such as a desktop app like Outlook, Lotus Notes, Thunderbird, etc. Or, the email was read on a non-iOS mobile device, or an iOS device but not using Apple’s email app.

**4. What does it mean when a data center is indicated as the source in the Campaign Click (Link) Report? **

A data center as a source in the Click (Link) Report is a strong indicator that the contact’s email was scanned by a malware protection program. These programs are typically used by companies and by educational institutions. 

The automated scanners visit the URLs of every link in the email to determine whether the landing pages are hosted by sites known to hackers. The scanners also explain why a Campaign Click Report sometimes shows a few contacts with an abnormally high count of clicks for the email. 

While most contacts click one or two links in the email, the software programs running for these contacts “click” every single link in the email.

**5. What is the impact of the source of an email click coming from a Data Center? **

There will be contacts who are perceived to have clicked a link in an email, but in truth, the click came from a malware protection program.  If every one of the email links that the contact is perceived to have clicked all came from a Data Center, then this contact would be erroneously counted in a segment using email clicks as a filtering rule. 

Maropost recommends that you monitor the percentage of your contacts in your Campaign Click Reports who ONLY have click events from a Data Center. This data point will help you determine if the percentage is below an acceptable threshold.

**6. Can I segment my contacts based on data center opens and clicks? **

Yes, you can, but just not yet. The Marketing Cloud roadmap includes additional segment rules that enable you to filter for opens and clicks from Data Centers.  Be on the lookout for future notifications from Maropost.