import React from 'react'
import styled from 'styled-components'
import { media } from 'Utils/Media'
import { Colors } from 'Themes'
import { RandomIcon } from 'Styles/TicketStyles'
import { RoundButton } from 'Components'

import l from 'Intl'

export const CustomSlider = styled.div`
  .slick-list {
    margin-right: -0.75rem;
    margin-left: -0.75rem;

    ${media.lessThan('xs')`
    margin-right: -1rem;
    margin-left: -1rem;

    .slick-slide {
      opacity: 0.5;
      transition: .4s ease-in-out all;
      overflow: hidden;
      user-select: none;


      &.slick-center {
       opacity: 1;

        .slider-button {
          opacity: 1;
          transform: scale(1);
        }
      }

      .slider-button {
        opacity: 0;
        transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) all;
        transform: scale(0);
      }
    }
  `};
  }
`

export const NumbersContainerWrapper = styled.div`
  padding-right: 0.75rem;
  padding-left: 0.75rem;

  ${media.lessThan('xs')`
    padding-right: 0;
    padding-left: 0;
`};
`

export const NumbersContainer = styled.div`
  width: 100%;
  background-color: ${Colors.menuBlue};
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  flex-direction: column;
`

export const DiceIcon = styled(RandomIcon)`
  display: inline-block !important;
  margin-right: 0.5rem;
`

export const Button = styled(RoundButton)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.purpleGrey};
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0);
  }

  ${media.lessThan('sm')`
  font-size: 0.875rem;
`};
`

const Nowrap = styled.span`
  display: inline-block;
  white-space: nowrap;
`

export const TryButton = ({ children, ...etc }) => (
  <Button border color={Colors.purpleGrey} {...etc}>
    <DiceIcon /> <Nowrap>{l.t('getTickets.try')}</Nowrap>
  </Button>
)
