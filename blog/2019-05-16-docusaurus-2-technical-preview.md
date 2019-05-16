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

Ok, you're ready for action. At this moment of writing, **`docusaurus init`** command hasn't been implemented for Docusaurus v2 yet, so we'll have to create files manually for now.

```bash
mkdir website
cd website
yarn init
```

Install dependencies
```bash
yarn add react react-dom @docusaurus/core@next @docusaurus/preset-classic@next
```

Then, add some scripts to `package.json`

```json
"scripts": {
  "docusaurus": "docusaurus",
  "start": "docusaurus start",
  "build": "docusaurus build"
},
```

Create `docusaurus.config.js` with the content below:

```js
const siteConfig = {
  title: "Docusaurus",
  tagline: "Super awesome site",
  url: "https://docusaurus.io",
  baseUrl: "/",
  projectName: "docusaurus",
  organizationName: "facebook",
  themeConfig: {
    headerLinks: [
      { url: "docs/hello", label: "Docs" },
      { url: "blog", label: "Blog" }
    ],
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Hello',
              to: 'docs/hello',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            }
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
  headerIcon: "",
  favicon: "",
  presets: [
    [
      "@docusaurus/preset-classic"
    ]
  ]
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

Let's begin by creating our homepage. 

We'll create **`pages/index.css`**

```css
/* pages/index.css */
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

And the javascript file itself **`pages/index.js`**

```js
// pages/index.js
import React from "react";
import Layout from "@theme/Layout";
import "./index.css";

function Home() {
  return (
    <Layout title="Hello">
      <div className="App">
        <header className="App-header">
          <img
            src={"https://forum.endiliey.com/static/media/logo.5d5d9eef.svg"}
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code>pages/index.js</code> and save to reload.
          </p>
        </header>
      </div>
    </Layout>
  );
}

export default Home;
```

Then, let's run the development server
```bash
yarn start # open up http://localhost:3000
```

![Hello World](/img/hello-world.PNG)

You should see a page like this. The key idea is to just write **`React`** component as pages. For example,if you create a new file **`pages/hello.js`**, it will be available as a on http://localhost:3000/hello. This is automated routing based on page files.

## Docs

Next, let's touch on the powerful documentation system in Docusaurus.
Before that, kill your webserver (<kbd>Cmd</kbd> + <kbd>C</kbd> or <kbd>Ctrl</kbd> + <kbd>C</kbd>) and let's install [react-trend](https://github.com/unsplash/react-trend)

```bash
yarn add react-trend
```

Create a a new file `docs/hello.md` with below content

```md
---
title: Hello
---

I can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

import Trend from 'react-trend';

<Trend
  smooth
  autoDraw
  autoDrawDuration={3000}
  autoDrawEasing="ease-out"
  data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
  gradient={['#00c6ff', '#F0F', '#FF0']}
  radius={10}
  strokeWidth={2}
  strokeLinecap={'butt'}
/>


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

You can always edit the markdown file, save it and it will be hot reloaded. Did you notice that we just **imported a React component and embed it inside our markdown** :wink: ?

Next, let's add a sidebar to it

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

Another feature is the blogging system. Once again, I remind you that this blog is created with Docusaurus 2.

Now, let's create a new markdown file `blog/2018-05-16-hello.md`

```md
---
title: Hello
author: Endilie Y
authorTitle: Maintainer of Docusaurus
authorURL: https://github.com/endiliey
authorImageURL: https://avatars1.githubusercontent.com/u/17883920?s=460&v=4
authorTwitter: endiliey
---

Welcome to my blog. This blog is created with [**Docusaurus 2 alpha**](https://docusaurus-2.netlify.com/) :wink:

<!--truncate -->

More content here ....
```

If you navigate to http://localhost:3000/blog. You can see that we have a blog list page. You can also navigate to http://localhost:3000/blog/2019/05/16/hello

![blog](/img/blog.PNG)

## Component Swizzling

You might notice that Docusaurus provide a default component such as the Navbar and Footer. Can we override it ? Yes, you can.

First of all, make sure to ill your webserver (<kbd>Cmd</kbd> + <kbd>C</kbd> or <kbd>Ctrl</kbd> + <kbd>C</kbd>) and run this command to swizzle (override) the component.

```bash
yarn docusaurus swizzle @docusaurus/theme-classic Footer
```

It will create a `themes/Footer` file in your project folder.
Try to edit that file, save it and you can see that we're customizing the Footer.

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

There are lot of other undocumented features that I am not able to write in this super short post, like [theme, plugin and presets](https://github.com/facebook/Docusaurus/issues/1438). There are also some killer features that we haven't implemented in v2 (but already did in v1) like i18n, and versioning. 

Anyway, that's all for now. I hope you enjoyed this super short guide.

Chat with us on [**Discord**](https://discordapp.com/invite/docusaurus) :wink:.

## References
- Docusaurus 2 WIP site https://docusaurus-2.netlify.com/
- Docusaurus 1 site https://docusaurus.io/
