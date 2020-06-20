---
title: Commands Cheat Sheet
lang: en-US
description: A running list of the commands I use frequently, so I can quickly acess them 😀
date: "2020-06-14"
---

# Commands Cheat Sheet
A running list of the commands I use frequently, so I can quickly acess them 😀

## Mac

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