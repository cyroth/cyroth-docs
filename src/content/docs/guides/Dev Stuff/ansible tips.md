---
title: "Ansible Tips"
description: "Ansible tips and tricks"
---

Just a collection of things I've found useful for ansible/semaphore-ui

## Nested inventory
With semaphore-ui .ini files don't work as a nested inventory. Have to use .yml

Semaphore using nested inventory create it as `/inventory/xxx`

## Global configuration
Semaphore will pull in the `ansible.cfg` file and apply setting there

Some nice defaults are:

```
[defaults]
# This makes the console output look like a clean document
# rather than a giant JSON blob.
result_format=yaml
bin_ansible_callbacks = True
host_key_checking = False
interpreter_python = auto_silent
```
## Seamphore database stuff
due to anticipated retirement of boltdb, I migrated to postgresql running in a docker container
### boltdb to postgres migration

```bash
semaphore migrate --from-boltdb /var/lib/semaphore/database.boltdb --merge-existing-users
```
### Backup postgresql command

```bash
docker exec POSTGRES_CONTAINER pg_dumpall -U POSTGRES_USER > /tmp/postgres_full_backup.sql
```
