import React from 'react'

import { AnimatedSwitch } from 'react-router-transition'
import BounceTransition, { bounceTransition, mapStyles } from './BounceTransition'

import './BounceTransition.css'

const BounceSwitch = () => {
  return (
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className='route-wrapper'>
    </AnimatedSwitch>
  )
}

export {
  BounceTransition,
  BounceSwitch
}
