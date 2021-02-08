---
id: introduction
title: Introduction Lab
sidebar_label: Introduction Lab
---

## Introduction to Netkit - ABR Lab

For this lab we are going to create three machines `a`, `b`, and `r`, launch them using `lstart`, and finally analyse the contents of their `.startup` files. The resulting folder structure should look roughly as follows:

```
$ ls
a/  a.startup  b/  b.startup  lab.conf  lab.dep  r/  r.startup
```

The final network mapping is illustrated below.

![ABR lab network diagram](/img/abr_guide_network_diagram.jpg)

:::note
Please ensure Netkit is [installed](./) correctly prior to following these steps. This lab will **not** work without Netkit running on your machine.
:::

## Creating `a`, `b`, and `r`

Start by creating a folder for our lab, which we will name `abr`. You may want to do this within an `nklabs` directory, which can then be used for future labs. Change directory (`cd`) to this new `abr` folder.

```
$ mkdir -p nklabs/abr
$ cd nklabs/abr
```

Create `.startup` files for each machine, a `lab.conf` file, and a `lab.dep` file. The braces `{...}` are used here to allow you to create multiple files at once ([brace expansion](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html)). In other words, `{a, b}.txt` would result in `a.txt` and `b.txt`.

```
$ touch {a,b,r}.startup lab.{conf,dep}
```

Next, edit the contents of each file using your favourite text editor (e.g. `gedit`, `vim`, `nano`, etc.)

```
$ gedit {a,b,r}.startup lab.{conf,dep} &
```

We are going to put in the parameters from the network diagram into the various files. Understanding the contents of the files is left as an exercise for the reader. It is worth noting that you don't have to set a MAC address - Netkit will do this for you, however you can override this as shown below.

:::note
It is advisable to type out the contents of the files below manually rather than copy-pasting them.
:::

### `a.startup`

```
ifconfig eth0 hw ether 00:aa:aa:aa:aa:aa:aa
ifconfig eth0 172.28.97.42/29

route add default gw 172.28.97.41
```
### `b.startup`

```
ifconfig eth0 hw ether 00:bb:bb:bb:bb:bb:bb
ifconfig eth0 10.0.0.2/27

route add default gw 10.0.0.1
```

### `r.startup`

```
ifconfig eth1 hw ether 00:81:81:81:81:81:81
ifconfig eth1 172.28.97.41/29

ifconfig eth2 hw ether 00:82:82:82:82:82:82
ifconfig eth2 10.0.0.1/27
```

### `lab.conf`

```
a[0]=lanX

r[1]=lanX
r[2]=lanY

b[0]=lanY 
```

Before launching Netkit we need to create a folder for each machine.

```
$ mkdir a b r
```

Finally, we are ready to launch the machines. Run `lstart` and you should see terminal windows pop up for machines `a`, `b`, and `r`.

```
$ lstart
```

![Launching the terminals using lstart](/img/abr_guide_terminal_lstart.png)

To kill the machines, just run `lcrash` in your original terminal window.

```
$ lcrash
```

Voilà! You have successfully created your first Netkit lab.

🐸
