var aboutData = require('./src/data/about.js')
module.exports = {
  siteMetadata: {
    title: `Łukasz Pietraszek - Senior Front-end developer`,
    description: `Freelance Front-end developer from Poland with proven track-record over six years in accessible and user-friendly B2C and B2B responsive websites. Experienced in working with SAP Hybris.`,
    author: `@pietraszekl`,
    footer: `Built with React and Gatsby, running on Netlify`,
    aboutData: aboutData,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Serif SC'],
        },
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
        icon: 'src/assets/images/favicons/website-icon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
