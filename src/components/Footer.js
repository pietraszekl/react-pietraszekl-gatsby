import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      backgroundColor: '#23232c',
      color: '#c2c2ca',
      padding: '2rem 0',
      textAlign: 'center',
    }}
  >
    <div>
      <small
        style={{
          fontSize: '80%',
        }}
      >
        Built by Lukasz Pietraszek using React and Gatsby.
      </small>
    </div>
  </footer>
)

export default Footer
