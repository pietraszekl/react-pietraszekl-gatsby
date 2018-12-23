import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'

import '../assets/css/normalize.css'
import '../assets/css/skeleton.css'
import '../assets/css/custom.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            footer
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          {children}
        </div>

        <Footer footerText={data.site.siteMetadata.footer} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
