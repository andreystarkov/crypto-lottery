import React from 'react'
import styled, { css } from 'styled-components'
import {
  TitleButton as TitleButtonDesktop,
  TicketHeader as TicketHeaderDesktop,
  TitleButtons as TitleButtonsDesktop,
  TicketTitle as TicketTitleDesktop,
  TicketContentContainer as TicketContentContainerDesktop
} from './TicketStyles'

import { Colors, Images, Gradients } from 'Themes'

export const TitleButton = styled(TitleButtonDesktop)`
  width: 2rem;
  height: 2rem;
  padding: 0;

  > img {
    margin: auto;
  }

  ${props =>
    props.selected &&
    css`
      border-radius: 50%;
      background-color: ${Colors.navyBlue};
    `};
`

export const TitleButtons = styled(TitleButtonsDesktop)`
  width: 4rem;

  &:first-child {
    justify-content: flex-start;
  }
`

export const TicketTitle = styled(TicketTitleDesktop)`
  font-size: 0.875rem;
`

export const TicketTitleActive = styled(TicketTitle)`
  color: ${Colors.lightBlue};
  cursor: pointer;
`

export const TicketHeader = styled(TicketHeaderDesktop)`
  margin: 0.5rem -0.4rem;
  margin-top: 0;
  width: auto;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
`

export const ExpandButton = props => {
  const { expanded } = props
  return (
    <TitleButton {...props} selected={!!expanded}>
      <img src={expanded ? Images.icons.expanded : Images.icons.expand} />
    </TitleButton>
  )
}

export const NumbersList = styled.div`
  display: flex;
  margin: 0 -0.25rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-bottom: 0.875rem;
`

export const NumberItem = styled.div`
  width: calc(100% / 6 - 0.5rem);
  margin: 0 0.25rem;
  line-height: 1;
  text-align: center;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${Colors.white};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.625rem 0;

  ${props =>
    props.selected &&
    css`
      background-image: ${Gradients.yellow};
    `};
`

export const TicketContentContainer = styled(TicketContentContainerDesktop)`
    padding: 0.5rem 0 0;
`
