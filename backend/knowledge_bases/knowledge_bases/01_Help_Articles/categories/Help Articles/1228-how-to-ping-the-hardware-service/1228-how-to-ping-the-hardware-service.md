---
title: "How to ping the Hardware Service"
articleID: 1228
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# How to ping the Hardware Service

# How to ping the Hardware Service

To help diagnose problems with the V2POS Hardware Service, it can be useful to perform a ping on the endpoints to ensure that the service can communicate outside the local network.

Simply open a web browser and type the following:

[https://www.retailexpress.com.au/features/pos-setup-and-support](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Flocalhost%3A44553%2FREX%2FSSL%2FPing)

If the ports were changed during the installation, the above command will need to reflect this.

If successful, you will get the following result from most browsers, however IE10 will attempt to download a file that can be saved and opened in a text editor containing the same data as below:

```
{"Authentication":null,"Data":null,"PageRecordCount":0,"Schema":null,"StatusCodes":["0"],"TotalRecordCount":0}
```

If unsuccessful you will get a generic Website is not available message from your browser. To check SSL is installed please refer to the following KB article:

[How to check if the Hardware Service SSL certificates have been installed](https://galaxy.maropost.com/s/article/Chrome-not-talking-to-hardware-after-release-to-fix-Chrome-update-forcing-SSL)