---
title: "Nuke git history"
---
If you add a .env or some other password to git by mistake, you'll want to remove it.

## Remove current version

Remove the file from the index (the repo), but keep it on your computer (.env in this example)
```
git rm --cached .env
```


Commit the change
```
git commit -m "Remove sensitive config from source control"
```

Push to your remote (GitHub/GitLab/etc)
```
git push origin main
```

# Clean git history

The above only removes the file going forward. If you want to remove it from the git history, you'll need to use git-filter-repo.

## Install git-filter-repo

Debian based distros 
```
sudo apt install git-filter-repo
```
Arch based distros
```
sudo pacman -S git-filter-repo
```
Fedora based distros
```
sudo dnf install git-filter-repo
```

## Cleanup

### Wipe
```
git filter-repo --path .env --invert-paths
```
### Relink
```
git remote add origin <your-repo-url>
```
### Push
```
git push origin --force --all
```

