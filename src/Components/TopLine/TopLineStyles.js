import React from 'react'
import styled from 'styled-components'

import { Grid } from 'react-styled-flexboxgrid'
import { Link } from 'react-router-dom'

import { Colors, Images } from 'Themes'
import { media } from 'Utils/Media'

export const TopLineWrapper = styled(Grid)`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${media.lessThan('xs')`
    font-size: 0.625rem;
  `} ${media.lessThan('sm')`
    font-size: 0.938rem;
  `};
`

export const TopLineBackrgound = styled.div`
  background-color: ${Colors.darkPaleBlue};
  position: relative;
  z-index: 1;
  animation-delay: 0.45s;
  animation-duration: 0.3s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
`

export const TopLink = styled(Link)`
  display: inline-block;
  text-align: center;
  font-weight: 600;
  color: ${Colors.white};
  text-transform: uppercase;
  font-size: 1rem;
  padding-bottom: 0.1rem;
  text-decoration: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  ${media.lessThan('md')`
    font-size: 0.938rem;
  `} ${media.lessThan('xs')`
    font-size: 0.625rem;
  `};
`

export const ArrowIcon = styled.img`
  height: 0.8rem;
`

export const ArrowIconWrapper = ({ className }) => (
  <div className={className}>
    <ArrowIcon src={Images.icons.arrowRightWhite} />
  </div>
)

export const Arrow = styled(ArrowIconWrapper)`
  margin-left: 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 0.3rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
