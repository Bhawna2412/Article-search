---
title: "Capturing Orders Using Web Tracking"
articleID: 1003
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-14
---

# Capturing Orders Using Web Tracking

You can implement web tracking to capture order data from your e-commerce website, which enables data-driven decisions about your email campaign effectiveness and customer behavior. This tracking system helps measure campaign ROI by connecting email interactions to actual purchases, allowing you to identify which campaigns and customer segments drive the highest revenue.

When properly configured, web tracking automatically records purchase details including order values, product information, and customer data. This enables you to optimize your email marketing strategy based on actual conversion performance rather than just open and click rates.

Maropost's web tracking is efficient in capturing orders. The web tracking is based on page views. It reads data that is embedded in the HTML code of the web page that is rendered in the browser. 

1. 
  To access the script builder, visit the **Web Tracking** section under **Audience**. Select a domain in which you need to insert the web tracking script.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac11.05T5g00001BXRtpEAH.png)
2. 
  Click on the **Script builder** tab and under the **Orders** section, place the Web tracking script.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtracking26.05T5g00001BXRvbEAH.png)

Recording the purchases that are made online requires two components:

1. 
2. 

### Global Variable Declaration in 'Success' Web Page

The success page displays a confirmation that the order has been successfully placed. It typically displays a recap of the order, including a listing of each item that was purchased in the order.

The encoding of this page is a combination of static and dynamically generated content. The majority of the page is static content, and the order-specific content is dynamically generated at runtime. The logic for generating this page must be extended for Maropost web tracking. 

The static part of the web page declares a set of global variables that the Maropost web tracking script has been pre-configured to read. The dynamically generated part of the web page provides the exact values of the global variables specific to the purchase order.

An example of JavaScript code used to set the values of the global variables is as follows:

```javascript
/* Get the current date and transform the month from a Javascript zero-based number into a Gregorian calendar two-digit based number */var current = new Date();var month = current.getMonth() + 1;if (month < 10) { month = "0" + month; }var orderDate = current.getFullYear() + "-" + month + "-" + current.getDate();//Set the order ID and the total order amount as defined by the e-commerce systemvar order_id = 123456;var total = "114";/* Define orderitems as a 2-dimensional array.Each element of the inner array corresponds tothe elements of the order_items array required by the Maropost web tracking script */var orderitems = new Array(3); for (i = 0; i < 3; i++) { orderitems[i] = new Array(5); }/* Dynamically set the values for each element of the inner array. Pay special attention that there is an exact mapping between the position of each element in the inner array and the name of the JSON object that is passed to the web tracking script. */orderitems[0][0] = "FIFA16 DLX PS4";orderitems[0][1] = 50;orderitems[0][2] = 1;orderitems[0][3] = "FIFA 16 - Deluxe Edition - PlayStation 4";orderitems[0][4] = "Console Games - Sports - PS4";orderitems[1][0] = "MINECRAFT PS4";orderitems[1][1] = 15;orderitems[1][2] = 1;orderitems[1][3] = "Minecraft - PlayStation 4";orderitems[1][4] = "Console Games - Adventure - PS4";orderitems[2][0] = "NEED4SPEED - PS4";orderitems[2][1] = 49;orderitems[2][2] = 1;orderitems[2][3] = "Need for Speed Rivals - PlayStation 4";orderitems[2][4] ="Console Games - Driving - PS4";
```

### Configuring The Maropost Web Tracking Script

The Script Builder enables you to write the JavaScript code that creates the JSON-formatted payload to pass the purchase order details to the web tracking script.  This is where you read the global variables that were declared on the 'Success' page and whose values were dynamically set when the page was constructed for the shopper.

 An example of the JavaScript code is as follows:

```
/* Iterate through the 2-dimensional array that was declared and defined in the content of the 'Success' page. Use a loop to create the JSON-formatted array containing the order items */ var lineItemString = "";var trailingComma = "";for (i = 0; i < orderitems.length; i++) {  if (i < orderitems.length-1) {    trailingComma = ','}  else {    trailingComma = "";  }  lineItemString +=  '{"item_id":"'+orderitems[i][0]+'",'  +  '"price":"'+orderitems[i][1]+'",'  +  '"quantity":"'+orderitems[i][2]+'",'  +  '"description":"'+orderitems[i][3]+'",'  +  '"category":"'+orderitems[i][4]+'"}'  +  trailingComma}//Construct the JSON-formatted payload first as a stringvar JSONText = '{"order_unique": "false",'+ '"order_date":"'+orderDate+'",'+ '"order_status":"Processed",'+ '"original_order_id":"'+order_id+'",'+ '"grand_total":"'+total+'",'+ '"order_items":['+ lineItemString+ ']'+'}';//Then, transform the string to a JSON objectvar obj = JSON.parse(JSONText);return obj;
```

## Related Articles

**Analytics & Reporting:**

- 
- 

**Campaign Management:**

- 
- 
-