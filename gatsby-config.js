require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Lukasz Pietraszek`,
    description: `Freelance Frontend developer with proven track-record over six years in creating clean, accessible and user-friendly responsive websites. Self motivated and adaptable, independent minded, with a keen eye for detail. Experienced in working remotely and as lead developer.`,
    author: `@pietraszekl`,
    footer: `Built by Lukasz Pietraszek using React and Gatsby.`,
    aboutData: 'about.....',
  },
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
        refetchInterval: 60,
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
