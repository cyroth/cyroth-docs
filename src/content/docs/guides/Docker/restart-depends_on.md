---
title: Restarting docker containers with depends_on gluetun
description: Restarting docker containers that depend on a VPN
draft: true
---
Set `depends_on` restart

**Why they fail after an Image Update (or manual Gluetun restart):**
* The "Rug Pull" Effect: When gluetun is updated or recreated (e.g., via your container-update.sh script or Watchtower), its container ID changes, and its network namespace is destroyed and recreated.
* Broken Reference: Containers with network_mode: service:gluetun share the network stack of the specific Gluetun container. When Gluetun is recreated, the dependent containers are left running but point to a now-nonexistent container network namespace. Their network stack is completely broken, and running a simple docker restart on them will fail because Docker cannot bind them to the deleted Gluetun container ID. They must be recreated (via docker compose up -d) to get the updated namespace reference.

**Why they fail after a System Reboot:**
* Parallel Startup: On system boot, the Docker Engine daemon restarts all containers marked with restart: unless-stopped in parallel.
* Ignored Order: The Docker daemon is completely unaware of Docker Compose's depends_on rules or healthcheck dependencies. If a dependent container starts up before gluetun has fully established its VPN connection or before the gluetun network namespace is available, the dependent container will fail to start or start up with a dead network interface.

Fix for Image Updates & Manual Restarts: restart: true in depends_on. Additionally, remove any restart: unless-stopped/always from the services (since Systemd will now control their boot sequence)


```text
depends_on:
  gluetun:
    condition: service_healthy
    restart: true
```



```text
$EDITOR /etc/systemd/system/docker-compose-STACK.service
```

```text
[Unit]
Description=Docker Compose Dependcy Stack
Requires=docker.service
After=docker.service
[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/path/to/compose_files
ExecStart=/usr/bin/docker compose -f compose-file.yml up -d
ExecStop=/usr/bin/docker compose -f compose-file.yml down
[Install]
WantedBy=multi-user.target
```
