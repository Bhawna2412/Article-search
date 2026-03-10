---
title: "Mobile SDK for iOS – Installation and Configuration"
articleID: 875
category: "Mobile Marketing > Push Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-21
---

# Mobile SDK for iOS – Installation and Configuration

You can create Mobile SDKs in Maropost Marketing Cloud and download the setup files while developing your iOS apps.

To learn more about creating and managing Mobile Apps, read our [**Mobile App Profiles**](https://galaxy.maropost.com/s/article/Mobile-App-Profiles) page.

**Note**: Maropost's Mobile SDK for iOS requires **Xcode version 8.0.0** or above.

### In This Article

- 
- 
- 
- 
- 
- 
- 
- 

### Upload the Push Notification Client SSL Certificate

On the Push Campaigns index page, click the Edit icon for the mobile application. Then, select the iOS tab.

- 
- **Push Certificate** - Create your [**push notification client SSL certificate**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.apple.com%2Flibrary%2Fios%2Fdocumentation%2FIDEs%2FConceptual%2FAppDistributionGuide%2FAddingCapabilities%2FAddingCapabilities.html%23%2F%2Fapple_ref%2Fdoc%2Fuid%2FTP40012582-CH26-SW6). You can then export the certificate as Personal Information Exchange format (.p12 file extension) or as Privacy Enhanced Mail format (.pem file extension). Upload the file as shown on the screen.
- 
- 

Then click the **Save** button.

### Install the Maropost Mobile SDK for iOS

You can download the mobile SDK configuration and setup files from MMC and install these files in your iOS staging apps.

1. 
  From the Maropost Marketing Cloud Account, click on your **profile** and select **Settings**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mobapp8.05T5g00000xW7nHEAS.png)
2. 
  Visit the **Mobile Apps Profile** section.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mobapp0.05T5g00000xW7nnEAC.png)
3. 
  Choose a mobile SDK from the index page whose setup files you want to download.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mobapp9.05T5g00000xW6uSEAS.png)
4. Now, select the **bitcode version** and download the **.zip** and **configuration** files for your iOS SDK. Finally, add these files to your iOS app as a library.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mobapp11.05T5g00000xW7p3EAC.png)
5. 
6. 
  If you are downloading the SDK for Xcode 12 (Swift 5.3), drag MPPushKit.framework into the top level of your app.

  ![App_Framework_Swift_5.3.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEj.05T5g00000BkXEjEAN.png)
7. 
  If you are downloading the SDK for Xcode 10 (Swift 5.0), Xcode 10 (Swift 4.2.1), or Xcode 9 (Swift 4.1.2 and below), then rename the MPPush_bitcode.framework file to MPPush.framework and drag MPPush.framework into the top level of your app.

  ![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEk.05T5g00000BkXEkEAN.png)

### Adding the Framework

Choose the following options when adding the framework:

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEl.05T5g00000BkXElEAN.png)
**For Xcode 12 (Swift 5.3)**

Add Maropost's MPPushKit.framework in the Embedded Frameworks section of the Project target's general settings as shown below:

![Project_Settings.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXAx.05T5g00000BkXAxEAN.png)

**For Xcode 9 (Swift 4.1.2 and below), Xcode 10 (Swift 4.2.1), and Xcode 10 (Swift 5.0)**

Add Maropost's MPPush.framework in the Embedded Frameworks section of the Project target's general settings, as shown below:

![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEg.05T5g00000BkXEgEAN.png)
#### Add these required frameworks to your project:

- 
- 

The framework supports both device and simulator architectures. However, since simulator architectures aren’t supported while publishing the app to the App Store, you will need to add the following script in the Run Script section of Build Phases in your project settings. This script will ensure that the simulator architectures get stripped away at the time of archiving.

```bash
APP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"

# This script loops through the frameworks embedded in the application and
# removes unused architectures.
find "$APP_PATH" -name '*.framework' -type d | while read -r FRAMEWORK
do
FRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)
FRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"
echo "Executable is $FRAMEWORK_EXECUTABLE_PATH"

EXTRACTED_ARCHS=()

for ARCH in $ARCHS
do
echo "Extracting $ARCH from $FRAMEWORK_EXECUTABLE_NAME"
lipo -extract "$ARCH" "$FRAMEWORK_EXECUTABLE_PATH" -o "$FRAMEWORK_EXECUTABLE_PATH-$ARCH"
EXTRACTED_ARCHS+=("$FRAMEWORK_EXECUTABLE_PATH-$ARCH")
done

echo "Merging extracted architectures: ${ARCHS}"
lipo -o "$FRAMEWORK_EXECUTABLE_PATH-merged" -create "${EXTRACTED_ARCHS[@]}&quot;
rm "${EXTRACTED_ARCHS[@]}&quot;

echo "Replacing original executable with thinned version"
rm "$FRAMEWORK_EXECUTABLE_PATH"
mv "$FRAMEWORK_EXECUTABLE_PATH-merged" "$FRAMEWORK_EXECUTABLE_PATH"

done
```

### Install the Mobile SDK for iOS Config File

Click the [Config File] button on the mobile app's Details tab to download the MPConfig.plist file to your desktop. Add it to the top level of your project.

![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEh.05T5g00000BkXEhEAN.png)The configuration file includes the system-generated AppKey, AppID, AccountID, and an inProduction boolean value, which looks similar to the following example:

![5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEi.05T5g00000BkXEiEAN.png)
#### Choose the option when adding the .plist file

**Note**: If you do not wish to add the MPConfig.plist to your project, you'll need to initiate the SDK by setting the required values manually.

**Swift**

MPPush.shared.startup(withApplicationKey: "*your_app_key*", withAppId: "*your_app_id*", withAccountId: "*your_account_id*", forProduction: false)

**Objective C**

[[MPPush shared]startupWithApplicationKey:@"*your_app_key*" withAppId:@"*your_app_id*" withAccountId:@"*your_account_id*" forProduction:NO];

where, *your_app_key*, *your_app_id,* and *your_account_id* are found in the following places:

![6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEo.05T5g00000BkXEoEAN.png)

Finally, you’ll need to create a new API authentication token for use by the mobile SDK. This is an additional layer of required security. To learn about creating API authentication tokens, see [**API Keys**](https://galaxy.maropost.com/kb/articles/28-api-keys?utm_source=community-search&utm_medium=organic-search&utm_term=API+Keys). When you create the authentication token, make sure that you’ve given it privileges for Push Notifications.

### Import the required header files

**Swift**

Create YourApp-Bridging-Header.h and import the MPPush header file.

For Xcode 12 (Swift 5.3):

```
#import 
```

For Xcode 9 (Swift 4.1.2 and below), Xcode 10 (Swift 5.0), and Xcode 10 (Swift 4.2.1):

```
#import 
```

**Objective C**
In your AppDelegate.m file, include the following:

```
#import 
```

#### Start up MPPush services

The MPPush SDK requires only a single entry point in the app delegate, which is `startup:`. In your AppDeleget.m file,

- 
- 
- 

**Swift**

```less
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
// Override point for customization after application launch.
// Tell the SDK your preferences BEFORE startup
// For example, set your preferences for the types of notifications your app should receive:
MPPush.shared.setMPUserNotificationTypes(types: [.alert,.badge,.sound])

// Toggle whether the SDK logs progress (YES by default):
MPPush.setLogging(true)

// Toggle whether the SDK tracks users by location (NO by default)
MPPush.shared.trackLocation(shouldTrack: true)// Will be required for location based segments

// Toggle whether the SDK should auto display In-App Messages (YES by default):
MPPush.shared.shouldAutoDisplayInAppMessages(shouldAutoDisplay: true)

// Number of seconds the SDK will wait to auto-display pending in-app messages after app launch; 3 seconds by default
MPPush.shared.setInAppDisplayDelay(second: 0)

MPPush.shared.startup(withAuthToken: "your_api_auth_token")
// OR, if you don't wish to include MPConfig.plist, do:
// MPPush.shared.startup(withApplicationKey: "your_app_key", withAppId: "your_app_id", withAccountId: "your_account_id", withAuthToken: "your_api_auth_token", forProduction: true)

return true
}
```

#### **Additional Methods**

All the following methods can be called anywhere in your application, but must be called after `startup:`, or `startupWithApplicationKey:withAppId:withAccountId:forProduction:`

- `MPPush.shared.setUserLoginID("1234")` – Link the device with the user's login ID.
- 
- `MPPush.shared.setUserEmailID("john@example.com")` – Link the device with an email ID (if available) for domain-based segmentation.
- 
- 
- 
- 
- 
- 

**Objective C**

```less
- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions {
    // Override point for customization after application launch.
    // Tell the SDK your preferences BEFORE startup
    // For example, set your preferences for the types of notifications your app should receive:
    [[MPPush shared] setMPUserNotificationTypesWithTypes:(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge)];

    // Toggle whether the SDK logs progress (YES by default):
    [[MPPush shared] setLoggingWithValue:YES];

    // Toggle whether the SDK tracks users by location (NO by default):
    [[MPPush shared] trackLocationWithShouldTrack:YES];  // Will be required for location based segments

    // Toggle whether the SDK should auto display In-App Messages (YES by default):
    [[MPPush shared] shouldAutoDisplayInAppMessagesWithShouldAutoDisplay:YES];

    // Number of seconds the SDK will wait to auto-display pending in-app messages after app launch
    [[MPPush shared] setInAppDisplayDelayWithSeconds:0]; // (3 seconds by default)
    [[MPPush shared] startupWithAuthToken:@your_api_auth_token];
    // OR, if you don't wish to include MPConfig.plist, do:
    // [MPPush startupWithApplicationKey:@your_app_key withAppId:@your_app_id withAccountId:@your_account_id withAuthToken:@your_api_auth_token forProduction: YES];
    // ******************************************************//
    return YES;
}
```

All the following API methods can be called anywhere in your application, but must be called after `startup:` or `startupWithApplicationKey:withAppId:withAccountId:forProduction:`

- `[[MPPush shared] setUserLoginID:@"1234"];` – Link the device with the user's login ID.
- 
- `[[MPPush shared] setUserEmailID:@“ravi@maropost.com”];` – Link the device with an email ID (if available) for domain-based segmentation.
- 
- 
- 
- 
- 
- 

Make sure to use the same bundle identifier in your app and in the APNS certificate. This error is the usual reason for devices not receiving push messages sent from Maropost for Marketing. Finally, build your project and you're all set.

### Deep Linking From a Push Notification

Deep linking adds user experience to push notifications. Normally, when a mobile app user clicks a push notification, the mobile app launches, and the app's home screen appears. Deep linking will not only launch the mobile app, but it will also display the specified screen within the app.

In this section, you will learn how to enable deep linking within an app and how to configure a deep link URL for a specific screen in the app.

#### Create an App and Enable Deep Linking

Create a basic app in XCode (v8.0.0 or above) consisting of a main ViewController pushed on a UINavigation or ViewController. Also, create some additional ViewControllers to be used later. To enable deep linking, go to the Info tab in the XCode project. In the 'URL Types' section, click on the + button and then add an identifier and a URL scheme. Ensure that the identifier and URL scheme you select are unique to the mobile app.

Remember to take note of the URL scheme you enter, as this is how iOS knows to open a screen in your app. For example, Maropost's own mobile app for iOS uses **maropost://** as its URL scheme. To confirm that your URL scheme has been registered, check Info.plist for an entry named 'URL Types'. Expand the section to see the new URL scheme you have just registered. You can verify that this scheme is working by typing the following URL into the Safari browser on your mobile device: ***your_url_scheme://*** (e.g., **maropost://**). This should open up your mobile app. The format of a deep link URL is **[scheme]://[host]/[path],** where:

- 
- 
- 

#### Handling the Opening of Registered URLs Within Your App

Once you have confirmed that your URL scheme is registered and the deep linking is working, you will not handle the URL used to launch the mobile app. In its present state, your app can be launched using a simple URL, but not much beyond that will happen. To accomplish true deep linking, you will need to add and override the following function in AppDelegate:

**Swift**

```less
func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void)
{
completionHandler([.alert, .badge, .sound])
}

@available(iOS 10.0, *)
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: () -> Void) {
completionHandler()
}
```

**Objective C**

```less
//Called when a notification is delivered to a foreground app.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler{
completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
}

//Called to let your app know which action was selected by the user for a given notification.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler{
completionHandler();
}
```

This function is not present by default; you will need to add it in. This function gets called each time the mobile app launches using the registered URL scheme. The exact implementation of the method depends on your needs.

In the following examples, the method simply checks the host and then, based on the path, loads a particular ViewController.

**Swift**

```swift
func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void)
{
let userInfo = notification.request.content.userInfo
handleNotificationData(userInfo: userInfo as NSDictionary)
completionHandler([.alert, .badge, .sound])
}

@available(iOS 10.0, *)
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: () -> Void) {
let userInfo = response.notification.request.content.userInfo
handleNotificationData(userInfo: userInfo as NSDictionary)
completionHandler()
}

//Handle Notification Data
private func handleNotificationData(userInfo: NSDictionary) {
if userInfo["message_id"] != nil {
UserDefaults.standard.set(String(format: "%@, userInfo[message_id"] as! CVarArg), forKey: "campaignId")
}

let deeplinkurl = userInfo["deeplinkurl"] as? String
let url = URL(string: deeplinkurl ?? "")
if url != nil {
DispatchQueue.main.async {
if #available(iOS 10, *) {
UIApplication.shared.open(url!, options: [:],
completionHandler: {
(success) in
})
} else {
UIApplication.shared.openURL(url!)
}
}
}
}
```

**Objective C**

```objectivec
//Called when a notification is delivered to a foreground app.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler{
[self handleNotificationData:@{}];
completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
}

//Called to let your app know which action was selected by the user for a given notification.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler{
[self handleNotificationData:@{}];
completionHandler();
}

-(void)handleNotificationData: (NSDictionary *)userInfo {
NSString * deeplinkurl = [userInfo valueForKey:@deeplinkurl];
NSString *strMessageID = [userInfo valueForKey:@message_id];

[[NSUserDefaults standardUserDefaults]setValue: strMessageID forKey:@campaignId];
[[NSUserDefaults standardUserDefaults] synchronize];

NSURL *url = [NSURL URLWithString:deeplinkurl];

if(url != nil) {
dispatch_async(dispatch_get_main_queue(), ^{
[[UIApplication sharedApplication] openURL:url options:@{} completionHandler:^(BOOL success) {
}];
});
}
}
```

### Implement Rich Push Messages using the Notification Service extension

Rich push messaging uses the UNNotificationServiceExtension class to create an object that modifies the content of a remote notification before it is delivered to the end user's mobile app. The UNNotificationServiceExtension class provides the entry point for a Notification Service app extension, which lets you customize the content of a remote notification before it is delivered to the user. A Notification Service app extension does not present any UI of its own. Instead, it is launched on demand when a notification of the appropriate type is delivered to the user’s device. You use this extension to modify the notification’s content or download content related to the extension.

For example, you could use the extension to decrypt an encrypted data block or to download images associated with the notification. You do not create instances of the UNNotificationServiceExtension class yourself. Instead, the Xcode template for a Notification Service Extension target contains a subclass for you to modify. Use the methods of that subclass to implement your app extension’s behavior. When a remote notification for your app is received, the system loads your extension and calls its didReceive(_:withContentHandler:) method only when both of the following conditions are met:

1. 
2. 

**Note**: 
You cannot modify silent notifications or those that only play a sound or badge the app’s icon. The didReceive(_:withContentHandler:) method performs the main work of your extension. You use that method to make any changes to the notification’s content. 

That method has a limited amount of time to perform its task and execute the provided completion block. If your method does not finish in time, the system calls the serviceExtensionTimeWillExpire() method to give you one last chance to submit your changes. If you do not update the notification content before the time expires, the system displays the original content. 

As for any app extension, you deliver a Notification Service app extension class as a bundle inside your app. The template provided by Xcode configures the Info.plist file automatically for this app extension type. Specifically, it sets the value of the NSExtensionPointIdentifier key to com.apple.usernotifications.service and sets the value of the NSExtensionPrincipalClass key to the name of your UNNotificationServiceExtension subclass. 

For information about how to create and schedule remote notifications using the Apple Push Notification service (APNS), see Local and Remote Notification Programming Guide. The Xcode templates provide a subclass of UNNotificationServiceExtension for you to modify. You must implement the didReceive(_:withContentHandler:) method and use it to process incoming notifications. It is also strongly recommended that you override the serviceExtensionTimeWillExpire() method.

**Swift**

The following method is called when there is a notification ready to be modified:

```swift
func didReceive(UNNotificationRequest, withContentHandler: (UNNotificationContent) -> Void)
```

The following method is called when an extension is about to be terminated:

```go
func serviceExtensionTimeWillExpire()
```

**Objective C**

The following method is called when there is a notification ready to be modified:

```css
- didReceiveNotificationRequest:withContentHandler:
```

The following method is called when an extension is about to be terminated:

```markdown
- serviceExtensionTimeWillExpire
```

### Parsing the Notification Payload

**Swift**

```swift
class NotificationService: UNNotificationServiceExtension {

    var contentHandler: ((UNNotificationContent) -> Void)?
    var bestAttemptContent: UNMutableNotificationContent?
    var downloadTask: URLSessionDownloadTask?

    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {

        func failEarly() {
            contentHandler(request.content)
        }

        self.contentHandler = contentHandler
        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)

        // Get the custom data from the notification payload
        if let data = request.content.userInfo as? [String: AnyObject] {
            // Grab the attachment
//            let notificationData = data["data"] as? [String: String]
            if let urlString = data["attachment-url"], let fileUrl = URL(string: urlString as! String) {
                // Download the attachment
                URLSession.shared.downloadTask(with: fileUrl) { (location, response, error) in
                    if let location = location {
                        // Move temporary file to remove .tmp extension
                        let tmpDirectory = NSTemporaryDirectory()
                        let tmpFile = "file://".appending(tmpDirectory).appending(fileUrl.lastPathComponent)
                        let tmpUrl = URL(string: tmpFile)!
                        try! FileManager.default.moveItem(at: location, to: tmpUrl)

                        // Add the attachment to the notification content
                        if let attachment = try? UNNotificationAttachment(identifier: "video", url: tmpUrl, options:nil) {
                            self.bestAttemptContent?.attachments = [attachment]
                        }else if let attachment = try? UNNotificationAttachment(identifier: "image", url: tmpUrl, options:nil) {
                            self.bestAttemptContent?.attachments = [attachment]
                        }else if let attachment = try? UNNotificationAttachment(identifier: "audio", url: tmpUrl, options:nil) {
                            self.bestAttemptContent?.attachments = [attachment]
                        }else if let attachment = try? UNNotificationAttachment(identifier: "image.gif", url: tmpUrl, options: nil) {
                            self.bestAttemptContent?.attachments = [attachment]
                        }
                    }
                    // Serve the notification content
                    self.contentHandler!(self.bestAttemptContent!)
                    }.resume()
            }
        }
    }
}
```

**Objective C**

```objectivec
- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent *_Nonnull))contentHandler
{
    self.contentHandler = contentHandler;
    self.bestAttemptContent = [request.content mutableCopy];

    // Modify the notification content here...
    // self.bestAttemptContent.body = [NSString stringWithFormat:@%@ [modified]", self.bestAttemptContent.body];

    // check for media attachment, example here uses custom payload keys mediaUrl and mediaType
    NSDictionary *userInfo = request.content.userInfo;
    if (userInfo == nil)
    {
        [self contentComplete];
        return;
    }

    if ([userInfo objectForKey:@attachment-url])
    {

        [self loadAttachmentForUrlString:[userInfo objectForKey:@attachment-url]
                       completionHandler: ^(UNNotificationAttachment *attachment) {
                           self.bestAttemptContent.attachments = [NSArray arrayWithObjects:attachment, nil];
                       }];

    }
}
```

In this protocol, [didReceiveNotificationRequest], the mobile app accesses the userInfo and starts downloading the image from the image URL using an NSURL session. Once the image is downloaded, the UNNotificationAttachment object is initialized with the local downloaded path, and the attachment object is set to the notification object. The custom method, which will download the image to the local directory, is as follows:

```markdown
- (void)loadAttachmentForUrlString:(NSString *)urlString
                 completionHandler:(void (^)(UNNotificationAttachment *))completionHandler
{
    __block UNNotificationAttachment *attachment = nil;
    __block NSURL *attachmentURL = [NSURL URLWithString:urlString];

    NSString *fileExt = [@. stringByAppendingString:[urlString pathExtension]];

    NSURLSession *session = [NSURLSession sessionWithConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];

    NSURLSessionDownloadTask *task = [session downloadTaskWithURL:attachmentURL
                                                completionHandler: ^(NSURL *temporaryFileLocation, NSURLResponse *response, NSError *error) {
                                          if (error != nil)
                                          {
                                              NSLog(@%@", error.localizedDescription);
                                          }
                                          else
                                          {
                                              NSFileManager *fileManager = [NSFileManager defaultManager];
                                              NSURL *localURL = [NSURL fileURLWithPath:[temporaryFileLocation.path
                                                                                        stringByAppendingString:fileExt]];
                                              [fileManager moveItemAtURL:temporaryFileLocation
                                                                   toURL:localURL
                                                                   error:&error];

                                              NSError *attachmentError = nil;
                                              attachment = [UNNotificationAttachment attachmentWithIdentifier:[attachmentURL lastPathComponent]
                                                            URL:localURL
                                                            options:nil
                                                            error:&attachmentError];
                                              if (attachmentError)
                                              {
                                                  NSLog(@%@", attachmentError.localizedDescription);
                                              }
                                          }
                                          completionHandler(attachment);
                                      }];

    [task resume];
}
```

At this point, the process of downloading the image is complete, and the image is set to the attachment object. Next, handle the return completion handler once the processing is done or when the time expires protocol gets called.

```objectivec
- (void)serviceExtensionTimeWillExpire {
    // Called just before the extension will be terminated by the system.
    // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
    [self contentComplete];
}

- (void)contentComplete {
    [self.session invalidateAndCancel];
    self.contentHandler(self.bestAttemptContent);
}
```

Build, run, and send a test notification. You can use the pusher service to test this quickly. Refer to the sample service extension payload example.