import React from 'react'

import { Icon, Title, SubTitle, ModalContainer, ModalButton, CloseButton } from './ModalStyles'
import { configureAnimations } from 'Utils/Animations'

export default class Alert extends React.Component {
  render () {
    const { icon, title, message, animation, width, buttonText, height, after, disableClose, onButtonPress, duration, easing, delay, onClose, children, etc } = this.props
    return (
      <ModalContainer
        width={width}
        height={height}
        style={configureAnimations({
          duration: duration || 0.35,
          easing: easing || 'ease-in-out',
          delay
        })}
        className={`animated ${animation || 'zoomIn'}`}
        {...etc}>
        {!disableClose && <CloseButton onClick={onClose} />}
        {icon || title || message ? <div>
          <Icon name={icon || 'auth'} />
          <Title>{title}</Title>
          <SubTitle>{message}</SubTitle>
        </div> : null}
        {children}
        {buttonText && <ModalButton gradient='blue' onClick={onButtonPress}>{buttonText}</ModalButton>}
        {after}
      </ModalContainer>
    )
  }
}
