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

- ⚛️ **Built using React** - Extend or customize with React
- 📦 **Uses webpack** - Build an optimized bundle and use any CSS-in-JS solution you like
- ⚡️ **Lightning Fast** - Link prefetching, instant navigation and page views
- ✂️ **Easy** - Hot reloading out-of-the-box, automatic route-based code and data splitting! Create new routes by creating new Markdown or JSX files
- 💥 **Single-page Application** - Client-side navigations and easily add dynamic interactivity to your website (Client-side Rendering)
- 🎯 **SEO Friendly** - `index.html` files are statically generated for every possible path (Static Rendering)
- 😌 **Painless** - Painless project setup. First class support for documentation
- 📝 **MDX Based** - Write interactive components via JSX and React embedded in markdown
- ☁️ **GitHub pages friendly** - Publish to GitHub pages with one command!
- 🔌 **Pluggable** - Plugin system to extend basic functionality and do almost anything youw ant
- 🎨 **Themeable** - Theming system to customize how your website's appearance
- 🔍 **Search** - Make it easy for people to search what they need in your website.
- 🌎 **i18n** - Internationalize your website easily (_coming soon_)
- 💾 **Versioning** - Versioning support (_coming soon_)
- 🚀 **Many others** ....

## 💡 Getting Started

The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a Docusaurus site skeleton. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files.

```bash
npx @docusaurus/init@next init my-website classic
```

It will then prompt you for the `name` and the `template` for your Docusaurus site. We recommend the `classic` template so that you can get started quickly. The `classic` template comes with standard documentation, blog and custom pages features.

## Project Structure

Assuming you chose the classic template and named your site `my-website`, you will see the following files generated under a new directory `my-website/`:

```sh
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── package.json
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

## Running the Development Server

```bash
cd my-website
npm start
```

A browser window will open at http://localhost:3000.

Congratulations! You have just created your first Docusaurus site! Browse around the site to see what's available.

## Pages

In this section, we will learn about creating ad-hoc pages in Docusaurus using React. This is most useful for creating one-off standalone pages.

In the `src/pages` directory, create a file called `hello.js` with the following contents:

```js
import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Hello;
```

Once you save the file, the development server will automatically reload the changes. Now open http://localhost:3000/hello, you will see the new page you just created.

If you are familiar with other static site generators like Jekyll and Next, this routing approach will feel familiar to you. Any JavaScript file you create under `/src/pages/` directory will be automatically converted to a website page, following the `/src/pages/` directory hierarchy. For example:

- `/src/pages/index.js` → `<baseUrl>/`
- `/src/pages/test.js` → `<baseUrl>/test`
- `/src/pages/foo/test.js` → `<baseUrl>/foo/test`
- `/src/pages/foo/index.js` → `<baseUrl>/foo`

### Using React

React is used as the UI library to create pages. You can leverage on the expressibility of React to build rich web content.

## Docs

### Using Markdown

Next, let's touch on the powerful feature in Docusaurus - documentation.

Create a new file within the `docs` directory called `hello.md` with the following contents:

```md
---
title: Hello
---

I can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

### Markdown Syntax

**Bold** _italic_ `code` [Links](#url)

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.

- Hey
- Ho
- Let's Go
```

### Embedding React Components

Did you know that you can now write React components within your Markdown files? This is possible because of [MDX](https://mdxjs.com), which allows you to write JSX within your Markdown documents.

Now we'll add a third-party chart component into the Markdown file created above. Before that, kill your web server (<kbd>Cmd</kbd> + <kbd>C</kbd> or <kbd>Ctrl</kbd> + <kbd>C</kbd>) if it's running and install `react-trend` in your website directory.

```bash
npm install react-trend
```

Start the development server again and go to http://localhost:3000/docs/hello, you will see a new page created from the Markdown file.

Edit `docs/hello.md` and append the following:

```mdx
import Trend from 'react-trend';

_Here's a bar chart!_

<Trend
  smooth
  autoDraw
  autoDrawDuration={3000}
  autoDrawEasing="ease-out"
  data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
  gradient={['#00c6ff', '#F0F', '#FF0']}
  radius={10}
  strokeWidth={2}
  strokeLinecap={'butt'}
/>
```

Save the file and notice that the site is hot-reloaded with the edited content.

import Trend from 'react-trend';

_Here's a bar chart!_

<Trend
  smooth
  autoDraw
  autoDrawDuration={3000}
  autoDrawEasing="ease-out"
  data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
  gradient={['#00c6ff', '#F0F', '#FF0']}
  radius={10}
  strokeWidth={2}
  strokeLinecap={'butt'}
/>

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

Welcome to my blog. This blog is created with [**Docusaurus 2 alpha**](https://v2.docusaurus.io/) :wink:

<!--truncate -->

More content here ....
```

If you navigate to http://localhost:3000/blog. You can see that we have a blog list page. You can also navigate to http://localhost:3000/blog/2019/05/16/hello

## Theme

Users can install themes, that provide a set of components, e.g. `Navbar`, `Layout`, `Footer`. 

Users can use these components in their code by importing them using the `@theme` webpack alias:

```js
import Navbar from '@theme/Navbar';
```

The alias `@theme` can refer to a few directories, in the following priority:

1. A user's `website/theme` directory, which is a special directory that has the higher precedence.
1. A Docusaurus theme packages's `src/theme` directory.
1. Fallback components provided by Docusaurus core (usually not needed).

Given the following structure

```
├── node_modules
│   └── docusaurus-theme
│       └── theme
│           └── Navbar.js
└── src
    └── theme
      └── Navbar.js
```

`src/theme/Navbar.js` takes precedence whenever `@theme/Navbar` is imported. This behavior is called component swizzling. In iOS, method swizzling is the process of changing the implementation of an existing selector (method). In the context of a website, component swizzling will mean providing an alternative component that takes precedence over the theme-provided component.

The classic/default Docusaurus theme will provide most components out of the box, and users can swizzle the components by adding a component of the same name in the `themes` directory if they want to modify how it looks and behaves.

## Component Swizzling

You might notice that at first, we installed **`@docusaurus/preset-classic`**. Presets are collection of plugins and themes.

The basic overview of @docusaurus/preset-classic is this:

```md
preset-classic
├── theme-classic
│   ├── Navbar.js
│   ├── Layout.js
│   └── Footer.js
├── plugin-docs
│   ├── theme
│   │   ├── DocPage.js
│   │   └── DocItem.js
│   └── index.js
├── plugin-blog
└── plugin-pages
```

So how do we swizzle the theme component easily ?

First of all, make sure to kill your webserver (<kbd>Cmd</kbd> + <kbd>C</kbd> or <kbd>Ctrl</kbd> + <kbd>C</kbd>) and run this command to swizzle (override) the component.

```bash
yarn swizzle @docusaurus/theme-classic Footer
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

## Search

To add search bar with Algolia, just add algolia field in your themeConfig. Note that you will need algolia API key. You can use docusaurus 2's api key for testing purposes.

```js
// docusaurus.config.js
themeConfig: {
    // ....
    algolia: {
      apiKey: '47ecd3b21be71c5822571b9f59e52544',
      indexName: 'docusaurus-2',
      algoliaOptions: {},
    },
  },
```

## Build

To build the website, just run this command. After that, check your **build** folder.

```bash
yarn build
```

You can deploy it to GitHub pages, netlify, etc. It's completely up to you. The site is server rendered so it works without JavaScript too !

## Deploy

Docusaurus provide a very easy way of publishing to GitHub pages.
First, you need to modify your `docusaurus.config.js` and add the required params


| Name               | Description                                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationName` | The GitHub user or organization that owns the repository. If you are the owner, then it is your GitHub username. In the case of Docusaurus, that would be the "_facebook_" GitHub organization.                                                   |
| `projectName`      | The name of the GitHub repository for your project. For example, the source code for Docusaurus is hosted at https://github.com/facebook/docusaurus, so our project name in this case would be "docusaurus". |
| `url`              | Your website's URL. For projects hosted on GitHub pages, this will be "https://_username_.github.io" |
| `baseUrl`          | Base URL for your project. For projects hosted on GitHub pages, it follows the format "/_projectName_/". For https://github.com/facebook/docusaurus, `baseUrl` is `/docusaurus/`. |

Example:

```js
const siteConfig = {
  ...
  url: 'https://endiliey.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey'
  ...
}
```

3. Now you have to specify the git user as an environment variable and run the deploy script

| Name       | Description                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `GIT_USER` | The username for a GitHub account that has commit access to this repo. For your own repositories, this will usually be your own GitHub username. The specified `GIT_USER` must have push access to the repository specified in the combination of `organizationName` and `projectName`. |

Example:

```bash
GIT_USER=endiliey yarn run deploy
```

There are also two optional parameters that are set as environment variables:

| Name             | Description                                                                                                                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `USE_SSH`        | If this is set to `true`, then SSH is used instead of HTTPS for the connection to the GitHub repo. HTTPS is the default if this variable is not set.                                                                                                              |
| `CURRENT_BRANCH` | The branch that contains the latest docs changes that will be deployed. Usually, the branch will be `master`, but it could be any branch (default or otherwise) except for `gh-pages`. If nothing is set for this variable, then the current branch will be used. |

This website for example, use TravisCI to automate running this deploy script.

## To be continued ....

There are lot of other undocumented features that I am not able to write in detail on this super short post, like [theme, plugin and presets](https://github.com/facebook/Docusaurus/issues/1438). There are also some killer features that we haven't implemented in v2 (but already did in v1) like i18n, and versioning. 

Anyway, that's all for now. I hope you enjoyed this super short guide.

Chat with us on [**Discord**](https://discordapp.com/invite/docusaurus) :wink:.

## References
- Docusaurus 2 WIP site https://v2.docusaurus.io/
- Docusaurus 1 site https://docusaurus.io/
