import React from 'react'

import ModalContent from '../ModalContent'

export default class Alert extends React.Component {
  render () {
    const { type, title, message, animation, ...etc } = this.props
    return (
      <div id='modal-content'>
        <ModalContent
          icon={type}
          title={title}
          message={message}
          duration={0.3}
          animation='zoomIn'
          {...etc} />
      </div>
    )
  }
}
