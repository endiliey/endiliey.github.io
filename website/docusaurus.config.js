const siteConfig = {
  title: 'Endilie Yacop Sucipto',
  tagline: 'I love building things' ,
  url: 'https://endiliey.github.io',
  baseUrl: '/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  headerLinks: [
    {doc: 'docusaurus/introduction', label: 'Docs'},
    {blog: true, label: 'Blog'},
    {href: "https://forum.endiliey.com", label: "Forum" },
    {href: "https://github.com/endiliey", label: "GitHub" }
  ],
  headerIcon: 'img/elogo.gif',
  favicon: 'img/elogo.gif',
  algolia: {
    apiKey: '171b70d5e547d2101578da9a40c0d9f5',
    indexName: 'endiliey',
    algoliaOptions: {
      'facetFilters': ["language:en"] // LANGUAGE will be dynamically changed in lib/core/Site.js
    }
  },
  plugins: [
    {
      name: '@docusaurus/plugin-content-docs',
      options: {
        path: '../docs',
        sidebarPath: require.resolve('./sidebars.json'),
      },
    },
    {
      name: '@docusaurus/plugin-content-blog',
      options: {
        path: './blog',
      },
    },
    {
      name: '@docusaurus/plugin-content-pages',
    },
    {
      name: '@docusaurus/plugin-sitemap',
    },
  ]
};

module.exports = siteConfig;
