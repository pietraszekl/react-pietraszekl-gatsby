import React from 'react'

class SocialLink extends React.Component {
  render() {
    const connect = this.props.connect

    return (
      <li className="contact-icons-item">
        <a href={connect.link}>
          <div className={'contact-icon icon ' + connect.icon} />
          <div className="sr-only">{connect.name}</div>
        </a>
      </li>
    )
  }
}

export default SocialLink
