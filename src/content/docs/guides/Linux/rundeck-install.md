---
title: Installing Pagerduty Rundeck OSS
---

The official [guide](https://docs.rundeck.com/docs/administration/install/linux-deb.html#installing-rundeck) for installing Rundeck OSS is outdated and won't work without a lot of messing around. I've modernized the install process


First get the GPG key
```
sudo curl -L https://packages.rundeck.com/pagerduty/rundeck/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/rundeck.gpg
```

Then update/setup the new source `/etc/apt/sources.list.d/rundeck.sources`

`sudo -i` first
```
cat << EOF > /etc/apt/sources.list.d/rundeck.sources
Types: deb deb-src
URIs: https://packages.rundeck.com/pagerduty/rundeck/any/
Suites: any
Components: main
Signed-By: /usr/share/keyrings/rundeck.gpg
EOF
```

Then install it

```
sudo apt update
sudo apt install rundeck
```