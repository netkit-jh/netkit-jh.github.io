---
id: start
title: Working on the Netkit-JH Docs Site
sidebar_label: Introduction
---

## This Site

This docs website is built using the [Docusaurus](https://v2.docusaurus.io) project. This means all the hard work is done for us, so we can just focus on writing good docs :)

The site is currently hosted on GitHub Pages, at https://netkit-jh.github.io.

Adding a docs page or blog page is very easy - they are just written in markdown - see the docusaurus [reference](https://v2.docusaurus.io/docs/markdown-features/) for supported markdown features.

## Errors / Broken Links on this Website

If you find errors in terms of incorrect information in docs, or links that no longer point to the right place you can email [me](mailto:billy.bromell@warwick.ac.uk) or [open an issue](https://github.com/netkit-jh/netkit-jh.github.io/issues/new) on the Github Issue Tracker.

Alternatively if you are able to fix the issue yourself, we encourage you to do so and open a pull request!

## Setting up a Dev Environment

:::note
If you want to contribute without setting your own testing environment, it is still very easy to write a markdown document! If you [email me](mailto:billy.bromell@warwick.ac.uk) with a [doc](doc) or [blog](blog) post I can put it onto the website for you!
:::

To run a development version of the site, first [fork the repository](github.com/netkit-jh/netkit-jh.github.io/fork), clone your fork and install necessary packages:

```bash
$ git clone https://github.com/YOUR_USERNAME/netkit-jh.github.io.git # you can also clone with ssh
$ cd netkit-jh.github.io
$ yarn install
```

Then run with:
```bash
$ yarn run start
```

## Make Some Changes!!

Look at the guides for [adding docs](doc) and [creating a blog post](blog)!

## Merge Your Contributions

When you've made some changes and want them to be added to the production site, first make sure your repository is up to date with the original:

```bash
$ git pull upstream main
```

You can now commit your changes and push them to your fork:
```bash
$ git add docs/NEWDOC.md sidebars.js # add new / changed files
$ git commit -m "Added doc page on X topic"
$ git push -u origin main
```

Now open your fork in GitHub @ https://github.com/YOUR_USERNAME/netkit-jh.github.io/pulls

From here you can click on new pull request. Then make sure the left side shows base repository as `netkit-jh/netkit-jh.github.io` and the right side shows the head repository as `YOUR_USERNAME/netkit-jh.github.io`.

Give the pull request a suitable title and description of what changes were made. These will then be reviewed before hopefully being merged in!

## Publishing

:::caution
This is only possible if you have direct access to the repo as a contributor. If you are contributing through a pull request you will need a maintainer to publish the site after your pull request has been merged.
:::

To deploy the latest version of the site make sure the branch 'main' has the latest changes and is ready to be published, then run (replace <GIT_USER> with your GitHub username):

```bash
GIT_USER=<GIT_USER> \
  CURRENT_BRANCH=main \
  DEPLOYMENT_BRANCH=gh-pages \
  USE_SSH=true \
  yarn run deploy
```

It might be useful to add this as a function or alias in your shell's config file (e.g. ~/.bashrc or ~/.zshrc) :

```bash
function publish_netkit_docs(){
    GIT_USER=<GIT_USER> \
      CURRENT_BRANCH=main \
      DEPLOYMENT_BRANCH=gh-pages \
      USE_SSH=true \
      yarn run deploy
}
```

:::info Reminder
If a new version of Netkit-JH has just been released, remember to freeze the documentation! To do this run:

```bash
$ yarn run docusaurus docs:version VERSION
```

where VERSION is the release, e.g. `1.0.0`
:::
