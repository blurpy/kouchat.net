---
layout: default
permalink: /help/user-guide/android/
title: User guide for Android
---

# User guide for Android

This is the user guide for the Android version of KouChat. It runs on both phones and tablets.


## Main chat

The main chat is a public chat containing all the users on the network. It looks like this:

[![Main Chat]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_main_chat.png "Main Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_main_chat.png)


### Chat area

The big text area displays information messages and chat messages. Information messages are prefixed with `***`. Chat messages are prefixed with the nick name of the user who sent the message.

Any links written are underlined and clickable.


### User list

The text area on the right is the user list. It contains all the currently online users. Click on a user to open a private chat session with the user.

Icons and text style used on the user says something about the status of the user:

Style | Description
-----------|------------
**Bold font** | This is you.
Normal font | Other users.
<span style="color: #848484;">Gray text</span> | User is away.
Star (*) after the nick name | User is currently writing.
![Envelope icon]({{ site.baseurl }}/images/icons/envelope.png) | User has sent you a private message.


### Input field

Everyone can send a message to the main chat, as long as they are not away. Type a message in the lower input field, and press the Enter/Return key to send. Click on the input field to open the on-screen keyboard if it's not visible.


### The menu

These are the menu items you get when clicking the menu button (with the three dots) in the top right corner of the main chat.

Menu item | Description
----------|------------
Settings | Opens the Settings.
Away | If currently not away: opens a popup asking for an away message. <br>If currently away: opens a popup asking if you want to come back from away.
Topic | Opens a popup displaying the current topic, with the option of changing it. If the topic is set as empty, it will be removed.
About | Opens a popup with contact details and other quick information about KouChat.
Quit | Quit from the chat, and shutdown the application.


### Notifications

Main chat messages will be grouped together in one notification. The 5 latest messages will be displayed, while the unread message counter will keep increasing. Click the notification to open the main chat.

<span class="halfSizeImage">
[![Main Chat notification]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_main_chat_full.png "Main Chat notification. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_main_chat_full.png)
</span>


## Private chat

You can start a private chat with a user if you do not want everyone to see the conversation.

Click on a user in the user list, and you will get a window like this:

[![Private Chat]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_private_chat.png "Private Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_private_chat.png)

The chat area and input field works just like the main chat. Click on the arrow in the top left corner to go back to the main chat, or use the back button.


### Notifications

Private chat messages will be shown separately for each user. The 5 latest messages will be displayed, while the unread message counter will keep increasing. Click the notification to open the private chat for that user.

<span class="halfSizeImage">
[![Private Chat notification]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_private_chat_full.png "Private Chat notification. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_private_chat_full.png)
</span>


## Away mode

You can use away mode to say that you do not wish to be disturbed. When you go away:

* You can not send or receive files.
* You can not change the topic.
* You can not change your nick name.
* You can not send any messages to the main chat.
* You can not send or receive private chat messages.
* Your nick name in the user list turns gray.
* Heads up display of notifications are disabled, as well as sound and vibration.

When you click Away in the menu, you will get a popup asking for an away message:

<span class="halfSizeImage">
[![Going away]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-go_away_dialog.png "Going away. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-go_away_dialog.png)
</span>

The away message can't be empty. After you click OK you are in away mode.

To return from away mode you click on Away in the menu again, but instead of a popup asking for an away message, you get a popup asking if you want to come back from away:

<span class="halfSizeImage">
[![Coming back from away]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-back_from_away_dialog.png "Coming back from away. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-back_from_away_dialog.png)
</span>

After you click OK you are back to normal mode.


## Topic

You can set a topic in the main chat that all users, including users joining later, will see. The topic is shown in the actionbar of the main chat.

When you click Topic in the menu, you will get a popup like this:

<span class="halfSizeImage">
[![Setting the topic]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-topic_dialog.png "Setting the topic. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-topic_dialog.png)
</span>

The popup will initially show the current topic. Change it and click OK to set the new topic of the chat. Blank the field to remove the topic of the chat.


## Settings

Use the Settings to tweak certain aspects of KouChat.

[![Settings]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_settings.png "Settings. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_settings.png)

Here is a more detailed description:

Setting | Default value | Description
--------|---------------|------------
Set nick name | NewUser | The unique name that identifies you in the chat. A nick name can have between 1 and 10 characters. Legal characters are: `a-z`, `0-9`, `-` and `_`.
Set own message color | RGB: <span style="color: #0C0C42;">#0C0C42</span> | The color used when you are sending messages.
Set info message color | RGB: <span style="color: #004700;">#004700</span> | The color used for information messages from the application.
Enable wake lock | Off | Enable the wake lock to keep the device from sleeping while KouChat is running. Many devices go to sleep after some time being idle, and disables the network connection. Enabling the wake lock will keep the device from entering sleep. This uses more battery, but might keep the network enabled at all times. Not all devices support this option.
Enable light | On | Blink the LED light when receiving notifications.
Enable sound | On | Play a sound when receiving notifications.
Enable vibration | On | Vibrate when receiving notifications.

Click on the arrow in the top left corner to go back to the main chat, or use the back button.


## The KouChat notification

When you start KouChat, it will continue to run in the background until you use Quit from the menu. Just closing the app by using the back or home button will only hide the user interface. Same thing when killing KouChat from the "switch app" screen.

You can see when KouChat is running by looking for this notification in the notification drawer:

<span class="halfSizeImage">
[![KouChat in the notification drawer]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_drawer_service.png "KouChat in the notification drawer. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_drawer_service.png)
</span>

This is a low priority notification, which means the icon won't be shown in the status bar. Clicking the notification will open the main chat.


## File transfers


### Send file

To send a file with KouChat you need to use the share functionality in Android. This examples uses the Gallery:

<span class="halfSizeImage">
[![Share file with KouChat]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_share.png "Share file with KouChat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_share.png)
</span>

Select KouChat in the list of apps, and you will get another popup where you can select which user to send the file to:

<span class="halfSizeImage">
[![Select user to send to]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-file_transfer_select_user.png "Select user to send to. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-file_transfer_select_user.png)
</span>

A notification will be shown immediately after selecting a user, with status and progress of the file transfer. Until the other user has accepted, the status will be "Waiting". You can click the Cancel button at any time to abort.

<span class="halfSizeImage">
[![Send file progress notification]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_notification_sending.png "Send file progress notification. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_notification_sending.png)
</span>


### Receive file

When someone sends a file to you, you will get a notification like this:

<span class="halfSizeImage">
[![Receive file notification]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_notification_request.png "Receive file notification. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_notification_request.png)
</span>

Click the notification to continue. On Android 6 and newer you will be asked for permission to save files the first time:

<span class="halfSizeImage">
[![Save file permission dialog]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_save_permission_dialog.png "Save file permission dialog. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_save_permission_dialog.png)
</span>

After accepting, or if you don't need to accept, you can choose to receive the file or not:

<span class="halfSizeImage">
[![Choose to receive the file]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_receive_dialog.png "Choose to receive the file. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_receive_dialog.png)
</span>

The transfer should start immediately if you click Accept. The notification will be updated with status and progress of the file transfer. You can click the Cancel button at any time to abort. The file is saved to the standard download folder in Android.

<span class="halfSizeImage">
[![Receive file progress notification]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_notification_receiving.png "Receive file progress notification. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-file_transfer_notification_receiving.png)
</span>


## Smileys

These smileys can be used in the main chat and the private chat.

Code | Smiley
-----|-------
:) | ![:)]({{ site.baseurl }}/images/smileys/android/ic_smiley_smile.png)
:( | ![:(]({{ site.baseurl }}/images/smileys/android/ic_smiley_sad.png)
:p | ![:p]({{ site.baseurl }}/images/smileys/android/ic_smiley_tongue.png)
:D | ![:D]({{ site.baseurl }}/images/smileys/android/ic_smiley_teeth.png)
;) | ![;)]({{ site.baseurl }}/images/smileys/android/ic_smiley_wink.png)
:O | ![:O]({{ site.baseurl }}/images/smileys/android/ic_smiley_omg.png)
:@ | ![:@]({{ site.baseurl }}/images/smileys/android/ic_smiley_angry.png)
:S | ![:S]({{ site.baseurl }}/images/smileys/android/ic_smiley_confused.png)
;( | ![;(]({{ site.baseurl }}/images/smileys/android/ic_smiley_cry.png)
:$ | ![:$]({{ site.baseurl }}/images/smileys/android/ic_smiley_embarrassed.png)
8) | ![8)]({{ site.baseurl }}/images/smileys/android/ic_smiley_shade.png)
