---
title: "What happens to Local Notifications when the user turns them off?"
date: "April 24, 2018"
excerpt: Unfortunately, many users don’t distinguish between local notifications and push notifications and will deny permissions for both.\nRecently, I was working  on an app where users could sign up to get alerts for their favorite events. Even if the user did not allow me to send local notifications...
---

**TLDR: If you set a Local Notification to fire when a user has Local Notification permissions turned off, it will still fire at the expected time if the user turns permissions on later.**

Unfortunately, many users don’t distinguish between local notifications and push notifications and will deny permissions for both.

Recently, I was working on an app where users could sign up to get alerts for their favorite events. Even if the user did not allow me to send local notifications, I would still set them up to repeat at the desired time (I won’t be going over how to set local notifications, but here are [Apple’s instructions on how to set them up](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/SchedulingandHandlingLocalNotifications.html)).

So what happened to those local notifications that were being sent to users? **More importantly, if I convinced the users to turn permissions on, would the notifications be sent as scheduled?**

Let’s set up a scenario:

> _While the user has denied notification authorization I set a local notification to repeat at 2:00PM every day. At 1:30PM the user grants me authorization to send local notifications. What happens at 2PM? Does the notification send as scheduled or does it never get set because I didn’t have permission when it was initialized?_

In the above case, the notification would be sent as normal, even though I set the notification while the user had notifications turned off.

From this, it’s probably safe to conclude that Apple is simply suppressing the notifications that you send if the user’s permissions are still offline.

Hope this saves someone some time!
