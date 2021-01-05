---
id: tcpdump
title: Building TCPDump for Netkit
sidebar_label: Building TCPDump
---

Netkit-JH requires a vanilla version of TCPDump (rather than the TCPDump from Debian's repositories) as Debian's TCPDump patches do not allow us to do this:
```bash
tcpdump -i eth0 -w /hostlab/eth0.pcap
```
Instead, we would have to do:
```bash
tcpdump -i eth0 -w /hostlab/eth0.pcap -Z root -C 1
```
or
```bash
tcpdump -i eth0 > /hostlab/eth0.pcap
```

To build TCPDump, firstly start a Netkit machine with a tap interface (this will require root privileges) and 512MB of RAM.

```bash
$ vstart netkit_tcpdump --eth0=tap,10.0.0.1,10.0.0.2 --mem=512
```

Once the VM has started, run the commands below to configure DNS, download build packages and compile TCPDump.

```bash
$ echo "nameserver 8.8.8.8" > /etc/resolv.conf
$ apt update && apt install git make build-essential flex bison
$ git clone https://github.com/the-tcpdump-group/tcpdump
$ git clone https://github.com/the-tcpdump-group/libpcap
$ cd libpcap
$ ./configure && make
$ cd ../tcpdump
$ ./configure && make
$ cp tcpdump /hosthome/tcpdump
$ cp tcpdump.1 /hosthome/tcpdump.1
```

Now move the `tcpdump` and `tcpdump.1` files out of your home directory into the applicable directories inside `netkit-jh-build/fs/filesystem-tweaks`.
