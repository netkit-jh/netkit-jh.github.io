---
id: blog
title: Creating a Blog Post
sidebar_label: Writing Blog Posts
---

## Add a Markdown File

To add a blog post, you first need to create a markdown file in the `blog` directory with the naming convention *YYYY-MM-DD-BLOG-NAME.md* - where BLOG-NAME is an appropriate name related to the blog topic.

## Blog Header

Every blog file needs a header - this means it starts with a simple block of text with some configuration options.


```markdown
---
slug: slug
title: An Interesting Blog about Netkit
author: Your Name
author_title: Your Name
author_url: https://github.com/YOUR_USERNAME
author_image_url: https://avatars1.githubusercontent.com/u/USERID
tags: []
---

## Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In vehicula eros vel ultrices accumsan. Nunc nec lorem
leo. Nullam at dui mauris. Ut ex diam, mollis viverra nisl
a, semper dignissim diam.
```

The `slug` is the path to the blog post after `/blog` on the site. Make sure this is unique to this post!

The rest should be self-explanatory but for more details on options see [here](https://v2.docusaurus.io/docs/blog#header-options).

## Adding Content

Now you are ready to add the content of your blog! Have a look at the docusaurus docs for [markdown features](https://v2.docusaurus.io/docs/markdown-features) for hints on formatting your blog.

For information specific to docusaurus blogs, see [here](https://v2.docusaurus.io/docs/blog).
