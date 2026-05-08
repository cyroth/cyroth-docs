---
title: "User level rclone mounts"
description: "Mount cloud drives using rclone as a user service"
---

## Summary

Use a User-level systemd service instead of a System-level mount.

Advantages
- No system pauses
- No boot hangs (for non automount)
- No root permission needed
- Automatic network drop handling

## Howto

### Global System Configuration

edit /etc/fuse.conf
```bash
sudo $EDITOR /etc/fuse.conf
```
and uncomment `user_allow_other`

### Service configuration

Create a systemd user directory if it does not already exist
```bash
mkdir -p ~/.config/systemd/user/
```

Create a systemd user service.

example `$EDITOR ~/.config/systemd/user/rclone-google.service`

`CLOUD.SERVICE` = name in rclone
`MOUNTPOINT`  the mountpoint


```
[Unit]
Description=Rclone CLOUD-SERVICE Drive Mount (User Service)
After=network-online.target

[Service]
Type=simple
# Ensure the paths below match your actual binary location (usually /usr/bin/rclone)
ExecStart=/usr/bin/rclone mount CLOUD.SERVICE: /MOUNTPOINT \
    --config=%h/.config/rclone/rclone.conf \
    --vfs-cache-mode full \
    --vfs-cache-max-size 10G \
    --vfs-cache-max-age 24h \
    --dir-cache-time 1000h \
    --attr-timeout 1000h \
    --vfs-read-ahead 256M \
    --poll-interval 15s \
    --cache-dir %h/.cache/rclone \
    --allow-other

# Cleanly unmount on stop
ExecStop=/usr/bin/fusermount -u /MOUNTPOINT
Restart=on-failure
RestartSec=10

[Install]
WantedBy=default.target
```

### Start/enable the service

```bash
systemctl --user daemon-reload
systemctl --user enable --now rclone-google.service
```
