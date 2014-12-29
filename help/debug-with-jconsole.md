---
layout: default
title: Debug network issues with JConsole
---

# Debug network issues with JConsole

This guide explains how you can check what KouChat knows about your network in case of any issues with connecting. That information can be added to bug reports.


## JConsole

JConsole is a useful tool that comes with the Java SE Development Kit. If you only have the Java SE Runtime Environment then you need to [download](http://java.oracle.com/) the JDK first.

In Linux the binary is often added to the path, so just run `jconsole` from a terminal. In Windows you may have to locate the binary yourself:

[![jconsole.exe in Windows Explorer]({{ site.baseurl }}/images/jconsole/jconsole_location.png "jconsole.exe in Windows Explorer. Click to enlarge.")]({{ site.baseurl }}/images/jconsole/jconsole_location.png)


## Debugging

Run JConsole like described above, after you have started KouChat. You should see something like this:

[![Connecting to KouChat in JConsole]({{ site.baseurl }}/images/jconsole/jconsole_connect_kouchat.png "Connecting to KouChat in JConsole. Click to enlarge.")]({{ site.baseurl }}/images/jconsole/jconsole_connect_kouchat.png)

Choose `kouchat-0.9.9.jar` and click `Connect`. Navigate here:

[![KouChat Network Operations in JConsole]({{ site.baseurl }}/images/jconsole/jconsole_network_operations.png "KouChat Network Operations in JConsole. Click to enlarge.")]({{ site.baseurl }}/images/jconsole/jconsole_network_operations.png)

Those buttons on the right are the available operations. Now we can check what KouChat knows about your network. On my laptop the current network is cable:

[![KouChat Current Network Interface in JConsole]({{ site.baseurl }}/images/jconsole/jconsole_current_network.png "KouChat Current Network Interface in JConsole. Click to enlarge.")]({{ site.baseurl }}/images/jconsole/jconsole_current_network.png)

But KouChat recognizes both cable and wireless as usable networks:

[![KouChat Usable Network Interfaces in JConsole]({{ site.baseurl }}/images/jconsole/jconsole_usable_networks.png "KouChat Usable Network Interfaces in JConsole. Click to enlarge.")]({{ site.baseurl }}/images/jconsole/jconsole_usable_networks.png)

The list of all networks would have given me around 30 different virtual network interfaces that are of no interest to KouChat. That's in Vista. The number will very a lot depending on operating system and installed software.

The information in these boxes can be copied as plain text and saved with the bug reports.
