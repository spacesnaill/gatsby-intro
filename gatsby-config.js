module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog',
    description: 'A blog a build in Gatsby. Still under construction!',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
