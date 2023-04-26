import React from 'react'

import styled from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'
import { SliderControlContainer } from 'Styles/Controls'
import { media } from 'Utils/Media'
import { Colors, Images } from 'Themes'

export const ProfileGrid = styled(Grid)`
  ${media.lessThan('xs')`
    padding-left: 0 !important;
    padding-right: 0 !important;

    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 1.5rem;
      left: 0;
      width: 3rem;
      height: 3.4rem;
      background-image: linear-gradient(to left, transparent 25%, #1a1a3d 100%);
      z-index: 2;
    }
    &::after {
      content: '';
      position: absolute;
      top: 1.5rem;
      right: 0;
      width: 3rem;
      height: 3.4rem;
      background-image: linear-gradient(to right, transparent 25%, #1a1a3d 100%);
      z-index: 2;
    }
  `};
`

export const ProfileTabs = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  background-color: ${Colors.menuBlue};
  border-radius: 4px;
`

export const ScreenTitle = styled.div`
  display: block;
  color: ${Colors.white};
  font-size: 2rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1.8rem;
`

export const MultiMark = styled.div`
  width: 1.6rem;
  font-size: 0.85rem;
  height: 1.6rem;
  color: ${Colors.grey1};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2rem;
  border: 1.5px solid ${Colors.grey1};
  font-weight: 600;
  position: absolute;
  top: 1rem;
  right: 0.9rem;
`

export const TicketDrawContainer = styled.div`
  position: relative;
  padding: 1.5rem 1rem 1rem 1rem;
  border-radius: 4px;
  border: 2px solid ${Colors.grey1};
`

export const TicketDrawName = styled.span`
  color: ${props => props.color || Colors.purpleGrey};
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const TicketDrawDivider = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const TicketDivider = props => (
  <TicketDividerContainer>
    <HalfCircleLeft />
    <HalfCircleRight />
  </TicketDividerContainer>
)

export const TicketDividerContainer = styled.div`
  display: block;
  position: relative;
  background-image: url(${Images.dotBorder});
  background-repeat: repeat-x;
  background-position: center center;
  width: 100%;
  height: 2.5rem;
`

export const TimeIcon = styled.div`
  display: inline-block;
  height: 2.5rem;
  width: 2rem;
  margin-top: 0rem;
  margin-right: 1rem;
  background-image: url(${Images.icons.timeSand});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`

export const HalfCircleLeft = styled.div`
  background-color: ${Colors.menuBlue};
  border: 2px solid ${Colors.grey1};
  width: 0.7rem;
  height: 1.4rem;
  border-top-right-radius: 6rem;
  border-bottom-right-radius: 6rem;
  border-left: 0;
  position: absolute;
  left: -1.15rem;
  top: 0.6rem;
`

export const HalfCircleRight = styled.div`
  background-color: ${Colors.menuBlue};
  border: 2px solid ${Colors.grey1};
  width: 0.7rem;
  height: 1.4rem;
  border-top-left-radius: 6rem;
  border-bottom-left-radius: 6rem;
  border-right: 0;
  position: absolute;
  right: -1.15rem;
  top: 0.6rem;
`

export const ControlsContainer = styled(SliderControlContainer)``

export const MyTicketsSection = styled.div`
  margin-bottom: 2rem;
`
