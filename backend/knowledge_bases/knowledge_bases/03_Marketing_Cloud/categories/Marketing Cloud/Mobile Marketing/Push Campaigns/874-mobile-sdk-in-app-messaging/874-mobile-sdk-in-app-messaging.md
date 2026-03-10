---
title: "Mobile SDK: In-App Messaging"
articleID: 874
category: "Mobile Marketing > Push Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Mobile SDK: In-App Messaging

You can implement in-app messaging functionality to enhance subscriber engagement through real-time mobile communication. This enables timely, personalized notifications that can substantially improve user interaction with your mobile applications, driving better engagement rates compared to traditional email-only approaches.

Mobile SDK integration helps optimize your marketing effectiveness by expanding communication channels beyond email. When properly configured, in-app messaging delivers immediate value to users while they're actively using your app, creating opportunities for increased conversions and improved customer experience.

With the help of **In-App Messaging,** information can be provided to the mobile app to display push notifications and/or in-app messages.

By using the MPInAppMessageViewInteractionListener or the MPInAppMessageViewInteractionDelegate methods, you can use the JSON-formatted API payload within the mobile application to display the push notification on the in-app message. The JSON input payload includes the following set of parameters:

- **attachment_url: **Used for rich media messaging. The URL corresponds to the image, video, or sound file that you want included in your mobile message.
- **data: **Maropost for Marketing allows you to pass in your own JSON-formatted custom data in the mobile app campaign, where your mobile app will be able to consume that data for the in-app experience.
- **deeplinkurl: **This is the URL that, when mobile users click on the push notification or in-app message, will take them to the specified resource within the mobile app.
- **delay_minute:** This integer represents the number of minutes to delay after the mobile user has opened the app before displaying the in-app message.
- **delay_second:** This integer represents the number of seconds to delay after the mobile user has opened the app before displaying the in-app message.
- **duration:** This integer represents the number of seconds to display the in-app message before closing if the mobile user has not clicked on the message.
- **expiry:** This is the date and time set in the future in YYYY-MM-DDTHH:MM:SS format. It defines the date at which the message will no longer appear in the mobile app if a mobile app user has not opened the app since the time that the in-app message was sent.
- **message:** The in-app message.
- **position:** An integer value that specifies the position of the in-app message on the screen, where 0 - display as a banner at the top of the screen, 1 - display in the middle of the screen, and 2 - display at the bottom of the screen.
- **primary_color:** The hex code of the message text.
- **secondary_color:** The hex code of the message text background.
- **title:** The message title.
- **subtitle:** The message subtitle.

**Example:**

```plaintext
{  "in_app": {    "attachment-url": "https://cdn.maropost.com/dev/uploads/account_200000/454/Slack_Clone_Icon.png",    "data": {      "name": "Ravi",      "message_id": "1066"    },    "deeplinkurl": "maropost://host/about",    "delay_minute": "0",    "delay_second": "0",    "duration": "60",    "expiry": "2018-04-11T04:45:36.076-04:00",    "message": "This is what your message will look like! Type in your message in the text area and get a preview right here",    "position": "0",    "primary_color": "#333333",    "secondary_color": "#ffffff",    "subtitle": "Inapp_SubTitle",    "title": "Inapp_Title"  },  "message_id": "1066"}
```

## Android

MPInAppMessageViewInteractionListener

### Kotlin

```plaintext
public class MainActivity: AppCompatActivity(),MPInAppMessageViewInteractionListener{    //Set InApp messages Listener    MPPush.shared().setMpInAppInteractionListener(this);}
```

### Java

```plaintext
public class MainActivity extends AppCompatActivity implements MPInAppMessageViewInteractionListener{    //Set InApp messages Listener    MPPush.setMpInAppInteractionListener(this);}
```

### Methods

### Kotlin

```plaintext
override fun didTapMessageView(payload: JSONObject) {}override fun didShowMessageView(messageId: Int) {}override fun didHideMessageView(messageId: Int) {}
```

### Java

```plaintext
@Overridepublic void didTapMessageView(JSONObject payload) {//This method is called when the user taps on the alter message within the mobile application.//Write code to use a JSON Object payload as required within the application.}//This method is called when message will appear@Overridepublic void didShowMessageView(int messageId) {}//This method is called when message will hide@Overridepublic void didHideMessageView(int messageId) {}
```

## iOS

MPInAppMessageViewInteractionDelegate

### Swift

```plaintext
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate,CLLocationManagerDelegate,MPInAppMessageViewInteractionDelegate { func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {	//Set delegate method within class itself        MPPush.shared.inAppInteractionDelegate = self	}}
```

#### Delegate Methods

```plaintext
func didTapMessageView(_ messageView: UIView, withNotificationPayload payload: [AnyHashable : Any]) {    print("Message Playload \(payload as NSDictionary);     //This method is called when tap on alter message with in mobile application.    //Write code to use payload Json Object as required within application.}func didShowMessageView(messageView: UIView) {    //This method is called when message will appear }func didHideMessageView(messageView: UIView) {    //This method is called when message will hide }
```

### Objective C

```plaintext
@interface AppDelegate : UIResponder - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {//Set delegate method within class itselfMPPush.shared.inAppInteractionDelegate = self;    return YES;}
```

#### Delegate Methods

```plaintext
- (void)didTapMessageViewWithMessageView:(UIView *)messageView withNotificationPayload:(NSDictionary *)payload{    NSLog(@Message Playload %@",payload);    //This method is called when tap on alter message with in mobile application.    //Write code to use payload Json Object as required within application.}- (void) didShowMessageViewWithMessageView:(UIView *)messageView{    //This method is called when message will appear }- (void) didHideMessageViewWithMessageView:(UIView *)messageView{    //This method is called when message will hide }
```

## Related Articles

**Mobile SDK Integration:**

- [Mobile Sdk For Android Installation And Configuration](https://galaxy.maropost.com/kb/articles/876-mobile-sdk-for-android-installation-and-configuration) - Complete Android SDK setup guide
- [Campaigns For Mobile Apps](https://galaxy.maropost.com/kb/articles/1735-campaigns-for-mobile-apps) - Create targeted mobile app campaigns

**Multi-Channel Messaging:**

- [Bulk Messaging Examples](https://galaxy.maropost.com/kb/articles/814-bulk-messaging-examples) - Examples of effective bulk messaging strategies
- [Connecting To A Social Media Account](https://galaxy.maropost.com/kb/articles/984-connecting-to-a-social-media-account) - Expand your messaging channels
- [Bulk Messaging Personalised Email Headers](https://galaxy.maropost.com/kb/articles/815-bulk-messaging-personalised-email-headers) - Personalize multi-channel communications