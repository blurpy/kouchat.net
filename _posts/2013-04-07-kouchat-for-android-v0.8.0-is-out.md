---
layout: post
title: KouChat for Android v0.8.0 is out!
---

I've been working on notifications this time. So now you can see who is currently writing in the main chat, and you will find a notification icon in the notification area. When a new unread message arrives, it will turn green, like the system tray icon in the desktop version.

Changelog:

* Added support for showing who is currently writing, using a "*" next to the nick name in the user list.
* Increased the width of the user list to make space for the star.
* Changed the chat service to a foreground service instead of a background service, to avoid it being killed randomly, removing the chat history and losing the connection.
* Added notification support, with an icon and a status text shown in the notification area. White icon means nothing to notify. Green icon means new unread messages.

Have fun :) Get it on Google Play, or download the apk from the downloads section.
