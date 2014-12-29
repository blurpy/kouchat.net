---
layout: post
title: KouChat for Android v0.12.0 is out!
---

New in this release is an optional wake lock. You can find it in the settings:

[![Settings]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v0.12.0_screenshot_tablet_10_settings.png "Settings. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v0.12.0_screenshot_tablet_10_settings.png)

The effect of the wake lock is best described using a screenshot:

[![KouChat Desktop showing wake lock timeouts.]({{ site.baseurl }}/images/screenshots/desktop/kouchat-wake_lock.png "KouChat Desktop showing wake lock timeouts. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat-wake_lock.png)

I left the screen off on my phone most of that day to test. I started with the wake lock off. The phone timed out several times until I turned the wake lock on after about an hour. Then it stayed connected for several hours until it became unstable when I disabled the wake lock again.

The wake lock helped a lot on my phone. Not so much on my tablet. As soon as I turn the screen off, it cuts the network (even though I tell it not to in the settings). YMMV.

I also added an updated launcher icon for the Nexus 5. It has an xxhdpi screen, which I already had icons for. But the new Google Experience Launcher on the Nexus 5 uses launcher icons sized xxxhdpi. I don't have access to one of those phones, but hope the new icon looks nice :)

It seems like Google is trying to improve tablet apps more actively these days by adding a "optimized for phones" tag of shame on a lot of apps. Including KouChat. Thankfully it gives me this hint to help me: "Your layout should make use of the available space on tablets."

Eh, I have no idea what Google is expecting me to do based on that! Guess I'll be experimenting a bit with fonts and sizes in the next releases. If I'm lucky I'll stumble upon the correct fix to get rid of that message.

Anyways, here's the full changelog:

* Fixed rare bug where quitting would not log off the network right away.
* Added option to enable a wake lock, to keep the device from sleeping and losing the network connection.
* Added xxxhdpi launcher icon for the Nexus 5.
* Fixed bug where the file reception dialog was unable to find the file transfer request.

Get it on Google Play, or download the apk from the downloads section.
