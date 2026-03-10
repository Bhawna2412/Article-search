---
title: "Send Emails Using SMTP"
articleID: 953
category: "Sending Emails With JetSend"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-16
---

# Send Emails Using SMTP

The process of sending an email using SMTP roughly consists of the following steps:

1. Establishing a connection with the host server
2. Sending the email
3. Closing the connection

## Before You Get Started

* ### **Create API key**

You will need the API key to authenticate yourself when connecting to our server. If not done already, you must create an API key. For more information, see [Create and Manage API Keys](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.jetsend.com%2Farticle%2Fmanage-api-keys%2F).



* ### **Find JetSend's SMTP Server Details**

You can see JetSend's SMTP server details and authentication information on the SMTP SETTINGS tab of the Settings page.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1.05T5g00000Ao5YTEAZ.png)

* ### **Your Username and Password should be Base64 encoded**

JetSend authentication requires you to use the username and password be encoded in Base64. Therefore, before you start the sending process, ensure your username and password to is encoded in Base64.

## Steps to Send an Email Using SMTP

This example uses Telnet to get you started with sending emails using SMTP. It covers authenticating yourself and connecting to JetSend's server, sending an email in the correct format, and familiarizing yourself with the response messages from the server. Perform the following steps to send an email using the SMTP:

1. Start a session with JetSend's SMTP server. In the terminal, type the following and press Enter:

   ```
   openssl s_client -starttls smtp -crlf -connect <hostname>:<port>
   ```

   Note that you can find the hostname and port information in the SMTP SETTINGS tab.
2. Initiate a connection. Type the following and press Enter:

   ```
   EHLO <domain name of sending host>
   ```

   The server responds after a successful connection is established. Initiate logging into the server.
3. Initiate logging into the server. Type the following and press Enter: 

   ```
   AUTH LOGIN
   ```

   The server responds with '334 VXNlcm5hbWU6' message, which is a request for your username.
4. Enter your Base64 encoded username and press enter. The server responds with '334 UGFzc3dvcmQ6' message, which is a request for your password.
5. Enter your Base64 encoded password and press enter. Any of your API keys can be used as the password. On successful authentication, the server responds with '235 2.7.0 Authentication successful' message.
6. Enter the sender email address in the following format:

   ```
   MAIL FROM: <sender email address>
   ```

   The server responds with '250 2.0.0 MAIL FROM accepted' message.
7. Enter the recipient email address in the following format:

   ```
   RCPT TO: <recipient email address>
   ```

   The server responds with '250 2.0.0 RCPT TO accepted'message.
8. Now, start adding the email content. Type the following and press Enter: 

   ```
   Data
   ```

   The server responds with '354 3.0.0 continue. finished with <CR><LF>.<CR><LF>' message.
9. Optionally, you can add a ‘to email’ header. Type the following and press enter:

   ```
   To: <recipient name> <recipient email address> 
   ```
10. Add ‘from email’ header. Type the following and press enter:

    ```
    From: <sender name> <sender email address> 
    ```
11. Add the email subject line. Type the following and press enter:

    ```
    Subject: <email subject line> 
    ```
12. Add the email content. Type the following and press enter:

    ```
    <email content> 
    ```
13. Type . (period/dot) and press Enter to send the email. The server responds with '250 2.0.0 OK' message, which means the email is queued to be sent.
14. Close the telnet connection. Type the following and press enter. 

    ```
    QUIT
    ```