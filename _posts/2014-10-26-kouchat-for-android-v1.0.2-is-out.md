---
layout: post
title: KouChat for Android v1.0.2 is out!
---

This is a small improvement release. 

The only visible change is the support for sending files from file managers and other apps that share files with the `file:// protocol`. All apps I have used from Google, and many others, share with the `content:// protocol`, which require a database lookup to find the actual file reference. Some other apps don't, and share the actual file reference instead. With previous versions of KouChat you got a message like this:

[![KouChat v1.0.1]({{ site.baseurl }}/images/screenshots/kouchat_android_v1.0.1-file-protocol.png "KouChat v1.0.1 warning. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/kouchat_android_v1.0.1-file-protocol.png)

These file references should now work. 

I've also done a lot of cleanup, and begun work on translation support. I don't think anything has broken from the changes, but let me know if you find any issues :) 

The changelog: 

* Lots of cleanups regarding singletons and statics. 
* Split code for saving and loading desktop settings out of Android. 
* Added support for sending files from file managers using the `file:// protocol`. 
* Started work on translation support. 

Get it on Google Play, or download the apk from the downloads section.
