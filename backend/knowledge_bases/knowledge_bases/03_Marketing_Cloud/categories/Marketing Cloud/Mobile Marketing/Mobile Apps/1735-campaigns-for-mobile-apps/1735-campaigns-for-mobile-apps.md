---
title: "Campaigns for Mobile Apps"
articleID: 1735
category: "Mobile Marketing > Mobile Apps"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Campaigns for Mobile Apps

You can create targeted mobile app campaigns using push notifications and in-app messages to significantly improve user engagement and retention rates. Understanding mobile messaging options helps optimize your mobile marketing strategy by delivering personalized content at the right moment, whether through scheduled broadcasts or triggered responses to user behavior.

Mobile campaign capabilities enable more effective user engagement by providing multiple touchpoint options including push notifications, in-app messages, and triggered communications. When properly configured, these mobile marketing tools can substantially improve user retention and app engagement by delivering timely, relevant content that enhances the mobile experience.

Once the Maropost Mobile SDK is implemented in your mobile app, you can use Maropost for Marketing to create and send push notifications and in-app messages to your mobile app users.

You can send scheduled broadcast messages, or you can send messages to individual users based on in-app triggers that your mobile app developer will have defined.

## **Create a New Mobile App Message**

Once inside the Mobile module, select **Push >> Push Applications**. (This is the default view of this module.) From the index view of mobile applications, click on the name of the mobile application that you want to send the messages to. Next, click on the 'Add Item' icon in the top right-hand corner of the screen, and select 'New Message' from the drop-down menu. Alternatively, you can click the [New Message] button located at the bottom-right corner of the screen.

![Screen_Shot_2019-05-14_at_2.36.11_PM.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWbN.05T5g00000BkWbNEAV.png)

### **Step One - Message Details**

- **Message Name** - Enter the name of this message that will be displayed **for reference** in the application.
- **Title** - The title to be displayed in the push notification and the in-app message.
- **Subtitle** - The sub-title to be displayed in the push notification and the in-app message.
- **Contact Tags** - This option will be available only if you are using the Unique Identifier feature. It enables you to insert personalization from the contact's profile record into the body of the message.
- **Table Tags** - This option will be available only if you are using the Unique Identifier feature. It enables you to **insert personalization** from a Relational Table into the body of the message.
- **Message Text** - Enter the text for the push notification and in-app messages.
- **Image/Video URL** - The URL of the image, video, or sound file that you wish to be included in the push notification and in-app message. Both iOS and AndroidOS support MP4 video file encoding and MP3 sound file encoding for in-app messages. Apple's iOS supports MP4 and MP3 for video and sound for push notifications. However, AndroidOS only supports images for push notifications at present. By pressing down (for 3D Touch devices) or swiping down on the notification, mobile app users are shown a larger version of the content. GIFs will automatically start animating while videos and audio files can be played directly in the notification.
- **Custom Data** - If your mobile app developer has implemented this ability, you can pass custom data in a JSON-formatted data structure to the mobile app.
- **Deep Link URL** - Deep linking allows the marketer to direct users who open a push message (if the message is viewed in the mobile device's lock screen) or who click a push message (if the message is viewed when the mobile device is unlocked) to a particular screen within the app. Enter the URL scheme to the page that your mobile app developer provides you.
- **Badge Count** - Enter an integer that you want to display in the user's mobile app screen.
- **Sound** - Enter the name of the sound that you want the users to hear when a message is posted to their mobile app.

Once you've created your message, click the [Render Preview] button to preview how it will look as a push notification on the mobile device's lock screen or as a banner, and as an in-app message. Click the Apple and Android icons to preview how the message will look on an iPhone and an Android device.

### **Step Two - Select Audience**

This screen lets you define who will receive the mobile message. Whether or not the message will appear to specific users depends entirely upon what notification options the users have set in their own devices.

- **All Devices** - Select this option if you want the message sent to all mobile app users.
- **Segments** - Select this option if you only want the message to be sent to a selected audience. You can select one or more segments that you've already created.
- **Device Tokens** - This option is typically used when you want to test a message. Enter a comma-delimited list of iOS and/or Android device IDs. This message will be sent to those devices only.
- **Login IDs** - This is **another option for testing** a message. If your mobile app developer has implemented the option in the mobile SDK to capture a user's login ID, you can send the message to that mobile device without having to know the specific device ID.

### **Step Three - Message Options**

This is where you determine whether you want to send your message as a push notification, an in-app message, or both.

**An in-app message has additional options, including:**

- **Primary Color** - Set the hex code for the font color of your message.
- **Secondary Color** - Set the hex code for the background banner color of your message.
- **On-screen Placement** - Set where you want the in-app message to appear on the screen when the mobile app user opens the app. Choose from the top (the default), middle, or bottom of the screen.
- **Display Duration** - Enter the number of seconds that you want the in-app message to appear on the screen before closing. If you have provided a deeplink in your message, when the mobile app user touches the in-app message, it will close before displaying the destination page within the app.
- **Days Before Expiration** - Enter a time limit between when you send the mobile message to when it will no longer appear in the screen. This setting is useful to not display messages to users who open their mobile app after the message is no longer relevant.
- **Delay Duration** - By default, the in-app message will appear immediately when users open their mobile app. This option allows you to set a delay between when users open the mobile app to when the in-app message is displayed on screen.

### **Step Four - Schedule and Activate**

This final step sets when to send the mobile message.

- **Send Once** - Select the date and time that you want the message to be sent.
- **Send Recurring** - Use this option if you want to send reminder messages. Though, be careful that you don't over-message your users. You can send a recurring message once a day, week, month, or once a year.
-   - **Triggers** - Select the name of the trigger that will send the message to the mobile app users.
  - **Delay** - By default, the message will be sent immediately when the triggering event is detected. Use this option if you want to delay when to send the message.
  - **Message Limit** - The default setting is to send the message **only once** to a mobile app user when the triggering event is detected. Change the setting if you want to send the message to the same mobile app user each time the user triggers the event.

  **Send Trigger** - Use this option when your mobile app developer has implemented Maropost's Mobile SDK for event tracking.

If you've scheduled the message for a one-time send or as a recurring message, you have the option to save the message as scheduled, or to send the message immediately by clicking either the [Schedule] or [Send Now] buttons, respectively. If you've set the message as a triggered message, click the [Set Trigger] button.

## Related Articles

**Mobile & Multichannel:**

- [Creating Sms Campaigns](https://galaxy.maropost.com/kb/articles/998-creating-sms-campaigns) - Expand your mobile messaging with SMS campaigns
- [Bulk Messaging Examples](https://galaxy.maropost.com/kb/articles/814-bulk-messaging-examples) - Effective multi-channel messaging strategies
- [Create Social Media Content](https://galaxy.maropost.com/kb/articles/985-create-social-media-content) - Coordinate mobile and social media campaigns

**Campaign Management:**

- [Connecting To A Social Media Account](https://galaxy.maropost.com/kb/articles/984-connecting-to-a-social-media-account) - Integrate social channels with mobile campaigns
- [Bulk Messaging Personalised Email Headers](https://galaxy.maropost.com/kb/articles/815-bulk-messaging-personalised-email-headers) - Personalize cross-channel messaging