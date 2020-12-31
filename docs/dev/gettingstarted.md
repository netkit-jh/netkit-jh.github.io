---
id: gettingstarted
title: Getting Started with Netkit Development
sidebar_label: Getting Started
---

## Making a Build Environment

When you make changes to the source code for the Netkit kernel, filesystem or code, you need to build them to produce the updated component. It is recommended to use an environment set up specifically for development rather than using your primary machine. This can be done using a [virtual machine](guides/debianbuild) or by running the build process in a [docker container](guides/dockerbuild).

## Where to Start

If you want to learn how develop and contribute towards Netkit, we recommend you start with something simple, such as changing the list of packages installed on the base filesystem. We have a guide for that [here](guides/fspackages).

## What Can I do to Help?

If you want to help with Netkit-JH development but don't know where to start, have a look at the [Issues](https://github.com/netkit-jh/netkit-jh-build/issues) on Github, and at the [Upcoming Features](featuresinprogress) - this contains ideas that we want to add to future versions of Netkit, but have not necessarily started working on.

## Contributing to Netkit-JH

We are currently hosting the source for Netkit-JH on [Github](https://github.com/netkit-jh).

Before making changes you want to contribute, you should fork the repository you want to work on
(most likely netkit-jh-build). You should make your changes on your fork, then create a pull request
to merge your changes into the active netkit-jh repository. For more info we will soon be adding
a guide on how to contribute!
