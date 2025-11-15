---
title: Chrome remote desktop install
description: Installing chrome remote desktop on linux
---

The .deb given to you when you want to install Chrome remote desktop onto a new machine is pretty sparse on details, but I've found this great [guide](https://docs.cloud.google.com/architecture/chrome-desktop-remote-on-compute-engine) on setting it up in Google Cloud.

What it boils down to is the prerquisite packages and the general install. I'll summarise it here

Install Chrome remote desktop

```
curl https://dl.google.com/linux/linux_signing_key.pub \
    | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/chrome-remote-desktop.gpg
echo "deb [arch=amd64] https://dl.google.com/linux/chrome-remote-desktop/deb stable main" \
    | sudo tee /etc/apt/sources.list.d/chrome-remote-desktop.list
sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive \
    apt-get install --assume-yes chrome-remote-desktop
```

Install your choice of desktop environment and prereqisite packages (I'm using Cinnamon)
```
sudo DEBIAN_FRONTEND=noninteractive \
    apt install --assume-yes cinnamon-core desktop-base dbus-x11
```

Configure Chrome remote desktop to use your desktop environment. You need to exec it to make sure it keeps running

```
#!/bin/bash
unset DBUS_SESSION_BUS_ADDRESS
unset XDG_RUNTIME_DIR
exec /usr/bin/cinnamon-session
```

