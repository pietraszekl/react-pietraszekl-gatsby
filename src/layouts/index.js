import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import './normalize.css'
import './skeleton.css'
import './custom.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          favicon: 'test',
          name: 'description',
          content:
            'Lukasz Pietraszek is Poland based senior freelance UI & Front-end developer who specialises in responsive websites for B2C and B2B clients using HTML5, CSS, and JavaScript.',
        },
        {
          name: 'keywords',
          content:
            'javascript, front-end, progressive web apps, webdevelopment, clean code, pwa, react,  webpack, firebase, ecmascript6, es2015, node.js, git, SAP hybris',
        },
      ]}
    />
    <div>{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
