import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ footerText }) => (
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
        {footerText}
      </small>
    </div>
  </footer>
)


Footer.propTypes = {
  footerText: PropTypes.string,
}

Footer.defaultProps = {
  footerText: ``,
}


export default Footer
