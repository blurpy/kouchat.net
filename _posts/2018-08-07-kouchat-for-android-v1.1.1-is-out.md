---
layout: post
title: KouChat for Android v1.1.1 is out!
---

Time for an update on Android! This release focuses on bug fixes and Android 8.

Android 8 completely changes how notifications are configured. Instead of the developer being in control, the user is in control. Which means that none of the old notification settings in the app have any effect anymore. The new way is to use notification channels. The app can setup different categories/channels for notifications, each with different initial settings, and the app can then choose which channel to use for displaying the notification.

On Android 8, the old notification settings are hidden in the app settings, and instead you get a button to open the notification settings that Android provide for the app. It presents all the notification channels I chose to include. You can click on a channel to configure all the details.

<span class="threeImagesSideBySide">
[![Settings]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.1-settings.png "Settings. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.1-settings.png)
[![Notification Settings]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.1-notification-settings.png "Notification Settings. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.1-notification-settings.png)
</span>

I also fixed a bug where file transfer notifications looked like they got stuck. This happened because Android 7 introduced rate limiting on updates to notifications. For small file transfers, updating every change in percentage could trigger the rate limiter and the final 100% was ignored, even though the transfer had completed successfully.

There are a few more changes as well. Here is the full changelog:

  - Added notification channels for Android Oreo and newer.
  - Added button in settings to open system-provided notification settings on Android Oreo and newer.
  - Added adaptive launcher icon for Android Oreo and newer.
  - Migrated all styling to support library to get a consistent look and feel across versions of Android.
  - Fixed bug where file transfer notifications would get stuck in progress while actually completed.

Get it on Google Play, F-Droid, or download the apk from the downloads section.
