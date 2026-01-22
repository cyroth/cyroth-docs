---
title: "Mounting systemd mount drives with rclone"
---

Example for mounting cloud drives at boot using rclone

### Google drive


/etc/systemd/system/cloud-google.mount

```
[Unit]
Description=Mount for /cloud/google
[Mount]
Type=rclone
What=google-drive:
Where=/cloud/google
Options=rw,netdev,allow_other,args2env,vfs-cache-mode=writes,config=/home/cyroth/.config/rclone/rclone.conf,cache-dir=/var/rclone
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
Options=rw,_netdev,allow_other,args2env,vfs-cache-mode=writes,config=/home/cyroth/.config/rclone/rclone.conf,cache-dir=/var/rclone
[Install]
WantedBy=multi-user.target
```

Mount with

`systemctl daemon-reload`

`systemctl enable cloud-onedrive.mount --now`

May need to symlink rclone ro /sbin/mount.rclone

`ln -s /usr/bin/rclone /sbin/mount.rclone`