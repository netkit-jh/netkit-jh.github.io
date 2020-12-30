---
id: kernelpatches
title: Creating Kernel Patches
sidebar_label: Creating Kernel Patches
---

## Creating Kernel Patches for Netkit-JH

Netkit uses a few kernel patches to apply changes to the kernel before being built. These kernel patches add additional functionality to the UML kernel to assist the running of Netkit. One example of a kernel patch is the addition of random MAC addresses assigned to network interfaces, created from the machine's name and name of the network interface, making MAC address collisions very rare.

To create kernel patches, firstly create two copies of the Linux kernel source code - using the same version that is used in the UML Debian package. Note, replace "5.9" with the kernel version that UML is currently using.

```
apt source linux-source-5.9
mv linux-source-5.9 a
cp a b
```

Now there is two folders with identical source code. Modify the source code within a with whatever changes are required. Once you have modified the code, run this command to produce a patch file:

```
diff -urpN a b > 93-tutorial-patch.patch
```

Once you have a .patch file, move it to `netkit-jh-build/kernel/patches/` and name it appropiately. Also add this file name to the `series` file.

Now you can build as normal. If all goes well, you should see something like this:

```
Applying patch /home/debian/netkit-jh-build/kernel/build/user-mode-linux-5.9um1/debian/patches/93-tutorial-patch.patch
patching file arch/um/os-Linux/umid.c
```
