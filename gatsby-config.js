module.exports = {
  siteMetadata: {
    title: 'Lukasz Pietraszek - Senior UI developer',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
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
        icon: '/images/favicons/favicon.ico', // This path is relative to the root of the site.
        icons: [
          {
            src: `/images/favicons/apple-touch-icon-144x144.png`,
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: `/images/favicons/apple-touch-icon-200x200.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `/images/favicons/apple-touch-icon-200x200.png`,
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: `/images/favicons/apple-touch-icon-200x200.png`,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ],
}
//'gatsby-plugin-react-helmet',
