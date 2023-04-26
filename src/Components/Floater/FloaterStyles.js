import { Colors } from 'Themes'
const zIndex = 100
const color = Colors.white
const backgroundColor = Colors.grey1

export default {
  wrapper: {
    cursor: 'help',
    display: 'inline-flex',
    flexDirection: 'column',
    zIndex
  },
  wrapperPosition: {
    left: -1000,
    position: 'absolute',
    top: -1000,
    visibility: 'hidden'
  },
  floater: {
    display: 'inline-block',
    filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',
    maxWidth: '25rem',
    opacity: 0,
    position: 'relative',
    transition: 'opacity 0.3s',
    visibility: 'hidden',
    zIndex
  },
  floaterOpening: {
    opacity: 1,
    visibility: 'visible'
  },
  floaterWithAnimation: {
    opacity: 1,
    transition: 'opacity 0.3s, transform 0.2s',
    visibility: 'visible'
  },
  floaterWithComponent: {
    maxWidth: '100%'
  },
  floaterClosing: {
    opacity: 0,
    visibility: 'visible'
  },
  floaterCentered: {
    left: '50%',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  container: {
    backgroundColor,
    color,
    minHeight: 60,
    minWidth: 200,
    padding: '1rem 2.3rem',
    position: 'relative'
  },
  title: {
    color,
    fontSize: 18,
    marginBottom: 5,
    paddingBottom: 6,
    paddingRight: 18
  },
  content: {
    fontSize: 15
  },
  close: {
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: 0,
    color,
    fontSize: 0,
    height: 15,
    outline: 'none',
    padding: 10,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 15,
    WebkitAppearance: 'none'
  },
  footer: {
    borderTop: '1px solid #ccc',
    fontSize: 13,
    marginTop: 10,
    paddingTop: 5
  },
  arrow: {
    color: backgroundColor,
    display: 'inline-flex',
    length: 16,
    position: 'absolute',
    spread: 32
  }
}
