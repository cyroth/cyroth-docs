---
title: "System level rclone mounts"
description: "System level rclone mounts"
---

Example for mounting cloud drives at boot using rclone

### Google drive


/etc/systemd/system/cloud-google.mount

```
[Unit]
Description=Mount for /cloud/google
[Mount]
Type=rclone
What=google:
Where=/cloud/google
Options=rw,_netdev,allow_other,args2env,vfs-cache-mode=full,vfs-cache-max-size=10G,vfs-cache-max-age=24h,dir-cache-time=1000h,attr-timeout=1000h,vfs-read-ahead=256M,poll-interval=15s,config=/home/cyroth/.config/rclone/rclone.conf,cache-dir=/var/rclone
[Install]
WantedBy=multi-user.target
```

### Onedrive

/etc/systemd/system/cloud-onedrive.mount

```
[Unit]
Description=Mount for /cloud/onedrive
[Mount]
Type=rclone
What=onedrive:
Where=/cloud/onedrive
Options=rw,_netdev,allow_other,args2env,vfs-cache-mode=full,vfs-cache-max-size=10G,vfs-cache-max-age=24h,dir-cache-time=1000h,attr-timeout=1000h,vfs-read-ahead=256M,poll-interval=15s,config=/home/cyroth/.config/rclone/rclone.conf,cache-dir=/var/rclone
[Install]
WantedBy=multi-user.target
```

Mount with

`systemctl daemon-reload`

`systemctl enable cloud-onedrive.mount --now`

May need to symlink rclone ro /sbin/mount.rclone

`ln -s /usr/bin/rclone /sbin/mount.rclone`

### To make automount

Create `/etc/systemd/system/cloud-google.automount`

```
[Unit]
Description=Automount for /cloud/google

[Automount]
Where=/cloud/google

[Install]
WantedBy=multi-user.target
```

```
sudo systemctl stop cloud-google.mount
sudo systemctl disable cloud-google.mount
sudo systemctl daemon-reload
sudo systemctl enable --now cloud-google.automount
```