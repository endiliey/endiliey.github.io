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
