module.exports = {
  siteMetadata: {
    title: 'Wow buddy!',
  },
  pathPrefix: '/resume',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
  ],
};
