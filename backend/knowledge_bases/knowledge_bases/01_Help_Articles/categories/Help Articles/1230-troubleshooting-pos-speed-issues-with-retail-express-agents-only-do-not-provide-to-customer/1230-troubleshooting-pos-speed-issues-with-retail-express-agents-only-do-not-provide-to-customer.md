---
title: "Troubleshooting POS speed issue's with Retail Express (AGENTS ONLY DO NOT PROVIDE TO CUSTOMER)"
articleID: 1230
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Troubleshooting POS speed issue's with Retail Express (AGENTS ONLY DO NOT PROVIDE TO CUSTOMER)

# Troubleshooting POS speed issue's with Retail Express (AGENTS ONLY DO NOT PROVIDE TO CUSTOMER)

This article is your go to guide on how to identify performance issue's with Retail Express, it will run you through troubleshooting the various environments that can impact the speed of your Retail Express experience.

***Troubleshooting the Retail Express Environment***

In order to identify if the issue is due to something relating to Retail Express were required you to test 2 things:

First is to find out is it database specific (i.e your site only) or is it all Retail Express clients experiencing this issue, to do this simply go to our training database:

[V2 Training Database](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fv2training.retailexpress.com.au)

Login using the latest credentials, if you do not have these please contact Retail Express support on 07 3117 0530. Click on POS and sign in with the same credentials again. Once in POS attempt to replicate the same issue that you were experiencing.

If you find the issue is also present in the training database please proceed to the next troubleshooting environment below. If the issue is not present on the training database then chances are it is a database specific issue in which case you should use the the attached form below and send through to:

[support@retailexpress.com.au](mailto:support@retailexpress.com.au)

with as much detail as possible so we can replicate and resolve as soon as possible.

******Troubleshooting the*** Internet Service Providers Environment***

There are several things we can do here with regards to troubleshooting ISP issues:

*The number one thing to try is to test the very process that your finding slow on a mobile phone or tablet that is NOT connected to your internal network / internet or if you have the tools connect your mobile / dongle to your computer and test the process that is slow on that devices internet connect. This will confirm straight away whether it is a Internet / Internal network issue and you can notify your Internet Service provider straight away.*

Second thing you can do if the above is not possible would be to see if you can successfully ping Google's website, to do this press the Windows key and the letter R together

                                       ![](https://ress.zendesk.com/hc/en-us/article_attachments/201215350/windowskey.jpg) and R

This should present you with the Run window:

                          ![](https://ress.zendesk.com/hc/en-us/article_attachments/201293844/cmdwindows.png)

Type in the Open: field the following 'CMD' as above and click OK. This should bring up the Command Prompt window (below) were we can perform this test:

![](https://ress.zendesk.com/hc/en-us/article_attachments/201215360/cmdwindowlive.png)

Now simply type : ping -t www.google.com.au

and press enter on your keyboard.

![](https://ress.zendesk.com/hc/en-us/article_attachments/201215370/cmdresults.png)

Press CTRL and the letter C together to stop the process

If you see the above then skip to the internet speed test below, however if you see timeout's or a very slow time's for example 150+ms this can indicate packet loss or a DNS issue in which you should contact your Internet Service Provider as soon as possible to get the issue looked into.

![](https://ress.zendesk.com/hc/en-us/article_attachments/201293954/requestfailed.JPG)

To test if it's a DNS specific issue simply type: ping 74.125.237.151

If this works fine and it gets a responses then this indicated a DNS failure which you can call your Internet Service Provider example Telstra and advise them of the specfic issue.

Testing you internet speed can be done in several ways however the easiest way is to go to a speed test website for example:

[www.speedtest.net](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.speedtest.net)

![](https://ress.zendesk.com/hc/en-us/article_attachments/201219010/speedteststart.png)

***Make sure when visiting these sites you DO NOT click on the advertising around the testing tools***, stick to the test in the middle of the page and select the server location / host and let the website tool run it's course (you may want to run this test several times through out the day to get a average). Once complete if you see speeds average below 500kb/s or 0.5mb/s then you need to contact your Internet Service Provider for assistance.

![](https://ress.zendesk.com/hc/en-us/article_attachments/201297894/speedtestresult.png)

(For people who know how to do so you can also login to your router and check the line speed and quality, if your router has a log you can also check for drop outs)

******Troubleshooting the*** Intranet Environment (the network inside you business)***

There are several things in your internal network that can cause slowness when using Retail Express see a few of them below:

Streaming Audio or Video on any PC's / tablets on the network

P2P downloading

Torrent downloading

Gaming

Youtube

If any of these are occurring on your business network try stopping them all or if possible turn of all but 1 pc and test to see if the issue's are resolved if they are then trances are there is something on your network that is taking all of the network resources whether outbound or inbound. Begin a process of elimination to identify the cause (try changing your WIFI password if the issue is still occurring).

You can also check to see if a particular piece of networking hardware is causing the issue by plugging a computer directly into the modem providing the internet, if the issue no longer occurs contact your IT department / provider for assistance.

******Troubleshooting the*** PC specific Environment***

The most simplistic thing you can do when trouble shooting a computer specific issue is to try using a different computer on the same network and do the same process (for example bring in a laptop from home to test). If the issue is not present on a different computer you can then contact your IT department / provider for assistance to resolve the issue. 

Another option is to try and close all other application down just leaving the Internet Browser that's running Retail Express open, then try the process again if it's better or resolved then chances are there is a resource issue on the computer that needs to be looked at once again by your IT department / provider.

Task Manager is also another great tool to look at a live graph of whats occurring with your computers hardware performance. To get Task manager open:

In Windows XP press CTRL    ALT  and Delete together (all 3 at once)

In Windows 7 + do as above but then select task manager with your mouse.

Click on the performance tab and here you can see live numbers of how things are performing, if you notice that things are at there maximum then once again contact your IT department / provider for assistance.

           ![](https://ress.zendesk.com/hc/en-us/article_attachments/201297864/taskman.png)