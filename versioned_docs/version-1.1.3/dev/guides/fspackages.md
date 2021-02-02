---
id: fspackages
title: Installing Additional Packages
sidebar_label: Installing Additional Packages
---

## Download this Repo

To get a local copy of this repo on the vm run:

```bash
$ git clone https://github.com/netkit-jh/netkit-jh-build.git
$ cd netkit-jh-build
```

## Modify Package List

Edit the file *fs/packages-list*

We need to append the name of the package as it would be found in the package manager. For example if we were to install `nginx` normally we would run `apt install nginx`. Therefore we will add 'nginx' to the end of this file.

## Modify the Disabled Services List

If the package that you have added creates a systemd service which is enabled by default, it is often a good idea to disable it. If you don't need the service running by default in every Netkit VM, it is better that it is disabled in the filesystem image, and enabled in the machine's startup file.

To do this we can edit the *fs/disabled-services* file and add the name of the systemd service.

## Build the New Filesystem

Build the filesystem as shown in the [docker](dockerbuild) or [vm](debianbuild) guide, depending on your development environment.
When finished, the filesystem should appear as a tarfile in the root of the netkit-jh-build directory, with a name similar to netkit-fs-0.1.8.tar.bz2 (but with a different version number).

## Test the New Filesystem

Extract the filesystem to a different location to your main install (you don't want to override the filesystem in $NETKIT_HOME in case there are problems with the filesystem!).

```bash
$ mkdir nk_test
$ cd nk_test
$ tar -xvf netkit-fs-0.1.8.tar.bz2
$ ls -lha $NETKIT_HOME/fs # take note of where the symbolic link netkit-fs points to
$ ln -sfn netkit-ng/fs/netkit-fs-0.1.8 $NETKIT_HOME/fs/netkit-fs
```

Now you can run a Netkit lab and test if your software package has been installed on the filesystem.

After testing, you might want to revert to using the original netkit filesystem that was installed by default.
To do this simply change the symbolic link back with:

```bash
$ ln -sfn $NETKIT_HOME/fs/netkit-fs-0.1.8 $NETKIT_HOME/fs/netkit-fs
```

:::info
Replace the `$NETKIT_HOME/fs/netkit-fs-0.1.8` in the last command with the file which was originally pointed to by the symbolic link
:::
