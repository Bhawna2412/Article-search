---
title: "Agent Only Accounting Link - How to update the MYOB File location"
articleID: 1231
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Agent Only Accounting Link - How to update the MYOB File location

# Agent Only Accounting Link - How to update the MYOB File location

I have embedded a basic SQL Editor into Accounting Link for urgent situations such as this.  To open the SQL Editor, press Ctrl+Alt+Shift+S when in Accounting Link.  **Under no circumstances should you tell this to any customer!  You can do it while remoting into their computer, but they won't be able to tell what keys you pressed to open it.**

![](https://ress.zendesk.com/hc/en-us/article_attachments/202569314/importchangelocation.png)

1. Take a backup of the database using the Connections > Database tab.
2. Click Ctrl+Alt+Shift+S to open the SQL Editor.
3. In the box type SELECT \* FROM APParameterValue and click Execute.
4. In the Results tab you should see a list of parameters, with one of them having the MYOB company file location in the ParameterValue field.  Make a note of the APParameterValueID for this row (29 in the above example).
5. Press the Clear button
6. In the box type the following:

UPDATE APParameterValue SET ParameterValue = '<new company file location>' WHERE APParameterValueID = <your value>

For example, in the screenshot above, if I wanted to change the MYOB company file path to 'C:\Premier19\NewMYOBFile.myo', I would enter:

UPDATE APParameterValue SET ParameterValue = 'C:\Premier19\NewMYOBFile.myo' WHERE APParameterValueID = 29

7. Then click Execute, and Yes to confirm.
8. Click Clear, enter SELECT \* FROM APParameterValue again and click Execute, to check that your update was successful.  The Results tab should show your new file location in the parameter.
9. Close the SQL Editor
10. Go back to the Connections > Accounting Software tab, click Refresh Data to ensure the connection works.