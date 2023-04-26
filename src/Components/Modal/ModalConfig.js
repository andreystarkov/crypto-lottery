import { Images } from 'Themes'

const contentStyles = {
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  position: 'relative',
  left: 'auto',
  overflow: 'visible',
  right: 'auto',
  top: 'auto',
  bottom: 'auto'
}

const overlayStyles = {
  backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 66666
}

const closeButtonStyle = {
  cursor: 'pointer',
  position: 'absolute',
  fontSize: '0',
  width: '3rem',
  height: '3rem',
  background: `url(${Images.modal.close}) center center no-repeat`,
  right: '1rem',
  top: '1rem'
}

const titleStyle = {
  display: 'none'
}

const modalConfig = {
  contentStyles,
  closeButtonStyle,
  titleStyle,
  overlayStyles,
  hideOnOverlayClicked: true
}

export default modalConfig
