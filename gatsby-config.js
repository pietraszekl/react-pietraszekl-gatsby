module.exports = {
  siteMetadata: {
    title: 'Lukasz Pietraszek - Senior Front-end developer',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-12509524-5',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lukasz Pietraszek - Front-end developer',
        short_name: 'Pietraszek',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#f47a20',
        display: 'fullscreen',
      },
    },
  ],
}
//'gatsby-plugin-react-helmet',
