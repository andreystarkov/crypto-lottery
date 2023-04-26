import styled, { css } from 'styled-components'
import { Col, Row } from 'react-styled-flexboxgrid'
import { media } from 'Utils/Media'
import { Images } from 'Themes'

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

export const HeaderRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  ${props =>
    props.mobileShow &&
    css`
      ${media.greaterThan('xs')`
      display: none;
    `};
    `};
`

export const HeaderCol = styled(Col)`
  display: flex;
  align-items: center;

  ${props =>
    props.mobileHide &&
    css`
      ${media.lessThan('xs')`
      display: none;
    `};
    `};
`
