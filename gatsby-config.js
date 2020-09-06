require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: process.env.GRAPHCMS_API_FIELDNAME,
        url: process.env.GRAPHCMS_API_URL,
        typeName: process.env.GRAPHCMS_API_TYPENAME,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lukasz Pietraszek - Senior Frontend developer',
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
