import React from 'react'
import styled from 'styled-components'

import { Colors, Images } from 'Themes'
import { media } from 'Utils/Media'

export const DiceIcon = (props) => <div {...props}><img src={Images.diceDivider} /></div>
export const DiceIconInner = (props) => <div {...props}><img src={Images.diceDividerInner} /></div>

export const Dice = styled(DiceIcon)`
  position: relative;
  display: inline-block;
  width: 2.8rem;
  height: 2.7rem;
  z-index: 2;
`

export const DividerWrapper = styled.div`
  position: relative;
  margin-top: ${props => props.marginTop || '5rem'};
  margin-bottom: ${props => props.marginBottom || '4rem'};
  display: block;
  text-align: center;
  height: 28px;

  ${media.lessThan('sm')`
    margin-top: 3.125rem;
    margin-bottom: 2.625rem;
  `}

  ${media.lessThan('xs')`
    margin-top: 2rem;
    margin-bottom: 1.85rem;
  `}
`

export const AbsoluteWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const DividerLine = styled.div`
  position: absolute;
  width: 48%;
  height: 1px;
  z-index: 0;
  opacity: 0.8;
  ${props => props.left ? `
    left: 0;
  ` : `
    right: 0;
  `}
  ${props => props.inner ? `
    top: 1.4rem;
    background-color: ${Colors.navyBlue};
    opacity: 1;
  ` : `
    top: 0.8rem;
    background-color: ${Colors.white};
    opacity: 0.05;
  `}
`
