---
id: installation
title: Netkit Install Guide
sidebar_label: Installation
slug: /
---

## Recommendations

Netkit-JH is designed to run on 64-bit Linux systems, but is mainly tested and used on Ubuntu 20.04 hosts.
Some people have managed to run netkit-jh labs on other distros such as Arch Linux, but this is much less stable.

:::tip
If would like to add / improve support for your distro have a look at the development guides!
:::

## Installing netkit

Download the installation script _install-netkit-jh-VER.sh_ (where VER is the release version) from the [github release page](https://github.com/netkit-jh/netkit-jh-build/releases/latest).

:::note
This script does not need to be run as root, but will require root privileges partway through.

It is recommended to look at the contents of the script before execution so you understand
what you are running on your system and which commands you are giving root privileges to.
:::

To use the script, first make it executable:
```
> chmod +x install-netkit-VER-jh.sh
```

Then run:
```
> ./install-netkit-VER-jh.sh
```

After this has finished, netkit should be installed.

:::caution
If you are using a shell other than bash, you will need to add a few lines to your shell config (e.g. for zsh add it to ~/.zshrc)

Copy the 3 lines under `# additions for netkit` from your `~/.bashrc` - they should look similar to the following
```
# additions for netkit
export NETKIT_HOME="$HOME/netkit-jh"
export MANPATH="$MANPATH:$NETKIT_HOME/man"
export PATH="$PATH:$NETKIT_HOME/bin"
```
:::

## Changing the Terminal

The default terminal emulator configured for netkit is xterm. This is the most stable and tested terminal with
netkit, but it can be painful to use due to the tiny default font size.

In release v1 we have added the ability to choose other terminals including alacritty and kitty.
We would recommend you switch your terminal preference to alacritty after
installing netkit. To do this you can use the provided change terminal script:

```
> $NETKIT_HOME/change_terminal.sh
```

![Screenshot of Using change_terminal.sh script](./assets/change_term.png)
