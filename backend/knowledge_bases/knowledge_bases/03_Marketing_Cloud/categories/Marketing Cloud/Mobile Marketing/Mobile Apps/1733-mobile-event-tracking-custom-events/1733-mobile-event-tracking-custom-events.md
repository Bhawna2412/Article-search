---
title: "Mobile Event Tracking: Custom Events"
articleID: 1733
category: "Mobile Marketing > Mobile Apps"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-21
---

# Mobile Event Tracking: Custom Events

Even with the set of standard events, you’ll still want to create your own library of custom events to further extend your reporting of in-app engagement and to send remarketing mobile messages.

From the Mobile Module’s main menu, select **Push >> Push Applications**, then click on the name of the mobile app.

Next, select **Push >> Events** from the menu bar.

To create a new event, click on the Add Item icon in the top-right corner of the screen. Or, you can click the [New Event] button located at the bottom-right corner of the screen.

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXGw.05T5g00000BkXGwEAN.png)

- **Event Name:** This is the name of the event that your mobile app developer will add to the code. You must name the event using all lowercase letters or numbers, with no spaces or special characters other than the underscore character.
- **Display Name **(Optional): This is the name of the event as displayed within reports.
- **Description **(Optional): A description allowing you to provide more context and information about the event.
- **Event Field(s):** Select the fields that you want associated with this custom event.

## **Create a New Event Field**

If you need to create a new field, click the Add New Event icon on the right side of the screen to display the Create Event Field modal.

- **Name:** The Event Field name must be all lowercase characters, with no spaces or special characters other than the underscore character.
- **Field Type:** Select the data type for this field. The segment rules for the Event field will automatically filter according to the data type that you’ve specified.

## **Implementing Custom Events in the Mobile SDK**

Once you’ve created custom events in Maropost, you can call the event from within the mobile app using the mobile SDK’s method for custom events. If the custom event has any attributes, you’ll need to capture and pass those in as well.

### **Android: **

To track any custom event in the Android mobile app, implement the trackEvent method defined as follows:

**Kotlin and Java**
`MPPush.shared().trackEvent(jsonObject!!, this)`

Where jsonObject is the key/value pair payload. This payload **must** include the name of the custom event as well as its attributes.

**Example:**

```less
jsonObject.put("event_name",”finished_level")   
jsonObject.put("level_name","Level One")
jsonObject.put("value","2000")
jsonObject.put("completion_date,"04-10-2018 06:33:17 +05:30")
```

**NOTE:** If your custom event’s event attribute is a Date/Time datatype, then the payload should include the date formatted as ‘DD-MM-YYYY HH:MM:SS ZZZ,’ e.g., 04-10-2018 06:33:17 +05:30.

Also, implement the MPPushCallbacks interface in the class to obtain the response of Event Tracking.

**Kotlin**
`class EventTracking : AppCompatActivity(), MPPush.MPPushCallbacks`

**Java**
`class EventTracking extends AppCompatActivity implements MPPush.MPPushCallbacks`

Override the interface’s methods for success and failure notifications.

**Kotlin**

```kotlin
override fun onEventTrackedSuccessfully(result: String) {
    Toast.makeText(this,result,Toast.LENGTH_LONG).show()

}

override fun onEventTrackedFailure(result: String) {
   Toast.makeText(this,result,Toast.LENGTH_LONG).show()
}
```

**Java**

```typescript
@Override
public void onEventTrackedSuccessfully(String result) {
    Toast.makeText(this,result,Toast.LENGTH_LONG).show()

}
@Override
public void onEventTrackedFailure(String result) {
   Toast.makeText(this,result,Toast.LENGTH_LONG).show()
}
```

### **iOS: **

To track any custom event in the iOS mobile app, implement the trackEvent method defined as follows:

```less
func trackEvent(withEventName eventName: String, andEventProperties properties: [String: Any], completionHandler handler: @escaping (_ result: [String : Any]?, _ status: Bool) -> Void)
```

**Swift**

```objectivec
MPPush.shared.trackEvent(withEventName: "finished_level", andEventProperties: postDict) { (response, status) in
// Handle response
                }
 }
```

**Objective C**

```clojure
 [[MPPush shared] trackEventWithEventName:@"finished_level" andEventProperties:postDict completionHandler:^(NSDictionary * response, BOOL status) {
// Handle response
    }];
```

Where postDict is the dictionary containing the event parameters (event fields) and their values.

**Example:**

```ada
postDict["level_name"] = "Level One"
postDict["value"] = "2000"
postDict["completion_date"] = "04-10-2018 06:33:17 +05:30"
```

**NOTE:** If your custom event’s event attribute is a date/time datatype, then the payload should include the date formatted as ‘DD-MM-YYYY HH:MM:SS ZZZ,’ e.g., 04-10-2018 06:33:17 +05:30.