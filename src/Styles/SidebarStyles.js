import React from 'react'

import styled from 'styled-components'

import { Colors, Images } from 'Themes'

// import { getScrollTop } from 'Utils'

const MenuItem = styled.a`
  display:  block;
  padding: 1rem 0.8rem;
  border-width: 2px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  border-color: ${props => props.border ? Colors.yellow : 'transparent'};
  font-size: 0.9rem;
  background-image: linear-gradient(-270deg, rgba(26, 26, 61, 0) 0%, #333363 100%);
  background-size: 100% 5%;
  color: ${Colors.white};
  text-transform: uppercase;
  transition: background-size 0.35s cubic-bezier(0.865, -0.44, 0.94, 1.3), transform 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  ${props => props.active ? `
    color: ${Colors.blue}
  ` : ``}
  &:hover {
    transform: translateX(1rem);
    background-size: 100% 100%;
  }
`

const OpenIcon = () => <img src={Images.icons.menuOpen} align='middle'/>
const CloseIcon = () => <img src={Images.icons.cross} align='middle'/>

const Burger = ({ isOpen, ...etc }) => (
  <div className='align-left' {...etc}>
    <div className='inline-block mr2' style={{ width: '2rem' }}>
      {isOpen ? <CloseIcon /> : <OpenIcon />}
    </div>
  </div>
)

const Cross = () => (
  <div className='align-left'>
    {/* <img className='mr3' src={Images.icons.cross} />
    <Logo /> */}
  </div>
)

export {
  Burger,
  Cross,
  MenuItem
}
