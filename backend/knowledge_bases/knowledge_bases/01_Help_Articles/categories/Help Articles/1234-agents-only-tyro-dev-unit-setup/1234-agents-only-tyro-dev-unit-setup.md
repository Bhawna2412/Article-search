---
title: "Agents Only - Tyro Dev Unit Setup"
articleID: 1234
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Agents Only - Tyro Dev Unit Setup

# Agents Only - Tyro Dev Unit Setup

If you are experiencing 404 Error when pairing the Tyro Dev Unit on the Test Rig, please follow the steps below to ensure that the Dev Terminal is pointing to the correct integration server.

The TTA has a setting which tells it which of the integration servers to connect to; Production or Test.

- Run 'Regedit' from the windows start menu

- For 64bit windows navigate through- HKEY\_LOCAL\_MACHINE\SOFTWARE\Wow6432Node\Tyro\Tyro.IntegrationServer.Url

- For 32bit windows navigate through- HKEY\_LOCAL\_MACHINE\SOFTWARE\Tyro\Tyro.IntegrationServer.Url

Modify the value to:

[https://integration.test.tyro.com/](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fintegration.test.tyro.com%2F)

Dev Terminals always need to point to this to connect.