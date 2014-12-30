---
layout: default
title: User guide for Desktop
---

# User guide for Desktop

This is the user guide for the Desktop version of KouChat. The Desktop version runs on Windows, Linux and Mac OS X.


## Main Chat

The main chat is a public chat containing all the users on the network. It looks like this:

[![Main Chat]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_main_chat_opensuse_nimbus.png "Main Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_main_chat_opensuse_nimbus.png)


### Chat Area

The big text area displays information messages and chat messages. Information messages are prefixed with `***`. Chat messages are prefixed with the nick name of the user who sent the message.


### User List

The text area on the right is the user list. It contains all the currently online users.

Icons and text style used on the user says something about the status of the user:

Style | Description
-----------|------------
Bold font | This is you.
Normal font | Other users.
Gray text | User is away.
Star (*) after the nick name | User is currently writing.
Envelope icon | User has sent you a private message.

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


### Message Field

Everyone can send a message to the main chat. Type a message in the lower text field, and press the Enter/Return key to send.


### Menu Items


## Private Chat

TODO

[![Private Chat]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_private_chat_opensuse_nimbus.png "Private Chat. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_private_chat_opensuse_nimbus.png)


## Away mode

TODO


## Topic

TODO


## Settings

TODO

[![Settings]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_settings_opensuse_nimbus.png "Settings. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_settings_opensuse_nimbus.png)


## File Transfers

TODO

[![File Transfer]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_opensuse_nimbus.png "File Transfer. Click to enlarge.")]({{ site.baseurl }}/images/screenshots/desktop/kouchat_v1.2.0_file_transfer_opensuse_nimbus.png)


## System Tray

TODO


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
`/quit` | Quit from the chat.
`/receive <nick> <id>` | Accept a file transfer request from a user with the specified nick name and file transfer id.
`/reject <nick> <id>` | Reject a file transfer request from a user with the specified nick name and file transfer id.
`/send <nick> <file>` | Send a file with the specified file path to a user with the specified nick name.
`/topic <optional new topic>` | Prints the current topic if no arguments, or changes the topic to the specified new topic.
`/transfers` | Show a list of all file transfers and their status, including the file transfer ids.
`/users` | Show the current users.
`/whois <nick>` | Show information about a user with the specified nick name.
`//<text>` | Send the specified text as a normal message, with a single slash in front. Useful when you need to send a command to the chat, instead of having the command executed.

Note: `<id>` is the number after the `#` in the info messages shown in the main chat when sending or receiving files.


## Startup Arguments

TODO
