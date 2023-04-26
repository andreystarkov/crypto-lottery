import React from 'react'

import styled from 'styled-components'

import { Colors, Images } from 'Themes'

const MenuItem = styled.a`
  position: relative;
  display:  block;
  padding: 1rem 1.5rem;
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
  transition: all 0.65s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  overflow: hidden;
  &:before {
    border-radius: inherit;
    background-image: linear-gradient(-270deg, rgba(26, 26, 61, 0) 0%, #333363 100%);
    content: '';
    display: block;
    transition: all 0.55s cubic-bezier(0.6, 0.84, 0.98, 1.335);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: 0;
  }
  ${props => props.active ? `
    color: ${Colors.blue};
    border-left: 0.3rem solid ${Colors.blue};
    padding-left: 1.1rem;
  ` : `
    &:hover {
      &:before {
        opacity: 1;
        z-index: 0;
        transform: scale(1.7) rotateY(15deg) translateX(100px);
      }
    }
  `}
`

const menuStyles = {
  bmBurgerButton: {
    display: 'none'
  },
  bmBurgerBars: {},
  bmCrossButton: {
    display: 'none'
  },
  bmCross: {
    display: 'none'
  },
  bmMenu: {
    background: Colors.menuBlue,
    boxShadow: '1rem 0 11rem rgba(0, 0, 0, 0.5)',
    marginTop: '4.1rem'
  },
  bmMorphShape: {},
  bmItemList: {},
  bmOverlay: {}
}

const OpenIcon = () => <img src={Images.icons.menuOpen} />
const CloseIcon = () => <img src={Images.icons.cross} />

const Burger = ({ isOpen }) => (
  <div className='align-left'>
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
  MenuItem,
  menuStyles
}
