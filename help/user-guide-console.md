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

There are three ways to send a file to a user:

* Right click on the user in the user list and choose Send file.
* Drag and drop a file on the user in the user list.
* Drag and drop a file in the chat area of a private chat window with the user.

In all cases, you get an open file dialog:

[![Select file to send]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_send_choose_file_popup.png "Select file to send. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_send_choose_file_popup.png)

If you used the right click option you have to navigate to, and select the file to send. If you used the drag and drop options, then the file is preselected in the dialog, and you just have to confirm with the Open button. Press the Cancel button to abort the process.

If you choose to send the file, you will get a new file transfer dialog, to monitor the progress, and to cancel the file transfer.

[![Sending file in progress]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_send_dialog.png "Sending file in progress. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_send_dialog.png)

The transfer will not start until the other user has accepted the file.

### Receive file

When someone sends a file to you, you will get a popup like this:

[![Receive file popup]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_receive_popup.png "Receive file popup. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_receive_popup.png)

You can choose to receive the file or not. If you click Yes then you will get a file save dialog where you can choose where to save the file. If you choose to receive the file, you will get a new file transfer dialog, to monitor the progress, and to cancel the file transfer.

[![Receiving file in progress]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_opensuse_nimbus.png "Receiving file in progress. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_opensuse_nimbus.png)

The transfer should start immediately. When the file has been received successfully then the button for Open folder is enabled. Click this button if you want to open a file manager at the location where the file was saved.


## System tray


### Icons

There are 4 different icons used in the system tray to indicate chat status:

Icon | Description
-----|------------
![Normal icon]({{ site.baseurl }}/images/icons/kou_normal_32x32.png) | You are not away, and there is no activity in the chat.
![Normal with activity icon]({{ site.baseurl }}/images/icons/kou_normal_activity_32x32.png) | You are not away, and there is unseen activity in the chat.
![Away icon]({{ site.baseurl }}/images/icons/kou_away_32x32.png) | You are away, and there is no activity in the chat.
![Away with activity icon]({{ site.baseurl }}/images/icons/kou_away_activity_32x32.png) | You are away, and there is unseen activity in the chat.

The icons change based on both the main chat and private chat activity.

Left clicking on the icon in the system tray shows and hides the main chat window. You can right click to get a menu. The menu allows you to quit KouChat.

These icons are also used in the taskbar when KouChat is not minimized to the system tray.


### Balloons

If you activate balloons in the Settings you will get these popup balloons in the system tray when a message is received in the main chat or a private chat.

![System tray balloons]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_systray_balloon.png)


## Smileys

These smileys can be used in the main chat and the private chat.

Code | Smiley
-----|-------
:) | ![:)]({{ site.baseurl }}/images/smileys/desktop/smile.png)
:( | ![:(]({{ site.baseurl }}/images/smileys/desktop/sad.png)
:p | ![:p]({{ site.baseurl }}/images/smileys/desktop/tongue.png)
:D | ![:D]({{ site.baseurl }}/images/smileys/desktop/teeth.png)
;) | ![;)]({{ site.baseurl }}/images/smileys/desktop/wink.png)
:O | ![:O]({{ site.baseurl }}/images/smileys/desktop/omg.png)
:@ | ![:@]({{ site.baseurl }}/images/smileys/desktop/angry.png)
:S | ![:S]({{ site.baseurl }}/images/smileys/desktop/confused.png)
;( | ![;(]({{ site.baseurl }}/images/smileys/desktop/cry.png)
:$ | ![:$]({{ site.baseurl }}/images/smileys/desktop/embarrassed.png)
8) | ![8)]({{ site.baseurl }}/images/smileys/desktop/shade.png)


## Commands

Write these commands in the main chat. Use the Tab key for auto completion of commands and nick names.

Command | Description
--------|------------
`/about` | Information about KouChat.
`/away <away message>` | Set status to away, with the specified away message.
`/back` | Set status to back from away.
`/cancel <nick> <id>` | Cancel an ongoing file transfer with a user with the specified nick name and file transfer id.
`/clear` | Clear all the text from the chat.
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
`-c` | `--console` | Starts KouChat in console mode. See the [user guide for console](../console/) for more details.
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
