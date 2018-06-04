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
  title: 'Endilie Yacop Sucipto',
  tagline: 'I love building things' ,
  url: 'https://endiliey.github.io',
  baseUrl: '/',
  cname: 'endiliey.com',
  noIndex: false,
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  headerLinks: [
    {doc: 'docusaurus/introduction', label: 'Docs'},
    {blog: true, label: 'Blog'},
    {href: "https://forum.endiliey.com", label: "Forum" },
    {href: "https://github.com/endiliey", label: "GitHub" }
  ],
  users,
  headerIcon: 'img/elogo.gif',
  footerIcon: 'img/elogo.gif',
  favicon: 'img/elogo.gif',
  algolia: {
    apiKey: '171b70d5e547d2101578da9a40c0d9f5',
    indexName: 'endiliey',
    algoliaOptions: {
      'facetFilters': ["language:en"]
    }
  },
  colors: {
    primaryColor: '#28ACE2',
    secondaryColor: '#1E81AA',
  },
  translationRecruitingLink: 'https://crowdin.com/project/endiliey',
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Endilie Yacop Sucipto',

  highlight: {
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js',
  ],

  stylesheets: [
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    '/css/code-blocks-buttons.css',
  ],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/elogo.gif',
  twitterImage: 'img/elogo.gif',
};

module.exports = siteConfig;
