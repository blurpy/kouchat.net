---
layout: post
title: KouChat for Android v0.9.0 is out!
---

Another release is out! This time I've mostly been working on file transfer support. It's not finished yet, but you can now send files. You won't see the progress of the file transfer (until it's completed), and you can not cancel. The receiver can, though. Since receiving files is not implemented yet, you can only send files to users of the desktop client.

And how do you send a file? You use the "share" feature in different Android applications, like the Gallery:

[![Send file using the gallery]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v0.9.0_screenshot_send_file_gallery.png "Send file using the gallery. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v0.9.0_screenshot_send_file_gallery.png)

I've also added support for devices that require extra permissions to use multicast networking, like the HTC One phone. I don't know how many devices that have that requirement, but if you could not get KouChat to work on your Android device with previous versions, then try this one :)

Changelog:

* Improved error handling in the private chat.
* Added basic support for sending files to other users with the "share/send to" feature in Android apps like the Gallery or different file managers.
* Added wifi as a required feature in the manifest.
* Added support for HTC One (and probably others), which require extra permissions and a MulticastLock to use multicast.

Get it on Google Play, or download the apk from the downloads section.
