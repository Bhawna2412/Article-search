---
title: "Connect to a Client Site with SFTP"
articleID: 1635
knowledgeBase: "Help Articles"
lastUpdated: 2022-02-02
---

# Connect to a Client Site with SFTP

### Overview

Secure file transfer protocol (SFTP) is the only way to access a clients file server and is necessary for any design or theme work. SFTP can be used to make a backup of your website assets, such as product images, banners, or theme files.

SFTP credentials are automatically provisioned for you when you create a store for a client, with the same password you use for the partner portal. Not only does it make remembering the login details easier, it also means that when you change your partner portal password, your SFTP password changes with it.

**Please Note**: If you didn't create the site your client will need to request access for you. You can find out more about this process [here](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.netohq.com%2Fpartners%2Fs%2Farticle%2Fpartner-access-for-merchant-site).

  
  

---

### Connect to a Client Site with SFTP

To connect to a client site you will need:

* Your credentials.
* Your client's website address.
* Software that allows you to connect via FTP, such as [Filezilla](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Ffilezilla-project.org%2F).

Most software will require four pieces of information to allow a connection. To connect to a client site, run your ftp software, and enter your credentials as per the below:

**Hostname**: sftp.neto.net.au

**Username**: Your username is a combination of your username (usually your email address), and your clients Maropost Commerce website address, in the format `username@sitedomain`. e.g.

`jane.sample@company.com.au@www.client-site.com.au`

`jane.sample@company.com.au@client-site.neto.com.au`

**Password**: (Your partner portal password)

**Port**: 1022

**Please Note**: Any changes to your email address or the client's website domain will affect your SFTP login credentials.

Once you’ve connected you will be able to browse the site files to upload and download themes, templates, or assets.