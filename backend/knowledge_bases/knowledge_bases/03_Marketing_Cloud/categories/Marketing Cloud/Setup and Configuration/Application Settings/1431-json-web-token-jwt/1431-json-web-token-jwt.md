---
title: "JSON Web Token (JWT)"
articleID: 1431
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# JSON Web Token (JWT)

You can enhance the security of your API integrations and webhook communications by implementing JSON Web Token (JWT) authentication with Marketing Cloud. This helps protect your data exchange by ensuring that webhook calls are genuinely from Marketing Cloud and haven't been tampered with during transmission. When properly configured, JWT authentication provides an additional security layer that helps safeguard sensitive customer data and maintain the integrity of your automated workflows.

JWT authentication is particularly valuable for businesses with strict security requirements or those handling sensitive customer information, as it provides cryptographic verification of message authenticity and prevents unauthorized access to your API endpoints.

Maropost gives you the option of using **JSON Web Tokens** (**JWT**) to authorize data exchange. JSON Web Tokens are an effective method of securely communicating information between parties.

Because JWTs can be signed (for example, using public/private key pairs), you can be sure that when Maropost sends a payload in a webhook callback, we are who we say we are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with. 

By default, Maropost doesn’t enforce the use of JWT. However, you have the option of using the JWT authentication in the following places:

- 
  Journeys – HTTP POST action
- Data Journeys – HTTP Request action

## Generating and Using JWT

### **Steps to generate the JWT:**

1. Click your user name in the top-right corner of the application, and then from the drop-down menu, select Settings.

2. On the Settings page, in the Connections section, click JSON Web Token.

![JWT.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWqV.05T5g00000BkWqVEAV.png)
3. Click Generate JWT.

The JWT is generated and displayed on the page.

> **Note:** **Note:** You can regenerate the JWT by clicking the Re-generate JWT button. This will generate a new public key that will be used in all subsequent webhook calls.

**Using the JWT: **Once generated, the JWT is displayed on the JSON Web Token page. Copy the token exactly as it is displayed on the page and paste it into your system code that validates Maropost's calls to your API endpoint.

## Learn More…

### **What is JSON Web Token (JWT)?**

JSON Web Token (JWT) is an open standard ([**RFC 7519**](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. The information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the **HMAC** algorithm) or a public/private key pair using **RSA** or **ECDSA**.

### **Authenticating JWT**

Maropost uses the public/private key pair to generate the JWT using the RS256 encryption algorithm. The JWT is included in the header of the HTTPS POST call that Maropost makes to your API endpoint.

![HTTPS_POST.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWf6.05T5g00000BkWf6EAF.png)
 Decode the JWT using the public key to verify the signature.  

![JWT_Authentication.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWqU.05T5g00000BkWqUEAV.png)
 Maropost includes the following claims in the JWT:

- 
  **jti** – A unique identifier generated each time a webhook call is made to your API endpoint.
- 
  **exp** – The expiration time on or after which the JWT must not be accepted for processing.
- 
  **nbf** – The time before which the JWT must not be accepted for processing.
- **iss** – The issuer of the JWT, which in this case will always be "Maropost Inc."
- 
  **iat** – The time at which the JWT is issued. This claim can be used to determine the age of the JWT.
- **sub** – The subject of this JWT. In the previous example, "journeys" indicates that the HTTPS POST payload was triggered by a journey.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API