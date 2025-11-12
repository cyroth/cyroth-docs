---
title: "apt-key depreciated"
---


apt-key has been deprecated with Debian 13. Here is an example of how to add a repo with the new method using rundeck as an example.



#### Old way (deprecated):
`curl -L https://packages.rundeck.com/pagerduty/rundeck/gpgkey | sudo apt-key add -`

#### new way: 

Download the key and add it

`curl -L https://packages.rundeck.com/pagerduty/rundeck/gpgkey | gpg --dearmor -o /usr/share/keyrings/rundeck.gpg`

Edit the sources.list and add the key to the start

`vim /etc/apt/sources.list.d/rundeck.list`

adding `[signed-by=/usr/share/keyrings/rundeck.gpg]`

It should look like

```
deb [signed-by=/usr/share/keyrings/rundeck.gpg] https://packages.rundeck.com/pagerduty/rundeck/any/ any main
deb-src [signed-by=/usr/share/keyrings/rundeck.gpg] https://packages.rundeck.com/pagerduty/rundeck/any/ any mainrundeck.list
```

Then run apt update as normal

```
apt-get update
apt-get install rundeck
systemctl enable rundeckd
```
