---
title: Commands Cheat Sheet
lang: en-US
description: A running list of the commands I use frequently, so I can quickly acess them 😀.  Raspberry Pi SD Card Backups, Chrome for Burp and NMAP
date: "2020-06-14"
---

# Commands Cheat Sheet
A running list of the commands I use frequently, so I can quickly acess them 😀

## Mac
### Backup Raspberry Pi SD Card
```bash
diskutil list # Find disk you want to copy
sudo dd if=/dev/rdisk2 bs=1m | gzip > ./tmp/pi_backup.gz # Change the disk number to be the disk to copy
```

### Nmap

```bash
nmap -v -o -p 1-65535 #host
```

### Launch Chrome for Burp
Prereq: All Chrome instances need to be fully closed(`cmd+q`) before running this, otherwise the settings won't take.
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --proxy-server=http://localhost:8080 #--ignore-certificate-errors
```
*Note: Ignore certificate errors can be used if you can't install the Burp CA, but it is NOT recommended.*
