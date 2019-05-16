---
title: Docusaurus 2 - Technical Preview
description: Wanted to give a taste of the future Docusaurus ? Read this unofficial super short guide.
---

Wanted to give a taste of the future Docusaurus ? Read this unofficial super short guide.

<!--truncate-->

#### :warning: Disclaimers

This is a **very early and incomplete alpha release** of Docusaurus 2. We are making it available early to maximize community participation and feedback. Expect it to evolve a lot over the course of the alpha-beta period. If you are adventurous enough to be an early adopter, chat with us on [**Discord**](https://discordapp.com/invite/docusaurus) :wink:.

**You should use this if**
- :white_check_mark: You want to contribute to Docusaurus 2
- :white_check_mark: You want to give feedback to make sure it suits your needs
- :white_check_mark: You are curious about what's next as a Docusaurus user

**Do not use this if**
- :x: You are expecting a full production-ready solution (<small>try [Docusaurus 1](https://docusaurus.io/) instead</small>)
- :x: You are not willing to adapt with the breaking changes/ things not working properly as we improve it during alpha period

## Introduction

<img src="https://docusaurus.io/img/slash-introducing.svg" alt="Docusaurus"/>

Docusaurus is not just a documentation site generator. It is a **painless static site generator** with focus on *content-centric website like documentation and blog site*.

This website for example, is build with Docusaurus 2 alpha.

## Features

- ⚛️ **Built using React** Extend or customize with React.
- ⚡️ **Blazing Fast** Link prefetching, instant navigation and page views
- ✂️ **Easy** Hot Reloadable out-of-the-box, automatic code and data splitting!
- 💥 **Single-page application** Add dynamic interactivity to your website
- 🎯 **SEO Friendly** files are staticly generated (SSR)
- 😌 **Painless** Painless project setup. First class support for documentation
- 📝 **[MDX](https://github.com/mdx-js/mdx) Based.** Write markdown enhanced by the power of components.
- 🚀 **many others** ....

## 💡 Getting Started

Ok, you're ready for action. At this moment of writing, `docusaurus init` command hasn't been implemented for Docusaurus v2 yet, so we'll have to create files manually for now.

```bash
# create a docs directory
mkdir website
cd website
yarn init
```

Install dependencies
```bash
yarn add react react-dom @docusaurus/core@2.0.0-alpha.15 @docusaurus/preset-classic@2.0.0-alpha.15
```

Then, add some scripts to `package.json`

```json
"scripts": {
  "docusaurus": "docusaurus",
  "start": "docusaurus start",
  "build": "docusaurus build"
},
```

Create a `docusaurus.config.js`. Example:

```js
const siteConfig = {
  title: 'Docusaurus',
  tagline: 'Super awesome site',
  url: 'https://docusaurus.io',
  baseUrl: '/',
  projectName: 'docusaurus',
  organizationName: 'facebook',
  themeConfig: {
    headerLinks: [
      {url: 'docs/hello', label: 'Docs'},
      {url: 'blog', label: 'Blog'},
    ],
  },
  headerIcon: '',
  favicon: '',
  presets: [
    [
      '@docusaurus/preset-classic',
    ],
  ],
};

module.exports = siteConfig;
```

Let's create three directories. `pages`, `docs` and `blog`.

```md
├─ docs
├─ blog
├─ pages
└─ package.json
└─ docusaurus.config.js
```

## Pages

Then, let's create our homepage in `pages/index.js`

Example:
```js
import React from "react";
import Layout from "@theme/Layout";

function Home() {
  return (
    <Layout title="Page Not Found">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <h1>Hello World </h1>
      </div>
    </Layout>
  );
}

export default Home;
```

Then, let's run the development server
```bash
yarn start
```

You should see a page with `Hello World` content.

![Hello World](/img/hello-world.PNG)

Basically just write `React` here. 
If you create a new react javascript file in `pages/hello.js`, it will be available as a `/hello` route. This is file based routing.

## Docs

Next, let's create a docs file `docs/hello.md`

```md
---
title: Hello
---

I can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

## Markdown Syntax

**Bold** _italic_ `code` [Links](#url)

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

* Hey
* Ho
* Let's Go
```


If you go to http://localhost:3000/docs/hello you can see a new page created from that markdown file.

![Markdown](/img/markdown.PNG)

You can always edit the markdown file and it will be hot reloaded. Note that it is powered by MDX, so you can always embed JSX and import React component in markdown :wink:

Let's add a sidebar to it

Create a `sidebars.json` file
```json
{
  "docs": {
    "Getting Started": [
      "hello"
    ]
  }
}
```

And edit your `docusaurus.config.js` presets to this

```js
// .... other code
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.json")
        }
      }
    ]
  ]
```

You can see that there is a sidebar now on http://localhost:3000/docs/hello

![docs](/img/docs.PNG)

## Blog

Let's do something cooler. Kill the webserver with CTRL+C and install a new react component

```bash
yarn add react-trend
```

Now, let's create a new markdown file `blog/2018-05-16-hello.md`

```md
---
title: My Blog
---

This is my blog, I can import React component here

<!--truncate-->

import Trend from 'react-trend';

<Trend data={[0, 10, 5, 22, 3.6, 11]} />
```

If you navigate to http://localhost:3000/blog/2018/05/16/hello, you can see that we just created a new blog post and we can embed React component inside.

![blog](/img/blog.PNG)

## Component Swizzling

You might notice that Docusaurus provide a default component such as the Navbar and Footer. Can we override it ? Yes, you can.

Run this command to override the footer and customize it.

```bash
yarn docusaurus swizzle @docusaurus/theme-classic Footer
```

It will create a `themes/Footer` file in your project folder.
If you run the development server again and edit that component, you can see that we're customizing the Footer.

For example, we can just return null for the Footer.:
```js
import React from 'react';

function Footer() {
  return null;
}

export default Footer;
```

And you can see that the footer is no longer shown. It's not the default Facebook footer anymore! :smile:


## To be continued ....

Anyway, that's all for now. 
Chat with us on [**Discord**](https://discordapp.com/invite/docusaurus) :wink:.

## References
- Docusaurus 2 WIP site https://docusaurus-2.netlify.com/
- Docusaurus 1 site https://docusaurus.io/
