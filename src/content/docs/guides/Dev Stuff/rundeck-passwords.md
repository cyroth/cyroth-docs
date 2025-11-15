---
title: Rundeck scripts with a password
description: Using options in Rundeck to access passwords in an inline script
---


If you want to run Rundeck scripts that require a password, you can store the password in an option and use it during the script execution. Here's an example of how to do this:

First, add an option to the job, as seen here ![rundeck options](https://images.cyroth.com/Screenshot%202025-11-15%20185900.png)

Set it up something like this ![options setup](https://images.cyroth.com/Screenshot%202025-11-15%20185948.png)

Then, in your script, you can reference the option using `@option.<option-name@`. For example, to create a password-protected zip file using 7z, you can use the following command:


`/usr/bin/7z a -tzip -p@option.zip-password@ {zip_destination} {file_to_zip}`


Sure beats using a password file

`/usr/bin/7z a -tzip -p$(<${HOME}/.secrets/zip_password.txt) {zip_destination} {file_to_zip}`
