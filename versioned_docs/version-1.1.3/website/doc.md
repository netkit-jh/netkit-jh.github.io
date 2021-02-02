---
id: doc
title: Writing Docs
sidebar_label: Writing Docs
---

## Add a Markdown File

To add a page to the docs create a markdown file in the `docs` directory (or a subdirectory of `docs` if necessary).

Docs should use `.md` as the extension unless you are using [MDX](https://v2.docusaurus.io/docs/markdown-features/#embedding-react-components-with-mdx) - which for a normal doc is usually not the case. You can always rename docs later if you decide to add MDX.

## Document Header

Every doc file needs a header - this means it starts with a simple block of text with some configuration options.

This example should be sufficient for most docs, but a full list of options can be found [here](https://v2.docusaurus.io/docs/markdown-features/#markdown-headers).

```markdown
---
id: uniquestring
title: My Helpful Document
sidebar_label: Helpful Doc
---

## Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In vehicula eros vel ultrices accumsan. Nunc nec lorem
leo. Nullam at dui mauris. Ut ex diam, mollis viverra nisl
a, semper dignissim diam.
```

The `id` needs to be something unique - check that the id you plan to use hasn't already been used by looking in `sidebars.js`.

The `title` is displayed as the first heading on a docs page.

The `sidebar_label` is what is shown in the navigation sidebar for the doc. It is a good idea to have something short here, and have the `title` as something slightly longer if needed.

## Adding to The Sidebar

Usually you will want your document to be accessible through the navigation sidebar. If you look at `sidebars.js` you will see the current categories. Try to put your doc into one of these categories as this keeps the sidebar clean. If you think a new category is needed, take a look at the sidebar [docs](https://v2.docusaurus.io/docs/sidebar/) for guidance.

## Adding Content

Now you are ready to add the content of your new doc page! Have a look at the docusaurus docs for [markdown features](https://v2.docusaurus.io/docs/markdown-features) for hints on formatting the doc.

[This](https://v2.docusaurus.io/docs/static-assets) page might also be useful if you plan to use static assets such as images in your doc.

## Versioning

We are using versioning for this site as Netkit-JH is being frequently updated, and lots of docs are specific to a Netkit-JH release.

Normally you should just add to the `docs` directory as this is the `Next` version - the default version that will be shown to site visitors.

Anything that is put in the `docs` directory will be frozen as the next release, when that point is reached. For example, if the latest release is `1.0.0` and the next release is `1.0.1`, then everything currently in `docs` will be frozen as version `1.0.1`, when the release happens.

If you want to make a doc specific to a particular release then place it in `versioned_docs/VERSION`. 

:::info Example:

Say the latest release was `1.0.0` and the next release is `1.0.1`.

You are writing a doc that is relevant to `1.0.0`, but you know it will no longer apply in `1.0.1`.

You should put this doc in the `versioned_docs/version-1.0.0/` directory.
:::
