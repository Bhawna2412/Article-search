---
title: "Send Emails Using APIs"
articleID: 952
category: "Sending Emails With JetSend"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-16
---

# Send Emails Using APIs

To learn more about JetSend APIs, get started [here](https://galaxy.maropost.com/s/article/introduction).

## Before You Get Started

* ### Create API key

You will need the API key to authenticate your API calls. If you haven't already, create an API Key. For more information, see [Create and Manage API Keys](https://galaxy.maropost.com/s/article/manage-api-keys).

## Send an Email Using the API

Follow the steps below to send an email using JetSend API:

1. In a text editor, write your API call. You can use the following sample code by replacing the placeholders with valid data: [su\_tabs active="1"][su\_tab title="cURL" disabled="no" anchor="" url="" target="blank" class=""]

   ```
   curl --location --request POST 'https://app.jetsend.com/api/v1/transmission/email'; \  
   --header 'accept: application/json' \  
   --header 'Authorization: Bearer [YOUR_API_KEY]' \  
   --header 'Content-Type: application/json' \  
   --data-raw '{  
       "email": {  
           "options": {  
               "description": "Testing Jetsend Email Transimission API",  
               "tracking_domain": "app-tracking@jetsend.xyz"  
           },  
           "recipients": [  
               {  
                   "address": {  
                       "email": "manjinder@maropost.com",  
                       "name": "Manjinder Singh"  
                   }  
               }  
           ],  
           "content": {  
               "from": {  
                   "name": "Jetsend Test Account",  
                   "email": "test@jetsend.xyz"  
               },  
               "subject": "Welcome to Jetsend!",  
               "reply_to": "Jetsend Support <support@jetsend.xyz>",  
               "html": "<h2>Hello!</h2><p>You have successfully sent an email via JetSend API.</p><p>Click this link to check our help center page: <a href='\''http://support.jetsend.com'\''>JetSend Support</a></p>this is just a test email."  
           }  
       }  
   }'
   ```

   [/su\_tab] [su\_tab title="Go" disabled="no" anchor="" url="" target="blank" class=""]

   ```
   package main  
   import (  
     "fmt"  
     "strings"  
     "net/http"  
     "io/ioutil"  
   )  
   func main() {  
     url := "https://app.jetsend.com/api/v1/transmission/email&quot;  
     method := "POST"  
     payload := strings.NewReader("{\n    \"email\": {\n        \"options\": {\n            \"description\": \"Testing Jetsend Email Transimission API\",\n            \"tracking_domain\": \"app-tracking@jetsend.xyz\"\n        },\n        \"recipients\": [\n            {\n                \"address\": {\n                    \"email\": \"manjinder@maropost.com\",\n                    \"name\": \"Manjinder Singh\"\n                }\n            }\n        ],\n        \"content\": {\n            \"from\": {\n                \"name\": \"Jetsend Test Account\",\n                \"email\": \"test@jetsend.xyz\"\n            },\n            \"subject\": \"Welcome to Jetsend!\",\n            \"reply_to\": \"Jetsend Support <support@jetsend.xyz>\",\n            \"html\": \"<h2>Hello!</h2><p>You have successfully sent an email via JetSend API.</p><p>Click this link to check our help center page: <a href='http://support.jetsend.com'>JetSend Support</a></p>this is just a test email.\"\n        }\n    }\n}")  
     client := &http.Client {  
     }  
     req, err := http.NewRequest(method, url, payload)  
     if err != nil {  
       fmt.Println(err)  
     }  
     req.Header.Add("accept", "application/json")  
     req.Header.Add("Authorization", "Bearer [YOUR_API_KEY]")  
     req.Header.Add("Content-Type", "application/json")  
     res, err := client.Do(req)  
     defer res.Body.Close()  
     body, err := ioutil.ReadAll(res.Body)  
     fmt.Println(string(body))  
   }
   ```

   [/su\_tab] [su\_tab title="JavaScript XHR" disabled="no" anchor="" url="" target="blank" class=""]

   ```
   var data = JSON.stringify({"email":{"options":{"description":"Testing Jetsend Email Transimission API","tracking_domain":"app-tracking@jetsend.xyz"},"recipients":[{"address":{"email":"manjinder@maropost.com","name":"Manjinder Singh"}}],"content":{"from":{"name":"Jetsend Test Account","email":"test@jetsend.xyz"},"subject":"Welcome to Jetsend!","reply_to":"Jetsend Support <support@jetsend.xyz>","html":"<h2>Hello!</h2><p>You have successfully sent an email via JetSend API.</p><p>Click this link to check our help center page: <a href='http://support.jetsend.com'>JetSend Support</a></p>this is just a test email."}}});  
   var xhr = new XMLHttpRequest();  
   xhr.withCredentials = true;  
   xhr.addEventListener("readystatechange", function() {  
     if(this.readyState === 4) {  
       console.log(this.responseText);  
     }  
   });  
   xhr.open("POST", "https://app.jetsend.com/api/v1/transmission/email");  
   xhr.setRequestHeader("accept", "application/json");  
   xhr.setRequestHeader("Authorization", "Bearer [YOUR_API_KEY]");  
   xhr.setRequestHeader("Content-Type", "application/json");  
   xhr.send(data);
   ```

   [/su\_tab] [su\_tab title="Node.js" disabled="no" anchor="" url="" target="blank" class=""]

   ```
   var request = require('request');  
   var options = {  
     'method': 'POST',  
     'url': 'https://app.jetsend.com/api/v1/transmission/email',  
     'headers': {  
       'accept': 'application/json',  
       'Authorization': 'Bearer [YOUR API KEY]',  
       'Content-Type': 'application/json'  
     },  
     body: JSON.stringify({"email":{"options":{"description":"Testing Jetsend Email Transimission API","tracking_domain":"app-tracking@jetsend.xyz"},"recipients":[{"address":{"email":"manjinder@maropost.com","name":"Manjinder Singh"}}],"content":{"from":{"name":"Jetsend Test Account","email":"test@jetsend.xyz"},"subject":"Welcome to Jetsend!","reply_to":"Jetsend Support <support@jetsend.xyz>","html":"<h2>Hello!</h2><p>You have successfully sent an email via JetSend API.</p><p>Click this link to check our help center page: <a href='http://support.jetsend.com'>JetSend Support</a></p>this is just a test email."}}})  
   };  
   request(options, function (error, response) {  
     if (error) throw new Error(error);  
     console.log(response.body);  
   });
   ```

   [/su\_tab] [su\_tab title="Python" disabled="no" anchor="" url="" target="blank" class=""]

   ```
   import requests  
   url = "https://app.jetsend.com/api/v1/transmission/email&quot;  
   payload = "{\n    \"email\": {\n        \"options\": {\n            \"description\": \"Testing Jetsend Email Transimission API\",\n            \"tracking_domain\": \"app-tracking@jetsend.xyz\"\n        },\n        \"recipients\": [\n            {\n                \"address\": {\n                    \"email\": \"manjinder@maropost.com\",\n                    \"name\": \"Manjinder Singh\"\n                }\n            }\n        ],\n        \"content\": {\n            \"from\": {\n                \"name\": \"Jetsend Test Account\",\n                \"email\": \"test@jetsend.xyz\"\n            },\n            \"subject\": \"Welcome to Jetsend!\",\n            \"reply_to\": \"Jetsend Support <support@jetsend.xyz>\",\n            \"html\": \"<h2>Hello!</h2><p>You have successfully sent an email via JetSend API.</p><p>Click this link to check our help center page: <a href='http://support.jetsend.com'>JetSend Support</a></p>this is just a test email.\"\n        }\n    }\n}"  
   headers = {  
     'accept': 'application/json',  
     'Authorization': 'Bearer [YOUR_API_KEY],  
     'Content-Type': 'application/json'  
   }  
   response = requests.request("POST", url, headers=headers, data = payload)  
   print(response.text.encode('utf8'))
   ```

   [/su\_tab] [su\_tab title="Ruby" disabled="no" anchor="" url="" target="blank" class=""]

   ```
   require "uri"  
   require "net/http"  
   url = URI("https://app.jetsend.com/api/v1/transmission/email")  
   https = Net::HTTP.new(url.host, url.port);  
   https.use_ssl = true  
   request = Net::HTTP::Post.new(url)  
   request["accept"] = "application/json"  
   request["Authorization"] = "Bearer [YOUR_API_KEY]"  
   request["Content-Type"] = "application/json"  
   request.body = "{\n    \"email\": {\n        \"options\": {\n            \"description\": \"Testing Jetsend Email Transimission API\",\n            \"tracking_domain\": \"app-tracking@jetsend.xyz\"\n        },\n        \"recipients\": [\n            {\n                \"address\": {\n                    \"email\": \"manjinder@maropost.com\",\n                    \"name\": \"Manjinder Singh\"\n                }\n            }\n        ],\n        \"content\": {\n            \"from\": {\n                \"name\": \"Jetsend Test Account\",\n                \"email\": \"test@jetsend.xyz\"\n            },\n            \"subject\": \"Welcome to Jetsend!\",\n            \"reply_to\": \"Jetsend Support <support@jetsend.xyz>\",\n            \"html\": \"<h2>Hello!</h2><p>You have successfully sent an email via JetSend API.</p><p>Click this link to check our help center page: <a href='http://support.jetsend.com'>JetSend Support</a></p>this is just a test email.\"\n        }\n    }\n}"  
   response = https.request(request)  
   puts response.read_body
   ```

   [/su\_tab] [su\_tab title="Swift" disabled="no" anchor="" url="" target="blank" class=""]

   ```
   import Foundation  
   var semaphore = DispatchSemaphore (value: 0)  
   let parameters = "{\n    \"email\": {\n        \"options\": {\n            \"description\": \"Testing Jetsend Email Transimission API\",\n            \"tracking_domain\": \"app-tracking@jetsend.xyz\"\n        },\n        \"recipients\": [\n            {\n                \"address\": {\n                    \"email\": \"manjinder@maropost.com\",\n                    \"name\": \"Manjinder Singh\"\n                }\n            }\n        ],\n        \"content\": {\n            \"from\": {\n                \"name\": \"Jetsend Test Account\",\n                \"email\": \"test@jetsend.xyz\"\n            },\n            \"subject\": \"Welcome to Jetsend!\",\n            \"reply_to\": \"Jetsend Support <support@jetsend.xyz>\",\n            \"html\": \"<h2>Hello!</h2><p>You have successfully sent an email via JetSend API.</p><p>Click this link to check our help center page: <a href='http://support.jetsend.com'>JetSend Support</a></p>this is just a test email.\"\n        }\n    }\n}"  
   let postData = parameters.data(using: .utf8)  
   var request = URLRequest(url: URL(string: "https://app.jetsend.com/api/v1/transmission/email")!,timeoutInterval: Double.infinity)  
   request.addValue("application/json", forHTTPHeaderField: "accept")  
   request.addValue("Bearer [YOUR_API_KEY]", forHTTPHeaderField: "Authorization")  
   request.addValue("application/json", forHTTPHeaderField: "Content-Type")  
   request.httpMethod = "POST"  
   request.httpBody = postData  
   let task = URLSession.shared.dataTask(with: request) { data, response, error in  
     guard let data = data else {  
       print(String(describing: error))  
       return  
     }  
     print(String(data: data, encoding: .utf8)!)  
     semaphore.signal()  
   }  
   task.resume()  
   semaphore.wait()
   ```

   [/su\_tab][/su\_tabs]
2. Copy the API key from the API Keys tab of your Account Settings page and paste it in the authorization header by replacing [YOUR\_API\_KEY]. See [Create and Manage API Keys](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.jetsend.com%2Farticle%2Fmanage-api-keys%2F) to learn about API Keys.
3. Replace the from/sender address and name with your email address and name.
4. Replace the to/recipient address and name with your recipient's email address and name.
5. Optionally, you can edit the subject or email content.
6. Optionally, replace the tracking domain URL in the sample code with your verified tracking domain URL. See [Set Up Tracking Domains](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.jetsend.com%2Farticle%2Fset-up-tracking-domains%2F) to learn how to add and verify a tracking domain.
7. After you are done making the required changes, copy and paste the code into your terminal.
8. Press Enter to execute the code.