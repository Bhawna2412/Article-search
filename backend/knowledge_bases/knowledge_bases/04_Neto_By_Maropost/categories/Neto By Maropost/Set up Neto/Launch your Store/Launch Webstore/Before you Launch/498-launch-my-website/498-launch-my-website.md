---
title: "Launch My Website"
articleID: 498
category: "Set up Neto > Launch your Store > Launch Webstore > Before you Launch"
knowledgeBase: "Neto By Maropost"
lastUpdated: 2025-12-05
---

# Launch My Website

### In this Article

- [Website Review Checklist](#11)
- [Website Launch Request](#website-launch-request)
- [Set your Website Live](#4)
- [Once your Website is Live](#5)
- [Access your Control Panel](#6)
- [Point Additional Domains to your Website](#7)
- [I am not seeing my new website, what can I do?](#9)
- [Improve Website Search Ranking](#10)
- [DNS, Email Hosting, SSL, and CDN Information](#domain-name-system-dns)

### Website Review Checklist

A Maropost Commerce staff member will perform a quick review of your site to ensure that there are no important items that you have missed in the setup of your online store. We will then provide you with feedback so that you can address these issues before going live. You can do this check yourself by using the below checklist:

- [Check the web address of your Home page](https://galaxy.maropost.com/s/article/Update-the-URL-for-my-pagesandproducts). If it has something after the slash (i.e. domainname.com.au/ home), it needs to be changed to the bare domain name so the product search works.
- [Check if you have entered meta data for your Home page](https://galaxy.maropost.com/s/article/add-seo-meta-data). This is highly recommended before going live as it contributes to your SEO ranking and is also used by Google and other search engines to describe your site in their results.
- [Check to see if the 'Edit Menu' links are still visible in any menus](https://galaxy.maropost.com/s/article/add-or-edit-website-menus).
- [Test all menu links](https://galaxy.maropost.com/s/article/add-or-edit-website-menus).
- [Check if images have been uploaded for the top level product categories](https://galaxy.maropost.com/s/article/add-a-product-category).
- [Check if the Advert Banner has been uploaded](https://galaxy.maropost.com/s/article/website-banner-adverts-and-carousels).
- [Check if the social media links have been entered](https://galaxy.maropost.com/s/article/How-do-I-add-social-media-accounts-to-my-website).
- [Check if the sample content has been removed from your content pages](https://galaxy.maropost.com/s/article/content-blog-posts-information-and-web-pages).
- [Check if the sample blog post has been removed or updated (if you use the blog)](https://galaxy.maropost.com/s/article/content-blog-posts-information-and-web-pages#8).
- [Check if you have entered the system email address for your website enquiries](https://galaxy.maropost.com/s/article/control-panel-management#1).
- [Check if you have uploaded your website and invoice logos](https://galaxy.maropost.com/s/article/control-panel-management#3).
- [Check if the Favicon has been uploaded](https://galaxy.maropost.com/s/article/control-panel-management#3).
- [Check if payment methods have been configured](https://galaxy.maropost.com/s/article/payment-method-settings).
- [Check if shipping has been setup](https://galaxy.maropost.com/s/article/shipping-overview).
- [Create sales orders to test that payment and shipping are working correctly](https://galaxy.maropost.com/s/article/add-a-sales-order).
- [Cancel and delete test orders](https://galaxy.maropost.com/s/article/cancel-or-delete-a-sales-order).
- [If you are using eBay, check of you have eBay Order Management turned on](https://galaxy.maropost.com/s/article/Going-Live-with-Netos-eBay-Integration#4).

### Website Launch Request

Please complete the [Go Live Request](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fforms.neto.com.au%2Fsupport%2Fgolive.html) form to notify our launch specialists when you are ready to launch your website. You can learn more about the required information in the sections[below](#domain-name)

You can select the day that you want to launch your site. Our standard times to begin site launches are 10:00 am and 2:00 pm Monday to Friday (AEST). The process can take up to two hours as it requires a full server restart.

**Please Note**: When submitting your Go Live request, please allow for a processing time of at least 2 business days.

We will also perform a quick review of your webstore and provide recommendations and notes on any missing configurations.

Once you reply with your preferred method for updating DNS, our Launch Service team will confirm with you before setting your site live.

#### Domain Details

When you create your trial site with Maropost Commerce, a temporary domain name is created - something like mystore.neto.com.au. This allows you to build your Maropost Commerce site without affecting your existing website (if you have one).

When you are ready to launch your site, you can choose the domain name you want for your site. If you don't have a domain name, you can register it at one of the [domain name registrars](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.auda.org.au%2Findustry-information%2Fregistrars%2F) or [resellers](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.auda.org.au%2Findustry-information%2Fresellers%2Fsearch%2F). Maropost Commerce does not register domain names.

You don't own a domain name but you register it for a set period. If your domain name expires, this will stop your customers from accessing your website and stops the delivery of emails. It is recommended that you keep your contact details up-to-date with your registrar, so you will be notified when a domain name is due for renewal.

#### DNS (Domain Name System) Options

Launching your Maropost Commerce website will involve updating the DNS settings for your chosen domain name.

Add the DNS records yourself or provide them to your DNS provider. These settings are supplied to you by Maropost Commerce in the last step, once your website is set live on our server. It will include an A record for the base/apex host name and a CNAME record for the www host name.

For more information on DNS refer to the information [below](#domain-name-system-dns).

### Set your Website Live

Once the above steps have been completed, our Launch Service team will contact you to confirm that your web store is ready to go live. Just respond to that email when you are ready to go live or with a preferred date and time if you would like to schedule it.

Once confirmation has been received we will send your site live. It's at this stage you will lose access to the staging URL for your site (example.neto.com.au) as it will automatically be set to redirect to your specified domain.

To view your site again you will need to add the web records to your primary domain's DNS. If you have provided the log in credentials for your DNS or you have delegated your domain to Maropost Commerce, we will handle this part for you. For customers that maintain the control of their DNS Maropost Commerce will provide the web records in the format below:

| URL | Record Type | Value |
| --- | --- | --- |
| domain.com.au | A Record | 111.111.111.111 |
| www.domain.com.au | CNAME | cnamerecord.net. |

Both records will need to be added for your site to operate correctly. DNS changes may take a little while to propagate globally, at which point the SSL certificate for your domain name will begin the automated validation process via our CDN provider. Please reply once you have made the DNS change, so that we can monitor this process and push it though if need be.

> **Note:** You may need to clear your cache to see your new site. Here are some tips on how to clear your caches:
> [How to Clear Your Browser's Cache](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.wikihow.com%2FClear-Your-Browser%2527s-Cache)
> [Clear Local DNS Cache](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.wikihow.com%2FClear-Your-Browser%2527s-Cache)

### Once your Website is Live

Now that the site is live you can begin to use your Maropost Commerce website. You can use the below document on some more useful information.

[Maropost Commerce Cloud - Your Website is Live](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.neto.com.au%2Fassets%2Fsite_live.pdf)

### Access your Control Panel

Once the DNS settings have updated, you can access the control panel of you site using the old staging web address or by adding /_cpanel to the end of your new domain name.

Example:[http://www.mydomain.com.au/_cpanel](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.mydomain.com.au%2F_cpanel)

Your login details for your live website control panel will be the same at your staging / testing site.

### Point Additional Domains to your Website

You can point as many domains as you like to your Maropost Commerce site. For instance if you have a Country Code domain (.com.au) and would like to point your gTLD domains (.com) to the site, simply [email our support team](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.neto.com.au%2Fask-us%2Fcontact-support%2F) who will add the domain to our server and provide you the DNS details.

### I am not seeing my new website, what can I do?

When you make a DNS change (part of going live with a new website provider), it takes time for the changes to take effect and for your new website to be visible to all internet users. This is called DNS propagation. It is the time it takes for the domain's DNS to refresh the cache on the network. Unfortunately, if your DNS is managed externally, Maropost Commerce will have no control over how long this process takes (it can take up to 24 hours; however, that's uncommon these days).

In rare cases the delay may be due to your local DNS cache. You can try Clearing your DNS cache or "Flush the DNS". For information on how to flush your DNS, please see our article on[How do I clear my local DNS cache?](https://galaxy.maropost.com/s/article/webstore-troubleshooting#3)

Clearing your DNS cache does not always work, so sometimes you will just need to wait.

### Improve Website Search Ranking

SEO (search engine optimisation) is all about improving the visibility of a web page in search engines via "natural" or unpaid ("organic" or "algorithmic") search results. Please see our article for some information and tips:[What is SEO?](https://galaxy.maropost.com/s/article/What-is-SEO)

### DNS, Email Hosting, SSL, and CDN Information

#### DNS

The DNS is a map for your domain name to point to your website and email provider. The DNS server can be on located with:

- Your domain name registrar
- Another provider

There may be a cost to host your DNS with your domain name registrar or another provider. Contact your provider for details.

The DNS is also used to validate the [SSL Certificate](https://galaxy.maropost.com/s/article/ssl-certificate-overview) and list the email servers that are approved to send emails using your domain name.

The DNS (Domain Name System) is controlled by a Zone File which contains various records used to point to service providers. Below is a list of the common record types:

| Record Type | Description |
| --- | --- |
| A Record | Used primarily for the base domain (e.g. neto.com.au). These records appear as a set of 4 numbers separated by a period e.g. ‘111.111.111.111’. This represents a host server must be set to accept the domain name. |
| CNAME | Used for sub domains (www.neto.com.au, shop.neto.com.au). They appear as a URL like value. Typically, this is used to point a www subdomain to the base domain but is also used by Maropost Commerce for pointing your www domain directly to the CDN. |
| MX Record | These are the settings that are added to the DNS server that points to your email hosting provider. If you are hosting the DNS with us, you will need to provide us with the MX Records from your email provider. They will have these details. |
| TXT Record | A hidden record that is uses to provide information to sources outside your domain name. |
| SPF TXT Record | Some email servers are now checking the DNS settings of the domain name in the ‘from’ email address. It checks the SPF record to see if the server that sent the email was approved. This check is designed to stop spam emails. An SPF record is recommended so emails sent from your Maropost Commerce website reach their destination. |

#### Email Hosting Provider

If you want email accounts using the domain name for your Maropost Commerce website, you will need an email hosting provider. Maropost Commerce does not provide email hosting services. We recommend [Google G Suite](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fgsuite.google.com%2Fintl%2Fen_au%2F). This is a business version of Gmail, however you can use another email provider if you wish to.

If you are hosting the [DNS](https://galaxy.maropost.com/s/article/launch-my-website) with us, you will need to provide us with the [MX Records](https://galaxy.maropost.com/s/article/launch-my-website#domain-name-system-dns) from your email provider. They will supply these details.

#### SSL Certificate

The SSL certificate encrypts the data between the customer's web browser and your website. This protects your customers from having their contact details and credit card numbers accessed by outside parties. All Maropost Commerce sites that have a web store require an SSL certificate. This is also a requirement of the credit card providers and payment gateways.

#### Global Content Delivery Network (CDN)

When your site is live, the web pages and images are stored on multiple web servers around the world. When a customer accesses your site, your site is served from the closest web server to the customer. This reduces the time it takes to download the page. Having your site on multiple servers also helps when you have many customers visiting the site at the same time. The CDN will share the load over multiple servers. It will even add more servers when your site is busy.

Only live sites are setup with their own CDN account. Trial and staging sites utilise our shared Maropost Commerce Cloud CDN.

### Related Articles

- [Remove "Powered by Maropost Commerce Cloud" From my Website](https://galaxy.maropost.com/s/article/webstore-settings)
- [Refresh Website Search or Filter Cache ](https://galaxy.maropost.com/s/article/webstore-troubleshooting#1)
- [Webstore Design Tweaks](https://galaxy.maropost.com/s/article/webstore-design-tweaks)