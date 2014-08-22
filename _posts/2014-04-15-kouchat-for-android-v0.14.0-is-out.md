---
layout: post
title: KouChat for Android v0.14.0 is out!
---

The big news this time is support for choosing text colors, and for setting the topic.

You can set two colors. One for your own text. And one for the information messages, like away messages, topics and so on. I'm using the [HoloColorPicker](https://github.com/LarsWerkman/HoloColorPicker), which I think both looks good and works good. I've been looking for a color picker for a long time, and I finally found one I liked. I also added preview icons to the settings screen to make it easy to see which colors you have set at the moment.

The topic can be set from the menu, and now displays on a second line in the action bar, instead of on the same line as your nick name. Which should give much more space to see the actual topic on phones. 

<span class="twoImagesSideBySide">
[![Set own message color]({{ site.baseurl }}/images/screenshots/kouchat_android_v0.14.0_screenshot_phone_settings_own_color.png "Set own message color. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/kouchat_android_v0.14.0_screenshot_phone_settings_own_color.png)
[![Topic on second line]({{ site.baseurl }}/images/screenshots/kouchat_android_v0.14.0_screenshot_phone_main_chat.png "Topic on second line. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/kouchat_android_v0.14.0_screenshot_phone_main_chat.png)
</span>

I've also enabled a wifi lock. I've read about many users who experience network issues in apps without a wifi lock. My devices don't care about the wifi lock, but I'm enabling it just in case.

And I have to apologize to the Android v2.3.3 users out there who had issues with KouChat v0.13.0. There seems to have been something wrong with the build, which made it crash on startup on devices with that version of Android. I never noticed the issue myself, as I don't have any devices with v2.3.3, and it never happened with the emulator during development. There were three users who sent me an error report on Google Play, but without any description. So I assumed it was a device issue. Out of curiosity I deployed the Google Play build of v0.13.0 to the emulator and it crashed too. The current build of v0.14.0 does not crash in the emulator, so I hope it now works for everyone. I'll be testing all builds that are uploaded to Google Play in the v2.3.3 emulator from now on, just to be sure. And for those who submit errors reports, please add a description of what you did and what happened when it crashed. I appreciate it :)

The changelog:

* The topic, if set, is shown as subtitle in the ActionBar.
* Fixed bug where it was possible to get new lines in the nick name settings dialog.
* Added support for setting the topic.
* Added high performance wifi lock.
* Added color picker in the settings to choose own color and info color.
* Fixed startup crash on Android 2.3.3, I hope. 

Get it on Google Play, or download the apk from the downloads section. 
