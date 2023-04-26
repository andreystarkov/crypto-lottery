import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { Wrapper, Slider } from './MobileWrapStyles'

const SPEED = 1
const ID = shortid.generate()

let x = 0
let position = 0

const handleTouchStart = (e) => {
  const touch = e.changedTouches[0]
  x = touch.pageX
}

const handleTouchMove = (e) => {
  const slider = document.getElementById(ID)
  const touch = e.changedTouches[0]
  const newPosition = Math.round(position - ((x - touch.pageX) / SPEED))
  const min = slider.offsetWidth - slider.firstElementChild.offsetWidth

  if (newPosition < min || newPosition > 0) { return false }

  slider.style.transform = 'translateX(' + newPosition + 'px)'
  position = newPosition
}

const PureMobileWrap = ({ children, nosm }) => {
  return (
    <Wrapper nosm={nosm ? 1 : 0} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <Slider id={ID}>
        {children}
      </Slider>
    </Wrapper>
  )
}

PureMobileWrap.propTypes = {
  children: PropTypes.element.isRequired
}

export default PureMobileWrap
