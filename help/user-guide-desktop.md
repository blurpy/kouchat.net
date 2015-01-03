---
layout: default
permalink: /help/user-guide/desktop/
title: User guide for Desktop
---

# User guide for Desktop

This is the user guide for the Desktop version of KouChat. The Desktop version runs on Windows, Linux and Mac OS X.


## Main chat

The main chat is a public chat containing all the users on the network. It looks like this:

[![Main Chat]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_main_chat_opensuse_nimbus.png "Main Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_main_chat_opensuse_nimbus.png)


### Chat area

The big text area displays information messages and chat messages. Information messages are prefixed with `***`. Chat messages are prefixed with the nick name of the user who sent the message.

Any links written are underlined and clickable.


### User list

The text area on the right is the user list. It contains all the currently online users.

Icons and text style used on the user says something about the status of the user:

Style | Description
-----------|------------
**Bold font** | This is you.
Normal font | Other users.
<span style="color: #848484;">Gray text</span> | User is away.
Star (*) after the nick name | User is currently writing.
![Envelope icon]({{ site.baseurl }}/images/icons/envelope.png) | User has sent you a private message.

If you right click on a user in the user list, you will get the following menu items:

Menu item | Description
----------|------------
Information | Click to show some information about the user. This shows the same information as the `/whois` command.
Send file | Click to open a file chooser for selecting a file to send to the user. Or drag and drop a file from anywhere onto the user to send it. <br>This is disabled if you or the other user is away.
Private chat | Click to open the private chat session with the user. Or double click on the user. <br>This is disabled if you or the user doesn't support private chat.

Note: only Information is available when right clicking on yourself.


### Buttons

Button | Description
-------|------------
Clear | Clears all the text in the main chat.
Away | If currently not away: opens a popup asking for an away message. <br>If currently away: opens a popup asking if you want to come back from away.
Topic | Opens a popup displaying the current topic, with the option of changing it. If the topic is set as empty, it will be removed.
Minimize | Minimizes KouChat to the system tray, if the system has a system tray. Otherwise, it's minimized to the taskbar.


### Input field

Everyone can send a message to the main chat, as long as they are not away. Type a message in the lower input field, and press the Enter/Return key to send.

This input field receives key strokes even when it's missing focus. As long as the main chat window has focus you can start typing and the text will be appended to the input field.

Use the up and down arrow keys to navigate through the history of messages and commands you have written. Use the Tab key to auto complete nick names and commands.


### Menu bar

These are the menu items in the menu bar at the top. All the menu items have keyboard shortcuts.


### File menu

Menu item | Description
----------|------------
Minimize | Minimizes KouChat to the system tray, if the system has a system tray. Otherwise, it's minimized to the taskbar.
Quit | Quit from the chat, and shutdown the application.


### Tools menu

Menu item | Description
----------|------------
Clear chat | Clears all the text in the main chat.
Set away | If currently not away: opens a popup asking for an away message. <br>If currently away: opens a popup asking if you want to come back from away.
Change topic | Opens a popup displaying the current topic, with the option of changing it. If the topic is set as empty, it will be removed.
Settings | Opens the Settings.


### Help menu

Menu item | Description
----------|------------
FAQ | Opens frequently asked questions about KouChat in a new window.
Tips & tricks | Opens tips and tricks for KouChat in a new window.
License | Opens the license terms for using and distributing KouChat in a new window.
Commands | Prints all available commands in the main chat, with a short description. Same as the `/help` command.
About | Opens a popup with contact details and other quick information about KouChat.


## Keyboard shortcuts

This is a list of the single key shortcuts KouChat supports.

Key | Description
----|------------
Escape | Minimizes KouChat.
Tab | Auto complete nick names and commands. Start writing the first character(s) and press tab to complete the rest. Press tab several times to cycle through if several matches.
Up/Down | Press the up and down arrow keys to cycle through previous messages or commands you have written in the chat.
F1 | Opens the FAQ.
F2 | Opens the away popup.
F3 | Opens the topic popup.
F4 | Opens the Settings

The function key shortcuts only work in the main chat, while the others also work in the private chat.



## Private chat

TODO

[![Private Chat]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_private_chat_opensuse_nimbus.png "Private Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_private_chat_opensuse_nimbus.png)

If a user has sent an unread message, and logs off, the window will open minimized to the taskbar, so you can see the message.


## Away mode

TODO

[![Going away]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_away_popup.png "Going away. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_away_popup.png)

[![Coming back from away]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_back_popup.png "Coming back from away. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_back_popup.png)


## Topic

TODO

[![Setting topic]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_topic_popup.png "Setting topic. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_topic_popup.png)


## Settings

TODO

[![Settings]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_settings_opensuse_nimbus.png "Settings. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_settings_opensuse_nimbus.png)

Hover mouse for tooltips.


## File transfers

TODO

[![File Transfer]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_opensuse_nimbus.png "File Transfer. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_opensuse_nimbus.png)


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

Examples:

  * Windows: `--log-location="C:\Users\Username\KouChat logs\\"`
  * Linux: `--log-location="/home/username/KouChat logs/"`
