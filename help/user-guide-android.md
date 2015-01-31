---
layout: default
permalink: /help/user-guide/android/
title: User guide for Android
---

# User guide for Android

This is the user guide for the Android version of KouChat. It runs on both phones and tablets.


## Main chat

The main chat is a public chat containing all the users on the network. It looks like this:

[![Main Chat]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.0_screenshot_tablet_10_main_chat.png "Main Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.0_screenshot_tablet_10_main_chat.png)


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


## Private chat

You can start a private chat with a user if you do not want everyone to see the conversation.

Click on a user in the user list, and you will get a dialog like this:

[![Private Chat]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.0_screenshot_tablet_10_private_chat.png "Private Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.0_screenshot_tablet_10_private_chat.png)

The chat area and input field works just like the main chat. Click on the icon in the top left corner to go back to the main chat, or use the back button.


## Away mode

You can use away mode to say that you do not wish to be disturbed. When you go away:

* You can not send or receive files.
* You can not change the topic.
* You can not change your nick name.
* You can not send any messages to the main chat.
* You can not send or receive private chat messages.
* Your nick name in the user list turns gray.

When you click Away in the menu, you will get a popup asking for an away message:

<span class="halfSizeImage">
[![Going away]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-go_away_dialog.png "Going away. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-go_away_dialog.png)
</span>

The away message can't be empty. After you click OK you are in away mode.

To return from away mode you click on Away in the menu again, but instead of a popup asking for an away message, you get a popup asking if you want to come back from away:

<span class="halfSizeImage">
[![Coming back from away]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-back_from_away_dialog.png "Coming back from away. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-back_from_away_dialog.png)
</span>

After you click OK you are back to normal mode.


## Topic

You can set a topic in the main chat that all users, including users joining later, will see. The topic is shown in the actionbar of the main chat.

When you click Topic in the menu, you will get a popup like this:

<span class="halfSizeImage">
[![Setting the topic]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-topic_dialog.png "Setting the topic. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-topic_dialog.png)
</span>

The popup will initially show the current topic. Change it and click OK to set the new topic of the chat. Blank the field to remove the topic of the chat.


## Settings

Use the Settings to tweak certain aspects of KouChat.

[![Settings]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v0.14.0_screenshot_tablet_10_settings.png "Settings. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v0.14.0_screenshot_tablet_10_settings.png)

Here is a more detailed description:

Setting | Default value | Description
--------|---------------|------------
Set nick name | NewUser | The unique name that identifies you in the chat. A nick name can have between 1 and 10 characters. Legal characters are: `a-z`, `0-9`, `-` and `_`.
Set own message color | RGB: <span style="color: #0C0C42;">#0C0C42</span> | The color used when you are sending messages. Use the Change button to select a different color.
Set info message color | RGB: <span style="color: #004700;">#004700</span> | The color used for information messages from the application. Use the Change button to select a different color.
Enable wake lock | Off | Enable the wake lock to keep the device from sleeping while KouChat is running. Many devices go to sleep after some time being idle, and disables the network connection. Enabling the wake lock will keep the device from entering sleep. This uses more battery, but might keep the network enabled at all times. Not all devices support this option.

Click on the icon in the top left corner to go back to the main chat, or use the back button.


## Notification area

When you start KouChat, it will continue to run in the background until you use Quit from the menu. Just closing the app by using the back or home button will only hide the user interface. Same thing when killing KouChat from the "switch app" screen.

You can see when KouChat is running by looking for the icon in the notification area:

<span class="halfSizeImage">
[![KouChat icon in the notification area]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-notification_area.png "KouChat icon in the notification area. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-notification_area.png)
</span>

Besides showing that KouChat is running, the notification area is used for two purposes:

* Notification of new messages
* Notification of new file transfer requests

See separate topic for more about file transfers.


### Message icons

There are 2 different icons used in the notification area to indicate chat status:

Icon | Description
-----|------------
![Normal icon]({{ site.baseurl }}/images/icons/kou_normal_32x32.png) | There is no activity in the chat.
![Activity icon]({{ site.baseurl }}/images/icons/kou_normal_activity_32x32.png) | There is unseen activity in the chat.

The icons change based on both the main chat and private chat activity.


### Drawer

Pull down the notification drawer to see the current chat status:

<span class="halfSizeImage">
[![KouChat icon in the notification drawer]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-notification_drawer.png "KouChat icon in the notification drawer. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.0.2-notification_drawer.png)
</span>

If you click on the notification you will be taken to the main chat. This notification can not be removed as long as KouChat is running.


## File transfers


### Send file

There are three ways to send a file to a user:

* Right click on the user in the user list and choose Send file.
* Drag and drop a file on the user in the user list.
* Drag and drop a file in the chat area of a private chat window with the user.

In all cases, you get an open file dialog:

[![Select file to send]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_send_choose_file_popup.png "Select file to send. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_send_choose_file_popup.png)

If you used the right click option you have to navigate to, and select the file to send. If you used the drag and drop options, then the file is preselected in the dialog, and you just have to confirm with the Open button. Press the Cancel button to abort the process.

If you choose to send the file, you will get a new file transfer dialog, to monitor the progress, and to cancel the file transfer.

[![Sending file in progress]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_send_dialog.png "Sending file in progress. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_send_dialog.png)

The transfer will not start until the other user has accepted the file.

### Receive file

When someone sends a file to you, you will get a popup like this:

[![Receive file popup]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_receive_popup.png "Receive file popup. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_receive_popup.png)

You can choose to receive the file or not. If you click Yes then you will get a file save dialog where you can choose where to save the file. If you choose to receive the file, you will get a new file transfer dialog, to monitor the progress, and to cancel the file transfer.

[![Receiving file in progress]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_opensuse_nimbus.png "Receiving file in progress. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_opensuse_nimbus.png)

The transfer should start immediately. When the file has been received successfully then the button for Open folder is enabled. Click this button if you want to open a file manager at the location where the file was saved.


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
