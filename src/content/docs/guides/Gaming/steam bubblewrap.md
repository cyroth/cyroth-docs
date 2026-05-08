---
title: "Steam bubblewrap error"
description: "Steam now requires user namespaces to be enabled bubblewrap fix"
tableOfContents: false
---

If you see this error when starting Steam after an update:

> Steam now requires user namespaces to be enabled.
> 
> This requirement is the same as for Flatpak, which has more detailed
> information available:
> https://github.com/flatpak/flatpak/wiki/User-namespace-requirements

It can be fixed with

```
sudo chmod u-s /usr/bin/bwrap
```