---
layout: post
title: KouChat for Android v1.1.0 is out!
---

Time for an update!

[![KouChat v1.1.0]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_main_chat.png "KouChat v1.1.0. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_main_chat.png)

There were some issues with the app on newer versions of Android that had to be fixed, and it looked a little dated. On Android 5 and up you will now get the material design theme. You probably also noticed the all white square status bar icon. I've replaced that with an icon that looks correct on all versions. I've also changed it to a low priority notification, which means it normally won't be visible in the status bar. But the notification is still there when you open the drawer. 

When talking about notifications:

<span class="threeImagesSideBySide">
[![Main Chat notification]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_main_chat.png "Main Chat notification. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_main_chat.png)
[![Private Chat notification]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_private_chat.png "Private Chat notification. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_private_chat.png)
[![File transfer notification]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_receive_file.png "File transfer notification. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0-notification_receive_file.png)
</span>

I've added separate notifications for chat messages and file transfers. Main chat messages will be grouped together in one notification, while private chat messages will be shown separately for each user. And you are finally able to watch the file transfer progress, and cancel the file transfer. These notifications can optionally blink the light, play a sound, and vibrate on arrival. Check Settings for these options.

And talking about file transfers. I think I've gotten the send file functionality to handle sharing from a lot more apps now.

On Android 6 I've added support for asking for permissions before saving files. The first time you receive a file transfer request you will get a dialog asking for permission. If you deny, it will reject the file transfer, otherwise it will continue like usual.

You might have noticed on Android 5 and 6 that the chat messages were a bit cramped. Google broke line spacing in Android 5, and still hasn't fixed it. As a consequence I've made a change to increase the height of lines with smileys so they don't overlap the text above. It doesn't look as smooth as it used to, but it's better to keep everything readable.

Google has also removed the option to keep wifi working properly when the screen is off in Android 6. They want to force usage of their own cloud service for notifications (that works with screen off), and save battery of course. Doesn't really fit into the serverless nature of KouChat though. The consequence is that you might get a lot of packet loss. You can try adding KouChat to the whitelist of apps that may use more battery when sleeping, but it's not been very reliable for me. See *Settings > Battery > Battery Optimization*. I hope to have some time later to look for solutions to this issue.

Oh yeah, unfortunately for some of you, I've dropped support for Android versions older than 4.1. It was just too much of a hassle for me. Sorry about that.

The changelog:

  - Changed oldest supported version of Android to 4.1, Jelly Bean.
  - Converted to Gradle for building.
  - Replaced ActionBarSherlock with AppCompat.
  - Updated white and transparent status bar icons, to make it work on Android 5 and up.
  - Improved support for sending files with content uris.
  - Added support for asking for permissions on Android 6.
  - Fixed issue where user interface would sometimes hang on Android 6.
  - Removed KouChat from title on settings and private chat.
  - Removed line height fix on Android 5 and up, because of bug #77941 with ignored line spacing.
  - Added notification with progress bar and cancel button for file transfers.
  - Added separate notifications for unread messages.
  - Added optional usage of light, sound and vibration on notifications.
  - Changing to switches instead of checkboxes in Settings on Lollipop and newer.

Get it on Google Play, or download the apk from the downloads section.
