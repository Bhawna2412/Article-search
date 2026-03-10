---
title: "API Keys"
articleID: 28
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# API Keys

You can create API keys to enable secure integrations between Marketing Cloud and your existing systems, websites, or applications. API keys streamline your workflow by allowing automated data synchronization, real-time contact management, and programmatic campaign deployment, which helps reduce manual effort and ensures consistent data across your marketing stack.

Proper API key management with IP whitelisting helps protect your account security while enabling your development team to build reliable integrations that scale with your business growth.

**API Keys** are unique identifiers used to verify and authorize API requests. You must ensure the API keys are included in your API requests as authorization headers.

## An Introduction to API Keys

An **Application Programming Interface** (**API**) key serves as an intermediary or terminal that facilitates the development of software architecture and defines how pieces of software code should interact with each other. Developers widely utilize them in building modern cloud applications, Internet of Things (IoT) devices, and websites that not only gather and analyze data but also allow users to input information.

> **Important:** **Important:** To make any API request through a URL, users need to add the API key in the request headers. Add the “**ApiKey** **<**your_api_key**>**” credential in the **Value** section, pointing towards the **Header** field in all URL requests.

![api11(1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq3iEMAR.jpg)

To learn more about Maropost’s open API guidelines, read our RESTful Framework-based API catalog articles.

## Creating an API Key

1. To access this page, click on your user name profile and select **Settings**.

![api0.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq5jqMAB.jpg)
2. Choose **API Keys** under the **Connections** section.

![api1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq5qcMAB.jpg)
3. From the API keys index page, you can create, edit, delete, and manage your API licenses. To insert a new API key, click on **Add Key**.

![api2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq5tqMAB.jpg)
4. In the API slider, enter a name (max character limit: 32) to denote your respective API keys.

![api3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq4yvMAB.jpg)
5. Next, add a trustworthy IPv4-type IP address and whitelist it to enhance the API key’s protection. When IPv4 addresses are entered, along with the API key, it restricts the access for any IP addresses (apart from those that are whitelisted) for:

- Any API calls made to api.maropost.com using that API key.
- Any API calls made to rdb.maropost.com using that API key.
- Direct access to that account's Relational DB (using the API key's name and value as user_name and password, respectively, for MySQL).

At most, you can add **50 IP addresses** to a whitelist **per API Key**. Although it’s an optional feature, we highly recommend it for safety reasons.

![api4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq62xMAB.jpg)
6. Assign API privileges to your keys so they can interact with various Maropost modules whenever an API call is triggered. Finally, click **Save** to apply the changes made.

![api5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq4Y4MAJ.jpg)
7. An API key is generated. Prefer to either copy the API token to your clipboard or download the PDF file that contains the keycode from the dialog box.

> **Important:** **Important:** Do take care to retrieve your API keys from your account since, for security concerns, they won’t be available once you close the dialog box.

![api6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq67JMAR.jpg)
The new API key gets displayed on the index page.

![api7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq3HjMAJ.jpg)

## Managing API Keys

Maropost allows multiple API keys to be added per account. Once created, all keys can be viewed on the index page, displaying their names, masked keys, and creation dates, with the most recently created keys listed first.

 The Actions tab consists of two options:

- **Edit Key:** This enables you to edit the name, IPv4-type address, and access rights.
- 

![api8.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Iq4nMMAR.jpg)

## What is the purpose of whitelisting an IP address?

IP whitelisting is a cybersecurity practice that prohibits unauthorized users from accessing the network. When a user initiates an API call, Maropost can provide access to its server and software tools to specific IP-based applications or websites, having been granted permission by the user through whitelisting.

There are two scenarios pertaining to IP screening in the Maropost network:

1. If an IP checklist is maintained by the user, Maropost will only respond to requests from the listed IPs that are whitelisted; the rest will be blocked.
2. API keys not having any whitelisted IPs can communicate with all other IP addresses in the server.

In contrast to blacklisting, whitelisting restricts any IP address or website that isn't mentioned on the network administrator's list. Blacklisting, by definition, denies access to a specific list of applications and IP addresses. Hence, whitelisting is regarded as having a default-deny approach, whereas blacklisting is considered a default-allow one.

## Related Articles

**API Integration Setup:**

- [API Overview](https://galaxy.maropost.com/kb/articles/648-api-overview) - Complete guide to Marketing Cloud's API capabilities
- [API Request Limits](https://galaxy.maropost.com/kb/articles/819-api-request-limits) - Understand rate limits and optimize API usage
- [Data Streaming Via API](https://galaxy.maropost.com/kb/articles/820-data-streaming-via-api) - Real-time data synchronization methods

**Advanced Integrations:**

- [Abandoned Cart REST API Integration](https://galaxy.maropost.com/kb/articles/720-abandoned-cart-rest-api-integration) - E-commerce automation setup
- [Adding A Keap Integration](https://galaxy.maropost.com/kb/articles/770-adding-a-keap-integration-new-ui) - CRM integration best practices