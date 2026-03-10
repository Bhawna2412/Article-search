---
title: "Emergency Incident - Content Management"
articleID: 1192
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-06
---

# Emergency Incident - Content Management

# Emergency Incident - Content Management

This Agent Only article details the steps taken within support when an emergency situation occurs. For example, how to turn the service alerts on in the Knowledge Base, or when there is a phone outage.

---

## Status Page

We utilise a Status Page on the Knowledge Base to keep customers updated on the status of Retail Express.

Click here to open the [Status Page](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fstatus-retailcloud.maropost.com%2F)

---

## Updating Status Page

When it's determined that status page updates are required, the following process should be followed:

1. Change the view to HTML view by pressing the **Source Code** button:  
   ![rtaImage (68).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powpzEAA.jpg)
2. Change the first DIV section to be "warning" instead of "note" (this will change it to a yellow box)

   ```
   <div class="note">  
   <p>  
   <strong>Current Status:</strong> No issues reported  
   </p>  
   </div>
   ```
3. Add a section "Summary" (use Heading 2) and enter a summary of the issue
4. Add a section "Alternative Solutions" (use Heading 2) and enter any details if advised e.g. direct links to POS, workarounds etc
5. Add a section "Incident History" (use Heading 2)
6. Create a two column table:  
    - First column: Time  
    - Second column: Details
7. The Incident History should be updated regularly depending on the severity of the issue e.g. every 15mins for priority 1 issues. History should be in order of the latest update at the top.

Use the [Style Guide](https://galaxy.maropost.com/s/article/Style-Guide-for-KB-articles) for guidance with regards to formatting.

## Approved Wording

The following wording should be used on the status page:

### Initial Report

* We are receiving reports of ...... Our Development Team are investigating now

### Updates

* No further updates at this time
* We have identified the issue, our Development Team is working to resolve the issue as soon as possible. Please continue to refresh this page for updates.

### Resolved

* We are receiving reports of services returning back to normal. We are continuing to monitor the situation.

### Issue Complete

* The issue has been resolved and we are seeing reports of services returning back to normal.
* All services are now running normally.

---

## Update Phone Message

Depending on the severity of the issue, the decision may be made to enable the Emergency message on the Zendesk Talk IVR. You can change the message played directly after making a support menu select e.g. "Press 1 for POS, Press 2 for eCommerce" etc.

To update the IVR message:

1. Open the [Zendesk Talk](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fadmin%2Fchannels%2Ftalk_and_email%2Ftalk) settings
2. Navigate to **IVR > Support > Menu Levels > Sup-Support** (left-hand side menu)
3. Hover over the menu option and click the **three dots** on the right
4. Select **Edit**
5. Change the **Greeting**to be "Emergency - Status Page - No VM"  
   ![rtaImage (69).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powqJEAQ.jpg)
6. Click **Save**
7. Repeat for **EcommCalls**

---

## Back Office Banner

Due to changes to implement Gainsight, this section will be updated in the future.

For now, banners are managed via MGMT/Site List. Please refer to Kelly or Justin due to the security permissions in these areas.

Approved wording:

* Current Incident affecting (feature) - (button = "View Status Page" with the link)

---

## Recovery Checklist

1. **Remove banners** from Back Office
2. Update **Status Page** to change the first div from a warning to note (refer to [Updating Status page](#h_01G3T1TZ5A67TQEHP9RPQKHMZG) above for detailed info):

   ```
   <div class="note">  
   <p>  
   <strong>Current Status:</strong> No issues reported  
   </p>  
   </div>
   ```
3. **Update phone messages** if complete back to IVR - Support menu  
   ![rtaImage (70).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powZPEAY.jpg)
4. Check if there's to be a **post-mortem** sent to customers (either unanimous or only those that reported it)