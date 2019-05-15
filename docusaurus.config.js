const siteConfig = {
  title: 'Endilie Y',
  tagline: 'I love building things',
  url: 'https://endiliey.github.io',
  baseUrl: '/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  themeConfig: {
    headerLinks: [
      {href: 'https://forum.endiliey.com', label: 'Forum'},
      {href: 'https://github.com/endiliey', label: 'GitHub'},
    ],
    algolia: {
      apiKey: '171b70d5e547d2101578da9a40c0d9f5',
      indexName: 'endiliey',
      algoliaOptions: {
        facetFilters: ['language:en'], // LANGUAGE will be dynamically changed in lib/core/Site.js
      },
    },
  },
  headerIcon: 'img/endilie.gif',
  favicon: 'img/endilie.gif',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: './blog',
          routeBasePath: '/',
        },
      },
    ],
  ],
};

module.exports = siteConfig;
