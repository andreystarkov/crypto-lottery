import { spring } from 'react-router-transition'

export function mapStyles (styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  }
}

export function bounce (val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  })
}

export const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
}
