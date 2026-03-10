---
title: "Mobile SDK for Android – Installation and Configuration"
articleID: 876
category: "Mobile Marketing > Push Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Mobile SDK for Android – Installation and Configuration

You can install and configure the Mobile SDK to expand your marketing reach beyond email and enable real-time mobile engagement. This integration significantly improves your ability to connect with users through push notifications and in-app messaging, helping achieve better customer engagement across multiple communication channels.

Mobile SDK implementation streamlines your workflow by automating mobile marketing tasks and enabling location-based targeting. When properly configured, mobile campaigns can substantially improve engagement compared to email-only approaches, providing immediate communication opportunities while users are actively engaging with your mobile application.

You can create Mobile SDKs in Maropost Marketing Cloud and download the setup files while developing your Android apps.

To learn more about creating and managing mobile apps, read our [**Mobile App Profiles**](https://galaxy.maropost.com/s/article/Mobile-App-Profiles) page.

> **Note:** The minimum version for Maropost's Mobile SDK for Android is Ice Cream Sandwich (Android 15).

### In This Article

- Install the Maropost Mobile SDK for Android
- Adding the Framework
- Modify AndroidManifest.xml
- Dependencies
- Use Firebase Messaging Service to Get Device Tokens and Handle Rich Push Messages
- Start up MPPush Services
- Deep Linking and Rich Push Messaging

### Install the Maropost Mobile SDK for Android

You can download the mobile SDK configuration and setup files from MMC and install these files in your Android staging apps.

1. 
  From the Maropost Marketing Cloud Account, click on your **profile** and select **Settings**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mobapp8.05T5g00000xW5nKEAS.png)
2. 
  Visit the **Mobile Apps Profile** section.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mobapp0.05T5g00000xW4S5EAK.png)
3. 
  Choose a mobile SDK from the index page whose setup files you want to download.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mobapp9.05T5g00000xW3EsEAK.png)
4. Now, download the **.zip** and **configuration** files for your Android SDK. Finally, add these files to your Android app as a library.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mobapp10.05T5g00000xW3TiEAK.png)

### Adding the Framework

1. 
  Extract MPPushSDK.zip to reveal the MPPushSDK.aar and the MPFcmRegistrationListener.java files. Right-click in your app and then select Open Module Settings.

  ![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEE.05T5g00000BkXEEEA3.png)
2. In the top-left corner of the screen, click the New Module button. Select the "Add .JAR/.AAR Package option.
  ![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEF.05T5g00000BkXEFEA3.png)
3. 
  Navigate to where you had extracted the MPPushSDK.zip file and select the MPPushSDK.aar file.

  ![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXA2.05T5g00000BkXA2EAN.png)
4. 
  For the app module, click the Dependencies tab and add MPPushSDK as a module dependency.

  ![5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXA3.05T5g00000BkXA3EAN.png)
5. 
  In the same Dependencies tab, add com.google.android.gms:play-services:version as a Library Dependency (if not already present). In your root package, add MPFcmListenerService.java and set the values according to your project for package, YourMainActivity, R.drawable.*your_app_icon_file,* and *your_app_name*. Use your Maropost app key, app ID, and account ID within AndroidManifest.xml.

The app key, app ID, and account ID are found in the following places:

  ![6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXA4.05T5g00000BkXA4EAN.png)
6. Finally, you'll need to create a new API authentication token for use by the mobile SDK. This is an additional layer of required security. [**Read more**](https://galaxy.maropost.com/s/article/API-Overview) about creating API authentication tokens. When you create the authentication token, **please ensure** that you've given it privileges for push notifications.

### Modify AndroidManifest.xml

#### Add the following items to your AndroidManifest.xml file:

```plaintext
        //if in production use string(“Production”)
```

The FCM_SERVER_KEY and FCM_SENDER_ID are located in the API management section of your Google Developers Console. This is what your Google Developers Console will show after enabling Cloud Messaging:

![7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEC.05T5g00000BkXECEA3.png)

### Dependencies

Update your app-level build.gradle script to include the code and add dependencies in the code as follows:

```plaintext
apply plugin: 'kotlin-android'apply plugin: 'kotlin-android-extensions'dependencies {    implementation fileTree(include: ['*.jar'], dir: 'libs')    androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {        exclude group: 'com.android.support', module: 'support-annotations'    })    implementation 'com.android.support:appcompat-v7:27.1.1'    implementation 'com.android.support.constraint:constraint-layout:1.0.2'    testImplementation 'junit:junit:4.12'// Implement Kotlin Pluginimplementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"// For SDK Support, mandatory gradle pluginsimplementation 'com.google.android.gms:play-services-location:16.0.0'implementation 'com.google.firebase:firebase-messaging:17.3.4'implementation 'com.google.firebase:firebase-core:16.0.4'implementation 'com.squareup.okhttp3:okhttp:3.10.0'// Get access to the SDK with .aarimplementation project(':MPPushSDK')}apply plugin: 'com.google.gms.google-services'
```

Update your project-level build.gradle. Add the Kotlin extension under buildscript and the Kotlin gradle plugin under dependencies. Example:

```plaintext
buildscript {    ext.kotlin_version = '1.2.71'    repositories {        mavenCentral()        jcenter()        google()    }    dependencies {        classpath 'com.android.tools.build:gradle:3.2.1'        classpath 'com.google.gms:google-services:4.1.0'        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"    }}
```

### Use Firebase Messaging Service to Get Device Tokens and Handle Rich Push Messages

#### MyFirebaseMessagingService

**For Kotlin**

```plaintext
class MyFirebaseMessagingService : FirebaseMessagingService() {    private var title : String = ""    private var subTitle : String = ""    private var message : String = ""    private var deepLinkUrl : String = ""    private var campaignId : String = ""    private var imageUrl : String = ""    private var customData : String = ""    override fun onNewToken(p0: String?) {        super.onNewToken(p0)    }    override fun onMessageReceived(remoteMessage: RemoteMessage?) {        title = "Maropost"        subTitle = ""        message = "This is a test notification"        deepLinkUrl = ""        campaignId = ""        imageUrl = ""        customData = ""        if (remoteMessage != null && remoteMessage.data.isNotEmpty()) {            if(!TextUtils.isEmpty(remoteMessage.data["title"]))                title = remoteMessage.data["title"]!!            if(!TextUtils.isEmpty(remoteMessage.data["subtitle"]))                title = remoteMessage.data["subtitle"]!!            if(!TextUtils.isEmpty(remoteMessage.data["message"]))                message = remoteMessage.data["message"]!!            if(!TextUtils.isEmpty(remoteMessage.data["deeplinkurl"]))                deepLinkUrl = remoteMessage.data["deeplinkurl"]!!            if(!TextUtils.isEmpty(remoteMessage.data["message_id"]))                campaignId = remoteMessage.data["message_id"]!!            if(!TextUtils.isEmpty(remoteMessage.data["attachment-url"]))            // imageUrl is the image media url for rich notification                imageUrl = remoteMessage.data["attachment-url"]!!            if(!TextUtils.isEmpty(remoteMessage.data["test"]))                customData = remoteMessage.data["test"]!!             // test is the key mentioned in the custom data payload            // The key could be any depending on the requirement.            //For test purpose, the key 'test' is used            // Build notification            if(TextUtils.isEmpty(imageUrl))                createSimpleNotification()            else createRichNotification()        }    }    /**     * Generate a simple notification without any bitmap     */    private fun createSimpleNotification() {        addNotification(applicationContext,null)    }    /**     * Generate a rich notification with a bitmap to be set as bigPicture     */    private fun createRichNotification() {        RichPushAsync().executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR)    }    /**     * Create custom notification     */    private fun addNotification(context: Context, bitmap: Bitmap?) {        val mIntent = Intent(context, MainActivity::class.java)        if (!TextUtils.isEmpty(deepLinkUrl))            mIntent.putExtra(getString(R.string.pending_intent_deeplink_key), deepLinkUrl)        if (!TextUtils.isEmpty(campaignId))            mIntent.putExtra(getString(R.string.campaignId), campaignId)        if (!TextUtils.isEmpty(customData))            mIntent.putExtra(getString(R.string.customData), customData)        val pendingIntent =                 PendingIntent.getActivity(applicationContext, System.currentTimeMillis().toInt(),                 mIntent, PendingIntent.FLAG_UPDATE_CURRENT)        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {            val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE)               as NotificationManager            val id = "id_product"            val name = "Product"            // The user-visible description of the channel.            val description = "Notifications regarding our product"            val importance = NotificationManager.IMPORTANCE_MAX            val mChannel = NotificationChannel(id, name, importance)            // Configure the notification channel.            mChannel.description = description            notificationManager.createNotificationChannel(mChannel)            val notificationBuilder = NotificationCompat.Builder(context, "id_product")                    .setChannelId(id)                    .setContentTitle(title)   // Title of Notification                    .setContentText(message)  // Message body of Notification                    .setAutoCancel(true)                    .setSmallIcon(R.drawable.ic_launcher)                    .setContentIntent(pendingIntent)            if(bitmap != null) {                val style = NotificationCompat.BigPictureStyle()                        .bigPicture(bitmap)                notificationBuilder.setStyle(style)            }            notificationManager.notify(System.currentTimeMillis().toInt(), notificationBuilder.build())        } else {            // OS version less than Oreo            val mBuilder = NotificationCompat.Builder(context)                    .setContentTitle(title) // Title of Notification                    .setContentText(message)  // Message body of Notification                    .setPriority(NotificationCompat.PRIORITY_HIGH)                    .setContentIntent(pendingIntent)                    .setAutoCancel(true)                    .setSmallIcon(R.drawable.ic_launcher)            if(bitmap != null) {                val style = NotificationCompat.BigPictureStyle()                        .bigPicture(bitmap)                mBuilder.setStyle(style)            }            val mNotificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE)               as NotificationManager            mNotificationManager.notify(System.currentTimeMillis().toInt(), mBuilder.build())        }    }    inner class RichPushAsync : AsyncTask() {        override fun doInBackground(vararg params: Void): Bitmap? {            return try {                // You may choose your own way to load bitmap from url                // or use a third party app for downloading                BitmapFactory.decodeStream((URL(imageUrl)).content as InputStream)            } catch (e: Exception) {                e.printStackTrace()                null            }        }        override fun onPostExecute(bitmap: Bitmap?) {            super.onPostExecute(bitmap)            addNotification(applicationContext,bitmap)        }    }}
```

**For Java**

```plaintext
public class FirebaseServiceJava extends FirebaseMessagingService {    private String title = "Maropost";    private String subTitle = "";    private String message = "This is a test notification";    private String deepLinkUrl = "";    private String campaignId = "";    private String imageUrl = "";    private String customData = "";@Override    public void onNewToken(String s) {        super.onNewToken(s);    }@Override    public void onMessageReceived(RemoteMessage remoteMessage) {        super.onMessageReceived(remoteMessage);        title = "Maropost";        subTitle = "";        message = "This is a test notification";        deepLinkUrl = "";        campaignId = "";        imageUrl = "";        customData = "";        if (remoteMessage != null && !remoteMessage.getData().isEmpty()) {            if (!TextUtils.isEmpty(remoteMessage.getData().get("title")))                title = remoteMessage.getData().get("title");            if (!TextUtils.isEmpty(remoteMessage.getData().get("subtitle")))                subTitle = remoteMessage.getData().get("subtitle");            if (!TextUtils.isEmpty(remoteMessage.getData().get("message")))                message = remoteMessage.getData().get("message");            if (!TextUtils.isEmpty(remoteMessage.getData().get("deeplinkurl")))                deepLinkUrl = remoteMessage.getData().get("deeplinkurl");            if (!TextUtils.isEmpty(remoteMessage.getData().get("message_id")))                campaignId = remoteMessage.getData().get("message_id");            if (!TextUtils.isEmpty(remoteMessage.getData().get("attachment-url")))                imageUrl = remoteMessage.getData().get("attachment-url");            if (!TextUtils.isEmpty(remoteMessage.getData().get("test")))                customData = remoteMessage.getData().get("test");             // test is the key mentioned in the custom data payload            // The key could be any depending on the requirement.             // For test purpose, the key 'test' is used            // Build notification            if(TextUtils.isEmpty(imageUrl))                createSimpleNotification();            else createRichNotification();        }    }    /**     * Generate a simple notification without any bitmap     */    private void createSimpleNotification() {        addNotification(getApplicationContext(),null);    }    /**     * Generate a rich notification with a bitmap to be set as bigPicture     */    private void createRichNotification() {        new RichPushAsync().executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);    }    /**     * Create custom notification     */    private void addNotification(Context context, Bitmap bitmap) {        Intent mIntent = new Intent(context, MainActivity.class);        if (!TextUtils.isEmpty(deepLinkUrl))            mIntent.putExtra(getString(R.string.pending_intent_deeplink_key), deepLinkUrl);        if (!TextUtils.isEmpty(campaignId))            mIntent.putExtra(getString(R.string.campaignId), campaignId);        if (!TextUtils.isEmpty(customData))            mIntent.putExtra(getString(R.string.customData), customData);        PendingIntent pendingIntent = PendingIntent.getActivity(getApplicationContext(), 0, mIntent,                PendingIntent.FLAG_UPDATE_CURRENT);        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {            NotificationManager notificationManager =                 (NotificationManager)context.getSystemService(Context.NOTIFICATION_SERVICE);            String id = "id_product";            // The user-visible name of the channel.            String name = "Product";            // The user-visible description of the channel.            String description = "Notifications regarding our product";            int importance = NotificationManager.IMPORTANCE_MAX;            NotificationChannel mChannel = new NotificationChannel(id, name, importance);            // Configure the notification channel.            mChannel.setDescription(description);            notificationManager.createNotificationChannel(mChannel);            NotificationCompat.Builder notificationBuilder =              new NotificationCompat.Builder(getApplicationContext(), "id_product")                    .setChannelId(id)                    .setContentTitle(title)   // Title of Notification                    .setContentText(message)  // Message body of Notification                    .setAutoCancel(true)                    .setSmallIcon(R.drawable.ic_launcher) // Can place your own icon                    .setContentIntent(pendingIntent);            if(bitmap != null) {                NotificationCompat.BigPictureStyle style = new NotificationCompat.BigPictureStyle()                        .bigPicture(bitmap);                notificationBuilder.setStyle(style);            }            notificationManager.notify(1, notificationBuilder.build());        } else {            // OS version less than Oreo            NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(this)                    .setContentTitle(title) // Title of Notification                    .setContentText(message)  // Message body of Notification                    .setPriority(NotificationCompat.PRIORITY_HIGH)                    .setContentIntent(pendingIntent)                    .setAutoCancel(true)                    .setSmallIcon(R.drawable.ic_launcher); // Can place your own icon            if(bitmap != null) {                NotificationCompat.BigPictureStyle style = new NotificationCompat.BigPictureStyle()                        .bigPicture(bitmap);                mBuilder.setStyle(style);            }            NotificationManager mNotificationManager =               (NotificationManager)getSystemService(Context.NOTIFICATION_SERVICE);            mNotificationManager.notify(1, mBuilder.build());        }    }    class RichPushAsync extends AsyncTask {@Override        protected Bitmap doInBackground(Void... voids) {            try {                // You may choose your own way to load bitmap from url                 // or use a third party app for downloading                return BitmapFactory.decodeStream((InputStream) new URL(imageUrl).getContent());            } catch (Exception e) {                e.printStackTrace();                return null;            }        }@Override        protected void onPostExecute(Bitmap bitmap) {            super.onPostExecute(bitmap);            addNotification(getApplicationContext(),bitmap);        }    }}
```

> **Note:** There is no need to include FirebaseInstanceIdService if you have included the latest version of Firebase as mentioned in build.gradle. Similarly, you can avoid registering it in the manifest as well. onNewToken() is available with FirebaseMessagingService itself.

### Start up MPPush Services

In your MainActivity.java, import the SDK class com.maropost.mppush.MPPush. The MPPush SDK requires only a single entry point into the app delegate, which is startup. In your MainActivity.java, locate the onCreate() method. Initialize a shared MPPush instance by calling MPPush.shared().startup(this,"YOUR_API_KEY").

**For Kotlin**

```plaintext
class MainActivity : AppCompatActivity() {    private val LOCATION = 1    override fun onCreate(savedInstanceState: Bundle?) {        super.onCreate(savedInstanceState)        setContentView(R.layout.activity_main)        askForPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, LOCATION)    }    private fun askForPermission(permission: String, requestCode: Int?) {        if (ContextCompat.checkSelfPermission(this@MainActivity, permission) != PackageManager.PERMISSION_GRANTED) {            // Should we show an explanation?            if (ActivityCompat.shouldShowRequestPermissionRationale(this@MainActivity, permission)) {                //This is called if user has denied the permission before                //In this case I am just asking the permission again                ActivityCompat.requestPermissions(this@MainActivity, arrayOf(permission), requestCode!!)            } else {                ActivityCompat.requestPermissions(this@MainActivity, arrayOf(permission), requestCode!!)            }        } else {            setUpSDK()        }    }    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array, grantResults: IntArray) {        super.onRequestPermissionsResult(requestCode, permissions, grantResults)        if (ActivityCompat.checkSelfPermission(this, permissions[0]) == PackageManager.PERMISSION_GRANTED) {            when (requestCode) {                //Location                1 ->  setUpSDK()            }        }        else            setUpSDK()    }fun setUpSDK(){       MPPush.shared().startup(this,"YOUR_API_KEY");        val primaryColorValue = Color.parseColor("#00ff00")        val secondaryColorValue = Color.parseColor("#E91E63")        // Set the desired font to use when displaying in-app messages.        val typeface = Typeface.createFromAsset(assets, resources.getString(R.string.font_name))        MPPush.shared().setInAppFont(typeface as Typeface)        // Toggle whether the SDK tracks users by location (Not done by default):        MPPush.shared().trackLocation(true) //Required for location based segments        // Link device with an email ID (if available) for domain based segmentation        MPPush.shared().setUserEmail("user@example.com");        // Set the device user's full name (if available)        MPPush.shared().setUserFullName("John", "Appleseed");        // Add a tag to current device for segmentation        MPPush.shared().addUserTag("NAME_OF_TAG_TO_ADD")        // Remove a tag for current device        MPPush.shared().removeUserTag("NAME_OF_TAG_TO_REMOVE")        // Set the desired primary color(text color) to use when displaying in-app messages.        MPPush.shared().setPrimaryInAppColor(primaryColorValue)        // Set the desired secondary color(background color) to use when displaying in-app messages.        MPPush.shared().setSecondaryInAppColor(secondaryColorValue)        // Manually invoke when to display in-app messages in case auto-display is turned off        MPPush.shared().displayPendingInAppMessages()    }}
```

**For Java**

```plaintext
public class MainActivity extends AppCompatActivity{    private int LOCATION = 1;@Override    protected void onCreate(@Nullable Bundle savedInstanceState) {        super.onCreate(savedInstanceState);        askForPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, LOCATION);    }    private void askForPermission(String permission, int location) {        if (ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED) {            // Should we show an explanation?            if (ActivityCompat.shouldShowRequestPermissionRationale(this, permission)) {                //This is called if user has denied the permission before                //In this case I am just asking the permission again                ActivityCompat.requestPermissions(this, new String[]{permission}, requestCode);            } else {                ActivityCompat.requestPermissions(this, new String[]{permission}, requestCode);            }        }else{            setUpSDK();        }    }@Override    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {        super.onRequestPermissionsResult(requestCode, permissions, grantResults);        if(ActivityCompat.checkSelfPermission(this, permissions[0]) == PackageManager.PERMISSION_GRANTED){            switch (requestCode) {                //Location                case 1:                    setUpSDK();                    break;            }        }        else  setUpSDK();    }    /**     * Initialise your SDK     */    private void setUpSDK(){        // Sandbox        MPPush.shared().startup(this,"YOUR_API_KEY");        int primaryColorValue = Color.parseColor("#00ff00");        int secondaryColorValue = Color.parseColor("#E91E63");        // Set the desired font to use when displaying in-app messages.        Typeface typeface = Typeface.createFromAsset(getAssets(), getResources().getString(R.string.font_name));        MPPush.shared().setInAppFont(typeface);        // Toggle whether the SDK tracks users by location (Not done by default):        MPPush.shared().trackLocation(true); //Required for location based segments        // Link device with an email ID (if available) for domain based segmentation        MPPush.shared().setUserEmail("user@example.com");        // Set the device user's full name (if available)        MPPush.shared().setUserFullName("John", "Appleseed");        // Add a tag to current device for segmentation        MPPush.shared().addUserTag("NAME_OF_TAG_TO_ADD");        // Remove a tag for current device        MPPush.shared().removeUserTag("NAME_OF_TAG_TO_REMOVE");        // Set the desired primary color(text color) to use when displaying in-app messages.        MPPush.shared().setPrimaryInAppColor(primaryColorValue);        // Set the desired secondary color(background color) to use when displaying in-app messages.        MPPush.shared().setSecondaryInAppColor(secondaryColorValue);        // Manually invoke when to display in-app messages in case auto-display is turned off        MPPush.shared().displayPendingInAppMessages();    }}
```

Finally, build your project. If there are no errors, then you are all set.

> **Note:** In order to access the location, permission for ‘ACCESS_FINE_LOCATION’ is mandatory to support ‘High Accuracy’ priority for the location requests.

### Deep Linking and Rich Push Messaging

From a push message, use deep linking to guide the user to a specific screen in the mobile app. **For example,** if you have a sports app that reports on game scores, you can employ push messaging to send users final scores when their favorite teams have finished a game. Your deep linking here shouldn't direct the user to your app home screen; it should take him or her directly to the results screen. When the push notification is tapped, consume the data from the pending intent in MainActivity inside the overridden method onNewIntent().

**For Kotlin**

```plaintext
override fun onNewIntent(intent: Intent?) {    super.onNewIntent(intent)    if(intent != null && !TextUtils.isEmpty(intent.getStringExtra(getString(R.string.pending_intent_deeplink_key)))) // Same Key as used while adding extras to the       pending intent        // Consume the deeplink from intent and redirect it to the browser}
```

**For Java**

```plaintext
@Overrideprotected void onNewIntent(Intent intent) {    super.onNewIntent(intent);    if(intent != null && !TextUtils.isEmpty(intent.getStringExtra(getString(R.string.pending_intent_deeplink_key)))) // Same Key as used while adding extras to the pending intent        // Consume the deeplink from intent and redirect it to the browser}
```

> **Note:** onNewIntent() will be called if the app is running. If the app is killed and then the notification is clicked, then the data can be consumed from the intent in onCreate().

**For Kotlin**

```plaintext
override fun onCreate(savedInstanceState: Bundle?) {    super.onCreate(savedInstanceState)askForPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, LOCATION)val deeplinkUrl = intent.getStringExtra(getString(R.string.pending_intent_deeplink_key))    if(!TextUtils.isEmpty(deeplinkUrl)){// Consume the deeplink from intent and redirect it to the browser    }}
```

**For Java**

```plaintext
@Overrideprotected void onCreate(@Nullable Bundle savedInstanceState) {    super.onCreate(savedInstanceState);askForPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, LOCATION)val deeplinkUrl = intent.getStringExtra(getString(R.string.pending_intent_deeplink_key))    if(!TextUtils.isEmpty(deeplinkUrl)){// Consume the deeplink from intent and redirect it to the browser}
```

## Related Articles

**Mobile SDK Development:**

- [Mobile Sdk In](https://galaxy.maropost.com/kb/articles/874-mobile-sdk-in) - Implement in-app messaging functionality
- [Campaigns For Mobile Apps](https://galaxy.maropost.com/kb/articles/1735-campaigns-for-mobile-apps) - Create targeted mobile app campaigns

**Multi-Channel Integration:**

- [Bulk Messaging Examples](https://galaxy.maropost.com/kb/articles/814-bulk-messaging-examples) - Examples of effective messaging strategies
- [Connecting To A Social Media Account](https://galaxy.maropost.com/kb/articles/984-connecting-to-a-social-media-account) - Expand your communication channels
- [Create Social Media Content](https://galaxy.maropost.com/kb/articles/985-create-social-media-content) - Multi-channel content creation