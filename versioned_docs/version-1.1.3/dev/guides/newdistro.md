---
id: add_distro
title: Adding a New Linux Distribution to Netkit-JH
sidebar_label: Add a Distro
---

## Download this Repo

To get a local copy of this repo on the vm run:

```bash
$ git clone https://github.com/netkit-jh/netkit-jh-build.git
$ cd netkit-jh-build
$ git checkout multi-distro
```

:::note
The multi-distro feature is in progress, you will need to use the multi-distro branch.
There is currently no method of specifying a filesystem with a netkit lab, it just uses the one at $NETKIT_HOME/fs/netkit-fs. This guide is currently just for testing and experimenting.
:::

## Adding a Distro

To add a distro, first create a directory in the `distros` directory, with the name of the new distro. For example if I wanted to add Arch Linux, I might name the directory 'arch'.

Within this directory you will need:

- A directory called `filesystem-tweaks` (Optional)
- A file called `bootstrap.sh`
- A file called `pre-install-netkit-fs.sh`
- A file called `post-install-netkit-fs.sh`
- A file called `packages-list`
- A file called `enabled-services`
- A file called `disabled-services`
- A file called `distro.env`

If any of the files are missing, the build will not work. If the filesystem-tweaks directory is missing it will be created during the build process.

An easy way to start is by copying the [template](https://github.com/netkit-jh/netkit-jh-build/tree/multi-distro/fs/distros/template) directory.

:::note
Netkit-JH uses systemd in the current distros. It is recommended but not required that any distros you add also use systemd. If not you will probably need to make a lot more distro filesystem-tweaks!
:::

### Filesystem Tweaks

`filesystem-tweaks` allows you to create files which will end up in the final filesystem image, with `filesystem-tweaks/` representing `/`. For example, you might want to add a config file to `/etc/test.conf`, so you would place the file at `filesystem-tweaks/etc/test.conf`.

There are global and per-distro filesystem tweaks. To add a file for all distros, place the file within
`netkit-jh-build/fs/filesystem-tweaks/...`, or to add a file for a specific distro, place it within
`netkit-jh-build/fs/distros/DISTRO/filesystem-tweaks/...`. The global changes are applied first then the
distro specific changes (this will overwrite global tweaks).

### Bootstrap

The file `netkit-jh-build/fs/distros/DISTRO/bootstrap.sh` needs to be a script that will bootstrap (build the base filesystem) for the distro. This can use tools like pacstrap, debootstrap, multistrap etc.

`bootstrap.sh` will be called with the following arguments:

- $1 - the mount directory (the path to where you should install the base OS)
- $2 - the distro directory (the path to `netkit-jh-build/fs/distros/DISTRO`)

Configuration options can be placed directly in the script but it is recommended to place them in `distro.env`, and then source this in the bootstrap script. This means you can then easily change things such as distro release and mirrors from the `distro.env` file.

### Custom Install Scripts

The script `pre-install-netkit-fs.sh` is run before the [global install script](https://github.com/netkit-jh/netkit-jh-build/blob/multi-distro/fs/install-netkit-fs.sh) and `post-install-netkit-fs.sh` is run afterwards.

The main (shared) install script contains key installation steps including:

- installing packages from the packages-list
- copying the filesystem-tweaks to the filesystem
- setting up netkit specific services
- copying in kernel modules
- enabling and disabling systemd services

When deciding whether to put commands in the pre or the post install script, you should consider how the above operations would be affected by / would affect the commands.

These scripts are called with the following arguments:

- $1 - the work directory netkit-jh-build/fs (which contains global filesystem tweaks)
- $2 - the build directory (which contains the filesystem version file)
- $3 - the mount directory (where the filesystem is mounted)
- $4 - the kernel modules directory (where the built kernel modules are)
- $5 - the distro directory (the path to the distro files - netkit-jh/fs/distros/DISTRO)

### Package Selections

The file `packages-list` should contain a list of packages to be installed in the main install script.

When adding a package make sure the repository is enabled / added to the filesystem - it may be necessary to add to the `pre-install-netkit-fs.sh` script to add repos.
### Systemd Services

The file `enabled-services` should contain a list of services to enable, and `disabled-services` should contain a list of services to disable - quite self explanatory :)

You should consider disabling services that may be enabled by the packages you install - as we want to keep netkit machines lightweight, it is better to enable a service in a `.startup` file rather than have it enabled by default if its not going to be needed by the majority of netkit machines.

### Distro Config

`distro.env` MUST contain a variable INSTALL_COMMAND which should be set to the command to install a package on a distro.
During the main install script, the packages list will be looped through and for each package, it will run `$INSTALL_COMMAND packageN`.

You can also include other variables that may be useful in installation scripts - for example you might want to have variables for the distro release and mirror used in `bootstrap.sh`. This makes `distro.env` into a config file of sorts, meaning it is cleaner and easier to make changes as its all in one place.
## Build the New Filesystem

Build the filesystem as shown in the [docker](dockerbuild) or [vm](debianbuild) guide, depending on your development environment.
When finished, the filesystem should appear as a tarfile in the root of the netkit-jh-build directory, with a name similar to netkit-fs-0.1.8.tar.bz2 (but with a different version number).

You will need to specify the distro you want to build in the make command, otherwise it will default to debian. The DISTRO name must match the directory name created in 'distros'.

```bash
$ sudo make build-fs distro=DISTRO
```

or if using [docker](dockerbuild) to build, make sure to give the environment flag with the make arguments: `-e MAKE_ARGS="build-fs distro=DISTRO`.

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
