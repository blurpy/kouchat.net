---
layout: default
permalink: /help/user-guide/desktop/
title: User guide for Desktop
---

# User guide for Desktop

This is the user guide for the Desktop version of KouChat. The Desktop version runs on Windows, Linux and Mac OS X.


## Main chat

The main chat is a public chat containing all the users on the network. It looks like this:

[![Main Chat]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.3.0_main_chat_opensuse_nimbus.png "Main Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.3.0_main_chat_opensuse_nimbus.png)


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
<img alt="Envelope icon" src="{{ site.baseurl }}/images/icons/envelope.png" width="16"> | User has sent you a private message.

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
Minimize | Minimizes KouChat to the system tray, if enabled and the system has a system tray. Otherwise, it's minimized to the taskbar.

Hover the mouse over the buttons for tooltips.


### Input field

Everyone can send a message to the main chat, as long as they are not away. Type a message in the lower input field, and press the Enter/Return key to send.

This input field receives key strokes even when it's missing focus. As long as the main chat window has focus you can start typing and the text will be appended to the input field.

Use the up and down arrow keys to navigate through the history of messages and commands you have written. Use the Tab key to auto complete nick names and commands.


### Menu bar

These are the menu items in the menu bar at the top. All the menu items have keyboard shortcuts.


#### File menu

Menu item | Description
----------|------------
Minimize | Minimizes KouChat to the system tray, if enabled and the system has a system tray. Otherwise, it's minimized to the taskbar.
Quit | Quit from the chat, and shutdown the application.


#### Tools menu

Menu item | Description
----------|------------
Clear chat | Clears all the text in the main chat.
Set away | If currently not away: opens a popup asking for an away message. <br>If currently away: opens a popup asking if you want to come back from away.
Change topic | Opens a popup displaying the current topic, with the option of changing it. If the topic is set as empty, it will be removed.
Settings | Opens the Settings.


#### Help menu

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

You can start a private chat with a user if you do not want everyone to see the conversation.

There are 2 ways to start a private chat:

* Right click on the user in the user list and choose Private chat.
* Double click on the user in the user list.

You will get a dialog like this:

[![Private Chat]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_private_chat_opensuse_nimbus.png "Private Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_private_chat_opensuse_nimbus.png)

The chat area and input field works just like the main chat, except that the private chat does not support commands.

Note: if a user has sent an unread message, and logs off, a private chat window will open minimized to the taskbar, so you can see the message.


### Menu bar

These are the menu items in the menu bar at the top of the private chat window. All the menu items have keyboard shortcuts.


#### File menu

Menu item | Description
----------|------------
Close | Closes the private chat window.


#### Tools menu

Menu item | Description
----------|------------
Clear chat | Clears all the text in the private chat.


## Away mode

You can use away mode to say that you do not wish to be disturbed. When you go away:

* Sound is disabled.
* Balloons in the system tray are disabled.
* You can not send or receive files.
* You can not change the topic.
* You can not change Settings.
* You can not send any messages to the main chat.
* You can not send or receive private chat messages.
* You can not execute any commands.
* Your nick name in the user list turns gray.
* Your away status and away message is listed in the user information popup.

There are several ways to go away described in this guide. When you choose to go away, you will get a popup asking for an away message:

[![Going away]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_away_popup.png "Going away. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_away_popup.png)

The away message can't be empty. After you click OK you are in away mode.

To return from away mode you use any of the methods to go away, but instead of a popup asking for an away message, you get a popup asking if you want to come back from away:

[![Coming back from away]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_back_popup.png "Coming back from away. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_back_popup.png)

After you click Yes you are back to normal mode.


## Topic

You can set a topic in the main chat that all users, including users joining later, will see. The topic is shown in the titlebar of the main chat window.

There are several ways to set the topic described in this guide. When you choose to set a topic, you will get a popup like this:

[![Setting the topic]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_topic_popup.png "Setting the topic. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_topic_popup.png)

The popup will initially show the current topic. Change it and click OK to set the new topic of the chat. Blank the field to remove the topic of the chat.


## Settings

Use the Settings to tweak certain aspects of KouChat.

[![Settings]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.3.0_settings_opensuse_nimbus.png "Settings. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.3.0_settings_opensuse_nimbus.png)

Hover the mouse over the options for tooltips. Here is a more detailed description:

Setting | Default value | Description
--------|---------------|------------
Nick name | User name from operating system. | The unique name that identifies you in the chat. A nick name can have between 1 and 10 characters. Legal characters are: `a-z`, `0-9`, `-` and `_`.
Browser | \<empty\> | When you click on a link in the chat it will open in the browser defined here. If this field is empty the default browser on your system will be used, if possible. Click the Choose button to select the location of the browser executable on the file system, or just enter the name of the browser executable directly if it's on the path. Click the Test button to see if the browser is configured correctly.
Own text color | RGB: <span style="color: #0C0C42;">#0C0C42</span> | The color used when you are sending messages. Use the Change button to select a different color.
Info text color | RGB: <span style="color: #004700;">#004700</span> | The color used for information messages from the application. Use the Change button to select a different color.
Look and feel | System dependent | Allows you to select the look and feel (theme) to use for the user interface. Note that KouChat needs to be restarted for the changes to take effect.
Enable sound | On | A short sound notification is played when a new message is received if KouChat is out of focus, and when asked to receive a file.
Enable smileys | On | Replaces text smileys in the chat with smiley images. See own topic further down for a list.
Enable logging | Off | Stores the conversations in the main chat and private chats to log files. Only text written after the option was enabled will be stored. This may be permanently enabled using a startup argument.
Enable system tray | On | Shows a system tray icon for hiding KouChat and showing chat activity.
Enable balloons | Off | Shows balloon notifications in the system tray when new messages are received while KouChat is hidden. See own topic further down.
Network interface | Auto | Allows you to select the network interface KouChat should use for sending and receiving messages. Select Auto to let KouChat choose. Hover the mouse over the different options in the dropdown to get tooltips with more details about a network interface, if available.


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
:) | <img alt=":)" src="{{ site.baseurl }}/images/smileys/desktop/smile.png" width="22">
:( | <img alt=":(" src="{{ site.baseurl }}/images/smileys/desktop/sad.png" width="22">
:p | <img alt=":p" src="{{ site.baseurl }}/images/smileys/desktop/tongue.png" width="22">
:D | <img alt=":D" src="{{ site.baseurl }}/images/smileys/desktop/teeth.png" width="22">
;) | <img alt=";)" src="{{ site.baseurl }}/images/smileys/desktop/wink.png" width="22">
:O | <img alt=":O" src="{{ site.baseurl }}/images/smileys/desktop/omg.png" width="22">
:@ | <img alt=":@" src="{{ site.baseurl }}/images/smileys/desktop/angry.png" width="22">
:S | <img alt=":S" src="{{ site.baseurl }}/images/smileys/desktop/confused.png" width="22">
;( | <img alt=";(" src="{{ site.baseurl }}/images/smileys/desktop/cry.png" width="22">
:$ | <img alt=":$" src="{{ site.baseurl }}/images/smileys/desktop/embarrassed.png" width="22">
8) | <img alt="8)" src="{{ site.baseurl }}/images/smileys/desktop/shade.png" width="22">


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
`-c` | `--console` | Starts KouChat in console mode. See the [user guide for console]({{site.baseurl}}/{{site.user_guide_console}}) for more details.
 | `--minimized` | Starts KouChat minimized to the system tray, or the taskbar if the system tray is disabled or missing. Useful when starting KouChat automatically on boot.
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
