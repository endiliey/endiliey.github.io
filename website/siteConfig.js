/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Autodesk (Internship)',
    image: '/img/autodesk.png',
    infoLink: 'https://www.autodesk.com',
    pinned: true,
  },
  {
    caption: 'Facebook (Internship)',
    image: '/img/facebook.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
  {
    caption: 'Docusaurus (Contributor)',
    image: '/img/docusaurus.svg',
    infoLink: 'https://github.com/facebook/Docusaurus',
    pinned: false,
  },
  {
    caption: 'react-draft-wysiwyg (Contributor)',
    image: '/img/react-draft-wysiwyg.png',
    infoLink: 'https://github.com/jpuri/react-draft-wysiwyg',
    pinned: false,
  },
  {
    caption: 'Open Genus (Contributor)',
    image: '/img/opengenus.png',
    infoLink: 'https://github.com/OpenGenus',
    pinned: false,
  },


];

const siteConfig = {
  title: 'Endilie Yacop Sucipto' /* title for your website */,
  tagline: 'I love building things' ,
  url: 'https://endiliey.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  cname: 'endiliey.com',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {blog: true, label: 'Blog'},
    {href: "https://forum.endiliey.com", label: "Forum" },
    {href: "https://github.com/endiliey", label: "GitHub" }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/elogo.gif',
  footerIcon: 'img/elogo.gif',
  favicon: 'img/elogo.gif',

  /* colors for website */
  colors: {
    primaryColor: '#28ACE2',
    secondaryColor: '#1E81AA',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Endilie Yacop Sucipto',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  stylesheets: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
