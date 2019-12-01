const siteConfig = {
  title: 'Endilie Y',
  tagline: 'I love building things',
  url: 'https://endiliey.github.io',
  baseUrl: '/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  themeConfig: {
    authorImageURL: `https://avatars1.githubusercontent.com/u/17883920?s=400&u=0c9bcb0ad70e3ceb7eb10a8116f0a976c46624fa&v=4`,
    author: 'Endi',
    authorURL: 'https://github.com/endiliey',
    image: 'img/endilie.jpg',
    googleAnalytics: {
      trackingID: 'UA-93956387-1',
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
  },
  favicon: 'img/endilie.gif',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: './blog',
          routeBasePath: '/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Endilie Y.`
          },
        },
      },
    ],
  ],
};

module.exports = siteConfig;
