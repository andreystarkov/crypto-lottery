// import React from 'react'
import styled, { css } from 'styled-components'
import Color from 'color'

import { GradientButton } from 'Components'
import { Colors, Images, Gradients } from 'Themes'
import { media } from 'Utils/Media'

export const PaymentContainer = styled.div`
  position: relative;
  background-color: ${Colors.menuBlue};
  padding: 0 1.4rem 1.3rem 1.4rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
`

export const PaymentSection = styled.div`
  background-color: ${Colors.menuBlue};
  display: block;
  margin-top: ${props => props.marginTop || '0'};
  padding-bottom: ${props => props.paddingBottom || '1rem'};
  padding-top: ${props => props.paddingTop || '1rem'};
  margin-bottom: ${props => props.marginBottom || '0'};
  border-bottom: ${props => props.noBorder ? 'none' : `1px solid ${Color(Colors.purpleGrey).alpha(0.5)}`};
`

export const PaymentTitle = styled.span`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
  font-weight: 500;
  display: block;
  text-align: left;
`

export const PaymentDesc = styled.span`
  color: ${Colors.purpleGrey};
  font-size: 0.8rem;
  line-height: 1.2rem;
  display: block;
  text-align: left;
`

export const Label = styled.span`
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${Colors.lightGrey};
  text-align: ${props => props.right ? 'right' : 'left'}
`

export const Value = styled.span`
  color: ${props => props.cyan ? Colors.cyan1 : props.color || Colors.white};
  font-size: 1rem;
`

export const TotalLabel = styled.span`
  font-size: 1rem;
  color: ${Colors.white};
  text-align: left;
  text-transform: uppercase;
  font-weight: 600;
`

export const TotalValue = styled(TotalLabel)`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
`

export const SubtotalValue = styled(Value)`
  font-size: 1rem;
  font-weight: 600;
`

export const DiscountValue = styled(SubtotalValue)`
  color: ${Colors.cyan1};
  font-size: 0.75rem;
  font-style: normal;
  margin-top: 0.2rem;
`

export const Subscript = styled.span`
  display: block;
  font-size: 0.75rem;
  margin-top: ${props => props.cyan ? '0.35rem' : '0.2rem'};
  color: ${props => props.cyan ? Colors.cyan1 : Colors.purpleGrey};
`

export const PaymentButton = styled(GradientButton)`
  display: block;
  width: '100%';
  text-align: center;
  color: ${props => props.disabled ? 'rgba(255,255,255,0.5)' : props.color || Colors.white};
  font-size: 0.9rem;
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const DiscountValueFlag = styled.span`
  position: absolute;
  right: 0;
  top: 1rem;
  display: inline-block;
  padding: 0.4rem 0.45rem;
  color: ${Colors.navyBlue};
  font-size: 0.75rem;
  background-image: radial-gradient(#46ddb2 0%, #36d2dc 100%);
  background: url(${Images.cyanFlag}) left center no-repeat;
  background-size: cover;
`

export const PaymentFixedContainer = styled.div`
${media.lessThan('lg')`
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 3;
  display: block!important;

  ${props => props.collapsed && css`
    > ${PaymentContainer} {
      display: none;
    }
  `}
`}
`
export const PaymentPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: ${Gradients.blue};
  cursor: pointer;

  ${media.greaterThan('lg')`
    display: none;
  `}
`
export const PaymentPanelCol = styled.div`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  color: ${Colors.white};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-transform: uppercase;

  &:first-child, &:last-child {
    width: 5rem;
    text-align: center;
  }

  &:first-child {
    border-right: 0.125rem solid rgba(0, 0, 0, 0.12);
  }

  &:last-child {
    border-left: 0.125rem solid rgba(0, 0, 0, 0.12);
  }
`
export const PaymentPanelButton = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  > img {
    margin-right: 0.5rem;
  }
`
