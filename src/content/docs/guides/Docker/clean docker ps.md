---
title: "Clean docker ps"
---

To get a clean view of running docker containers (without ports and such), you can use the following command:

```bash
docker ps --format "table {{.Names}}\t{{.Status}}"
```
Set it as an alias

```
alias dps='docker ps --format "table {{.Names}}\t{{.Status}}"'
```