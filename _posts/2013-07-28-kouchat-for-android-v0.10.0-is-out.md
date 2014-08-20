---
layout: post
title: KouChat for Android v0.10.0 is out!
---

The new modernized user interface is ready! With new high resolution graphics goodness :)
I think it looks a lot better. Judge for yourself, by looking at these before and after screenshots:

[![KouChat for Android v0.9.0]({{ site.baseurl }}/images/screenshots/kouchat_android_v0.9.0_screenshot_main_chat.png "KouChat for Android v0.9.0. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/kouchat_android_v0.9.0_screenshot_main_chat.png)
[![KouChat for Android v0.10.0]({{ site.baseurl }}/images/screenshots/kouchat_android_v0.10.0_screenshot_tablet_10_main_chat.png "KouChat for Android v0.10.0. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/kouchat_android_v0.10.0_screenshot_tablet_10_main_chat.png)

I originally planned to add support for receiving files this time, but I opted for upgrading the user interface instead. I've been waiting for better handling in IntelliJ IDEA regarding usage of APIs that aren't available on all the versions of Android that KouChat supports ([Lint API Check](http://tools.android.com/recent/lintapicheck)). And now it became available in IntelliJ IDEA 13 ([EAP](http://confluence.jetbrains.com/display/IDEADEV/IDEA+13+EAP)). The Android maven plugin also got support for this, so now my build fails if I use the wrong APIs. Excellent :) So it became a lot safer for me to upgrade the user interface, without worrying about breaking KouChat on e.g. Android 2.3.3.

The smileys that I'm now using are from Gnome 3. Hope you guys don't mind :) The smileys are using the same license as KouChat.

Changelog:

* Updated to use high resolution icons.
* Updated to target API 16 (Android 4.1), to get a more modern look.
* Added ActionBar, using ActionBarSherlock for compatibility with API 10 (Android 2.3.3).
* Upgraded Robolectric to version 2.1.
* Added check for null in onDestroy of different activities to avoid NullPointerExceptions.
* Added support for selecting text in the chat. Android 3.0 and newer only.
* Stopped the software keyboard from going full screen on some phones in landscape mode.
* Added support for avoiding automatic text scroll when the input field has lost focus. Click on some text to remove the focus from the input field. Android 3.0 and newer only.

Hope you like the new interface! Get it on Google Play, or download the apk from the downloads section.
