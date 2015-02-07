---
layout: default
permalink: /help/user-guide/console/
title: User guide for Console
---

# User guide for Console

This is the user guide for the Console version of KouChat. It runs on Windows, Linux and Mac OS X.


## Main chat

The main chat is a public chat containing all the users on the network. It looks like this:

[![Console chat]({{ site.baseurl }}/images/screenshots/console/kouchat_v1.2.0-main_console.png "Console chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/console/kouchat_v1.2.0-main_console.png)


### Chat area

The whole screen displays information messages and chat messages. Information messages are prefixed with `***`. Chat messages are prefixed with the nick name of the user who sent the message.


### User list

There is no user list visible at all times. Use the command `/users` to see a list.


### Input field

Everyone can send a message to the main chat, as long as they are not away. Type a message and press the Enter/Return key to send.


## Private chat

You can start a private chat with a user if you do not want everyone to see the conversation.

Use the command `/msg` to send a private chat message. Received private chat messages are shown in the main chat. The messages are prefixed with `(privmsg)`.


## Away mode

You can use away mode to say that you do not wish to be disturbed. When you go away:

* You can not send or receive files.
* You can not change the topic.
* You can not change your nick name.
* You can not send any messages to the main chat.
* You can not send or receive private chat messages.
* You can not execute any commands.

Use the command `/away` to go away. The away message can't be empty.

Use the command `/back` to return from away mode.


## Topic

You can set a topic in the main chat that all users, including users joining later, will see. The topic is shown when you log on.

Use the command `/topic` to set or change the topic.


## Settings

Use the Settings to tweak certain aspects of KouChat.

Most settings have to be changed manually in `kouchat.ini`, and require a restart of KouChat before they take effect. See Storage for the location of this file. Here is a description of relevant settings for the console:

Setting | Key | Default value | Description
--------|-----|---------------|------------
Nick name | nick | User name from operating system. | The unique name that identifies you in the chat. A nick name can have between 1 and 10 characters. Legal characters are: `a-z`, `0-9`, `-` and `_`. Use the command `/nick` to change.
Own text color | owncolor | <span style="color: #0C0C42;">-15987646</span> | The color used when you are sending messages. You can use the [hex to integer]({{ site.baseurl }}/tools/hex-to-integer/) page to find the correct value to use for a given color. Note that you will not see the color yourself.
Enable logging | logging | false | Stores the conversations in the main chat and private chats to log files. This may be permanently enabled using a startup argument.
Network interface | networkInterface | null | Allows you to select the network interface KouChat should use for sending and receiving messages. Use `null` to let KouChat choose, or use the short network interface name from `ifconfig` or `ipconfig /all`, like `eth0` or `wlan0`.


### Storage

KouChat uses a folder called `.kouchat` for storage, located in your home folder. Settings are stored in `kouchat.ini`, while logs are stored in its own `logs` folder, unless the log folder is overridden by a startup argument.

Example locations:

Operating System | Location
-----------------|---------
Windows XP | `C:\Documents and Settings\Username\.kouchat\`
Windows 7 | `C:\Users\Username\.kouchat\`
Linux | `/home/username/.kouchat/`


## File transfers


### Send file

Use the command `/send` to send a file to a user:

{% highlight bash %}
/send christian /home/user/Brave_Trailer_HD.mp4
[12:15:49] *** Trying to send the file Brave_Trailer_HD.mp4 (#1) [12.47MB] to Christian
[12:15:59] *** Christian accepted sending of Brave_Trailer_HD.mp4
[12:16:10] *** Brave_Trailer_HD.mp4 successfully sent to Christian
{% endhighlight %}

The transfer will not start until the other user has accepted the file. Use the command `/cancel` during the file transfer to abort, and `/transfers` to see the progress.


### Receive file

When someone sends a file to you, you need to use the command `/receive` to start receiving the file, or `/reject` if you don't want to receive the file:

{% highlight bash %}
[13:01:33] *** Christian is trying to send the file Brave_Trailer_HD.mp4 (#2) [12.47MB]
[13:01:33] *** /receive or /reject the file
/receive Christian 2
[13:03:28] *** Receiving Brave_Trailer_HD.mp4 from Christian
[13:03:29] *** Successfully received Brave_Trailer_HD.mp4 from Christian, and saved as Brave_Trailer_HD.mp4
{% endhighlight %}

The transfer should start immediately after deciding to receive, and it will be stored in your user home folder. If a file with the same name exists, the received file will be renamed automatically to avoid overwriting the existing file. Use the command `/cancel` during the file transfer to abort, and `/transfers` to see the progress.

Note the usage of the parameter "2" in the `/receive` command, which corresponds with the file transfer id (#2) seen in the first information message.


## Commands

Write these commands in the main chat. Use the Tab key for auto completion of commands and nick names.

Command | Description
--------|------------
`/about` | Information about KouChat.
`/away <away message>` | Set status to away, with the specified away message.
`/back` | Set status to back from away.
`/cancel <nick> <id>` | Cancel an ongoing file transfer with a user with the specified nick name and file transfer id.
`/clear` | Clear all the text from the chat. This does not work in console mode.
`/help` | Show help message for all commands.
`/msg <nick> <msg>` | Send a private message to a user with the specified nick name.
`/nick <new nick>` | Changes your nick name to the specified new nick name.
`/quit` | Quit from the chat, and shutdown the application.
`/receive <nick> <id>` | Accept a file transfer request from a user with the specified nick name and file transfer id.
`/reject <nick> <id>` | Reject a file transfer request from a user with the specified nick name and file transfer id.
`/send <nick> <file>` | Send a file with the specified file path to a user with the specified nick name.
`/topic <optional new topic>` | Prints the current topic if no arguments, or changes the topic to the specified new topic.
`/transfers` | Show a list of all file transfers and their status, including the file transfer ids.
`/users` | Show the current users.
`/whois <nick>` | Show information about a user with the specified nick name.
`//<text>` | Send the specified text as a normal message, with a single slash in front. Useful when you need to send a command to the chat, instead of having the command executed.

Note: `<id>` is the number after the `#` in the info messages shown in the main chat when sending or receiving files.


## Startup arguments

These are arguments sent to KouChat on startup like this:

`java -jar kouchat-x.x.x.jar <argument>`

Replace `<argument>` with either the short or the full argument from the table below. Use from the command line or in shortcuts.

Short | Full | Description
------|------|------------
`-c` | `--console` | Starts KouChat in the console mode this guide is for.
 | `--minimized` | Starts KouChat minimized to the system tray, or the taskbar if the system tray is missing. Useful when starting KouChat automatically on boot. *New in 1.3.0*
`-d` | `--debug` | Starts KouChat with verbose debug output enabled. The output is visible in the console.
`-h` | `--help` | Lists all commands with a short description of them.
`-v` | `--version` | Shows version information.
 | `--no-private-chat` | Disables the support for private chat in this client.
 | `--always-log` | Activates logging of both main chat and private chats, with no option to turn it off in the Settings.
 | `--log-location=<value>` | Location to store chat log files, to override the default location. Replace `<value>` with the chosen path.


### Log location

Remember to use quotes if the path contains spaces, and use double backslash at the end of Windows paths.

Example arguments:

Operating System | Argument
-----------------|---------
Windows | `--log-location="C:\logs\KouChat logs\\"`
Linux | `--log-location="/logs/KouChat logs/"`
