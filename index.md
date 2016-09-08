---
layout: default
title: Home
---

# About

KouChat is an open source, serverless, LAN chat application for the desktop and Android.

With KouChat you can chat and send files to other KouChat users on the same local area network. It's intended to be used on your network at home, the coffee shop, work place or similar, and does not require any setup, Internet connection or servers to function.

It's written in Java, and is [free software](https://www.gnu.org/licenses/lgpl-3.0.html).

# Latest news

<ul>
  {% for post in site.posts limit:5 %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><span class="postDate"> - {{ post.date | date: '%B %d, %Y' }}</span>
  </li>
  {% endfor %}
</ul>

# Features

* Group chat with all the connected users.
* Private chat with any user.
* Choose your own nick name.
* Set the topic of the group chat.
* System tray / notification area support.
* See who is currently writing.
* Send and receive files.
* Use away mode when you don't want to be disturbed.
* Choose the color to use for your own messages and info messages.
* Chat logging.
* Console mode.
* Smileys.
* Send messages in any language supported by Unicode.
* No configuration needed.

# How to install

## Windows/Linux/Mac OS X

* Make sure you have [Java 6](http://www.java.com/) or newer.
* Download the KouChat jar from the downloads section.
* Run the jar. No installation necessary.

[![KouChat for desktop]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.3.0_main_chat_opensuse_nimbus.png "KouChat for desktop. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.3.0_main_chat_opensuse_nimbus.png)

## Android

* Make sure you have Android v4.1 or newer.
* Install KouChat from Google Play or F-Droid.
* Alternatively: download the KouChat for Android apk from the downloads section, and install using a file manager or similar.

[![Google Play](http://www.android.com/images/brand/get_it_on_play_logo_large.png "Get KouChat on Google Play")](https://play.google.com/store/apps/details?id=net.usikkert.kouchat.android)
[<img src="{{ site.baseurl }}/images/get-it-on-f-droid.png" alt="F-Droid" height="60">](https://f-droid.org/app/net.usikkert.kouchat.android)
      
[![KouChat for Android]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_main_chat.png "KouChat for Android. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/android/kouchat_android_v1.1.0_screenshot_tablet_10_main_chat.png)
